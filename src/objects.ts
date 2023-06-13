type Employee = {
    readonly id : number, 
    name: string,
}

let employee: {
   
} = {
    id: 1, name: 'Zara'
}

console.log(employee);


let address:{
    streetNumber: number,
    block: string,
    city: string,
    country: string  
} = {
    streetNumber: 168,
    block: 'E',
    city: 'Lahore',
    country: 'Pakistan'
}
console.log(`Address of ${employee} is ${address}`)