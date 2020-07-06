


/*
*****************************************************************
*****************************************************************
***  ESEMPIO DI COME INSERIRE IL COD JS DIRETTAMENTE NEL HTML ***
*****************************************************************
*****************************************************************
<html>
<head>
	<title>Esercizio JS0001 (Codice)</title>
	<script language="Javascript">  //<-- GUARDA QUI!!!****
	function Calcola()
	{	op1 = 5;
		op2 = 4;
		somma = op1 + op2;
		differenza = op1 - op2;
		prodotto = op1 * op2;
		quoziente = op1 / op2;
		alert ("Il risultato dell'addizione è " + somma);
		alert ("Il risultato della sottrazione è " + differenza);
		alert ("Il risultato della moltiplicazione è " + prodotto);
		alert ("Il risultato della divisione è " + quoziente);
	}
	</script>
</head>
<body>
	<input type="button" name="esegui" value="Esegui" onclick="Calcola()">
</body>
</html>
*****************************************************************
*****************************************************************
*/

/*
//**************************************************************
//METODO ** Number() ** PER TRASFORMARE UNA STRINGA IN UN NUMERO
//**************************************************************
var x = "3";
var y = "5";
var n = Number(x);//con questo metodo convertiamo la stringa contenuta nella var x in un numero.
var n1 = Number(y);
var somma = x * y;
document.write(somma);
*/


/*
      **********************************************
      ***************** OGGETTI  *******************
      **********************************************
*/// gli OGGETTI ci permettono di immagazinare piu dati (eterogenei) in una variabile.


//      ******* SFIDA 1 - LEZIONE 65 *******

/*
var studenti = [
  {
    Nome: "Fabio",
    Cognome: "Brina",
    Eta: "27",
    Nazionalità: "Italiano"
  },
  {
    Nome: "Taras",
    Cognome: "Mikhaylovskyy",
    Eta: "40",
    Nazionalità: "Ukraina"
  },
  {
    Nome: "Elon",
    Cognome: "Musk",
    Eta: "38",
    Nazionalità: "Africano"
  },
  {
    Nome: "Valerio",
    Cognome: "Rossi",
    Eta: "24",
    Nazionalità: "Italiano"
  },
  {
    Nome: "Bill",
    Cognome: "White",
    Eta: "33",
    Nazionalità: "USA"
  }

];
var elenco;
function message(x) {//stampiamo le domande.
  for (var i = 0; i < studenti.length ; i += 1) {
    elenco = " <h2> " + studenti[i].Nome;
    elenco +=   studenti[i].Cognome + "</h2>";
    elenco +=  " <h1> eta: </h1> " + studenti[i].Eta + " anni, ";
    elenco +=  " <h1> nazionalità: " + studenti[i].Nazionalità  + "</h1>";

    document.write( "Studente: " + elenco );
  }
} message(studenti);


/*
var studente = {//è il nostro OGGETTO con le sue proprietà
  Nome: "Mario",
  Cognome: "Ugolini",
  Eta: 39,
  Corso: ["crea un corso", "css avanzato"]
}
var messagio;//dichiaro la var per stampare a video i messagi
function print(message) {//creo la funzione per stampare a video messagi di qui ho bisogno
  var div = document.getElementById("output");//la parte del HTML. il OUTPUT è ** id ** del HTML. vedi il cod html
  div.innerHTML = message;

} messagio = "<p> ciao mi chiamo " + studente.Nome + ",</p>";//usando la funzione print e var messagio stampo a video il messagio con le proprieta del oggetto STUDENTE
  messagio += "<p> ho " + studente.Eta + " anni </p>"
  //se ho bisogno di aggiungere una proprietà al ARREY contenuto nel oggetto lo faccio in questo modo:
  studente.Corso = ["crea un corso", "css avanzato", "JS avanzato"];
  messagio += "<p> e sono escritto a " + studente.Corso.length + " corsi"
print(messagio);//richiamo la funzione per stampare il messagio.
*/


/*
//      ******* COMBINARE ARREY E OGGETTI NELLA STASSA DICHIARAZIONE *******
//      ******* CREIAMO UN ARREY DI OGGETTI *******
var domande = [
  {
    domanda: "Dimmi uno di linguaggio che si usa per sviluppare pagine web?",
    soluzione: "HTML",
    soluzione2: "CSS",
    soluzione3: "JS"
  },
  {
    domanda: "Dimmi una delle 2 marche di cellulare piu famose al mondo? ",
    soluzione: "APPLE",
    soluzione2: "SAMSUNG",
  },
  {
    domanda: "Dimmi il nome del attuale presidente d'America ",
    soluzione: "TRUMP"
  },
  {
    domanda: "Dimmi il nome di fondattore di Apple? ",
    soluzione: "BILL"
  },
  {
    domanda: "Dimmi il nome del sistema operativo piu diffuso al mondo? ",
    soluzione: "WINDOWS"
  }

];

var risposta;
var rispostaPunti = 0;
var rispGiuste = 0;

function stampaDomande(x) {//stampiamo le domande.
  for (var i = 0; i < domande.length ; i += 1) {
    risposta = prompt(domande[i].domanda);
    if (risposta.toUpperCase() === domande[i].soluzione || risposta.toUpperCase() === domande[i].soluzione2 || risposta.toUpperCase() === domande[i].soluzione3) {
      rispostaPunti += 100;
      rispGiuste += 1;

    }
  }

} stampaDomande(domande);

document.write("ok. hia risposto corettamente a " + rispGiuste + " domande e hai guadagnato " + rispostaPunti + " punti. ");
*/



