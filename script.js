let main = document.getElementById("main")
let arr = ["https://i.pinimg.com/564x/38/61/6f/38616f4a0f45ba196a176620cd564e87.jpg",
"https://i.pinimg.com/564x/bf/95/34/bf953419d76bf747cba69b55e6e03957.jpg",
"https://i.pinimg.com/564x/63/fe/66/63fe6629e760a34dbd512afeb6f5062a.jpg",
"https://i.pinimg.com/564x/37/9e/ba/379ebaa710c767b0bcf7e9697a5a0171.jpg",
"https://i.pinimg.com/564x/04/49/9b/04499b23327a48c6c23813777cf3341d.jpg",
"https://i.pinimg.com/564x/94/48/31/9448314add914df1237d538394bfa6d2.jpg"]
let s = "";
for (let i = 1; i <= 40; i++){
    let r = Math.floor(Math.random()*arr.length)
    s += `<div class="card"><img src=${arr[r]}></div>`;
}
main.innerHTML = s;
