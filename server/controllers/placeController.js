import AgentHelper from '../helpers/AgentHelper';

/**
 * This class contains all methods
 * required to handle
 * signup and login endpoints' request.
 */
class PlaceController {
  /**
   * This method handle the signup request.
   * @param {object} req The user's request.
   * @param {object} res The response.
   * @returns {object} The status and some data of the user.
   */
  static async editEmployee(req, res) {
    const doesExist = await agentExists('email', req.body.email);;
    if (!doesExist) {
      return res.status(401).json({
        status: 401,
        error: `The place named ${doesExist.placeName} already does not exist`,
      });
    }

    const place = await AgentHelper.editPlace(req.body);

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
  static async addEmployee(req, res) {
    const doesExist = await AgentHelper.agentExists('email', req.body.email);;
    if (doesExist) {
      return res.status(401).json({
        status: 401,
        error: `Employee ${doesExist.fullName} already exists`,
      });
    }

    const agent = await AgentHelper.saveAgent(req.body);

    return res.status(201).json({
      status: 201,
      message: 'The employee was successfully added',
      data: {
        name: agent.fullName,
        manager: agent.email,
        serviceHours: agent.serviceHours,
        phone: agent.phoneNumber,
        place: agent.placeId,
        createdAt: agent.createdAt
      }
    });
  }
}

export default PlaceController;
