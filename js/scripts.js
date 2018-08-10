function triangleTracker() {
    var sides = [];
    var notNumber = false;

    sides.push(parseInt(prompt("Enter length first side: ")));
        if (isNaN(sides[0]) || sides[0] < 1) {
        		notNumber = true;
            while (notNumber === true) {
            	sides[0] = parseInt(prompt("Please enter the first side again. You entered a value that is not a number or is a number less than one or nothing at all"));
              if(sides[0] > 0){
              	notNumber = false;
              }
            }
        }
    sides.push(parseInt(prompt("Enter length second side: ")));
    		if (isNaN(sides[1]) || sides[1] < 1) {
        		notNumber = true;
            while (notNumber === true) {
            	sides[1] = parseInt(prompt("Please enter the second side again. You entered a value that is not a number or is a number less than one or nothing at all"));
              if(sides[1] > 0){
              	notNumber = false;
              }
            }
        }
    sides.push(parseInt(prompt("Enter length third side: ")));
    		if (isNaN(sides[2]) || sides[2] < 1) {
        		notNumber = true;
            while (notNumber === true) {
            	sides[2] = parseInt(prompt("Please enter the third side again. You entered a value that is not a number or is a number less than one or nothing at all"));
              if(sides[2] > 0){
              	notNumber = false;
              }
            }
        }

        if ((sides[0] + sides[1]) <= sides[2] || (sides[1] + sides[2]) <= sides[0] || (sides[0] + sides[2]) <= sides[1]){
      alert("The three sides cannot make a triangle!!!");
        } else if (sides[0] === sides[1] && sides[1] === sides[2]) {
      alert("The three sides make an equilateral triangle!!!");
        } else if (sides[0] === sides[1] || sides[0] === sides[2] || sides[2] ===	sides[1]) {
      alert("The three sides make an isosceles triangle!!!");
        } else if ((sides[0] !== sides[1] && sides[0] !== sides[2]) || (sides[1] !== sides[2] && sides[1] !== sides[0]) || (sides[2] !== sides[1] && sides[2] !== sides[0]) ) {
      alert("The three sides make a scalene triangle!!!");
        }
}
