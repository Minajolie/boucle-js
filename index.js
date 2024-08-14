let saisie = prompt("Saisie un type de boucle pour voir la definition et l'utilisation de celle-ci.")
if (saisie==="for"){
    alert("La boucle for permet d'exécuter un code un certain nombre de fois en précisant manuellement l'intervalle pour lequel on souhaite faire la boucle.")
}
else if (saisie==="while"){
    alert("La boucle while permet d'exécuter un code tant que la condition passée en paramètre n'est pas satisfaite")
}
else if (saisie==="do...while"){
    alert("La do...whileliste déroulante d'instructions définit un bloc de code à exécuter une fois et à répéter tant qu'une condition est respectée true.")
}
else{
    alert("saisie un type de boucle")
}