function solution(n) {
    var answer = '';
    //2로 나눈 몫만큼 "수박"을 곱하고
    //나머지가 있다면 "수"를 추가한다
    var mok = parseInt(n/2);
    answer = "수박".repeat(mok);
    
    if(n%2){
        answer += "수";
        // console.log(n%2);
    }
    console.log(answer);
    
    return answer;
}