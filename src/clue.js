const suspectsArray = [
  {
    firstName: "Jacob",
    lastName: "Green",
    occupation: "Entrepreneur",
    age: 45,
    description: "He has a lot of connections",
    imgUrl: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    color: "green"
      },
  {
    firstName: "Doctor",
    lastName: "Orchid",
    occupation: "Scientist",
    age: 26,
    description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    imgUrl : " http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    color: "white"
      },
  {
    firstName: "Victor",
    lastName: "Plum",
    occupation: "Designer",
    age: 22,
    description: "Billionaire video game designer",
    imgUrl : "https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg",
    color: "purple"
      },
  {
    firstName: "Kasandra",
    lastName: "Scarlet",
    occupation: "Actor",
    age: 31,
    description: "She is an A-list movie star with a dark past",
    imgUrl :  "https://www.radiotimes.com/uploads/images/Original/111967.jpg",
    color: "red"
      },
  {
    firstName: "Eleanor",
    lastName: "Peacock",
    occupation: "Socialité",
    age: 36,
    description: "She is from a wealthy family and uses her status and money to earn popularity",
    imgUrl: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    color: "blue",
      },
  {
    firstName: "Jack",
    lastName: "Mustard",
    occupation: "Retired Football player",
    age: 62,
    description: "He is a former football player who tries to get by on his former glory",
    imgUrl: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg",
    color: "yellow",
      }
]

const weaponsArray = [
  {
  weaponName:"rope",
  weight:10
      },
  {
  weaponName:"knife",
  weight:8
      },
  {
  weaponName:"candlestick",
  weight:2
      },
  {
  weaponName:"dumbbell",
  weight:30
      },
  {
  weaponName:"poison",
  weight:2
      },
  {
  weaponName:"axe",
  weight:15
      },
  {
  weaponName:"bat",
  weight:13
      },
  {
  weaponName:"trophy",
  weight:25
      },  
  {
  weaponName:"pistol",
  weight:20
      }    
]

const roomsArray = [
  {
    roomName: "Dining Room"
    },
  {
    roomName: "Conservatory"
    },
  {
    roomName: "Kitchen"
    },
  {
    roomName: "Study"
    },
  {
    roomName: "Library"
    },
  {
    roomName: "Billiard Room"
    },
  {
    roomName: "Lounge"
    },
  {
    roomName: "Ballroom"
    },
  {
    roomName: "Hall"
    },
  { 
    roomName: "Spa"
    },
  {
    roomName: "Living Room"
    },
  {
    roomName: "Observatory"
    },
  {
    roomName: "Theater"
    },
  {
    roomName: "Guest House"
    },
  {
    roomName: "Patio"
    }
  ]
    
    
  function selectRandom(array){
    return array[Math.floor(Math.random() * array.length)]
  }

  function pickMystery() {
    return newArray = {
      suspect: selectRandom(suspectsArray),
      weapon:selectRandom(weaponsArray),
      room:selectRandom(roomsArray)
    }
  }
  pickMystery()

    


  function revealMystery(envelope) {
    return `${envelope.suspect.firstName} ${envelope.suspect.lastName} killed Mr. Boddy using the ${envelope.weapon.name} in the ${envelope.room.name}!`
 }
revealMystery(pickMystery())
