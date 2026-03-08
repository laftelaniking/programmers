function solution(arr) {
    //평균은 총합을 갯수로 나눈것
    var answer = 0;
    var average = 0;
    console.log(arr);
    arr.forEach((item)=>{
        answer += item
    })
    console.log('행의 갯수: ' + arr.length);
    console.log(answer/arr.length);
    average = answer/arr.length;
    answer = average
    return answer;
}