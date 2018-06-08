const express = require('express');
const accounts = require('./accounts.js');
const router = express.Router();

router.get('/accounts', accounts.getAccounts);
router.post('/accounts', accounts.addAccount);
router.put('/accounts/:accountId', accounts.updateAccount);
router.delete('/accounts/:accountId', accounts.removeAccount);

module.exports = router;