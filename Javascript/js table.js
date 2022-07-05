 x=1;
  while(x<20)
  {
  el=document.createElement('div');
  el.innerHTML="<span>"+x+"</span>";
  document.body.append(el);
  x++;
  }
  
function jstab(z)
{
x=0;
tab=document.createElement("table");
while (x<z) {
	t_r=document.createElement("tr");
    y=0;
    while (y<z)
         {
         t_d=document.createElement("td");
         t_d.innerHTML=x+"."+y;
         t_r.append(t_d); y++;
         }
         tab.append(t_r);
         x++;
         }
document.body.append(tab);
}
jstab(10);