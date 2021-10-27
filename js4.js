console.log("js 4");
const arr =[
    {
        "discount_ranges": "10-25",
        "title": "Giảm từ 10% đến 25%",
        "quantity": 4434
    },
    {
        "discount_ranges": "25-50",
        "title": "Giảm từ 25% đến 50%",
        "quantity": 9447
    },
    {
        "discount_ranges": "50-70",
        "title": "Giảm từ 50% đến 70%",
        "quantity": 1240
    },
    {
        "discount_ranges": "70-",
        "title": "Giảm trên 70%",
        "quantity": 123
    }
],

 b = arr.map((item) => { return { key: item.discount_ranges, title: item.title }});
console.log(b);