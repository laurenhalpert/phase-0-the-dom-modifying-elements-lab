// Write your code here!
const main = document.querySelector("#main");
main.remove();

const newHeader = document.createElement("h1");
const body = document.getElementsByTagName("body");

newHeader.id = "victory";
newHeader.textContent = "Lauren is the champion";
document.body.append(newHeader);


