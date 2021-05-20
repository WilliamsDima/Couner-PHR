
const breitovo = {

    houses: [9, 4, 6, 14, 587, 14, 0, 7, 19, 10,
             0, 0, 6, 15, 30, 15, 7, 0, 10, 4,
             31, 15, 40, 0, 1, 30, 6, 10, 6, 25,
             7, 12, 0, 16, 2, 16, 1, 3, 47, 31,
             3, 5, 25, 1, 18, 53, 1, 10, 7, 16,
             2, 18, 4, 25, 9, 13, 8, 24, 11],

    people: [1, 4, 14, 1, 3618, 16, 11, 2, 16, 20,
             2, 2, 0, 16, 58, 31, 12, 2, 17, 9,
             24, 39, 58, 13, 5, 57, 22, 14, 13, 11,
             65, 8, 6, 22, 5, 35, 1, 5, 121, 20,
             3, 12, 39, 3, 0, 97, 3, 19, 6, 4,
             4, 2, 2, 16, 16, 2, 234, 25, 17],
    
    strits: {
        houses: [3, 27, 10, 35, 35, 16, 27, 10, 15, 7,
                 4, 2, 0, 24, 2, 14, 11, 5, 7, 20,
                 25, 8, 18, 4, 10, 9, 3, 3, 80, 12,
                 82, 18, 27, 39, 35, 3, 1, 1, 6, 11,
                 52, 0, 21, 5, 30, 31, 13, 15, 37, 1,
                 7, 1, 14, 22, 15, 6, 4],

        people: [9, 103, 40, 133, 133, 61, 103, 40, 60, 24,
                 16, 8, 0, 96, 8, 56, 44, 20, 24, 80,
                 100, 32, 72, 16, 40, 36, 12, 12, 320, 48,
                 350, 72, 103, 156, 133, 12, 4, 4, 24, 44,
                 208, 0, 84, 20, 120, 124, 52, 60, 66, 4,
                 27, 4, 56, 88, 60, 24, 8]
    }
}

const gorelovo = {

    houses: [120, 7, 4, 10, 18, 51, 38, 0, 28, 28, 
             47, 8, 1, 0, 2, 16, 5, 13, 25, 0,
             48, 27, 73, 91, 85, 6, 65, 37, 25, 41,
             53, 15, 15, 2, 39, 12, 34, 15, 115, 26,
             2, 28],

    people: [243, 0, 5, 4, 23, 52, 12, 0, 4, 9, 
             36, 2, 0, 0, 0, 10, 0, 7, 4, 0,
             57, 11, 120, 92, 60, 0, 133, 29, 12, 42,
             21, 2, 9, 0, 29, 1, 25, 6, 169, 10, 
             0, 30]
}

const prozorovo = {

    houses: [1, 4, 0, 13, 11, 6, 29, 6, 0, 41,
             9, 0, 20, 20, 4, 29, 16, 1, 0, 18,
             38, 44, 32, 15, 4, 25, 0, 17, 4, 22,
             0, 219, 8, 31, 22, 21, 2, 48, 8, 0,
             55, 64, 2, 56, 68, 8, 9, 0],

    people: [3, 0, 0, 1, 0, 13, 12, 1, 0, 42,
             1, 5, 3, 3, 8, 19, 6, 0, 0, 17,
             55, 37, 47, 53, 12, 26, 4, 0, 9, 12,
             1, 318, 15, 14, 5, 10, 3, 38, 0, 0,
             62, 144, 0, 44, 95, 5, 1, 0]
}

const checkBoxBrg = document.getElementsByClassName('check_B'); //Брейтовское поселение
const checkBoxGr = document.getElementsByClassName('check_G'); //Гореловское поселение
const checkBoxPr = document.getElementsByClassName('check_P'); //Прозоровское поселение

const checkStritsBr = document.getElementsByClassName('check_strin-br'); //Улицы брейтова

const alertInfo = document.getElementsByClassName('alert_info'); //модельное окно
const alertBlock = document.getElementById('alert'); //модельное окно

const button = document.getElementById('button').addEventListener('click', () => {
    calculation()
    alertBlock.classList.add('active');
});

alertBlock.addEventListener('click', () => {
    alertBlock.classList.remove('active');
});

const closeBtn = document.getElementById('close').addEventListener('click', () => {
    alertBlock.classList.remove('active');
});

let arrSumHauses = [];
let arrSumPeople = [];

const calculation = () => {
    arrSumHauses.length = 0;
    arrSumPeople.length = 0;
    let sumHauses = 0;
    let sumPeople = 0;
    alertInfo[0].innerHTML = '';
    alertInfo[1].innerHTML = '';
    alertInfo[2].innerHTML = '';
    let count = 0;

    for(let i = 0; i < checkBoxBrg.length; i++) {
        if(checkBoxBrg[i].checked) {
            arrSumHauses.push(breitovo.houses[i])
            arrSumPeople.push(breitovo.people[i])
            count++;
        }
    }

    for(let i = 0; i < checkBoxGr.length; i++) {
        if(checkBoxGr[i].checked) {
            arrSumHauses.push(gorelovo.houses[i])
            arrSumPeople.push(gorelovo.people[i])
            count++;
        }
    }

    for(let i = 0; i < checkBoxPr.length; i++) {
        if(checkBoxPr[i].checked) {
            arrSumHauses.push(prozorovo.houses[i])
            arrSumPeople.push(prozorovo.people[i])
            count++;
        }
    }

    for(let i = 0; i < checkStritsBr.length; i++) {
        if(checkStritsBr[i].checked) {
            arrSumHauses.push(breitovo.strits.houses[i])
            arrSumPeople.push(breitovo.strits.people[i])
        }
    }

    if(arrSumHauses.length === 0 && arrSumPeople.length === 0) {
        sumHauses = 0; 
        sumPeople = 0;
    } else {
        sumHauses = arrSumHauses.reduce(function(a = 0, b = 0) {
            return a + b;
        });

        sumPeople = arrSumPeople.reduce(function(a = 0, b = 0) {
            return a + b;
        });
    }

    alertInfo[0].innerHTML = alertInfo[0].innerHTML + sumHauses;
    alertInfo[1].innerHTML = alertInfo[1].innerHTML + sumPeople;
    alertInfo[2].innerHTML = alertInfo[2].innerHTML + count;
}
const prevBtn = document.getElementById('prev');

function ya1() {
    prevBtn.setAttribute('href', '#ya1')
}

function ya2() {
    prevBtn.setAttribute('href', '#ya2')
}

prevBtn.addEventListener('click', () => {
    prevBtn.classList.toggle('active');
    let btn = prevBtn.getAttribute('href');
    if(prevBtn.classList.contains('active')){
        setTimeout( ya1, 500)
    } else {
        setTimeout( ya2, 500)
    }
})


const anchors = document.querySelectorAll('a.scroll-to')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href')
    
    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}