def solution(n, m, section):
    answer = 0
    if m == 1:
        answer = len(section)
        return answer
    
    section_copy= set(section[:])

    for i in section:
        if i in section_copy:
            section_copy = section_copy - {j for j in range(i, i+m)}
            answer+=1
    
        
     
    return answer