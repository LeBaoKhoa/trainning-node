const profileRepository = require(
    '../repositories/profileRepository'
);

const getProfile = async () => {
    return await profileRepository.getProfile();
};

module.exports = {
    getProfile
};