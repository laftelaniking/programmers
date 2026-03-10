function solution(s) {
    var answer = 0;
    var sign = 1;
    console.log(s)
    //s가 -+를 포함하고 있을때, 제거하고 -였으면 >> -1곱 
    // console.log(s.indexOf('-'))
    if(s.indexOf('-')!=-1){
        answer = s.replace('-','');
        console.log('-제거됨')
        sign = -1;
    }else if(s.indexOf('+')!=-1){
        answer = s.replace('+','');
        console.log('+제거됨')
    }else{
        answer = s
    }
    answer = answer * sign
    
    return answer;
}