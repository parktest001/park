let id=0;
let location_name='Chennai';
function myfun(){

let a=10;
var Main=document.getElementById("main");
Main.innerHTML="";
var Str="";
Str+="<table border=1 id='main_tab'>";
for(var i=1;i<=a;i++)
{
  Str+='<tr';
  Str+='><td><button id="' + i.toString() + '"onclick="store(this.id)">slot ' + i.toString() + '</button></td></tr>';
}
Str+="</table>";
Main.innerHTML=Str;

localStorage.clear();

}


function store(elem)
{
	localStorage.setItem("storageName",elem);
	id=localStorage.getItem("storageName");
	write_to_database(location_name,id);
 	
}
function write_to_database(Location,park_id)
{
	 firebase.database().ref('parking_info/' + Location).set({
    Parkslot: park_id
  });
}
