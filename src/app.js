console.log("Merhaba kodlama.io")

//JS type safe değildir
let dolarBugun = 9.30

let dolarDun = 9.20
dolarDun = "9.20"
{
    let dolarDun = 9.10
}
console.log(dolarDun)

const euroDun = 11.2
//euroDun = 11 // const olanlara yeni değer atanmaz

console.log(euroDun)

//array
//isimlendirmede değişkenler => camelCasing
//PascalCasing
let konutKredileri = ["Konut Kredisi","Emlak Konut kredisi","Kamu Konut Kredisi","Özel Konut Kredisi"]

console.log("<ul>")
for (let i = 0; i < konutKredileri.length; i++) {
    console.log("<li>" + konutKredileri[i] + "</li>")
}
console.log("</ul>")

console.log(konutKredileri)