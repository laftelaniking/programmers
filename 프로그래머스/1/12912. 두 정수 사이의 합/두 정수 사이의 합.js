function solution(a, b) {
    var answer = 0;
    //for문 사용해서 작은 수~ 큰 수 증가하도록해서 구하기
    // a와 b를 비교해서 작은 수를 a 큰 수를 b
    if(a > b){
        var temp = 0;
        temp = a;
        a = b;
        b = temp;
    }
    for(var i =a; i<=b; i++){
        answer += i;
    }
    console.log(answer)
    
    return answer;
}