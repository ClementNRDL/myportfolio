function toggleCode(id) {
    const code = document.getElementById(id);
    code.style.display = code.style.display === "block" ? "none" : "block";
}

/* Exercice 1 */
function runAlert() {
    alert("Je suis JavaScript!");
}

/* Exercice 2 */
function runVariables() {
    let admin;
    let name;

    name = "John";
    admin = name;

    alert(admin);
}

/* Exercice 3 */
function runAssignName() {
    let planetname = "Earth";
    let currentnameuser = "John";

    alert(planetname);
    alert(currentnameuser);
}

/* Exercice 4 */

function runStringQuotes() {
    let name = "Ilya";

    alert(`hello ${1}`);
    alert(`hello ${"name"}`);
    alert(`hello ${name}`);
}

/* Exercice 5 */

function runSimplePage() {
    let name = prompt("Quel est ton nom ?");
}

/* Exercice 6 */
function runPrefixPostfix() {
    let a = 1, b = 1;

    let c = ++a;
    let d = b++;

    alert(
        "a = " + a +
        ", b = " + b +
        ", c = " + c +
        ", d = " + d
    );
}

/* Exercice 7 */
function runAffectation() {
    let a = 2;
    let x = 1 + (a *= 2);

    alert("a = " + a + " et x = " + x);
}

/* Exercice 8 */
function runConversions() {
    alert(
        '"" + 1 + 0 = "10"\n' +
        '"" - 1 + 0 = -1\n' +
        'true + false = 1\n' +
        '6 / "3" = 2\n' +
        '"2" * "3" = 6\n' +
        '4 + 5 + "px" = "9px"\n' +
        '"$" + 4 + 5 = "$45"\n' +
        '"4" - 2 = 2\n' +
        '"4px" - 2 = NaN\n' +
        '"-9" + 5 = "-95"\n' +
        '"-9" - 5 = -14\n' +
        'null + 1 = 1\n' +
        'undefined + 1 = NaN\n' +
        '"\\t \\n" - 2 = -2'
    );
}

/* Exercice 9 */
function runOfficialName() {
    let answer = prompt("Quel est le nom officiel de JavaScript ?");

    if (answer === "ECMAScript") {
        alert("Bonne réponse !");
    } else {
        alert("Ne sait pas ? ECMAScript !");
    }
}


/* Exercice 10 */
function runSign() {
    let number = Number(prompt("Entrez un nombre :"));

    if (number > 0) {
        alert(1);
    } else if (number < 0) {
        alert(-1);
    } else {
        alert(0);
    }
}

/* Exercice 12 */
function runOrResult() {
    alert(null || 2 || undefined);
}

/* Exercice 13 */
function runAlertOr() {
    alert(alert(1) || 2 || alert(3));
}

/* Exercice 14 */
function runAndResult() {
    alert(1 && null && 2);
}

/* Exercice 15 */
function runAlertAnd() {
    alert(alert(1) && alert(2));
}

/* Exercice 16 */
function runOrAndOr() {
    alert(null || 2 && 3 || 4);
}

/* Exercice 17 */
function runCheckRangeFixed() {
    let age = 25;

    if (age >= 14 && age <= 90) {
        alert("L'âge est compris entre 14 et 90 ans inclus.");
    } else {
        alert("L'âge est en dehors de la plage autorisée.");
    }
}

/* Exercice 18 */
function runOutsideRange() {
    let age = 25;

    // Variante 1
    if (!(age >= 14 && age <= 90)) {
        alert("Variante I : L'âge n'est pas compris entre 14 et 90 ans inclus.");
    } else {
        alert("Variante I : L'âge est compris entre 14 et 90 ans inclus.");
    }

    // Variante 2
    if (age < 14 || age > 90) {
        alert("Variante II : L'âge n'est pas compris entre 14 et 90 ans inclus.");
    } else {
        alert("Variante II : L'âge est compris entre 14 et 90 ans inclus.");
    }
}

