function getElementsPositionTwoSum(nums , target){
    let map = {};

    for(let i=0;i<nums.length;i++){
        let x = target  - nums[i];

        if(map[x] !== undefined)
            return [map[x],i];

        map[nums[i]] = i;
    }

 return [];
}

const nums = [2,7,11,15];
const target = 9;

console.log('nums array => ' ,nums);
console.log('the target = ' ,target);
console.log('the solution is ' ,getElementsPositionTwoSum(nums,target));