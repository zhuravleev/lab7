let year= +prompt(`Year = `)

function visokost(year) {
    if (year % 400 == 0) {
        return true;
    }
    else if (year % 100 == 0) {
        return false;
    }
    else  if(year % 4 == 0) {
        return true; 
    }
    return false; 
}

alert(visokost(year) ? "Visokostniy" : "Ne visokostniy")