#1

num1 = float(input("Введіть перше число: "))
num2 = float(input("Введіть друге число: "))

if num1 == num2:
    print("Числа рівні")
else:
    if num1 < num2:
        print( num1, num2)
    else:
        print( num2, num1)



#2
num3 = float(input("Введіть число: "))
stup = int(input("Введіть ступінь від 0 до 7: "))

if stup == 0:
    result = num3 ** 0
elif stup == 1:
    result = num3 ** 1
elif stup == 2:
    result = num3 ** 2
elif stup == 3:
    result = num3 ** 3
elif stup == 4:
    result = num3 ** 4
elif stup == 5:
    result = num3 ** 5
elif stup == 6:
    result = num3 ** 6
elif stup == 7:
    result = num3 ** 7
else:
    print("Неправильне значення ступеня.")


if result is not None:
    print(f"Число {num3} у ступені {stup} дорівнює {result}")



#3
sales1 = float(input("Введіть рівень продажів для першого менеджера: "))
sales2 = float(input("Введіть рівень продажів для другого менеджера: "))
sales3 = float(input("Введіть рівень продажів для третього менеджера: "))

if sales1 < 500:
    salary1 = 200 + sales1 * 0.03
elif 500 <= sales1 <= 1000:
    salary1 = 200 + sales1 * 0.05
else:
    salary1 = 200 + sales1 * 0.08

if sales2 < 500:
    salary2 = 200 + sales2 * 0.03
elif 500 <= sales2 <= 1000:
    salary2 = 200 + sales2 * 0.05
else:
    salary2 = 200 + sales2 * 0.08

if sales3 < 500:
    salary3 = 200 + sales3 * 0.03
elif 500 <= sales3 <= 1000:
    salary3 = 200 + sales3 * 0.05
else:
    salary3 = 200 + sales3 * 0.08
best_manager = ""
if salary1 >= salary2 and salary1 >= salary3:
    salary1 += 200
    best_manager += " перший менеджер"
elif salary2 >= salary1 and salary2 >= salary3:
    salary2 += 200
    best_manager += " другий менеджер"
else:
    salary3 += 200
    best_manager += " третій менеджер"


print(f"Зарплата першого менеджера: {salary1}, зарплата другого менеджера: {salary2}$, зарплата третього менеджера: {salary3}$.")
print(f"Найкращий менеджер: {best_manager}, йому нарахована премія 200$")


#4

weight = float(input("Введіть вагу замовлення в кг: "))

if weight < 0:
    print("Помилка: вага не може бути від'ємною.")
else:
    if weight <= 1:
        let = 5
    elif weight <= 5:
        let = 10
    elif weight <= 10:
        let = 15
    else:
        let = 20

    print(f"Вартість доставки: {let}$")


