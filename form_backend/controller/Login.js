const Register = require('../models/register');





const loginForm = (req, res) => {
    const { email, password } = req.body;
    Register.findOne({ email: email }, (err, user) => {
        if (user) {
            if (password === user.password) {
                return res.send({ msg: 'Login Successful', user: user })
            } else {
                return res.send({ msg: 'password did not match!' })
            }
        } else {
            res.send({ msg: 'User not registered!' })
        }
    })
}


module.exports = loginForm;