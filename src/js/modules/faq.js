$(".js-faq-link").click(function() {
  $(".c-faq__answer").hide();
  $(this)
    .next()
    .show();

  return false;
});
