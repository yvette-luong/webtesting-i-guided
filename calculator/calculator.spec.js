const { add } = require('./calculator.js');

// test away!

//should add two numbers 

test("add() should add two number", () =>{
    //assertion
    expect(add(2, 2)).toBe(4);
});