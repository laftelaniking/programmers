function solution(s) {
    //1을 2로 나누었을 때 나머지는 1 몫은 0
    //3을 2로 나누었을 때 나머지 1 몫은 1
    //5을 2로 나누었을 때 나머지 1 몫은 2
    //즉, 문자의 길이가 홀수면 몫으로
    // 짝수면 몫-1, 몫
    var answer = '';
    var mok = parseInt(s.length/2)

    if(s.length%2==1){ //짝수
        answer = s[mok]
    }else{//홀수
        answer = s[mok-1]
        answer += s[mok]
    }
    console.log(answer)
    return answer;
}