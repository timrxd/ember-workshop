import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    var deck = [];
    for (var i = 1; i <= 13; i++) {
      deck.push('♡' + i);
      deck.push('♠' + i);
      deck.push('♣' + i);
      deck.push('♢' + i);
    }
    return deck;
  }
});
