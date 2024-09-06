# 첫 번째 숫자(세 자리 수)
A = int(input())

# 두 번째 숫자(세 자리 수)
# B = int(input())틀림? 왜?
B = input() # 문자열로 입력받아 처리


# B의 각 자리 수와 A를 곱한 값을 출력
print(A * int(B[2])) # B의 1의 자리 수
print(A * int(B[1])) # B의 10의 자리 수
print(A * int(B[0])) # B의 100의 자리 수

# A와 B 전체 곱한 값 출력!
print(A * int(B))