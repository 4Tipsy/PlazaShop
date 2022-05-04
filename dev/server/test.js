const xhttp = new XMLHttpRequest()

xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        console.log(23421)
        myFunction(this.responseText)
    }
}

xhttp.open("GET", "http://localhost:63342", true)
xhttp.send()



function myFunction () {
    console.log("data")
}