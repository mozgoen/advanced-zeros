module.exports = function getZerosCount(number, base) {
//      find a factor as a last element of array of simple divisors
    let arrOfDivisors = [];
    function findSimpleDivisors(n) {
        let arrOfOnlySimpleDiv = [];
        let divisor = n;

        while (divisor > 0) {
            let restOfNumb = n / divisor;
            if (Math.floor(restOfNumb) - restOfNumb === 0) {
                arrOfDivisors.push(restOfNumb);
            }
            divisor--;
        }

        for (let i = 0; i < arrOfDivisors.length; i++) {
            let arrOfDiv = [];
            let count = 1;
            let current = arrOfDivisors[i];

            while (count <= current) {
                if (current % count === 0) {
                    arrOfDiv.push(count);
                }
                count++;
            }
            if (arrOfDiv.length === 2) {
                arrOfOnlySimpleDiv.push(current);
            }

        }

        return arrOfOnlySimpleDiv;
    }

    let arrOfOnlySimpleDiv = findSimpleDivisors(base);


    function findZeros(fac) {
        let factor = fac;
        let zerosCount = 0;
        let power = 1;

        while (number / (Math.pow(factor, power)) >= 1) {
            let numbOfDivisors = Math.floor(number / (Math.pow(factor, power)));
            zerosCount += numbOfDivisors;
            power ++;
        }

        if (arrOfDivisors.indexOf(Math.pow(factor, 6)) !== -1) {
            return Math.floor(zerosCount / 6);
        } else if (arrOfDivisors.indexOf(Math.pow(factor, 5)) !== -1) {
            return Math.floor(zerosCount / 5);
        } else if (arrOfDivisors.indexOf(Math.pow(factor, 4)) !== -1) {
            return Math.floor(zerosCount / 4);
        } else if (arrOfDivisors.indexOf(Math.pow(factor, 3)) !== -1) {
            return Math.floor(zerosCount / 3);
        } else if (arrOfDivisors.indexOf(Math.pow(factor, 2)) !== -1) {
            return Math.floor(zerosCount / 2);
        }

        return Math.floor(zerosCount);
    }

    let arrOfZeros = [];

    for (let i = 0; i < arrOfOnlySimpleDiv.length; i++) {
        let currentFactor = arrOfOnlySimpleDiv[i];
        let zeroCount = findZeros(currentFactor);
        arrOfZeros.push(zeroCount);
    }

    arrOfZeros.sort(function (a, b) {
        return a - b;
    });

    return arrOfZeros[0];
}