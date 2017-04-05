 
$(document).ready(function(){
	$(".p1").click(function(){
	$(this).hide();
});
});
$(document).ready(function(){
	$(".p2").dblclick(function(){
		$(this).addClass("blue");
	});
	$(".p3").mouseenter(function(){
		$(this).addClass("red");
	});
	$(".p4").mouseleave(function(){
		$(this).addClass("orange");
	});
	$(".p5").mousedown(function(){
		$(this).addClass("green");
	})
	$(".p6").mouseup(function(){
		$(this).addClass("pink");
	})
	$(".p7").hover(function(){
		$(this).addClass("aqua");
	})
});
$(document).ready(function(){
	$(".f1").focus(function(){
		$(this).css("background-color","pink");
	});
	//当元素失去焦点时发生blur事件
	$(".f1").blur(function(){
		$(this).css("background-color","lightgray");
	});
});

$(document).ready(function(){
	$(".b1").click(function(){
		$("#p1").hide(1000);
	});
	$(".b2").click(function(){
		$("#p1").show(1000);
	});
	$(".b3").click(function(){
		$("#p1").toggle();
	});
});

$(document).ready(function(){
	$(".d1").click(function(){
		$("#p2").fadeToggle(2000);
	});
	$(".b4").click(function(){
		$(".d1").fadeTo("slow",0.5);
	});
	$(".b5").click(function(){
		$("#p2").fadeIn(1000);
	});
	$(".b6").click(function(){
		$("#p2").fadeOut(1000);
	});
});

$(document).ready(function(){
	$(".d2").click(function(){
		$("#p3").slideToggle(4000);
	});
	$(".b62").click(function(){
		$("#p3").stop();
	});
});

$(document).ready(function(){
	$(".b7").click(function(){
		$(".d3").animate({
			left:'300px',
			opacity:'0.5',
			height:'150px',
			width:'150px',
		},"slow");
		$(".d3").animate({
			left:'500px',
			opacity:'0.1'
		},"slow");
		$(".d3").animate({
			left:'200px',
			opacity:'1',
			fontSize:'2em'
		},"slow",function(){
			document.getElementById("cb").innerHTML="callback function";
		});
	});
});

$(document).ready(function(){
	$(".b8").click(function(){
		$("#p4").animate({
			opacity:'0.2'
		},"slow")
		.slideUp(2000)
		.slideDown(2000)
		.animate({
			width:'500px',
			height:'450px',
			opacity:'0.9'
		},"slow");
	});
});

$(document).ready(function(){
	$(".b9").click(function(){
		alert("text: "+$("#te").text());
	});
	$(".b10").click(function(){
		alert("html: "+$("#te").html());
	});
	$(".b11").click(function(){
		alert("href: "+$("#a").attr("href"));
	});
	$(".b12").click(function(){
		alert("val: "+$("#test").val());
	});
});

$(document).ready(function(){
	$(".b13").click(function(){
		$("#t1").text("hello world");
	});
	$(".b14").click(function(){
		$("#t2").html("hello <b>world</b>");
	});
	$(".b15").click(function(){
		$("#m1").val("Rose");
	});
	$(".b16").click(function(){
		$("#a3").attr({
			"href":"http://www.baidu.com",
			"title":"BaiDu"
		});
		title=$("#a3").attr("title");
		$("#a3").text(title);
	});
});
//回调函数
$(document).ready(function(){
	$(".b17").click(function(){
		$("#t1").text(function(i,origText){
			return "old: "+origText+"  new: "+"what is wrong";
		});
	});
	$(".b18").click(function(){
		$("#t2").html(function(i,origHtml){
			return "old: "+origHtml+"  new: "+"something <b>raining</b>";
		});
	});
});

//添加元素
function pre(){
	var tx1="<span>one </span>";
	var tx2=$("<span></span>").text("two ");
	var tx3=document.createElement("span");
	tx3.innerHTML="three ";
	$("#t3").prepend(tx1,tx2,tx3);
}
function app(){
	var tx1="<span> five</span>";
	var tx2=$("<span></span>").text(" six");
	var tx3=document.createElement("span");
	tx3.innerHTML=" seven";
	$("#t3").append(tx1,tx2,tx3);
}
$(document).ready(function(){
	$(".b19").click(function(){
		$("#l1").after("<li>梨花</li>");
	});
	$(".b20").click(function(){
		$("#l1").before("<li>百合</li>");
	});
});

$(document).ready(function(){
	$(".b21").click(function(){
		$(".d5").remove();
	});
	$(".b22").click(function(){
		$(".d5").empty();
	});
	$(".b23").click(function(){
		$(".d5").addClass("class");
	});
	$(".b24").click(function(){
		$(".d5").removeClass("class");
	});
	$(".b25").click(function(){
		$(".d5").toggleClass("class");
	});
	$(".b26").click(function(){
		$(".d5").css({
			"background-color":"black",
			"color":"white",
			"width":"70%",
			"height":"150px",
			"font-size":"2em",
			"font-style":"italic"
		});
	});
});
$(document).ready(function(){
	$(".b27").click(function(){
		var txt="";
    txt+="width: " + $(".d6").width() + "</br>";
    txt+="height: " + $(".d6").height() + "</br>";
    txt+="outerWidth: " + $(".d6").outerWidth() + "</br>";
    txt+="outerHeight: " + $(".d6").outerHeight() + "</br>";
	txt+="innerWidth: "+ $(".d6").innerWidth() + "</br>";
	txt+="innerHeight: "+ $(".d6").innerHeight();
	$(".d6").html(txt);
	});	
});

//遍历
$(document).ready(function(){
	$(".o1").click(function(){
		$(".v31").parent().css({"border":"2px solid red"});
	});
	$(".o2").click(function(){
		$(".v31").parents().css({"border":"2px solid blue"});
	});
	$(".o3").click(function(){
		$(".v31").parentsUntil(".v1").css({"border":"2px solid green"});
	});
	$(".o4").click(function(){
		$(".v33").children().css({"background-color":"yellow"});
	});
	$(".o5").click(function(){
		$(".v1").find("p").css({"background-color":"cyan"});
	});
	$(".o6").click(function(){
		$(".v31").siblings().css({"border":"2px solid orange"});
	});
	$(".o7").click(function(){
		$(".v31").next().css({"background-color":"cyan"});
	});
	$(".o8").click(function(){
		$(".v31").nextAll().css({"background-color":"Chartreuse "});
	});	
	$(".o9").click(function(){
		$(".v31").nextUntil(".v33").css({"background-color":"crimson "});
	});	
	$(".o10").click(function(){
		$(".v33").prev().css({"background-color":"cyan"});
	});
	$(".o11").click(function(){
		$(".v33").prevAll().css({"background-color":"Chartreuse "});
	});	
	$(".o12").click(function(){
		$(".v33").prevUntil(".v31").css({"background-color":"crimson "});
	});	
});




