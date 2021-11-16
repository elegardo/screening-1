
export function isBalanced(stringWithParentheses: String): boolean{

  const arrayOfParentheses = stringWithParentheses.split('');
  const firstElement = 0;

  if(arrayOfParentheses.length % 2 != 0 || arrayOfParentheses[firstElement] === ')'){
    return false;
  }
    
  do{
    const indexOfMyPair = arrayOfParentheses.indexOf(')');

    if(indexOfMyPair == -1 || indexOfMyPair == 0){
      return false;
    }
    else{
      arrayOfParentheses.splice(indexOfMyPair, 1);
      arrayOfParentheses.splice(firstElement, 1);
    }
  } while(arrayOfParentheses.length>0);

  return true;
}