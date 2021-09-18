const monthNumber = [0,1,4,4,0,2,5,0,3,6,1,4,6];
const dayName = ["Sat", "Sun","Mon","Tue","Wed","Thu","Fri"];

function getDayOfTheWeek(year, month, day) {
    let last2DigitsOfYear = year%100;
    let howMany12s = parseInt(last2DigitsOfYear/12);
    let remainder = last2DigitsOfYear%12;
    let howMany4sInRemainder = parseInt(remainder/4);
    let monthCode = monthNumber[month];
    monthCode = monthCode + getOffset(year, month);
    let addedAll = howMany12s + remainder + howMany4sInRemainder+ day + monthCode;
    let dayNumber = addedAll % 7;
    return dayName[dayNumber];
}

function isLeapYear(year) {
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

function getOffset(year, month) {
    let offset = 0;
    if (isLeapYear(year)) {
        if (month == 1 || month == 2) {
            offset = -1;
        }
    }
    let century = parseInt(year/100);
    offset = offset +  getOffsetForCentury(century);
    return offset;
}

function getOffsetForCentury(century) {
    switch (century) {
        case 16:
            return 6;
        case 17:
            return 4;
        case 18:
            return 2;
        case 20:
            return 6;
        case 21:
            return 4;
        default:
            return 0;
    }
}
console.log(getDayOfTheWeek(1930,8,16));