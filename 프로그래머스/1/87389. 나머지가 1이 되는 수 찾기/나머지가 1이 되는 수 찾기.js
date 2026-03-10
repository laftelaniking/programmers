function solution(n) {
    var answer = 0;
    // 1~n-1까지 확인하는 방법 나머지가 1이면 return
    for(var x= 1;x<n;x++){
        if(n%x==1){
            answer = x
            console.log(answer);
            break;
        }        
    }
    return answer;
}