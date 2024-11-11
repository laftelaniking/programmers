def solution(k, m, score):
    answer = 0
    score.sort(reverse=True)
    #print(score)
    
    answer=sum([score[m*i-1]*m for i in range(1,int(len(score)/m)+1)])
    return answer