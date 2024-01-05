const options = {
  bottom: "64px",
  right: "unset",
  left: "32px",
  time: "0.5s",
  mixColor: "#fff",
  backgroundColor: "#fff",
  buttonColorDark: "#100f2c",
  buttonColorLight: "#fff",
  saveInCookies: false,
  label: "🌓",
  autoMatchOsTheme: true,
};

const darkmode = new Darkmode(options);

darkmode.showWidget(); // Display the dark mode widget initially

const theme_toggle = document.querySelector(".darkmode-toggle");
theme_toggle.onclick = () => {
  const html_body = document.querySelector("body");
  const allElements = document.querySelectorAll("*");

  if (html_body.classList.contains("darkmode--activated")) {
    for (var i = 0; i < allElements.length; i++) {
      allElements[i].classList.add("dark_theme");
    }
  } else {
    for (var i = 0; i < allElements.length; i++) {
      allElements[i].classList.remove("dark_theme");
    }
  }
  const heroElement = document.querySelector(".hero");

  // Get the computed style of the element
  const computedStyle = window.getComputedStyle(heroElement);

  // Access the background image property
  const backgroundImage = computedStyle.getPropertyValue("background-image");

  console.log(backgroundImage);
};
