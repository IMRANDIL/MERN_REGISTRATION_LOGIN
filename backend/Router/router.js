const router = require('express').Router();
const registerForm = require('../controller/Register')


router.get('/', (req, res) => {
    res.render('index')
});



router.post('/register', registerForm);


router.post('/login', (req, res) => {

})






module.exports = router;