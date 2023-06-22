const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(express.urlencoded(
    {
        extended: true
    }
));

const db = require('../app/models');
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useNewUrlParser: true, // <-- no longer necessary
        useUnifiedTopology: true, // <-- no longer necessary
    })
    .then(() => {
        console.log(`database connected`);
    })
    .catch((err) => {
        console.log(err);
        process.exit;
    });

// method
app.get('/', (req, res) => {
    res.json({
        message: "welcome to express mogodb guys"
    });
});

// posts
require('../app/routes/post.route')(app);
// auth
require('../app/routes/auth.route')(app);
require('../app/routes/anime.route')(app);

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});