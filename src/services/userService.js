const userRepository = require('../repositories/userRepository');

exports.getAllUsers = async () => {
  return await userRepository.findAll();
};

exports.createUser = async (data) => {
  return await userRepository.create(data);
};
