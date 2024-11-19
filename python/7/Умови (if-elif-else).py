# Складні:
#9
age = int(input("Введіть ваш вік: "))
club = input("Ви є членом клубу? (так/ні): ")

if age < 18 or age > 60 or club == "так":
    print("Вам доступна знижка!")
else:
    print("На жаль, знижка недоступна.")

#10
temperature = int(input("Введіть температуру (°C): "))

if temperature < 10:
    print("Одягніть куртку")
elif 10 <= temperature <= 20:
    print("Одягніть светр")
else:
    print("Одягніть футболку")

#11

location = input("Де ви знаходитесь? (вдома/на вулиці/на роботі): ")
day = input("Який зараз час доби? (ранок/день/вечір): ")

if location == "вдома":
    if day == "ранок":
        print("Рекомендація: зробіть зарядку.")
    elif day == "день":
        print("Рекомендація: прочитайте книгу.")
    else:
        print("Рекомендація: подивіться фільм.")
elif location == "на вулиці":
    print("Рекомендація: прогуляйтесь або займіться спортом.")
elif location == "на роботі":
    print("Рекомендація: зосередьтесь на завданнях.")
else:
    print("Невідоме місцезнаходження.")

#12
distance = float(input("Введіть відстань доставки (км): "))
order = float(input("Введіть суму замовлення ($): "))

if order > 50:
    print("Доставка безкоштовна!")
else:
    if distance <= 5:
        cost = 5
    elif distance <= 20:
        cost = 10
    else:
        cost = 20
    print(f"Вартість доставки: ${cost:}")

#13
grade = float(input("Введіть середню оцінку студента: "))
absences = int(input("Введіть кількість пропущених занять: "))

if grade > 85 and absences == 0:
    print("Студент має право на нагороду!")
else:
    print("На жаль, студент не відповідає умовам для нагороди.")

#14
worked = float(input("Введіть кількість відпрацьованих годин за тиждень: "))
rate = float(input("Введіть погодинну ставку ($): "))

if worked > 40:
    overtime_hours = worked - 40
    regular = 40 * rate
    overtime = overtime_hours * rate * 1.5
    total = regular + overtime
else:
    total = worked * rate

print(f"Ваша тижнева зарплата: {total}$")

#15
print("Меню :")
print("1. Кава - 2.50грн")
print("2. Чай - 1.50грн")
print("3. Сік - 3.00грн")

choice = int(input("Виберіть товар (1, 2 або 3): "))
quantity = int(input("Введіть кількість: "))

if choice == 1:
    price = 2.50
    item = "Кава"
elif choice == 2:
    price = 1.50
    item = "Чай"
elif choice == 3:
    price = 3.00
    item = "Сік"
else:
    print("Невірний вибір.")
    exit()

total = price * quantity
print(f"Ви обрали {item}. Загальна вартість: {total:.2f} грн")

