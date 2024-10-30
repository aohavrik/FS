#1
number = int(input("Введіть двозначне число: "))

first_digit = number // 10
second_digit = number % 10

print(first_digit)
print(second_digit)

#2
number = int(input("Введіть двозначне число: "))

first_digit = number // 10
second_digit = number % 10
third_digit = number % 100
sum_digit = first_digit+second_digit+third_digit

print(first_digit)
print(second_digit)
print(third_digit)
#3


cel = float(input("Введіть температуру в градусах Цельсія: "))
far = (cel * 9/5) + 32
print(f"Температура в градусах Фаренгейта: {far}")

#4

num = input("Введіть чотиризначне число: ")
rev_num = number[3] + number[2] + number[1] + number[0]

print("Перевернуте число:", rev_num)