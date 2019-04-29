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
