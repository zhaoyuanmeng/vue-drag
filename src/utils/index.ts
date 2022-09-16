/**
 * @author Zhao YuanDa
 * @parms:
 * @description: //深度合并对象的
 * @date 2022-09-16 16:47
 */
export function deepAssign(...param: any) {
  // 让这个去做核心处理 assign回去筛选
  let result = Object.assign({}, ...param);
  for (let item of param) {
    for (let [idx, val] of Object.entries(item)) {
      if (typeof val === 'object') {
        result[idx] = deepAssign(result[idx], val);
      }
    }
  }
  return result;
}

// test
var x = {
    a: {
      a1: {
        a1_1: 1.1,
        a1_2: 1.2,
      },
      a2: {
        a2_1: 2.1,
        a2_2: 2.2,
      },
    },
    b: 1,
  },
  y = {
    a: {
      a1: {
        a1_3: 1.3,
      },
    },
    b: {
      b1: {
        b1_1: 1,
      },
      b2: 555,
    },
    c: 'ccc',
  },
  z = {
    b: {
      b1: {
        xx: 1,
        yy: 2,
        ccc: {
          abb: '12242',
          bbb: [1, 2, 3],
        },
      },
    },
    a: {
      a55: {
        xx: 33,
      },
    },
  };
console.log(deepAssign(x, y, z));
