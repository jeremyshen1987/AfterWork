const upperCase = require('./upperCase')

jest.disableAutomock();

test( 'convert first letter of a word to be uppercase', ()=>{
    expect(upperCase('test')).toBe('Test')
    expect(upperCase('TEST')).toBe('TEST')
    expect(upperCase(99)).toBe(null)
})