const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

var ul = document.querySelector('ul');

// bands.sort((first, second) => {
//     var firstHasArticle = first.startsWith('A ') || first.startsWith('The ') || first.startsWith('An ');
//     var secondHasArticle = second.startsWith('A ') || second.startsWith('The ') || second.startsWith('An ');
//     if (firstHasArticle) {
//         var firstBand = first.startsWith('A ') ? first.slice(2) : first.startsWith('An ') ? first.slice(3) : first.slice(4);

//     } else {
//         firstBand = first;
//     };
//     if (secondHasArticle) {
//         var secondBand = second.startsWith('A ') ? second.slice(2) : second.startsWith('An ') ? second.slice(3) : second.slice(4);

//     } else {
//         secondBand = second;
//     }

//     if (firstBand > secondBand) return 1;
//     return -1;
// })


function removeArticle(string) {
    return string.replace(/^(a |an |the )/i, '');
}

bands.sort((first, second) => {
    if (removeArticle(first) > removeArticle(second)) return 1;
    return -1;
})


var lists = bands.map(band => {
    return `
    <li>${band}</li>
    `
}).join('');
ul.innerHTML = lists;
