'use strict';

// WYŁAPYWANIE ZDARZEŃ

// Zmiana stylu po kliknięciu na paragraf 1
function alertFunction() {
    //alert('nowy alarm');
    var par = document.getElementById('parFirst').firstElementChild;
    par.style.backgroundColor = 'pink';
}

// Alternatywny sposób - trzeba dodać this w html jako parametr alertFunction
/*function alertFunction(par) {
    par.style.backgroundColor = 'pink';
}*/

// Inny sposób na wyłapywanie zdarzeń
var h1 = document.getElementById('main-header');
// Sposób 1
/*h1.onclick = function() { // Funkcja anonimowa
    this.style.backgroundColor = 'red';
};*/
// Sposób 2
function changeBackground() { // Do wielokrotnego wywołania po nazwie funkcji
    this.style.backgroundColor = 'red'; // Funkcja nazwana
}
h1.onclick = changeBackground; // Funkcja bez nawiasów (tylko dla zdarzeń)

// Sposób 3 - nasłuchiwanie zdarzeń (czy nie wystąpią określone okoliczności)
var firstLink = document.getElementsByClassName('link')[0];
function highlight(event) { // Pozwala dorwać się do obiektu zdarzenia
    event.preventDefault(); // Zabezpiecza przed przeładowaniem strony
    event.stopPropagation(); // Wyłączyć do innych przykładów poza propaginacją
    // setTimeout(function(), 3000); // Opóźnienie o 3s
    this.style.border = ' 2px yellow solid'; // Dodaje żółtą ramkę do linka
    alert('kliknięto w link');
}
firstLink.addEventListener('click', highlight);

// Propaginacja - zdarzenia idą od wewnętrznych w górę
document.getElementById('sectionFirst').addEventListener('click', function()  {
   alert('kliknięcie w sekcję');
})