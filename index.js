// Code your solution here

function findMatching(driversArr, name) {
    return driversArr.filter(driversArr => driversArr.toLowerCase() === name.toLowerCase());

}

function fuzzyMatch(driversArr, name) {
    return driversArr.filter(driversArr => driversArr.toLowerCase().startsWith(name.toLowerCase()))
}

function matchName(driversObj, name) {
    // driversObj = {name, hometown}
    return driversObj.filter(driversObj => driversObj.name === name)
}