// I got this code from youtube search

document.addEventListener('DOMContentLoaded', function () {
    // Getting the element ID using 'img-to-drag'
    let el = document.getElementById('img-to-drag');
    let el2 = document.getElementById('img-to-drag2');
    let el3 = document.getElementById('img-to-drag3');
    let el4 = document.getElementById('img-to-drag4');
    let el5 = document.getElementById('img-to-drag5');

    let draggie = new Draggabilly(el);
    let draggie2 = new Draggabilly(el2);
    let draggie3 = new Draggabilly(el3);
    let draggie4 = new Draggabilly(el4);
    let draggie5= new Draggabilly(el5);
});