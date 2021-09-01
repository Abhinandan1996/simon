btn = document.querySelectorAll("button");
start = document.querySelector(".start");
test = document.querySelector(".test");
over = document.querySelector(".over")
let arr = [];
let i = 1;
async function round(){
  start.classList.add("disable");
  arr = [];
  test.classList.add("tst");
  for(let e = 0; e < i; e++){
    let temp = Math.random() * 4;
    temp = Math.floor(temp);
    arr.push(temp);
  }
  test.innerHTML = arr;
  for(let e = 0; e < i; e++){
    await sleep(1000);
    btn[arr[e]].classList.add("bigborder");
    await sleep(1000);
    btn[arr[e]].classList.remove("bigborder");
  }
  await sleep(500);
  test.classList.remove("tst");
}
over.classList.add("disable");


for(let b = 0; b < 4; b++){
  btn[b].addEventListener("click",()=>{
    if(b !== arr.shift()){i = 1; over.classList.remove("disable");}
    else if(arr.length === 0){i++; round();}
  })
}
over.addEventListener("click",() => {over.classList.add("disable"); start.classList.remove("disable");})



start.addEventListener("click",round)
function sleep(ms){
  return new Promise((accept) => {
    setTimeout(() => {
      accept();
      }, ms);
  })
}
