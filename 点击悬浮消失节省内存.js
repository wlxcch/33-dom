$(clickMe).on('click'.function(){
    $(popover).show()
    //只有在按钮被点击的时候document事件才会被监听，而且就执行一次
    $(document).one('click'.function(){
        $(popover).hide()

})
// $(wrapper).on('click',flase)
//这句等于下面的三句，flase可以阻止默认事件，但是浮层执行一次就不会消失，BUG
$(wrapper).on('click',function(e){
    //    e.preventDefault()
    e.stopPropagation()
})

