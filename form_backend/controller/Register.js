const Register = require('../models/register');



const registerForm = (req, res) => {
    try {
        const password = req.body.password;
        const confirmPassword = req.body.confirmPassword;
        Register.findOne({ email: req.body.email }, async (err, user) => {
            if (user) {
                return res.send({ msg: 'User already registered!' })
            } else {
                const register = new Register({
                    Name: req.body.Name,
                    email: req.body.email,
                    password: password,
                    confirmPassword: confirmPassword
                })
                await register.save();
                res.status(201).send({ msg: 'Successfully Registered! Please Login Now..' })
            }
        })








    } catch (error) {
        res.status(400).send(error)
    }

}










module.exports =
    registerForm
