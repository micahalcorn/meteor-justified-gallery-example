Template.JustifiedGallery.rendered = function () {
  var selector = '#' + this.data.id;

  $(selector).justifiedGallery(this.data.options);

  var callbacks = this.data.options.events;

  if (callbacks) {
    for (var k in callbacks) {
      $(selector).on(String(k), callbacks[String(k)]);
    }
  }
};
