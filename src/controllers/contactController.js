const contactService = require('../services/contactService');
const { formatResponse } = require('../common/utils');

const getAll = async (req, res, next) => {
    try {
        const data = await contactService.getAll();
        res.json(formatResponse(data));
    } catch (err) { next(err); }
};

const create = async (req, res, next) => {
    try {
        const { name, email, message } = req.body;
        if (!name || !email || !message) {
            return res.status(400).json({ error: 'name, email, message are required' });
        }
        const data = await contactService.create({ name, email, message });
        res.status(201).json(formatResponse(data));
    } catch (err) { next(err); }
};

module.exports = { getAll, create };
