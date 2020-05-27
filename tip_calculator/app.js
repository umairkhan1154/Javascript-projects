const tipcal=() => {
    let amount = document.getElementById('bill_amount').value;

    let perc = document.getElementById('tip_percent').value;

    let tip = amount * (perc/100);

    let total = tip + parseInt(amount);
   
    document.getElementById('tip amount').value = tip;
    document.getElementById('total bill').value = total;

}