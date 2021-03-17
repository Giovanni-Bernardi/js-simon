// GOAL:
// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

 function getRandomValue(min, max) {
    var minRnd = min;
    var maxRnd = max - min + 1;
    return Math.floor(Math.random() * maxRnd) + minRnd;
  }
  
  //RANDOM VALUE GENERATION 1 TO 5
  var randomValues = [];                  
  
  function arrRnd() {
    while (randomValues.length < 5) {
    //ARRAY [5 ELEMENTS]
      var rnd = getRandomValue(1, 100);
      randomValues.push(rnd);
    }
    return alert('Simon says: ' + randomValues);
  }
  arrRnd();
  
  //USER INPUT
  var inputUser = [];
  
  function reqNum() {
    while (inputUser.length < 5) {
      var numInsert = parseInt(prompt('Insert the numbers that you remember'));
      if (randomValues.includes(numInsert)) {
        inputUser.push(numInsert);
      }
    }
    if (randomValues.includes(numInsert)) {
      console.log('You Win!');
    }else {
      console.log('You lose... you have made ' + inputUser.length + 'points, your right picks : ' + inputUser);
    }
  }
  function init() {
    setTimeout(reqNum, 20000);

  }
  