/*
  //      ************ FOR IN  ***********
  //      ********************************
  //      COME ECCEDERE ALLE PROPRIETA DI OGGETTI

  var studente = {
    Nome: "Mario",
    Cognome: "Ugolini",
    Eta: 39,
    Corso: ["crea un corso", "css avanzato"]
  }
//OGGETTI e ARREY sono molto simili. in ARREY si po accedere agli elementi tramite indice numerico, negli OGGETTI si po accedere a gli elmenti tramite
  for(var infoStud in studente){//GRAZIE AL CICLO ** FOR IN ** POSSIMO ACCEDERE ALLE PROPRIET DI UN OGGETTO
    studente.Eta = 39 + " anni";//aggiungo un dato alla proprietà
    document.write(infoStud + ": "  + studente[infoStud] + ". <br>");
  }
*/



/*
var studente = {//è il nostro OGGETTO con le sue proprietà
  Nome: "Mario",
  Cognome: "Ugolini",
  Eta: 39,
  Corso: ["crea un corso", "css avanzato"]
}
var messagio;//dichiaro la var per stampare a video i messagi
function print(message) {//creo la funzione per stampare a video messagi di qui ho bisogno
  var div = document.getElementById("output");//la parte del HTML. il OUTPUT è ** id ** del HTML. vedi il cod html
  div.innerHTML = message;

} messagio = "<p> ciao mi chiamo " + studente.Nome + ",</p>";//usando la funzione print e var messagio stampo a video il messagio con le proprieta del oggetto STUDENTE
  messagio += "<p> ho " + studente.Eta + " anni </p>"
  //se ho bisogno di aggiungere una proprietà al ARREY contenuto nel oggetto lo faccio in questo modo:
  studente.Corso = ["crea un corso", "css avanzato", "JS avanzato"];
  messagio += "<p> e sono escritto a " + studente.Corso.length + " corsi"
print(messagio);//richiamo la funzione per stampare il messagio.
*/



/*
var studente = {//questo è un oggetto, si dichiara come una variabile, pero le proprietà si scrivono tra le par graffe.
  Nome: "Mario",//sono delle ** PROPRIETA ** di un ** OGGETTO ** coi loro ** VALORI **: **nome** è ** PROPRIETA ** del ** OGGETTO ** **studente** e **mario** è il ** VALORE ** della ** PROPRIETA ** **nome**
  Cognome: "Ugolini",
  Eta: 39,
  Corso: ["crea un corso", "css avanzato"]
}
//i due metodi per accedere al valore della proprietà di un oggetto:
alert(studente["Cognome"]);
document.write(studente.Cognome);//questo metodo è piu usato
//si puo anche aggiungere una proprieta ad un oggetto:
studente.nazionalità = "italiana";//con questo metodo abbiamo aggiunto una nuova propiretà ** nazionalita ** al aggetto studente.
alert(studente.nazionalità);
//possiamo anche modifficare i valori delle proprietà:
studente.Eta = 27;//in questo modo abbiamo modifficato il valore di una proprietà
document.write(studente.Eta);

*/




/*
      ********************************************
      ****************** ARREY *******************
      ********************************************
      un ARREY non è altro che una lista numerata, che parte da "0"
*/


//    ******* SFIDA 2 - LEZIONE 58 *******
//    ************************************
/*
1. creare un quiz che conta le domande e risposte giuste.
2. fare in modo che si vedono le risposte giuste e le risposte sbagliate.
3. usare il ** PUSH ** e gli ARREY vuoti.
*/

/*
//prima di tutto dichiare le variabili e funzioni enecesri
//creo un ARREY multiDimensionale con le domande.
//creo 2 ARREY vuoti per le rispodte giuste e lerisposte sbagliate.
//creo una funzione che fa le domande e li confronta con le risposte.
//uso il metodo ** PUSH ** che, se la rsposta è giusta, la aggiunge nel ARREY vouto creato per le risposte giuste.
//uso il metodo ** else if ** per aggiungere le risposte sbagliate nel ARREY vuoto per le risposte sbagliate.
//infine stampo tutto a video.
var risposta;
var rispostaPunti = 0;
var rispGiuste = 0;
var domande;
var rispSbagl;
var rispCorr;

  domande = [
  ["Dimmi uno di linguaggio che si usa per sviluppare pagine web?","HTML", "CSS"],
  ["Dimmi una delle 2 marche di cellulare piu famose al mondo? ", "APPLE", "SAMSUNG"],
  ["Dimmi il nome del attuale presidente d'America ", "TRUMP"],
  ["Dimmi il nome di fondattore di Apple? ", "BILL"],
  ["Dimmi il nome del sistema operativo piu diffuso al mondo? ", "WINDOWS"],

];

  rispCorr = [ ];
  rispSbagl = [ ];

function stampaDomande(x) {
  for (var i = 0; i < domande.length ; i += 1) {
    risposta = prompt(domande[i][0]);
    if (risposta.toUpperCase() === domande[i][1] || risposta.toUpperCase() === domande[i][2]) {
      rispCorr.push(risposta);
      rispostaPunti += 100;
      rispGiuste += 1;

    } else if (risposta.toUpperCase() !== domande[i][1] || risposta.toUpperCase() !== domande[i][2]) {
      rispSbagl.push(risposta);

    }
  }

} stampaDomande(domande);

document.write("Hai risposto corettamente a " + rispGiuste + " domande e hai guadagnato " + rispostaPunti + " punti. <br> ");
document.write(" <h2> risposte corette: </h2> " + rispCorr);
document.write(" <h2> risposte sbagliate: </h2> " + rispSbagl);
*/



