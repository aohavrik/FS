# авдання 1
# У списку цілих, заповненому випадковими числами
# обчислити:
# ■ суму від'ємних чисел;
# ■ суму парних чисел;
# ■ суму непарних чисел;
# ■ добуток елементів з індексами кратними 3;
# ■ добуток елементів між мінімальним і максимальним
# елементом;
# ■ суму елементів, що знаходяться між першим та
# останнім додатними елементами.
#
import random


n = int(input("Введіть кількість елементів у списку: "))
arr = [random.randint(-20, 20) for _ in range(n)]
print("Список:", arr)

sum_negative = 0
for x in arr:
    if x < 0:
        sum_negative += x

sum_even = 0
for x in arr:
    if x % 2 == 0:
        sum_even += x

sum_odd = 0
for x in arr:
    if x % 2 != 0:
        sum_odd += x

product_indices_3 = 1
for i in range(len(arr)):
    if i % 3 == 0:
        product_indices_3 *= arr[i]

min_index = 0
max_index = 0
for i in range(len(arr)):
    if arr[i] < arr[min_index]:
        min_index = i
    if arr[i] > arr[max_index]:
        max_index = i

start = min(min_index, max_index)
end = max(min_index, max_index)

product_between_min_max = 1
if end - start > 1:
    for i in range(start + 1, end):
        product_between_min_max *= arr[i]

positive_indices = []
for i in range(len(arr)):
    if arr[i] > 0:
        positive_indices.append(i)

sum_between_positives = 0
if len(positive_indices) > 1:
    for i in range(positive_indices[0] + 1, positive_indices[-1]):
        sum_between_positives += arr[i]

print("Сума від'ємних чисел:", sum_negative)
print("Сума парних чисел:", sum_even)
print("Сума непарних чисел:", sum_odd)
print("Добуток елементів із індексами кратними 3:", product_indices_3)
print("Добуток елементів між мінімальним і максимальним:", product_between_min_max)
print("Сума елементів між першим і останнім додатними:", sum_between_positives)



# Завдання 2
# Напишіть спрощений аналог гри Морський бій. Гра
# полягає в тому, що програма випадковим чином розміщує
# на полі матриці розміром 5x5 корабель, що займає одну
# клітинку. Користувач має вгадати його розміщення,
# вводячи з клавіатури координати свого пострілу. Якщо
# відстань від точки пострілу до корабля більше 2, програма
# має вивести відповідь “Холодно”, якщо відстань до
# корабля дорівнює 2 — “Тепло”, якщо ж відстань дорівнює
# 1 — “Жарко”. Гра триває доти, доки користувач не
# влучить у корабель або в нього закінчаться спроби

import random

# Поле гри 5x5
grid_size = 5
ship_row = random.randint(0, grid_size - 1)
ship_col = random.randint(0, grid_size - 1)
print("Корабель встановлено. (Для тестування: корабель на позиції", (ship_row, ship_col), ")")

# Гра
attempts = 5
while attempts > 0:
    print(f"\nУ вас залишилося {attempts} спроб(и).")
    user_row = int(input("Введіть номер рядка (0-4): "))
    user_col = int(input("Введіть номер стовпця (0-4): "))

    if user_row < 0 or user_row >= grid_size or user_col < 0 or user_col >= grid_size:
        print("Неправильні координати. Введіть значення від 0 до 4.")
        continue

    # Обчислення відстані
    dist = abs(user_row - ship_row) + abs(user_col - ship_col)

    if dist == 0:
        print("Влучили! Ви потопили корабель!")
        break
    elif dist == 1:
        print("Жарко!")
    elif dist == 2:
        print("Тепло!")
    else:
        print("Холодно!")

    attempts -= 1

if attempts == 0:
    print("Спроби закінчились. Ви програли. Корабель був на позиції:", (ship_row, ship_col))
