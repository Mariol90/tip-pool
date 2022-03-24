describe('test 1er funcion in helpers',function(){
    beforeEach(function(){
        allPayments.payment1 = {
            billAmt: 100,
            tipAmt: 20,
            tipPercent: 20
          }
        allPayments.payment2={
            tipAmt: 20,
            billAmt: 200,
            tipPercent: 20,
            }
  
        });
        
it("should calculate total from tip=40",function(){
    expect(sumPaymentTotal('tipAmt')).toEqual(40);
});
it("should calculate total from bill=300",function(){
    expect(sumPaymentTotal('billAmt')).toEqual(300);
});
it("should calculate total from tipPercent=40",function(){
    expect(sumPaymentTotal('tipPercent')).toEqual(40);
});
afterEach(function(){
    delete allPayments["payment1"];
    delete allPayments["payment2"];
})
});


describe("test 2do function in helpers", function(){
    it("should calculate tipPercent of 100 and 20",function(){
    expect(calculateTipPercent(100,20)).toEqual(20);
    });
});
// describe("test 3er function ",function(){

// it ('create a table row and appends ',function(){
//     expect();
// })
// });