//    ******* SFIDA 1 - LEZIONE 56 *******
//    ************************************
/*
1. creare un quiz che fa le domande e conta le risposte guiste.
2. creando ARREY multiDimensionale.
*/
/*
//creo un ARREY multiDimensionale per le risposte e le domande.
//creo le var necessari per contare le domande giuste e i punti.
//creo una funzione che fa fa domande e confromta con le risposte e aggiunge i punti.
//rischiamo la funzione e stampo tutto a video.
var domande = [
  ["Dimmi uno di linguaggio che si usa per sviluppare pagine web?","HTML", "CSS"],
  ["Dimmi una delle 2 marche di cellulare piu famose al mondo? ", "APPLE", "SAMSUNG"],
  ["Dimmi il nome del attuale presidente d'America ", "TRUMP"],
  ["Dimmi il nome di fondattore di Apple? ", "BILL"],
  ["Dimmi il nome del sistema operativo piu diffuso al mondo? ", "WINDOWS"],

];

var risposta;
var rispostaPunti = 0;
var rispGiuste = 0;

function stampaDomande(x) {//stampiamo le domande.
  for (var i = 0; i < domande.length ; i += 1) {
    risposta = prompt(domande[i][0]);
    if (risposta.toUpperCase() === domande[i][1] || risposta.toUpperCase() === domande[i][2]) {
      rispostaPunti += 100;
      rispGiuste += 1;

    }
  }

} stampaDomande(domande);

document.write("ok. hia risposto corettamente a " + rispGiuste + " domande e hai guadagnato " + rispostaPunti + " punti. ");
*/


/*
//ESEMPIO DI MULTI ARREY, CIO è UN ARREY DENTRO UN'ALTRO ARREY.
var classiffica = [
  ["Paolo Vitta", "italia"],//**NOTA BENE!!!** gli ARREY al interno di un'altro ARREY devono essere separati da una virgola.
  ["Nino Pino", "spagnai"],
  ["Ciccio Bello", "portogallo"],
  ["Pupo Brillo", "USA"],
  ["Chicco Poldo", "RUSSIA"]
];
function print(message) {//tra parentesi tonde della funzione scriviamo un parametro che dopo va rinpiazzata con il nome di una variabile che ci serve.
  document.write(message);//con questa funzione creiamo un strumento per visualizzare un messagio. al posto del message possiamo inserire un qualsiasi messagio.
}//un utensiele che possiamo riutilizzare ogni volta che ci serve sempliciamente richiamandolo.
function visualClassif(arrey) {
  var elenco = "<ol>";
  for(var i = 0; i < arrey.length; i +=1){// la "i" è il nostor contatore. ricordati "_LENGHTH_" PER CONTARE GLI OGGETTI PRESENTI NELLA ARREY LIST
    elenco += "<li>" + arrey[i][0] + " - " + arrey[i][1] + "</li>";

  }
  elenco += "</ol>";
  print(elenco);
}
visualClassif(classiffica);
*/


/*
//  ***** E - Commers *****
var listaProdotti = [
  "uova",
  "pane",
  "carotte",
  "burro",
  "sale",
  "acqua",
  "banane",
];

var ricerca;
function print(messagio) {
  document.write("<p>" + messagio + "</p>" );
}

while (true) {//creiamo un LOOP infinito
  ricerca = prompt( " Cerchi un prodotto?? Inserisci **lista completa** per vizualizare lista completa di prodotti, inserisci il nome del prodotto che stai cercando per verifficare se è  presente nel nostro negozio, o digiti semèpliciamente **esci** per uscire dal programma. Grazie");
  ricerca = ricerca.toLowerCase();//con toLowerCase eliminiamo il problema di minuscolo/maiuscolo
  if (ricerca === "esci") {
    print("<h2>" + "ARIVEDERCI :)" + "</h2>");
    break;

  } else if (ricerca === "lista completa" ) {
    print(listaProdotti.join(", " + "<br>"));
    break;

  } else {
    if (listaProdotti.indexOf(ricerca) >= 0) {
      print("Si il prodotto" + "<h1>" + ricerca + "</h1>" + "è presente in negozio." + "<h1>" +  " Desidera ordinare?" + "</h1>")
      break;
    } else {
      print("Ci dispiace ma il prodotto [* " + ricerca + " *] non è presente in negozio.")
      break;
    }
  }
}
*/



//    ***** ALTRI METODI PER INTERRAGIRE CON GLI ARREY...*****
//    ********************************************************

/*
    //  altro metodo **"indexOf"** serve per torvare un elemento in una lista ARREY inserendo il suo valore.
function print(messaggio) {
  document.write(messaggio);
}

var lista1 = [
  "carotte",
  "uova",
  "banane"
];
var posizione = lista1.indexOf(1);//ci restituisce la posizione del oggetto che cerchiamo nella lista ARREY.
print(posizione);//e se oggetto è inesistente ci restituisce il valore "-1"
*/

/*
    //  metodo **"CONCAT"**, serve per poter concatenare diverse liste ARREY tra loro.
var lista1 = [
  "carotte",
  "uova",
  "banane"
];
var lista2 = [
  "panGrattato",
  "formaggio",
  "latte"
];

function print(messaggio) {
  document.write(messaggio);
}

var listaTot = lista1.concat(lista2);
var lista = listaTot.join(", "); //tra par tonde di join inseriamo il separatore che vogliamo.
print(lista);
*/

/*
//  metodo "JOIN", ci permette di visualizare tutto il contenuto al interno di un ARREY list.
var settimana = [
  "lunedi",
  "martedi",
  "mercoledi",
  "giovedi",
  "venerdi",
  "sabato",
  "domenica"
];
function print(messaggio) {
  document.write(messaggio);
}
var giorni = settimana.join(", ");//tra per tonde possiamo scegliere come separare i nostri elementi della lista ARREY.
print(giorni);
*/

