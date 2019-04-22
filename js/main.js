var list = [
  {"description":"rice","amount":"4","value":"5.40"}, 
  {"description":"beer","amount":"7","value":"1.70"}, 
  {"description":"meat","amount":"1","value":"15.40"}
 
];

function getTotal(list)
{
    
    var total = 0;
    for(var key in list)
    {
        total += list[key].value * list[key].amount
    }
    return total;
}

function setList(list)
{
    var table = '<thead><tr><th scope="col">Desription</td><th scope="col">Amount</td><th scope="col">Value</td><th scope="col">Action</td></tr></thead><tbody>';
    for(var key in list)
    {
        table +='<tr><th scope="col">'+ list[key].description +'</td><th scope="col">'+ list[key].amount +'</td><th scope="col">'+ list[key].value +'</td><th >Edit | Delete</td>';
    }
    table += '</tbody>';
    document.getElementById("listTable").innerHTML = table;
}
setList(list);
console.log(concat.getTotal(list));
