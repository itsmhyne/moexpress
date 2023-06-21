const dbConfig = require('../../config/db.config');

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.posts = require('./post.model')(mongoose);
db.auth = require('./auth.model')(mongoose);
db.anime = require('./anime.model')(mongoose);

module.exports = db;