Template.addStatus.onCreated(() => {
    Session.set('error', '');
});

Template.addStatus.events({
   'submit form' (event){
       event.preventDefault();
       let status = event.target.status.value;
       if (!_.isEmpty(status)){
           Meteor.call('statuses.add', status); /***/
           event.target.status.value = '';
           Session.set('error', '');
       } else {
           Session.set('error', 'No puede puedes dejar en blanco tu post')
       }
   }

});

Template.addStatus.helpers({
   'haveErrors' (){
       if (Session.get('error')) { return Session.get('error');}
   }
});