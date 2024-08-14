// Demander à l'utilisateur de saisir un nombre entier
let n;
do {
    n = prompt("Veuillez saisir un nombre entier pour afficher sa table de multiplication:");
    n = parseInt(n, 10);
} while (isNaN(n) || !Number.isInteger(n));

// Créer le tableau HTML
let tableau = '<table>';
tableau += '<thead><tr><th>Multiplier</th><th>Résultat</th></tr></thead><tbody>';

for (let i = 1; i <= 10; i++) {
    tableau += `<tr><td>${n} x ${i}</td><td>${n * i}</td></tr>`;
}

tableau += '</tbody></table>';

// Afficher le tableau dans le body de la page
document.body.innerHTML = tableau;