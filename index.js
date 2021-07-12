
exports.trimObj = (obj) => {
    if (!Array.isArray(obj) && typeof obj != 'object') return obj;
    return Object.keys(obj).reduce(function (acc, key) {
        acc[key.trim()] = typeof obj[key] == 'string' ? obj[key].trim() : trimObj(obj[key]);
        return acc;
    }, Array.isArray(obj) ? [] : {});
}

exports.zeroPad = (num, padNo = 4) => {
    return num.toString().padStart(padNo, "0");
}

exports.capitalize = (s) => {
    if (typeof s !== 'string') return ''
    s = s.toLowerCase()
    return s.charAt(0).toUpperCase() + s.slice(1)
}

exports.groupByArrayKey = (array, key) => {
    // Accepts the array and key
    const groupBy = (array, key) => {
        // Return the end result
        return array.reduce((result, currentValue) => {
            // If an array already present for key, push it to the array. Else create an array and push the object
            (result[currentValue[key]] = result[currentValue[key]] || []).push(
                currentValue
            );
            // Return the current iteration `result` value, this will be taken as next iteration `result` value and accumulate
            return result;
        }, {}); // empty object is the initial value for result object
    };

    // Group by color as key to the person array
    return groupBy(array, key);
}

exports.ucFirstAllWords = (str) => {
    var pieces = str.split(" ");
    for (var i = 0; i < pieces.length; i++) {
        var j = pieces[i].charAt(0).toUpperCase();
        pieces[i] = j + pieces[i].substr(1);
    }
    return pieces.join(" ");
}