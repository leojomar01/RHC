
// ----Arrays-------(for database access)

var GG_section = [
  "Eating",
  'Oral_Hygiene',
  'Toileting_Hygiene',
  'Sit_to_lying',
  'Lying_to_Sitting_on_Side_of_Bed',
  'Sit_to_stand',
  'Chair/Bed-to-Chair',
  'Toilet_Transfer',
  'Does_the_resident_walk_10_feet',
  'Walk_50_feet_with_two_turns',
  'Walk_150_feet'
];

var GG = [
{
  value:4,
  text: "1. Independent"
},
{
  value:4,
  text: "2. Set-up Assistance"
},
{
  value:3,
  text: "3. Supervision or Touching Assistance"
},
{
  value:2,
  text: "4. Partial / Moderate Assistance"
},
{
  value:1,
  text: "5. Substantial / Maximal Assistance"
},
{
  value:0,
  text: "6. Dependent"
},
{
  value:0,
  text: "7. Refused"
},
{
  value:0,
  text: "8. Not Applicable"
},
{
  value:0,
  text: "10. Not Attempted Due to Environmental Limitations"
},
{
  value:0,
  text: "11. Not Attempted"
}
];





// -----------------DOM for results--------------

for(var i=1;i<=100;i++){
  var z = document.createElement("option");
  z.setAttribute("value", i);
  var t = document.createTextNode(i);
  z.appendChild(t);
  document.getElementById("days").appendChild(z);
}


GG_section.forEach(element => {
    console.log(element)
    for(var j=0;j<=9;j++){
    var z = document.createElement("option");
    z.setAttribute("value", GG[j].value);
    var t = document.createTextNode(GG[j].text);
    z.appendChild(t);
    document.getElementById(element).appendChild(z);
}
});


//-------------------- Event lister--------------------



// PPD_DAY
console.log("asdasdasd");


const PPD_Day_Selected = document.getElementById('days');

PPD_Day_Selected.addEventListener('change', (event) => {
  const PPD_Day = document.querySelector('.PPD_Day');
  PPD_Day.textContent = `PPD Day ${event.target.value}`;
});

// HIPS CODE

const HIPPS_CODE = document.getElementById('AT');
HIPPS_CODE.addEventListener('change', (event) => {
    console.log("ss");
  const PPD_Day = document.querySelector('.HIPPS_CODE');
  PPD_Day.textContent = `IATF${event.target.value}`;
});
