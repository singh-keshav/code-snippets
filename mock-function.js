function mock() {}

mock.fn = function (callback) {
  function wrapper() {
    wrapper.callCount++;
    return callback();
  }

  wrapper.callCount = 0;
  return wrapper;
};

function sum(a, b) {
  return a + b;
}

const mockFn = mock.fn(sum);

mockFn(2, 3);

mockFn(3, 4);

console.log(mockFn.callCount);
