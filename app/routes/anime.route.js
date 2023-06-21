module.exports = (app) => {
    const anime = require('../controllers/anime.controller')
    const router = require('express').Router();

    router.get('/', anime.animeList);
    router.post('/', anime.animeAdded);
    router.get('/:id', anime.animeDetail);

    app.use('/api/anime', router);
};
