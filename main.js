const parentDiv = document.querySelector("#parentDiv");
const fragment = document.createDocumentFragment();

const displayTeam = x => {
    const dataTable = AfcSouthTeams[x];
    dataTable.forEach(element => {
        const ulEl = document.createElement("ul");
        ulEl.setAttribute("class", "teams");
        for (let i in element) {
            const liEl = document.createElement("li");
            liEl.innerHTML = `${i}: ${element[i]}`;
            ulEl.appendChild(liEl);
        }
        fragment.appendChild(ulEl);
    })
}

const displayDivision = () => {
    for (let team in AfcSouthTeams) {
        const afcSouthTable = AfcSouthTeams[team];
        afcSouthTable.forEach(element => {
            const ulEl = document.createElement("ul");
            ulEl.setAttribute("class", "teams");
            for (let i in element) {
                const liEl = document.createElement("li");
                liEl.innerHTML += `${i}: ${element[i]}`;
                ulEl.appendChild(liEl);
            }
            fragment.appendChild(ulEl);
        });
        parentDiv.appendChild(fragment);
    }
}

const displayNFL = south => {
    if (south === "titans") {
        displayTeam("titans");
    } else if (south === "colts") {
        displayTeam("colts");
    } else if (south === "jaguars") {
        displayTeam("jaguars");
    } else if (south === "texans") {
        displayTeam("texans");
    } else {
        displayDivision();
    }
    parentDiv.appendChild(fragment);
}

displayNFL("titans");