const db = require('../config/db');

const getAll = async () => {
    const [rows] = await db.query('SELECT * FROM experiences ORDER BY sort_order');
    return rows;
};

module.exports = { getAll };
