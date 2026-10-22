const skillRepository = require('../repositories/skillRepository');

const getAll = async () => await skillRepository.getAll();

module.exports = { getAll };
