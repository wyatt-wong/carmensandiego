$(document).ready(function() {
  console.log('document ready!')

//Global Variables I know not a good idea
let countries = [];
let villains = [];
let npcs = [];
//Gamestate Variables
let timeRemaining = 160; // current time remainig
let currentLoc; //current coutnry
let isVillian; //flag for if the villain is in town or not, responses change depending on this flag


//Countries
//Country Constructor
function Country(name, flag, cap, pop, lang, nd, landmark, info, hint) {
  this.name = name;
  this.flag = flag;
  this.cap = cap;
  this.pop = pop;
  this.lang = lang;
  this.nd = nd;
  this.landmark = landmark;
  this.info = info;
  this.hint = hint;

  //function that updates all views depending on the country
  this.updateCity = function() {
    $('#mga-display').css({'background-image': `url(${this.flag})`});
    $('#mga-info').text(`${this.info}`)
    $('#location').text(`${this.name}`)
    $('#sd-two').data('hint', `${this.hint}`)
  }

  }

//Function that adds country to countries[];
function addCountry(country) {
  countries.push(country)
}

//Create country
let columbia = new Country('Columbia', './media/imgs/flagofcolumbia.png', 'Bogota', '49m', 'Spanish', 'Bandeja paisa', 'Zipaquira Salt Cathedral','A country in northwestern South America, Colombia is credited to be the 26th largest nation in the world. In South America, it claims the distinction of being the fourth largest country, after Brazil, Argentina and Peru. The culture of Colombia is known for its diversity. The country has long been influenced by Europeans, Spanish, Africans, Americans, Caribbean and the Middle East people. Though Colombia is predominantly Roman Catholic, yet a number of other festivals, such as the Barranquilla Carnival, are celebrated with immense gaiety.','Here is a hint')
let costaRica = new Country('Costa Rica', '../media/imgs/flagofcostarica.png', 'San Jose', '4.8m', 'Spanish', 'Gallo Pinto', 'Arenal Volcano National Park', 'Over a quarter of the land in the country is dedicated to conservation.  Tourists and locals love to enjoy and appreciate Costa Rica’s natural beauty.  And the government is committed to keeping it that way.  Would you believe there are 20 national parks, 8 biological reserves, various animal refuges and protected areas?  All of this commitment to protecting the environment adds up to 26% of the land being protected in one way or another.', 'Here is a hint')
let mexico = new Country('Mexico', './media/imgs/flagofmexio.png', 'Mexico City', '119m', 'Spanish', 'Mole Poblano', 'Chichen Itza in Yucatan Peninsula', 'Chocolate was discovered in Mexico and was made by the Meso-American people into a sweet beverage using natural sweeteners. The word ‘chocolate’ derives from the language of the Aztecs, Náhuatl (xocolatl : xoco, bitter + atl, water). Ixcacao is the Mayan Goddess of chocolate. Corn (Zea maiz) was first cultivated in central Mexico. Most chillies come from Mexico, the word derived from the Náhuatl word chilli.', 'Here is a hint')
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

//Function that adds villain to villains[];
function addVillain(villain) {
  villains.push(villain);
}

function villianList(villian) {

}

//Create villain
let sherrifPaulDrive = new Villain('Sherrif Paul Drive', 'Male', 'Drug Store Cowboy', 'blue', 'Blond', 'Street Truck', 'Collects baseball cards');
addVillain(sherrifPaulDrive);
let sherrifPaulDrive2 = new Villain('Sherrif Paul Drive2', 'Male', 'Drug Store Cowboy', 'blue', 'Blond', 'Street Truck', 'Collects baseball cards');
addVillain(sherrifPaulDrive2);
let sherrifPaulDrive3 = new Villain('Sherrif Paul Drive3', 'Male', 'Drug Store Cowboy', 'blue', 'Blond', 'Street Truck', 'Collects baseball cards');
addVillain(sherrifPaulDrive3);
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


//part of game start
// $('#mga-display').addClass('gs') changes to hq background
mexico.updateCity();
columbia.updateCity();

//Game
//Game Logic?

//Button Behavior

//Phone
//Phone buttons should work and display on screen if I want to call someone
//Not sure in this interation

//Travel
//Travel button needs to change mga display to map with travel choices, change phone display to some image,
//store choice in travel log *local storage?
//info screen needs to show available list of flights as well
//once flight is confirmed subtract 8 hours from time remaining
$('#sd-one').on('click', function() {
  $('#mga-travel-display').toggle();

});

//Crime-Net
//Crime-Net button needs to provide a hint to find the criminal
$('#sd-two').on('click', function() {
  let hint = $('#sd-two').data('hint');
  $('#p-scrn').text(hint);

});

//Warrant
//Warrant button needs to pull up evidence where you can make your final changes and then submit your evidence
//which will be compared to the dossier if there is a match warrant is issued if not need more evidence
//change phone display to cop
//Evidence
//Evidence needs to pull an empty object from local storage and then populate it and be able to save the changes
$('#evi-btn').on('click', function() {
  $('#mga-info').text('works')
});
//Dossier
//Dossier needs to get the names of the villians once the villians are listed clicking on them should bring up their profile in the same screen
$('#dos-btn').on('click', function() {
  let $vilList = $('<ul>')
  let $clear = function() {
    $('mga-info').html(' ');
  }
  $clear();
  $.each(villains, function(index, val) {
    let $li = $('<li>'+val.name+'</li>');


    $($vilList).on('click', $li, function() {
     $('#mga-info').text('This Works')
    })
    $($vilList).append($li);
    console.log($vilList)
    console.log($li.text())
  });

  $('#mga-info').append($vilList)
});
//Options
//Options should show a menu item for travel log once clicked it should show the places you have been *should be stored when the travel button is clicked
$('opt-btn').on('click', function() {

});
//Transmit
//Transmit button allows you to use enter instead of mouse not sure if necessary for this iteration
$('#trans-btn').on('click', function() {

});
//Cancel
//Cancel button should go back a menu and from main menu ask to quit game
$('#canc-btn').on('click', function() {

});


}); //End of document




