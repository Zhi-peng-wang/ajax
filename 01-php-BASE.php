<?php
//1.JS中有俩种注释
//1.1单行注释
//1.2多行注释

//2.JS中如何定义变量？
//var num = 100;

//php变量定义
$num = 100;

//3.JS中如何打印内容？
//consloe.log()
//注意点：后端编写的代码不能直接运行，只能放到服务器对应的文件夹下，通过服务器运行
//如何通过服务器运行：通过ip地址找到服务器对应的文件夹，然后在找到对应的文件运行
//echo $num;

//4.JS中如何定义集合
//4.1数组
//var arr = [1,2,3];
//$arr = array(1,2,5);
//echo $arr;
//print_r($arr);
//echo $arr[2]

//4.2字典(对象)

//var dict = {"name":"zs", "age":"18"}
// dict["name"];

//$dict = array("name"=>"zs", "age"=>"18");
//print_r($dict);
//echo "<br>";
//echo $dict["name"];


//6.JS中的分支循环语句
// if/switch/三目/for/while
//$age = 18;
//if ($age >= 18){
//    echo "成年人";
//
//}else{
//    echo "未成年人";
//}

//$res = ($age >19)? "1" : "2";
//echo $res;
//switch ($age){
//    case 0:
//        echo "nihao";
//        break;
//    case 18:
//        echo "chengnian";
//        break;
//    case 17:
//        echo "weichengnian";
//        break;
//
//}
$arr = array(1,2,5);
//for ($i = 0;$i<count($arr);$i++){
//    echo $arr[$i];
//    echo "<br>";
//}
$index = 0;
while ($index < count($arr)){
    echo $arr[$index];
    echo "<br>";
    $index++;
}

?>