'use strict';

var h1 = document.getElementById('main-header');
console.log(h1.innerHTML);

// Zmiana tytułu nagłówka
h1.innerHTML = 'Nowy <span>nagłówek</span>';
// Zmiana na mały znacznik np. h3
/*h1.outerHTML = '<h3>Mały nagłówek</h3>';*/ // Działa na treść i sam znacznik

// Zmiana atrybutu
var link = document.getElementsByClassName('link')[0];
console.log(link);
// Chcemy zmienić atrybut href
link.href = 'http://akademia108.pl';

// Zwraca nazwę klasy
console.log(link.className);
// Nadpisanie klasy
link.className = 'pierwsza-klasa';
// Dołączenie ciągu znaków
/*link.className += ' druga klasa';*/

// Zmiana wszystkich linków na stronie
var allLinks = document.getElementsByTagName('a');
console.log(allLinks);
// Chcemy dodać do nich klasę
/*for (var i = 0; i < allLinks.length; i++) {
    allLinks[i].className += ' zupelnie-nowa-klasa';
}*/

// Zmiana stylu nagłówka h1
h1.style.color = '#ff0000';
h1.style.backgroundColor = '#00ff00';

// figure:hover:after


