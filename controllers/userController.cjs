const User = require('../models/User.cjs')


const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body)
        res.json(user)
    }
    catch (err) {
        res.send(err.message)
    }
}

module.exports = {createUser}