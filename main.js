// Auto typing text effect
var typed = new Typed(".result", {
  strings: [
    "Sachin Samal",
    "an Aspirant",
    "a Front-end Developer",
    "a Front-end Engineer",
    "a Web-Designer",
  ],
  typeSpeed: 75,
  backSpeed: 60,
  loop: true,
});

// play music

var myMusic = document.getElementById("music");
var button = document.getElementById("click");

button.onclick = function () {
  if (myMusic.paused) {
    myMusic.play();
    button.src = "./img/pause.png";
  } else {
    myMusic.pause();
    button.src = "./img/play.png";
  }
};

// chatbot
(function (w, d) {
  w.CollectId = "61aa8a45ba60cc741a634e1e";
  var h = d.head || d.getElementsByTagName("head")[0];
  var s = d.createElement("script");
  s.setAttribute("type", "text/javascript");
  s.async = true;
  s.setAttribute("src", "https://collectcdn.com/launcher.js");
  h.appendChild(s);
})(window, document);
