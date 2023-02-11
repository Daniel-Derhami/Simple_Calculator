

var flag = 0;

function sqrt_function() {
    cal.display.value = Math.sqrt(cal.display.value);
  flag += 1;
}

function cos_function() {
    cal.display.value = Math.cos(cal.display.value);
    flag += 1;
}

function sin_function() {
    cal.display.value = Math.sin(cal.display.value);
    flag += 1;
}

function Resetfunction(cal) {
    cal.display.value = "";

    flag = 0;
}
