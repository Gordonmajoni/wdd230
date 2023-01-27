//last modified date.
const datefield = document.querySelector(".date");

//  current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);

// output current date

datefield.innerHTML = `${fulldate}`;

