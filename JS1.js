function uppercase()
{
	var x=document.getElementById("f1").value;
	document.getElementById("f1").value=x.toUpperCase();
}
function change(val)
{
	alert("new value: "+val);
}
function cfocus(x)
{
	document.getElementById(x).style.background="yellow";
}
function cselect()
{
	alert("you have selected.");
}
function csubmit()
{
	alert("are you sure to submit?");
}
function displayResult()
{
	var x;
	if(window.event)
		x=event.keyCode;
	else if(event.which)
		x=event.which;
	var keychar=String.fromCharCode(x);
	alert(keychar +" is pressed down.");
}
function bigCase(x)
{
	var d=document.getElementById(x).value;
	document.getElementById(x).value=d.toUpperCase();
}
function copyText()
{
	var x=document.getElementById("m1").value;
	document.getElementById("m2").value=x;
}
function changeColor()
{
	document.getElementById("m3").style.color="red";
}
function changeImg()
{
	document.getElementById("m4").src="g.gif";
}
function changeBig(x)
{
	x.style.height="400px";
	x.style.width="400px";
}
function changeSmall()
{
	var x=document.getElementById("m5");
	x.style.height="100px";
	x.style.width="100px";
}
function changeOpacity()
{
	document.getElementById("m5").style.opacity="0.5";
}
function changeGreen()
{
	document.getElementById("m6").style.color="green";
	document.getElementById("m6").style.fontStyle="normal";
}
function changeRed()
{
	document.getElementById("m6").style.color="red";
	document.getElementById("m6").style.fontStyle="italic";
}
function isPoint()
{
	var c=document.getElementById("c15");
	var ctx=c.getContext("2d");
	ctx.rect(20,20,150,100);
	if(ctx.isPointInPath(20,50))
	{
		var gad=ctx.createLinearGradient(0,0,170,0);
		gad.addColorStop(0,"yellowgreen");
		gad.addColorStop(0.5,"pink");
		gad.addColorStop(1,"yellow");
		ctx.fillStyle=gad;
		ctx.fill();
	}
}
function isCir()
{
	var c=document.getElementById("c16");
	var c1=c.getContext("2d");
	c1.clearRect(0,0,c.width,c.height);
	c1.beginPath();
	c1.arc(150,75,50,0,2*Math.PI);
	c1.fillStyle="yellow";
	c1.fill();
	var c2=c.getContext("2d");
	c2.beginPath();
	c2.arc(150,55,20,0,2*Math.PI);
	c2.fillStyle="pink";
	c2.fill();
	var c3=c.getContext("2d");
	c3.beginPath();
	c3.arc(170,75,20,0,2*Math.PI);
	c3.fillStyle="aqua";
	c3.fill();
	var c4=c.getContext("2d");
	c4.beginPath();
	c4.arc(150,95,20,0,2*Math.PI);
	c4.fillStyle="lightgray";
	c4.fill();
	var c5=c.getContext("2d");
	c5.beginPath();
	c5.arc(130,75,20,0,2*Math.PI);
	c5.fillStyle="red";
	c5.fill();
}
function getTime()
{
	var myVideo=document.getElementById("v1");
	alert("time: "+myVideo.currentTime);
}
function setTime()
{
	var myVideo=document.getElementById("v1");
	myVideo.currentTime=25;
}
function getMuted()
{
	var myVideo=document.getElementById("v1");
	alert(myVideo.defaultMuted);
}
function setMuted()
{
	var myVideo=document.getElementById("v1");
	myVideo.defaultMuted=true;
	myVideo.load();
}
function getPlayRate()
{
	var myVideo=document.getElementById("v1");
	alert(myVideo.defaultPlaybackRate);
}
function setPlayRate()
{
	var myVideo=document.getElementById("v1");
	myVideo.defaultPlaybackRate=5;
	myVideo.load();
}
function getDuration()
{
	var myVideo=document.getElementById("v1");
	alert(myVideo.duration);
}
function getEnded()
{
	var myVideo=document.getElementById("v1");
	alert(myVideo.ended);
}
function getLoop()
{
	var myVideo=document.getElementById("v1");
	alert(myVideo.loop);
}
function setLoop()
{
	var myVideo=document.getElementById("v1");
	myVideo.loop=true;
	myVideo.load();
}
function setmuted()
{
	var myVideo=document.getElementById("v1");
	myVideo.muted=true;
}
function setNomuted()
{
	var myVideo=document.getElementById("v1");
	myVideo.muted=false;
}
function getmuted()
{
	var myVideo=document.getElementById("v1");
	alert(myVideo.muted);
}
function playVid()
{
	var myVideo=document.getElementById("v2");
	myVideo.play();
}
function pauseVid()
{
	var myVideo=document.getElementById("v2");
	myVideo.pause();
}
 
