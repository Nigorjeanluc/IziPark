import models from '../../models';

const { place } = models;


/**
 * This class contains
 * two methods, one to help hashing password (hashPassword)
 * and the second to retrieve hashed password
 */
class ManagerHelper {
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
