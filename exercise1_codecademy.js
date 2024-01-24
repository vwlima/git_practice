// As frases serão - Show me the money, May the force be with you e You talkin' to me? 

let phrases = ['Show me they money!', 'May the force be with you!', 'You talkin to me?', 'Hello World!']

const printPhrases = function(arr) {
    
    console.log(arr[Math.floor(Math.random() * 4)]);
    
    }

printPhrases(phrases);
