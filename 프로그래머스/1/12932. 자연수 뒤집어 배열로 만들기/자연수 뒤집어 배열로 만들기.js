function solution(n) {
    var answer = [];
    var str = '';
    
    str = String(n);
    str=str.split('');
    console.log(str);
    str.forEach(function(a,i){
        console.log(a,i);
        str[i] = Number(a)
    })
    console.log(str);  
    answer = str.reverse();
    return answer;
}