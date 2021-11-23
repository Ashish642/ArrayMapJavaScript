// Repeted like twice
let number = new Array();
let repeated_valu = new Array();
for (var i = 1; i <=100; i++) {
    number.push(i);
}

number.forEach(values) => {
let temp1 = values % 10;
let temp2 = Math.trunc(valus / 10);
if (temp1==temp2)
repeated_valu.push(values);

});
repeated_valu.forEach((values)) => {
    console.log(values);
});