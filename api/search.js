const axios = require('axios')

module.exports = async(req, res) => {
    var reqQuery = req.query.query
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Cache-Control", "s-maxage=300, stale-while-revalidate")
    res.setHeader("Open-Source", "https://github.com/cachecleanerjeet/JiosaavnAPI")
    res.setHeader("Made-By", "Tuhin Kanti Pal, https://github.com/cachecleanerjeet")

    axios({
        method: 'get',
        url: `https://www.jiosaavn.com/api.php?__call=autocomplete.get&query=${reqQuery}&_format=json&_marker=0&ctx=wap6dot0`
    })

    .then(async function(response) {
            var data = JSON.parse(JSON.stringify(response.data).replace(/&amp;/gi, "&").replace(/&copy;/gi, "©").replace(/50x50/gi, "500x500")).songs.data
            var songRes = []
            for (i = 0; i < data.length; i++) {
                songRes.push({
                    id: data[i].id,
                    title: data[i].title,
                    image: data[i].image,
                    album: data[i].album,
                    description: data[i].description,
                    position: data[i].position,
                    more_info: {
                        vlink: data[i].more_info.vlink,
                        primary_artists: data[i].more_info.primary_artists,
                        singers: data[i].more_info.singers,
                        language: data[i].more_info.language,
                    },
                    url: data[i].url
                })
            }
            if (JSON.stringify(songRes) !== "[]") {
                res.json(songRes)
            } else {
                res.json({ result: "false" })
            }
        })
        .catch(function(error) {
            res.json({ result: "false" })
        })
}
