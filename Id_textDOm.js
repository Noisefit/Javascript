//question 1): write the code element which is having id as "text"

// const element1= document.getElementById("text")
// console.log(element1);

//question 2):- write the code to access element which is having tag as "h1".

// const element2 = document.getElementsByTagName("h1");
// console.log(h1);

//question 3):- write a code to access element which is having class as "box".

// const element3 =document.getElementsByClassName("box");
// console.log(element3);

//question 4):- <h1> hello </h1>
//change the heading from "hello" to "hello world" by using DOM function

// const element4 =document.getElementsByTagName("h1")
// console.log(element4);

// element4.innerText="Hello World"
// console.log(element4);

//question 5):-Create three cards on HTML page and arrange them using flex property in row or horizontal direction and also create button at the bottom named "Change Flex direction". When user clicks on this button, the cards arrangement should be changed to vertical direction.

// const element5 =document.getElementsByClassName("container");

// function ChangeDirection(){
//     const element5=document.getElementsByClassName("container");
//      element5[0].style.flexDirection="column";
//  }

 //question 6):-what is the differnce between window and document.

 //question 7):-"<h1>Hello </h1>
//Add one style attribute and give text color as red and id attribute and give the id value as ""heading"" in the above given h1 tag using DOM functions"

// const element7 =document.getElementsByClassName("hello");
//  console.log(element7[0].innerText);
//  console.log(element7[0].style.color="red");
//  console.log(element);

//  element8 =document.createAttribute("id","heading");
//  console.log(element8[0].innerText);
 

//Question 8)Create an HTML page having content as Hello world and a button named Replace Text. When user will click on this button page content should be changed to "Welcome to Elevation academy"

// const element8 = document.getElementsByTagName("h1");
//  element8[0].innerText;
//  console.log(element8);
//  element8[0].innerText=`hello world`


// function changeText(){
//     const element9= document.getElementsByClassName("click")
//     element8[0].innerText=`Welocome to elevation academy`;
//     console.log(element9[0]);
// }

//question 9)Write code to implement timer clock using JS -- display HH:MM:SS -- the time should keep updating every second


// function showRealTime(){
//     const date =new Date();
//     const hours =date.getHours();
//     const mins =date.getMinutes();
//     const secs =date.getSeconds();
//     console.log(hours,mins,secs);

//     setTimeout(() => {
//         showRealTime()
//     }, 1000);
// }
// showRealTime();

//question 10)Create a select drop down for selecting Year 20-21, 21-22 etc. Print the item text selected

/* <label for="">Birth Year</label>
<select name="year" id="year">
    <option value="">1984  </option>
    <option value="">1985 </option>
    <option value="">1986 </option>
    <option value="">1987 </option>
    <option value="">1988</option>
    <option value="">1989  </option>
    <option value="">1990</option>
    <option value="">1991</option>
    <option value="">1992</option>
    <option value="">1993</option>
    <option value="">1994</option>
    <option value="">1995</option>
    <option value="">1996</option>
    <option value="">1997</option>
    <option value="">1998</option>
    <option value="">1999</option>
    <option value="">2000</option>
</select> */


//questin 11)


//<p>"Create a form having name ,email, phone no. , birth year
// Add validations - phone no. should start with 91 , it should be 10 digits email should be domain prepbytes.com
// birth year should be > 95"</p>
// <form name="form">
// <label for="name">Name:</label>
// <input type="text" id="name" name="name"> <br>
// <label for="email">Email:</label>
// <input type="email" id="email" name="email"> <br>
// <label for="phone">Phone No:</label>
// <input type="text" id="phone" name="phone"> <br>
// <label for="year">Birth Year:</label>
// <input type="number" id="year" name="year"> <br>
// <input type="submit" value="Submit" onclick="validateForm()">
// </form>
    