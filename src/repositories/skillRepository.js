const db = require('../config/db');

const getAll = async () => {
    const [rows] = await db.query('SELECT * FROM skills ORDER BY category, name');
    return rows;
};

module.exports = { getAll };
