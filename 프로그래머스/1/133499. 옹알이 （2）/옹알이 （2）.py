def solution(babbling):
    # babbling = ["ayaye", "uuu", "yeyeyeyeye", "yemawoo", "ayaayaa"]
#   "aya", "ye", "woo", "ma"
# 미리 발음가능한 모든 문자를 만들어둔다?
# 4x3x4x3x4x3 경우의 수가 너무 많다.
# ayaaya, yeye, woowoo, mama 는 우선 제거하자 
# ayaaya, yeye, woowoo, mama가 문자내에 있으면 그 문자 제거
# aya, ye, woo, ma 를 전부 제거 
# len(i) 가 0이면 remove(i) 
# len(copy2) > 0 이면
# answer = len(copy) - len(copy2)
    answer = 0
    copy = babbling[:]
    copy2 = []
    
    # 2개 이상 연속인 것 제거된다.
    for i in babbling:
        for j in ['ayaaya', 'yeye', 'woowoo', 'mama']:
            if j in i:
                copy.remove(i)
                # print(copy)
                break
    print(f'copy는 {copy}')
    
    # 발음 가능한 걸 모두 제거한다. 그러면 발음 못 하는 것만 남는다
    for i in copy:
        for j in ['aya', 'ye', 'woo', 'ma']:
            i = i.replace(j, ' ')
            if len(i) == 0:
                break
        i = i.strip()
        print(f'i는 {i}')
        if i :  # 여길 문자열인지 확인 하는 걸로 바꿔야 할거같다 strip() 사용
            copy2.append(i)
    print(f'copy2는 {copy2}')
    # 이렇게 해도 해당되지 않는 건 뭐지?
    
    # 발음 할 수 있는 단어의 개수 answer
    answer = len(copy) - len(copy2)
    return answer