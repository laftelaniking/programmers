def solution(nums):
    answer = 0
    nums = sorted(nums)
    n = sum(nums[-3:])     # 세 수를 합했을 때 가장 큰 수  
    num = set(range(2, n+1))
    nums_li = []

    for i in range(2, n+1):
        if i in num:
            num -= set(range(i*2, n+1, i))  # 소수의 집합
    
    # nums의 세 수를 더한 값이 num에 들어있을 경우 answer에 +1 한다
    for i in range(0, len(nums)-2):
        for j in range(i+1, len(nums)-1):
            for k in range(j+1, len(nums)):
                nums_li.append(nums[i] + nums[j] + nums[k])  #리스트는 중복을 허용한다
    # print(nums_li)
    for i in nums_li:
        if i in num:
            answer += 1
    # print(answer)


    return answer