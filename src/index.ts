type Customer = {
    birthday : Date
}

function getCustomer (id:number) : Customer | null{
    return id===0? null : {birthday : new Date()}
}

let customer = getCustomer(1)

const customers:(Customer|null)[] = [getCustomer(0)]

console.log(customers?.[0])