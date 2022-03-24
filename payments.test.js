describe("1er funcion on payment",function(){
    beforeEach(function(){
    
        billAmtInput.value = '100';
    tipAmtInput.value = '20';
    });
    it ('should add payment to allPayments in submitPaymentInfo', function(){
        submitPaymentInfo();
        expect(allPayments['payment1'].billAmt).toEqual('100');
});
    it ('should add tip to allPayments in submitPaymentInfo', function(){
        submitPaymentInfo();
        expect(allPayments['payment1'].tipAmt).toEqual('20');
});
    it ('should add TipPercent to allPayments in submitPaymentInfo', function(){
        submitPaymentInfo();
        expect(Math.round(100/ (allPayments['payment1'].billAmt/allPayments['payment1'].tipAmt))).toEqual(20);
});
});
