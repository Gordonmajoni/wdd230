

const date1 = document.querySelector("#date1");
const monthName = months[d.getMonth()];

date1.innerHTML = new Date().getFullYear();
date1.innerHTML = new Date().getDay();
date1.innerHTML = new Date().getMonth();

// Getting the last modified date

const date1 = document.querySelector("#date1");

date1.innerHTML = new Date(document.lastModified).toLocaleDateString("en-US");