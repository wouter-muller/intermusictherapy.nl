// This function adds a modifier ".--in-view" to any element that has
// ".js-in-view", and is also currently inside the viewport of the user.
//
// Dependency: jQuery.inview, see https://github.com/protonet/jquery.inview

const InView = {
  init: function() {
    $(".js-in-view").bind("inview", function(event, visible) {
      if (visible == true) {
        $(this).addClass("--in-view");
        var id = $(this).attr("id");
        console.log(id);
        $("a").removeClass("active");
        $('a[href="#' + id + '"]').addClass("active");
      } else {
        $(this).removeClass("--in-view");
        $("a").removeClass("active");
      }
    });

    $(".js-in-view").trigger("inview");
  }
};

// Only run script if there are elements on the page that use this script
if ($(".js-in-view").length) {
  InView.init();
}
