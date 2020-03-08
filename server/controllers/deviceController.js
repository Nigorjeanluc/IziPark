import HistoryHelper from '../helpers/HistoryHelper';
import DeviceHelper from '../helpers/DeviceHelper';
import Duration from 'duration';

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
    const exists = await HistoryHelper.findLatestHistory('cardId', req.body.cardId);

    if(exists[0] && exists[0].exitedAt === null) {
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

  /**
   * This method handle the signup request.
   * @param {object} req The user's request.
   * @param {object} res The response.
   * @returns {object} The status and some data of the user.
   */
  static async addExit(req, res) {
    const exists = await HistoryHelper.findLatestHistory('cardId', req.body.cardId);

    if(!exists[0]) {
      return res.status(401).json({
        status: 401,
        error: `You Card ID: ${req.body.cardId} is not allowed to exit the parking`
      });
    }

    if(exists[0].exitedAt !== null) {
      return res.status(401).json({
        status: 401,
        error: `You Card ID: ${req.body.cardId} has already exited the parking`
      });
    }

    await HistoryHelper.updateLatestHistory(exists[0].id);

    const updatedHistory = await HistoryHelper.historyExists('id', exists[0].id);

    const duration = new Duration(updatedHistory.enteredAt, updatedHistory.exitedAt);

    let amount;

    switch(duration.hours) {
      case 1:
        amount = '200 Rwf'
      case 2:
        amount = '300 Rwf'
      case 3:
        amount = '500 Rwf'
      case 4:
        amount = '2000 Rwf'
      case 5:
        amount = '5000 Rwf'
      case 6:
        amount = '7000 Rwf'
      case 7:
        amount = '9000 Rwf'
      case 8:
        amount = '11000 Rwf'
      default:
        amount = '200 Rwf'
    }

    return res.status(201).json({
      status: 201,
      message: `You have exited the parking`,
      data: {
        timePassed: duration.toString(1),
        amount
      }
    });
  }
}

export default DeviceController;
