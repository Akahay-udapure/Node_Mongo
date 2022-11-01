const router = require('express').Router();

const user = require('../controllers/user');

router.post('/register', user.register);

router.get('/getByName', user.getByName);

router.get('/findAll', user.findAll);

module.exports = router;
