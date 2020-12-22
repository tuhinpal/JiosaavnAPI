const axios = require('axios')

module.exports = async(req, res) => {
    const reqId = req.query.id
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Cache-Control", "s-maxage=300, stale-while-revalidate")
    res.setHeader("Open-Source", "https://github.com/cachecleanerjeet/JiosaavnAPI")
    res.setHeader("Made-By", "Tuhin Kanti Pal, https://github.com/cachecleanerjeet")

    axios({
        method: 'get',
        url: `https://www.jiosaavn.com/api.php?__call=content.getAlbumDetails&_format=json&cc=in&_marker=0%3F_marker=0&albumid=${reqId}`
    })

    .then(async function(response) {
            var data = JSON.parse(JSON.stringify(response.data).replace(/&amp;/gi, "&").replace(/&copy;/gi, "©").replace(/150x150/gi, "500x500"))
            var songdata = data.songs

            var albumRes = []
            for (i = 0; i < songdata.length; i++) {
                albumRes.push({
                    id: songdata[i].id,
                    song: songdata[i].song,
                    album: songdata[i].album,
                    year: songdata[i].year,
                    primary_artists: songdata[i].primary_artists,
                    singers: songdata[i].singers,
                    image: songdata[i].image,
                    label: songdata[i].label,
                    albumid: songdata[i].albumid,
                    language: songdata[i].language,
                    copyright_text: songdata[i].copyright_text,
                    has_lyrics: songdata[i].has_lyrics,
                    media_url: songdata[i].media_preview_url.replace('preview.saavncdn.com', 'aac.saavncdn.com').replace('_96_p', '_160'),
                    other_qualities: [{
                            quality: "96_KBPS",
                            url: songdata[i].media_preview_url.replace('preview.saavncdn.com', 'aac.saavncdn.com').replace('_96_p', '_96')
                        },
                        {
                            quality: "160_KBPS",
                            url: songdata[i].media_preview_url.replace('preview.saavncdn.com', 'aac.saavncdn.com').replace('_96_p', '_160')
                        },
                        {
                            quality: "320_KBPS",
                            url: songdata[i].media_preview_url.replace('preview.saavncdn.com', 'aac.saavncdn.com').replace('_96_p', '_320')
                        }
                    ],
                    perma_url: songdata[i].perma_url,
                    album_url: songdata[i].album_url,
                    release_date: songdata[i].release_date
                })
            }

            res.json({
                albumid: data.albumid,
                title: data.title,
                name: data.name,
                year: data.year,
                primary_artists: data.primary_artists,
                image: data.image,
                songs: albumRes,
                perma_url: data.perma_url,
                release_date: data.release_date,
                repo_url: "https://github.com/cachecleanerjeet/JiosaavnAPI"
            })
        })
        .catch(function(error) {
            res.json(error)
        })
}