const quotes = ['End? No, the journey doesn’t end here. Death is just another path… One that we all must take. The grey rain-curtain of this world rolls back, and all turns to silver glass… And then you see it.', 'If I take one more step it will be the farthest away from home I have ever been.', "I don't know half of you half as well as I should like, and I like less than half of you half as well as you deserve"];

const randomizer = Math.floor(Math.random() * quotes.length);

console.log(quotes[randomizer]);