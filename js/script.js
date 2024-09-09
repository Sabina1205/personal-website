function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

window.addEventListener('load', function() {
    document.getElementById('loader').style.display = 'none';
});

/*
document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
    document.querySelector("body").style.visibility = "hidden";
    document.querySelector("#loader").style.visibility = "visible";
  } else {
    document.querySelector("#loader").style.display = "none";
    document.querySelector("body").style.visibility = "visible";
  }
};
*/
const projects = [
  {
    image: "./assets/images/accordion.jpg",
    header: "FAQ accordion",
    description: "FAQ accordion created with HTML, CSS and JavaScript.",
    buttonLink:
      "https://github.com/Sabina1205/Frontend-mentor-challenges/tree/main/faq-accordion-main",
  },
  {
    image: "./assets/images/thumbnail.jpg",
    header: "Thumbnail gallery",
    description: "Thumbnail gallery created with HTML, CSS and JavaScript.",
    buttonLink: "https://github.com/Sabina1205/Thumbnail-gallery",
  },
  {
    image: "./assets/images/ip-tracker.jpg",
    header: "IP Address Tracker",
    description:
      "IP Address Tracker created with the Geolocation API and Leaflet map.",
    buttonLink:
      "https://github.com/Sabina1205/Frontend-mentor-challenges-3/tree/main/ip-address-tracker-master",
  },
  {
    image: "./assets/images/form-php.jpg",
    header: "PHP form",
    description:
      "Contact form for sending emails via PHP code with open-source PHP library.",
    buttonLink: "https://github.com/Sabina1205/Send-email-with-php",
  },
  {
    image: "./assets/images/results-component.jpg",
    header: "Results summary",
    description:
      "Results summary component created with HTML, CSS, JavaScript and JSON.",
    buttonLink:
      "https://github.com/Sabina1205/Frontend-mentor-challenges-2/tree/main/results-summary-component-main",
  },
  {
    image: "./assets/images/drum.jpg",
    header: "Drum machine",
    description: "Drum machine created with Bootstrap and JavaScript.",
    buttonLink: "https://github.com/Sabina1205/Drum-machine",
  },
];

// selecting containers for projects
const projectsDiv = document.getElementById("projects");

// function for displaying projects from an array
function displayProject() {
  for (let i = 0; i < projects.length; i++) {
    // project container
    const project = document.createElement("div");
    project.classList.add("project");

    // create image element
    const img = document.createElement("img");
    const figure = document.createElement("figure");

    img.src = projects[i].image;

    img.classList.add("image");
    figure.appendChild(img);
    project.appendChild(figure);
    projectsDiv.appendChild(project);

    // h2 element
    const header = document.createElement("h2");
    header.innerHTML = projects[i].header;
    header.classList.add("pTitle");
    project.appendChild(header);

    // description
    const info = document.createElement("p");
    info.innerHTML = projects[i].description;
    info.classList.add("description");
    project.appendChild(info);

    // buttons
    const button = document.createElement("button");
    button.innerHTML = projects[i].buttonLink;
    button.classList.add("btn-git");
    button.innerHTML = "GitHub &#10230;";

    button.addEventListener("click", function () {
      button = window.open(projects[i].buttonLink);
    });

    project.appendChild(button);
  }
}

displayProject();
