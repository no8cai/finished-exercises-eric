
module.exports.run = function(x, y) {
/*
	You are given a 2D array. Using the x and y co-ordinates, find the sum of all the numbers from (0, 0) to (x, y)

	Example:

	-1  1  5        function(1, 1) => 12
	 9  3  7		function(1, 0) => 0 
	 2  8  4		function(0, 1) => 8

	 Write your code below the comment.
*/
const twoDArray = [[0,  4,  2,  1],
		           [3, -1,  1,  0],
		           [0,  0,  2,  3],
		           [1,  3, -3,  0]];
/*pseudo code:
      (0,0)---(0,x)
	    |       |
	    |       | 
	  (y,0)---(y,x)

	  iterate throw x-axis from (0,0) to (0,x)
	  iterate throw y-axis from (0,0) to (y,0)
	  sum all the number from (0,0) to (y,x)
	  edge case 1: x or y must >=0
	  edge case 2: x must <= length of x axis
	               y must <= length of y axis
*/
     
     let sum=0;
	 let Xaxis=x;
	 let Yaxis=y;
	 //edge case 1, return 0 if x or y are less than 0
     if (x<0 || y<0) return 0
	 
     //edge case 2, limit the edge of x and y to the size of matrix if x or y greater than the size of matrix
	 if (x>twoDArray[0].length){
		Xaxis=twoDArray[0].length-1
	 }
	 if (y>twoDArray.length){
		Yaxis=twoDArray.length-1
	 }
     
	 //Sum all the numbers from (0,0) to (y,x) in the matrix
     for (let indexY=0;indexY<=Yaxis;indexY++){
		for (let indexX=0;indexX<=Xaxis;indexX++){
			sum+=twoDArray[indexY][indexX]
		}
	 }
     return sum
};


