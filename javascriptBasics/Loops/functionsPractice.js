function solve(x, y, op) {
    let result
    switch (op) {
        case 1:
            result = x + y
            break
        case 2:
            result = x - y
            break
        case 3:
            result = x * y
            break
        case 4:
            result = x / y
            break
    }
    return result
}
let answer = solve(2, 4, 3)
console.log(answer)