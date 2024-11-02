#1
time_in_seconds = int(input("Введіть час у секундах з початку дня: "))
remaining_seconds = 60*60*24 - time_in_seconds

hours = remaining_seconds // 60*60
mins = (remaining_seconds % 60*60) // 60
sec = remaining_seconds % 60

print(f"До півночі залишилось: {hours} годин, {mins} хвилин, {sec} секунд")

#2
diameter = int(input("Введіть діаметр кола: "))
choice = input("Введіть 'площа' для обчислення площі або 'периметр' для обчислення периметру: ").strip().lower()

if choice == "площа":
    areaS = 3.14 * (diameter / 2) ** 2
    print(f"Площа кола: {areaS}")
elif choice == "периметр":
    perimeter = 3.14 * diameter
    print(f"Периметр кола: {perimeter}")
else:
    print("Невірний вибір.")

#3
price_cons = int(input("Введіть вартість однієї приставки: "))
kilkist = int(input("Введіть кількість приставок: "))
discount = int(input("Введіть відсоток знижки: "))
choice = input("Введіть 'загальна' для загальної суми замовлення або 'зі знижкою' для вартості однієї приставки зі знижкою: ").strip().lower()

discount_factor = 1 - (discount / 100)

if choice == "загальна":
    total_price = price_cons * kilkist * discount_factor
    print(f"Загальна сума замовлення зі знижкою: {total_price}")
elif choice == "зі знижкою":
    discounted_price = price_cons * discount_factor
    print(f"Вартість однієї приставки зі знижкою: {discounted_price}")
else:
    print("Невірний вибір.")

#4
size_gb = float(input("Введіть розмір файлу у гігабайтах: "))
internet_speed = int(input("Введіть швидкість інтернет-з'єднання в бітах за секунду: "))
choice = input("Введіть 'години', 'хвилини' або 'секунди' для розрахунку часу завантаження: ").strip().lower()

size_bits = size_gb * 8 * (1024 ** 3)
time_seconds = size_bits / internet_speed

if choice == "години":
    time_hours = time_in_seconds / 60*60
    print(f"Час завантаження: {time_hours} годин")
elif choice == "хвилини":
    time_minutes = time_in_seconds / 60
    print(f"Час завантаження: {time_minutes} хвилин")
elif choice == "секунди":
    print(f"Час завантаження: {time_in_seconds} секунд")
else:
    print("Невірний вибір.")

#5
hours = int(input("Введіть кількість годин (0-23): "))

if 0 <= hours < 6:
    print("Good Night")
elif 6 <= hours < 13:
    print("Good Morning")
elif 13 <= hours < 17:
    print("Good Day")
elif 17 <= hours < 24:
    print("Good Evening")
else:
    print("Невірний ввід. Введіть годину від 0 до 23.")
