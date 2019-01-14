# AJAX
- 1.可以通过form标签的method属性指定发送请求的类型
- 2.如果是get请求会将提交的数据拼接到url后面
- 3.如果是post请求数据会放在请求头中
- 4.GET请求和POST请求的异同
    - 4.1相同点:
        - 都是将数据提交到远程服务器
    - 4.2不同点:
        - 4.2.1提交数据存储的位置不同GET请求会将数据放到URL后面POST请求会将数据放到请求头中
        - 4.2.2提交数据大小限制不同GET请求对数据有大小限制POST请求对数据没有大小限制
- 5.GET/POST请求应用场景
    - GET请求用于提交非敏感数据和小数据POST请求用于提交敏感数据和大数据
## 文件上传
- 前端：
    - 上传文件一般使用post提交
    - 上传文件必须设置enctype="multipart/form-data"，否则不能上传文件
- 后端：
    - 上传的文件在php中可以通过$_FILES获取
    - php中文件默认会上传到一个临时目录，接收完成后会自动删除
    
- 默认情况下服务器对上传文件的大小是有限制的, 如果想修改上传文件的限制可以修改php.ini文件
- file_uploads = On   ; 是否允许上传文件 On/Off 默认是On
- upload_max_filesize = 2048M       ; 上传文件的最大限制
- post_max_size = 2048M             ; 通过Post提交的最多数据

- max_execution_time = 30000      ; 脚本最长的执行时间 单位为秒
- max_input_time = 30000          ; 接收提交的数据的时间限制 单位为秒
- memory_limit = 2048M            ; 最大的内存消耗