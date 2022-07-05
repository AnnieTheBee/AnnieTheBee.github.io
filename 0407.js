main_div=document.querySelector("div");
main_div.onmousedown=function(e)
{
	main_div.onmousemove=function(e)
	{
	    point(e);
	}
}
	main_div.onmouseup=function(e)
{
		main_div.onmousemove=0;
		stop();
}
	function point(e)
	{
	div=document.createElement("div")
	div.style.left=e.clientX+"px";
    div.style.top=e.clientY+"px";
	main_div.append(div);
	}
	
	function stop()
	{
		main_div.onmousemove=0;
	}