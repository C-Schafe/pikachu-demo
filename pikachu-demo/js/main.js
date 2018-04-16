!function(){
	var duration = 50
	function writeCode(prefix, code, fn){
		console.log(12)
		var container = document.querySelector('#code')
		var styleTag = document.querySelector('#styleTag')
		var n = 0
		var id = setTimeout(function run(){
			n += 1
			container.innerText = code.substring(0,n)
			styleTag.innerText = code.substring(0,n)
			container.scrollTop = container.scrollHeight
			if(n < code.length){
				setTimeout(run,duration)
			}
		}, duration)
	}
	var code = `
/*
*首先来画个皮卡丘的皮
*/
.preview-wrapper {
  border: 1px solid red;
  height: 50%;
  flex: 1;
  background-color: #ffe600;
  display: flex;
  align-items: center;
  justify-content: center;
}
.wrapper {
  height: 182px;
  width: 320px;
  position: relative;
}
/*
*再来给皮卡丘画个鼻子
*/
.nose {
  height: 0px;
  width: 0px;
  border: 10px solid #000;
  border-width: 10px 13px;
  border-radius: 50%;
  border-color: #000 transparent transparent transparent; 
  position: absolute;
  left: 50%;
  margin-left: -10px;
  top: 26px;
}
/*
*给皮卡丘画两个眼睛
*/
.eye {
  height: 50px;
  width: 50px;
  border: 2px solid #000;
  border-radius: 50%;
  background-color: #2e2e2e;
  position: absolute;
}
.eye.left {
  left: 65px;
}
.eye.right{
  right: 65px;
}
/*
*来两个眼珠子
*/
.eye.left:before,.eye.right:before{
  content: '';
  display: block;
  height: 24px;
  width: 24px;
  background-color: #fff;
  border: 2px solid #000;
  border-radius: 50%;
  position: absolute;
  left: 5px;
}
/*
*画两个红红的小脸蛋~
*/
.face {
  height:68px;
  width: 68px;
  background-color: #ff0000;
  border: 3px solid black;
  border-radius: 50%;
  position: absolute;
  top: 84px;
}
.face.right {
  right: 0px;
}
/*
*来个上嘴唇
*/
.upperLip {
  height: 20px;
  width: 70px;
  border: 2px solid black;
  border-top: none;
  position: absolute;
  top: 53px;
  background-color: #ffe600;
}
.upperLip.left {
  right: 50%;
  border-bottom-left-radius: 40px 20px;
  border-right: none;
  transform: rotate(-20deg);
}
.upperLip.right {
  border-bottom-right-radius: 40px 20px;
  border-left: none;
  left: 50%;
  transform: rotate(20deg);
}
/*
*张开皮卡丘的大嘴~
*/
.mouth {
  height: 2000px;
  width: 200px;
  border: 2px solid #000;
  background-color: #9b000a;
  border-radius: 200px/1500px;
  position: absolute;
  bottom: 0;
  left: 50%;
  margin-left: -100px;
  overflow: hidden;
 ;
}
.mouth-wrapper {
  height: 130px;
  width: 200px;
  position: absolute;
  top: 60px;
  left: 50%;
  margin-left: -100px;
  overflow: hidden;
}
.mouth::after{
  content: '';
  display: block;
  height: 200px;
  width: 200px;
  background-color: #ff485f;
  position: absolute;
  left: 50%;
  bottom: -100px;
  margin-left: -100px;
  border-radius: 100px/100px;
  border: 1px purple solid
}
/*
*噔噔噔噔~Pika,Pica,Pikachu~
*/
`
	writeCode('',code)

	$('.actions').on('click','button',function(e){
		var $button = $(e.currentTarget)
		$button.addClass('active')
			   .siblings('button')
			   .removeClass('active')
	   	var speed = $button.attr('data-speed')
	   	switch(speed){
	   		case 'slow':
	   			duration = 100
   				break
			case 'normal':
				duration = 50
				break
			case 'fast':
				duration = 5
				break
	   	}
	})



}.call()
