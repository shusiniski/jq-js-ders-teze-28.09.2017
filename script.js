// obj={
// 	a:function() {
// 		console.log("heci")
// 		return this;


// 	},
// 	b:function() {
// 		console.log("mesedi")
// 		return this;
// 	}
// }

// obj.a().b()


// $("li").click(function() {
// 	$("li").removeClass("active");
// 	$(this).addClass("active");
// 	console.log()
// })


// $(window).on('mousemove',function(event){

// 	$(".main").css({
// 		left:event.pageX,
// 		top:event.pageY,
// 	})
// });

var x=0;
var y=0;
function showCoords(event){
	x = event.clientX;
	y = event.clientY;
	document.querySelector(".main").style.left=x+"px";
	document.querySelector(".main").style.top=y+"px";
}
window.addEventListener("mousemove", showCoords)