'use strict';

// Dostęp do elementu, jego węzła i rodzica (takie same)
var paragraf = document.getElementById('parFirst');
console.log(paragraf);
console.log(paragraf.parentNode);
console.log(paragraf.parentElement);

// Dostęp do dzieci (nie tylko znaczników html, ale też spacje, entery, komentarze...)
console.log(paragraf.childNodes);

// Tylko znaczniki html
console.log(paragraf.children);

// Wszystko
console.log(paragraf.firstChild);
console.log(paragraf.lastChild);

// Tylko znaczniki
console.log(paragraf.firstElementChild);
console.log(paragraf.lastElementChild);

// Dostęp do rodzeństwa
console.log(paragraf.nextSibling);
console.log(paragraf.previousSibling);

// Tylko znaczniki
console.log(paragraf.nextElementSibling);
console.log(paragraf.previousElementSibling);

// Usuwanie węzłów określonego typu
paragraf.childNodes.forEach(function(element, i) { 
    if (element.nodeType === 8) {   // 8 - typ typu komentarz (nodeType definiuje typ węzła)
        console.log('Komentarz');
        // Usuwa komentarz z kodu
        element.parentNode.removeChild(element);
    }
});


