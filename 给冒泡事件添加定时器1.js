<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>点击别处悬浮框消失</title>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="./给冒泡事件添加定时器.js"></script>
    <style>
        body{border:1px solid red;}
       .wrapper{
            position:relative;
            display:inline-block;
        }
        .popover{
            position:absolute;
            border:1px solid red;
            left:100%;
            top:0;
            /* 不换行显示 */
            white-space:nowarp;
            margin-left:10px;
            background:white;
            display:none;
            
        }
        /* 做三角行的角 */
        .popover::before{
            position:absolute;
            right:100%;
            top:5px;
            border:10px solid transparent;
            border-right-color:red;
            content:'';
        }
        /* 用白色跟背景色一样的颜色，覆盖border */
        .popover::after{
            position:absolute;
            right:100%;
            top:5px;
            border:10px solid transparent;
            border-right-color:white;
            content:'';
            margin-right:-1px;
        }
    </style>
</head>
<body>
    <div id="wrapper" class="wrapper">
        <button id="clickMe">点我</button>
        <div id="popover" class="popover">
           <input type="checkbox"> 浮层
        </div>
    </div>
</body>
</html>