/* Exercice 19 */
function runIfQuestion() {
    if (-1 || 0) alert("first");
    if (-1 && 0) alert("second");
    if (null || -1 && 1) alert("third");
}

/* Exercice 20 */
function runCheckLogin() {
    let userName = prompt("Who's there?");

    if (userName === "Admin") {

        let password = prompt("Password?");

        if (password === "TheMaster") {
            alert("Welcome!");
        } else if (password === "" || password === null) {
            alert("Canceled");
        } else {
            alert("Wrong password");
        }

    } else if (userName === "" || userName === null) {
        alert("Canceled");
    } else {
        alert("I don't know you");
    }
}

/* Exercice 21 */
function runLastLoopValue() {
    let i = 3;

    while (i) {
        alert(i--);
    }
}

/* Exercice 22 */
function runWhileComparison() {

    // Préfixe
    let i = 0;
    while (++i < 5) {
        alert("Préfixe ++i : " + i);
    }

    // Postfixe
    i = 0;
    while (i++ < 5) {
        alert("Postfixe i++ : " + i);
    }
}

/* Exercice 23 */
function runForLoopValues() {

    // Forme postfixe
    for (let i = 0; i < 5; i++) {
        alert("i++ : " + i);
    }

    // Forme préfixe
    for (let i = 0; i < 5; ++i) {
        alert("++i : " + i);
    }
}

/* Exercice 24 */
function runEvenNumbers() {
    for (let i = 2; i <= 10; i++) {
        if (i % 2 === 0) {
            alert(i);
        }
    }
}

/* Exercice 25 */
function runForToWhile() {
    let i = 0;

    while (i < 3) {
        alert(`number ${i}`);
        i++;
    }
}

/* Exercice 26 */
function runRepeatUntilValid() {
    let number;

    do {
        number = prompt("Saisissez un nombre supérieur à 100 :");
    } while (number !== null && number <= 100);

    if (number !== null) {
        alert("Merci ! Vous avez saisi " + number + ".");
    }
}

/* Exercice 27 */
function runPrimeNumbers() {
    let n = Number(prompt("Entrez un nombre supérieur ou égal à 2 :"));
    let result = "";

    for (let i = 2; i <= n; i++) {
        let isPrime = true;

        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            result += i + " ";
        }
    }

    alert("Nombres premiers jusqu'à " + n + " : " + result);
}

/* Exercice 28 */
function runSwitchToIf() {
    let browser = prompt("Quel navigateur utilisez-vous ?");

    if (browser === "Edge") {
        alert("You've got the Edge!");
    } else if (
        browser === "Chrome" ||
        browser === "Firefox" ||
        browser === "Safari" ||
        browser === "Opera"
    ) {
        alert("Okay we support these browsers too");
    } else {
        alert("We hope that this page looks ok!");
    }
}

/* Exercice 29 */
function runIfToSwitch() {
    let a = +prompt("a ?", "");

    switch (a) {
        case 0:
            alert(0);
            break;
        case 1:
            alert(1);
            break;
        case 2:
        case 3:
            alert("2,3");
            break;
        default:
            alert("Valeur non prévue");
    }
}

/* Exercice 30 */
function runCheckAgeWithoutElse() {

    function checkAge(age) {
        if (age > 18) {
            return true;
        }
        return confirm("Did parents allow you?");
    }

    let age = +prompt("Quel est votre âge ?", "");
    alert(checkAge(age) ? "Accès autorisé" : "Accès refusé");
}

/* Exercice 31 */
function runCheckAgeShort() {

    // Variante avec ?
    function checkAge(age) {
        return (age > 18) ? true : confirm("Did parents allow you?");
    }

    // Variante avec ||
    function checkAgeOr(age) {
        return (age > 18) || confirm("Did parents allow you?");
    }

    let age = +prompt("Quel est votre âge ?", "");
    alert(checkAge(age) ? "Accès autorisé" : "Accès refusé");
}

