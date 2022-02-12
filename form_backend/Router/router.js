const router = require('express').Router();
const registerForm = require('../controller/Register');
const loginForm = require('../controller/Login')


router.get('/', (req, res) => {
    res.send(`<h1>Form_Backend</h1>`)
});



router.post('/register', registerForm);


router.post('/login', loginForm)






module.exports = router;