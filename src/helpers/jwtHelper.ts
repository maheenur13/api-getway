import httpStatus from 'http-status';
import { verify } from 'jsonwebtoken';
import config from '../config';
import ApiError from '../errors/apiError';

const verifyToken = (token: string, reject: (reason: any) => void) => {
  try {
    const isVerified = verify(token, config.jwt.secret);

    return isVerified as any;
  } catch (error) {
    reject(new ApiError(httpStatus.UNAUTHORIZED, 'Invalid token'));
  }
};

export const JwtHelper = {
  verifyToken
};
