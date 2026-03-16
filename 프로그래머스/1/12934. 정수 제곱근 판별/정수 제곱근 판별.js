function solution(n) {
    var answer = 0;
    var x = n**(1/2)
    // 약수의 개수가 홀수 일때 나열해서 중간에 있는 걸 구하기 
    // 또는 제곱근 구하기
    console.log(x%1==0)
    if(x%1==0){
        answer = (x+1)**2
    }else{
        answer = -1
    }
    
    return answer;
}