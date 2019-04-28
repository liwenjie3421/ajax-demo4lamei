import { Router, Request, Response } from 'express';
import * as lowdb from 'lowdb';
import * as FileSync from 'lowdb/adapters/FileSync';

import { BadParamsErr } from '../utils/errTypes';
import { sendError, sendSuccess } from '../utils/utils';

const adapter = new FileSync('db.json'); // 申明一个适配器
const db = lowdb(adapter);
db.defaults({
    code: [
        { id: 1, name: '测试名称1', code: 'TEST_CODE_1' },
        { id: 2, name: '测试名称2', code: 'TEST_CODE_2' },
        { id: 3, name: '测试名称3', code: 'TEST_CODE_3' },
        { id: 4, name: '测试名称4', code: 'TEST_CODE_4' },
        { id: 5, name: '测试名称5', code: 'TEST_CODE_5' },
        { id: 6, name: '测试名称6', code: 'TEST_CODE_6' },
        { id: 7, name: '测试名称7', code: 'TEST_CODE_7' },
        { id: 8, name: '测试名称8', code: 'TEST_CODE_8' },
        { id: 9, name: '测试名称9', code: 'TEST_CODE_9' },
        { id: 10, name: '测试名称10', code: 'TEST_CODE_10' }
    ]
}).write();
const codeRouter = Router();

codeRouter.get('/list', (req: Request, res: Response) => {
    const list = db.get('code').sortBy('id').value();
    res.send(list);
});
codeRouter.post('/', (req: Request, res: Response) => {
    const codeDB = db.get('code');
    const count = codeDB.size().value();
    const {name, code} = req.body;
    const item = codeDB.find({code}).value();

    if (!item) {
        db.get('code').push({
            code, name, id: count + 1
        }).write();
        sendSuccess(res, {
            msg: '增加成功'
        });
    } else {
        sendError(res, new BadParamsErr('code重复'));
    }

});

export default codeRouter;
