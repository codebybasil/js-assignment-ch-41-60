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

// CHAPTER 43 to 48

// Question 1 - simple alert 
// function showAlert() {
//     alert("Hello World!")
// }

// Question 2 - Phone purchase alert
// function mobileAlert() {
//     alert("Thanks for purchasing a phone from us")
// }

// Question 3 - Students delete 
// var row1 = document.getElementById("1st-row")
// var row2 = document.getElementById("2nd-row")

// function deleteRow1() {
//     1st-row.style.display = "none"
// }
// function deleteRow2() {
//     2nd-row.style.display = "none"
// }

// Question 4 - Image change 
// var myImage = document.getElementById("hero--img")

// function changeImage() {
//     myImage.src = "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
// }
// function changeImageBack() {
//     myImage.src = "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
// }

// Question 5 - Counter badhana aur ghatana
// var myCounter = document.getElementById("score")

// function increase() {
//     myCounter.innerText++
// }
// function decrease() {
//     myCounter.innerText--
// }

// CHAPTER 49 to 52

// Question 1 - Form values cheack
// var fname = document.getElementById("firstName")
// var lname = document.getElementById("lastName")
// var mail = document.getElementById("email")
// var pass = document.getElementById("password")

// function getValues(i) {
//     i.preventDefault()

//     if (fname.value.trim() == "" || lname.value.trim() == "" || mail.value.trim() == "" || pass.value.trim() == "") {
//         alert("Sab fields bharo!")
//     } else {
//         console.log("First Name:", fname.value)
//         console.log("Last Name:", lname.value)
//         console.log("Email:", mail.value)
//         console.log("Password:", pass.value)
//     }
// }

// Question 2 - Text expand & collapse
// var myText = document.getElementById("text")
// var seeMoreBtn = document.getElementById("expand")
// var shortText = myText.innerText.slice(0, 300)
// var fullText = myText.innerText

// myText.innerText = shortText

// function showText() {
//     if (seeMoreBtn.innerText == "... See more") {
//         myText.innerText = fullText
//         seeMoreBtn.innerText = "... See less"
//     } else {
//         myText.innerText = shortText
//         seeMoreBtn.innerText = "... See more"
//     }
// }

// Question 3 - Student add karna table mein
// var nameInput = document.getElementById("nameInput")
// var rollInput = document.getElementById("rollInput")

// var nameShow = document.getElementById("nameShow")
// var rollShow = document.getElementById("rollShow")

// function addStudent(i) {

//     i.preventDefault()

//     if (nameInput.value.trim() == "" || rollInput.value.trim() == "") {
//         alert("Naam aur roll number dono bharo!")
//     } else {
//         row3.style.display = "block"
//         nameShow.innerText = nameInput.value
//         rollShow.innerText = rollInput.value
//     }
// }