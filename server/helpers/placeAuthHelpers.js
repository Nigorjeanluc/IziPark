import models from '../../models';

const { place } = models;

/**
 * Finds the user's email if he/she exists.
 * @param {string} attr users table field.
 * @param {string} val value to be found.
 * @returns {object} The users's data.
 */
const placeExists = async (attr, val) => {
  const Place = await place.findOne({ where: { [attr]: val } });
  return Place;
}

export default placeExists;
