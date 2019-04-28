import { Router, Request, Response } from 'express';
import { BaseError } from '../utils/errTypes';

export const sendError = (res: Response, error: BaseError) => {
    res.status(error.errCode);
    res.send({
        msg: error.message
    });
};

interface SuccessResult {
    data?: any;
    msg?: string;
}
export const sendSuccess = (res: Response, result: SuccessResult) => {
    res.send(result);
};
