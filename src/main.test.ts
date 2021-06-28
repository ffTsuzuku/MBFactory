import MBFactory from "./main"

const factory = new MBFactory()

test('Test Generating A Number In Range 0 to 3', () => {
    const value = factory.number(3,0)

    expect(value).toBeGreaterThanOrEqual(0)
    expect(value).toBeLessThanOrEqual(3)
})

jest.setTimeout(1000000)

test('Generate a first name', async () => {
    const name = await factory.firstName()
    expect(name).not.toEqual('')
})

test('Generate a last name', async () => {
    const name = await factory.lastName()
    expect(name).not.toEqual('')
})

test('Generate a Date Before or Including Today', () => {
    const today = Date.now()
    const generatedDate = factory.date(today)
    
    expect(generatedDate).toBeLessThanOrEqual(today)
})

test('Generate a Date Within The Past 10 Days', () => {
    const today = Date.now()
    let tenDaysAgo: number = new Date().setDate((new Date().getDate() - 10))


    const generatedDate = factory.date(today, tenDaysAgo) 

    expect(generatedDate).toBeLessThanOrEqual(today)
    expect(generatedDate).toBeGreaterThanOrEqual(tenDaysAgo)
})

test('Generate a date in the future', () => {
    const today = Date.now()
    const sevenDaysLater = new Date().setDate(new Date().getDate() + 7)
    const generatedDate = factory.date(sevenDaysLater, today)

    expect(generatedDate).toBeGreaterThanOrEqual(today)
    expect(generatedDate).toBeLessThanOrEqual(sevenDaysLater)
})

test('Generate a company', async() => {
    
    const company: string = await factory.company()
    const notEmpty: boolean = company !== ''

    expect(notEmpty).toBe(true)
})