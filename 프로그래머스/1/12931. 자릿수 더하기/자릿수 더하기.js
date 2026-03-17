function solution(n)
{
    var hap = 0;
    var mok = n;
    // n을 10으로 나눈 나머지를 구한다
    // 나머지의 합 
    // 몫이 0이 아닐 때까지 반복한다
    while(mok != 0){
        hap += mok % 10
        mok = parseInt(mok / 10)
        console.log("hap: " + hap + " mok: " + mok )
    }
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    // console.log('Hello Javascript')

    return hap;
}