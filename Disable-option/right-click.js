window.oncontextmenu = function () {
  console.log("Right Click Disabled");
  return false;
};

// System 2

var message = "What do you want?";
function rtclickcheck(keyp) {
  if (navigator.appName == "Netscape" && keyp.which == 3) {
    alert(message);
    return false;
  }

  if (navigator.appVersion.indexOf("MSIE") != -1 && event.button == 2) {
    alert(message);
    return false;
  }
  console.log("HI, How Are You? Welcome to the console!");
}
document.onmousedown = rtclickcheck;
