function fun1() {
  var sel=document.getElementById('list1').selectedIndex;
  var options=document.getElementById('list1').options;
  var vaiant = options[sel].text;
  var cena1;
  var srok1;
  var znac1;
  var znac2;
	
	if(vaiant == "Одностраничный сайт")
		{
			 var cena1 = 6000 ;
 			 var srok1 = 3;
			 var znac1 = 1;
		}
	if(vaiant == "Сайт-визитка")
		{
			 var cena1 = 4000;
 			 var srok1 = 2;
			var znac1 = 1;
		}
	if(vaiant == "Корпоративные сайты")
		{
			 var cena1 = 10000 ;
 			 var srok1 = 4;
			var znac1 = 1;
		}
	if(vaiant == "Промо-сайты")
		{
			 var cena1 = 5000;
 			 var srok1 = 2;
			var znac1 = 1;
		}
	
	
	var sel2=document.getElementById('list2').selectedIndex;
  var options2=document.getElementById('list2').options;
  var vaiant2 = options2[sel2].text;
	
	if(vaiant2 == "Под Компьютеры")
		{
			 var cena2 = 6000;
 			 var srok2 = 1;
			var znac2 = 1;
		}
	if(vaiant2 == "Под Мобилки")
		{
			 var cena2 = 7000;
 			 var srok2 = 1;
			var znac2 = 1;
		}
	if(vaiant2 == "И то и другое")
		{
			 var cena2 = 11000;
 			 var srok2 = 2;
			var znac2 = 1;
		}
	
var itogznac = znac1 + znac2;	
var itogcena = cena1 + cena2;
var itogsrok = srok1 + srok2;

	
	
if(itogznac == 2){
document.getElementById('Cena-Rascet').innerHTML= itogcena;
document.getElementById('Srok-Rascet').innerHTML= itogsrok;
   var elementdiv = document.getElementById("Cena-Rascet");
    elementdiv.classList.add("Left-JS-1");
	}
}

