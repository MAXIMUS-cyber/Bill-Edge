export const Sum = (num1:string,num2:string):string => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    if (num1==='' || num2==='' || isNaN(n1) || isNaN(n2)) {
        return 'Invalid Sum';
      }
    return (n1 + n2).toString();
}
