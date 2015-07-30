var cards = [
 "H1", "H2", "H3",  "H4",  "H5",  "H6", "H7",
 "H8", "H9", "H10", "H11", "H12", "H13",
 "C1", "C2", "C3",  "C4",  "C5",  "C6", "C7",
 "C8", "C9", "C10", "C11", "C12", "C13",
 "S1", "S2", "S3",  "S4",  "S5",  "S6", "S7",
 "S8", "S9", "S10", "S11", "S12", "S13",
 "D1", "D2", "D3",  "D4",  "D5",  "D6", "D7",
 "D8", "D9", "D10", "D11", "D12", "D13"
];

var shuffled = shuffle(cards);

//shuffles deck
function shuffle(arr){
  var newArray = [];
  var workArray = arr.slice(0);
  arrLength = workArray.length;
    for (var i = 0; i < arrLength; i++) {
      var num = Math.floor(Math.random() * workArray.length);
      newArray.push(workArray.splice(num,1)[0]);
  }
  return newArray;
}

//splits deck into decks of n
function splitDeck(arr, numInDecks){
  decks = [];
  while (arr.length) {
    decks.push(arr.splice(0, numInDecks));
  }
  return decks;
}

function riffleCards (array){
  riffleDeck = [];
  finalDeck = [];
  var halves = splitDeck(array, 26);
  var half1 = halves[0];
  var half2 = halves[1];

    for (var i = 0; i < halves[0].length; i++) {
        riffleDeck.push(halves[0].splice(0, Math.ceil(Math.random() * 26));

    for (var j = 0; j < halves[1].length; j++) {
      var num1 = Math.ceil(Math.random() * halves[1].length);
        riffleDeck.push(halves[1].splice(0, num1));
      }
      finalDeck = finalDeck.concat.apply(finalDeck, riffleDeck);
    }console.log(finalDeck, finalDeck.length);
          return finalDeck;
}

// function riffleCards (array){
//   riffleDeck = [];
//   var deckChoice = Math.floor(Math.random()*2);
//   var halves = splitDeck(array, 26);
//   var half1 = halves[0];
//   var half2 = halves[1];

//   while (half1.length || half2.length){

//     if (deckChoice === 0) {
//       deckChoice = 1;

//       var tempArray1 = half1.splice(0, Math.floor(Math.random() * 26));

//       for (var i = 0; i < tempArray1.length; i++) {
//         riffleDeck.push(tempArray1[i]);
//       }
//     }
//     else if (deckChoice === 1){
//       deckChoice = 0;
//       var tempArray2 = half2.splice(0, Math.floor(Math.random() * 26));
//       for (var j = 0; j < tempArray2.length; j++) {
//         riffleDeck.push(tempArray2[j]);
//     }
//   }
// }console.log(riffleDeck);
// return riffleDeck;
// }

riffleCards(shuffled);




