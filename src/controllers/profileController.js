const profileService = require('../services/profileService');
const { formatResponse } = require('../common/utils');

const getProfile = async (req, res, next) => {
    try {
        const data = await profileService.getProfile();
        res.json(formatResponse(data));
    } catch (err) { next(err); }
};

module.exports = { getProfile };
