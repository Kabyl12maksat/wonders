const months = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
];

const daysOfWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

function getById(id) {
    return document.getElementById(id);
}

let date = new Date();

let curMonth = {
    month: date.getMonth(),
    year: date.getFullYear(),
}

let nextMonth = {
    month: curMonth.month + 1,
    year: curMonth.year,
}

function showMonth({year, month}) {
    const calendar = document.createElement('div');
    calendar.classList.add('days');

    calendar.id = 'days';

    const monthTitle = document.createElement('div');
    monthTitle.classList.add('month-title');
    monthTitle.textContent = `${months[month]} ${year}`;


    let firstDayOfMonth = new Date(year, month, 7).getDay(); 
    let lastDayOfMonth = new Date(year, month + 1, 0).getDate();

    for (let i = 1; i <= lastDayOfMonth; i++) {
        if (i === 1) {
            for (let j = 0; j < firstDayOfMonth; j++) {
                let day = document.createElement('div');
                day.classList.add('day-title');
                calendar.appendChild(day);
            }
        }

        let day = document.createElement('div');
        day.textContent = i;
        day.classList.add('day-title');
        day.dataset.date = new Date(year, month, i).toLocaleDateString();
        day.addEventListener('click', () => {
            paintDay(day);
        });
        allDays.push(day);
        calendar.appendChild(day);

        if (i === lastDayOfMonth) {
            let remainDays = new Date(year, month, i).getDay();
            let counter = 1;

            for (remainDays; remainDays < 7; remainDays++) {
                let day = document.createElement('div');
                day.classList.add('day-title');
                calendar.appendChild(day);
                counter++;
            }
        }
    }

    const monthBlock = document.createElement('div');
    monthBlock.classList.add('month');
    monthBlock.append(monthTitle, createDaysTitle(), calendar);

    getById('month-box').append(monthBlock);
}

let counterClick = 0;
let allDays = [];
let clickedDay = [];
let betweenDays = [];



function paintDay(day) {
    if (counterClick > 1) {
        resetPaintedDays();
    }

    if (clickedDay.length && day.dataset.date < clickedDay[0].dataset.date) {
        return;
    }

    clickedDay.push(day);

    if (counterClick === 1) {
        let first = allDays.indexOf(clickedDay[0]);
        let last = allDays.indexOf(clickedDay[1]);

        betweenDays = allDays.slice(first + 1, last);
        betweenDays.forEach(item => item.style.backgroundColor = '#cce5ff');
    }


    console.log(clickedDay[0].dataset.date);
    day.style.backgroundColor = '#007bff';
    counterClick++;
}

function createDaysTitle() {
    const daysTitleBlock = document.createElement('div');
    daysTitleBlock.classList.add('daysTitle');

    daysOfWeek.forEach(item => {
        let day = document.createElement('div');
        day.textContent = item;
        day.classList.add('day-title');
        daysTitleBlock.appendChild(day);
    });

    return daysTitleBlock;
}



function showNextMonth() {
    if (curMonth.month === 11) {
        curMonth.month = 0;
        curMonth.year++;
    } else {
        curMonth.month++;
    }

    if (nextMonth.month === 11) {
        nextMonth.month = 0;
        nextMonth.year++;
    } else {
        nextMonth.month++;
    }

    clearBlock();
    createMonths();
}

function showPrevMonth() {
    if (curMonth.month === 0) {
        curMonth.month = 11;
        curMonth.year--;
    } else {
        curMonth.month--;
    }

    if (nextMonth.month === 0) {
        nextMonth.month = 11;
        nextMonth.year--;
    } else {
        nextMonth.month--;
    }

    clearBlock();
    createMonths();
}






function createMonths() {
    showMonth(curMonth);
    showMonth(nextMonth);
}


function createCalendar() {
    getById('next').addEventListener('click', showNextMonth);
    getById('prev').addEventListener('click', showPrevMonth);

    createMonths();
}

function clearBlock() {
    getById('month-box').innerHTML = '';
}

createCalendar();

let showCalendar = false;

function toggleCalendar() {
    const calendar = getById('calendar');
    if (showCalendar) {
        calendar.style.display = 'none';
    } else {
        calendar.style.display = 'block';
    }
    showCalendar = !showCalendar;
}

getById('hide').addEventListener('click', toggleCalendar);


const resetBtn = getById('reset');
const applyBtn = getById('apply');  
const returnSpan = getById('return');
const departSpan = getById('depart');

function resetPaintedDays(withSpans) {
    counterClick = 0;
        clickedDay.forEach(item => item.style.backgroundColor = 'inherit');
        clickedDay = [];
        betweenDays.forEach(item => item.style.backgroundColor = 'inherit');
        betweenDays = [];

        if (withSpans) {
            returnSpan.textContent = 'Return';
            departSpan.textContent = 'Depart';
        }
}

applyBtn.addEventListener('click', () => {
    if (clickedDay.length !== 2) {
        return;
    }

    const [departDate, returnDate] = clickedDay;
    console.log(clickedDay);

    returnSpan.textContent = returnDate.dataset.date;
    departSpan.textContent = departDate.dataset.date;

    toggleCalendar();
});

resetBtn.addEventListener('click', () => {
    resetPaintedDays(true);

});




