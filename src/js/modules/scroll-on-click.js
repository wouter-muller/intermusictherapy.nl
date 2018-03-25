$(".js-scroll-to").click(function() {
  var id = $(this).attr("href");

  $("html,body").animate(
    {
      scrollTop: $(id).offset().top
    },
    "normal "
  );
  // return false;
});
