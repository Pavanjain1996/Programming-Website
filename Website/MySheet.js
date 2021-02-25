function effect1(){
	var x=document.getElementById("end1");
	x.style.backgroundColor="orange";
}
function effectback1(){
	var x=document.getElementById("end1");
	x.style.backgroundColor="grey";
}
function effect2(){
	var x=document.getElementById("end2");
	x.style.backgroundColor="orange";
}
function effectback2(){
	var x=document.getElementById("end2");
	x.style.backgroundColor="grey";
}
function effect3(){
	var x=document.getElementById("end3");
	x.style.backgroundColor="orange";
}
function effectback3(){
	var x=document.getElementById("end3");
	x.style.backgroundColor="grey";
}
function Validation(){
	var result=true;
	var arr=document.getElementsByTagName("input");
	if(arr[0].value.length==0){
		result=false;
	}
	if(arr[1].value.length==0){
		result=false;
	}
	if(!result){
		alert("Some fields missing");
	}
	if(result){
		var y=confirm("Are you sure to register ?");
		if(!y){
			result=false;
		}
	}
	return result;
}