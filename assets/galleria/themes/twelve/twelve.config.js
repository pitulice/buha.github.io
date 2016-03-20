	Galleria.loadTheme('/assets/galleria/themes/twelve/galleria.twelve.min.js'); 
  Galleria.configure({ 

		variation: 'light', 
		height: 0.706,
		clicknext: true,

		// theme specific
		transition: "pulse",
    transitionSpeed: 200,
    imageCrop: 'landscape',
    thumbCrop: true,
    carousel: false,
		fullscreenDoubleTap: true,
		overlayBackground: "#000000",
		overlayOpacity: 0.96,
	
		// don't show the image navigation arrows
		showImagenav: false,

		swipe: 'auto',

		responsive: 'true',
		
		// Toggles the fullscreen button
		_showFullscreen: false,

    // Toggles the lightbox button
    _showPopout: true,

    // Toggles the progress bar when playing a slideshow
    _showProgress: false,

    // Toggles tooltip
    _showTooltip: true,	
/*
    // Localized strings, modify these if you want tooltips in your language
    _locale: {
        show_thumbnails: "",
        hide_thumbnails: "",
        play: "",
        pause: "",
        enter_fullscreen: "",
        exit_fullscreen: "",
        popout_image: "",
        showing_image: ""
    }*/
  });
	Galleria.run('.galleria');

