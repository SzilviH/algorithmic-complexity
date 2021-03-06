describe('getLast', function() {
  it('returns last item in array', function() {
    expect(getLast([1,2,3,4])).toEqual(4);
  });
});

describe('reverser', function() {
  it('returns the array in a reversed order', function() {
    expect(reverser([1,2,3,4])).toEqual([4,3,2,1]);
  });
});

describe('shuffle', function() {
  it('returns the elements of an array in a shuffled order', function() {
    spyOn(Math, 'random').and.returnValue(0.1);
    expect(shuffle([1,2,3,4])).toEqual([2,3,4,1]);
  });
});

describe('sorter', function() {
  it('returns the elements of an array in a sorted order', function() {
    expect(sorter([4,3,5,2])).toEqual([2,3,4,5]);
  });
});

describe('duplicates', function() {
  it('returns duplicates elements in an array', function() {
    expect(duplicates([1,2,3,1])).toEqual([1,1]);
  });
});

describe('quickSort', function() {
  it(`returns an array's items ordered`, function() {
    expect(quickSort([4,3,5,2])).toEqual([2,3,4,5]);
  });
});
