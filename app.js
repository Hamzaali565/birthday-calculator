function birth() {
            
    let date = document.querySelector('#date').value;
    
    
    
    let date1 = new Date(date);
    console.log(date1);
    let month1 = date1.getMonth();
    console.log(month1 );
    let Date1 = date1.getDate();
    console.log(Date1);
    let year1 = date1.getFullYear();
    console.log(year1);
    let milli = date1.getTime();
    // console.log(milli);

    let date2 = new Date();
    // let days = date2.getDay();
    // console.log(days)
    let month2 = date2.getMonth();
    console.log(month2);
    let Date2 = date2.getDate();
    console.log(Date2);
    let year2 = date2.getFullYear();
    console.log(year2);
    let milli1 = date2.getTime();
    // console.log(milli1);
    let age = Math.ceil((milli1 - milli) / (1000 * 60 * 60 * 24) * 0.00273973);
    let para2 = document.querySelector('#para2').innerHTML = age -1;
    let date3;
    let date4;
    let month3;

    // if (Date2 > Date1) {
        //     date3 = Date2 - Date1;
    //     console.log(date3);

    // }
if (Date1 === Date2 && month1 === month2){
    alert('Happy BirthDay to you 🥳🎂🍰')
}

    if (month1 === month2) {
        if (Date1 < Date2) {
            month3 = year2 + 1;
            console.log(month3)
            let nextBD = new Date(month3, month1, Date1).getTime();
            let para3 = document.querySelector('#para3').innerHTML = Math.ceil((nextBD - milli1) / (1000 * 60 * 60 * 24))
        }
        else {
            date3 = Date1 - Date2;
            let para = document.querySelector('#para3').innerHTML = date3;
        }

    }
    if (month1 > month2) {
        // date4 = date3;
        // console.log(date4)
        month3 = year2;
        console.log(month3)
        let nextBD = new Date(month3, month1, Date1).getTime();
        let para3 = document.querySelector('#para3').innerHTML = Math.ceil((nextBD - milli1) / (1000 * 60 * 60 * 24))
    }
    if (month1 < month2) {
        month3 = year2 + 1;
        console.log(month3)
        let nextBD = new Date(month3, month1, Date1).getTime();
        let para3 = document.querySelector('#para3').innerHTML = Math.ceil((nextBD - milli1) / (1000 * 60 * 60 * 24))
    }
}