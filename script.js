
const billTotalInput = document.getElementById("billTotalInput");
const tipInput = document.getElementById("tipInput");
const numberOfPeople = document.getElementById("numberOfPeople");
const perPersonTotal = document.getElementById("perPersonTotal");


let people = 1;


const calculateBill = () => {
 
  const billInputConverted = Number(billTotalInput.value);

  
  const tipInputConverted = Number(tipInput.value) / 100;

 
  const totalTip = billInputConverted * tipInputConverted;

  
  const tipPlusBill = (totalTip + billInputConverted) / people;
  
  perPersonTotal.innerHTML = `$${tipPlusBill.toFixed(2)}`;
};


const increasePeople = () => {
  
  people++;
  
  numberOfPeople.innerHTML = people;
  
  const billInputConverted = Number(billTotalInput.value);

  const tipInputConverted = Number(tipInput.value) / 100;

  const totalTip = billInputConverted * tipInputConverted;

  const tipPlusBill = (totalTip + billInputConverted) / people;
  
  perPersonTotal.innerHTML = `$${tipPlusBill.toFixed(2)}`
};


const decreasePeople = () => {
  
  if (people <= 1) {
    return;
  } else {
    
    people--;
    
    numberOfPeople.innerHTML = people;

    
    const billInputConverted = Number(billTotalInput.value);

    const tipInputConverted = Number(tipInput.value) / 100;

    const totalTip = billInputConverted * tipInputConverted;

    const tipPlusBill = (totalTip + billInputConverted) / people;
    
    perPersonTotal.innerHTML = `$${tipPlusBill.toFixed(2)}`
  }
};
