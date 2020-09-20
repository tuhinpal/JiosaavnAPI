## Lightweight Unofficial JioSaavn API Written in Javascript

### Features
- Free.
- Lightweight.
- Search Song.
- Direct Download Link.
- Lyrics Support.
- Open Sourced.

### API Endpoints:

**1. Search a Song (Method - Get):**

***Request:***

```html
http://[Your-Url]/search?query={song-name}

//example
http://localhost:8080/search?query=tomake+chai
```

***Result:***

```json
[
  {
    "id": "64m9f3mF",
    "title": "Tomake Chai",
    "image": "http://c.saavncdn.com/107/Gangster-Bengali-2016-20200617113007-50x50.jpg",
    "album": "Gangster",
    "url": "https://www.jiosaavn.com/song/tomake-chai/RlwGCBIDWnU",
    "type": "song",
    "description": "Gangster · Arijit Singh",
    "ctr": 453,
    "position": 1,
    "more_info": {
      "vcode": "010910090246873",
      "vlink": "https://jiotunepreview.jio.com/content/Converted/010910090259515.mp3",
      "primary_artists": "Arijit Singh",
      "singers": "Arijit Singh",
      "video_available": false,
      "language": "bengali"
    }
  },
## More
]
```

*The <tt>ID</tt> Object is the Song ID to get the song detail & Lyrics*

**2. Song Detail & Download Link (Method - Get):**

***Request:***

```html
http://[Your-Url]/song?id={Song-Id}

//example
http://localhost:8080/song?id=64m9f3mF
```
*The Song Id is Previously Fetched <tt>ID</tt> Object from Search.*

***Result:***
```json
{
  "id": "64m9f3mF",
  "type": "",
  "song": "Tomake Chai",
  "album": "Gangster",
  "year": "2016",
  "music": "Arindom Chatterjee",
  "music_id": "3000685",
  "primary_artists": "Arijit Singh",
  "primary_artists_id": "459320",
  "featured_artists": "",
  "featured_artists_id": "",
  "singers": "Arijit Singh",
  "starring": "",
  "image": "https://c.saavncdn.com/107/Gangster-Bengali-2016-20200617113007-150x150.jpg",
  "label": "Shree Venkatesh Films Pvt. Ltd.",
  "albumid": "14848152",
  "language": "bengali",
  "origin": "none",
  "play_count": 1898618,
  "copyright_text": "© 2016 Shree Venkatesh Films Pvt. Ltd.",
  "320kbps": "true",
  "explicit_content": 0,
  "has_lyrics": "false",
  "lyrics_snippet": null,
  "encrypted_media_url": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyU6kS5cTgAOZwc1Myr6lsvU0yBVpz2a3wlEJMTPNwn3PC37XLIJdYPxw7tS9a8Gtq",
  "encrypted_media_path": "NMKyboFo/FgVX0zn5FiA7QIk4lZ82WrnX11fX2llODH70a++ApvauCPwKpPF2hEB",
  "media_url": "https://aac.saavncdn.com/107/6470b05128857a909f67285afb56b4d8_96.mp4",
  "perma_url": "https://www.jiosaavn.com/song/tomake-chai/RlwGCBIDWnU",
  "album_url": "https://www.jiosaavn.com/album/gangster/F61FH7vf1,8_",
  "duration": "253",
  "rights": {
    "code": 0,
    "reason": "",
    "cacheable": true,
    "delete_cached_object": false
  },
  "cache_state": "false",
  "starred": "false",
  "artistMap": {
    "Arindom Chatterjee": "3000685",
    "Arijit Singh": "459320",
    "Prasen": "532403"
  },
  "release_date": "2016-09-04",
  "vcode": "010910090246873",
  "vlink": "https://jiotunepreview.jio.com/content/Converted/010910090259515.mp3",
  "label_url": "/label/shree-venkatesh-films-pvt.-ltd.-albums/9ijex,8qafE_"
}
```

*<tt>media_url</tt> Object Contains Download Link.*<br>
*Replace 96 with 320 or 160 in <tt>media_url</tt> to get different Qualities.*

**3. Lyrics (Method - Get):**

***Request:***

```html
http://[Your-Url]/lyrics?id={Song-ID}

//example
http://localhost:8080/lyrics?id=PIzj75J8
```
*The Song Id is Previously Fetched <tt>ID</tt> Object from Search.*

***Result:***
```json
{"lyrics":"ye ruhadaariyaan<br>tujhi se, judi he meri<br>ye daavedaariyaan<br>mujhi pe, likhi he teri<br><br>rihana ke to jaisaa tu figure rakhdi<br>te phulan ke jaisaa tu jigar rakhdi<br>bhula ke jag sara he nigahen tak di<br><br>te biba nachdi<br>te biba nachdi<br>roke naa ruk di<br>te biba nachdi<br><br>voh, main raataan saariyaan<br>guzaru asar main teri<br>main chhad duniya<br>ve rahanaa nazar main teri<br>main munda sidhaa-saadhaa<br>te hegi kudi tu jet di<br>tu aave te chori chori kolo tak di<br>nishane maare tu bullate ankh di<br><br>te biba nachdi<br>he biba nachdi<br>roke naa ruk di<br>je biba nachdi<br><br>ishq se rubaru hoon<br>teri main hoobahoo hoon<br>kuch bhi lage naa mushkil, mahiya<br>ye raaten mulakaato ke hi naam kardi<br>tarifon ko jahaan kii hoon salaam kardi<br>naa hatati he nazar mujhe jo tak di<br><br>te biba nachdi<br>je biba nachdi<br>roke naa ruk di<br>je biba nachdi<br>je biba nachdi"}
```

<br><br>
### Deploy Your Own:<br>

**NodeJS & Npm are Required.**<br>

```bash
apt install nodejs & npm

git clone https://github.com/cachecleanerjeet/jiosaavnapi.git
cd jiosaavnapi
npm install
node index.js
```

*Heroku Coming Soon*

<br><br>
## Star this Repo if you Liked it ⭐⭐⭐

<br><br>
<p align="center"> <b>My Website & Social</b></p>
<br>
<p align="center">
 
 <a href="https://tu.hin.life">
    <img alt="Website" width="30px" src="https://firebasestorage.googleapis.com/v0/b/webtuhin.appspot.com/o/githubstatic%2Fwebsite.svg?alt=media&token=5c3ea7e0-d4f7-4566-b78a-bdee6c65f03e" />
  </a>  
..
<a href="https://fb.me/jeeetpaul">
    <img alt="Facebook" width="30px" src="https://cdn.jsdelivr.net/npm/simple-icons@3.2.0/icons/facebook.svg" />
  </a>  
..
  <a href="https://www.instagram.com/jeeetpaul">
    <img alt="Instagram" width="30px" src="https://cdn.jsdelivr.net/npm/simple-icons@3.2.0/icons/instagram.svg" />
  </a>
..
  <a href="https://www.youtube.com/channel/UCa4FMtLpYcOBtjKOZgzTFNA">
    <img alt="YouTube" width="30px" src="https://cdn.jsdelivr.net/npm/simple-icons@3.2.0/icons/youtube.svg" />
  </a>
..
  <a href="https://blog.iamtuhin.ga">
    <img alt="Blogger" width="30px" src="https://cdn.jsdelivr.net/npm/simple-icons@3.2.0/icons/blogger.svg" />
  </a>
  
</p>


