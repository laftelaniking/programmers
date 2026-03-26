function solution(phone_number) {
    var answer = '';
    //잘라서 교체하면 될듯
    //(length - 4) * '*'+slice(-4,-1) 
    answer = '*'.repeat(phone_number.length -4) + phone_number.slice(-4, phone_number.length)
    // console.log(phone_number.slice(-4, phone_number.length))
    // console.log('*'.repeat(phone_number.length -4))
    
    return answer;
}