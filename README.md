# Triangle Tracker
#### Checks if three digits entered make the sides of a triangle, August 10, 2018
#### By **Maxwell Kimutai**
## Description
This application prompts the user to input three digits. After they have submitted the three digits the application checks if the three sides can make a triangle. If they can, it then goes ahead to tell the user if it is an equilateral, isosceles or scalene triangle.
## BDD
The program checks if the input is not a number or less than 0.
* Example input: a
* Example output: Please enter the first side again. You entered a value that is not a number or is a number less than one or nothing at all.

The program checks if input is empty.
* Example input: ""
* Example output: Please enter the first side again. You entered a value that is not a number or is a number less than one or nothing at all.

The program checks if input is 0.
* Example input: 0
* Example output: Please enter the first side again. You entered a value that is not a number or is a number less than one or nothing at all.

The program checks if sides entered can make a triangle.
* Example input: 1
* Example input: 1
* Example input: 3
* Example output: The three sides cannot make a triangle!!!

The program checks if sides entered can make an equilateral triangle.
* Example input: 5
* Example input: 5
* Example input: 5
* Example output: The three sides make an equilateral triangle!!!

The program checks if sides entered can make an equilateral triangle.
* Example input: 5
* Example input: 5
* Example input: 8
* Example output: The three sides make an isosceles triangle!!!

The program checks if sides entered can make a scalene triangle.
* Example input: 3
* Example input: 9
* Example input: 7
* Example output: The three sides make a scalene triangle!!!

## Setup/Installation Requirements
* https://github.com/maxwellkimutai/triangle-tracker.git
* cd triangle-tracker
* atom .
* edit
## Known Bugs
None
## Technologies Used
* HTML
* CSS
* JavaScript
* git
## Support and contact details
Contact Maxwell Kimutai on +254713510682
### License
MIT
Copyright (c) 2018 **Maxwell Kimutai**
