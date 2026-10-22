const projectService = require('../services/projectService');
const { formatResponse } = require('../common/utils');

const getAll = async (req, res, next) => {
    try {
        const data = await projectService.getAll();
        res.json(formatResponse(data));
    } catch (err) { next(err); }
};

module.exports = { getAll };
