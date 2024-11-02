#1
num = int(input("введіть число провірки парного числа:"))

if num % 2 == 0:
    print('«Even number»')
else:
    print("Odd number")

#2
num2 = int(input("Введіть число: "))

if num2 % 7 == 0:
    print(f"{num2} is multiple 7")
else:
    print(f"{num2} is not multiple 7")

#3
num3_1 = int(input("Введіть перше число: "))
num3_2 = int(input("Введіть друге число: "))

if num3_1 > num3_2:
    print(f"Максимум із двох чисел: {num3_1}")
else:
    print(f"Максимум із двох чисел: {num3_2}")

#4
num4_1 = int(input("Введіть перше число: "))
num4_2 = int(input("Введіть друге число: "))
if num4_1 < num4_2:
    print(f"Мінімум із двох чисел: {num4_1}")
else:
    print(f"Мінімум із двох чисел: {num4_2}")

#5
num5_1 = float(input("Введіть перше число: "))
num5_2 = float(input("Введіть друге число: "))

operation = input("Виберіть операцію (+, -, *, /): ")

if operation == "+":
    res = num5_1 + num5_2
    print(f"Сума чисел: {res}")
elif operation == "-":
    res = num5_1 - num5_2
    print(f"Різниця чисел: {res}")
elif operation == "*":
    res = num5_1 * num5_2
    print(f"Добуток чисел: {res}")
elif operation == "/":
    if num5_2 != 0:
        res = (num5_1 + num5_2) / 2
        print(f"Середнє арифметичне чисел: {res}")
    else:
        print("Ділення на нуль неможливе")
else:
    print("Неправильний вибір операції")

