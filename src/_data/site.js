import fs from "node:fs";

// Drop a square photo at src/assets/img/portrait.jpg and it will appear on the home page.
const portrait = ["portrait.jpg", "portrait.png", "portrait.webp"].find((f) =>
  fs.existsSync(`src/assets/img/${f}`)
);

export default {
  name: "Eugene Koh",
  fullName: "Eugene Koh You Wei",
  role: "Plant molecular & computational biologist",
  affiliation: "Research Fellow · Nanyang Technological University, Singapore",
  description:
    "Eugene Koh studies how plants sense and survive stress, from a single reactive oxygen molecule to 700 million years of plant evolution.",
  // Set this to your final address once the site is live, e.g. "https://eugenekoh.com"
  url: "",
  email: "eugenekohros@gmail.com",
  orcid: "https://orcid.org/0000-0003-1073-0050",
  linkedin: "https://www.linkedin.com/in/eugene-koh-66727588",
  portrait: portrait ? `/assets/img/${portrait}` : null,
  year: new Date().getFullYear(),
};
