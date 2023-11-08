const qwe = document.querySelector("#qwe")
const btn = document.querySelector("#btn")
const inf = document.querySelector(".inf")

btn.onclick = () => {
  let b = prompt("ваше имя")
  let c = prompt("ваш номер телефона", "+1 234 567 89 12")
  let h1 = document.createElement("h1")
  h1.textContent = (`спасибо за обращение, ${b.at(0).toUpperCase() + b.slice(1)}, мы вам перезвоним `)
  let target = document.querySelector(".zxc")
  h1.style = "font-size: 30px"
  target.append(h1)
  inf.style = "display:none"
}

