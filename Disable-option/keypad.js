// Disable ctrl + u
document.onkeydown = function (e) {
  if (
    e.ctrlKey &&
    (e.keyCode === 67 ||
      e.keyCode === 86 ||
      e.keyCode === 85 ||
      e.keyCode === 117)
  ) {
    alert("HI, How Are You?");
    return false;
  } else {
    return true;
  }
};

// Disable ctrl + u and ctrl + shift + i
document.onkeydown = function (f) {
  if (
    f.ctrlKey &&
    f.shiftKey &&
    f.keyCode === 73
    // shift key
    // e.keyCode === 16 ||
    // i  key
    //  e.keyCode === 73
  ) {
    alert("NOT");
    return false;
  } else if (
    f.ctrlKey &&
    (f.keyCode === 67 ||
      f.keyCode === 86 ||
      f.keyCode === 85 ||
      f.keyCode === 117)
  ) {
    alert("vag");
    return false;
  } else {
    return true;
  }
};
