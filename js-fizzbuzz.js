for (i = 1; i <= 100; i++) {
    // inizializzo il ciclo con un indice pari a 1
    if (i % 3 === 0 && i % 5 === 0){
        console.log("FrizzBuzz");
    }
    // if che checka l'indice, che se viene diviso per 3 da resto pari a 0 e allo stesso tempo dividendo sempre lo stesso indice per 5 il resto rimanga sempre 0

    else if (i % 3 === 0){
        console.log("Frizz");
    }
    else if (i % 5 === 0){
        console.log("Buzz");
    }

    // se i 3 checker risultano negativi l'indice non è multiplo nè di 5 nè di 3
    else{
        console.log(i);
    }
}

console.log("stop")



let n = 0;

while(n<100){
    n++;
    // funzionamento simile al ciclo for, semplicemente qui abbiamo una variabile globale "n" definita prima del ciclo while e che a ogni loop va ad aumentare l'indice n di 1, si stoppa quando n< 100 (messo 100, poichè come ultimo "giro" n rientra nella condizione di essere minore di 100, cosi' che riesca a prendere il suo ultimo n++ che trasforma n === 100 [spero di essermi spiegato])
    if (n % 3 === 0 && n % 5 === 0){
        console.log("FrizzBuzz");
    }
    // if che checka l'indice, che se viene diviso per 3 da resto pari a 0 e allo stesso tempo dividendo sempre lo stesso indice per 5 il resto rimanga sempre 0

    else if (n % 3 === 0){
        console.log("Frizz");
    }
    else if (n % 5 === 0){
        console.log("Buzz");
    }

    // se i 3 checker risultano negativi l'indice non è multiplo nè di 5 nè di 3
    else{
        console.log(n);
    }
}

console.log("stop 2")

// let n = 0;
// let condizione = true;
// // questo dovrebbe essere il ragionamento che svolge il while
