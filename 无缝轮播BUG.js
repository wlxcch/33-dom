let $buttons=$('#buttonWrapper>button')
let $slides=$('#slides')
let $images=$slides.children('img')
let current=0

makeFakeSlides()
//初始化slides窗口的位置
$slides.css({transform:'translateX(-300px)'})
bindEvents()


$('#next').on('click',function(){
    goToSlides(current+1)
})

let timer=setInterval(function(){
    goToSlides(current+1)
},2000)
$(`.container`).on(`mouseenter`,function(){
      console.log(1)
      window.clearInterval(timer)
}).on(`mouseleave`,function(){
    console.log(2)
    timer=setInterval(function(){
        goToSlides(current+1)
    },2000)
})



function makeFakeSlides(){
    //true克隆img第一张图片的所有元素包括子元素
    let $firstCopy=$images.eq(0).clone(true)
    let $lastCopy=$images.eq($images.length-1).clone(true)
    //检验copy的元素是否正确
    // console.log($firstCopy[0].outerHTML)
    // console.log($lastCopy[0].outerHTML)
    //将复制的元素添加到相应的位置
    $slides.append($firstCopy)
    $slides.prepend($lastCopy)
}

function bindEvents(){
//遍历current
$('#buttonWrapper').on('click','button',function(e){
    let $button=$(e.currentTarget)
    let index=$button.index()
    goToSlides(index)
})
}
function goToSlides(index){
    if(index>$buttons.length-1){
        index=0
    }else if(index<0){
        index=$buttons.length-1
    }

    if(current === $buttons.length-1 && index === 0){
        //最后到第一
        $slides.css({transform:`translateX(${-($buttons.length+1)*300}px)`})
        .one(`transitionend`,function(){
        $slides.hide().offset()
        $slides.css({transform:'translateX(-300px)'}).show()
    })
    }else if ( current === 0 && index === $buttons.length - 1) {
        //第一到最后
        $slides.css({transform:'translateX(0px)'})
        .one('transitionend',function(){
        $slides.hide().offset()
        $slides.css({transform:`translateX(${-(index+1)*300}px)`}).show()
    
    })
    }else{
         //下面这一句顶替，下面隐藏的代码
         $slides.css({transform:`translateX(${-(index+1)*300}px)`})
    }
       
    current =index
}
//$$$$$$一定要注意用模板引号
// $buttons.eq(0).on('click',function(){
//    if(current==4){
//        console.log('说明是从最后一张到第一张')
//        $slides.css({transform:'translateX(-1800px)'})
//        .one('transitionend',function(){
//         // console.log('动画完毕')
//         $slides.hide()
//         .offset()
//         //.offset()后面要跟对象，浏览器会有一个运算过程，然后终止这个过程计算
//         //如果不加.offset()，浏览器认为一会隐藏一会显示，浏览器会合并代码不隐藏直接显示
//         //加上offset()，告诉浏览器，隐藏一下在显示
//         $slides.css({transform:'translateX(-300px)'})
//         .show()
//      })
//  }else{
//     $slides.css({transform:'translateX(-300px)'})
//    }
//    current=0
// })
// $buttons.eq(1).on('click',function(){
//     $slides.css({transform:'translateX(-600px)'})
//     current=1
// })
// $buttons.eq(2).on('click',function(){
//     $slides.css({transform:'translateX(-900px)'})
//     current=2
// })
// $buttons.eq(3).on('click',function(){
//     $slides.css({transform:'translateX(-1200px)'})
//     current=3
// })
// $buttons.eq(4).on('click',function(){
//     if(current==0){console.log('说明你是从第一张到最后一张')
//      }
//     else{
//         $slides.css({transform:'translateX(-1500px)'})
//     }   
//     current=4
// })
// }