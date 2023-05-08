<!-- Zoom In/out disable -->

1. By meta data:
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

2. By css: 
body {
  touch-action: manipulation;
}

3. By JS:
document.addEventListener('gesturestart', function (e) {
  e.preventDefault();
});
