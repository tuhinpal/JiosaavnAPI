const axios = require('axios')

module.exports = async(req, res) => {
    var reqQuery = req.query.query
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Cache-Control", "s-maxage=300, stale-while-revalidate")
    res.setHeader("Open-Source", "https://github.com/cachecleanerjeet/JiosaavnAPI")
    res.setHeader("Made-By", "Tuhin Kanti Pal, https://github.com/cachecleanerjeet")

    axios({
        method: 'get',
        url: `https://www.jiosaavn.com/api.php?p=1&q=${reqQuery.replace(/ /gi, '+')}&_format=json&_marker=0&api_version=4&ctx=wap6dot0&n=10&__call=search.getResults`
    })

    .then(async function(response) {
            var data = JSON.parse(JSON.stringify(response.data.results).replace(/&amp;/gi, "&").replace(/&copy;/gi, "©").replace(/150x150/gi, "500x500"))
            var songRes = []
            for (i = 0; i < data.length; i++) {
                var primary_artists = allArtists(data[i].more_info.artistMap.primary_artists)
                songRes.push({
                    id: data[i].id,
                    title: data[i].title,
                    image: data[i].image,
                    album: data[i].more_info.album,
                    description: `${data[i].more_info.album} · ${primary_artists}`,
                    position: i + 1,
                    more_info: {
                        vlink: data[i].more_info.vlink,
                        primary_artists,
                        singers: primary_artists,
                        language: data[i].language,
                        album_id: data[i].more_info.album_id
                    },
                    url: data[i].perma_url
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

function allArtists(array) {
    let artistdata = ''
    array.forEach((object, i) => {
        if (i == 0) {
            artistdata += object.name
        } else {
            artistdata += `, ${object.name}`
        }
    });
    return artistdata
}