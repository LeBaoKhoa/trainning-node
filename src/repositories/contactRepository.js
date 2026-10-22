const db = require('../config/db');

const getAll = async () => {
    const [rows] = await db.query('SELECT * FROM contacts ORDER BY created_at DESC');
    return rows;
};

const create = async ({ name, email, message }) => {
    const [result] = await db.query(
        'INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)',
        [name, email, message]
    );
    return { id: result.insertId, name, email, message };
};

module.exports = { getAll, create };
