let age: number = 20;

if (age <50)
    age += 10;

console.log(age)

let sales: number = 123_456_789; // large numbers can be delimited using _ for readablility
let course: string = 'TypeScript';
let is_published: boolean = true;

let level; // no type mentioned so it will be 'any' type | can be changed whenever, so avoid using it

// explicitly mentioned any type

function render(doc: any) {
    console.log(doc);
}

// arrays

let numbers: number[] = [1,2,3];

numbers.forEach(n => n.valueOf)

// tuples

let user: [number, string] = [1, 'Jack']; // fixed array size with each element of some type

// enums

enum Size { Small, Medium, Large} // default small starts from 0, and then 1,2,3....

enum Size { Small_1 = 1, Medium_1, Large_1} // progresses from 2,3,....

let mySize: Size = Size.Medium; // assigns value 1 to it | using const before enum produces more optimised js code

// functions

function calculateTax(income: number): number { // 2nd number mentions the return type of the function
    return 0;
}

// objects

let employee: { // suppose to make name optional, we can write name?
    id: number,
    name: string
} = {id: 1, name: 'Jack'};

console.log(employee.name);

// advanced types

type Employee = { // basically an alias or blueprint
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}

let jack: Employee = {
    id: 1,
    name: 'Jack',
    retire: (date: Date) => {
        console.log(date);
    }
}

// union

function kgToPounds(weight: number | string): number { // letting compiler know that weight can be either number or string

    // Narrowing

    if(typeof weight === 'number')
        return weight * 2;
    else
        return parseInt(weight) * 2; 
}

// intersection

type Draggable = {
    drag: () => void
};

type Resizable = {
    resize: () => void
};

type UIWidget = Draggable & Resizable // takes properties of both, an intersection type

let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
}

// literal type

type Quantity = 50 | 100;
let quantity: Quantity = 100;

// optional chaining

type Customer = {
    birthday: Date
}

function getCustomer(id: number): Customer | null | undefined{
    return id === 0 ? null : {birthday: new Date() };
}

let customer= getCustomer(0);

console.log(customer?.birthday) // ?. is the optional property access operator, checks whether there is some value in the variable

// optional property access operator
// optional element access operator
// optional call access operator