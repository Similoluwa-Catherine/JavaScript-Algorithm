function convertFahrToCelsius(farenheight) {
    if (isNaN(farenheight)) {
        return `${farenheight} is not a valid number but a ${typeof (farenheight)}`
    } 
    else {
       let converted = (`${farenheight}` - 32) * 5 / 9
        converted = converted.toFixed(4)
        return `${converted} °C`
    }
}


console.log(convertFahrToCelsius(12))

function checkYuGiOh(n) {
    if (!isNaN(n)) {
        var arr = []
        for (let i = 0; i < n; i++) {
            arr.push(i + 1)
        }
        arr.map((num, index, array) => {
            let newNum = ``;
            if (num % 2 === 0) {
                newNum = `yu`;
            }
            if (num % 3 === 0) {
                if (newNum.length > 0) {
                    newNum = `${newNum}-gi`;
                } else {
                    newNum = `gi`;
                }
            }
            if (num % 5 === 0) {
                if (newNum.length > 0) {
                    newNum = `${newNum}-ho`;
                } else {
                    newNum = `ho`;
                }
            }
            if (newNum.length > 0) {
                return (array[index] = newNum);
            }
            return num;
        });
        return arr;
    } else {
        if (arr.isArray(n)) {
            return `invalid parameter: [${n}]`;
        } else if (!arr.isArray(n) && typeof n === 'object') {
            let nToString = JSON.stringify(n).split(`\"`).join('');
            return `invalid parameter: ${nToString}`;
        }
        let nToString = n.split(`\"`).join('');
        return `invalid parameter: '${nToString}'`;
    }
}

console.log(checkYuGiOh(12))