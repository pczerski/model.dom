'use strict';

var istniejacyWezel = document.getElementById('parSecond').children[0];
console.log(istniejacyWezel);

// Tworzenie nowego elementu
var h2 = document.createElement('h2');
// Tworzenie tekstu
var textInH2 = document.createTextNode('Nowy nagłówek H2');

// Dodanie id (oczywiście nie konieczne)
var attribute = document.createAttribute('id');
h2.setAttributeNode(attribute);
h2.id = 'nowe-id';

// Tworzy referencje w pamięci do elementu
h2.appendChild(textInH2); // Doda nam do wewnątrz jako ostatnie dziecko elementu h2
console.log(h2.nodeType); // Zwracanie typu elementu
// Fizyczne tworzenie w html
document.getElementById('parSecond').insertBefore(h2, istniejacyWezel);

//istniejacyWezel.parentElement.removeChild(istniejacyWezel);

