const mongoose = require('mongoose');

module.exports = db_name =>{
    mongoose.connect(`mongodb://localhost/${db_name}`,{})
        .then(() => console.log(`successfully connected to ${db_name}`))
        .catch(err => console.log("something went wrong", err));
}