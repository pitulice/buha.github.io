if ($(".galleria")[0]){
	Galleria.loadTheme('/assets/galleria/themes/fullscreen/galleria.fullscreen.js'); 
    Galleria.configure({ 

	debug: false,
	clicknext: true,

	// theme specific
	transition: 'pulse',
    transitionSpeed: 200,
    imageCrop: false,
    thumbCrop: true,
	showImagenav: true,
	trueFullscreen: true,

	swipe: 'auto',

	responsive: true,
  });
  Galleria.run('.galleria');
}

Galleria.ready(function() {
    this.attachKeyboard({
        right: this.next,
        left: this.prev,
        esc: this.exitFullscreen
    });
});

$(document).keyup(function(e) {
  if (e.which == 27) history.go(-1);   // esc
});
