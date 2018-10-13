const isShortened = require('../src/util/isShortened')

describe('isShortened', () => {
  it('Should return true if a URL is already shortened', () => {
    expect(isShortened('http://127.0.0.1:3000/0ED_jKAOV')).toBe(true)
  })

  it('Should return false if a URL is not shortened yet', () => {
    expect(isShortened('http://www.ufla.br')).toBe(false)
  })
})


