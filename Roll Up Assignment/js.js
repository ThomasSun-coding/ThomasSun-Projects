let pleaseplayagain = 0;
let freecoffee = 0;
let freedonut = 0;
let grandprize = 0;
let province;
let random;

document.getElementById('plusone').addEventListener('click', simonce);
document.getElementById('plusfive').addEventListener('click', simfive);
document.getElementById('untilprize').addEventListener('click', untilprize)
document.getElementById('until500').addEventListener('click', until500donuts)

function simonce() {
    province = document.getElementById('province').value;
    random = Math.random();

    if (province == 'British Columbia' || province == 'british columbia' || province == 'BRITISH COMLUMBIA') {
        if (random < 0.7) {
            pleaseplayagain++;
            document.getElementById('playagain').innerHTML = pleaseplayagain;
        } else if (random < 0.8) {
            freecoffee++;
            document.getElementById('coffee').innerHTML = freecoffee;
        } else if (random < 0.9) {
            freedonut++;
            document.getElementById('donut').innerHTML = freedonut;
        } else {
            grandprize++;
            document.getElementById('prize').innerHTML = grandprize;
        }
    } else if (province == 'Alberta' || province == 'alberta' || province == 'ALBERTA') {
        if (random < 0.15) {
            pleaseplayagain++;
            document.getElementById('playagain').innerHTML = pleaseplayagain;
        } else if (random < 0.55) {
            freecoffee++;
            document.getElementById('coffee').innerHTML = freecoffee;
        } else if (random < 0.95) {
            freedonut++;
            document.getElementById('donut').innerHTML = freedonut;
        } else {
            grandprize++;
            document.getElementById('prize').innerHTML = grandprize;
        }
    } else if (province == 'Saskatchewan' || province == 'saskatchewan' || province == 'SASKATCHEWAN') {
        if (random < 0.7) {
            pleaseplayagain++;
            document.getElementById('playagain').innerHTML = pleaseplayagain;
        } else if (random < 0.71) {
            freecoffee++;
            document.getElementById('coffee').innerHTML = freecoffee;
        } else if (random < 0.72) {
            freedonut++;
            document.getElementById('donut').innerHTML = freedonut;
        } else {
            grandprize++;
            document.getElementById('prize').innerHTML = grandprize;
        }

    } else {
        alert('Invalid Province')
    }
}

function simfive() {
    province = document.getElementById('province').value;
    random = Math.random();
    for (let n = 0; n < 5; n++) {
        simonce();
    }
}

function untilprize() {
   while(grandprize < 1){
       simonce();
   }

}

function until500donuts() {
   while(freedonut < 500){
       simonce;
   }
    
}