//    ***** UN PRATICO ESEMPIO DI COME USARE LA ARREY LIST CON LOOP FOR *****
/*
1.dichairiamo una var con un ARREY list al suo interno
2.dichiariamo una funzione (un utensile) per stampare sullo schermo quello che ci serve.
3.dichiariamo un'altra funzione che vizualizza il contenuto delle ARREY list in un elenco numerato.
4.dichiariamo una var "ELENCO" che con tag "OL" creare un elenco numerato come se fosse in HTML.
5.con il "FOR" facciamo un mini loop che con il contattore "i" e tag "li" crea una lista numerata.
6.richiamiamo la nostra funzione print con elenco al suo interno da stampare a video.
7.e alla fine richiamiamo la nostra funzione "visualClassif" con al suo interno "classiffica" contenente la ARREY list.
*//*
var classiffica = [
  "Paolo Vitta",
  "Nino Pino",
  "Ciccio Bello",
  "Pupo Brillo",
  "Chicco Poldo"
];
function print(message) {//tra parentesi tonde della funzione scriviamo un parametro che dopo va rinpiazzata con il nome di una variabile che ci serve.
  document.write(message);//con questa funzione creiamo un strumento per visualizzare un messagio. al posto del message possiamo inserire un qualsiasi messagio.
}//un utensiele che possiamo riutilizzare ogni volta che ci serve sempliciamente richaimandolo.
function visualClassif(arrey) {
  var elenco = "<ol>";
  for(var i = 0; i < arrey.length; i +=1){// la "i" è il nostor contatore. ricordati "_LENGHTH_" PER CONTARE GLI OGGETTI PRESENTI NELLA ARREY LIST
    elenco += "<li>" + arrey[i] + "</li>";

  }
  elenco += "</ol>";
  print(elenco);
}
visualClassif(classiffica);
*/


/*
    //************uso del **"FOR"** per visualizare una lista ARREY*********
var auto = [" bmw", " fiat", " alfa"," ford", " audi"];
for (var i = 0; i < auto.length; i += 1) {
  console.log(auto[i]);
  document.write(auto[i] + "<br>");
}
*/


/*
//con metodo **"UNSHIFT"** eliminiamo il PRIMO elemento dalla lista ARREY
var auto = [" bmw", " fiat", " alfa"];
var x = auto.shift();//metodo UNSHIFT chiuso in una variabile, fa comunque la stessa azzione che fa fuori dalla var.
alert (x);//visualiziamo con un "alert" il dato iliminato con metodo "UNSHIFT"
document.write(auto);
*/

/*
//se inseriamo il metodo **"POP"** in una variabile possiamo anche vedere qalè il dato che il metodo ha eliminato.
var auto = [" bmw", " fiat", " alfa"];
var x = auto.pop();//metodo pop chiuso in una variabile, fa comunque la stessa azzione che fa fuori dalla var.
alert (x);//visualiziamo con un "alert" il dato iliminato con metodo "POP"
document.write(auto);
*/

/*
//metodo **"POP"** ci permette di iliminare ultimo dato dalla lista ARREY
var auto = [" bmw", " fiat", " alfa"];
auto.pop();
document.write(auto);
*/

/*
//uso del **"PUSH"**. serve per aggiungere un elemento alla fine della lista ARREY
//uso del "UNSHIFT". serve per aggiungere un elemento all'inizzio della lista ARREY
var auto = [" bmw", " fiat", " alfa"];
auto.push(" seat", " ford", " opel");
auto.unshift("mercedes");
document.write(auto);
*/


/*
//esempio di un ARREY:
var listaSpesa = ["uova", "mele", "burro", "noci"];
document.write(listaSpesa[2]);
*/



          /*
          ********************************************
          ******* LOOP: WHILE - DO WHILE - FOR *******
          ********************************************
          */

/*
//      ***** SFIDA 4 I LOOP *****
//  qui ce solamente il codice. i fail enerenti sono nella cartella "xEsercizio"

//    ***** SOLUZIONE 2 ****
var html = '';
var red;
var green;
var blue;
var rgbColor;

for(var i = 0; i <= 9; i +=1) {
    function colorFul(red, green, blue) {
    return Math.floor(Math.random() * 256);
  };
  rgbColor = 'rgb(' + colorFul(red, green, blue) + ',' + colorFul(red, green, blue) + ',' + colorFul(red, green, blue) +')';
  html += '<div style="background-color:' + rgbColor + '"></div>';
}
 document.write(html);


//    ***** SOLUZIONE 1 *****
var html = '';
var red;
var green;
var blue;
var rgbColor;


     for(var i = 0; i <= 100; i +=1) {
       red = Math.floor(Math.random() * 256);
       green = Math.floor(Math.random() * 256);
       blue = Math.floor(Math.random() * 256);
       rgbColor = 'rgb(' + red + ',' + green + ',' + blue +')';
       html += '<div style="background-color:' + rgbColor + '"></div>';
     }
      document.write(html);
*/


/*
//    ***** BREAK *****
//in pratica usiamo il comando "break" per terminare il loop. senza di esso (in questo caso) il nostro loop andra avanti al infinito.
    var risposta = false;
    var numSup = 5;
    var numCasuale = numRandom(numSup);
    var domanda;
    var tentativi = 0;

    function numRandom(numSup) {//LA FUNZIONE + AZZIONE CHE DEVE SVOLGERE
           return Math.floor(Math.random() * numSup ) + 1
         }

         while (true) {
           domanda = prompt("indovina il numero magico :) ");
           tentativi += 1;
           if (parseInt(domanda) === numCasuale) {
             risposta = true;//e il loop ricomincia
             break;
           }

         }
         document.write("numero di tentativi: " + tentativi + "<br>");
         document.write("il numero magico è: " + numCasuale);
*/


