describe('getLast', function() {
  it('returns last item in array', function() {
    expect(getLast([1,2,3,4])).toEqual(4);
  });
});

describe('reverse', function() {
  it('returns the array in a reversed order', function() {
    var array = [1,2,3,4];
    expect(array.reverse()).toEqual([4,3,2,1]);
  });
});

describe('shuffle', function() {
  it('returns the elements of an array in a shuffled order', function() {
    spyOn(Math, 'random').and.returnValue(0.1);
    expect(shuffle([1,2,3,4])).toEqual([2,3,4,1]);
  });
});

describe('sort', function() {
  it('returns the elements of an array in a sorted order', function() {
    var array = [4,3,5,2];
    expect(array.sort()).toEqual([2,3,4,5]);
  });
});
