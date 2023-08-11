setInterval(()=>{

    let D = new Date()
    let h = D.getHours()
    let m=D.getMinutes()
    let s= D.getSeconds()
    let d=D.getDate()

    hrotation=30 * h + m/2
    mrotation=6 * m
    srotation=6 * s

    document.getElementById('hour').style.transform=`rotate(${hrotation}deg) `
    document.getElementById('minute').style.transform=`rotate(${mrotation}deg)`
    document.getElementById('second').style.transform=`rotate(${srotation}deg)`

    document.getElementById('inputvalue').value=d
    
   
},1000)

