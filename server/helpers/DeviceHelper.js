import models from '../../models';

const { device } = models;


/**
 * This class contains
 * methods for managing the DB's devices table
 */
class DeviceHelper {

  /**
   * Finds a device
   * @param {string} attr devices table field.
   * @param {string} val value to be found.
   * @returns {object} The devices's data.
   */
  static async deviceExists(attr, val) {
    const Device = await device.findOne({ where: { [attr]: val } });
    return Device;
  }

  /**
   * Saves the device in the DB.
   * @param {object} device The request sent by a device.
   * @returns {object} The devices's data.
   */
  static async saveDevice(deviceReq) {
    const saveDevice = await device.create(
      {
        ...deviceReq,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fields:
        [
          'model',
          'device_id',
          'placeId',
          'description',
          'createdAt',
          'updatedAt'
        ]
      }
    );

    return saveDevice;
  }
}
export default DeviceHelper;
