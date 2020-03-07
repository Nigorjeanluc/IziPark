import TokenHelper from '../helpers/TokenHelper';
import adminExists from '../helpers/adminAuthHelpers';
import placeExists from '../helpers/placeAuthHelpers';
import agentExists from '../helpers/employeeAuthHelpers';
import DeviceHelper from '../helpers/DeviceHelper';
import PasswordHelper from '../helpers/passwordHasher';

/**
 * This class contains all methods
 * required to handle
 * signup and login endpoints' request.
 */
class AuthController {
  /**
   * This method handle the signup request.
   * @param {object} req The user's request.
   * @param {object} res The response.
   * @returns {object} The status and some data of the user.
   */
  static async login(req, res) {
    const doesExist = await adminExists('email', req.body.email);
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

  /**
   * This method handle the signup request.
   * @param {object} req The user's request.
   * @param {object} res The response.
   * @returns {object} The status and some data of the user.
   */
  static async placeLogin(req, res) {
    const doesExist = await placeExists('email', req.body.email);
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
        message: `Welcome ${doesExist.fullName}, you are successfully logged in as Manager`,
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

  /**
   * This method handle the signup request.
   * @param {object} req The user's request.
   * @param {object} res The response.
   * @returns {object} The status and some data of the user.
   */
  static async agentLogin(req, res) {
    const doesExist = await agentExists('email', req.body.email);
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
        message: `Welcome ${doesExist.fullName}, you are successfully logged in as an Agent`,
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

  /**
   * This method handle the signup request.
   * @param {object} req The user's request.
   * @param {object} res The response.
   * @returns {object} The status and some data of the user.
   */
  static async deviceLogin(req, res) {
    const doesExist = await DeviceHelper.deviceExists('device_id', req.body.device_id);
    if (!doesExist) {
      return res.status(403).json({
        status: 403,
        error: 'This device is not allowed',
      });
    }

    
    return res.status(200).json({
      status: 200,
      message: `Access granted for the device with ID: ${doesExist.device_id}`,
      data: {
        token: TokenHelper.generateTokenDevice(doesExist.id, doesExist.device_id, doesExist.model)
      }
    });
  }
}

export default AuthController;
