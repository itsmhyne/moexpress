module.exports = (app) => {
    const post = require('../controllers/post.controller');
    const router = require('express').Router();

    router.get('/', post.findAll);
    router.post('/', post.create);
    router.get('/:id', post.findOne);
    router.put('/:id', post.update);
    router.delete('/:id', post.delete);

    app.use('/api/post', router);
}