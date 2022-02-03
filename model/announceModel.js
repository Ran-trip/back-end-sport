const connection = require('../config/db-config');

const TABLE = 'announcement';

const findAllAnnouncement = () => connection.promise().query(`SELECT * FROM ${TABLE}`);

const createOneAnnouncement = ({
    name,
    contact,
    title,
    text,
    idSport,
}) => connection.promise().query(`INSERT INTO ${TABLE} (name, contact, title, text, id_sport) VALUES (?, ?, ?, ?)`, [name, contact, title, text, idSport]);

const deleteOneAnnounce = (id) => connection.promise().query(`DELETE FROM ${TABLE} WHERE id = ?`, [id]);
const findOneAnnouncement = (sportId) => connection.promise().query(`SELECT * FROM ${TABLE} WHERE id_sport = ?`, [sportId]);
const updateAnnounce = (object, id) => connection.promise().query(`UPDATE ${TABLE} SET ? WHERE id = ?`, [object, id]);

module.exports = {
    findAllAnnouncement,
    createOneAnnouncement,
    findOneAnnouncement,
    updateAnnounce,
    deleteOneAnnounce,
};