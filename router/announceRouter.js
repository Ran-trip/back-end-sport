const announceRouter = require('express').Router();
const req = require('express/lib/request');
const announceModel = require('../model/announceModel');

announceRouter.get('/', async (req, res) => {
    const [announces] = await announceModel.findAllAnnouncement();
    return res.json(announces);
});

announceRouter.post('/', async (req, res) => {
    const [{ insertId: id }] = await announceModel.createOneAnnouncement(req.body);
    return res.status(201).json({
        id,
        ...req.body,
    });
});

announceRouter.put('/:id', async (req, res) => {
    await announceModel.updateAnnounce(req.body, req.params.id);
    return res.status(204).json();
});

announceRouter.delete('/:id', async (req, res) => {
    await announceModel.deleteOneAnnounce(req.params.id);
    return res.status(204).json();
});

module.exports = announceRouter;