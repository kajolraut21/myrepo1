// let input = document.getElementById("entered");
// input.addEventListener("keyup", function(event){
//     if(event.code===Enter){
//         myFunc()
//     }
// })
function attempt(event){
    console.log(event.key)
    if(event.key=="Enter"){
        console.log(event.key)
        event.preventDefault();
        myFunc()
     
    }
}
function myFunc(){
    const api_url =
	"http://numbersapi.com/";
    const num =parseInt(document.getElementById("entered").value)
    console.log(num)
        const numb = api_url + num + "?json"
        getapi(numb);
}


// 
async function getapi(url) {
	// Storing response
	// const response = await fetch(url);	
    fetch(url)
.then(res => res.json()
)
.then(data => {
    let dat = document.getElementById("demo")
    dat.innerHTML = data.text
    myMove()
})
.catch(error => {
    console.log(error)
    document.getElementById("demo").innerHTML = "COULD NOT FETCH"
})
}
function myMove() {
    let id = null;
    const elem = document.getElementById("demo");   
    let pos = -50;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
      if (pos == 0) {
        clearInterval(id);
      } else {
        pos++; 
        
        elem.style.left = pos + "px"; 
      }
    }
  }


// function myFunc() {
//     const num = parseInt(document.getElementById("entered").value)
//     const api_url = "http://numbersapi.com/" + num + "/math?callback="

//     var num1 = Math.round(10000 * Math.random())
//     var call_back = "cb_" + num1
//     console.log("1")

//     window[call_back] = function(data){
//         console.log("5")
//         console.log(data)
//         console.log("6")
//     }


//     var sc = document.createElement("script");
//     sc.async = true;
//     const numb = api_url + call_back
//     console.log("2")
//     sc.src = numb
//     console.log("3")
//     document.body.appendChild(sc);
//     console.log(sc)
// }












