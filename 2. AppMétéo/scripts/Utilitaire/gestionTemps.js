const joursSemain = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];

let ajd = new Date();
let optiions = { weekday: 'long' };
let jourActuel = ajd.toLocaleDateString('fr-FR', optiions);

// console.log(jourActuel, ajd);

jourActuel = jourActuel.charAt(0).toUpperCase() + jourActuel.slice(1);

let tabJoursEnOrdre = joursSemain.slice(joursSemain.indexOf(jourActuel)).concat(joursSemain.slice(0, joursSemain.indexOf(jourActuel)))

// console.log(tabJoursEnOrdre);

export default tabJoursEnOrdre;