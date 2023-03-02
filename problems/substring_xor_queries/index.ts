function substringXorQueries(s: string, queries: number[][]): number[][] {
  const queryResponses: [number, number][] = Array(queries.length).fill([-1, -1]);
  const necessaryVals: {[x in string]: number[]} = {};
  let maxNum = -Infinity;

  // hashmap {necessaryDecVal: [queriesIndex]}
  for (let i = 0; i < queries.length; i += 1) {
    const [firstI, secondI] = queries[i];
    const necessaryDecVal = bitwise(firstI, secondI);

    maxNum = Math.max(necessaryDecVal, maxNum);

    if (necessaryVals[necessaryDecVal]) {
      necessaryVals[necessaryDecVal].push(i);
    } else {
      necessaryVals[necessaryDecVal] = [i];
    }
  }

  for (let i = 0; i < s.length; i += 1) {
    for (let j = i; j < s.length; j += 1) {
      const binarySubStr = s.substring(i, j + 1);
      const decVal = convertBinaryToDecimal(binarySubStr);

      if (decVal > maxNum || (j - i) > 31) {
        break;
      }

      if (necessaryVals[decVal]) {
        const queryIndexes = necessaryVals[decVal];
        queryIndexes.forEach((index) => {
          if (
            queryResponses[index].toString() === [-1, -1].toString()
                      || (queryResponses[index][1] - queryResponses[index][0] + 1) > binarySubStr.length
          ) {
            queryResponses[index] = [i, j];
          }
        });
      }
    }
  }
  return queryResponses;
}

function bitwise(val1: number, val2: number): number {
  return val1 ^ val2;
}

function convertBinaryToDecimal(binary: string): number {
  return parseInt(binary, 2);
}
