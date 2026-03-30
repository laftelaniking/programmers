function solution(arr) {
    var target = 0;
    var arrCopy = [...arr]; //  배열을 독립적으로 사용하기위해 얕은복사를 함.
    //정렬하라는 말은 어디에도 없다
    //특정 값을 제거한다
    if(arr.length == 1){
        return [-1]
    }
    target = arrCopy.sort((a,b)=>b-a).pop();
    // console.log(target);
    // console.log(arr.indexOf(target));
    arr.splice(arr.indexOf(target), 1);
    
    return arr;
}