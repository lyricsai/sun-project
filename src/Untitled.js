let age = {
    a: 2,
    j: {
        ko: [1, 2, 3],
        k: 'k',
        kl: {
            lp: 9,
            ml: {
                lp: 0,
                ll: { sd: 9 }
            }
        }
    }
}
let age2 = { ...age }
console.log(age2)
age2.j.ko.push(4)
age2.j.kl = 78

console.log(age2)
console.log(age)