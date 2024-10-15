def solution(number, limit, power):
    answer = 0
    yaksu_num = []
    knights = [ i for i in range(1,number+1)]
    #(i**1/2)을 하면 시간 복잡도가 O(n^1/2)이 되어서 코드가 최적화된다

    for k in knights:
        yaksu = []
        for i in range(1,int(k**(1/2))+1):
            if k%i == 0:
                yaksu.append(i)
                if i**2 != k:
                    yaksu.append(k//i)
        yaksu_num.append(len(yaksu))

    yaksu_num = [i if i <= limit else power for i in yaksu_num]

    answer = sum(yaksu_num)
    return answer