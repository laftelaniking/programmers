function solution(absolutes, signs) {
    var answer = 0;
    //signs[i] = true이면 양의정수 false이면 음의정수로 만들기
    //합하기
    for(var i = 0; i<signs.length; i++){
        console.log(signs[i]);
        if(signs[i] == false){
            absolutes[i] = absolutes[i] * -1;
        }else{
            absolutes[i] = absolutes[i] * 1;
        }
        answer += absolutes[i];
    }
    console.log(answer)
    return answer;
}