function solution(numbers) {
    var answer = 45;
    //0-9까지의 합을구한다 존재하는 숫자를 뺀다
   for(var i =0;i<numbers.length;i++){
        answer -= numbers[i]
    }
    return answer;
}