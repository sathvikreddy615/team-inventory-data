const AfcSouthTeams = {};

AfcSouthTeams.titans = [];
AfcSouthTeams.colts = [];
AfcSouthTeams.jaguars = [];
AfcSouthTeams.texans = [];

const playerCreator = (teamVal, nameVal, positionVal, numberVal, collegeVal, ageVal) => {
    const newPlayer = {
        team: teamVal,
        name: nameVal,
        position: positionVal,
        number: numberVal,
        college: collegeVal,  
        age: ageVal  
    }
    return newPlayer;  
}

// Titans
let marcusMariota = playerCreator("Titans", "Marcus Mariota", "QB", 8, "Oregon", 25);
let taylorLewan = playerCreator("Titans", "Taylor Lewan", "OT", 77, "Michigan", 26);
let derrickHenry = playerCreator("Titans", "Derrick Henry", "RB", 22, "Alabama", 23);
let jurrelCasey = playerCreator("Titans", "Jurrel Casey", "DT", 99, "Southern California", 28);
let delanieWalker = playerCreator("Titans", "Delanie Walker", "TE", 82, "Central Missouri", 33);
AfcSouthTeams.titans.push(marcusMariota, taylorLewan, derrickHenry, jurrelCasey, delanieWalker);

// Colts 
let andrewLuck = playerCreator("Colts", "Andrew Luck", "QB", 12, "Stanford", 28);
let tyHilton = playerCreator("Colts", "T.Y. Hilton", "WR", 13, "Florida", 28);
AfcSouthTeams.colts.push(andrewLuck, tyHilton);

// Jaguars
let jalenRamsey = playerCreator("Jaguars", "Jalen Ramsey", "DB", 20, "Florida State", 23);
let leonardFournette = playerCreator("Jaguars", "Leonard Fournette", "RB", 27, "Florida State", 23);
let ajBouye = playerCreator("Jaguars", "A.J. Bouye", "CB", 21, "Central Florida", 26);
AfcSouthTeams.jaguars.push(jalenRamsey, leonardFournette, ajBouye);

// Texans 
let deshaunWatson = playerCreator("Texans", "Deshaun Watson", "QB", 4, "Clemson", 22);
let jjWatt = playerCreator("Texans", "J.J. Watt", "DE", 99, "Wisconsin", 29);
let deandreHopkins = playerCreator("Texans", "DeAndre Hopkins", "WR", 10, "Clemson" , "Wisconsin", 25);
let jadaveonClowney = playerCreator("Texans", "Jadaveon Clowney", "LB", 90, "South Carolina", 25);
AfcSouthTeams.texans.push(deshaunWatson, jjWatt, deandreHopkins, jadaveonClowney);

const saveDB = (dbObject, localStorageKey) => {
    const stringifiedDB = JSON.stringify(dbObject);
    localStorage.setItem(localStorageKey, stringifiedDB);    
}

saveDB(AfcSouthTeams, "AFCSouth");

const loadDB = localStorageKey => {
    const dbString = localStorage.getItem(localStorageKey);
    return JSON.parse(dbString);
}

loadDB("AFCSouth");