process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    // console.log(a);
    // console.log(b);
   // console.log(data);
    //첫줄에 a개수만큼*를 출력하고 개행을하는 기능
    //a를 감싼 b형태의 for문이 될듯
    for(var i=0;i<b;i++){
        console.log('*'.repeat(a));
        // for(var j=0;j<b;j++){
        //     console.log('*')
        // }
    }
});