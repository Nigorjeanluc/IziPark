import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

/**
 * This class contains
 * two methods, one to help hashing password (hashPassword)
 * and the second to retrieve hashed password
 */
class TokenHelper {
  /**
   * Hashs the password for signup and login response.
   * @param {int} id The user's id.
   * @param {string} email The user's email.
   * @returns {string} The users's hashed password.
   */
  static generateToken(id, email, role) {
    return jwt.sign({ id, email, role }, process.env.SECRET_KEY);
  }

  /**
   * Hashs the password.
   * @param {string} token The user's token.
   * @param {string} secrectKey The secret key.
   * @returns {string} The users's hashed password.
   */
  static decodedToken(token) {
    return jwt.verify(token, process.env.SECRET_KEY);
  }
}
export default TokenHelper;
