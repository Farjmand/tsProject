function kgToLbs(weight: number | string): number{
    //Narrowing

    if(typeof weight === 'number')
        return weight * 2.2
        else
           return parseInt(weight) * 2.2    
} 

kgToLbs(10)
kgToLbs('22')


type Quantity = 50 | 100

let quantity : Quantity = 50;

console.log(quantity)

type Metric = 'cm'| 'inch'
