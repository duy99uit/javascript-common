
const
data = "[\"https://i.imgur.com/PAYXC2n.jpg\",\"https://i.imgur.com/bEfjjxA.jpg\"]",
parsed = JSON.parse(data);

console.log(parsed.length);
parsed.map((item) =>{
    console.log(item);
})