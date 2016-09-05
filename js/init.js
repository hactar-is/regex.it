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
var elem = document.querySelector('.grid');

ready(function () {

    var msnry = new Masonry( elem, {
      // options
        itemSelector: '.grid-item',
        columnWidth: '.item-sizer',
        gutter: '.gutter-sizer',
        percentPosition: true
    });
});
