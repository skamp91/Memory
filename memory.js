//card options
const cardArray = [{
    name: 'black',
    img: 'assets/marioblack.png'
  },
  {
    name: 'black',
    img: 'assets/marioblack.png'
  },
  {
    name: 'blue',
    img: 'assets/marioblue.png'
  },
  {
    name: 'blue',
    img: 'assets/marioblue.png'
  },
  {
    name: 'green',
    img: 'assets/mariogreen.png'
  },
  {
    name: 'green',
    img: 'assets/mariogreen.png'
  },
  {
    name: 'lightblue',
    img: 'assets/mariolightblue.png'
  },
  {
    name: 'lightblue',
    img: 'assets/mariolightblue.png'
  },
  {
    name: 'lightgreen',
    img: 'assets/mariolightgreen.png'
  },
  {
    name: 'lightgreen',
    img: 'assets/mariolightgreen.png'
  },
  {
    name: 'orange',
    img: 'assets/marioorange.png'
  },
  {
    name: 'orange',
    img: 'assets/marioorange.png'
  },
  {
    name: 'rosa',
    img: 'assets/mariorosa.png'
  },
  {
    name: 'rosa',
    img: 'assets/mariorosa.png'
  },
  {
    name: 'white',
    img: 'assets/mariowhite.png'
  },
  {
    name: 'white',
    img: 'assets/mariowhite.png'
  },
  {
    name: 'wine',
    img: 'assets/mariowine.png'
  },
  {
    name: 'wine',
    img: 'assets/mariowine.png'
  },
  {
    name: 'yellow',
    img: 'assets/marioyellow.png'
  },
  {
    name: 'yellow',
    img: 'assets/marioyellow.png'
  }
]

const grid = document.querySelector('.grid');
var scoreDisplay = document.querySelector('#score')
var cardsChosen = [];
var cardsChosenID = [];
var cardsWon = []


//create board
function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    var card = document.createElement('img')
    card.setAttribute('src', 'assets/star.png')
    card.setAttribute('data-id', i)
    card.addEventListener('click', flipCard)
    grid.appendChild(card)
  }
}

//randomly cards
cardArray.sort(() => 0.5 - Math.random())

//check for matches
function checkForMatch() {
  var cards = document.querySelectorAll('img')
  const optionOneID = cardsChosenID[0]
  const optionTwoID = cardsChosenID[1]

  if (cardsChosen[0] === cardsChosen[1]) {
    alert("Nice, it's a Match")
    cards[optionOneID].setAttribute('src', 'assets/cloud.png')
    cards[optionTwoID].setAttribute('src', 'assets/cloud.png')
    cardsWon.push(cardsChosen)
  } else {
    cards[optionOneID].setAttribute('src', 'assets/star.png')
    cards[optionTwoID].setAttribute('src', 'assets/star.png')
    alert("Dedüüüüüm")
  }
  cardsChosen = []
  cardsChosenID = []
  scoreDisplay.textContent = cardsWon.length
  if (cardsWon.length === cardArray.length / 2) {
    var h1 = document.querySelector('h1')
    h1.innerHTML = "CONGRATS <br/>you found them all"
  }
}


//flip card
function flipCard() {
  var cardID = this.getAttribute('data-id')
  cardsChosen.push(cardArray[cardID].name)
  cardsChosenID.push(cardID)
  this.setAttribute('src', cardArray[cardID].img)

  if (cardsChosen.length === 2) {
    setTimeout(checkForMatch, 500);
  }
}

createBoard();