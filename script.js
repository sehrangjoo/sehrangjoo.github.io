document.addEventListener('DOMContentLoaded', function () {

  // make all links open in new tab
  var links = document.links;
  for (var i = 0; i < links.length; i++) {
    var href = links[i].getAttribute("href");
    // except intra-page links
    if (href !== "#about" && href !== "#publications") {
      links[i].target = "_blank";
    }
  }

});
