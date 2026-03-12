function solution(n) {
    var answer = 0;
    var mok = 0; 
    //0으로 나누어 떨어지는 수
    //재일 큰 약수의 제곱은 본 수 보다 클 수 없다
    for(var i=1;i**2<=n;i++){
        //나누어떨어지면 약수
        //몫과 i를 answer에 더한다.
        if(n%i==0){
            mok = n/i;
            if(i**2==n){
                answer += i
            }else{
                answer += i + mok
            }
            
        }
        //9나 16같은 건 제곱근을 두번 더하게됨
        
    }
    return answer;
}