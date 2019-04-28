## Usage
```
    npm i
    npm run start
```
open http://127.0.0.1:8081


## Question

在`public/`下对应html文件内答题
1.  在`editCode`页面中创建一个表单，表单元素有
    - code 
    - name
    - 提交按钮
    提交url为: `post` `/code`
2.  在`codeList`页面中创建一个table，table列有
    - id 
    - code 
    - name
    - 操作(删除、修改)

    url: `get` `/code/list`