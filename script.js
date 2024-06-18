'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  movementsDates: [
    '2023-11-18T21:31:17.178Z',
    '2023-12-23T07:42:02.383Z',
    '2024-01-28T09:15:04.904Z',
    '2024-04-01T10:17:24.185Z',
    '2024-05-08T14:11:59.604Z',
    '2024-05-27T17:01:17.194Z',
    '2024-07-11T23:36:17.929Z',
    '2024-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT',
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  movementsDates: [
    '2023-11-01T13:15:33.035Z',
    '2023-11-30T09:48:16.867Z',
    '2023-12-25T06:04:23.907Z',
    '2024-01-25T14:18:46.235Z',
    '2024-02-05T16:33:06.386Z',
    '2024-04-10T14:43:26.374Z',
    '2024-06-25T18:49:59.371Z',
    '2024-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  movementsDates: [
    '2023-11-01T13:15:33.035Z',
    '2023-11-30T09:48:16.867Z',
    '2023-12-25T06:04:23.907Z',
    '2024-01-25T14:18:46.235Z',
    '2024-02-05T16:33:06.386Z',
    '2024-04-10T14:43:26.374Z',
    '2024-06-25T18:49:59.371Z',
    '2024-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  movementsDates: [
    '2023-11-01T13:15:33.035Z',
    '2023-11-30T09:48:16.867Z',
    '2023-12-25T06:04:23.907Z',
    '2024-01-25T14:18:46.235Z',
    '2024-02-05T16:33:06.386Z',
  ],
  currency: 'EUR',
  locale: 'de-DE',
};
const account5 = {
  owner: 'Mehdi Boussoufi',
  movements: [430, 1000, 700, 50, 90, -790, 3210, -1000, 50],
  interestRate: 1.2,
  pin: 5555,
  movementsDates: [
    '2023-11-01T13:15:33.035Z',
    '2023-11-30T09:48:16.867Z',
    '2023-12-25T06:04:23.907Z',
    '2024-01-25T14:18:46.235Z',
    '2024-02-05T16:33:06.386Z',
    '2024-04-10T14:43:26.374Z',
    '2024-06-25T18:49:59.371Z',
    '2024-07-26T12:01:20.894Z',
    '2024-08-26T12:01:20.894Z',
  ],
  currency: 'CHF',
  locale: 'de-CH',
};
const account6 = {
  owner: 'Yassine moalla',
  movements: [430, 1000, 700, 50, 90, 430, 1000, 700],
  interestRate: 1.3,
  pin: 6666,
  movementsDates: [
    '2023-11-01T13:15:33.035Z',
    '2023-11-30T09:48:16.867Z',
    '2023-12-25T06:04:23.907Z',
    '2024-01-25T14:18:46.235Z',
    '2024-02-05T16:33:06.386Z',
    '2024-04-10T14:43:26.374Z',
    '2024-06-25T18:49:59.371Z',
    '2024-07-26T12:01:20.894Z',
  ],
  currency: 'MAD',
  locale: 'ar-MA',
};
const account7 = {
  owner: 'Marwan Kobi',
  movements: [430, 1000, 700, 50, 90, -200, 340, -300],
  interestRate: 1,
  pin: 7777,
  movementsDates: [
    '2023-11-01T13:15:33.035Z',
    '2023-11-30T09:48:16.867Z',
    '2023-12-25T06:04:23.907Z',
    '2024-01-25T14:18:46.235Z',
    '2024-02-05T16:33:06.386Z',
    '2024-04-10T14:43:26.374Z',
    '2024-02-28T18:49:59.371Z',
    '2024-03-03T17:01:20.894Z',
  ],
  currency: 'SAR',
  locale: 'ar-SA',
};

const accounts = [
  account1,
  account2,
  account3,
  account4,
  account5,
  account6,
  account7,
];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
const displayDate = function (date, locale, year, month, day) {
  const days = Math.floor(Math.abs(new Date() - date) / (1000 * 60 * 60 * 24));

  if (days === 0) return 'Today';
  if (days === 1) return 'Yesterday';
  if (days <= 7) return `${days} Days ago`;
  return new Intl.DateTimeFormat(locale).format(new Date(year, month, day));
};

const formatCur = function (locale, cur, val) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: cur,
  }).format(val);
};

