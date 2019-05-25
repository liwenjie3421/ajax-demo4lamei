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
                title: '百白破疫苗',
                content: '<p>乙肝疫苗（Hepatitis B vaccin）是提纯的乙肝表面抗原，是死疫苗，是用于预防乙肝的一种特殊药物。疫苗接种后，可刺激免疫系统产生保护性抗体，这种抗体存在于人的体液中，乙肝病毒一旦出现，抗体会立即作用将其清除，阻止感染，并且不会伤害到肝脏，从而使人体具有预防乙肝的免疫力，以达到预防乙肝感染的目的。</p>'
            },
            {
                taskid: 1,
                week: 1,
                type: 1,
                start_time: 1558767481873,
                end_time: 1559174400000,
                status: -1,
                modify_time: 0,
                title: '体重',
                content: '<p>体重(body weight)：裸体或穿着已知重量的工作衣称量得到的身体重量。在中医体重为病状名。身体倦怠沉重。 素问·《阴阳应象大论》：“年五十，体重，耳目不聪矣。”体重增长除与骨的增长关系密切以外，还与肌肉，脂肪等的增长有关系。体重增长趋势：在青春期，肌肉的发育比较突出。当身高迅速增长时，...</p>'
            },
            {
                taskid: 3,
                week: 1,
                type: 1,
                start_time: 1558767481873,
                end_time: 1559174400000,
                status: -1,
                modify_time: 0,
                title: '体重2',
                content: '<p>体重(body weight)：裸体或穿着已知重量的工作衣称量得到的身体重量。在中医体重为病状名。身体倦怠沉重。 素问·《阴阳应象大论》：“年五十，体重，耳目不聪矣。”体重增长除与骨的增长关系密切以外，还与肌肉，脂肪等的增长有关系。体重增长趋势：在青春期，肌肉的发育比较突出。当身高迅速增长时，...</p>'
            },
            {
                taskid: 4,
                week: 1,
                type: 2,
                start_time: 1558767481873,
                end_time: 1559174400000,
                status: -1,
                modify_time: 0,
                title: '体温',
                constent: '<p>健康人的体温是相对恒定的，当体温超过正常体温的最高限度时称为发热，就是平常人们所说的发烧。传统观念认为正常体温为37℃，但因为测试部位、时间、季节及个体...</p>'
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

taskRouter.get('/:taskid', (req: Request, res: Response) => {
    const { taskid }: { taskid: string } = req.params
    sendSuccess(res, {
        data: taskListDB.find({taskid: +taskid}).value()
    })
})

taskRouter.post('/finish/:taskid', (req: Request, res: Response) => {
    
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
