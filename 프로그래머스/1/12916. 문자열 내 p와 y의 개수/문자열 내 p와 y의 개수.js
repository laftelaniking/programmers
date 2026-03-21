function solution(s){
    var answer = true;
    var startIndex = 0;
    var PCount  = 0;
    var YCount  = 0;
    
    //문자열 s를 소문자로 통일한다
    s = s.toLowerCase();
    // console.log(s);
    //indexOf의 반환값이 -1이 아니라면 계속 실행
    startIndex = s.indexOf('p');
    while(startIndex != -1){
        PCount++
        startIndex = s.indexOf('p',startIndex +1)
        // console.log(startIndex, PCount);
    }
    startIndex = s.indexOf('y');
    while(startIndex != -1){
        YCount++
        startIndex = s.indexOf('y',startIndex +1)
        // console.log(startIndex, YCount);
    }
    if(PCount == YCount){
        answer = true;
    }else{
        answer = false;
    }
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    // console.log('Hello Javascript')

    return answer;
}