/* Exercice 32 */
function runMinFunction() {

    function min(a, b) {
        return (a < b) ? a : b;
    }

    alert(`min(2, 5) = ${min(2, 5)}`);
    alert(`min(3, -1) = ${min(3, -1)}`);
    alert(`min(1, 1) = ${min(1, 1)}`);
}

/* Exercice 33 */
function runPowFunction() {

    function pow(x, n) {
        let result = 1;

        for (let i = 0; i < n; i++) {
            result *= x;
        }

        return result;
    }

    let x = +prompt("Entrez la base x :");
    let n = +prompt("Entrez l'exposant n (entier naturel ≥ 0) :");

    if (n < 0 || !Number.isInteger(n)) {
        alert("L'exposant doit être un entier naturel supérieur ou égal à 0.");
    } else {
        alert(`${x}^${n} = ${pow(x, n)}`);
    }
}

/* Exercice : Réécrire avec les fonctions fléchées */

function runArrowFunction() {

    function ask(question, yes, no) {
        if (confirm(question)) {
            yes();
        } else {
            no();
        }
    }

    ask(
        "Do you agree?",
        () => alert("You agreed."),
        () => alert("You canceled the execution.")
    );
}

/* Exercice : Compter les descendants */

function runDescendants() {
    alert(document.body.lastChild.nodeType);
}

/* Exercice : Balise dans le commentaire */

function runCommentTag() {
    let body = document.body;
    body.innerHTML = "<!--" + body.tagName + "-->";
    alert(body.firstChild.data);
}

/* ================= EXERCICE 34 ================= */
/* Obtenez l’attribut */

function runGetAttribute() {
    let element = document.querySelector('[data-widget-name]');
    let value = element.getAttribute('data-widget-name');
    alert(value);
}

/* ================= EXERCICE 35 ================= */
/* Rendre les liens externes orange */

function openExternalLinksPage() {
    window.open("html1.html", "_blank");
}

/* ================= EXERCICE 36 ================= */
/* createTextNode vs innerHTML vs textContent */

function runTextNodeComparison() {

    let text = "<b>Hello</b>";

    let elem1 = document.createElement("div");
    let elem2 = document.createElement("div");
    let elem3 = document.createElement("div");

    elem1.append(document.createTextNode(text));
    elem2.innerHTML = text;
    elem3.textContent = text;

    alert(
        "createTextNode → " + elem1.innerHTML + "\n" +
        "innerHTML → " + elem2.innerHTML + "\n" +
        "textContent → " + elem3.innerHTML
    );
}

/* ================= EXERCICE 37 ================= */
/* Créer une liste */

function runCreateList() {

    let ul = document.getElementById("list");
    ul.innerHTML = ""; // reset de la liste à chaque exécution

    while (true) {
        let text = prompt("Entrez un élément de la liste :");

        if (text === null || text === "") {
            break;
        }

        let li = document.createElement("li");
        li.textContent = text; // protège contre le HTML
        ul.append(li);
    }
}

// ================= EXERCICE 36 =================
// Création d’un arbre HTML à partir d’un objet JavaScript

const data = {
    Fish: {
        trout: {},
        salmon: {}
    },
    Tree: {
        Huge: {
            sequoia: {},
            oak: {}
        },
        Flowering: {
            "apple tree": {},
            magnolia: {}
        }
    }
};

/**
 * Crée récursivement une liste ul/li à partir d’un objet
 * @param {HTMLElement} container
 * @param {Object} obj
 */
function createTree(container, obj) {
    const ul = document.createElement("ul");

    for (let key in obj) {
        const li = document.createElement("li");
        li.textContent = key;

        // Si l’objet contient des enfants, on relance la fonction
        if (Object.keys(obj[key]).length > 0) {
            createTree(li, obj[key]);
        }

        ul.append(li);
    }

    container.append(ul);
}

