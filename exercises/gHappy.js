module.exports.run = function(str) {
/*
A lowercase 'g' in a string is "happy" if there is another 'g' immediately to its left or right.
Return true if all the g's in the given string are happy, otherwise return false.

	Example:
		function("xxggxx") => true
		function("xxgxx") => false

        Write your code below the comment.
*/
/*
pseudo code:
    input a string
	detect edge cases first (if str contains 0 character)
	search through the string (time complexty of O(n))
    if one character matches with "g" , detect if (index of "g" -1) or (index of "g"+1) is "g" , then return true
    else return false
    finial time complexty is O(n)(n is the length of string) since we only need to traverse the string once

*/
    //initial the return variable
    let result=false
	//detect if the length of str is 0, then return false if input empty string
	if (str.length==0){
		return false
	}
	//traverse the str
    for(let i=0;i<str.length;i++){
        //detect if the neighbor of "g" is "g" or not
		if(str[i]==="g"){
			if(i>0 && str[i-1]==="g"){
				result=true
			}else if(i<str.length-1 && str[i+1]==="g"){
				result=true
			}else{
				//if "g" has no neighbor "g" then set return variable to false
				result=false
			}
		} 
	}

	return result
      
};
