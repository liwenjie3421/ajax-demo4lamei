export const notFoundCode = 404;
export const errCode = 500;
export const authErrCode = 401;
export const badParamsErrCode = 400;
export const successCode = 200;

export class BaseError extends Error {
    public errCode;
}

export class CommonErr extends BaseError {
    public errCode;
    public constructor(errMsg = '内部错误') {
        super(errMsg);
        this.message = errMsg;
        this.errCode = errCode;
    }
}
export class AuthErr extends BaseError {
    public errCode;
    public constructor(errMsg = '鉴权失败') {
        super(errMsg)
        this.message = errMsg
        this.errCode = authErrCode
    }
}
export class NotFoundErr extends BaseError {
    public errCode
    public constructor(errMsg = '资源不存在') {
        super(errMsg)
        this.message = errMsg
        this.errCode = notFoundCode
    }
}
export class BadParamsErr extends BaseError {
    public errCode
    public constructor(errMsg = '参数错误') {
        super(errMsg)
        this.message = errMsg
        this.errCode = badParamsErrCode
    }
}
