//nested scope

function outerFunction() {
  let outerVar = "I am outer variable";

  function innerFunction() {
    let innerVar = "I am inner variable";

    console.log(outerVar); // accessible: outer variable
    console.log(innerVar); // accessible: inner variable
  }

  innerFunction();

  // The following line would cause an error if uncommented,
  // because innerVar is not in the outer scope.
  // console.log(innerVar);
}

outerFunction();

//nested if else scope

function checkNumber(num) {
  if (num > 0) {
    let positiveMessage = "The number is positive.";
    console.log(positiveMessage); // accessible: positiveMessage
  } else if (num < 0) {
    let negativeMessage = "The number is negative.";
    console.log(negativeMessage); // accessible: negativeMessage
  } else {
    let zeroMessage = "The number is zero.";
    console.log(zeroMessage); // accessible: zeroMessage
  }

  // The following lines would cause errors if uncommented,
  // because the messages are not in the outer scope.
  // console.log(positiveMessage);
  // console.log(negativeMessage);
  // console.log(zeroMessage);
}

checkNumber(5);
checkNumber(-3);
checkNumber(0);