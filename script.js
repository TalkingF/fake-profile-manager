
const generateFirst = async file => {
    const random_index = Math.floor(Math.random() * 76412) + 1;
    const response = await fetch(file);
    const text = await response.text();
    const name = await text.split("\n", random_index).pop();

    document.getElementById("first-name").innerHTML = name;
}

const generateMiddle = async file => {
    const random_index = Math.floor(Math.random() * 3896) + 1;
    const response = await fetch(file);
    const text = await response.text();
    const name = await text.split("\n", random_index).pop();
    
    document.getElementById("middle-name").innerHTML = name;
}

const generateLast = async file => {
    const random_index = Math.floor(Math.random() * 21984) + 1;
    const response = await fetch(file);
    const text = await response.text();
    const name = await text.split("\n", random_index).pop();
    
    document.getElementById("last-name").innerHTML = name;
}

function generateAgeChildInclusive() {
    const age = Math.floor(Math.random() * 18);
    document.getElementById("age").innerHTML = age;
}

function generateAgeAdultExclusive() {
    const age = Math.floor(Math.random() * (120 - 18) + 18);
    document.getElementById("age").innerHTML = age;
}

//initial random generation

generateFirst("names/firstnames.txt");
generateMiddle("names/middlenames.txt");
generateLast("names/lastnames.txt");
generateAgeAdultExclusive();

//event listeners
document.getElementById("first-name-button").addEventListener("click", ()=> generateFirst("names/firstnames.txt"));
document.getElementById("middle-name-button").addEventListener("click", ()=> generateMiddle("names/middlenames.txt"));
document.getElementById("last-name-button").addEventListener("click", ()=> generateLast("names/lastnames.txt"));
document.getElementById("adult-button").addEventListener("click", () => generateAgeAdultExclusive());
document.getElementById("child-button").addEventListener("click", () => generateAgeChildInclusive());