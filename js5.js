var obj = {
    "4_star_and_up": "4 sao trở lên",
    "3_star_and_up": "3 sao trở lên",
    "2_star_and_up": "2 sao trở lên",
    "1_star_and_up": "1 sao trở lên"
}

// var result = Object.keys(obj).map((key) =>[String(key), obj[key]]);
// console.log(result);

const objArray = [];
Object.keys(obj).forEach(key => objArray.push({
    ratingId: key,
    ratingName: obj[key]
}));
console.log(objArray);