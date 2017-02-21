var User = require('../models/User')

exports.submit = (req, res, next) => {
    console.log(req.body)
    // return (req, res, next) => {
    // var person = new User({
    //     name = req.body.name,
    //     department = req.body.department,
    //     job = req.body.job,
    //     induction_time = req.body.induction_time,
    //     staff_num = req.body.staff_num,
    //     user_name = req.body.user_name,
    //     password = req.body.password,
    //     permission = req.body.permission,
    // })
    // person.save((err) => {
    //     if (err) {
    //         return next(err)
    //     }

    //     res.redirect('/user/staff')
    // })


    User.create({
        name: req.body.name,
        department: req.body.department,
        job: req.body.job,
        induction_time: req.body.induction_time,
        staff_num: req.body.staff_num,
        user_name: req.body.user_name,
        password: req.body.password,
        permission: req.body.permission,
    }, function (err) {
        if (err) {
            return next(err)
        }

        res.redirect('/user/staff')
    })
    // }
}
