const users = require('../../models/users');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// fungsi register
const register = async (req, res) => {
    const {username, password} = req.body;
    const secretKey = 'test'; // bebas mau diubah apa aja

    await users.create({
        username, password
    }).then(function(user) {
        const token = jwt.sign({user: user}, secretKey, {expiresIn: '1h'})
        res.header('Authorization', `Bearer ${token}`);
        res.header('Content-Type', `application/json`);

        return res.status(201).json({
            message: 'Success',
            data: {
                user: user,
                token: token
            }
        })
    }).catch(function(error) {
        return res.status(401).json({
            message: error.message,
        })
    })
}

// fungsi login
const login = async(req, res) => {
    const {username, password} = req.body;
    const user = await users.findOne({username: username});
    const jwtSecretKey = 'test';  // bebas mau diubah apa aja

    if (!user) {
        return res.status(401).json({message: "username not registered"})
    }

    bcrypt.compare(password, user.password, (error, result) => {
        if (error) {
            return res.status(500).json({
                message: `${error.message}`,
            });
        } else if(result) {
            const token = jwt.sign({user: user}, jwtSecretKey, {expiresIn: '1h'});
            res.header('Authorization', `Bearer ${token}`);
            res.header('Content-Type', `application/json`);

            return res.status(201).json({
                message: 'Success login',
                status: 201,
                data: {
                    user: user,
                    token: token,
                },
            });
        } else {
            return res.status(401).json({
                message: 'Username or password incorrect'
            });
        }
    })
}

// fungsi ambil data user yang sudah login
const getUser = async (req, res) => {
    const userId = req.user._id;
    const user = await users.findById(userId).select('-password');

    res.status(200).json(
        user
    )
}

const addProfile = async (req, res) => {
    const{}
    const user = req.user;

}

 
module.exports = {
    register,
    login,
    getUser,
}