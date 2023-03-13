function changeImage(img) {
  if (img.src.match("succulents-1")) {
    img.src = "img/succulents-2.jpg";
  } else {
    img.src = "img/succulents-1.jpg";
  }
}

function hide() {
  var alertBox = document.querySelector(".alertbox");
  alertBox.remove();
}
