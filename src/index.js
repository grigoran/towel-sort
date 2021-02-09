
// You should implement your task here.

function forwardFill(elements, newElements){
  for(let element of elements){
    newElements.push(element);
  }
}

function reverseFill(elements, newElements){
  for(let i=elements.length-1; i>=0; i--){
    newElements.push(elements[i]);
  }
}

module.exports = function towelSort (matrix) {
  if(typeof(matrix) == 'undefined') return [];
  let result=[];
  for(let i=0; i<matrix.length; i++){
    if(i%2==0) forwardFill(matrix[i],result);
    else reverseFill(matrix[i],result);
  }
  return result;
}
