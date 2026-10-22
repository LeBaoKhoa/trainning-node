const contactRepository = require('../repositories/contactRepository');

const getAll = async () => await contactRepository.getAll();

const create = async (data) => await contactRepository.create(data);

module.exports = { getAll, create };
