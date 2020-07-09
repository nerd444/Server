// 자바스크립트 ctrl + /
console.log('Welcome to the class')
console.log("Hello")

console.log(20 + 30)

console.log('come' + 'home')

// 숫자는 따옴표 붙이지 않는다.
// 문자는 따옴표를 붙인다.
// 작은따옴표도 되고, 큰 따옴표도 된다.

console.log(20 + "hello" + 100)

// 변수 : 데이터를 메모리에 저장하는 것.

// 데이터는 무엇?
// 숫자, 문자, true/false

// node.js (javascript) 에서는 데이터가 위의 3개.

// 프로그래밍 : 사람의 언어를, 컴퓨터가 이해해서
// 행동할 수 있게, 사람의 언어를 번역해서 작성.

// 고등어 1마리에 3,000원 => 사람의 언어
// "고등어" 1 "마리에" 3000 "원"

// 자바스크립트의 데이터 타입
// 3개

// var price = 3000; // 3000을 price에 저장하라.
// var fish_name = "고등어"; // "고등어" 를 fish_name에 저장하라

// var 로 선언 : 글로벌 변수

let price = 3000;
let fish_name = "고등어"

// let 으로 변수선언 : 메모리 낭비 막을 수 있다.

console.log(fish_name + " " + price)

price = 5000 // 5000을 price에 저장하라.

console.log(fish_name + " " + price)

console.log(price * 3)

//////////////////////////////////////

// a = 11, b = 7 일때, 넓이와 둘레길이
let a = 11
let b = 7
let Area = a*b
let Perimeter = 2*(a+b)
console.log("넓이는 : "+Area)
console.log("둘레길이는 : "+Perimeter)

// a = 20cm
a = 20
let area = 6*a**2
let volume = a **3
console.log("표면적 : " + area)
console.log("부피 : " + volume)

// 현재속도 90km/h => mp/h로 바꿔
let kmh = 90
let mph = 0.6214 * 90
console.log(mph)

let sky

console.log(sky)    // undefined 언디파인드 :
                    // 데이터가 저장되어있지 않다.

let ground = ""
console.log(ground)

a = 75
b = 20

result = a + b
console.log(result)

result = a - b
console.log(result)

result = a / b
console.log(result)

result = a % b  // 모듈로 (나머지 구하기)
console.log(result)

// result = a++    // a를 result에 저장하고, result = 75
//                 // a는 a에 1더하라, a = 75 + 1
// console.log(result)
// console.log(a)

// result = b--    // b를 result에 저장하고, result = 20
//                 // b는 b에 1빼라, b = 20 - 1
// console.log(result)
// console.log(b)

result = ++a    // a에 1을 먼저 더하라. a = 75 + 1
                // a를 result에 저장하라. result = 76
console.log(result)
console.log(a)

console.log(a == b)
console.log(a > b)
console.log(a >= b)
console.log(a < b)
console.log(a <= b)
console.log(a != b)

// a에는 3을 저장하고, b에는 7을 저장하고,
// c에는 9를 저장하고, d에는 10을 저장한다.
// 한문장으로 : a는 5보다 크고, b는 8보다 작냐
// 한문장으로 : c가 7보다 크거나, d가 5보다 작냐

a = 3
b = 7
c = 9
d = 10
console.log(a > 5 && b < 8) // false && true => false
console.log(c > 7 || d < 5) // true && false => true

a = 75
b = 1220
// 삼항 연산자
console.log(a > b ? 500 : 900)

console.log("이준주거")

if(a > b){
    console.log("A가 B보다 크다.")
}else{
    console.log("B가 더 크다.")
}

a = 100
if(a == 30){
    console.log("1")
}else if(a == 50){
    console.log("2.")
}else{
    console.log("100.")
}

// 1번 학생의 점수가 83점 입니다.
// 다음의 조건문을 작성하시오.
// 점수가 0보다 작거나 100보다 크면, "그런 점수 없음" 출력
// 점수가 80점 이상이면, "A학점입니다." 출력
// 점수가 80점 미만이면, "B학점입니다." 출력

let score = 83
if(score < 0 || score > 100){
    console.log("그런 점수 없음")
}else if(score >= 80){
    console.log("A학점입니다.")
}else if(score < 80){
    console.log("B학점입니다.")
}

// 함수 functions
function addNum(a, b){
    let result = a + b
    return result
}
// 함수의 호출 function call
let ret = addNum(3, 4)

console.log(ret)


var addnum2 = function(a, b){
    let result = a + b
    return result
}

ret = addnum2(5, 6)
console.log(ret)


// es6 문법
let addnum3 = (a, b) => {
    let result = a + b
    return result
}

ret = addnum3(10, 20)
console.log(ret) 

// 객체 : 클래스가 메모리로 올라온 상태

let cook = new Object();
cook.name = "홍길동"
cook.age = 32
cook.make = () =>{
    return "빵을 만든다."
}

console.log(cook.name + " " + cook.age + " " + cook.make())

// JSON : Javascript object notation
let cook2 = {
    name : "김씨", 
    age : 22,
    make : () => {
        return "한식을 만든다"
    }
}

console.log(cook2.name + " " + cook2.age + " " + cook2.make())


