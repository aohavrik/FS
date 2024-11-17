# #1
number = input("Введіть число: ")
num_len = 0
sum_digits = 0
zero_count = 0

for digit in number:

        num_len += 1
        sum_digits += int(digit)
        if digit == '0':
            zero_count += 1

if num_len > 0:
    average = sum_digits / num_len
    print(f"Кількість цифр: {num_len}")
    print(f"Сума цифр: {sum_digits}")
    print(f"Середнє арифметичне: {average:.2f}")
    print(f"Кількість нулів: {zero_count}")
else:
    print("Введене число не містить цифр.")

# #2
size = int(input("Pозмір клітинки: "))
cell = int(input("Введіть кількість клітинок: "))

for row in range(cell * size * 2):
    for col in range(cell * size * 2):
        if ((row // size) + (col // size)) % 2 == 0:
            print('*', end='')
        else:
            print('-', end='')
    print()

# #3
level = input("Оберіть рівень складності (junior / midle / sir): ")

if level == 'junior':
    count = 5
    low_num = 2
    high_num = 6
elif level == 'midle':
    count = 7
    low_num = 3
    high_num = 12
elif level == 'sir':
    count = 7
    low_num = 3
    high_num = 12
else:
    print("Невідомий рівень складності")
    count = 0


for i in range(count):

    a = (low_num + i * 3) % (high_num + 1 - low_num) + low_num
    b = (low_num + i * 2) % (high_num + 1 - low_num) + low_num

    user_res = input(f'{a} * {b} = ')
    correct_res = a * b

    if user_res and int(user_res) == correct_res:
        print("Правильно!")
    else:
        print(f"Неправильно. Правильна відповідь: {correct_res}")

#4
row2 = int(input("Введіть кількість рядків для ромба: "))

for i in range(row2):
    print(" " * (row2 - i - 1) + "*" * (2 * i + 1))
for i in range(row2 - 2, -1, -1):
    print(" " * (row2 - i - 1) + "*" * (2 * i + 1))

