$(document).ready(function () {
  $("#video-lesson").hide();

  $(".lessonChosen").on("click", function (e) {
    let lessonType = $(this).attr("data-lesson-type");
    let mainIdeas = $(this).attr("data-main-ideas").split(",");
    let lessonTitle = $(this).attr("data-lesson-title");

    let list = $("<ul>");
    for (let i = 0; i < mainIdeas.length; i++) {
      const element = mainIdeas[i];
      list.append("<li>" + element + "</li>");
    }

    // display lesson type
    console.log(lessonType);

    //  video
    if (lessonType === "video") {
      console.log("v");
      if ($("#video-lesson").attr("style") === "display: none;") {
        $("#video-lesson").toggle();
      }
      if ($("#document-lesson").attr("style") !== "display: none;") {
        $("#document-lesson").toggle();
      }

      let videoUrl = $(this).attr("data-video");

      $("iframe").attr("src", videoUrl); // attach url to player
    } else {
      console.log("d");
      // text
      if ($("#video-lesson").attr("style") !== "display: none;") {
        $("#video-lesson").toggle();
      }
      if ($("#document-lesson").attr("style") === "display: none;") {
        $("#document-lesson").toggle();
      }
    }

    // attach main ideas to page
    $("#show-ideas").html(list);
    $("#show-ideas").hide();

    //   change lesson title
    $("#lesson-title").html(lessonTitle);
  });

  $("#main-ideas").click(function () {
    $("#show-ideas").toggle();
    $("html, body").animate({ scrollTop: $(document).height() }, "slow");
  });
});
