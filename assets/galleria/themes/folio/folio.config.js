		Galleria.configure({
/*				initialTransition: 'fade',
				transition: 'fade',
				imageCrop: false,
				trueFulscreen: true,
				fullscreenDoubleTap: true,
				swipe: true,*/
				responsive: true,
				debug: true,
				_center: false
		});
    Galleria.loadTheme('/assets/galleria/themes/folio/galleria.folio.js');
  	Galleria.run('.galleria');
/*
		Galleria.ready(function() {
        var thumbcont=this.$('thumbnails-container'),
        thumb=this.$('thumbnails-list'),
        thumbw,thumbmarg,left,contw,
        center=function(){
            contw=thumbcont.width();
            left=((contw-Math.floor(contw/thumbw)*thumbw)/2+thumbmarg)+'px';
            thumb.css('left',left);
        };
        this.bind('thumbnail', function(e) {
            if (!thumbw) {
                var thumbp=$(e.thumbTarget).parent();
                thumbw=thumbp.outerWidth(true);
                thumbmarg=(parseFloat(thumbp.css('margin-right'))-parseFloat(thumbp.css('margin-left')))/2;
                center();
            }
        });
        $(window).on('resize',center);
    	});*/
