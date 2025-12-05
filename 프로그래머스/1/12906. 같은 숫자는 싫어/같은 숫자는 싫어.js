function solution(arr)
{
    var narr = [];    
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    //console.log(arr[arr.length-1])
    //console.log(narr[narr.length-1])
    
    // 새로운 배열 변수narr를 만들고 거기다 집어넣으면 될듯 연속하면 안넣고 다르면 넣는 식으로
    // narr의 마지막 요소와 비교한다
    for(var i=0; i<arr.length; i++){
        if(i==0){
            narr.push(arr[i]);
        }else if(narr[narr.length-1] != arr[i]){
            narr.push(arr[i]);
        }
        
    }
    
    return narr;
}