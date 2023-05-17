module.exports.run = function(a, b, c) {
/*
Given 3 int values, a b c, return their sum. However, if one of the values is the same as another of the values, it does not count towards the sum.

Examples:
	function(1, 2, 3) => 6
	function(3, 2, 3) => 2
	function(3, 3, 3) => 0

Write your code below the comment.

*/
/*
sudo code:
   since there are only 3 inputs, the condition statement will do the job. 
   condition 1: a=b=c then return 0
   condition 2: a=b not equal to c then return c
   condition 3: a=c not equal to b then return b
   condition 4: b=c not equal to a then return a
   condition 5: a not equal to b not equal to c return a+b+c
*/
   //condition 1
   if (a==b && b==c)return 0
   //condition 2
   else if (a==b && a!=c)return c
   //condition 3
   else if (a==c && a!=b)return b
   //condition 4
   else if (b==c && b!=a)return a
   //condition 5
   else return a+b+c

};
