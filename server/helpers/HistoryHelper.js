import models from '../../models';

const { historie } = models;


/**
 * This class contains
 * two methods, one to help hashing password (hashPassword)
 * and the second to retrieve hashed password
 */
class HistortHelper {

  /**
   * Finds the user's email if he/she exists.
   * @param {string} attr users table field.
   * @param {string} val value to be found.
   * @returns {object} The users's data.
   */
  static async historyExists(attr, val) {
    const History = await historie.findOne({ where: { [attr]: val } });
    console.log(History);
    return History;
  }

  /**
   * Finds a rating by accomodationId only.
   * @param {string} val accommodation's id table field..
   * @returns {object} a certain rating's data.
  */
  static async findLatestHistoy(attr, val) {
    const rating = await historie.findAll({ limit: 1, where: { [attr]: val }, order: [['createdAt', 'DESC']] });
    return rating;
  }

  /**
   * Saves the user in the DB.
   * @param {object} building The request sent by a user.
   * @returns {object} The users's data.
   */
  static async saveHistory(history) {
    const savedHistory = await historie.create(
      {
        ...history,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fields:
        [
          'deviceId',
          'placeId',
          'plateNumber',
          'employeeId',
          'cardId',
          'enteredAt',
          'exitedAt',
          'createAt',
          'updatedAt'
        ]
      }
    );

    return savedHistory;
  }
}
export default HistortHelper;
