// CHAPTER 38 to 44

// Question # 1
// function calculatePower(base, exponent) {
//     var answer = 1

//     for (let i = 1; i <= exponent; i++) {
//         answer = answer * base
//     }

//     console.log(answer)
// }
// calculatePower(3, 4)


// Question # 2
// function isLeapYear(yr) {
//     if (yr % 4 === 0) {
//         console.log("Leap year")
//     } else if (yr % 100 === 0) {
//         console.log("Not a leap year")
//     } else if (yr % 400 === 0) {
//         console.log("Leap year")
//     } else {
//         console.log("Not a leap year")
//     }
// }
// isLeapYear(2028)


// Question # 3
// /function calculateTriangleArea(x, y, z) {
//     function findSemiPerimeter() {
//         var s = (x + y + z) / 2
//         return s
//     }

//     var s = findSemiPerimeter()
//     var area = s * (s - x) * (s - y) * (s - z)
//     console.log(area)
// }
// calculateTriangleArea(5, 6, 7)


// Question # 4
// function mainResult(english, chemistry, biology) {
//     function findAverage() {
//         var avg = (english + chemistry + biology) / 3
//         console.log("Average:", avg)
//     }
//     findAverage()

//     function findPercentage() {
//         var perc = (english + chemistry + biology) / 300 * 100
//         console.log("Percentage:", perc)
//     }
//     findPercentage()
// }
// mainResult(65, 80, 70)


// Question # 5
// function customSearch(str, letter) {
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === letter) {
//             console.log(i)
//             return
//         }
//     }
//     console.log(-1)
// }
// customSearch("Pakistan", "k")


// Question # 6
// function vowelRemover(str) {
//     let output = ""
//     for (let i = 0; i < str.length; i++) {
//         if (!"aeiouAEIOU".includes(str[i])) {
//             output += str[i]
//         }
//     }
//     console.log(output)
// }
// vowelRemover("Hello World")


// Question # 7
// function countVowelPairs(sentence) {
//     var counter = 0
//     for (let i = 0; i < sentence.length - 1; i++) {
//         var first = sentence[i]
//         var second = sentence[i + 1]

//         if (("aeiouAEIOU".includes(first)) && ("aeiouAEIOU".includes(second))) {
//             counter = counter + 1
//         }
//     }
//     console.log(counter)
// }
// countVowelPairs("Education is the key to success")


// Question # 8
// function unitConverter(km) {
//     console.log("Kilometers:", km)
    
//     function convertToMeter() {
//         console.log("Meters:", km * 1000)
//     }
//     convertToMeter()

//     function convertToFoot() {
//         console.log("Feet:", km * 3280.84)
//     }
//     convertToFoot()

//     function convertToInch() {
//         console.log("Inches:", km * 39370.1)
//     }
//     convertToInch()

//     function convertToCm() {
//         console.log("Centimeters:", km * 100000)
//     }
//     convertToCm()
// }
// unitConverter(1.5)


// Question # 9
// function checkOvertime(workHours) {
//     if (workHours > 40) {
//         var extraHours = workHours - 40
//         var overtimeAmount = extraHours * 12
//         console.log("Overtime Pay:", overtimeAmount)
//     } else {
//         console.log("No overtime")
//     }
// }
// checkOvertime(55)


// Question # 10
// function moneyCounter(amount) {
//     var hundred = Math.floor(amount / 100)
//     var remain = amount % 100

//     console.log("100 Notes:", hundred)
//     console.log("Remaining:", remain)

//     var fifty = Math.floor(remain / 50)
//     remain = remain % 50

//     console.log("50 Notes:", fifty)
//     console.log("Remaining:", remain)

//     var ten = Math.floor(remain / 10)
//     remain = remain % 10

//     console.log("10 Notes:", ten)
//     console.log("Remaining Amount:", remain)
// }
// moneyCounter(780)