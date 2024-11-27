#1
num_students = int(input("Введіть кількість студентів: "))
num_works = int(input("Введіть кількість практичних робіт: "))

for student in range(1, num_students + 1):
    total_score = 0
    print(f"\nВведіть оцінки для студента {student}:")
    for work in range(1, num_works + 1):
        score = int(input(f"Оцінка за роботу {work}: "))
        total_score += score
    average_score = total_score / num_works
    print(f"Середній бал студента {student}: {average_score}")

#2
num = int(input("Введіть число для конвертації в римське (1-3999): "))

roman_numerals = [
    (1000, "M"), (900, "CM"), (500, "D"), (400, "CD"),
    (100, "C"), (90, "XC"), (50, "L"), (40, "XL"),
    (10, "X"), (9, "IX"), (5, "V"), (4, "IV"), (1, "I")
]

roman_result = ""
for value, symbol in roman_numerals:
    while num >= value:
        roman_result += symbol
        num -= value

print("Римське представлення:", roman_result)


#3
import math

value = 0.1
while value < 1:
    print(f"√({value:.1f}) = {math.sqrt(value):.4f}")
    value += 0.1

#4
n = int(input("Введіть кількість чисел N: "))
result = 0

for i in range(1, n + 1):
    a = int(input(f"Введіть число a{i}: "))
    if i % 2 == 0:
        result -= a
    else:
        result += a

print("Результат виразу:", result)
