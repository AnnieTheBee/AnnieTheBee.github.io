function jstab()
{
txt=document.querySelector("textarea");
z=txt.value;
tab=document.createElement("table");
for (x=0; x<z; x++) {
	
	t_r=document.createElement("tr");
    for (y=0; y<z; y++) {
         t_d=document.createElement("td");
         t_d.innerHTML=x+"."+y;
         t_r.append(t_d); 
         }
         tab.append(t_r);
         }
document.body.append(tab);
}
//jstab(10);

