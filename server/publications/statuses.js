Meteor.publish('userStatuses', function (){
   return Statuses.find({ owner : this.userId});
});