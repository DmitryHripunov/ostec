// $(document).ready(function() {
//     $('.play-video').on('click', function(e) {
//       e.preventDefault();
//     //   $('video-js').attr( 'controls');
//       $('.video-overlay').css({
//           'display': 'none', 
//           'opacity': '0'
//         });
//       $('.play-video').css({
//           'display': 'none', 
//           'opacity': '0'
//         });
//       $('.video-title').css({
//         'display': 'none', 
//         'opacity': '0'
//       });
//     });
//   }); 

$(document).ready(function () {
  $('.link').fancybox({
    openEffect: 'none',
    closeEffect: 'none',
    width: 2048,
    height: 1150,
    maxWidth: '100%',
    maxHeight: '100%',
    padding: 0,
    margin: 0,
    helpers: {
      media: {
        youtube: {
          params: {
            vq: 'hd720',
          }
        }
      }
    }
  });

  var hash = location.hash;

  if (hash == '#autoplay') {
    $('#tinymce').find('.fancybox-media').trigger('click');
  }
});
