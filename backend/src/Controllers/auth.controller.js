const jwt = require( 'jsonwebtoken' )
const User = require('../Models/UserModel')

const login = async (req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne({username});

    if (!user) return res.status(401).send('The email doen\' exists');

    if (user.password !== password) return res.status(401).send('Wrong Password');

	const token = jwt.sign({_id: user._id, rol: user.role}, 'secretkey');

    return res.status(200).json({token, role: user.role});
}

const signup = async (req, res) => {

    const { username, password, role } = req.body;
    const user = await User.findOne({username});

    if(user) {
        return res.status(200).json({Message: 'Ya existe el usename', error: true});
    }

    const newUser = new User({username, password, role});
    await newUser.save();
    const token = jwt.sign({_id: newUser._id, role: newUser.role}, 'secretkey');

    res.status(200).json({token, role: newUser.role});
};

module.exports = {
  login,
  signup
}