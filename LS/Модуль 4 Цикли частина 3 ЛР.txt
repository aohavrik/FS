#
start = int(input("Введіть початок діапазону: "))
end = int(input("Введіть кінець діапазону: "))

even_sum = odd_sum = divisible_by_9_sum = 0
even_count = odd_count = divisible_by_9_count = 0

for number in range(start, end + 1):
    if number % 2 == 0:
        even_sum += number
        even_count += 1
    else:
        odd_sum += number
        odd_count += 1
    if number % 9 == 0:
        divisible_by_9_sum += number
        divisible_by_9_count += 1

even_avg = even_sum / even_count if even_count > 0 else 0
odd_avg = odd_sum / odd_count if odd_count > 0 else 0
divisible_by_9_avg = divisible_by_9_sum / divisible_by_9_count if divisible_by_9_count > 0 else 0

print(f"Сума парних чисел: {even_sum}, Середнє: {even_avg}")
print(f"Сума непарних чисел: {odd_sum}, Середнє: {odd_avg}")
print(f"Сума чисел, кратних 9: {divisible_by_9_sum}, Середнє: {divisible_by_9_avg}")

#2
length = int(input("Введіть довжину лінії: "))
symbol = input("Введіть символ для заповнення: ")

for _ in range(length):
    print(symbol)

#3
length = int(input("Введіть довжину лінії: "))
symbol = input("Введіть символ для заповнення: ")

for _ in range(length):
    print(symbol)
#4
sum_numbers = 0
count = 0
min_number = float('inf')
max_number = float('-inf')

while True:
    number = input("Введіть число (або 'q' для завершення): ")
    if number.lower() == 'q':
        break

    number = int(number)
    sum_numbers += number
    count += 1

    if number > max_number:
        max_number = number
    if number < min_number:
        min_number = number

if count > 0:
    print(f"Сума чисел: {sum_numbers}")
    print(f"Максимум: {max_number}")
    print(f"Мінімум: {min_number}")
else:
    print("Жодного числа не було введено.")
