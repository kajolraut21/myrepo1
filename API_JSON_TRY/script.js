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
    console.log(data)
    let var1 = document.getElementById("demo")
   
    var1.innerHTML = data.text
    var1.classList.remove("animat")
    void var1.offsetWidth;
    var1.classList.add("animat")
    // document.getElementById("demo").removeClass("animat").addClass("animat")
})
.catch(error => {
    console.log(error)
    document.getElementById("demo").innerHTML = "COULD NOT FETCH"
})
}

// -----------------CHECK THIS LATER-------------
// function myMove() {
//   let id = null;
//   const elem = document.getElementById("demo");   
//   let opa = 0;
//   clearInterval(id);
//   id = setInterval(frame, 10);
//   console.log(id)
//   function frame() {
//     if (opa == 1) {
//       clearInterval(id);
//     } else {
//       opa+=0.01; 
//     //   elem.style.top = pos + "px"; 
//       elem.style.opacity =opa; 
//     }
//   }
// }



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












