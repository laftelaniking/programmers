function solution(num) {
    var count =0;
    //if-else if 로 num이 짝수일때 홀수일때 구분
    //반복한 횟수를 구한다
    while(num!=1){
      if(count==500){
        return -1
      }
      if(num%2==0){
        num=parseInt(num/2);
        count++
      }else if(num%2==1){
        num=num*3+1;
        count++
      }
    }
    
    
    console.log(num)
    return count;
}