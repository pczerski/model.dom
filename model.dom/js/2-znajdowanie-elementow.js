'use strict';

// Pobieranie elementu za pomocą id
var parFirst = document.getElementById('parFirst');
console.log(parFirst);

// Pobieranie elementu za pomocą nazwy klasy
var linki = document.getElementsByClassName('superlink');
console.log(linki);
console.log(linki[0]); // Pierwszy element

// Pobieranie elementu po tagu
var linkiPoTagu = document.getElementsByTagName('a');
console.log(linkiPoTagu);
console.log(linkiPoTagu[3]);

// Pobieranie elementu po selektorze css
var elementPoSelektorze = document.querySelector('#parFirst > a');
console.log(elementPoSelektorze);
var elementPoSelektorze = document.querySelectorAll('#parFirst > a');
console.log(elementPoSelektorze);

// Pobieranie tablicy zamiast kolekcji
var tablicaZTresciaLinkow = [];
elementPoSelektorze.forEach(function(el, i) {
    console.log(el.innerHTML);
    
    tablicaZTresciaLinkow.push(el.innerHTML);
});
console.log(tablicaZTresciaLinkow);

