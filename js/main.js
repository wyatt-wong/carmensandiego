$(document).ready(function() {
  console.log('document ready!')
//variables
let countries = [];
let villains = [];
let npcs = [];

//Countries
//Country Constructor
function Country(name, flag, cap, pop, lang, nd, landmark, info) {
  this.name = name;
  this.flag = flag;
  this.cap = cap;
  this.pop = pop;
  this.lang = lang;
  this.nd = nd;
  this.landmark = landmark;
  this.info = info;
  this.updateCity = function() {
    $('#gs-loc').text(this.name);
    $('#mga-display').css({'background-image': 'url('+$(this).flag+')'})
    $('#mga-info').text(this.info)

  }

  }



//Function that adds country to countries[];
function addCountry(country) {
  countries.push(country)
}

//Create country
let columbia = new Country('Columbia', '../media/imgs/flagofcolumbia.png', 'Bogota', '49m', 'Spanish', 'Bandeja paisa', 'Zipaquira Salt Cathedral','A country in northwestern South America, Colombia is credited to be the 26th largest nation in the world. In South America, it claims the distinction of being the fourth largest country, after Brazil, Argentina and Peru. The culture of Colombia is known for its diversity. The country has long been influenced by Europeans, Spanish, Africans, Americans, Caribbean and the Middle East people. Though Colombia is predominantly Roman Catholic, yet a number of other festivals, such as the Barranquilla Carnival, are celebrated with immense gaiety.')
let costaRica = new Country('Costa Rica', '../media/imgs/flagofcostarica.png', 'San Jose', '4.8m', 'Spanish', 'Gallo Pinto', 'Arenal Volcano National Park', 'Over a quarter of the land in the country is dedicated to conservation.  Tourists and locals love to enjoy and appreciate Costa Rica’s natural beauty.  And the government is committed to keeping it that way.  Would you believe there are 20 national parks, 8 biological reserves, various animal refuges and protected areas?  All of this commitment to protecting the environment adds up to 26% of the land being protected in one way or another.')
let mexico = new Country('Mexico', '../media/imgs/flagofmexico.jpg', 'Mexico City', '119m', 'Spanish', 'Mole Poblano', 'Chichen Itza in Yucatan Peninsula', 'Chocolate was discovered in Mexico and was made by the Meso-American people into a sweet beverage using natural sweeteners. The word ‘chocolate’ derives from the language of the Aztecs, Náhuatl (xocolatl : xoco, bitter + atl, water). Ixcacao is the Mayan Goddess of chocolate. Corn (Zea maiz) was first cultivated in central Mexico. Most chillies come from Mexico, the word derived from the Náhuatl word chilli.')
addCountry(columbia);
addCountry(costaRica);
addCountry(mexico);
console.log(countries)

//Villans
//Villian Constructor
function Villain(name, sex, occupation, eyes, hair, auto, comments) {
  this.name = name;
  this.sex = sex;
  this.occupation = occupation;
  this.eyes = eyes;
  this.hair = hair;
  this.auto = auto;
  this.comments = comments;
}

//function that adds villain to villains[];
function addVillain(villain) {
  villains.push(villain);
}

//create villain
let sherrifPaulDrive = new Villain('Sherrif Paul Drive', 'Male', 'Drug Store Cowboy', 'blue', 'Blond', 'Street Truck', 'Collects baseball cards');
addVillain(sherrifPaulDrive);
console.log(villains);

//NPC
//NPC Constructor
function Npc(name, img, goodHint, badHint) {
  this.name = name;
  this.img = img;
  this.goodHint = goodHint;
  this.badHint = badHint;
}

// function to add npc to npcs[];
function addNpc(npc) {
  npcs.push(npc);
}

// create npc
let marsha = new Npc('Marsha', 'http://www.google.com', 'She said something about checking out the x', 'I have no idea who you are talking about');
let mark = new Npc('Mark', 'http://www.google.com', 'She said something about checking out the x', 'I have no idea who you are talking about');
let merill = new Npc('Merill', 'http://www.google.com', 'She said something about checking out the x', 'I have no idea who you are talking about');
addNpc(marsha);
addNpc(mark);
addNpc(merill);
console.log(npcs);

$('#mga-display').addClass('gs')
mexico.updateCity();



}); //End of document




