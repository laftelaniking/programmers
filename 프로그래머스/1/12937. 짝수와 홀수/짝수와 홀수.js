function solution(num) {
    var answer = '';
    var remain = num%2; 
    console.log(remain);
    
    //num을 2로 나누었을 때 나머지가 0이면 짝수
    if(remain==0){
        answer = 'Even'
    }else{
        answer = 'Odd'
    }
    return answer;
}