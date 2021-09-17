// fetch("http://numbersapi.com/14/math")
// .then(res =>{
//     if(res.ok){
//         console.log("Success")
//     }else{
//         console.log("Failure")
//     }
//     return res.text()
// }

// )
// .then(data => console.log(data))
// .catch(error => console.log(error))



// api url
function myFunc(){
    
    const api_url =
	"http://numbersapi.com/";
    const num =parseInt(document.getElementById("entered").value)
    console.log(num)
    if(num==NaN){
        document.getElementById("demo").innerHTML = "Enter a valid number"
        return
    }else{
        const numb = api_url + num + "/math"
        getapi(numb);
    }
    
}
// Defining async function
async function getapi(url) {
	// Storing response
	// const response = await fetch(url);	
    fetch(url)
.then(res => res.text()
)
.then(data => {
    console.log(data)
   
    document.getElementById("demo").innerHTML = data
})
.catch(error => {
    console.log(error)
    document.getElementById("demo").innerHTML = "COULD NOT FETCH"
})

	// Storing data in form of JSON
	
	
	// if (response) {
	// 	hideloader();
	// }
	// show(response);
}
// Calling that async function

// Function to hide the loader
// function hideloader() {
	
// }
// // Function to define innerHTML for HTML table
// function show(data) {
	
// }
