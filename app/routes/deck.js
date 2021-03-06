import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    var deck = [];
    var r = ["X","A","2","3","4","5","6","7","8","9","10","J","Q","K"];
    for (var i = 1; i <= 13; i++) {      
      deck.push('♡' + r[i]);
      deck.push('♠' + r[i]);
      deck.push('♣' + r[i]);
      deck.push('♢' + r[i]);
    }
    return deck;
  }
});
