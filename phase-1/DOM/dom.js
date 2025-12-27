// How to select by id

let abcd = document.getElementById("abcd");
console.dir(abcd);
// How to select by class

//let xyz = document.getElementsByClassName("xyz");
//console.dir(xyz);

let h1 = document.querySelector("h1");
h1.textContent = "Hello This is Dishant";
h1.style.backgroundColor = "blue";
h1.style.fontFamily = "Gilroy";
h1.style.color = "yellow";

// let a = document.querySelector("a");
// a.setAttribute("href", "https://www.google.com");

let img = document.querySelector("img");
img.setAttribute("src", "https://media.istockphoto.com/id/532202743/photo/tokyo-tower.jpg?s=1024x1024&w=is&k=20&c=TxNd4LDQq1pkOe9K7t3iBpdMSRZx5QHlgOPHl7GbUX0=");

