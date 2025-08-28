function solution(n)
{
    var answer = 0;
    var str = '';
    // 각각을 나누고 더한다
    str = String(n);
    str = str.split('')

    for(var i=0; i<str.length;i++){
      console.log(i, str[i])
      answer += Number(str[i])
      
    }
    
    console.log(answer)

    return answer;
}