export const JS_QUESTIONS = [
  {
    question: `const a = [1,3,2];
    a.push(4); 
    `,
    answers: [
      { value: "[4,1,3,2]" },
      { value: "Error" },
      { value: "[1,3,2,4]" },
      { value: "[4]" }
    ],
    correctAnswer: 2
  },
  //   {
  //     question: `What's the output?
  // let number = 0;
  // console.log(number++);
  // console.log(++number);
  // console.log(number);`,
  //     answers: [
  //       {
  //         value: "1 1 2"
  //       },
  //       {
  //         value: "1 2 2"
  //       },
  //       {
  //         value: "0 2 2"
  //       },
  //       {
  //         value: "0 1 2"
  //       }
  //     ],
  //     correctAnswer: 2
  //   },
  {
    question: `function sayHi() {
      console.log(name);
      console.log(age);
      var name = 'Lydia';
      let age = 21;
    }
    sayHi();
    `,
    answers: [
      { value: "Lydia and undefined" },
      { value: "Lydia and ReferenceError" },
      { value: "ReferenceError and 21" },
      { value: "undefined and ReferenceError" }
    ],
    correctAnswer: 3
  },

  // {
  //   question: `let a = 10;
  //   let a = 29;
  //   console.log(a)`,
  //   answers: [
  //     { value: "undefined" },
  //     { value: "Error" },
  //     { value: "10" },
  //     { value: "29" }
  //   ],
  //   correctAnswer: 1
  // },
  {
    question: `myFunction();
    function myFunction() {
      var a = 10;
      var b = 20;
    console.log(++a - b++);
   }
    `,
    answers: [
      { value: "undefined" },
      { value: "Error :: myFunction is not defined" },
      { value: "-9" },
      { value: "Error: invalid Mathematical Operation" }
    ],
    correctAnswer: 2
  },
  // {
  //   question: `// guess the output
  // const test = {
  //     value : 10,
  //     getValue:() => { return  this.value}
  // };
  // console.log(test.getValue());
  // `,
  //   answers: [{ value: "undefined" }, { value: "Error" }, { value: "10" }],
  //   correctAnswer: 0
  // },
  {
    question: `const global = 1;
    function outer(x) {
        function inner(y) {
           return global + x + y;
        }
        return inner;
    }
    
    const calc = outer(10);
    console.log(calc(20));
    `,
    answers: [
      { value: "30" },
      { value: "undefined" },
      { value: "31" },
      { value: "Function will not execute" }
    ],
    correctAnswer: 2
  },
  {
    question: `const shape = {
      radius: 10,
      diameter() {
        return this.radius * 2;
      },
      perimeter: () => 2 * Math.PI * this.radius,
    };
    console.log(shape.diameter());
    console.log(shape.perimeter());`,
    answers: [
      {
        value: "20 and 62.83185307179586"
      },
      {
        value: "20 and NaN"
      },
      {
        value: "20 and 63"
      },
      {
        value: "NaN and 63"
      }
    ],
    correctAnswer: 1
  },
  {
    question: `for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1);
  }
  for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1);
  }`,
    answers: [
      { value: "0 1 2 and 0 1 2" },
      { value: "0 1 2 and 3 3 3" },
      { value: "3 3 3 and 0 1 2" },
      { value: "3 3 3 and 3 3 3" }
    ],
    correctAnswer: 2
  },
  {
    question: `let test1 = "hi";
  let test2 = "bye";
  [test2, test1] = [test1, test2];
  console.log(test1, test2);
    `,
    answers: [
      { value: `hi, hi` },
      { value: "[undefined undefined]" },
      { value: "[bye, hi]" },
      { value: "bye, hi" }
    ],
    correctAnswer: 3
  },
  {
    question: `const promise = new Promise((resolve, reject) => reject());

    promise
     .then(() => console.log('first'))
     .catch(() => console.log('second'))
     .then(() => console.log('third'));
 `,
    answers: [
      { value: "first" },
      { value: "second" },
      { value: "first, second" },
      { value: "second, third" }
    ],
    correctAnswer: 3
  },
  // {
  //   question: `var arr1 = "john".split('');
  // var arr2 = arr1.reverse();
  // var arr3 = "jones".split('');
  // arr2.push(arr3);
  // what will be the length of an array1 and and array 2
  // `,
  //   answers: [
  //     { value: "4, 9" },
  //     { value: "9, 4" },
  //     { value: `5, 5` },
  //     { value: "9, 9" }
  //   ],
  //   correctAnswer: 2
  // },
  {
    question: `let arr = [true, 2, 3, 4];
    arr.unshift(8)
    arr.push(9);
    arr.shift();
    console.log(new_array);`,
    answers: [
      {
        value: "[8, 9, true, 2, 3]"
      },
      {
        value: `[true, 2, 3,"4", 8, 9]`
      },
      {
        value: `[true, 2, 3,"4", undefined, undefined]`
      },
      {
        value: "[true, 2, 3, 4, 9]"
      }
    ],
    correctAnswer: 3
  },
  {
    question: `const arr = [0 ,30, 49, 04];
    arr.slice(0,2)
    console.log(arr);
    `,
    answers: [
      { value: "[49, 04]" },
      { value: "[0, 30, 49]" },
      { value: "[0, 30]" },
      { value: "[0, 30, 49, 04]" }
    ],
    correctAnswer: 3
  },
  {
    question: `What are the three phases of event propagation?`,
    answers: [
      { value: "Target > Capturing > Bubbling" },
      { value: "Bubbling > Target > Capturing" },
      { value: "Target > Bubbling > Capturing" },
      { value: "Capturing > Target > Bubbling" }
    ],
    correctAnswer: 3
  },
  {
    question: `How long is cool_secret accessible?
    sessionStorage.setItem('cool_secret', 123);`,
    answers: [
      {
        value: "Forever, the data doesn't get lost."
      },
      {
        value: "When the user closes the tab."
      },
      {
        value: "When the user closes the entire browser, not only the tab."
      },
      {
        value: "When the user shuts off their computer."
      }
    ],
    correctAnswer: 1
  },
  // {
  //   question: `<div onclick="console.log('div')">
  //   <p onclick="console.log('p')">
  //     Click here!
  //   </p>
  // </div>`,
  //   answers: [
  //     { value: "p div" },
  //     { value: "div p" },
  //     { value: "p" },
  //     { value: "div" }
  //   ],
  //   correctAnswer: 0
  // },
  // {
  //   question: `difference between local and session storage and cookies`,
  //   answers: [
  //     {
  //       value: "yes"
  //     },
  //     {
  //       value: "no"
  //     }
  //   ],
  //   correctAnswer: 0
  // },
  {
    question: `const person = { name: 'Lydia' };

    function sayHi(age) {
      return this.name + age;
    }
    
    console.log(sayHi.call(person, 21));
    console.log(sayHi.bind(person, 21));`,
    answers: [
      {
        value: "undefined is 21 Lydia is 21"
      },
      {
        value: "function function"
      },
      {
        value: "Lydia is 21 Lydia is 21"
      },
      {
        value: "Lydia is 21 function"
      }
    ],
    correctAnswer: 3
  },
  // {
  //   question: `difference between call and apply, bind`,
  //   answers: [
  //     {
  //       value: "yes"
  //     },
  //     {
  //       value: "no"
  //     }
  //   ],
  //   correctAnswer: 0
  // },
  // {
  //   question: `difference between synchronous and asynchronous programming`,
  //   answers: [
  //     {
  //       value: "yes"
  //     },
  //     {
  //       value: "no"
  //     }
  //   ],
  //   correctAnswer: 0
  // },
  {
    question: `//replace all test occurunces with "bye" 
    from "test hi this is test TEST shj TEst" => 
  `,
    type: "Text",
    answers: [
      {
        value: "yes"
      },
      {
        value: "no"
      }
    ],
    correctAnswer: 0
  },
  // {
  //   question: `// check if string contains all letters or numbers
  // `,
  //   type: "Text",
  //   answers: [
  //     {
  //       value: "yes"
  //     },
  //     {
  //       value: "no"
  //     }
  //   ],
  //   correctAnswer: 0
  // },
  // {
  //   question: "difference between map foreach filter",
  //   answers: [
  //     {
  //       value: "yes"
  //     },
  //     {
  //       value: "no"
  //     }
  //   ],
  //   correctAnswer: 0
  // },
  {
    question: ` return total average marks of students from given
     array using reduce method
const students = [{ name: "test1", "marks": 80,
  }, {  name: "test2", "marks": 70
  }, {  name: "test3", "marks": 60}]
  `,
    type: "Text",
    answers: [
      {
        value: "yes"
      },
      {
        value: "no"
      }
    ],
    correctAnswer: 0
  }
];
