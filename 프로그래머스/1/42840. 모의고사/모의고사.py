def solution(answers):
    answer = []
    supo1= [1,2,3,4,5]
    supo2=[2,1,2,3,2,4,2,5]
    supo3=[3,3,1,1,2,2,4,4,5,5]
    supo1_cnt=0
    supo2_cnt=0
    supo3_cnt=0
    #answers를 각 수포자의 답의 수로 나누었을 때 나머지와  
    
    supo1 = supo1*(len(answers)//5)+supo1[0:len(answers)%5]
    supo2 = supo2*(len(answers)//8)+supo2[0:len(answers)%8]
    supo3 = supo3*(len(answers)//10)+supo3[0:len(answers)%10]
#     while len(supo1)<=len(answers):
#         supo1 += [1,2,3,4,5]
    
#     while len(supo2)<len(answers):
#         supo2 += [2,1,2,3,2,4,2,5]
    
#     while len(supo3)<len(answers):
#         supo3 += [3,3,1,1,2,2,4,4,5,5]
    
    # supo1 = supo1[:-(len(supo1)-len(answers))]
    # supo2 = supo2[:-(len(supo2)-len(answers))]
    # supo3 = supo3[:-(len(supo3)-len(answers))]
    
    for i in range(len(answers)):
        if supo1[i]==answers[i]:
            supo1_cnt+=1
        if supo2[i]==answers[i]:
            supo2_cnt+=1
        if supo3[i]==answers[i]:
            supo3_cnt+=1

    supo_dic= { 1:supo1_cnt , 2:supo2_cnt, 3:supo3_cnt}
    answer = [k for k, v in supo_dic.items() if max(supo_dic.values()) == v]
    
    return answer