// Lancement
const container = document.getElementById("container");
createTree(container, data);

/* ================= EXERCICE 42 ================= */
/* Afficher le nombre de descendants pour chaque <li> */

/**
 * Compte les descendants d’un <li> et affiche le total
 * @param {HTMLElement} li
 */
function countDescendants(li) {
    // Nombre total de <li> imbriqués
    const descendants = li.querySelectorAll("li").length;

    // On ignore les feuilles
    if (descendants > 0) {
        li.firstChild.textContent += " [" + descendants + "]";
    }
}

// Sélection de tous les <li> de l’arbre
const items = document.querySelectorAll("#tree li");

// Application du comptage
items.forEach(li => countDescendants(li));

// ================= EXERCICE 40 =================
// Fonction qui crée un calendrier dans un élément HTML

function createCalendar(elem, year, month) {

    let table = document.createElement("table");

    // En-tête des jours
    let days = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"];
    let tr = document.createElement("tr");

    for (let day of days) {
        let th = document.createElement("th");
        th.textContent = day;
        tr.append(th);
    }
    table.append(tr);

    // Date de départ
    let date = new Date(year, month - 1, 1);

    // Ajustement pour commencer le lundi
    let startDay = (date.getDay() + 6) % 7;

    tr = document.createElement("tr");

    // Cellules vides avant le 1er jour
    for (let i = 0; i < startDay; i++) {
        tr.append(document.createElement("td"));
    }

    // Jours du mois
    while (date.getMonth() === month - 1) {
        let td = document.createElement("td");
        td.textContent = date.getDate();
        tr.append(td);

        if ((date.getDay() + 6) % 7 === 6) {
            table.append(tr);
            tr = document.createElement("tr");
        }

        date.setDate(date.getDate() + 1);
    }

    if (tr.children.length > 0) {
        table.append(tr);
    }

    elem.append(table);

    
}

/* ================= EXERCICE 45 ================= */
/* Horloge colorée avec setInterval */

/* Variable pour stocker l’identifiant du setInterval */
/* Initialisée à null pour éviter les erreurs */
let timerId = null;

/* Fonction qui met à jour l’heure affichée */
function updateClock() {

    /* Sélection des éléments HTML */
    let hoursElem = document.querySelector(".hours");
    let minutesElem = document.querySelector(".minutes");
    let secondsElem = document.querySelector(".seconds");

    /* Sécurité : si les éléments n'existent pas, on arrête */
    if (!hoursElem || !minutesElem || !secondsElem) {
        return;
    }

    let now = new Date();

    /* Récupération des heures, minutes et secondes */
    let h = String(now.getHours()).padStart(2, "0");
    let m = String(now.getMinutes()).padStart(2, "0");
    let s = String(now.getSeconds()).padStart(2, "0");

    /* Mise à jour du contenu HTML */
    hoursElem.textContent = h;
    minutesElem.textContent = m;
    secondsElem.textContent = s;
}

/* Fonction pour démarrer l’horloge */
function startClock() {
    if (timerId === null) {
        updateClock();
        timerId = setInterval(updateClock, 1000);
    }
}

/* Fonction pour arrêter l’horloge */
function stopClock() {
    clearInterval(timerId);
    timerId = null;
}

/* ================= EXERCICE 46 ================= */
/* Create a notification */

function showNotification(options) {

    // Création de l’élément
    let div = document.createElement("div");
    div.className = "notification";

    // Classe supplémentaire optionnelle
    if (options.className) {
        div.classList.add(options.className);
    }

    // Contenu HTML
    div.innerHTML = options.html;

    // Positionnement
    div.style.top = (options.top || 0) + "px";
    div.style.right = (options.right || 0) + "px";

    // Ajout au document
    document.body.append(div);

    // Suppression automatique après 1,5 seconde
    setTimeout(() => {
        div.remove();
    }, 1500);
}

