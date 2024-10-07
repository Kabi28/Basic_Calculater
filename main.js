function addNum(){
    var input1 = document.getElementById('input1');
    var input2 = document.getElementById('input2');
    document.getElementById('result').innerHTML = parseFloat(input1.value) + parseFloat(input2.value);
    clear();
}
function subNum(){
    var input1 = document.getElementById('input1');
    var input2 = document.getElementById('input2');
    document.getElementById('result').innerHTML = parseFloat(input1.value) - parseFloat(input2.value);
    clear();
}
function mulNum(){
    var input1 = document.getElementById('input1');
    var input2 = document.getElementById('input2');
    document.getElementById('result').innerHTML = parseFloat(input1.value) * parseFloat(input2.value);
    clear();
}
function divNum(){
    var input1 = document.getElementById('input1');
    var input2 = document.getElementById('input2');
    document.getElementById('result').innerHTML = parseFloat(input1.value) /  parseFloat(input2.value);
    clear();
}

function clear(){
    input1.value = ' ';
    input2.value = ' ';
}
