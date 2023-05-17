const { default: Axios } = require("axios");

module.exports.run = async function(movies) {
/*
	You are given a list of urls that will be used to search up movies.
	Make a GET call with axios using the given urls to search each movies.
	Then return an array of objects with the properties 'Title, Year, Genre' of each movie in the same order it came in as.

	You are welcome to change this function to an async/await.

	Example:

	function (['https://www.omdbapi.com/?t=Lion%20King', 'https://www.omdbapi.com/?t=Up']) =>
	[
		{Title: 'The Lion King', Year: '1994', Genre: 'Animation, Adventure, Drama, Family, Musical'},
		{Title: 'Up', Year: '2009', Genre: 'Animation, Adventure, Comedy, Family'},
	]

	Write your code below the comment.
*/

/*
sudo code:
    change the function to async function
    use try catch method
	try get url for each movie link
	only return the key/value pairs with key index of Title, Year, Genre
	turns iterable promises into a single promise
	catch error message
*/
    try {
		//iterate through each url link
        const resPromises = movies.map(async (url)=>{
             const res = await Axios.get(url);
			 //destructure from data with only the key index of Title, Year, Genere
			 const {Title,Year,Genre}=res.data
			 return {Title,Year,Genre}
		})

		//take iterable of promises and return a single promise      
		let movieInfo = await Promise.all(resPromises)
		return movieInfo	
	}
	catch(err){
		return `Error: ${err.message}`
	}
};