const display = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movement = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;
  movement.forEach(function (val, i) {
    const day = `${new Date(acc.movementsDates[i]).getDate()}`.padStart(2, 0);
    const month = `${new Date(acc.movementsDates[i]).getMonth()}`.padStart(
      2,
      0
    );
    const year = new Date(acc.movementsDates[i]).getFullYear();

    const type = val > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__date">${displayDate(
        new Date(year, +month, +day),
        acc.locale,
        year,
        +month,
        +day
      )}</div>
      <div class="movements__value">${formatCur(
        acc.locale,
        acc.currency,
        val.toFixed(2)
      )}</div>
    </div>
  `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

let sorted = false;

btnSort.addEventListener('click', function (e) {
  e.preventDefault();

  display(currentAccount, !sorted);
  sorted = !sorted;
});

const balance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0).toFixed(2);
  labelBalance.textContent = formatCur(acc.locale, acc.currency, acc.balance);
};

const displaySummary = function (acc) {
  const sumIn = acc.movements
    .filter(m => m > 0)
    .reduce((acc, val) => acc + val, 0)
    .toFixed(2);
  labelSumIn.textContent = formatCur(acc.locale, acc.currency, sumIn);

  const out = Math.abs(
    acc.movements.filter(m => m < 0).reduce((acc, val) => acc + val, 0)
  ).toFixed(2);
  labelSumOut.textContent = formatCur(acc.locale, acc.currency, out);

  const interest = acc.movements
    .filter(m => m > 0)
    .map(m => (m * acc.interestRate) / 100)
    .filter(m => m > 1)
    .reduce((acc, val) => acc + val, 0)
    .toFixed(2);
  labelSumInterest.textContent = formatCur(acc.locale, acc.currency, interest);
};

accounts.forEach(function (acc) {
  acc.username = acc.owner
    .toLocaleLowerCase()
    .split(' ')
    .map(val => val[0])
    .join('');
});

let currentAccount, prooud;
const displayTime = function () {
  let time = new Date(60 * 10 * 1000);
  const timer = function () {
    labelTimer.textContent = new Intl.DateTimeFormat(currentAccount.locale, {
      second: 'numeric',
      minute: 'numeric',
    }).format(time);

    if (time.getTime() === new Date(0).getTime()) {
      clearInterval(prooud);
      labelWelcome.textContent = 'Log in to get started';
      containerApp.style.opacity = 0;
    }
    time = new Date(time - new Date(1000));
  };
  timer();
  const prooud = setInterval(timer, 1000);
  return prooud;
};
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    const now = new Date();
    // const day = `${now.getDate()}`.padStart(2, 0);
    // const month = `${now.getMonth() + 1}`.padStart(2, 0);
    // const year = now.getFullYear();
    // const hour = `${now.getHours()}`.padStart(2, 0);
    // const min = `${now.getMinutes()}`.padStart(2, 0);
    const options = {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    };
    const time = new Intl.DateTimeFormat(currentAccount.locale, options).format(
      now
    );

    labelDate.textContent = `${time}`;
    labelWelcome.textContent = `Welcome Mr ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 1;
    inputLoginUsername.value = inputLoginPin.value = '';
    if(prooud) clearInterval(prooud)
    prooud = displayTime();
    
    updateUI(currentAccount);
  } else {
    labelWelcome.textContent = 'Log in to get started';
    inputLoginUsername.value = inputLoginPin.value = '';
    containerApp.style.opacity = 0;
  }
});
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const transferTo = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  const amount = Number(inputTransferAmount.value);
  let amountTo;
  inputTransferTo.value = inputTransferAmount.value = '';
  if(prooud) clearInterval(prooud)
  prooud = displayTime();
  if (
    transferTo &&
    amount > 0 &&
    transferTo !== currentAccount &&
    currentAccount.balance >= amount
  ) {
    if (transferTo.currency === 'USD' && currentAccount.currency === 'MAD') {
      console.log('its work');
      amountTo = amount * 0.1;
    } else {
      amountTo = amount;
    }
    if (transferTo.currency === 'MAD' && currentAccount.currency === 'USD') {
      console.log('its work');
      amountTo = amount * 10;
    } else {
      amountTo = amount;
    }
    transferTo.movements.push(amountTo);
    currentAccount.movements.push(-amount);
    currentAccount.movementsDates.push(new Date().toISOString());
    transferTo.movementsDates.push(new Date().toISOString());
    updateUI(currentAccount);
  }
});
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amountLoan = Math.floor(inputLoanAmount.value);
  if(prooud) clearInterval(prooud)
  prooud = displayTime();
  if (
    amountLoan > 0 &&
    currentAccount.movements.some(val => val >= 0.1 * amountLoan)
  ) {
    setTimeout(function () {
      currentAccount.movements.push(amountLoan);
      currentAccount.movementsDates.push(new Date().toISOString());
      updateUI(currentAccount);
    }, 2000);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  const closeUsername = inputCloseUsername.value;
  const closePin = Number(inputClosePin.value);

  if (
    currentAccount.username === closeUsername &&
    currentAccount.pin === closePin
  ) {
    const indexUser = accounts.findIndex(val => val.username === closeUsername);
    accounts.splice(indexUser, 1);
  }
  inputCloseUsername.value = inputClosePin.value = '';
  labelWelcome.textContent = 'Log in to get started';
  containerApp.style.opacity = 0;
});

const updateUI = function (acc) {
  displaySummary(acc);
  display(acc);
  balance(acc);
};

// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
/*
/////////////////////////////////////////////////
// Simple Array Methods
let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

// SPLICE
// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

// REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// JOIN
console.log(letters.join(' - '));


///////////////////////////////////////
// The new at Method
const arr3 = [23, 11, 64];
console.log(arr3[0]);
console.log(arr3.at(0));

// getting last array element
console.log(arr3[arr3.length - 1]);
console.log(arr3.slice(-1)[0]);
console.log(arr3.at(-1));

console.log('jonas'.at(0));
console.log('jonas'.at(-1));


///////////////////////////////////////
// Looping Arrays: forEach

// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log('---- FOREACH ----');
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});
// 0: function(200)
// 1: function(450)
// 2: function(400)
// ...


///////////////////////////////////////
// forEach With Maps and Sets
// Map


currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});
*/

