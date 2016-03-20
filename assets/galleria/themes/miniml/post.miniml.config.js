	Galleria.loadTheme('/assets/galleria/themes/miniml/galleria.miniml.min.js'); 
  Galleria.configure({ 
		variation: 'light', 
		height: 0.706,
		clicknext: true,

		// theme specific
		transition: "pulse",
    transitionSpeed: 200,
    imageCrop: false,
    thumbCrop: true,
    carousel: false,
		fullscreenDoubleTap: true,
  }); 
  Galleria.run('.galleria'); 

