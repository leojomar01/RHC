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
