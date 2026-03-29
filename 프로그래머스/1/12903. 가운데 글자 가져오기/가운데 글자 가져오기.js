function solution(s) {
    var answer = '';
    var mok = parseInt(s.length/2);
    // console.log(s[0]);
    if(s.length%2!=0){
        answer += s[mok]
    }else{
        answer += s[mok-1] + s[mok];
    }
    // console.log(answer)
    return answer;
}