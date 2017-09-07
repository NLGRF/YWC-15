//Code

var numbers = ['2','3','4','5','6','7','8','9','0','J','Q','K','A']; 

function cardAt(n) {

// n => [0:51]

	while(n >= 52 || n < 0){
		console.log('error number');
		break;
	}


	while(n >= 0 && n < 52){
let types,i,j,count,ncount;
	ncount = n;
	n = n/13;
	if (n >= 0 && n < 1){
		types = 'C';
		count = 1;
		ncount = ncount;
	}
	else if (n >= 1 && n < 2){
		types = 'D';
		count = 2;
		ncount = ncount - 13;
	}
	else if (n >= 2 && n < 3){
		types = 'H';
		count = 3;
		ncount = ncount - 26;
	}
	else if (n >= 3 && n <= 4){
		types = 'S';
		count = 4;
		ncount = ncount - 39;
	}

	for (i = 0; i < count; i++) {  
 		for (j = 0; j < ncount; j++) { 
 		//console.log(numbers[j] + types); 
 		//console.log(j);
		}
	}
	//console.log('out' + j);
	console.log(numbers[j] + types);
	break;
}
}

//Test

//cardAt(-1);
cardAt(0);
cardAt(1);
cardAt(34);
cardAt(35);
//cardAt(52);


