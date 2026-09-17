//brutal solution
const set = new Set();
const arr1 = [1,1,2,3,4,5];
const arr2 = [2,3,4,4,5,6]
let union = [];
for(let i = 0 ; i <= arr1.length - 1 ; i++){
    set.add(arr1[i])
    set.add(arr2[i])
}

union = Array.from(set)
console.log(union)

//optimize solution 

// const arr1 = [1, 1, 2, 3, 4, 5];
// const arr2 = [2, 3, 4, 4, 5, 6];

// let union = [];
let i = 0;
let j = 0;

while (i < arr1.length && j < arr2.length) {

    if (arr1[i] < arr2[j]) {
        if (union[union.length - 1] !== arr1[i]) {
            union.push(arr1[i]);
        }
        i++;

    } else if (arr2[j] < arr1[i]) {
        if (union[union.length - 1] !== arr2[j]) {
            union.push(arr2[j]);
        }
        j++;

    } else {
        // Both are equal
        if (union[union.length - 1] !== arr1[i]) {
            union.push(arr1[i]);
        }

        i++;
        j++;
    }
}

// Remaining elements of arr1
while (i < arr1.length) {
    if (union[union.length - 1] !== arr1[i]) {
        union.push(arr1[i]);
    }
    i++;
}

// Remaining elements of arr2
while (j < arr2.length) {
    if (union[union.length - 1] !== arr2[j]) {
        union.push(arr2[j]);
    }
    j++;
}

console.log(union);

