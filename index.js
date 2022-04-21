const date = new Date();

const viewYear = date.getFullYear();
const viewMonth = date.getMonth();

// console.log(viewYear); console.log(viewMonth) ;
document.querySelector('.current-year-month-wrap').textContent = `${viewYear}년 ${viewMonth + 1}월`;

const prevLast = new Date(viewYear, viewMonth, 0);
const thisLast = new Date(viewYear, viewMonth + 1, 0);

// console.log(preLast); console.log(thisLast);

const PLDate = prevLast.getDate();
const PlDay = prevLast.getDay();

// console.log(PLDate); console.log(PlDay);

const TLDate = thisLast.getDate();
console.log(TLDate)

