import HistoryHelper from '../helpers/HistoryHelper';
import DeviceHelper from '../helpers/DeviceHelper';

/**
 * This class contains all methods
 * required to handle
 * signup and login endpoints' request.
 */
class DeviceController {
  /**
   * This method handle the signup request.
   * @param {object} req The user's request.
   * @param {object} res The response.
   * @returns {object} The status and some data of the user.
   */
  static async addEntry(req, res) {
    const exists = await HistoryHelper.findLatestHistoy('cardId', req.body.cardId);

    if(exists[0]) {
      return res.status(401).json({
        status: 401,
        error: `You Card ID: ${exists[0].cardId} already entered the parking at ${exists[0].enteredAt}`
      });
    }

    const device = await DeviceHelper.deviceExists('device_id', req.userData.device_id);

    const history = await HistoryHelper.saveHistory(
      {
        ...req.body,
        deviceId: req.userData.device_id,
        employeeId: null,
        placeId: device.placeId,
        enteredAt: new Date(),
        exitedAt: null
      }
    );

    return res.status(201).json({
      status: 201,
      message: `You have entered the parking at ${history.enteredAt}`
    });
  }
}

export default DeviceController;
