function solution(n) {
    var answer = 0;
    //배열로 변경하고 sort()로 정렬
    //for문이나 array.from으로 배열로 변경하고 sort
    //다시 문자열로 변경 join('')
    n = String(n)
    n = n.split('');
    n.sort((a,b)=>{return b-a})
    // console.log(n.join(''));
    answer = Number(n.join(''));
    console.log(answer)
    return answer;
}