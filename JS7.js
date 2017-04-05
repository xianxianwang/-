

function tof13(){
	var fig1=document.getElementById("fig1");
	fig1.style.display="none";
	fig1.style.animation="second 2s";
	var fig3=document.getElementById("fig3");
	fig3.style.display="block";
}
function tof12(){
	var fig1=document.getElementById("fig1");
	fig1.style.display="none";
	fig1.style.animation="second 2s";
	var fig2=document.getElementById("fig2");
	fig2.style.display="block";
}
function tof21(){
	var fig2=document.getElementById("fig2");
	fig2.style.display="none";
	fig2.style.animation="second 2s";
	var fig1=document.getElementById("fig1");
	fig1.style.display="block";
}
function tof23(){
	var fig2=document.getElementById("fig2");
	fig2.style.display="none";
	fig2.style.animation="second 2s";
	var fig2=document.getElementById("fig3");
	fig3.style.display="block";
}
function tof32(){
	var fig3=document.getElementById("fig3");
	fig3.style.display="none";
	fig3.style.animation="second 2s";
	var fig2=document.getElementById("fig2");
	fig2.style.display="block";
}
function tof31(){
	var fig3=document.getElementById("fig3");
	fig3.style.display="none";
	fig3.style.animation="second 2s";
	var fig1=document.getElementById("fig1");
	fig1.style.display="block";
}
function openWindow()
{
	document.getElementById("fullWindow").style.display="block";
}
function closeWindow()
{
	document.getElementById("fullWindow").style.display="none";
}
function imgWindow()
{
	document.getElementById("modal").style.display="block";
}
function closeModal()
{
	document.getElementById("modal").style.display="none";
}
//LightBox
function Mopen()
{
	document.getElementById("fModal").style.display="block";
}
function Mclose()
{
	document.getElementById("fModal").style.display="none";
}

 
 var slideIndex = 1;
 showSlides(slideIndex);
 
function plusSlides(n) {
	
	slideIndex+=n;
	showSlides(slideIndex);
}
 
function currentSlide(n) {
	slideIndex=n;
	showSlides(slideIndex);
}
 
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("texCap");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].style.opacity=0.4;
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].style.opacity=1;
  captionText.innerHTML = dots[slideIndex-1].alt;
}
//搜索框自动提示
function searchBox(){
	var input,ul,li,i;
	input=document.getElementById("texSearch").value;
	ul=document.getElementById("sc");
	li=ul.getElementsByTagName('li');
	for (i=0;i<li.length;i++)
	{
		if(li[i].innerHTML.indexOf(input)>-1)
		{
			li[i].style.display="";
		}
		else
		{
			li[i].style.display="none";
		}
		
	}
}

/*表格数据搜索*/
function searchData()
{
	var input=document.getElementById("tableSearch" ).value;
	var table=document.getElementById("dataBox");
	var tr=table.getElementsByTagName('tr');
	var i, j;
	for(i=0;i<tr.length;i++)
	{
		var td=tr[i].getElementsByTagName('td')[0];
		if(td)
		{
			if(td.innerHTML.indexOf(input)>-1)
			{
				tr[i].style.display="";
			}
			else
			{
				tr[i].style.display="none";
			}
		}
	}
}
//option and select
function useOption(){
document.getElementById("mySelect").disabled=false;
}
function disOption(){
document.getElementById("mySelect").disabled=true;
}
function getID(){
document.getElementById("ID").innerHTML=document.getElementById("mySelect").form.id;
}
function changeSize()
{
document.getElementById("mySelect").size="4";
}
function selectMult(){
document.getElementById("mySelect").multiple=true;
}
function fruitName(){
var i;
var x=document.getElementById("mySelect");
for(i=0;i<x.length;i++){
if(x.options[i].selected)
{
document.getElementById("fruit").innerHTML=x.options[i].text;
}
}
}
function fruitNumber(){
var x=document.getElementById("mySelect")
document.getElementById("fNum").innerHTML=x.selectedIndex;
}
function changeText()
{
var x=document.getElementById("mySelect");
x.options[x.selectedIndex].text="草莓";
}

function removeOpt(){
	var x=document.getElementById("mySelect");
	x.remove(x.selectedIndex);
}
//table
function changeBorder()
{
	document.getElementById("myTable").border="4";
}
function showRow()
{
document.getElementById("myTable").rules="rows";
}
function showCol(){
document.getElementById("myTable").rules="cols";
}
function cellpad(){
document.getElementById("myTable").cellPadding="10";
}
function cellspace(){
document.getElementById("myTable").cellSpacing="10";
}
function aboveFrame(){
document.getElementById("secondTab").frame="above";
}
function belowFrame(){
document.getElementById("secondTab").frame="below";
}
function createCap(){
var x=document.getElementById("myTable").createCaption();
x.innerHTML="花类";
}
function showTex(){
var x=document.getElementById("myTable");
document.getElementById("rowHtml").innerHTML=x.rows[0].innerHTML;
alert(x.rows[0].innerHTML);
}
function cellTex(){
var x=document.getElementById("myTable");
var y=document.getElementById("cellHtml");
y.innerHTML=x.rows[0].cells[0].innerHTML;
alert(x.rows[0].cells[0].innerHTML);
}
function removeTr(){
var x=document.getElementById("fTr");
var i=x.parentNode.rowIndex;
document.getElementById("secondTab").deleteRow(i);
}
function createRow(){
var x=document.getElementById("secondTab").insertRow(2);
var y=x.insertCell(0);
var z=x.insertCell(1);
y.innerHTML="长相思";
z.innerHTML="雨霖铃";
}
function createCell()
{
var x=document.getElementById("secondTab");
var y=x.rows[0];
var z=y.insertCell(2);
z.innerHTML="声声慢";
}
function alignLeft(){
document.getElementById("trTh").align="left";
}
function vAlignTop(){
document.getElementById("trTd").vAlign="top";
}
function cellRight(){
document.getElementById("td1").align="right";
}
function cellTop(){
document.getElementById("td2").vAlign="top";
}








