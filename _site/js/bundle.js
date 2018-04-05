$(".js-faq-link").click(function() {
  $(".c-faq__answer").hide();
  $(this)
    .next()
    .show();

  return false;
});

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

const Modal = {
  init: function() {
    const body = $("body");

    const CloseModal = () => {
      $(".js-modal")
        .removeClass("--open")
        .addClass("--closed");
      body.removeClass("u-no-scroll");
    };

    // Show modal when user clicks on trigger
    $(".js-modal__trigger").on("click", function(event) {
      var modalIdentifier = $(this).attr("data-modal-id");

      $(modalIdentifier)
        .addClass("--open")
        .removeClass("--closed");
      body.addClass("u-no-scroll");

      event.preventDefault();
    });

    // Close modal when clicking anywhere outside the modal
    body.on("click", ".js-modal", function(event) {
      var target = event.target;

      if ($(target).hasClass("js-modal")) {
        CloseModal();
      }
    });

    // Close modal when clicking the X
    body.on("click", ".js-modal__close", function(event) {
      CloseModal();
      event.preventDefault();
    });

    // Close modal when pressing Escape key
    $(document).keyup(function(event) {
      if (event.keyCode === 27) {
        CloseModal();
      }
    });
  }
};

// Only run script if there are modals present on the page
if ($(".js-modal").length) {
  Modal.init();
}

const NoJS = {
  init: function() {
    // Replace .no-js body class with .js to make it clear javascript is enabled and working
    $("body")
      .addClass("js")
      .removeClass("no-js");
  }
};

NoJS.init();

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
