const projectRepository = require('../repositories/projectRepository');

const getAll = async () => await projectRepository.getAll();

module.exports = { getAll };
