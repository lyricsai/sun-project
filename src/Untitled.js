let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let max = 0

// let a = Object.values(salaries).map(salary => max < salary ? max = salary : max = max)

for (let i in salaries) {
    if (salaries[i] > max) {
        max = salaries[i]
    }
}


console.log(max)