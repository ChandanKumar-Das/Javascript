
function Handelamount(){
    document.getElementById('txtamount').value = document.getElementById('rangeamount').value
    console.log(document.getElementById('rangeamount').value)
}
function Hendelyear(){
    document.getElementById('txtyear').value = document.getElementById('rangeyear').value
}
function Hendelpercentage(){
    document.getElementById('txtpercentage').value = document.getElementById('rangepercentage').value
}

function Hendelcalculation (){

    var p = parseInt(document.getElementById('txtamount').value);
    var n = parseInt(document.getElementById('txtyear').value)*12;
    //console.log(n)
    var r = parseFloat(document.getElementById('txtpercentage').value)/12/100
    console.log(r)
    var emi = p * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);

    document.getElementById('result').innerHTML="Monthly EMI: "+emi.toFixed(2);
    document.getElementById('yearresult').innerHTML='Yearly EMI: '+(emi*12).toFixed(2)
}

function setAmount(){
    document.getElementById('rangeamount').value = document.getElementById('txtamount').value
    //console.log(document.getElementById('rangeamount').value)
    if(document.getElementById('rangeamount').value == 502500)
        return document.getElementById('rangeamount').value =5000
}
function setYear(){
    console.log(document.getElementById('txtyear').value)
    document.getElementById('rangeyear').value = document.getElementById('txtyear').value
    if(document.getElementById('rangeyear').value == ' ')
        return document.getElementById('rangeyear').value = 0
}
function setPercentage(){
    document.getElementById('rangepercentage').value = document.getElementById('txtpercentage').value
    if(document.getElementById('rangepercentage').value == '')
        return document.getElementById('rangepercentage').value = 0
}


