function solution(a, b) {
    var answer = 1234567890;
    var arr = [];
    //map()을 이용해서 각각을 곱하고
    
    arr = a.map((num, i)=> num * b[i])
    console.log(arr);
    return answer;
}