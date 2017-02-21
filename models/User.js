var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/kechuang');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('we are connected!')
});

var UserSchema = new mongoose.Schema({
    user_name: String,
    password: String,
    permission: Number,
    name: String,
    staff_num: String,
    induction_time: Date,
    job: String,
    department: String,
    // user_name: { type: String, required: true },
    // password: { type: String, required: true },
    // permission: { type: Number, required: true },
    // name: { type: String, required: true },
    // staff_num: { type: String, required: true },
    // induction_time: { type: Date, required: true },
    // job: { type: String, required: true },
    // department: { type: String, required: true },
    mobile: Number,
    email: String,
    address: String,
    home_phone: Number,
    office_phone: Number,
    photo: String,
    certificate: String
})

module.exports = mongoose.model('User', UserSchema)

