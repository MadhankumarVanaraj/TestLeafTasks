const intersection = (arr1, arr2)=>
{
    let result=[];
    for(let i=0; i<arr1.length; i++) //Starts a for loop to iterate through every element of arr1
    {
        for(let j=0; j<arr2.length; j++)  //Inside the first loop, we run another for loop for arr2.This means for each element in arr1, 
                                         //we compare it with every element in arr2.
        {
            if (arr1[i] === arr2[j] && !result.includes(arr1[i])) //arr1[i] === arr2[j] - checks if the current element of arr1 is equal to the current element of arr2.
                                                                //includes(arr1[i]) - ensures that the element is not already present in result. This avoids duplicate entries.
                {
                result.push(arr1[i]);
            }
        }   
    }
    return result;
}
console.log (intersection([1, 2, 2, 3], [2, 2, 3, 4]));