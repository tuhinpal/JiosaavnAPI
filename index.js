const express = require('express');
const request = require('request');
const app = express()

//base urls
const searchbase = "https://www.jiosaavn.com/api.php?__call=autocomplete.get&_format=json&_marker=0&cc=in&includeMetaTags=1&query=";
const songbase = "https://www.jiosaavn.com/api.php?__call=song.getDetails&cc=in&_marker=0%3F_marker%3D0&_format=json&pids=";
const lyricsbase = "https://www.jiosaavn.com/api.php?__call=lyrics.getLyrics&ctx=web6dot0&api_version=4&_format=json&_marker=0%3F_marker%3D0&lyrics_id=";
const albumbase = "https://www.jiosaavn.com/api.php?__call=content.getAlbumDetails&_format=json&cc=in&_marker=0%3F_marker%3D0&albumid="

const headers = {
    'Access-Control-Allow-Origin': '*',
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    'Content-Type': 'application/json; charset=utf-8',
    'Open-Source': 'https://github.com/cachecleanerjeet/jiosaavnapi'
}

app.get('/', (req, res) => {
    res.send(`Server is Running<br><br>Api Documentation <a href="https://github.com/cachecleanerjeet/jiosaavnapi#readme">Here</a>.<br><br>An Open Source Project by <a href="https://tu.hin.life">Tuhin</a>.`)
})

// search a song
app.get('/search', (req, res) => {
    let query = req.query.query;
    res.status(200)
    res.header(headers)
    var options = {
        'method': 'GET',
        'url': (searchbase) + (query)
    };
    request(options, function(error, response) {
        if (error) {
            res.send(`{"result": "false"}`);
        } else {
            var searchraw = (response.body);
            var imgq = searchraw.replace(/50x50/gi, "500x500");
            var ampr = imgq.replace(/&amp;/gi, "&");
            var result = JSON.parse(ampr);
            var check = result.songs;
            //error handling
            if (check === undefined) {
                res.send(`{"result": "false"}`);
            } else {
                var songresult = result.songs.data;
                var output = JSON.stringify(songresult);
                res.send(output);
            }
        }
    });
})

// fetch detail of a song
app.get('/song', (req, res) => {
    let id = req.query.id;
    res.status(200)
    res.header(headers)
    var options = {
        'method': 'GET',
        'url': (songbase) + (id)
    };
    request(options, function(error, response) {
        if (error) {
            res.send(`{"result": "false"}`);
        } else {
            var songraw = (response.body);
            //error handling
            if ((songraw.includes("[]")) == true) {
                res.send(`{"result": "false"}`);
            } else {
                var replaceid = songraw.replace(id, 'tuhin');
                var replacemediaurltxt = replaceid.replace('media_preview_url', 'media_url');
                var replacemediaurl = replacemediaurltxt.replace('preview.saavncdn.com', 'aac.saavncdn.com');
                var replaceqs = replacemediaurl.replace('_96_p', '_160');
                var imgq = replaceqs.replace('150x150', '500x500');
                var ampr = imgq.replace(/&amp;/gi, "&");
                var copr = ampr.replace(/&copy;/gi, "©");
                var result = JSON.parse(copr);
                var songresult = result.tuhin;
                var output = JSON.stringify(songresult);
                res.send(output);
            }
        }
    })
})

// Fetch lyrics of a song
app.get('/lyrics', (req, res) => {
    let id = req.query.id
    res.status(200)
    res.header(headers)
    var options = {
        'method': 'GET',
        'url': (lyricsbase) + (id)
    };
    request(options, function(error, response) {
        if (error) {
            res.send(`{"result": "false"}`);
        } else {
            var lyricsraw = (response.body);
            var result = JSON.parse(lyricsraw);
            var lyricsresult = result.lyrics;
            //error handling
            if (lyricsresult === undefined) {
                res.send(`{"result": "false"}`);
            } else {
                var quoter = lyricsresult.replace(/"/gi, "'");
                var format = `{"lyrics":"` + (quoter) + `"}`;
                res.send(format);
            }
        }
    })
})

// search an album
app.get('/albumsearch', (req, res) => {
    let query = req.query.query
    res.status(200)
    res.header(headers)
    var options = {
        'method': 'GET',
        'url': (searchbase) + (query)
    };
    request(options, function(error, response) {
        if (error) {
            res.send(`{"result": "false"}`);
        } else {
            var searchraw = (response.body);
            var imgq = searchraw.replace(/50x50/gi, "500x500");
            var ampr = imgq.replace(/&amp;/gi, "&");
            var result = JSON.parse(ampr);
            var check = result.albums;
            //error handling
            if (check === undefined) {
                res.send(`{"result": "false"}`);
            } else {
                var albumresult = result.albums.data;
                var output = JSON.stringify(albumresult);
                res.send(output);
            }
        }
    })
})

// fetch an album
app.get('/album', (req, res) => {
    let id = req.query.id
    res.status(200)
    res.header(headers)
    var options = {
        'method': 'GET',
        'url': (albumbase) + (id)
    };
    request(options, function(error, response) {
        if (error) {
            res.send(`{"result": "false"}`);
        } else {
            var albumraw = (response.body);
            //error handling
            if ((albumraw.includes(`{"error":{"code":"INPUT_INVALID","msg":"Empty strings are not allowed."}}`)) == true) {
                res.send(`{"result": "false"}`);
            } else {
                var replacemediaurltxt = albumraw.replace(/media_preview_url/gi, 'media_url');
                var replacemediaurl = replacemediaurltxt.replace(/preview.saavncdn.com/gi, 'aac.saavncdn.com');
                var replaceqs = replacemediaurl.replace(/_96_p/gi, '_160');
                var imgq = replaceqs.replace(/150x150/gi, '500x500');
                var ampr = imgq.replace(/&amp;/gi, "&");
                var copr = ampr.replace(/&copy;/gi, "©");
                var result = JSON.parse(copr);
                var output = JSON.stringify(result);
                res.send(output);
            }
        }
    })
})

// getting song from Jiosaavn link
app.get('/link', (req, res) => {
    let query = req.query.query
    res.status(200)
    res.header(headers)
    var getsid = {
        'method': 'GET',
        'url': query
    };
    request(getsid, function(error, response) {
        if (error) {
            res.send(`{"result": "false"}`);
        } else {
            if (response.body.split('"song":{"type":"')[1] == undefined) {
                res.send(`{"result": "false"}`);
            } else {
                try {
                    var sid = response.body.split('"song":{"type":"')[1].split('","image":')[0].split('"')[8];
                } catch (err) {
                    var sid = response.body.split('"params":{"pid":"')[1].split('"')[0];
                }
                var options = {
                    'method': 'GET',
                    'url': (songbase) + (sid)
                };
                request(options, function(error, response) {
                    if (error) throw new Error(error);
                    var songraw = (response.body);
                    var replaceid = songraw.replace(sid, 'tuhin');
                    var replacemediaurltxt = replaceid.replace('media_preview_url', 'media_url');
                    var replacemediaurl = replacemediaurltxt.replace('preview.saavncdn.com', 'aac.saavncdn.com');
                    var replaceqs = replacemediaurl.replace('_96_p', '_160');
                    var imgq = replaceqs.replace('150x150', '500x500');
                    var ampr = imgq.replace(/&amp;/gi, "&");
                    var copr = ampr.replace(/&copy;/gi, "©");
                    var result = JSON.parse(copr);
                    var songresult = result.tuhin;
                    var output = JSON.stringify(songresult);
                    res.send(output);
                })
            }
        }
    })
})

var PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log('Listening in Port ' + PORT)
})