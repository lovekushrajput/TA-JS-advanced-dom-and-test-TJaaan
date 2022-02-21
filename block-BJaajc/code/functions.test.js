const {getFullName,isPalindrome,getCircumfrence,getArea} = require('./functions');


//getfullname
//positive test
test('getfullname lovekush  + rajput   match to lovekushrajput',()=>{
    expect(getFullName('lovekush','rajput')).toMatch('lovekushrajput')
});

test('getfullname arya + stark  match to aryastark',()=>{
    expect(getFullName('arya','stark')).toMatch('aryastark')
});

test('getfullname john + kelvin  match to johnkelvin',()=>{
    expect(getFullName('john','kelvin')).toMatch('johnkelvin')
});

// negative test
test('getfullname lovekush  + rajput  not match to aryastark',()=>{
    expect(getFullName('lovekush','rajput')).not.toMatch('aryastark')
});

test('getfullname arya + stark not match to johnkelvin',()=>{
    expect(getFullName('arya + stark')).not.toMatch('johnkelvin')
});


test('getfullname john + kelvin not match to lovekushrajput',()=>{
    expect(getFullName('john + kelvin')).not.toMatch(' lovekushrajput')
});



// ispalindrome
//positive
test('ispalindrome noon to be true',()=>{
    expect(isPalindrome('noon')).toBeTruthy()
})

test('ispalindrome lol to be true',()=>{
    expect(isPalindrome('lol')).toBeTruthy()
})

test('ispalindrome pop to be true',()=>{
    expect(isPalindrome('pop')).toBeTruthy()
})
//negative
test('ispalindrome english not to be true',()=>{
    expect(isPalindrome('english')).not.toBeTruthy()
})

test('ispalindrome maths not to be true',()=>{
    expect(isPalindrome('maths')).not.toBeTruthy()
})

test('ispalindrome science not to be true',()=>{
    expect(isPalindrome('science')).not.toBeTruthy()
})


//getcircumference
//positive
test('getcircumference radius will be 1 and circumference  is 6',()=>{
    expect(getCircumfrence(1)).toMatch(`6`)
})

test('getcircumference radius will be 10 and circumference  is 62',()=>{
    expect(getCircumfrence(10)).toMatch(`62`)
})

test('getcircumference radius will be 100 and circumference  is 628',()=>{
    expect(getCircumfrence(100)).toMatch(`628`)
})
// negative
test('getcircumference radius will be 4 and circumference  is not 62',()=>{
    expect(getCircumfrence(4)).not.toMatch(`62`)
})

test('getcircumference radius will be 77 and circumference  is not 100',()=>{
    expect(getCircumfrence(77)).not.toMatch(`100`)
})

test('getcircumference radius will be 50 and circumference  is not 533',()=>{
    expect(getCircumfrence(50)).not.toMatch(`533`)
})

//getArea
// positive
test('getarea radius will be 1 and area is 3',()=>{
    expect(getArea(1)).toMatch(`3`)
})

test('getarea radius will be 2 and area is 12',()=>{
    expect(getArea(2)).toMatch(`12`)
})

test('getarea radius will be 3 and area is 84',()=>{
    expect(getArea(3)).toMatch(`84`)
})

//negative
test('getarea radius will be 45 and area is not  84',()=>{
    expect(getArea(45)).not.toMatch(`84`)
})

test('getarea radius will be 10 and area is not 100',()=>{
    expect(getArea(10)).not.toMatch(`100`)
})

test('getarea radius will be 33 and area is not 120',()=>{
    expect(getArea(33)).not.toMatch(`120`)
})


