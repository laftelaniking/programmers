def solution(a, b):
    answer = ''
    days = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    
    result = sum(days[0:a-1]) + b
    # print(result)
    day_num = result % 7
    print(day_num)
    if day_num == 1:
        answer = "FRI"
    elif day_num == 2:
        answer = "SAT"
    elif day_num == 3:
        answer = "SUN"
    elif day_num == 4:
        answer = "MON"
    elif day_num == 5:
        answer = "TUE"
    elif day_num == 6:
        answer = "WED"
    elif day_num == 0:
        answer = "THU"
    return answer