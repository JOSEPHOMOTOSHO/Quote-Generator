const quote = document.getElementById("quote");
const author = document.getElementById("author");
const quoteButton = document.getElementById("new-quote");
const container = document.getElementById("container");
const load = document.getElementById("loader");
const twitterBtn = document.getElementById("twitter");

//put off display on load
container.style.display = "none";
load.style.display = "block";
//Get Quote
async function getQuote(){
    loader()
    const proxyUrl = "https://whispering-tor-04671.herokuapp.com/"
    const apiurl = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json";
    try{
        const response = await fetch(proxyUrl + apiurl);
        const data = await response.json();
        quote.innerText = data.quoteText;
        if(data.quoteAuthor == ""){
            author.innerText = "Unknown"
        }else{
            author.innerText = data.quoteAuthor;
        }
        console.log(data)
    }catch(error){
        getQuote();
    }
}

function loader(){
   //load and display after 2 seconds
    setTimeout(function(){
        container.style.display = "block";
        load.style.display = "none";
    },2500)
}


//TweetQuote

function TweetQuote(){
    const QuoteText =  quote.innerText ;
    const QuoteAuthor = author.innerText;
    const tweetUrl = `https://twitter.com/intent/tweet?text=${QuoteText}-${QuoteAuthor}`;
    window.open(tweetUrl, "_blank")
}

//Event Listeners
quoteButton.addEventListener('click', getQuote)
twitterBtn.addEventListener('click',TweetQuote)

//on load
getQuote()

