function printMe(
    me: { name: string, age: number }
) {
    console.log(
        `name: ${me.name}, age: ${me.age}`
    )
}

printMe({ name: 'solchan', age: 24});