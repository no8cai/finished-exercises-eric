const { default: Axios } = require("axios");

module.exports.run = async function(url){
/*
	You are given a url. Make a GET call with axios using the given url.
	However, there is something wrong with the url, and it throws an error.
	This error will have a property 'message'. Properly return the message, adding 'Error: ' to the beginning of the message.

    You are welcome to change this function to an async/await.

	Write your code below the comment.
*/
/*
sudo code:
    change the function to async function
    use try catch method
	try get url
	catch error messages
*/
    try{
		//attempt to get the url and return the data from the url
		const res = await Axios.get(url);
		return res.data
	}catch(err){
		//return the error message
		return `Error: ${err.message}`
	}

};
