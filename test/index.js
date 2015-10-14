var test = require('.././');

require('domready')(function () {
	console.log('dom ready, starting test.');

	var body = document.getElementsByTagName("body")[0];

	var container = document.createElement('div');
	container.setAttribute("id", "container");
	body.appendChild(container);

    test.init(function() {
    	console.log('Library loaded');

		var player = test.createPlayer("container", {
	        width: '720',
	        height: '405',
	        videoId: 'M7lc1UVf-VE',
	        playerVars: { 'autoplay': 0, 'controls': 1 },
	        events: {
	            'onReady': playerReady,
	            'onStateChange': onPlayerStateChange
	        }
	    });
    });


    function playerReady() {
    	test.play();
    }

    function onPlayerStateChange(event) {
    	console.log('Player State Changed: ', event);
    }

});