/*
    //    ***** FOR *****
    var numSup = 10;

    function numRandom(numSup) {//LA FUNZIONE + AZZIONE CHE DEVE SVOLGERE
           return Math.floor(Math.random() * numSup ) + 1
         }
         for(var i = 1; i <= 10; i +=1) {//tra parentesi tonde dichiariamo la nostra variabile contattore "i", scriviamo la condizione e la aumentiamo di uno.
           var numCasuale = numRandom(numSup);//scriviamo l'azzione da fare a finche la condizione non sia falsa.
           document.write(numCasuale + " . ");
         }
*/


/*
    //    ***** DO WHILE + BOOLEANS *****
    var risposta = false;
    var numSup = 5;
    var numCasuale = numRandom(numSup);
    var domanda;
    var tentativi = 0;

    function numRandom(numSup) {//LA FUNZIONE + AZZIONE CHE DEVE SVOLGERE
           return Math.floor(Math.random() * numSup ) + 1
         }

         do {
           domanda = prompt("indovina il numero magico :) ");
           tentativi += 1;
           if (parseInt(domanda) === numCasuale) {
             risposta = true;//e il loop ricomincia
           }

         } while ( ! risposta);// con il PUNTO ESCLAMATTIVO d'avanti il sinifficato del dato booleans si inverte, cioè diventa FALSE a prescendere.
         document.write("numero di tentativi: " + tentativi + "<br>");
         document.write("il numero magico è: " + numCasuale);
*/



/*
//      ***** DO WHILE ***** !!! PRIMA L'AZZIONE E DOPO LA CONDIZIONE
//la differenza tra WHILE e DO WHILE è che DO WHILE esegue la condizione almeno una volta, prima di verifficare se essa vera o falsa.
var numSup = 5;
var numCasuale = numRandom(numSup);
var risposta;
var tentativi = 0;

function numRandom(numSup) {//LA FUNZIONE + AZZIONE CHE DEVE SVOLGERE
       return Math.floor(Math.random() * numSup ) + 1
     }

     do {//con DO facciamo fare un'azzione prima di vorifficare la condizione. questa azione verra esseguita al meno una volta anche se la condizione è falsa.
       risposta = prompt("indovina il numero magico :) ");
       tentativi += 1;

     } while ( parseInt(risposta) !== numCasuale );//virifichiamo la condizione. ATTENZIONE!!! AL **parseInt** IL DATO INS DA UTENTE E NUMERICO!!!
     document.write("numero di tentativi: " + tentativi + "<br>");
     document.write("il numero magico è: " + numCasuale);
*/




    /*    ***** WHILE ***** !!! PRIMA LA CONDIZIONE E POI AZZIONE !!!
    facciamo confronto tra due funzioni che fanno sostanzialmente la stessa cosa; una trova un numero random e l'altra pure, facciamo il
    LOOP a finche il numero random della funzione *a* non è uguale al numero random della funzione *b*
    */ /*
    var numSup = 1000000;//VALORE DEL NUMERO MASSIMO DELLA FUNZIONE
    var tentativi = 0;//CONTATTORE
    var a = numRandom(numSup);//LA FUNZIONE 1
    var b ;//LA FUNZIONE 2
    function numRandom(numSup) {//LA FUNZIONE + AZZIONE CHE DEVE SVOLGERE
           return Math.floor(Math.random() * numSup ) + 1
         }
         while (a !== b) {//LA CONDIZIONE DEL ** LOOP ** IMPORTANTE!!! in WHILE viene verifficata la condizione tara parentesi tonde prima di fare partire il LOOP!
           b = numRandom(numSup);//FACCIAMO PARTIRE IL LOOP
           tentativi += 1;//PARTE CONTATTORE
         }
document.write("<p> numero di tentativi: " + tentativi + "</p>");
document.write("<p> il numero magico è: " + b + "</p>");
*/


/*
    //*** WHILE ***
    var numSup = prompt("dimmi il numero massimo");//iniziamo con dic-re il num massimo per la nostra funzione numero random.
     function numRandom(numSup) {//dichiariamo la nostra funzione
            return Math.floor(Math.random() * numSup ) + 1;//con return dicciamo alla funzione cosa deve fare.
         }
         var contattore = 0;//dichiariamo una var per poter contare i cicli
         while (contattore < 100) {//la condizione del nosto ciclo WHILE è: vai avvanti a finche il CONTATTORE è minore di 100
           var numRanLoop = numRandom(numSup);//chiudiamo la nostra funzione in una var per poterla richiamarla piu facilmente qualvolta ci serve. come ad esempio per
           document.write( "<br>" + numRanLoop);//stampare a video il risultato. uso tag <br> per stampare i numeri in verticale invece di uno dopo altro in orizontale.
           contattore += 1;//facciamo partire il nostro contatore
         }//il LOOP andra avanti a finche la condizione è FALSA. cioè finche il contattore è minore di 100
*/


              /*
                ********************************
                *********** FUNZIONI ***********
                ********************************
             */


/*
      //***** LOCAL SCOPE / GLOBAL SCOPE *****
      //***** LE VARIABILE LOCALI E GLOBALI *****
function game() {
  var player = "marco";//questa è una variabile **LOCALE** . una variabile al interno di una funzione si chiama LOCAL SCOPE o VARIABILE LOCALE.e non interagisce in nessun modo con la
  alert(player);//variabile globale che si trova all'esterno della funzione, ANCHE SE ANNO STESSO NOME SONO COMUNQUE DIFFERENTI!
}

var player = "pippo";//variabile con stesso nome pero fuori dalla funzione, detta vVARIABILE GLOBALE.

game();
alert(player);
game();
*/



      //***** PIU VALORI IN UNA FUNZIONE *****
