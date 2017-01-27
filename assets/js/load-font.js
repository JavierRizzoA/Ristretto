function loadFont(url) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var style = document.createElement('style');
      style.innerHTML = xhr.responseText;
      document.head.appendChild(style);
    }
  };
  xhr.send();
}

