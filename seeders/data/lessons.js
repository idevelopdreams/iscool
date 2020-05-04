const data = [
  // Module 0
  {
    id: "56fff529-0164-4896-a628-ab369dad4889",
    UserId: "46fff529-0164-4896-a628-ab369dad4889",
    ModuleID: "56fff529-0164-4896-a628-ab369dad9889",
    name: "Welcome and Installation",
    concepts:
      "To allow students time to introduce themselves to one another and the instructional team, To confirm that students have completed all required pre-work (software + tools installation) and get them accustomed to using Zoom and Slack.",
    video: "some video",
    cover: "some cover",
    type: "document",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  // Module 1
  {
    id: "56fff529-0164-4896-a628-ab369dad4890",
    UserId: "46fff529-0164-4896-a628-ab369dad4889",
    ModuleID: "56fff529-0164-4896-a628-ab369dad9891",
    name: "The Zen of Coding",
    concepts:
      "To introduce basic terminal/bash commands, To create a basic HTML page",
    video:
      "https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=8c5a44f5-6ab7-4f36-a89e-ab19004e0e5d&autoplay=false&offerviewer=false&showtitle=false&showbrand=false&start=0&interactivity=all",
    cover: "some cover",
    type: "video",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "56fff529-0164-4896-a628-ab369dad4891",
    UserId: "46fff529-0164-4896-a628-ab369dad4889",
    ModuleID: "56fff529-0164-4896-a628-ab369dad9891",
    name: "Git'n Pro with HTML/CSS",
    concepts:
      'To understand the value of Git version control, To gain initial exposure to the concept of "adding committing and pushing" code to GitHub, To gain initial exposure to HTML/CSS and how the two are linked using element selectors',
    video:
      "https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=681fe2e3-face-40f5-be60-abb00130ebb6&autoplay=false&offerviewer=true&showtitle=false&showbrand=false&start=0&interactivity=all",
    cover: "some cover",
    type: "video",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "56fff529-0164-4896-a628-ab369dad4892",
    UserId: "46fff529-0164-4896-a628-ab369dad4889",
    ModuleID: "56fff529-0164-4896-a628-ab369dad9891",
    name: "Heroes of CSS",
    concepts:
      "To become comfortable working with HTML relative paths, To engage in a deep dive of HTML/CSS for layout design and element positioning, To complete the Bash Checkpoint.",
    video:
      "https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=0f84236d-1c14-41e4-bf7a-abb001687169&autoplay=false&offerviewer=true&showtitle=false&showbrand=false&start=0&interactivity=all",
    cover: "some cover",
    type: "video",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  // Module 2
  {
    id: "56fff529-0164-4896-a628-ab369dad4893",
    UserId: "46fff529-0164-4896-a628-ab369dad4889",
    ModuleID: "56fff529-0164-4896-a628-ab369dad9892",
    name: "Going Live",
    concepts:
      "To recap the basic topics covered to date, To offer a conceptual introduction to CSS reset and downloadable style sheets, To work with Google Developer tools for site inspection, To utilize Github Pages for website deployment",
    video: "",
    cover: "some cover",
    type: "video",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "56fff529-0164-4896-a628-ab369dad4894",
    UserId: "46fff529-0164-4896-a628-ab369dad4889",
    ModuleID: "56fff529-0164-4896-a628-ab369dad9892",
    name: "Down & Dirty CSS",
    concepts:
      "To recap the basic topics covered to date, To offer a conceptual introduction to CSS reset and downloadable style sheets, To work with Google Developer tools for site inspection, To utilize Github Pages for website deployment",
    video:
      "https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=d6da5918-51cb-422b-a848-abb100bf9552&autoplay=false&offerviewer=true&showtitle=false&showbrand=false&start=0&interactivity=all",
    cover: "some cover",
    type: "video",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "56fff529-0164-4896-a628-ab369dad4895",
    UserId: "46fff529-0164-4896-a628-ab369dad4889",
    ModuleID: "56fff529-0164-4896-a628-ab369dad9892",
    name: "Bootstrap Layouts and Responsive Design ",
    concepts:
      "To gain a conceptual understanding of the role of grid-based web design in modern web development ,To utilize the Bootstrap grid system to create complete web layouts,To understand the concept of mobile responsive web design and the use of media queries to achieve it",
    video:
      "https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=d2e44186-607e-4ea4-bce0-abb100dd9547&autoplay=false&offerviewer=true&showtitle=false&showbrand=false&start=0&interactivity=all",
    cover: "some cover",
    createdAt: new Date(),
    updatedAt: new Date(),
  }, //Module 3
  {
    id: "56fff529-0164-4896-a628-ab369dad4896",
    UserId: "46fff529-0164-4896-a628-ab369dad4889",
    ModuleID: "56fff529-0164-4896-a628-ab369dad9893",
    name: "Joys of JavaScript",
    concepts: "basics of JavaScript,Data types,Data structures",
    video:
      "https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=70298d16-f2c1-4221-a2ee-abb101002fdb&autoplay=false&offerviewer=true&showtitle=false&showbrand=false&start=0&interactivity=all",
    cover: "some cover",
    createdAt: new Date(),
    updatedAt: new Date(),
  },

  {
    id: "56fff529-0164-4896-a628-ab369dad4897",
    UserId: "46fff529-0164-4896-a628-ab369dad4889",
    ModuleID: "56fff529-0164-4896-a628-ab369dad9893",
    name: "Jumping for JavaScript ",
    concepts:
      "To introduce students to the concept of for loops, arrays, if/else statements,common programming tools to create a Rock-Paper-Scissors game.",

    video: "",
    cover: "some cover",
    createdAt: new Date(),
    updatedAt: new Date(),
  },

  {
    id: "56fff529-0164-4896-a628-ab369dad4898",
    UserId: "46fff529-0164-4896-a628-ab369dad4889",
    ModuleID: "56fff529-0164-4896-a628-ab369dad9893",
    name: "JavaScript Juggernauts",
    concepts: "the concept of JavaScript Functions, JavaScript Object",
    video: "",
    cover: "some cover",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  //module 4
  {
    id: "56fff529-0164-4896-a628-ab369dad4899",
    UserId: "46fff529-0164-4896-a628-ab369dad4889",
    ModuleID: "56fff529-0164-4896-a628-ab369dad9894",
    name: "JavaScript Juggernauts",
    concepts:
      "In this class, we will be introducing students to the concept of JavaScript Functions and of JavaScript Object",

    video: "",
    cover: "some cover",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

module.exports = data;