/*
      var numMin = prompt("num1:");
      var numMax = prompt("num2:");
function numRandom(numMax, numMin) {// possiamo inserire piu di una istruzzione all'interno di una funzione.
  var unNumero = Math.floor(Math.random() * (numMax - numMin) -1 ) + 1;
  return unNumero;//**RETURN** ci serve per far capire alla funzione quale azzione deve esseguire!
}//ricordati che RETURN puo esseguire ana sola azzione e fa terminare la tua funzione.

//alert(numRandom(100,20));
//alert(numRandom(10, 3));//e qui possiamo scegliere come visualizare il risultato e tra le parentesi diamo un valore che vogliamo al ** numMax ** e ** numMin **
document.write("il numRandom é: [ " + numRandom(numMax, numMin) + " ]");
*/



/*
function returnFunc() {//dichairiamo una funzione
  var numRandom = Math.floor(Math.random() * 5 ) + 1;//in una variabile inseriamo quello che deve fare
  return numRandom;//con RETURN dichiarimo il valore che vogliamo che funzione ci restituisca. in questo caso il numero random.
}// OCCHI PERCHE LA ISTRUZZIONE **RETURN** FA SI CHE LA ISTRUZZIONE TERMINA!!! DEVE ESSERE SEMPRE ALLA FINE DELLA FUNZIONE !!!
// LA ISTRUZZIONE **RETURN** PUO RESTITUIRE SOLAMENTE UN VALORE ALLA VOLTA. NON SI PO INSERRIRE 2 VALORI IN UNA RETURN!!

document.write(returnFunc());//qui andiamo a richiamare la nostra funzione.
alert(returnFunc());

var returnProva = returnFunc();//possiamo rinchiudere la nostra funzione in una variabile per poi richiamarla quando ci fa comodo.
document.write( "  il num random è:  " + returnProva);
*/


/*
//dichairiamo una variabile e al suo interno una FUNZIONE!
var provaFunzione = function() { // OCCHIO stavolta la funzione non ha un nome, perche è rinchiusa dentro una variabile!!!
  var numRandom = Math.floor(Math.random() * 5 ) + 1;//questa funzione (SENZA NOME!) al suo interno racchiude questa azzione.
  alert("ecco il tuo numero: " + numRandom);
}; // !!! occhio!!! PUNTO E VIRGOLA alla fine perche è una variabile!!! NON una FUNZIONE quindi alla fine va punto e virgola!!!!
provaFunzione();
provaFunzione();//***OCCHIO!!*** anche se è una variabile, la richiamiamo come se fosse una funzione.
provaFunzione();
provaFunzione();
provaFunzione();
*/


/*
//diachairiamo una funzione e al suo interno dichiariamo una variabile con una funzione che trova il numero random.
function numRandom() {
  var numAcaso = Math.floor(Math.random() * 5 ) + 1;
  alert("il tuo numero è: " + numAcaso);
  document.write("ecco il numero RANDOM: " + numAcaso + "<br>");
}

numRandom();//possiamo richiamare la funzione quante volte voliamo!
numRandom();//ogni volta che richiamiamo la nostra funzione lei essegue l'azzione al suo interno.
numRandom();
*/


/*
//COME SI DICHIARA UNA FUNZIONE E COME SI RICHIAMA UNA FUNZIONE.
//prima dichiaro una funzione con ** FUNCTION ** dopo le do un nome (come una variabile)
function compLaCol() {
  alert("ecco la colazzione!");
}
compLaCol();//richiamo la funzione - con il suo nome + !parentesi!
*/


              //************************************
              //***** ESPRESSIONI CONDIZIONALI *****
              //************ IF - ELSE *************
              //************************************


//*****  CONVERTER DA CELSIUS A FAHRENHEIT E VICEVERSA *****
//***** un esercizio mio *****
      var domandaGradi = prompt("dimmi quanti gradi sono:");
      var domandaFoC = prompt("Grazie. Sono "  + domandaGradi +  " gradi CELSIUS o FAHRENHEIT?");

     if (domandaFoC.toUpperCase() === "CELSIUS") {
      var invertDaCelaFar = parseInt(domandaGradi) * 1.8 + 32;//formula di convertitore
        document.write( domandaGradi + " gradi in [Celsius] sono: " + invertDaCelaFar + " gradi in [Fahrenheit]" );
  }  else if ( domandaFoC.toUpperCase() !== "FAHRENHEIT" && domandaFoC.toUpperCase() !== "CELSIUS") {
        document.write("hai scritto male Celsius o Fahrenheit. Riprova");
  }  if (domandaFoC.toUpperCase() === "FAHRENHEIT" ) {
       var invertDaFaraCel = (parseInt(domandaGradi) - 32) * 5 / 9;//formula di convertitore
        document.write(domandaGradi + " gradi in [Fahrenheit] sono: " + invertDaFaraCel + " gradi in [Celsius]" );
  }


