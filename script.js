const quote = document.getElementById("quote");
const author = document.getElementById("author");


//Get Quote

async function getQuote(){
    const proxyUrl = "https://cors-anywhere.herokuapp.com/"
    const apiurl = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json";
    try{
        const response = await fetch(proxyUrl + apiurl);
        const data = await response.json();
        // quote.innerText = data.quoteText;
        // author.innerText = data.quoteAuthor;
        console.log(data)
    }catch(error){
        getQuote();
        console.log("There is an Error", error)
    }
}


//populate UI




//Call quote
getQuote()