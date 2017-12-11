import Component from '@ember/component';

export default Component.extend({
  actions: {
    flipCard(card) {
      alert(card);
      console.log(card);
    }
  }
});
