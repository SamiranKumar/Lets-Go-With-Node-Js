// node practice/async-await.js

//Async-await vs promises

const caclculate = (a, b, c) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (a < 0 || b < 0 || c < 0) {
        reject("Please provide Positive Number!");
      } else {
        resolve(a + b + c);
      }
    }, 1000);
  });
};

//====================================
//Promise chaining
caclculate(1, 2, 3)
  .then((addition) => {
    console.log(addition);
    return caclculate(addition, 20, 3);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

//====================================
//Async-await

const add = async () => {
  const sum1 = await caclculate(1, 2, 3);
  const sum2 = await caclculate(sum1, 2, 3);
  const sum3 = await caclculate(sum2, 4, 7);
  const sum4 = await caclculate(sum3, 20, 9);
  return sum4;
};

//==call Async-await
add()
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err);
  });
