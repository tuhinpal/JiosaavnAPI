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
http://localhost:8080/search?query=makhna
```

***Result:***

```json
[
    {
        "id": "hotE59KE",
        "title": "Makhna",
        "image": "http://c.saavncdn.com/622/Drive-Hindi-2019-20191014095305-500x500.jpg",
        "album": "Drive",
        "url": "https://www.jiosaavn.com/song/makhna/GAcfdEEJfHY",
        "type": "song",
        "description": "Drive · Tanishk Bagchi, Asees Kaur, Yasser Desai",
        "ctr": 8637,
        "position": 1,
        "more_info": {
            "vcode": "010910441009482",
            "vlink": "https://jiotunepreview.jio.com/content/Converted/010910440962648.mp3",
            "primary_artists": "Tanishk Bagchi, Asees Kaur, Yasser Desai",
            "singers": "Tanishk Bagchi, Asees Kaur, Yasser Desai",
            "video_available": false,
            "language": "hindi"
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
http://localhost:8080/song?id=hotE59KE
```
*The Song Id is Previously Fetched <tt>ID</tt> Object from Search.*

***Result:***
```json
{
    "id": "hotE59KE",
    "type": "",
    "song": "Makhna",
    "album": "Drive",
    "year": "2019",
    "music": "Tanishk Bagchi",
    "music_id": "1595701",
    "primary_artists": "Tanishk Bagchi, Asees Kaur, Yasser Desai",
    "primary_artists_id": "1595701, 706985, 2135738",
    "featured_artists": "",
    "featured_artists_id": "",
    "singers": "Tanishk Bagchi, Asees Kaur, Yasser Desai",
    "starring": "Sushant Singh Rajput, Jacqueline Fernandez",
    "image": "https://c.saavncdn.com/622/Drive-Hindi-2019-20191014095305-500x500.jpg",
    "label": "Zee Music Co.",
    "albumid": "17488163",
    "language": "hindi",
    "origin": "none",
    "play_count": 73818421,
    "copyright_text": "© 2019 Zee Music Company",
    "320kbps": "true",
    "explicit_content": 0,
    "has_lyrics": "true",
    "lyrics_snippet": "main chhod aayi gharbaar mera",
    "encrypted_media_url": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyGqo+5MrAN0crj0vrJ4LG1QUl4LRZ1OTzPHArN3M6vWMEJ5wtvfCrxBw7tS9a8Gtq",
    "encrypted_media_path": "NMKyboFo/FiKibPkFFfY50RNDB52X6LHqriY+0xcZsNMl2dstkWwpIvUdTM1PLl8",
    "media_url": "https://aac.saavncdn.com/622/c1a0e6f34388089a4c52c1026bee0831_160.mp4",
    "perma_url": "https://www.jiosaavn.com/song/makhna/GAcfdEEJfHY",
    "album_url": "https://www.jiosaavn.com/album/drive/SG7tqyDYavU_",
    "duration": "183",
    "rights": {
        "code": 0,
        "reason": "",
        "cacheable": true,
        "delete_cached_object": false
    },
    "cache_state": "false",
    "starred": "false",
    "artistMap": {
        "Tanishk Bagchi": "1595701",
        "Asees Kaur": "706985",
        "Yasser Desai": "2135738",
        "Ozil Dalal": "675439",
        "Sushant Singh Rajput": "2180329",
        "Jacqueline Fernandez": "480380"
    },
    "release_date": "2019-10-10",
    "vcode": "010910441009482",
    "vlink": "https://jiotunepreview.jio.com/content/Converted/010910440962648.mp3",
    "label_url": "/label/zee-music-co.-albums/06cepoPTlhU_"
}
```

*<tt>media_url</tt> Object Contains Download Link.*<br>
*Replace 160 with 320 or 96 in <tt>media_url</tt> to get different Qualities.*<br>
*Note <tt>albumid</tt> Object if you want to fetch it's album also.*<br>

**3. Lyrics (Method - Get):**

***Request:***

```html
http://[Your-Url]/lyrics?id={Song-ID}

//example
http://localhost:8080/lyrics?id=hotE59KE
```
*The Song Id is Previously Fetched <tt>ID</tt> Object from Search.*

***Result:***
```json
{
    "lyrics": "ye bhee naa jaane  vo bhee naa jaane<br>nainon ke rang naina jaane<br>mila jo sang tera<br>uda patang mera hawa mein hoke malang<br><br>jag kee koyi reet naa jaani<br>main to bas teri hui deewaanii<br>mila jo sang tera<br>uda patang mera hawa mein hoke malang<br><br>main chhod aayi gharbaar mera<br>oh makhnas  ve makhnas<br>ab too hee hai sansar mera<br>oh makhnas  ve makhnas<br><br>ye paagal sa hai pyaar mera<br>oh makhnas  ve makhnas<br>main chhod aayi gharbaar mera<br>oh  makhnas<br><br>main chhod aayi gharbaar mera<br>oh makhnas  ve makhnas<br>ab too hee hai sansar mera<br>oh makhnas  ve makhnas<br><br>ye paagal sa hai pyaar mera<br>oh makhnas  ve makhnas<br>main chhod aayi gharbaar mera<br>oh  makhnas<br><br>makhnas ve<br><br>teri hee baathen ho  subah see raaten ho<br>jab se mila hai too dil ko mila sukun<br>tu hi raah meri  tu hi safar he<br>teri bahon mein ab mera ghar hai<br><br>chain naa jaane  dard na jaane<br>dil to bas dil ko pahachaane<br>mila jo sang tera<br>uda patang mera hawa mein hoke malang<br><br>main chhod aayi gharbaar mera<br>oh makhnas  ve makhnas<br>ab too hee hai sansar mera<br>oh makhnas  ve makhnas<br><br>ye paagal sa hai pyaar mera<br>oh makhnas  ve makhnas<br>main chhod aayi gharbaar mera<br>oh  makhnas<br><br>chhod aayi gharbaar mera<br>too hee hai sansar mera<br>ye paagal sa hai pyaar mera<br>main chhod aayi gharbaar mera<br><br>main chhod aayi gharbaar mera  ਓ  ਮੱਖਣਾਂ<br>tu hi he sansar meraa  ਮੱਖਣਾਂ<br>ye paagal sa hai pyaar mera  ਓ  ਮੱਖਣਾਂ<br>main chhod aayi gharbaar mera  ਓ  ਮੱਖਣਾਂ"
}
```

**4. Search Album (Method - Get):**

***Request:***

```html
http://[Your-Url]/albumsearch?query={Album-Name}

//example
http://localhost:8080/albumsearch?query=drive
```


***Result:***
```json
[
    {
        "id": "17488163",
        "title": "Drive",
        "image": "http://c.saavncdn.com/622/Drive-Hindi-2019-20191014095305-500x500.jpg",
        "music": "Tanishk Bagchi, Amartya Bobo Rahut, Javed-Mohsin",
        "url": "https://www.jiosaavn.com/album/drive/SG7tqyDYavU_",
        "type": "album",
        "description": "2019 · Hindi Film · Tanishk Bagchi, Amartya Bobo Rahut, Javed-Mohsin",
        "ctr": 1411,
        "position": 1,
        "more_info": {
            "year": "2019",
            "is_movie": "1",
            "language": "hindi",
            "song_pids": "lD6HFeIu, tW3mNpl7, hotE59KE, vbThKk4U, GT1fVFAe"
        }
    },
   ##More
]
```

*<tt>song_pids</tt> Object Contains all song id(s) of the Album.*<br>
*<tt>id</tt> Object is the Album ID.*<br>


**5. Fetch detail of an Album (Method - Get):**

***Request:***

```html
http://[Your-Url]/album?id={Album-Id}

//example
http://localhost:8080/album?id=17488163
```


*The Album Id is Previously Fetched <tt>ID</tt> Object from <tt>albumsearch</tt>.*


***Result:***
```json
{
    "title": "Drive",
    "name": "Drive",
    "year": "2019",
    "release_date": "2019-10-10",
    "primary_artists": "Tanishk Bagchi, Amartya Bobo Rahut, Javed-Mohsin",
    "primary_artists_id": "1595701, 7044553, 5393135",
    "albumid": "17488163",
    "perma_url": "https://www.jiosaavn.com/album/drive/SG7tqyDYavU_",
    "image": "https://c.saavncdn.com/622/Drive-Hindi-2019-20191014095305-500x500.jpg",
    "songs": [
        {
            "id": "hotE59KE",
            "type": "",
            "song": "Makhna",
            "album": "Drive",
            "year": "2019",
            "music": "Tanishk Bagchi",
            "music_id": "1595701",
            "primary_artists": "Tanishk Bagchi, Asees Kaur, Yasser Desai",
            "primary_artists_id": "1595701, 706985, 2135738",
            "featured_artists": "",
            "featured_artists_id": "",
            "singers": "Tanishk Bagchi, Asees Kaur, Yasser Desai",
            "starring": "Sushant Singh Rajput, Jacqueline Fernandez",
            "image": "https://c.saavncdn.com/622/Drive-Hindi-2019-20191014095305-500x500.jpg",
            "label": "Zee Music Co.",
            "albumid": "17488163",
            "language": "hindi",
            "origin": "album",
            "play_count": "73819268",
            "copyright_text": "© 2019 Zee Music Company",
            "320kbps": "true",
            "explicit_content": 0,
            "has_lyrics": "true",
            "lyrics_snippet": "main chhod aayi gharbaar mera",
            "encrypted_media_url": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyGqo+5MrAN0crj0vrJ4LG1QUl4LRZ1OTzPHArN3M6vWMEJ5wtvfCrxBw7tS9a8Gtq",
            "encrypted_media_path": "NMKyboFo/FiKibPkFFfY50RNDB52X6LHqriY+0xcZsNMl2dstkWwpIvUdTM1PLl8",
            "media_url": "https://aac.saavncdn.com/622/c1a0e6f34388089a4c52c1026bee0831_160.mp4",
            "perma_url": "https://www.jiosaavn.com/song/makhna/GAcfdEEJfHY",
            "album_url": "https://www.jiosaavn.com/album/drive/SG7tqyDYavU_",
            "duration": "183",
            "rights": {
                "code": 0,
                "reason": "",
                "cacheable": true,
                "delete_cached_object": false
            },
 ##More
 }
```
*<tt>media_url</tt> Object Contains Download Link.*<br>
*Replace 160 with 320 or 96 in <tt>media_url</tt> to get different Qualities.*

**6. Get Song from Jiosaavn Link (Method - Get):**

***Request:***

```html
http://[Your-Url]/link?query={Jiosaavn-Link}

//example
http://localhost:8080/link?query=https://www.jiosaavn.com/song/makhna/GAcfdEEJfHY
```

***Result:***

*Same as Method 2*



<br><br>
### Deploy Your Own:<br>

**NodeJS & Npm are Required.**<br><br>
*For Development 👇*

```bash
apt install npm
apt install nodejs

git clone https://github.com/cachecleanerjeet/jiosaavnapi.git
cd jiosaavnapi
npm install
node index.js
```

*Running always in a server 👇*

```bash
apt install npm
apt install nodejs

git clone https://github.com/cachecleanerjeet/jiosaavnapi.git
cd jiosaavnapi
npm install
npm install forever -g
forever start index.js
```


[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/cachecleanerjeet/jiosaavnapi/tree/master)<br>


### Error handling :
*If something error happens you will get this result in json 👇*

```bash
{"result": "false"}
```

<br>

### Using this API:
- [Musicder](https://github.com/cachecleanerjeet/Musicder "Musicder")
- [Musicder Bot](https://t.me/musicder_bot "Musicder Bot")

*Impliment this API on your Project  & send a message [here](https://t.me/t_projects "here") to get featured in this section.*
<br>
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


