function solution(x) {
    var answer = true;
    var hap = 0;
    var newX = 0;
    
    // 10으로 나눈 몫과 나머지로 각 자리수를 구한다.또는 문자열 >> 배열로 변경해서 각자리 수를 구한다.
    // hap으로 x를 나눴을때 나머지가 0이면 true
    newX = String(x).split('').map(Number)
    newX.forEach((i) => {
        hap += i
    })

    // console.log(typeof x)
    // console.log(x.map(Number))
    // console.log(x)
    // console.log(hap)
    if(x%hap==0){
        answer = true;
    }else{
        answer = false;
    }
    
    return answer;
}