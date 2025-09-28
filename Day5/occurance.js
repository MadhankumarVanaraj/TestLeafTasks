function occurance()
{
const nums = [2, 4, 5, 2, 1, 2];
let result=0;
for(let i=0; i<nums.length; i++)
{
    if(nums[i]==2)
    {
        result+=1;
    }
}
console.log("The number 2 occured "+result+" times");
}
occurance()
