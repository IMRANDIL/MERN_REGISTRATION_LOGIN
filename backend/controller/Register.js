const Register = require('../models/register');



const registerForm = async (req, res) => {
    try {
        const password = req.body.password;
        const confirmPassword = req.body.confirmPassword;
        if (password === confirmPassword) {



            const register = new Register({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: password,
                confirmPassword: confirmPassword
            })
            const registerData = await register.save();
            res.status(201).send(registerData)

        } else {
            return res.send('Password did not match!')
        }
    } catch (error) {
        res.status(400).send(error)
    }

}










module.exports = {
    registerForm
}