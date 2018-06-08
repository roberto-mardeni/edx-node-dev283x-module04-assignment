const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/edx-course-db')

const Account = mongoose.model('Account', {
  name: String,
  balance: Number
})

module.exports = {
  getAccounts(req, res) {
    Account.find((error, accounts) => {
      res.status(200).send(accounts);
    })
  },
  addAccount(req, res) {
    let account = new Account(req.body);
    account.save((error) => {
      res.status(201).send(account);
    })
  },
  updateAccount(req, res) {
    Account.findById(req.params.accountId).exec((error, account) => {
      if (account) {
        Object.assign(account, req.body);
        account.save((error) => {
          res.status(200).send(account);
        })
      } else {
        res.status(404).send();
      }
    })
  },
  removeAccount(req, res) {
    Account.findById(req.params.accountId).exec((error, account) => {
      if (account) {
        account.remove((error) => {
          res.status(204).send(account);
        })
      } else {
        res.status(404).send();
      }
    })
  }
}