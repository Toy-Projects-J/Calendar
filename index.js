let date = new Date();


// 이것 renderCalendar로 묶음
const renderCalendar = () => {
    const viewYear = date.getFullYear();
    const viewMonth = date.getMonth();

    console.log('현재 년도 '+viewYear); 
    console.log('현재 달 - 1 '+viewMonth) ;   
    document.querySelector('.current-year-month-wrap').textContent = `${viewYear}년 ${viewMonth + 1}월`;

    const prevLast = new Date(viewYear, viewMonth, 0);
    const thisLast = new Date(viewYear, viewMonth + 1, 0);

    console.log('지난달 달력 '+prevLast); 
    console.log('이번달 달력 '+thisLast);

    const PLDate = prevLast.getDate();
    const PLDay = prevLast.getDay(); 
    //getDay : 요일 출력 함수 (월 = 1, 화 = 2, 수 = 3)

    console.log('지난달 마직막 날짜 '+PLDate); 
    console.log('지난달 마지막 요일 목 '+PLDay);

    const TLDate = thisLast.getDate();
    const TLDay = thisLast.getDay();

    console.log('이번달 마직막 날짜 '+TLDate)
    console.log('이번달 마직막 요일 토  '+TLDay)

    const prevDates = [];
    const thisDates = [...Array(TLDate + 1).keys()].slice(1);
    const nextDates = [];
    // Array(TLDate + 1) : 길이가 30인 배열 index+1
    // slice() : 같은 종류의 element를 n번째부터 n번째 까지 묶어서 선택
    console.log(thisDates)

    if(PLDay !== 6 ){
        for(let i=0; i<PLDay + 1; i++){
            prevDates.unshift(PLDate - i);
        }
    }

    for (let i = 1; i<7-TLDay; i++){
        nextDates.push(i);
    }

    const dates = prevDates.concat(thisDates, nextDates);
    const firstDateIndex = dates.indexOf(1);
    const lastDateIndex = dates.lastIndexOf(TLDate);


    console.log(dates)

    dates.forEach((date, i)=>{
        const condition = i >= firstDateIndex && i < lastDateIndex + 1
                          ? 'this'
                          : 'other';
        dates[i] = `<div class="date"><span class=${condition}>${date}</span></div>`
    });

    document.querySelector('.dates').innerHTML = dates.join('');

    const today = new Date();
    if(viewMonth === today.getMonth() && viewMonth === today.getFullYear()){
        for(let date of document.querySelectorAll('.this')){
            if(+date.innerText === today.getDate()){
                date.classList.add('today');
                break;
            }
        }        
    }
};

renderCalendar();

const prevMonth = () =>{
    date.setMonth(date.getMonth()-1);
    renderCalendar();
}
const nextMonth = () =>{
    date.setMonth(date.getMonth()+1);
    renderCalendar();
}

const goToday = () =>{
    date = new Date();
    renderCalendar();
}

