module.exports.run = function(csv){
/*
	A stringified CSV file will be passed into this function.
	Parse the string so it is an array of objects and return the array.
	The object properties are the header of the csv file, and the very first row of the csv file are the headers.

	Example

	function ('FirstName,LastName,Age\nDan,Tran,29\nDon,Tran,25\nJasmine,Tran,13') =>
		[
			{FirstName: Dan, LastName: Tran, Age: 29},
			{FirstName: Don, LastName: Tran, Age: 25},
			{FirstName: Jasmine, LastName: Tran, Age: 13},
		]

	Write your code below the comment.
*/
/*
NOTICE: the testing input contains "/n" while the above example input contains "\n", 
which is not consistent if it is not made intentionally. 

pseudo code:
    1.split csv file with "/n" into array, then split the sub element(string) with "," into sub-array
	2.remove the first elements of array that are just headers and assign headers to a new variable named title
	3.iterate through each element of data array and replace each sub array with a key index filled object

sample process:
	function ('FirstName,LastName,Age\nDan,Tran,29\nDon,Tran,25\nJasmine,Tran,13') 
	=>
	title = [ 'FirstName', 'LastName', 'Age' ]
    data = [
            [ 'Dan', 'Tran', '29' ],
            [ 'Don', 'Tran', '25' ],
            [ 'Jasmine', 'Tran', '13' ]
           ]
	=>
	newdata = [
			   {FirstName: Dan, LastName: Tran, Age: 29},
			   {FirstName: Don, LastName: Tran, Age: 25},
			   {FirstName: Jasmine, LastName: Tran, Age: 13},
		      ]
	
	edge case: if csv has empty string then return "no input"
*/
   //edge case with empty string input
   if(csv.length===0)return "no input"

   //split the csv file into nested arrays
   let data = csv.split("/n").map(el=>el.split(","))

   //split the first element which are headers
   let title=data.shift()

   //iterate throught each element and replace sub array with key filled object
   let newdata=data.map(el=>{
	   let temp={}
	   for(let i=0;i<title.length;i++){
		temp[title[i]]=el[i]
	    }
	   return temp
       })

   return newdata
};
