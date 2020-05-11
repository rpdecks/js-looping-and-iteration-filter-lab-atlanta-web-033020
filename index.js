function findMatching(drivers, name){
    return drivers.filter(function (driverName) {
        return driverName.toLowerCase() === name.toLowerCase();
    });
}

function fuzzyMatch(drivers, letters) {
    let nameTest = letters.length;
    return drivers.filter (function (name) {
        return name.slice(0, nameTest) === letters;
    });
}

function matchName (drivers, string) {
    return drivers.filter(function (driverName) {
        return driverName.name === string;
    });
}