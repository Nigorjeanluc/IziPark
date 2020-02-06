import models from '../../models';

const { employee } = models;


/**
 * This class contains
 * two methods, one to help hashing password (hashPassword)
 * and the second to retrieve hashed password
 */
class AgentHelper {

  /**
   * Finds the user's email if he/she exists.
   * @param {string} attr users table field.
   * @param {string} val value to be found.
   * @returns {object} The users's data.
   */
  static async agentExists(attr, val) {
    const Employee = await employee.findOne({ where: { [attr]: val } });
    return Employee;
  }

  /**
   * Saves the user in the DB.
   * @param {object} building The request sent by a user.
   * @returns {object} The users's data.
   */
  static async saveAgent(agent) {
    const savedAgent = await employee.create(
      {
        ...agent,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fields:
        [
          'fullName',
          'email',
          'image',
          'password',
          'phoneNumber',
          'serviceHours',
          'placeId',
          'createAt',
          'updatedAt'
        ]
      }
    );

    return savedAgent;
  }
}
export default AgentHelper;
