module.exports = {
  "rules": {
    // Note: you must disable the base rule as it can report incorrect errors
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "warn"
  }
};

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
