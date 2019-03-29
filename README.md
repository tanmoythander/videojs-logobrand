videojs-logobrand
=================

Add a custom branding logo inside the video.js player with options to control image size, opacity, position and visibility. Perfect for branding the media source.

### Install logobrand
Easiest way to install is through npm
```
npm install videojs-logobrand --save
```

Include the css inside the <head> of your index.html
```
<link href="path/to/videojs.logobrand.css" rel="stylesheet">
```
and the javascript inside the <body>
```
<script src="path/to/videojs.logobrand.js"></script>
```
You can follow the [example](https://github.com/tanmoythander/videojs-logobrand/blob/master/example/example.html) to understand how it works.



### Initialize logobrand
```JavaScript
var player = videojs('video');
player.logobrand({
	image: 'https://www.videojs.com/img/logo.png', // image to use
	destination: 'https://www.videojs.com/', // destination when clicked
	autoHide: false, // default is true
	width: '170px', // default is 'auto'
	height: 'auto', // default is 'auto'
	opacity: 0.7, // default is 1.0
	position: 'absolute', // default is 'static'
	top: '20px',
	right: '30px'
});
```

Feel free to fork and make any changes you want & don't hesitate to do a pull request.
