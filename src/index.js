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

    let factor;

    if (
        arrOfDivisors.indexOf(Math.pow(2, 5)) !== -1
        && arrOfDivisors.indexOf(Math.pow(2, 4)) !== -1
        && arrOfDivisors.indexOf(Math.pow(2, 3)) !== -1
        && arrOfDivisors.indexOf(Math.pow(2, 2)) !== -1
    ) {
        factor = 2;
    } else {
        factor = arrOfOnlySimpleDiv[arrOfOnlySimpleDiv.length - 1];
    }

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