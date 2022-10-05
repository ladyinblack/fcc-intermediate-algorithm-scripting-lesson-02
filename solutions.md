## ALTERNATE SOLUTIONS

### Solution 1 (Imperative Solution)
```js
function diffArray(arr1, arr2) {
    const newArr = [];
    
    function onlyInFirst(first, second) {
        // Looping through an array to find elements that don't exist in another array
        for (let i = 0; i < first.length; i++) {
            if (second.indexOf(first[i]) === -1) {
                // Pushing the elements unique to first to newArr
                newArr.push(first[i]);
            }
        }
    }
    onlyFirst(arr1, arr2);
    onlyFirst(arr2, arr1);
    
    return newArr;
}
```

### Solution 2 (Declarative Solution)
```js
function diffArray(arr1, arr2) {
    return arr1.concat(arr2).filter(item => !arr1.includes(item) || !arr2.includes(item));
}
```

### Solution 3 (Declarative Solution)
```js
function diffArray(arr1, arr2) {
    return [...diff(arr1, arr2), ...diff(arr2, arr1)];
    
    function diff(a, b) {
        return a.filter(item => b.indexOf(item) === -1);
    }
}
```

