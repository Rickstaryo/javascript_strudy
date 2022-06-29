document.write("Hello world");


/*
    +
    -  
    *
    /
    ** 제곱
    % 나머지
    ++, --

    할당연산
    =: 대입(assignment)
    += : a+=b => a= a+b 
    += : a-=b => a= a-b
    += : a*=b => a= a*b
    += : a/=b => a= a/b

*/

let text1 ="홍";
let text2 ="길동";
let text3 = text1+ text2;
console.log(text3);


//  문자열과 숫자 더하기
let x = 5+5;
let y = 5 + "5";
let z = "Hello" + 5;
console.log(x); // 10
console.log(y); // 55
console.log(z); //Hello5


// Comparsion  operator 비교연산
/*
    == a==b=> 값이 같은지
    === a===b=>? 값과 타입이 같은지?
    != a != b 값이 같지않다
    !== a!== b->값이 다르거나 타입이 다른지
    >
    <
    >=
    <=
    ?  조건식 ? true일경우 : false 일경우


    */
let var1 = 5;
let var2 = "5";
console.log(var1 == var2);
console.log(var1 === var2);
// var1 =4;
console.log(var1 != var2);
console.log(var1 !== var2);

console.log("논리연산");

//  논리연산
/*
    && : AND
    ||: or
    ! : not
    ^: xor
    <<: left
    >>: right

*/