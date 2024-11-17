#1
for i in range(1, 51):
    if i % 2 == 0:
        print(i)
# #2        
sum = 0
for i in range(0, 1001):
    sum = sum + i
print(sum)

# #3
n = 5
res = 1
for i in range(1, 11):
    res= i*n
print(f'{i} * {n} {res}')

#4
por = 11
while 0 < por:
    por -= 1
    print(por)

#5
for i in range(1, 11):
    sqr = i*i
    print(sqr)

    #6 елочка
    height = int(input('num: '))

    for i in range(height):
        print(" " * (height - i - 1), end="")
        print("*" * (2 * i + 1))