function runNotification() {
    showNotification({
        top: 10,
        right: 10,
        html: "Hello!",
        className: "welcome"
    });
}

/* ================= EXERCICE 47 ================= */
/* Quel est le défilement à partir du bas ? */

function getScrollBottom(elem) {
    return Math.max(
        0,
        elem.scrollHeight - elem.scrollTop - elem.clientHeight
    );
}

function runScrollBottom() {
    const box = document.getElementById("box");
    alert(getScrollBottom(box));
}

/* ================= EXERCICE 48 ================= */
/* Placer la balle au centre du terrain */

function runCenterBall() {
    const field = document.getElementById("field");
    const ball = document.getElementById("ball");

    const left = (field.clientWidth - ball.offsetWidth) / 2;
    const top = (field.clientHeight - ball.offsetHeight) / 2;

    ball.style.left = left + "px";
    ball.style.top = top + "px";
}

/* ================= EXERCICE 49 ================= */
/* Trouver les coordonnées de la fenêtre du champ */

function runFieldCoords() {

    const field = document.getElementById("field-coords");
    const coordsText = document.getElementById("coords");

    // Affichage des coordonnées du clic
    document.addEventListener("click", function (event) {
        coordsText.textContent =
            "x: " + event.clientX + ", y: " + event.clientY;
    });

    const rect = field.getBoundingClientRect();

    const outerTopLeft = {
        x: rect.left,
        y: rect.top
    };

    const outerBottomRight = {
        x: rect.right,
        y: rect.bottom
    };

    const innerTopLeft = {
        x: rect.left + field.clientLeft,
        y: rect.top + field.clientTop
    };

    const innerBottomRight = {
        x: innerTopLeft.x + field.clientWidth,
        y: innerTopLeft.y + field.clientHeight
    };

    console.log("Extérieur haut gauche :", outerTopLeft);
    console.log("Extérieur bas droite :", outerBottomRight);
    console.log("Intérieur haut gauche :", innerTopLeft);
    console.log("Intérieur bas droite :", innerBottomRight);
}

/* ================= EXERCICE 50 ================= */
/* Cacher sur clic */

function runHideText() {
    const text = document.getElementById("text-to-hide");
    text.style.display = "none";
}

/* ================= EXERCICE 51 ================= */
/* Se cacher */

function runSelfHide(button) {
    button.style.display = "none";
}

/* ================= EXERCICE 52 ================= */
/* Déplacer le ballon à travers le terrain */

function initBallMove() {
    const field = document.getElementById("field52");
    const ball = document.getElementById("ball52");

    if (!field || !ball) {
        return; // sécurité absolue
    }

    field.addEventListener("click", function (event) {

        const rect = field.getBoundingClientRect();

        let x = event.clientX - rect.left - ball.offsetWidth / 2;
        let y = event.clientY - rect.top - ball.offsetHeight / 2;

        x = Math.max(0, Math.min(x, field.clientWidth - ball.offsetWidth));
        y = Math.max(0, Math.min(y, field.clientHeight - ball.offsetHeight));

        ball.style.left = x + "px";
        ball.style.top = y + "px";
    });
}

/* ================= EXERCICE 53 ================= */
/* Créer un menu glissant */

function runMenu() {
    const menu = document.getElementById("menu53");
    const title = menu.querySelector(".menu-title");

    title.onclick = function () {
        menu.classList.toggle("open");
    };
}


/* ================= EXERCICE ================= */
/* Raccourcis clavier étendus */

const pressed = new Set();

document.addEventListener("keydown", (event) => {
    pressed.add(event.code);

    if (pressed.has("KeyQ") && pressed.has("KeyW")) {
        alert("Hello!");
        pressed.clear(); // empêche répétition infinie
    }
});

document.addEventListener("keyup", (event) => {
    pressed.delete(event.code);
});
