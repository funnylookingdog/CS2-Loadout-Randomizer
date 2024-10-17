const weaponImages = {
    "Five-SeveN": "images/57.png",
    "AK-47": "images/ak.png",
    "AUG": "images/aug.png",
    "AWP": "images/awp.png",
    "PP-Bizon": "images/bizon.png",
    "SCAR-20": "images/ctauto.png",
    "CZ75-Auto": "images/cz.png",
    "Desert Eagle": "images/deagle.png",
    "Dual Berettas": "images/dualies.png",
    "FAMAS": "images/famas.png",
    "Galil": "images/galil.png",
    "Glock-18": "images/glock.png",
    "M249": "images/m2.png",
    "M4A1-S": "images/m4a1s.png",
    "M4A4": "images/m4a4.png",
    "MAC-10": "images/mac10.png",
    "MAG-7": "images/mag7.png",
    "MP5-SD": "images/mp5.png",
    "MP7": "images/mp7.png",
    "MP9": "images/mp9.png",
    "Negev": "images/negev.png",
    "Nova": "images/nova.png",
    "P90": "images/p90.png",
    "P250": "images/p250.png",
    "P2000": "images/p2000.png",
    "R8 Revolver": "images/r8.png",
    "Sawed-Off": "images/sawedoff.png",
    "SSG 08": "images/scout.png",
    "SG 553": "images/sg.png",
    "G3SG1": "images/tauto.png",
    "Tec-9": "images/tec9.png",
    "UMP-45": "images/ump.png",
    "USP-S": "images/usp.png",
    "XM1014": "images/xm.png"
}
const startingCTPistol = [
    "P2000",
    "USP-S"
];
const cTPistols = [
    "P250",
    "Five-SeveN",
    "CZ75-Auto",
    "Dual Berettas",
    "R8 Revolver",
    "Desert Eagle"
];
const cTMidTier = [
    "Nova",
    "XM1014",
    "MAG-7",
    "MP9",
    "MP7",
    "MP5-SD",
    "UMP-45",
    "P90",
    "PP-Bizon",
    "Negev",
    "M249"
];
const cTRifles = [
    "M4A1-S",
    "M4A4",
    "AUG",
    "FAMAS",
    "SSG 08",
    "AWP",
    "SCAR-20",
];
const tStartingPistol = [
    "Glock-18"
];
const tPistols = [
    "P250",
    "Tec-9",
    "Dual Berettas",
    "R8 Revolver",
    "Desert Eagle",
    "CZ75-Auto"
];
const tMidTier = [
    "MP5-SD",
    "MAC-10",
    "UMP-45",
    "Sawed-Off",
    "MP7",
    "Nova",
    "P90",
    "PP-Bizon",
    "M249",
    "Negev"
];
const tRifles = [
    "AK-47",
    "Galil",
    "AWP",
    "SSG 08",
    "SG 553",
    "G3SG1"
];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function randomTLoadout() {
    const loadout = {};

    // Shuffle each category
    const shuffledStartingPistol = [...tStartingPistol];
    const shuffledPistols = [...tPistols];
    const shuffledMidTier = [...tMidTier];
    const shuffledRifles = [...tRifles];

    shuffle(shuffledStartingPistol);
    shuffle(shuffledPistols);
    shuffle(shuffledMidTier);
    shuffle(shuffledRifles);

    // Select and categorize the items
    loadout["Starting Pistol"] = shuffledStartingPistol[0];
    loadout["Pistols"] = shuffledPistols.slice(0, 4);
    loadout["Mid-Tier Weapons"] = shuffledMidTier.slice(0, 5);
    loadout["Rifles"] = shuffledRifles.slice(0, 5);

    return loadout;
}

function randomCTLoadout() {
    const loadout = {};

    // Shuffle each category
    const shuffledStartingPistol = [...startingCTPistol];
    const shuffledPistols = [...cTPistols];
    const shuffledMidTier = [...cTMidTier];
    const shuffledRifles = [...cTRifles];

    shuffle(shuffledStartingPistol);
    shuffle(shuffledPistols);
    shuffle(shuffledMidTier);
    shuffle(shuffledRifles);

    // Select and categorize the items
    loadout["Starting Pistol"] = shuffledStartingPistol[0];
    loadout["Pistols"] = shuffledPistols.slice(0, 4);
    loadout["Mid-Tier Weapons"] = shuffledMidTier.slice(0, 5);
    loadout["Rifles"] = shuffledRifles.slice(0, 5);

    return loadout;
}

document.getElementById('randomizeTLoadout-btn').addEventListener('click', () => {
    const fullTLoadout = randomTLoadout();
    displayLoadout(fullTLoadout) // Display the loadout
});

document.getElementById('randomizeCTLoadout-btn').addEventListener('click', () => {
    const fullCTLoadout = randomCTLoadout();
    displayLoadout(fullCTLoadout) // Display the loadout
});

function displayLoadout(fullLoadout) {
    const loadoutDiv = document.getElementById('loadout');
    loadoutDiv.innerHTML = ""; // Clear previous content

    const container = document.createElement('div');
    container.className = 'loadout-container';

    const row1 = document.createElement('div');
    row1.className = 'loadout-row';

    const startingPistolDiv = document.createElement('div');
    const pistolsDiv = document.createElement('div');
    const midTierDiv = document.createElement('div');
    const rifleDiv = document.createElement('div');

    // Create a single column for Starting Pistol and Pistols
    const startingAndPistolsDiv = document.createElement('div');
    startingAndPistolsDiv.className = 'loadout-column';
    startingAndPistolsDiv.innerHTML = `
        <h2>Pistols</h2>
        <p>${fullLoadout["Starting Pistol"]}</p>
        ${fullLoadout["Pistols"].map(item => `<p>${item}</p>`).join('')}
    `;

    midTierDiv.className = 'loadout-column';
    midTierDiv.innerHTML = `<h2>Mid-Tier Weapons</h2>${fullLoadout["Mid-Tier Weapons"].map(item => `<p>${item}</p>`).join('')}`;

    rifleDiv.className = 'loadout-column';
    rifleDiv.innerHTML = `<h2>Rifles</h2>${fullLoadout["Rifles"].map(item => `<p>${item}</p>`).join('')}`;

    // Append all columns to the first row
    row1.appendChild(startingAndPistolsDiv);
    row1.appendChild(midTierDiv);
    row1.appendChild(rifleDiv);
    container.appendChild(row1); // Add row1 to the container

    loadoutDiv.appendChild(container); // Append the entire container to loadoutDiv

    // Optional: Format the output with images
    const itemDivs = [startingAndPistolsDiv, midTierDiv, rifleDiv];
    itemDivs.forEach(div => {
        const items = div.querySelectorAll('p');
        items.forEach(item => {
            const img = document.createElement('img');
            img.src = weaponImages[item.innerText.trim()]; // Get the corresponding image URL
            img.alt = item.innerText.trim(); // Set alt text for accessibility
            img.style.width = '100px'; // Set image width (adjust as needed)
            img.style.marginRight = '10px'; // Add some spacing

            // Prepend image to the corresponding item
            item.prepend(img);
        });
    });
}
