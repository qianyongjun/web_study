/*i=0;
function changePic(){
    var li=document.getElementsByTagName('li');
    var b=li.length;
    if(b>0){
        i++;
        console.log(i);
        if((b-i)%2===0){
            li[b-i].setAttribute('class','odd');
        }
        else{
            li[b-i].setAttribute('class','even');
        }
    }
    else{
        return;
    }
}

function movePic(e){
    var num=0;
    if(e.which===1){
        var t=setInterval(function(){
            num+=10;
            if(num==1000){
                num==0;
                var q=setInterval(function(){
                    var li=document.getElementsByTagName('li');
                    var b=li.length;
                    if(b>0){
                        i++;
                        console.log(i)
                        if((b-i)%2==0){
                            li[b-i].setAttribute('class','odd');
                        }
                        else{
                            li[b-i].setAttribute('class','even');
                        }
                    }
                },100)
            }
        },10);
    }
}
*/

$(function(){
    $('.icon-toggle').on('click',function(){
        if($('.nav-collapse').hasClass('in')){
            $('.nav-collapse').slideUp().removeClass('in');
        }
        else{
            $('.nav-collapse').slideDown().addClass('in');
        }
    })
})
