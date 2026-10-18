const users = [];

exports.findAll = async () => users;

exports.create = async (data) => {
  const newUser = { id: users.length + 1, ...data };
  users.push(newUser);
  return newUser;
};