//*****  SFIDA 3 QUIZ  *****
/*
1. devo costruire un quez che fa delle domande al uttente.
2. devo tenere conto delle risposte giuste.
3. devo assegnare al utente un punteggio in base alle risposte esatte.
4. allafine devo mostrare a quante domande l'uttente ha risposto giusto e qunti punti ha guadagnato.
*/
/*
var domCoretta = false;//creo un interuttore
var contDomande = 0;//apro conto di domande, per contare le risposte giuste
var numDom = 1;//un semplice contatore delle domande.
//inizzio con dichiarare le variabili con le domande
var dom1 = prompt(" [ Domanda numero " + numDom +  ": Dimmi uno di 3 linguaggi che si usa per sviluppare pagine web? ] ");
numDom += 1;//contattore delle domande
var dom2 = prompt(" [ Domanda numero " + numDom +  ": Dimmi una delle 2 marche di cellulare piu famose al mondo? ] ");
numDom += 1;
var dom3 = prompt(" [ Domanda numero " + numDom +  ": Dimmi il nome del attuale presidente d'America ] ");
numDom += 1;
var dom4 = prompt(" [ Domanda numero " + numDom +  ": Dimmi il nome di fondattore di Apple? ] ");
numDom += 1;
var dom5 = prompt(" [ Domanda numero " + numDom +  ": Dimmi il nome del sistema operativo piu diffuso al mondo? ] ");

var punti = 0;//per contare i punti delle risposte giuste

if (dom1.toUpperCase() === "CSS" || dom1.toUpperCase() === "JAVASCRIPT" || dom1.toUpperCase() === "HTML" ) {//do possibilità della risposta multipla
  punti += 100;//punti se la risposta è coretta
  contDomande += 1;

}  if (dom2.toUpperCase() === "SAMSUNG" || dom2.toUpperCase() === "APPLE" ) {
  punti += 100;
  contDomande += 1;

}  if (dom3.toUpperCase() === "DONALD TRUMP" || dom3.toUpperCase() === "TRUMP" ) {
  punti += 100;
  contDomande += 1;

}  if (dom4.toUpperCase() === "STEVE JOBS" || dom4.toUpperCase() === "JOBS"  ) {
  punti += 100;
  contDomande += 1;

}  if (dom5.toUpperCase() === "WINDOWS" || dom5.toUpperCase() === "LINUX" ) {
  punti += 100;
  contDomande += 1;

} if (punti >= 100) {
  domCoretta = true;//se i punti sono uguali o maggiori a 100 la lucce si accende o se voui l'interuttore è "ON" e parte messagio
  document.write( "Bravo hai risposto corettamente a " + contDomande + " doamande e hai guadagniato " + punti + " punti!" );
} else {
  document.write("Peccato hai sbaglaito tutte le domande.");

}

*/


/*
//IL GIOCO DEL NUMERO FORTUNATO. fatto da me :)

var lightOn = false;//creo un BULEAN, cioè interruttore ON - OFF
var x = 10, y = 20;//determino il range del numero fortunato
var num = prompt("prova indovinare il numero fortunato :)");

if (parseInt(num) >= x && parseInt(num) <= y ) {//primo tentativo. se il numero inserito è tra 10 e 20 "luce si accende" :)
  lightOn = true;
}
else if (parseInt(num) < x ) {//se il numero inserito è troppo basso do un'altra possibilita al utente
  var numMin = prompt("troppo basso, riprova");
 if (parseInt(numMin) >= x) {//secondo/1 tentativo. se il numero inserito è tra 10 e 20 "luce si accende" :)
    lightOn = true;
}
}
else if (parseInt(num) > y) {
  var numMax = prompt("troppo alto, riprova");
 if (parseInt(numMax) <= y) {//secondo/2 tentativo. se il numero inserito è tra 10 e 20 "luce si accende" :)
   lightOn = true;
}
}
if (lightOn) {
  document.write("Bravo hai vinto un premio! :)");
}
else {
  document.write("non hai indovinato :(");
}
*/


/*
      // ***** LA RISPOSTA MULTIPLA *****
      var rispEsatta = false;// uso dei booleans
      var numRandom  = Math.floor(Math.random() * 5) + 1;// Math.floor -> arotonda per difetto. Math.random-> un numero a caso.
      var tentativo  = prompt("indovina il numero");


        //con il codice qui sotto verifichiamo se:
        //1. se la risposta coincide con il numero rundom.
        //2. se il numero inserito dal utente è minore del num rundom
        //3. se il numero inserito dal utente è maggiore del num rundom.

        if (parseInt(tentativo) === numRandom) {//con parseInt facciamo capire al nostro brouser che il dato inserito dal utente è un numero.
          rispEsatta = true;//è come un interruttore - accendi spegni - true: acceso / false: spento.
        } else if (parseInt(tentativo) < numRandom) { //agiungiamo una condizione in piu al IF precedentemente dichiarato.
          var numMin = prompt("peccato. riprova, il numero è maggiore di " + tentativo);
          if (parseInt(numMin) === numRandom) {
            rispEsatta = true;
          }
        } else if (parseInt(tentativo) > numRandom) {
          var numMag = prompt("peccato. riprova, il numero è minore di " + tentativo);
          if (parseInt(numMag) === numRandom) {
            rispEsatta = true;
          }

          // qui sotto verifichiamo se la funzione è corretta o no
          // e se si stampiamo a video la risposta.
        }
        if (rispEsatta) {
          document.write("bravo il numero è: " + tentativo);
        }
        else {
          document.write("peccato il numero era: " + numRandom);
        }
*/


/*
// ***** ELEMENTARE ESEMPIO DI IF ELSE *****
var num = prompt("dimmi un numero");
if (parseInt(num) > 10 && parseInt(num) < 20 ) {
  document.write("ok mi piace :)");// se il numero è uguale o magiore di 10 è ok (la condizione è vera)
} else {
  document.write("no");//se il numero è minore di 10 è no.
}
*/



/*
// ***** USO DEI BULEANS *****
var rispEsatta = false;// uso dei booleans
var numRandom = Math.floor(Math.random() * 5) + 1;// Math.floor -> arotonda per difetto. Math.random-> un numero a caso.
var indovina  = prompt("indovina il numero da 1 a 5");
  if (numRandom === parseInt(indovina)) {
    rispEsatta = true;//è come un interruttore - accendi|spegni - true: acceso / false: spento.
  }
  if (rispEsatta) {
    document.write("bravo il numero è: " + numRandom);
  }
  else {
    document.write("peccato il numero era: " + numRandom);
  }
*/


