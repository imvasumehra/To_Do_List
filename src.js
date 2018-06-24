var a=[];
window.setTimeout(function(){
	for(var i=1;i<=5;i++) {
	
	var m=prompt("Enter your choice?");
	if(m==="new"||m==1){
		var c=prompt("Enter?");
		a.push(c);
		i--;
	}
	else if(m==="view list"||m==2) {
		console.log(a);
		i--;
	}
	else if(m==="delete"||m==3) {
		var i=prompt("Enter index of task?");
		a.splice(i,1);
	}
	else	{
		i=5;
	
	}
	
}
},500);