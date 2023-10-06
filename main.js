let num=prompt("enter your Number");

let oddNum=num=>{
	if(num%2!=0){
	document.write(`${num}the number was odd`);
	}
	else{
		document.write("not odd number");
	}
}
oddNum(num)