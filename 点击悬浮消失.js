clickMe.addEventListener('click',function(){
    popover.style.display="block"

  
})
//BUG1 此时控制台不会出现1，给body加border后发现body的border就一点点，并不是整个窗口
// document.body.addEventListener('click',function(){
//     console.log(1)
// })

//BUG2所以改为监听文档,虽然可以打印 console.log(1)，加上popover.style.display='none'之后，
//此时点击按钮变block属性不起作用，元素不显示了，display='none'也执行了
document.addEventListener('click',function(){
    popover.style.display='none'
})
wrapper.addEventListener("click",function(e){
        //阻止默认事件，stopPropagation停止传播的意思
    e.stopPropagation()
})