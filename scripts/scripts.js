function responsiveNav() {
  var x = document.getElementById("header");

  if (x.className === "topbar") {
    x.className += " responsive";
  } else {
    x.className = "topbar";
  }
}