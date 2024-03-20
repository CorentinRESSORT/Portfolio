"use strict";
// ? ------------------- CONTENT -------------------------
let bvnMsg = [
    "<p>$ Bienvenue sur mon Portfolio</p><br>",
    "<p> Ce portfolio est conçu pour être navigué en ligne de commande.</p>",
    "<p>Voici quelques commandes pour vous aider à explorer</p>",
    "<ul><li>Utlisez 'ls' pour lister les projets disponible</li><li>Tapez 'cd <nom-du-projet>' pour accéder à un projet spécifique</li><li>Pour revenir en arrière, utilisez 'cd ..'</li><li>'help' affiche une liste des commandes disponibles.</li>"
];

let user = ["<p class='pCmd'><span>visitor@visitor:~$</span><span class='textCmd'></span><span id='cursor'></span></p>"];

let pres =["<h2>Présentation</h2><p>Bonjour ! Je suis Corentin Ressort, passionné par le monde de l'informatique et de la technologie. Actuellement en formation de développeur web et web mobile à l'AFCI de Villeneuve-d'Ascq, je nourris une passion profonde pour l'exploration des domaines de la programmation et de la cybersécurité. Mon parcours éducatif, bien que comportant des défis, m'a renforcé dans ma détermination à exceller dans le domaine de l'informatique.</p>"];

let parc =["<h2>Parcours</h2><p>Après avoir exploré le monde de l'informatique et poursuivi ma passion pour la technologie, j'ai décidé de rejoindre l'école 42 pour approfondir mes connaissances. Avant cela, j'ai commencé à tracer mon chemin en informatique, mais je n'ai malheureusement pas obtenu mon BTS SIO. Cette expérience m'a cependant motivé à persévérer et à poursuivre mes ambitions dans le domaine de l'informatique. Aujourd'hui, je suis actuellement en formation de développeur web et web mobile à l'AFCI de Villeneuve-d'Ascq, avec l'objectif de développer mes compétences et de me spécialiser dans la cybersécurité, un domaine qui me passionne et dans lequel je suis déterminé à exceller.</p>"];

let comp =["<h2>Compétences</h2><p>Mes compétences techniques comprennent la maîtrise du langage C, la création de sites web et d'applications mobiles, ainsi que des connaissances en cybersécurité et en virtualisation. Je suis également compétent dans l'utilisation d'outils tels que Docker pour la gestion de conteneurs et la création d'environnements de développement.</p>"];

let expPro =["<h2>Expérience Professionel</h2><p>Au cours de mon parcours, j'ai eu l'occasion de mettre en pratique mes compétences en développement en participant à divers projets professionnels. Lors de mon stage, j'ai contribué à la refonte du site web de l'entreprise, en recréant à la fois le front-end et le back-end. De plus, j'ai développé un outil personnalisé pour améliorer la visibilité des demandes de devis reçues par le site, démontrant ainsi ma capacité à concevoir des solutions innovantes et adaptées aux besoins spécifiques des clients.</p>"];

let list = [
    "Présentation",
    "Parcours",
    "Compétences",
    "Expérience_Professionel",
    "./vue"
];

// ? ---------------------------------------------------------------------------
// ? ----------------------------- VAR UTILES ----------------------------------

let posCur =0;
// ? ---------------------------------------------------------------------------

showMsg(bvnMsg);
showMsg(user);

let txtCmd = document.querySelector(".textCmd");
let cursId = document.querySelector("#cursor");
let pCmd   = document.querySelector(".pCmd");
let tempData = "";

let hist    = [];
let posHist = 0;

