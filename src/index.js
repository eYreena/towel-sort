// You should implement your task here.

module.exports = function towelSort(matrix) {
    return matrix
        ? matrix.reduce((acc, el, index) => {
              const isEven = (index + 1) % 2 === 0;
              if (isEven) {
                  acc.push(...el.reverse());
              } else {
                  acc.push(...el);
              }
              return acc;
          }, [])
        : [];
};
