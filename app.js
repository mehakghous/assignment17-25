// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)
// var arr = [["mehak",1 ,true],["ghous" ,false],["31241", 4]]
// 2. Declare and initialize a multidimensional array
// representing the following matrix:
// var multi = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];
// for (let i = 0; i < multi.length; i++) {
//   for (let j = 0; j < multi[i].length; j++) {
//      document.write(multi[i][j] )

//   }
//   document.write('<br />');
// }

// 3. Write a program to print numeric counting from 1 to 10.
// for (var i = 0; i <=10; i++) {
// document.write (i + "<br />")

// }

// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.
// var table = +prompt("enter table no:");
// var tableLength = +prompt("enter length of table");
// for (let i = 1; i <= tableLength; i++) {
//    document.write(table + " x " + i + " = " + table*i + "<br />")

// }
// 5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]

// var  fruits = ["apple", "banana", "mango", "orange"]
// for (var i = 0; i < fruits.length; i++) {
//     document.write(fruits[i] + "<br />")

// }
// for (var j = 0; j < fruits.length; j++) {
//     document.write("element at index " + i + " is "+fruits[i] + "<br />")

// }
// 6. Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// for (let i = 0; i <=15; i++) {
//     document.write(i + " ");

// }
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// for (let i = 10; i>=1; i--) {
//    if (i>0) {
//        document.write(i + " ");
//    }


// }
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// var evenNo = []
// for (let i = 0; i <= 20; i++) {
//   if (i%2 ==0) {
//       evenNo.push(i)
//   }

// }
// document.write(evenNo)
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// var oddNo = []
// for (let i = 0; i <= 20; i++) {
//   if (i%2 !=0) {
//       oddNo.push(i)
//   }

// }
// document.write(oddNo)
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
// var Series = []
//  for (let i = 0; i <= 20; i++) {
//    if (i%2 ==0) {
//    Series.push(i + "k")
//    }  
//  }
//  document.write(Series)
// 








// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:

// var A = ["cake", "apple pie", "cookie", "chips", "patties"]
// var userInput = prompt("enter snack name")
// var match = false;
// for (let i = 0; i < A.length; i++) {
//  if(userInput === A[i]){
//    document.write("snack found")
//    match = true
//    break;
//  }

// }
// if (!match) {
//  document.write("snack not found")

// }
// 8. Write a program to identify the largest number in the
// given array.
// var number = [24, 53, 78, 91, 12];
// var largestNo = 0;


// for (let i = 0; i < number.length; i++) {
//     if (number[i] > largestNo) {
//         largestNo = number[i];
//     }
// }
// document.write(largestNo)

// 9. Write a program to identify the smallest number in the
// given array.
// var numbers = [24, 53, 78, 91, 12]
// var smallestNo = 91;
// for (let i = 0; i < numbers.length; i++) {
// if (numbers[i]<smallestNo) {
//     smallestNo = numbers[i]
// }    
// }
// document.write(smallestNo);


// 10. Write a program to print multiples of 5 ranging 1 to
// 100.

// var five =[];
// for (let i = 0; i <= 100; i++) {
//    if (i%5 == 0) {
//     five.push(i)
//    }
// }
// document.write(five);

// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.
// var firstName = prompt("enter your first name")
// var lastName = prompt("enter your last name")
// var fullName = firstName + lastName
// alert("Welcome " + fullName)



// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser

// var mobile = prompt("enter your faviourite phone model")
// var mobilelength = mobile.length;
// alert(mobilelength);


// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .
// var letter = "pakistani"
// for (let i = 0; i < letter.length; i++) {
//   if (letter[i] === "n") {
//       alert("index of n is" + i)

//   }

// }

// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser .
// var a = "hello world"
// var lastindex = a.lastIndexOf("l")
// document.write(lastindex)

// 5. Write a program to find the character at 3 rd index in the
// word “Pakistani” and display the result in your browser .
// var elements = "pakistani";
// var thirdi = elements.charAt(3)
// document.write(thirdi)

// 6. Repeat Q1 using string concat() method.
// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name

// var firstName = prompt("enter your first name")
// var lastName = prompt("enter your last name")
// var fullName= firstName.concat(' ',lastName)
// alert("Welcome " + fullName)
// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.

// var city = "hyderabad";
// var newcity = city.replace("hyder",'islam');
// document.write(city + "<br />")
// document.write(newcity)

// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.


// var message = 'Ali and Sami are best friends. They play cricket and football together';
// var newmessage = message.replace(/and/g , "&")
// document.write(newmessage)


// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.
// var stRing = "472"
// var number = parseInt(stRing)
// document.write(number)

// 10. Write a program that takes user input. Convert and
// show the input in capital letters.
// var userInput = prompt("enter any input")
// var capitalized = userInput.toUpperCase()
// document.write(capitalized)


// 11.
// Write a program that takes user input. Convert and
// show the input in title case.

// var userInput = prompt("enter any input")
// var firstchar = userInput.slice(0,1)
// var otherchar = userInput.slice(1)
// firstchar = firstchar.toUpperCase();
// var newname = firstchar+otherchar
// document.write(newname)

// 12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.
// var num = 35.36;
// var string = num.toString()
// string = string.replace(".", "")
// document.write(string)

// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .
// var username = prompt("enter user name")
// var character = ["@",'.','!','~']
// 
// for (let i = 0; i< username.length; i++) {
//  for (let j = 0; j < character.length; j++) {
// if (username[i]===character[j]) {
// alert("enter valid user name")
// 
// }
//  }
// 
// }
// 

// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:
// 
// var A = ["cake", "apple pie", "cookie", "chips", "patties"]
// var userInput = prompt("enter snack name")
// userInput = userInput.toLowerCase()
// var match = false;
// for (let i = 0; i < A.length; i++) {
// if (userInput === A[i]) {
// document.write("snack found")
// match = true
// break;
// }
// 
// }
// if (!match) {
// document.write("snack not found")
// 
// }


// 15. Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.

// var pass = prompt("enter a valid password")
// var isNumber = false;
// var isAlphabet = false;
// var startWithNum = isNaN(pass.charAt(0));

// if (pass.length < 6) {
//     alert("Password Must Be Of Atleast 6 Characters")
// }else if(!startWithNum){
//     alert("Password Must Not Start With A Number")
// } else {
//     for (let i = 0; i < pass.length; i++) {
//         var char = pass.charCodeAt(i);
//         var isNum = char > 47 && char < 58;
//         var isAlpha = (char > 64 && char < 91) || (char > 96 && char < 123);
//         if (isNum) {
//             isNumber = true;
//         }else if (isAlpha) {
//             isAlphabet = true;
//         }
//     }
// }
// if (startWithNum && !isNumber){
//     alert("Password Must Contain Atleast One Number");
// } else if(startWithNum && !isAlphabet) {
//     alert("Password Must Contain Atleast One Alphabet")
// }







// 16. Write a program to convert the following string to an
// array using string split method.
// Display the elements of array in your browser.
// var university = 'University of Karachi';
// university = university.split("")
// university = university.join("<br >")
// document.write(university)

// 17. Write a program to display the last character of a user
// input.
// var userInput = prompt("enter any input")
// userInput = userInput.charAt(userInput.length-1)
// document.write(userInput)

// 18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.
// var sentence = "the quick brown fox jumps over the lazy dog";
// var j = 0;
// for (let i = 0; i < sentence.length; i++) {
//    if (sentence.slice(i,i+3) == "the") {
//        j++
//    }

// }
// document.write(j)


