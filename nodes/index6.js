document.body.onload = addElements;

function addElements(){
    //een nieuwe div maken met de property createElement
    var newh1= document.createElement("h1");
    var newh2= document.createElement("h2");
    var newp1= document.createElement("p");
    var newp2= document.createElement("p");
    var newp3= document.createElement("p");

    //toevoegen van nieuwe tekst aan newDiv
    var newContentH1 = document.createTextNode("INDEX 6");
    var newContentH2 = document.createTextNode("AUTO'S");
    var newLada = document.createTextNode("LADA");
    var newBMW = document.createTextNode("BMW");
    var newVolkswagen = document.createTextNode("VOLKSWAGEN");

    //voeg de nieuwe tekst nu toe aan newDiv
    newh1.appendChild(newContentH1);
    document.body.appendChild(newh1);

    newh2.appendChild(newContentH2);
    document.body.appendChild(newh2);

    newp1.appendChild(newLada);
    document.body.appendChild(newp1);

    newp2.appendChild(newBMW);
    document.body.appendChild(newp2);

    newp3.appendChild(newVolkswagen);
    document.body.appendChild(newp3);

    newp1.classList.add("myptags");

}