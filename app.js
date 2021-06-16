const btn = document.querySelector('.btn')
var smallBox = document.querySelector('.small-grid-container').querySelectorAll('.grid-element')
var bigBox = document.querySelector('.grid-container').querySelectorAll('.grid-element')
var container = document.querySelector('.grid-container')
var winning = document.querySelector('.WIN')
var score = document.querySelector('.score')
var movesCount = document.querySelector('.num')
var counter = 0
smallBox = Array.from(smallBox);
bigBox = Array.from(bigBox);
let running = true
function getRandomColor() {
   let colours = ["#ef476f", "#ffd166", "#06d6a0", "#118ab2", "#073b4c", "#F1F1F1", "rgb(105, 105, 105)"]
   var clr
  var c = [0,0,0,0,0,0,0]
  var capacity = [4,4,4,4,4,4,1]
  for(let i = 0; i < bigBox.length; i++) {
  running = true
  while (running){
    var x = Math.floor(Math.random() * 7)
    if(c[x] < capacity[x]) {
      clr = colours[x]
      c[x]++
   bigBox[i].style.backgroundColor = clr
      running = false
      }
    }
  }
  c = [0,0,0,0,0,0]
  capacity = [4,4,4,4,4,4]
  for(let i = 0; i < smallBox.length; i++) {
    running = true
  while (running){
    var x = Math.floor(Math.random() * 6)
    if(c[x] < capacity[x]) {
      clr = colours[x]
      c[x]++
   smallBox[i].style.backgroundColor = clr
   running = false
      }
    }
  }
}
let flag = false

function swap(divObj, v)
{
  v.style.background = window.getComputedStyle(divObj, null).getPropertyValue("background-color")
  divObj.style.background = "rgb(105, 105, 105)"
  counter++
  movesCount.innerHTML = counter
  flag = true
  win(flag)
}

function checkColr(divObj, a)
{
  if(window.getComputedStyle(a, null).getPropertyValue("background-color") === "rgb(105, 105, 105)")
  {
    swap(divObj, a)
  }
}

function changeColor(divObj, x)
{
  if(window.getComputedStyle(divObj, null).getPropertyValue("background-color") !== "rgb(105, 105, 105)")
  {
    if(x===6||x===7||x===8||x===11||x===12||x===13||x===16||x===17||x===18)
    {
      checkColr(divObj,bigBox[x-1])
      checkColr(divObj,bigBox[x+1])
      checkColr(divObj,bigBox[x+5])
      checkColr(divObj,bigBox[x-5])
    }
    else if(x===1||x===2||x===3)
    {
      checkColr(divObj,bigBox[x-1])
      checkColr(divObj,bigBox[x+1])
      checkColr(divObj,bigBox[x+5])
    }
    else if(x===21||x===22||x===23)
    {
      checkColr(divObj,bigBox[x-1])
      checkColr(divObj,bigBox[x+1])
      checkColr(divObj,bigBox[x-5])
    }
    else if(x===5||x===10||x===15)
    {
      checkColr(divObj,bigBox[x+1])
      checkColr(divObj,bigBox[x+5])
      checkColr(divObj,bigBox[x-5])
    }
    else if(x===9||x===14||x===19)
    {
      checkColr(divObj,bigBox[x-1])
      checkColr(divObj,bigBox[x+5])
      checkColr(divObj,bigBox[x-5])
    }
    else if(x===0)
    {
      checkColr(divObj,bigBox[x+1])
      checkColr(divObj,bigBox[x+5])
    }
    else if(x===4)
    {
      checkColr(divObj,bigBox[x-1])
      checkColr(divObj,bigBox[x+5])
    }
    else if(x===20)
    {
      checkColr(divObj,bigBox[x+1])
      checkColr(divObj,bigBox[x-5])
    }
    else if(x===24)
    {
      checkColr(divObj,bigBox[x-1])
      checkColr(divObj,bigBox[x-5])
    }
  }
}
var score = 70000
function win(flag)
{
  if(flag===true)
  {
    if(window.getComputedStyle(smallBox[0], null).getPropertyValue("background-color")===window.getComputedStyle(bigBox[6], null).getPropertyValue("background-color") && window.getComputedStyle(smallBox[1], null).getPropertyValue("background-color")===window.getComputedStyle(bigBox[7], null).getPropertyValue("background-color") && window.getComputedStyle(smallBox[2], null).getPropertyValue("background-color")===window.getComputedStyle(bigBox[8], null).getPropertyValue("background-color") && window.getComputedStyle(smallBox[3], null).getPropertyValue("background-color")===window.getComputedStyle(bigBox[11], null).getPropertyValue("background-color") && window.getComputedStyle(smallBox[4], null).getPropertyValue("background-color")===window.getComputedStyle(bigBox[12], null).getPropertyValue("background-color") && window.getComputedStyle(smallBox[5], null).getPropertyValue("background-color")===window.getComputedStyle(bigBox[13], null).getPropertyValue("background-color") && window.getComputedStyle(smallBox[6], null).getPropertyValue("background-color")===window.getComputedStyle(bigBox[16], null).getPropertyValue("background-color") && window.getComputedStyle(smallBox[7], null).getPropertyValue("background-color")===window.getComputedStyle(bigBox[17], null).getPropertyValue("background-color") && window.getComputedStyle(smallBox[8], null).getPropertyValue("background-color")===window.getComputedStyle(bigBox[18], null).getPropertyValue("background-color"))
    {
      winning.innerHTML = "WIN!"
      clearInterval(myTimer)
      score = score - (counter*100)
      if(counter >= 500)
      score = 10000
      if(minutes === 0)
      score = score + 10000
      else if(minutes === 1)
      score = score + 8000
      else if(minutes === 2)
      score = score + 6000
      else if(minutes === 3)
      score = score + 4000
      score.innerHTML = "Score = " + score.toString(10)
    }
    flag = false
  }
}

var mins
var sec
var time
function timeSet()
{
  mins=0
  sec=0
  time = 0
  minutes = document.querySelector('.minutes')
  seconds = document.querySelector('.seconds')
  //clearInterval(updateCounter,1000)
  myTimer = setInterval(updateCounter, 1000)
}
function updateCounter()
{
    time++
    mins = Math.floor(time/60);
    sec = time % 60
    sec = sec < 10 ? "0" + sec : sec;
    mins = mins < 10 ? "0" + mins : mins;
    minutes.innerHTML = "Timer: " + mins
    seconds.innerHTML = sec
 }

function reset()
{
  movesCount.innerHTML = 0
  if (winning.innerHTML === "WIN!")
  {
    winning.innerHTML = ""
    score.innerHTML = ""
  }
  clearInterval(myTimer)
  minutes.innerHTML = "Timer: 00"
  seconds.innerHTML = "00"
  timeSet()
}