//Coding Challenge #1
/*

const Julia = [3, 5, 2, 12, 7];
const Kate = [4, 1, 15, 8, 3];
const Julia2 = [9, 16, 6, 8, 3];
const Kate2 = [10, 5, 6, 1, 4];
const checkDogs = function (j, k) {
  const jCorr = j.slice(1, -2);
  const both = jCorr.concat(k);
  const fn = function (val, i) {
    const f =
      val > 3
        ? `Dog number ${i + 1} is an adult, and is ${val} years old`
        : `Dog number ${i + 1} is still a puppy �`;
    console.log(f);
  };
  both.forEach(fn);
};
checkDogs(Julia, Kate);
console.log('================================================================');
let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

// SPLICE
// console.log(arr.splice(2));
console.log(arr, 'a');
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);
*/

//Coding Challenge #2

const Data1 = [5, 2, 4, 1, 1, 8, 3];
const Data2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = function (ages) {
  const data1HumanAge = ages
    .map(val => (val > 2 ? 16 + val * 4 : 2 * val))
    .filter(val => val > 18)
    .reduce((acc, val, i, arr) => acc + val / arr.length, 0);
  console.log(data1HumanAge);
};

//calcAverageHumanAge(Data1);

/* 
const a = new Array(5)
a.fill(1,1)
let b = Array.from({length:7},(_,i)=>i+1)
console.log(a);
console.log(b);

let d = Array.from(document.querySelectorAll('.movements__value'),(a)=>Number(a.textContent.replace('€','')))
console.log(d);

let e = [...document.querySelectorAll('.movements__value')].map((a)=>Number(a.textContent.replace('€','')));

console.log(e);

let acx = [1,5,8,-45,-4];
const opening = acx.reduce((acc,val)=> {
  return acc.push(val)
  //return acc;
},[])
console.log(opening);*/
//Coding Challenge #2
/*
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];


dogs.forEach(function(val,i){
  //recommendedFood = weight ** 0.75 * 28 to Kg
  dogs[i].recommendedFood = Math.trunc(val.weight ** 0.75 * 28) ; 
})
console.log(dogs);


const indexDogSarah = dogs.map((val)=>val.owners).findIndex((val)=>val.includes("Sarah"))
dogs[indexDogSarah].curFood > dogs[indexDogSarah].recommendedFood ? console.log(' it\'s eating too much'):console.log('too little');


const ownerDog = dogs.map((val)=>val.owners);
const ownersEatTooMuch = ownerDog.filter((_,i)=>dogs[i].curFood > dogs[i].recommendedFood).flat()
const ownersEatTooLittle = ownerDog.filter((_,i)=>dogs[i].curFood < dogs[i].recommendedFood).flat()
console.log(ownersEatTooMuch,ownersEatTooLittle);


console.log(ownersEatTooMuch.join(' and ')+'\'s dogs eat too much!',ownersEatTooLittle.join(' and ')+'\'s dogs eat too little!'); 


console.log(dogs.some((val)=>val.curFood === val.recommendedFood)); 


console.log(dogs.some((val)=>val.curFood > (val.recommendedFood * 0.90) && val.curFood < (val.recommendedFood * 1.10))); 


const okayAmount = dogs.filter((val)=>val.curFood > (val.recommendedFood * 0.90) && val.curFood < (val.recommendedFood * 1.10));
console.log(okayAmount);


const dogs2 = dogs.slice().sort((a,b)=>a.recommendedFood - b.recommendedFood)
console.log(dogs2);
*/

console.log(isNaN('Hello'));
console.log(Number.isNaN(12));
console.log(NaN == NaN);
console.log(typeof NaN);
console.log(Number.isNaN('Hello'));
console.log(0.1 + 0.2);
console.log(parseInt('10110px', 2));
console.log(23 + ' helloo');

const round = function (min, max) {
  // let x = Math.trunc(Math.random() * max-min)  -1
  // console.log(x);
  // return  x + min + 1 2
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
console.log(round(2, 5));

console.log(new Date(332617));
console.log(new Date(2005, 2, 1, 12, 30));
console.log(new Date('Mar 01 2005 12:30:00').toISOString());
console.log(new Date('2005-03-01T12:30:00.000Z').getTime());

let ii = 0;
const ret = function(){
  let i = 0
  const abc = function(name){
    console.log("hello " + name);
    i++
    ii++
  }
  const test = setInterval(abc,1000, 'john')
  return test
  //const stop = setInterval(_=> i===3 ? clearInterval(test) : null,1000)
}
//const stopp = setInterval(_=> ii===3 ? clearInterval(test) : null,1000)
let bb = ret()
console.log(bb);
console.log(bb);
console.log(bb);
console.log(bb);

