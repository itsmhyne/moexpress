const db = require('../models');
const bcrypt = require('bcrypt');

const Auth = db.auth;

exports.register = async (req, res) => {

    const { username, email, password } = req.body;

    // Membuat salt untuk hashing password
    const salt = await bcrypt.genSalt(10);

    // Membuat hash password
    const hashedPassword = await bcrypt.hash(password, salt);

    const register = new Auth({ username, email, password: hashedPassword });


    register.save()
        .then((result) => {
            res.send({
                message: "Successfully register data"
            });
        }).catch((err) => {
            res.status(409).send({
                message: err.message || "Some error while register data"
            });
        });
}

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Cari pengguna berdasarkan email
        const login = await Auth.findOne({ email });

        // Jika pengguna tidak ditemukan
        if (!login) {
            return res.status(401).json({ error: 'Email anda tidak ditemukan' });
        }

        // Memeriksa kecocokan password
        const isPasswordValid = await bcrypt.compare(password, login.password);

        // Jika password tidak cocok
        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Password yang anda masukkan tidak sesuai' });
        }

        // Login berhasil
        res.status(200).json({ message: 'Login berhasil' });
    } catch (error) {
        res.status(500).json({ error: 'Terjadi kesalahan saat login' });
    }
}