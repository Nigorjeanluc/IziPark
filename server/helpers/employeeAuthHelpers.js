import models from '../../models';

const { employee } = models;

/**
 * Finds the user's email if he/she exists.
 * @param {string} attr users table field.
 * @param {string} val value to be found.
 * @returns {object} The users's data.
 */
const AgentExists = async (attr, val) => {
  const Agent = await employee.findOne({ where: { [attr]: val } });
  return Agent;
}

export default AgentExists;
