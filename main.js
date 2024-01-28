document.title = "project-js-10";
document.body.style.cssText = `
height: 100vh;
margin: 0;
padding: 0;
font-family: sans-serif;
display: flex;
justify-content: center;
align-items: center;
`;
let h1 = document.getElementById("date");
let date = new Date();
let date2 = date.getFullYear();
h1.innerHTML = date2;
console.log("Hi Developers")