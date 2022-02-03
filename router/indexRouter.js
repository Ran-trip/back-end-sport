const announceRouter = require('./announceRouter');

const setupRoutes = (app) => {
    app.use('/announce', announceRouter);
};

module.exports = setupRoutes;