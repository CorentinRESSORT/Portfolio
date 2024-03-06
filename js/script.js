"use strict";

let bvnMsg = [
    "<p>$ Bienvenue sur mon Portfolio</p><br>",
    "<p> Ce portfolio est conçu pour être navigué en ligne de commande.</p>",
    "<p>Voici quelques commandes pour vous aider à explorer</p>",
    "<ul><li>Utlisez 'ls' pour lister les projets disponible</li><li>Tapez 'cd <nom-du-projet>' pour accéder à un projet spécifique</li><li>Pour revenir en arrière, utilisez 'cd ..'</li><li>'help' affiche une liste des commandes disponibles.</li>"
];

let user = ["<p><span>visitor@visitor:~$</span><span id='textCmd'></span><span id='cursor'></span></p>"];

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

window.addEventListener("keypress",
(key)=>{
        document.getElementById("textCmd").textContent += key.key;
    }
);
let rep;

window.addEventListener("keydown", (key)=>{
         
    if (key.code === "Backspace")
         {
            document.getElementById("textCmd").textContent = document.getElementById("textCmd").textContent.substring(0, document.getElementById("textCmd").textContent.length -1);
         }
         if (key.code === "Enter")
         {
            fetch("../test.html").then(response => response.text())
            .then(html => {
                document.getElementsByTagName("main")[0].innerHTML += html;
            })
        }
    }
    );
    
    showMsg(bvnMsg);
    showMsg(user);
    console.log(rep);
    


