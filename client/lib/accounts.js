AccountsTemplates.configure({
    hideSignInLink: true,
    hideSignUpLink:true,
    texts :{
        title :{
            signIn : 'Login',
            signUp : 'Join the Biper'
        }
    },
    onSubmitHook : () => {
        FlowRouter.go('dashboard');
    },
    onLogoutHook: () => {
        FlowRouter.go('home');
    }

});


/**helper function**/
let generateDates = (startDate, endDate) => {
    let values = [];
    for ( startDate; startDate <= endDate; startDate++){
        let object = { text: String(startDate), value : String(startDate)};
        values.push(object);
    }
    return values
};


AccountsTemplates.addFields([
    {
        _id : 'firstName',
        type: 'text',
        placeholder: 'Please enter your first name',
        required: true,
        displayName : 'First name'
    },
    {
        _id : 'lastName',
        type: 'text',
        placeholder: 'Please enter your last name',
        required: true,
        displayName : 'Last name'
    },
    {
        _id : 'username',
        type: 'text',
        placeholder: 'Please enter your username',
        required: true,
        displayName : 'Username'
    },
    {
        _id : 'gender',
        type: 'select',
        required: true,
        displayName : 'Gender',
        select:[
            { text : 'Male', value : 'male'},
            { text : 'Female', value : 'female'}

        ]
    },
    {
        _id : 'dayOfBirth',
        type: 'select',
        required: true,
        displayName : 'Day of birth',
        select: generateDates(1,31)
    },
    {
        _id : 'monthOfBirth',
        type: 'select',
        required: true,
        displayName : 'Month of birth',
        select: generateDates(1,12)
    },
    {
        _id : 'yearOfBirth',
        type: 'select',
        required: true,
        displayName : 'Year of birth',
        select: generateDates(1980,1998)
    }
]);