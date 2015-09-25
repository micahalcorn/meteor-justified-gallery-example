Template.Example.helpers({
  galleryOptions: function () {
    return {
      rowHeight: 240,
      events: {
        'jg.complete': function () {
          $('#justified-gallery a').swipebox({
            useSVG: false
          });
        }
      }
    };
  }
});
