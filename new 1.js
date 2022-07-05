 x=1;
  while(x<20)
  {
  el=document.createElement('div');
  el.innerHTML="<span>"+x+"</span>";
  document.body.append(el);
  x++;
  }
  
x=0;

tab=document.createElement("table");
while (x<10) {
	console.log(x);

t_r=document.createElement("tr");
t_d=document.createElement("td");
t_d.innerHTML=x;
t_r.append(t_d);
tab.append(t_r);
x++;}
document.body.append(tab);