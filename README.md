## Usage
```
    npm i
    npm run start
```
open http://127.0.0.1:8081


## Question

在`public/`下对应html文件内答题
1.  创建code: 在`editCode`页面中创建一个表单，表单元素有
    - code 
    - name
    - 提交按钮

    提交url为: `post` `/code`

2.  获取列表: 在`codeList`页面中渲染一个table，table列有
    - id 
    - code 
    - name

    数据来源url: `get` `code/list`

3. 删除code: 在`codeList`页面table中新增一列`操作`，内容为`删除`。点击删除，发送请求删除该资源

    url为: `delete` `/code/:id`

4. 修改code: 在`codeList`页面table中新增一列`操作`，内容为`修改`，点击修改跳转到`editCode`页面中，点击提交按钮修改资源

    `put`方法提交数据:     
    - id
    - code 
    - name

    提交url为:  `/code/:id`



## api: 
`get` `/task/list/:type` 根据type返回任务列表

返回值：
status: 200
```
{
    "data": {
        "1": [ // 孕周
            {
                "taskid": 3,
                "week": 1,
                "type": 1,
                "start_time": 1558767481873,
                "end_time": 1559174400000,
                "status": -1,
                "modify_time": 0,
                "title": "体重2",
                "content": "<p>体重(body weight)：裸体或穿着已知重量的工作衣称量得到的身体重量。在中医体重为病状名。身体倦怠沉重。 素问·《阴阳应象大论》：“年五十，体重，耳目不聪矣。”体重增长除与骨的增长关系密切以外，还与肌肉，脂肪等的增长有关系。体重增长趋势：在青春期，肌肉的发育比较突出。当身高迅速增长时，...</p>"
            },
            {
                "taskid": 1,
                "week": 1,
                "type": 1,
                "start_time": 1558767481873,
                "end_time": 1559174400000,
                "status": -1,
                "modify_time": 0,
                "title": "体重",
                "content": "<p>体重(body weight)：裸体或穿着已知重量的工作衣称量得到的身体重量。在中医体重为病状名。身体倦怠沉重。 素问·《阴阳应象大论》：“年五十，体重，耳目不聪矣。”体重增长除与骨的增长关系密切以外，还与肌肉，脂肪等的增长有关系。体重增长趋势：在青春期，肌肉的发育比较突出。当身高迅速增长时，...</p>"
            }
        ]
    },
    "msg": "成功"
}
```


`get` `/task/:taskid'` 根据taskid返回详情

返回值：
status: 200
```
{
    data: {
        taskid: 1,
        week: 1,
        type: 3,
        start_time: 1558767481873,
        end_time: 1559174400000,
        status: -1,
        modify_time: 0,
        title: "百白破疫苗",
        content: "<p>乙肝疫苗（Hepatitis B vaccin）是提纯的乙肝表面抗原，是死疫苗，是用于预防乙肝的一种特殊药物。疫苗接种后，可刺激免疫系统产生保护性抗体，这种抗体存在于人的体液中，乙肝病毒一旦出现，抗体会立即作用将其清除，阻止感染，并且不会伤害到肝脏，从而使人体具有预防乙肝的免疫力，以达到预防乙肝感染的目的。</p>"
    },
    msg: "成功"
}
```

`post` `/task/finish/:taskid` 完成任务
参数： 
```
    {
        data: [{value:xxxx, time: xxx}, {value:xxxx, time: xxx}] //  具体时间/数值的集合
    }
```

返回值：
status: 200
```
    {
        msg: '成功'
    }
```

`post` `/task/deploy/:taskid` 延期任务一周

返回值
status: 200
```
    {
        msg: '成功'
    }
```