function jstab()
{
txt=document.querySelector("textarea");
z=txt.value;
for (x=0; x<100; x++;) {
	tab=document.createElement("table");

//while (x<z) {
	//t_r=document.createElement("tr");
    for (y=0; y<z; z++;) {
    //while (y<z)
        // {
         t_d=document.createElement("td");
         t_d.innerHTML=x+"."+y;
         t_r.append(t_d); y++;
         }
         tab.append(t_r);
         }
document.body.append(tab);
}
jstab(10);

//for (x=0; x<100; x++) {}