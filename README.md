# Mr Roboger's Neighborhood

#### This is my end of week project for Week 3.

#### By - Zack Rutledge

## Technologies Used

* HTML
* CSS
* Bootstrap
* Markdown
* JavaScript
* Jquery

## Description

This project is to demonstrate my skills and knowledge with the content we have learned the past week, as well as reaffirm some of my knowledge of last week's lessons. It is meant to take user input into an array and put different answers out based on the data given.

## Setup/Installation Requirements

* Open Git Bash
* Use command 'git pull https://github.com/Dethik/Robogers-Neighborhood'
* Navigate to top level of directory
* Open index.html in your browser of choice.

## Known Bugs

* No Known Issues

## License

[MIT](LICENSE.txt)

## Contact Information

Email: Thorgrim88@gmail.com

## Test Specs

Describe: beep()
Test: "It should return any number containing 1 in an array with 'Beep!' last."
Expect(splitA[i].includes("1"));

Describe: boop()
Test: "It should return any number containing 2 in an array with 'Boop!' second."
Expect(splitA[i].includes("2"));

Describe: neighbor()
Test: "It should return any number containing 3 in an array with 'Won't you be my neighbor?' first."
Expect(splitA[i].includes("3"));

Describe: input()
Test: "It should take the input from a user and count by 1 from 0 up to the number, using all business logic conditions to replace certain numbers."
Expect(let i = 0; i <= input; i++.toEqual("0, 1, 2"));

Describe: nill()
Test: "It should give a message back to the user "'Zero' isn't valid, try something more!" if they input 0."
Expect(input == 0.toEqual(Error Message))

Describe: negative()
Test: "If a negative number is input then a message will be given, "Negative numbers lead to Negative Neighbors, try some thing positive friend!"
Expect(input < 0.toEqual(Error Message))

Describe: toLarge()
Test: "If a user inputs a value above what is designated to large a message will be given, "Lets not damage our software friend, try a smaller unit!"
Expect(input > 1000.toEqual(Error Message))