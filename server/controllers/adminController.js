import placeExists from '../helpers/placeAuthHelpers';
import PasswordHelper from '../helpers/passwordHasher';
import ManagerHelper from '../helpers/ManagerHelper';

/**
 * This class contains all methods
 * required to handle
 * signup and login endpoints' request.
 */
class AdminController {
  /**
   * This method handle the signup request.
   * @param {object} req The user's request.
   * @param {object} res The response.
   * @returns {object} The status and some data of the user.
   */
  static async editPlace(req, res) {
    const doesExist = await placeExists('email', req.body.email);;
    if (!doesExist) {
      return res.status(401).json({
        status: 401,
        error: `The place named ${doesExist.placeName} already does not exist`,
      });
    }

    const place = await ManagerHelper.editPlace(req.body);

    return res.status(201).json({
      status: 201,
      message: 'The place was successfully updated',
      data: {
        name: place.placeName,
        manager: place.email,
        image: place.image,
        phone: place.phoneNumber,
        createdAt: place.createdAt
      }
    });
  }

  /**
   * This method handle the signup request.
   * @param {object} req The user's request.
   * @param {object} res The response.
   * @returns {object} The status and some data of the user.
   */
  static async addPlace(req, res) {
    const doesExist = await placeExists('email', req.body.email);;
    if (doesExist) {
      return res.status(401).json({
        status: 401,
        error: `The place named ${doesExist.placeName} already exists`,
      });
    }

    const place = await ManagerHelper.savePlace(req.body);

    return res.status(201).json({
      status: 201,
      message: 'The place was successfully added',
      data: {
        name: place.placeName,
        manager: place.email,
        image: place.image,
        phone: place.phoneNumber,
        createdAt: place.createdAt
      }
    });
  }

  /**
   * This method handle the signup request.
   * @param {object} req The user's request.
   * @param {object} res The response.
   * @returns {object} The status and some data of the user.
   */
  static async placeLogin(req, res) {
    const doesExist = await placeExists('email', req.body.email);;
    if (!doesExist) {
      return res.status(403).json({
        status: 403,
        error: 'You are not allowed',
      });
    }
    const pswMatch = PasswordHelper.checkPassword(req.body.password, doesExist.password);
    if (pswMatch) {
      return res.status(200).json({
        status: 200,
        message: `Welcome ${doesExist.fullName}, you are successfully logged in as Admin`,
        data: {
          token: TokenHelper.generateToken(doesExist.id, doesExist.email, doesExist.role)
        }
      });
    }

    return res.status(401).json({
      status: 401,
      error: 'Invalid credentials',
    });
  }
}

export default AdminController;
