import Hasher from '../helpers/passwordHasher';

export default (req, res, next) => {
  if (req.body.password) {
    req.body.password = Hasher.hashPassword(req.body.password);
    return next();
  }
};
