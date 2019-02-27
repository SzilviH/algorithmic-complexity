describe('create array', function() {
  it('returns an array of specified number of elements', function() {
    spyOn(Math, 'random').and.returnValue(0.1);
    expect(createArray(4)).toEqual([10,10,10,10]);
  })
})
