#1
side = int(input("введіть розмір квадрата: "))
for i in range(side):
    print("*" * side)

#2
width = int(input("Введіть ширину прямокутника: "))
height = int(input("Введіть висоту прямокутника: "))
for i in range(height):
    print("*" * width)

#3
side = int(input("Введіть розмір сторони квадрата: "))
for i in range(side):
    if i == 0 or i == side - 1:
        print("*" * side)
    else:
        print("*" + " " * (side - 2) + "*")

#4
width = int(input("Введіть ширину прямокутника: "))
height = int(input("Введіть висоту прямокутника: "))
for i in range(height):
    if i == 0 or i == height - 1:
        print("*" * width)
    else:
        print("*" + " " * (width - 2) + "*")