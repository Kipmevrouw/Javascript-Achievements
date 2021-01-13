let dobbel1 = document.getElementById('1');
let dobbel2 = document.getElementById('2');
let dobbel3 = document.getElementById('3');
let knopje = document.getElementById('knopje');
let opnieuw = document.getElementById('opnieuw');
var nummer = [];


knopje.addEventListener('click', async () => {

    for (let i = 1; i < 4; i++) randomizer(i);

    for (let i = 0; i < 4; i++) nummer.push(randomizer());;


    let min_number = Math.min.apply(Math, nummer);
    nummer.pop(min_number);

    optel = nummer[0] + nummer[1] + nummer[2];
    
    dobbel1.innerHTML = optel;

})
function randomizer(range = 6){ 
    return Math.floor((Math.random() * range)) + 1;
}