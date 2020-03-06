import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import authConfig from '../../config/auth';

export default async (req, res, next) => {
  const authHeeader = req.headers.authorization;

  if (!authHeeader) {
    return res.status(401).json({ error: 'token not provider' });
  }

  const [, token] = authHeeader.split(' ');
  /* desestruturação de um array, 
    Neste modo colocando o primeiro campo vazio, é destruturado mas ele só pega
    o valor da segunda parte do split
  */

  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);
    req.userId = decoded.id;

    return next();
  } catch (err) {
    return res.status(401).json({
      error: 'Invalid Token',
      tok: token,
      auth: authConfig.secret,
    });
  }
};
