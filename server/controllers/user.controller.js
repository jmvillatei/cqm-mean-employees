const User = require('../models/users');


const userCtrl = {};

userCtrl.getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);

}

userCtrl.getUser = async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user);

}

userCtrl.createUser = async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.json({
        'status': 'User Saved'
    });
}

userCtrl.editUser = async (req, res) => {
    console.log(req.body);
    const { id } = req.params;
    const user = {
        first_name: req.body.first_name,
        surname: req.body.surname,
        sec_surname: req.body.sec_surname,
        email_company: req.body.email_company,
        active: req.body.active
    };
    await User.findByIdAndUpdate(id, {$set: user});
    res.json({status: 'User Update'});
}


userCtrl.deleteUser = async (req, res) => {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    res.json({status: 'User Deleted'});
}

module.exports = userCtrl;