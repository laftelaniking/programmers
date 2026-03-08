function solution(x, n) {
    var answer = [];
    //x를 배열에 넣는다 
    for(var i=0; i<n; i++){
        answer.push(x*(i+1))
        // console.log(answer);
    }
    
    return answer;
}