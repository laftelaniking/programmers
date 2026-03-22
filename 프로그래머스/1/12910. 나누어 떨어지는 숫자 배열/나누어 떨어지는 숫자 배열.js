function solution(arr, divisor) {
    var answer = [];
    //먼저 정렬을 시켜
    //나눠
    arr.sort((a,b)=>a-b).map((x)=> x%divisor==0 ? answer.push(x): -1)
    console.log(arr)
    console.log(answer)
    if(answer.length==0){
        answer.push(-1)
    }
    return answer;
}