x=0;
limit=20;
shag=5;
div = document.querySelector("#chislo");


	function move(napravlenie) 
{
	if(napravlenie==1) 
	{pred();
		if(x<0) { to_end();}//в конец
	}
	if(napravlenie==0) 
	{next();
		if(x>limit) {to_start();} //в начало
	}		
		update_div();//записать значение
}

function pred() {x-=shag;}
function next() {x+=shag;}
function to_start() {console.log("restart"); x=0;}
function to_end() {console.log("restart"); x=limit;}
function update_div(){div.innerHTML=x;}