const part1: object = {
    name: 'solchan'
}

const part2: object = {
    country: 'Korea',
    address: 'YongIn',
}

const user = { ...part1, ...part2 };
console.log(part1);
console.log(part2);
console.log(user);