function enableAutoPlay()
{
	var myVideo=document.getElementById("v2");
	myVideo.autoplay=true;
	myVideo.load();
}
function disenableAutoPlay()
{
	var myVideo=document.getElementById("v2");
	myVideo.autoplay=false;
	myVideo.load();
}
function checkPlay()
{
	var myVideo=document.getElementById("v2");
	alert("paly: "+ myVideo.autoplay);
}
function getBufferTime()
{
	var myVideo=document.getElementById("v2");
	alert("start: "+myVideo.buffered.start(0)+" end: "
	+ myVideo.buffered.end(0));
}
function enableControls()
{
	var myVideo=document.getElementById("v2");
	myVideo.controls=true;
	myVideo.load();
}
function disableControls()
{
	var myVideo=document.getElementById("v2");
	myVideo.controls=false;
	myVideo.load();
}
function checkControls()
{
	var myVideo=document.getElementById("v2");
	alert("controls= "+myVideo.controls);
}
function getURL()
{
	var myVideo=document.getElementById("v2");
	alert("URL: "+myVideo.currentSrc);
}
function getNetworkstate()
{
	var myVideo=document.getElementById("v2");
	alert(myVideo.networkState);
}
function getPaused()
{
	var myVideo=document.getElementById("v2");
	alert(myVideo.paused);
}
function getplayrate()
{
	var myVideo=document.getElementById("v2");
	alert(myVideo.playbackRate);
}
function setplayrate()
{
	var myVideo=document.getElementById("v2");
	myVideo.palybackRate=10;
}
function getplayed()
{
	var myVideo=document.getElementById("v2");
	alert("start: "+myVideo.played.start(0)+" end: "
	+myVideo.played.end(0) );
}
function getpreload()
{
	var myVideo=document.getElementById("v2");
	alert(myVideo.preload);
}
function setpreload()
{
	var myVideo=document.getElementById("v2");
	myVideo.preload="metadata";
}
function getReadystate()
{
	var myVideo=document.getElementById("v2");
	alert(myVideo.readyState);
}
function getseekable()
{
	var myVideo=document.getElementById("v2");
	alert("start: "+myVideo.seekable.start(0)+
	"end: "+myVideo.seekable.end(0));
}
function setSrc()
{
	var myVideo=document.getElementById("v2");
	isSupp=myVideo.canPlayType("video/mp4");
	if (isSupp=="")
	{
		myVideo.src="";
	}
	else
	{
		myVideo.src="";
	}
	myVideo.load();
}
function getVolume()
{
	var myVideo=document.getElementById("v2");
	alert(myVideo.volume);
}
function setVolume()
{
	var myVideo=document.getElementById("v2");
	myVideo.volume=0.2;
}
function lt()
{
	document.getElementById("lt").style.color="red";
}
function rt()
{
	document.getElementById("rt").style.display="block";
}
function lb()
{
	document.getElementById("lb").style.display="block";
}
function rb()
{
	document.getElementById("rb").style.display="block";
}
function cen()
{
	var x=document.getElementById("cen");
	x.style.display="block";
}
 function search()
 {
 var x="hello world";
 var n=x.search(/world/i);
 document.getElementById("s1").innerHTML=n;
 }
 function replace()
 {
	 var x=document.getElementById("s2").innerHTML;
	 var y=x.replace(/world/i,"spring");
	 document.getElementById("s2").innerHTML=y;
 }
 function test()
 {
	 var x=document.getElementById("s3").innerHTML;
	 var y=/e/;
	 var z=y.test(x);
	 document.getElementById("s3").innerHTML=z;
 }
function exec()
{
	var x=document.getElementById("s4").innerHTML;
	var y=/e/;
	var z=y.exec(x);
	document.getElementById("s4").innerHTML=z;
}
function tryFunction()
{
	try
	{
		var x=document.getElementById("t1").value;
		if (x=="") throw("请输入数值");
		if (isNaN(x)) throw ("请输入数字");
		if (x<4) throw("字太小");
		if (x>10) throw("字太大");
	}
	catch (err)
	{
		document.getElementById("s5").innerHTML="错误："+err+"。";
	}
}

function save()
{
	var site=new Object();
	site.keyname=document.getElementById("keyname").value;
	site.sitename=document.getElementById("sitename").value;
	site.siteurl=document.getElementById("siteurl").value;
	var str=JSON.stringify(site);
	localStorage.setItem(site.keyname,str);
	alert("保存成功");
}
function find()
{
	var key=document.getElementById("key").value;
	var str=localStorage.getItem(key);
	var pkey=document.getElementById("pkey");
	var site=JSON.parse(str);
	pkey.innerHTML=key + "的网站名是：" + site.sitename + 
	"网址是：" + site.siteurl;
}
function loadAll()
{
	var tab=document.getElementById("tab");
	if (localStorage.length>0)
	{
		var result="<table border=1>";
		result+="<tr><td>别名</td><td>网站名</td><td>网址</td></tr>";
		for(var i=0;i<localStorage.length;i++)
		{
			var key=localStorage.key(i);
			var str=localStorage.getItem(key);
			var site=JSON.parse(str);
			result+="<tr><td>" + site.keyname + "</td><td>" 
			+ site.sitename + "</td><td>" + site.siteurl 
			+ "</td></tr>";
		}
		result+="</table>";
		tab.innerHTML=result;
	}
	else
	{
		tab.innerHTML="您的浏览器不支持存储。";
	}
}
function del()
{
	var key=document.getElementById("delKey").value;
	var str=localStorage.getItem(key);
	var site=JSON.parse(str);
	var del=document.getElementById("del");
	var result="您要删除的网站：" + site.sitename;
	localStorage.removeItem(key);
	result+="已删除！";
	del.innerHTML=result;
}
function cle()
{
	localStorage.clear();
}










