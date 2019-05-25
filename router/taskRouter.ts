import { Router, Request, Response } from 'express'
import * as lowdb from 'lowdb'
import * as FileSync from 'lowdb/adapters/FileSync'
console.log(lowdb)
import { BadParamsErr } from '../utils/errTypes'
import { sendError, sendSuccess } from '../utils/utils'

const adapter = new FileSync('db.json') // 申明一个适配器
const db = lowdb(adapter)
const typeList = [1, 2, 3] // 1 体重 | 2 体温 | 3 疫苗
db.defaults({
    task: {
        list: [
            // type: 1 体重 | 2 体温 | 3 疫苗
            // status: -1 未完成 | 1 已完成
            // modify_time 更新时间
            // week 孕周
            {
                taskid: 1,
                week: 1,
                type: 3,
                start_time: 1558767481873,
                end_time: 1559174400000,
                status: -1,
                modify_time: 0,
                title: '百白破疫苗'
            },
            {
                taskid: 1,
                week: 1,
                type: 1,
                start_time: 1558767481873,
                end_time: 1559174400000,
                status: -1,
                modify_time: 0,
                title: '体重'
            },
            {
                taskid: 3,
                week: 1,
                type: 1,
                start_time: 1558767481873,
                end_time: 1559174400000,
                status: -1,
                modify_time: 0,
                title: '体重2'
            },
            {
                taskid: 1,
                week: 1,
                type: 2,
                start_time: 1558767481873,
                end_time: 1559174400000,
                status: -1,
                modify_time: 0,
                title: '体温'
            }
        ]
    }
}).write()
const taskRouter = Router()
const taskDB = db.get('task')
const taskListDB = db.get('task.list')

taskRouter.get('/list/:type', (req: Request, res: Response) => {
    const { type }: { type: string } = req.params

    if (typeList.indexOf(+type) === -1) {
        sendError(res, new BadParamsErr('type 错误'))
    } else {
        sendSuccess(res, {
            data: getListByType(+type)
        })
    }
})

function getListByType(type: number) {
    const data = {}
    const taskList: any[] = taskListDB.filter({ type: +type }).sortBy('start_time', (item) => -item).value()
        taskList.map((task) => {
            data[task.week] = data[task.week] || []
            data[task.week].push(task)
        })
    return data
}


export default taskRouter
