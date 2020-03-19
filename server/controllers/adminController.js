import placeExists from '../helpers/placeAuthHelpers';
import PasswordHelper from '../helpers/passwordHasher';
import ManagerHelper from '../helpers/ManagerHelper';
import DeviceHelper from '../helpers/DeviceHelper';

/**
 * This class contains all methods
 * required to handle
 * signup and login endpoints' request.
 */
class AdminController {
  /**
   * This method assign a device to a place.
   * @param {object} req The http request.
   * @param {object} res The http response.
   * @returns {object} The status and some data of the device.
   */
  static async addDevice(req, res) {
    const deviceExists = await DeviceHelper.deviceExists('device_id', req.body.device_id);
    if (deviceExists) {
      return res.status(401).json({
        status: 401,
        error: `The device named ${deviceExists.model} with Model ID ${deviceExists.device_id} already exists`,
      });
    }

    const place = await ManagerHelper.placeExists('id', req.body.placeId);

    if (!place) {
      return res.status(401).json({
        status: 401,
        error: `The device ID's place : ${req.body.placeId} does not exist`,
      });
    }

    const device = await DeviceHelper.saveDevice(req.body);

    return res.status(201).json({
      status: 201,
      message: `The device was successfully added to the place called ${place.placeName}`,
      data: {
        model: device.model,
        device_id: device.device_id,
        placeId: place.placeId,
        manager: place.manager,
        phoneNumber: place.phoneNumber,
        description: device.description,
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
