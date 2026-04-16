function solution(left, right) {
    var answer = 0;
    //약수의 개수를 구한다
    //짝수이면 인자를 더한다
    //left ~right까지 반복한다 
    var cnt = 0;
    for(var i=left;i<=right;i++){
        // console.log(i);
        cnt=0;
        for(var j=1;j**2<=i;j++){
            //13이 j로 나누어 떨어지는 지
            
            if(i%j==0&&j**2!=i){
                cnt +=2;
            }else if(i%j==0&&j**2==i){
                cnt+=1;
            } 
        }
        
        if(cnt%2==0){
            answer += i;
        }else{
            answer -= i;
        }
        console.log(answer);
    }
    
    return answer;
}