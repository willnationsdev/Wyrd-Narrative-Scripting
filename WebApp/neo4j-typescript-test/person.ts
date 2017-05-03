export interface Person {
    name: string;
    age: number;
}

export function birthday(someone : Person) : Person {
    return {name: someone.name, age: someone.age+1};
}

