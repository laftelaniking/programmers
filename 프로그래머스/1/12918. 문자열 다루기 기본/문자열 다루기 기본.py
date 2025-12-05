def solution(s):
    answer = True
    number = '0123456789'
    # number = ['0','1','2','3','4','5','6','7','8','9']
    if len(s) == 4 or len(s) ==6:
        for item in s:
            if list(number).count(item) == 0:
                return False
    else:
        return False
    return answer