function testCmd(str)
{
    let sub = str.split(' ');
    let contenu = document.createElement("section");
    let clone;
    console.log(sub);

    if (sub.length === 1 && str === "ls")
    {
        let i = 0;
        let li = document.createElement("li");
        contenu.append(document.createElement("ul"));
        while (i < list.length)
        {

            contenu.querySelector("ul").innerHTML += `<li>${list[i]}</li>`;
            i++;
        }
    }
    if (sub.length === 2 && sub[sub.length-1] != "")
    {
        if (sub[0] === "cat")
        {
            switch (sub[1])
            {
                case "Présentation":
                    contenu.innerHTML += pres;
                    break;
                case "Parcours":
                    contenu.innerHTML += parc;
                    break;
                case "Compétences":
                    contenu.innerHTML += comp;
                    break;
                case "Expérience_Professionel":
                    contenu.innerHTML += expPro;
                    break;
            }
        }
        else if (sub[0] === "cat")
        {

        }
    }
    
    clone = pCmd.cloneNode("true");
    clone.querySelector("#cursor").remove();
    hist.push(txtCmd.textContent);
    document.getElementsByTagName("main")[0].insertBefore(clone, pCmd);
    document.getElementsByTagName("main")[0].insertBefore(contenu, pCmd);
    txtCmd.textContent = "";
    posCur = 0;
    posHist++;
}

function showMsg(txtShwn)
{
    let i = 0;
    let lg = txtShwn.length;
    let main = document.getElementsByTagName("main");

    while (i < lg)
    {
        main[0].innerHTML += txtShwn[i];
        i++;
    }
}

function comprString(str, str2)
{
    let boo = false;
    if (str === str2)
        boo = true;
    return (boo);
}

function insertAt(str, ch, ind)
{
    let i = 0;
    let nStr = "";
    if (ind === str.length)
    {
        nStr = str+ch;
    }
    else
    {
        while (i < str.length)
        {
            if (i === ind)
                nStr += ch + str[i];
            else
                nStr += str[i];
            i++;
        }
    }
    return (nStr);
}

window.addEventListener("keypress",(key)=>{
    if (key.code != "Enter")
    {
        txtCmd.textContent = insertAt(txtCmd.textContent, key.key, posCur);
        posCur++;
    }
    if (key.code === "Enter")
    {
        testCmd(txtCmd.textContent);
    }
});

window.addEventListener("keydown", (key)=>{
         
    if (key.code === "Backspace")
        {
            txtCmd.textContent = txtCmd.textContent.substring(0, txtCmd.textContent.length -1);
            posCur--;
        }
    if(key.code === "ArrowLeft" && txtCmd.textContent.length > 0)
    {
        let i = txtCmd.offsetWidth / txtCmd.textContent.length;
        
        if (posCur > 0)
            posCur--;
        cursId.style.transform = `translate(-${i*(txtCmd.textContent.length - posCur)}px)`;
        cursId.style.width = `${i}px`;
    }
    if(key.code === "ArrowRight" && posCur < txtCmd.textContent.length)
    {
        let i = txtCmd.offsetWidth / txtCmd.textContent.length;

        posCur++;
        cursId.style.transform = `translate(-${i*(txtCmd.textContent.length - posCur)}px)`;
    }
    
    if(key.code === "ArrowUp" && posHist > 0)
    {
        let i = txtCmd.offsetWidth / txtCmd.textContent.length;
    
        posHist--;
        if (posHist+1 === hist.length)
            tempData = txtCmd.textContent;
        txtCmd.textContent = document.getElementsByClassName("textCmd")[posHist].textContent;
        cursId.style.transform = `translate(0px)`;
        posCur = txtCmd.textContent.length;
    }

    if(key.code === "ArrowDown" && posHist < hist.length)
    {
        let i = txtCmd.offsetWidth / txtCmd.textContent.length;
    
        posHist++;
        if (posHist === hist.length)
            txtCmd.textContent = tempData;
        else
            txtCmd.textContent = document.getElementsByClassName("textCmd")[posHist].textContent;
        cursId.style.transform = `translate(0px)`;
        posCur = txtCmd.textContent.length;
    }
});

// TODO : Créer variable contenant le txtCmd & les valeurs répétitives :check
// TODO : créer insertion caractère en fonction du curseur - debug double frappe :check dans mes bras narvalo
// TODO : Gérer --help
// TODO : ***** cd :uncheck
// TODO : ***** ls :check
// TODO : ***** cat? :check


// TODO : Ajouter autocomplétion, raccourcir les Listeners, vérifier les redondances les mettre dans des fonctions

// 💡 canvas, regarder pour faire des classes séparer le code en plusieurs fichiers, différencier les etats (terminal, jeux, pro)

// ! --- Canvas APP ---

