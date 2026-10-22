const db = require('../config/db');

const getAll = async () => {
    const [rows] = await db.query('SELECT * FROM projects ORDER BY sort_order');
    return rows;
};

module.exports = { getAll };
