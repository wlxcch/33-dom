clickMe.addEventListener('click',function(){
    popover.style.display="block"
})
//此时控制台不会出现1，给body加border后发现body的border就一点点，并不是整个窗口
document.body.addEventListener('click',function(){
    console.log(1)
})