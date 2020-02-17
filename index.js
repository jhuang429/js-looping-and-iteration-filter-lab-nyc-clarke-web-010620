// Code your solution in this file
function findMatching(arr, str) {  
    return arr.filter(driver => driver.toLowerCase() === str.toLowerCase() );
}

function fuzzyMatch(arr, str) {
    let newregex = new RegExp(str)
    let strLength = str.length

    return arr.filter( driver => 
        driver.slice(0, strLength).match(newregex)
        )
}

function matchName(arr, str) {
    return arr.filter(driver => driver.name === str )
}