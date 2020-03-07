import Auth from '../helpers/TokenHelper';
import Device from '../helpers/DeviceHelper';

export default async(req, res, next) => {
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
        const device = await Device.deviceExists('device_id', req.userData.device_id);
        if (!device) {
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
