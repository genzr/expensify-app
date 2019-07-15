const add = (a, b) => a + b 
const generateGreeting = (name ='Anonymous') => `Hello ${name}!`

test ('Should add two numbers', () => {
    const result = add(3,4)
    expect(result).toBe(7)
})

test('Should be a string', () => {
    const greeting = generateGreeting('Gennaro')
    expect(typeof greeting).toBe('string')
})

test('Should generate greeting for no name', () => {
    const result = generateGreeting()
    expect(result).toBe('Hello Anonymous!')
})