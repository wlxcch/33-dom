let $buttons=$('#buttonWrapper>button')
let $slides=$('#slides')
let $images=$slides.children('img')
//true克隆img第一张图片的所有元素包括子元素
let $firstCopy=$images.eq(0).clone(true)
let $lastCopy=$images.eq($images.length-1).clone(true)
//检验copy的元素是否正确
// console.log($firstCopy[0].outerHTML)
// console.log($lastCopy[0].outerHTML)

//将复制的元素添加到相应的位置
$slides.append($firstCopy)
$slides.prepend($lastCopy)

//初始化slides窗口的位置
let current=0
$slides.css({transform:'translateX(-300px)'})
$buttons.eq(0).on('click',function(){
   if(current==4){
       console.log('说明是从最后一张到第一张')
       $slides.css({transform:'translateX(-1800px)'})
       .one('transitionend',function(){
        console.log('动画完毕')
     })
 }else{
    $slides.css({transform:'translateX(-300px)'})
   }
   current=0
})
$buttons.eq(1).on('click',function(){
    $slides.css({transform:'translateX(-600px)'})
    current=1
})
$buttons.eq(2).on('click',function(){
    $slides.css({transform:'translateX(-900px)'})
    current=2
})
$buttons.eq(3).on('click',function(){
    $slides.css({transform:'translateX(-1200px)'})
    current=3
})
$buttons.eq(4).on('click',function(){
    if(current==0){console.log('说明你是从第一张到最后一张')
     }
    else{
        $slides.css({transform:'translateX(-1500px)'})
    }   
    current=4
})
 