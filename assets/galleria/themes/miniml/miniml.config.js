if ($(".galleria")[0]){
	Galleria.loadTheme('/assets/galleria/themes/miniml/galleria.miniml.min.js'); 
  Galleria.configure({ 
		// generic	 	
		transition: "pulse",
    thumbCrop: true,
    imageCrop: true,
    carousel: false,
    imagePan: true,
    clicknext: true,
		responsive: true,
		height: 0.23
  }); 
  Galleria.run('.galleria'); 
}
