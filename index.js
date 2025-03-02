
// pirma užduotis
let pirmas = ' Auksė';
let antras = 33;
let trecias = true;
console.log(pirmas);
console.log(antras);
console.log(trecias);
kintamasis();


function kintamasis() {
    console.log(pirmas,antras,trecias);
}



// antra uzduotis
let amzius= 18;
let pilietybe = true;
let dienos = 150;
testas();

function testas(){
    if (amzius>=18 && pilietybe === true && dienos>=30) {
        console.log("Galite balsuoti")
    }else {
        console.log("Negalite balsuoti")
    }
}


//trecia uzduotis 

let age = 50;
kmi = 35;
smokes = false;
kmi_testas();


function kmi_testas() {
    let s;
    if (age<30 && kmi<25 && smokes === false) {
        s= "Maža rizika - keep it up!";
    }else if (30>=age<=50 && 25>kmi<30 && smokes === false) {
         s= "Vidutinė rizika- susirūpinkite sveikata!";
    }else if (age>50 || kmi>=30 || smokes === true){
        s= "Didelė rizika - imkitės veiksmų nedelsiant!";
    }else if (age>50 && kmi>=30 && smokes === true) {
        s="Labai didelė rizika - nedelsiant imkitės veiksmų sveikatai pagerinti!";
    }else {
        s= "Neapibrėžta rizika- patikslinkite 5vestis";
    }

    console.log(s);
    console.log(" Amžius:",age);
    console.log(" KMI:",kmi);
    console.log(" Ar rūkote:",smokes);
    

}
