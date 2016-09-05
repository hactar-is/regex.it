/*
/* Helpers */
/*******************/

function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

/*
/* Init */
/*******************/

var item_grid = document.querySelector('.grid');

ready(function () {

    imagesLoaded( item_grid, function( instance ) {
      var msnry = new Masonry( item_grid, {
        // options
          itemSelector: '.grid-item',
          columnWidth: '.item-sizer',
          gutter: '.gutter-sizer',
          percentPosition: true
      });
    });
});
