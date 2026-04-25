let fruta = "manzana"
let mes = "abil"

if (fruta == "mandarina" && mes == "abril") {
  console.log("Estamos en otoño")
  document.body.innerHTML += "<h2>Estamos en otoño</h2>"
}
else if (fruta == "manzana" && mes != "abril") {
    console.log("estamos bien")
    document.body.innerHTML += "<h2> estamos bien </h2>"
}

for(let i=1; i<=10; i++) {
    console.log(i)
}