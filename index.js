//Made by Tuhin
//Visit https://tu.hin.life
//Contact me@mailtuhin.ml

const express = require('express');
const request = require('request');
const app = express()
const port = 8080

//base urls
const searchbase = "https://www.jiosaavn.com/api.php?__call=autocomplete.get&_format=json&_marker=0&cc=in&includeMetaTags=1&query=";
const songbase = "https://www.jiosaavn.com/api.php?__call=song.getDetails&cc=in&_marker=0%3F_marker%3D0&_format=json&pids=";
const lyricsbase = "https://www.jiosaavn.com/api.php?__call=lyrics.getLyrics&ctx=web6dot0&api_version=4&_format=json&_marker=0%3F_marker%3D0&lyrics_id=";

app.get('/', (req, res) => {
    res.send(`Server is Running<br><br>Api Documentation <a href="https://github.com/cachecleanerjeet/jiosaavnapi#readme">Here</a>.<br><br>An Open Source Project by <a href="https://tu.hin.life">Tuhin</a>.`)
})

// search a song
app.get('/search', (req, res) => {
    let query = req.query.query;
    var options = {
        'method': 'GET',
        'url': (searchbase) + (query)
    };
    request(options, function(error, response) {
        if (error) throw new Error(error);
        var searchraw = (response.body);
        var imgq = searchraw.replace(/50x50/gi, "500x500");
        var result = JSON.parse(imgq);
        var songresult = result.songs.data;
        var output = JSON.stringify(songresult);
        res.send(output);
    });
    res.status(200);
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Content-Type', 'application/json');
    res.header('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.header('Open-Source', 'https://github.com/cachecleanerjeet/jiosaavnapi');
})

// fetch detail of a song
app.get('/song', (req, res) => {
    let id = req.query.id;
    var options = {
        'method': 'GET',
        'url': (songbase) + (id)
    };
    request(options, function(error, response) {
        if (error) throw new Error(error);
        var songraw = (response.body);
        var replaceid = songraw.replace(id, 'tuhin');
        var replacemediaurltxt = replaceid.replace('media_preview_url', 'media_url');
        var replacemediaurl = replacemediaurltxt.replace('preview.saavncdn.com', 'aac.saavncdn.com');
        var replaceqs = replacemediaurl.replace('_96_p', '_160');
        var imgq = replaceqs.replace('150x150', '500x500');
        var result = JSON.parse(imgq);
        var songresult = result.tuhin;
        var output = JSON.stringify(songresult);
        res.send(output);
    });
    res.status(200);
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Content-Type', 'application/json');
    res.header('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.header('Open-Source', 'https://github.com/cachecleanerjeet/jiosaavnapi');
})

// Fetch lyrics of a song
app.get('/lyrics', (req, res) => {
    let id = req.query.id;
    var options = {
        'method': 'GET',
        'url': (lyricsbase) + (id)
    };
    request(options, function(error, response) {
        if (error) throw new Error(error);
        var lyricsraw = (response.body);
        var result = JSON.parse(lyricsraw);
        var lyricsresult = result.lyrics;
        var format = `{"lyrics":"` + (lyricsresult) + `"}`;
        res.send(format);
    });
    res.status(200);
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Content-Type', 'application/json');
    res.header('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.header('Open-Source', 'https://github.com/cachecleanerjeet/jiosaavnapi');
})

app.listen(port, () => {
    console.log('Listening on Port 8080')
})