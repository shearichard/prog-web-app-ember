import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    disabledSubmitAction() {
      alert('This submit button does not do anything');
    }
  }
});
