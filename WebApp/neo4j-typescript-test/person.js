function birthday(someone) {
    return { name: someone.name, age: someone.age + 1 };
}
console.dir(birthday({ name: "Judy", age: 39 }));
