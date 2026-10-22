const experienceRepository = require('../repositories/experienceRepository');

const getAll = async () => await experienceRepository.getAll();

module.exports = { getAll };
