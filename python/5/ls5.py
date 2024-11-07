# #1
num1 = int(input('Введіть перше число: '))
num1_2 = int(input("Введіть друге число: "))


i = num1
while i < num1_2:
    if i % 7 == 0:
        print(i)
    i+=1

#2
num2 = int(input('Введіть перше число: '))
num2_2 = int(input("Введіть друге число: "))

i = num2
while i <= num2_2:
    print(i)
    i+=1

i = num2_2
while i >= num2:
    print(i)
    i-=1

sve = 0
i = num2
while i < num2_2:
    if i % 7 == 0:
        print(f'число {i} кратне 7')
    if i % 5 == 0:
        sve += 1
    i+=1



print(f'діапазон чисел має {sve} кратних 5 ')

#3

start = int(input('Введіть перше число: '))
end = int(input("Введіть друге число: "))

while start <= end:
    if start % 3 == 0 and start % 5 == 0:
        print('Fizz Buzz')
    elif start % 3 == 0:
        print('Fizz')
    elif start % 5 == 0:
        print('Buzz')
    else:
        print(start)
    start +=1