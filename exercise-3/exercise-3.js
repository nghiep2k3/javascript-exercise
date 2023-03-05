function removeFromArray(array, deleteItem) {
  // Coding here
  for(let i = 0; i < array.length; i++){
    if(array[i] == deleteItem){
      array.splice(i,1);
    }
  }

  console.log(array);
}

var x = [1,2,3,4,10];

removeFromArray(x,1);

