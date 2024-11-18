def solution(nums):
    answer = 0
    sp = int(len(nums)/2)    #뽑을 수 있는 포켓몬의 
    nums = len(set(nums))     #전체 포켓몬 종류 수
    
    answer = min(nums, sp)

    return answer    