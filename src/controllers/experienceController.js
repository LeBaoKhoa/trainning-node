const experienceService = require('../services/experienceService');
const { formatResponse } = require('../common/utils');

const getAll = async (req, res, next) => {
    try {
        const data = await experienceService.getAll();
        res.json(formatResponse(data));
    } catch (err) { next(err); }
};

module.exports = { getAll };
