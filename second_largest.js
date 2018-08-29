
function secondlargest(arr){
	   let first = - Infinity;
	   let second = - Infinity;
	   
	   for (let i = 0; i < arr.length; i += 1){
	     if (arr[i] > first ){
	        second = first;
	        first = arr[i];
	     } else if(arr[i] < first && arr[i] >second){
	         second = arr[i]; 
	     }
	   }
	    return second;
	}
	secondlargest([1,2,6,1, 12]); // 6
