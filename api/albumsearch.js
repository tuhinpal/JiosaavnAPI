const axios = require('axios')

module.exports = async(req, res) => {
    const reqQuery = req.query.query
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Cache-Control", "s-maxage=300, stale-while-revalidate")
    res.setHeader("Open-Source", "https://github.com/cachecleanerjeet/JiosaavnAPI")
    res.setHeader("Made-By", "Tuhin Kanti Pal, https://github.com/cachecleanerjeet")

    axios({
        method: 'get',
        url: `https://www.jiosaavn.com/api.php?__call=autocomplete.get&_format=json&_marker=0&cc=in&includeMetaTags=1&query=${reqQuery}`
    })

    .then(async function(response) {
            var data = JSON.parse(JSON.stringify(response.data).replace(/&amp;/gi, "&").replace(/&copy;/gi, "©").replace(/50x50/gi, "500x500")).albums.data
            var albumRes = []
            for (i = 0; i < data.length; i++) {
                albumRes.push({
                    id: data[i].id,
                    title: data[i].title,
                    image: data[i].image,
                    music: data[i].music,
                    description: data[i].description,
                    position: data[i].position,
                    more_info: {
                        year: data[i].more_info.year,
                        song_pids: data[i].more_info.song_pids,
                        language: data[i].more_info.language,
                    },
                    url: data[i].url
                })
            }
            if (JSON.stringify(albumRes) !== "[]") {
                res.json(albumRes)
            } else {
                res.json({ result: "false" })
            }
        })
        .catch(function(error) {
            res.json({ result: "false" })
        })
}