/*
//***** INDOVINA NUMERO RANDOM *****
var numRandom = Math.floor(Math.random() * 5) + 1;
var indovina  = prompt("indovina il numero da 1 a 5");
  if (numRandom === parseInt(indovina)) {
    document.write("bravo il numero è: " + numRandom);
  } else {
    document.write("peccato il numero era: " + numRandom);
  }




//***** UN SEMPLICE ESEMPIO DI COME FUNZIONA IF - ELSE *****
var risposta = prompt("che linguaggio stiamo imparando?");
  if (risposta.toUpperCase() === "JAVASCRIPT") {
  document.write("bravo la rispsta è esatta");
} else {
  document.write("sbagliato!");
}



if (CONDIZIONE) {
  OPERAZIONE DA ESSEGUIRE (SE LA CONDIZIONE E VERA)
};
*/





        // *****        *****
        // ***** NUMERI *****
        // *****        *****



/*
        //*****  SFIDA 2/2  *****
        // numero casuale. chiedi al utente di inserire un numero
        //minimo e num massimo e calcola un numero casuale da num min al num maxs inserito dal utente.
var n1 = prompt("ins num minmo");
var numUtenInf = parseInt(n1);
var n2 = prompt("ins num massimo");
var numUtenSup = parseInt(n2);
var numRandom = Math.floor(Math.random() * (numUtenSup - numUtenInf + 1) ) + numUtenInf;
var messagio = "il numero casuale compreso tra " + numUtenInf + " e " + numUtenSup + " è: " + numRandom;
  document.write(messagio);




        //*****  SFIDA 2  *****
        // numero casuale. chiedi al utente di inserire un numero e calcola un numero casuale da 1 al num inserito dal utente.
var n1 = prompt("ins un num");
var numUtente = parseInt(n1);
var numRandom = Math.floor(Math.random() * numUtente ) + 1;
var messaggio = "Ciao. il numero casuale compreso tra: 1 e " + numUtente + " è: " + numRandom;
  document.write(messaggio);




//***** esempio di come funziona MATH.FLOOR e MATH.RANDOM *****
var numRandom =  Math.floor(Math.random() * 5) + 1;// Math.floor - serve per arotondare un numero per difetto. Math.random - serve per generare un numero a caso.
document.write(numRandom);

*/


/*
//***** un semplice contatore *****
var domande = 1;
var domRimaste = " [ Domanda numero: " + domande + " ]";
var nome = prompt("Come ti chiami? " + domRimaste);
  domande += 1;
  domRimaste = " [ Domanda numero: " + domande + " ]";
var eta =  prompt("Quanti anni hai? " + domRimaste);
  domande += 1;
  domRimaste = " [ Domanda numero: " + domande + " ]";
var dTre =   prompt("Che cosa stai imparando? " + domRimaste);
var messagio = "Ciao mi chiamo: " + nome + ". Ho " + eta + " anni," + " e sto imparando " + dTre ;
  document.write(messagio);
*/


/*

//***** parseInt *****
var pere = prompt("quante pere hai comprato?");
var mele = prompt("quante mele hai comprato?");
var fruttaTott = parseInt(pere) + parseInt(mele);
prompt(fruttaTott);// _*parseInt*_ serve per far capire al nostro brouser che il numero che abbiamo inserito è effettivamente un numero intero.





//*****  SFIDA 1  *****
var nome = prompt("Come ti chiami?");
var eta =  prompt("Quanti anni hai?");
var dTre =   prompt("Che cosa stai imparando?");
var messagio = "Caio mi chiamo: " + nome + ". Ho " + eta + " anni," + " e sto imparando " + dTre ;
document.write(messagio);




      //***** UN ESEMIPO DI UTILIZZO DI: _ toLowerCase  _ *****

var x = ("PORCA TROIA!");
document.write(x.toLowerCase());// la funzione toLowerCase serve per rendere il testo tutto in minuscolo. non importa come viene scritto.




      //***** SEMPLICE ESEMPIO PER USARE COMANDO _LENGHTH_ *****

var lungDiPar = prompt("INSERIRE UNA PAROLA PREGO...");
var risposta = "la tua parola è: " + lungDiPar.toUpperCase() + ". Contiene: " + lungDiPar.length;// ***toUpperCase*** serve a rendere tutto il testo inserito maiuscolo.
risposta += " caratteri :) Sono stato bravo???";// grazie al comando _LENGHTH_ possiamo calcolare quante lettere ci sono in una parola.
document.write(risposta);




      //***** CONCATENAZIONE DELLE STRINGE *****

var nome = prompt("Come ti chiami??");
var messagio = "Ciao " + nome;
messagio += " benvenuto al corso JS " + nome;
messagio += ". Ci fa piacere averti con noi " + nome;
document.write(messagio);





  var domande = 3;
  var domandeRim = (" [ " + domande + " domande rimaste]" );
  var nome = prompt("come ti chiami?" + domandeRim );
  domande -= 1;
  var domandeRim = (" [ " + domande + " domande rimaste]" );
  var eta = prompt("quanti anni hai?" + domandeRim );
  domande -= 1;
  var domandeRim = (" [ " + domande + " domande rimasta]" );
  var mat_ia = prompt("cosa stai imparendo?" + domandeRim );
  var messagio = ("Ciao io mi chiamo " + nome + " ho " + eta + " anni. sto imparando " + mat_ia );
  document.write(messagio);





      //***** INPUT - OUTPUT *****

var nome = prompt("Come ti chiami?");//comando PROMPT serve per fare una riechiesta di input
document.write ("Ciao " + nome + " :)");



      //****** LE VARIABILI *****

var saluto = ("ciao Mondo");
alert(saluto);//SERVE PER FAR APPARIRE UNA FINESTRA CON UN MESSAGGIO
saluto = "Bravo, era ora" ;
document.write(saluto)//SERVE PER SCRIVERE A VIDEO UN MESSAGGIO

*/
