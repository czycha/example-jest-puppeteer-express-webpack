describe('foo', () => {
  beforeEach(async () => {
    await page.goto(PATH, { waitUntil: 'load' })
  })
  test('should return bar', async () => {
    const foo = await page.evaluate(() => {
      console.log('foo');
      return foo();
    })
    expect(foo).toBe('bar')
  })
})
