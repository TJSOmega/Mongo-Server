describe('LOGGER MW', () => {


  let req = {}
  let res = {}
  let next = jest.fn()
  let spy;

  beforeEach(() => {
    spy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    spy.mockRestore();
  })

})