Meteor.methods({
    'statuses.add' (status){
        if (!this.userId) { throw new Meteor.Error(401, 'Tienes que iniciar sesión'); }
        check(status, String);
        Statuses.insert({ status });
    }
});