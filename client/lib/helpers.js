const moment = require('moment');

Template.registerHelper ('statusDate', (date) => {
   return date ? moment(date).format('DD MMM YYYY@HH:mm') : '' ;
});