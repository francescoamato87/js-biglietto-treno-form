

// ..................BIGLIETTO TRENO................

// ELEMENTI DEL DOM

var container = document.getElementById('biglietto');
var bottoneGenera = document.getElementById('bottoneGenera');
var bottoneAnnulla = document.getElementById('bottoneAnnulla');

// ...........Genera Eventi............

// Calcolo e Generazione BIGLIETTO
bottoneGenera.addEventListener('click', function() {
  // console.log('click');

  // Ottieni Dati Utente
  // name fa parte dell'INPUT che è un SelfClosingTag e quindi non ha chiusura, JavaScript ci da
  // la funzione VALUE per valorizzarlo e senza assegnazione è possibile ottenere cosa c'è scritto dentro
  var nome = document.getElementById('nome').value;
  console.log(nome);

  var kmDaPercorrere = document.getElementById('km').value;
  console.log(kmDaPercorrere);

  var fasciaDiEtà = document.getElementById('fascia-età').value;
  console.log(fasciaDiEtà);


// OFFERTE E CALCOLO COSTO Biglietto

var prezzoKm = 0.21;
var costoBiglietto = prezzoKm * kmDaPercorrere;
var offerta = 'Biglietto Standard';

// Condizioni OFFERTE
if (fasciaDiEtà == 'minorenne') {
  // 20%sconto
  costoBiglietto == costoBiglietto * 0.2;
  offerta = 'Sconto Minorenni';
}
  else if (fasciaDiEtà == 'over-65') {
    // 40%Sconto
    costoBiglietto == costoBiglietto * 0.4;
    offerta = 'Sconto Over 65';
  }

// Valuta e Decimali
costoBiglietto = costoBiglietto.toFixed(2) + '€';

// Usiamo i numeri Random

var numCarrozza = Math.floor(Math.random() * 10) + 1;

// questo ci permette di avere un range 9000 e 10000
// max - min
var codiceCp = Math.floor(Math.random() * (10000 - 9000 + 1)  ) + 9000;



// ora dobbiamo inserirli ognuno nel suo posto:

// elemento DOM
document.getElementById('nome-passeggero').innerHTML= nome;
document.getElementById('offerta-applicata').innerHTML= offerta;
document.getElementById('carrozza').innerHTML= numCarrozza;
document.getElementById('codice-cp').innerHTML= codiceCp;
document.getElementById('costo').innerHTML= costoBiglietto;



}) ;
