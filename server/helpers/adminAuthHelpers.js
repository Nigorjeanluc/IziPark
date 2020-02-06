import models from '../../models';

const { admin } = models;

/**
 * Finds the user's email if he/she exists.
 * @param {string} attr users table field.
 * @param {string} val value to be found.
 * @returns {object} The users's data.
 */
const adminExists = async (attr, val) => {
  const Admin = await admin.findOne({ where: { [attr]: val } });
  return Admin;
}

export default adminExists;
