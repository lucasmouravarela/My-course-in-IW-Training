function calendar(){
    let calendarEl = document.getElementById('main');
    let calendar = new FullCalendar.Calendar(calendarEl, {
        plugins: [ 'dayGrid' ]
    });

    return calendar.render();
}