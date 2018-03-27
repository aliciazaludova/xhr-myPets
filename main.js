console.log("i've had some lovely pets");

const startApplication = () => {
    let myRequest = new XMLHttpRequest();
    myRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
    myRequest.addEventListener("error", executeThisCodeIfXHRFails);
    myRequest.open("GET", "myPets.json");
    myRequest.send();
}

function executeThisCodeIfXHRFails () {
    console.log("somehing broke");
}

function executeThisCodeAfterFileLoaded () {
    const data = JSON.parse(this.responseText);
    buildDomString(data.myPets);
}

const buildDomString = (fancyArray) => {

    let domString = "";
    fancyArray.forEach((pet) => {
        domString += `<h1>${pet.name}</h1>`;
    })
    printToDom(domString, "my-pets");
}

const printToDom = (domString, divId) =>
// function that will accept the string that we build and write it to the div with the specified ID
 {
    document.getElementById(divId)
    // locate the place on the DOM by its ID
    .innerHTML = domString;
    // and write into it the string that we build
}

startApplication();