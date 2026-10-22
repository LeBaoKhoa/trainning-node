const db = require('../config/db');

const getProfile = async () => {
    const [rows] = await db.query(
        'SELECT * FROM profile LIMIT 1'
    );

    return rows[0];
};

module.exports = {
    getProfile
};