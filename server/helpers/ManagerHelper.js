import models from '../../models';

const { place } = models;


/**
 * This class contains
 * two methods, one to help hashing password (hashPassword)
 * and the second to retrieve hashed password
 */
class ManagerHelper {

  /**
   * Finds the user's email if he/she exists.
   * @param {string} attr users table field.
   * @param {string} val value to be found.
   * @returns {object} The users's data.
   */
  static async placeExists(attr, val) {
    const Place = await place.findOne({ where: { [attr]: val } });
    return Place;
  }

  /**
   * Saves the user in the DB.
   * @param {object} building The request sent by a user.
   * @returns {object} The users's data.
   */
  static async savePlace(building) {
    const savedPlace = await place.create(
      {
        ...building,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fields:
        [
          'placeName',
          'email',
          'image',
          'manager',
          'password',
          'phoneNumber',
          'createAt',
          'updatedAt'
        ]
      }
    );

    return savedPlace;
  }
}
export default ManagerHelper;
