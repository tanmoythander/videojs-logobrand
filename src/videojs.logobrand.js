/*
 * Video.js logobrand
 * https://github.com/tanmoythander/videojs-logobrand.git
 *
 * Copyright (c) 2019 Tanmoy Thander @ QuanticDynamics
 * Licensed under the MIT license
 */

(function(vjs) {

	// define some reasonable defaults
	var defaults = {
		image: 'https://www.videojs.com/img/logo.png',
		destination: 'https://www.videojs.com/',
		width: 'auto',
		height: 'auto',
		autoHide: true,
		opacity: 1
	};
	// plugin initializer
	var logobrand = function(options) {
		var settings = videojs.mergeOptions(defaults, options);
		var player = this;

		// link element
		var link = document.createElement("a");
		link.id = "vjs-logobrand-image-destination";
		link.href = settings.destination;
		link.target = "_blank";

		// image element
		var image = document.createElement('img');
		image.id = settings.autoHide?
			'vjs-logobrand-image-autoHide':
			'vjs-logobrand-image';
		image.src = settings.image;
		// image style config
		image.style.height = settings.height;
		image.style.width = settings.width;
		image.style.opacity = settings.opacity;
		image.style.position = settings.position;
		image.style.top = settings.top;
		image.style.bottom = settings.bottom;
		image.style.left = settings.left;
		image.style.right = settings.right;

		link.appendChild(image);
		player.el().appendChild(link);

		return this;
	};	
	// register the plugin with video.js
	vjs.registerPlugin('logobrand', logobrand);

}(window.videojs));
