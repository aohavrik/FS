#1
start = int(input("Введіть перше число: "))
end = int(input("Введіть друге число: "))

if start < end:
    i = start
    while i <= end:
        print(i)
        i += 1
else:
    print('error')

#2
first = int(input("Введіть перше число: "))
second = int(input("Введіть друге число: "))
if first < second:
    i = first
    while i <= second:
         if i % 2 != 0:
              print(i)
         i += 1
else:
    print('error')
#3
start2 = int(input("Введіть перше число: "))
end2 = int(input("Введіть друге число: "))

if start2 < end2:
    i = start2
    while i <= end2:
        if i % 2 == 0:
            print(i)
        i += 1
else:
    print('error')
#4
start3 = int(input("Введіть перше число: "))
end3 = int(input("Введіть друге число: "))

if start3 < end3:
    i = end3
    while i >= start3:
        print(i)
        i -= 1
else:
    print('error')

#5

start5 = int(input("Введіть перше число: "))
end5 = int(input("Введіть друге число: "))

if start5 > end5:
    start5, end5 = end5, start5

i = start5
while i <= end5:
    if i % 2 != 0:
        print(i)
    i += 1

