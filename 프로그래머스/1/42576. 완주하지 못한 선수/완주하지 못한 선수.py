import collections

# Counter의 값은 dict형태
def solution(participant, completion):  
    answer = collections.Counter(participant) - collections.Counter(completion)
    print(answer.keys())
    return list(answer.keys())[0]
    
    
        