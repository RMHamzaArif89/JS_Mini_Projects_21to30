
dat=document.querySelector('.date')
dayName=document.querySelector('.d-name')
month=document.querySelector('.month')
year=document.querySelector('.year')




        var date = new Date();
        var d = date.getDate()
        var dName=date.getDay()
        var m= date.getMonth()
        var y = date.getFullYear()

        weekDay=['sunday','monday','tuesday','wednesday','thursday','friday','saturday']
        monthName=['jan','feb','march','april','may','june','july','august','sepetember','octuber','november','december']






        dat.innerText=d
        month.innerText=monthName[m]
        year.innerText=y
        dayName.innerText=weekDay[dName]
