## youtube-iframe-player

[![Gitter](https://badges.gitter.im/Join Chat.svg)](https://gitter.im/miguelmoraleda/youtube-iframe-player?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Node.js module for load and control a Youtube iFrame Video Player. This module doesn't expose all functions of the original player. To call any of this functions, please use the player reference present in this module.


## Install

```bash
$ npm install youtube-iframe-player
```

## Usage

```js
var youtube = require('youtube-iframe-player');

youtube.init(function() {
    console.log('API Loaded');

    var youtubePlayer = youtube.createPlayer('container', {
        width: '720',
        height: '405',
        videoId: 'M7lc1UVf-VE',
        playerVars: { 'autoplay': 0, 'controls': 1 },
        events: {
            'onReady': playerReady,
            'onStateChange': onPlayerStateChange
        }
    });

    function playerReady(event) {
        youtubePlayer.playVideo();
    }

    function onPlayerStateChange(event) {
        console.log('Player State Changed: ', event);
    }
});
```

Calling original player functions. See https://developers.google.com/youtube/iframe_api_reference

```js
youtubePlayer.player.loadPlaylist(...);
```

## Testing before using?

```js
git clone https://github.com/miguelmoraleda/youtube-iframe-player
cd youtube-iframe-player
npm install
npm install -g beefy
beefy test/index.js 9000
```

## Dependency

* [require-sdk](https://github.com/azer/require-sdk)

## Contributing

If you want to add any of the original functions to this module, please feel free to send a pull request

## Release History

* 0.1.0 Initial work. Beta Version
* 1.0.0 First Stable Release
* 1.0.1 Fix to avoid redirect.
