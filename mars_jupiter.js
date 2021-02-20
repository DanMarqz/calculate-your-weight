let user = prompt("What is your weight?");
let planet = parseInt(prompt("Choose your planet.\n1 is Mars \n2 is Jupiter"));

let weight = parseInt(user);
let g_earth = 9.8;
let g_mars = 3.7;
let g_jupiter = 24.8;

let final_weight;
let name_planet;

if (planet == 1) {
  final_weight = (weight * g_mars) / g_earth;
  name_planet = "Mars";
} else if (planet == 2) {
  final_weight = (weight * g_jupiter) / g_earth;
  name_planet = "Jupiter";
} else {
  final_weight = 1000000;
  name_planet = "Krypton";
}

final_weight = parseInt(final_weight);

document.write(
  "Your weight on " +
    name_planet +
    " is <strong>" +
    final_weight +
    " KG</strong>"
);
