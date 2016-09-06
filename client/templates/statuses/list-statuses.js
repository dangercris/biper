Template.listStatuses.onCreated(function(){
   this.autorun(() =>{
       this.subscribe('userStatuses');
   });
});

Template.listStatuses.helpers({
   'statuses' () { return Statuses.find({}, { sort: { createdAt: -1}}); }
});