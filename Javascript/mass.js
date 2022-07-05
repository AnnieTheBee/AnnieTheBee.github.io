function mass()
{
txt=document.querySelector("textarea");
z=txt.value;
 
for (i=0; i<z.length; i++)
{div=document.createElement("div");
	
	div.innerHTML=z[i]; 
	document.body.append(div);
}
}

//tab=document.createElement("table");
//for (x=0; x<z; x++) {
	
	//t_r=document.createElement("tr");
    //for (y=0; y<z; y++) {
         //t_d=document.createElement("td");
         //t_d.innerHTML=x+"."+y;
         //t_r.append(t_d); 
         //}
         //tab.append(t_r);
         //}
//document.body.append(tab);
//}



//jstab(10);

//x=0; while (x<100) {
	//while (y<10) {if (y==) {break;} y++;}
//console.log(x,y);
//x++}
//for (y=0; y<100; y++)
//{
//	if(y==50) {continue;} //skip 50
//}
//x%==0 четные числа