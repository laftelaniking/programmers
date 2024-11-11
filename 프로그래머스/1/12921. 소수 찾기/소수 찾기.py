def solution(n):
    answer = 1
    
    for i in range(2, n+1):    # 1은 약수가 아니므로 2부터 시작
        # n_list=[j for j in range(1, int(i**(1/2))+1) if i%j ==0]   
        for j in range(1, int(i**(1/2))+1):
            if i%j ==0 and j != 1:
                answer += 1 
                break
               
    answer = n - answer
    return answer