import Auth from '../helpers/TokenHelper';
import adminExists from '../helpers/adminAuthHelpers';

export default (req, res, next) => {
    try {
        if (!req.headers.authorization) {
            return res.status(401).send({
                status: 401,
                error: 'Please provide a token first',
            });
        }
        const token = req.headers.authorization;
        const decoded = Auth.decodedToken(token);
        req.userData = decoded;
        if (!adminExists('email', req.userData.email)) {
            return res.status(403).send({
                status: 403,
                error: 'Not Allowed',
            });
        }
        return next();
    } catch (error) {
        return res.status(401).json({
            status: 401,
            error: 'Auth failed',
        });
    }
};
