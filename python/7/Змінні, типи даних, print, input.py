#### Складні:
name = input("Введіть ім'я: ")
year = int(input("Введіть рік народження: "))
city = input("Введіть місто проживання: ")

card = f"""
Ім'я: {name}
Рік народження: {year}
Місто: {city}
"""
print(card)



#10
print("Введіть 5 улюблених фільмів:")
movie1 = input("Фільм 1: ")
movie2 = input("Фільм 2: ")
movie3 = input("Фільм 3: ")
movie4 = input("Фільм 4: ")
movie5 = input("Фільм 5: ")

print("\n=== Ваші улюблені фільми ===")
print(f"""
фільм 1: {movie1}
фільм 2: {movie2}
фільм 3: {movie3}
фільм 4: {movie4}
фільм 5: {movie5}
""")



#11
length = float(input("Введіть довжину коробки (м): "))
width = float(input("Введіть ширину коробки (м): "))
height = float(input("Введіть висоту коробки (м): "))

volume = length * width * height
print(f"Об'єм коробки: {volume} кубічних метрів.")


#12
age = int(input("Скільки вам років? "))
pension = 65

years = max(0, pension - age)
months = years * 12

print(f"До пенсії залишилось {years} років або {months} місяців.")

#13
print("Введіть назви трьох продуктів та їхні ціни:")

product1 = input("Продукт 1: ")
price1 = float(input(f"Ціна {product1}: "))

product2 = input("Продукт 2: ")
price2 = float(input(f"Ціна {product2}: "))

product3 = input("Продукт 3: ")
price3 = float(input(f"Ціна {product3}: "))

total = price1 + price2 + price3

print("ЧЕК")
print(f"{product1} {price1} грн")
print(f"{product2} {price2} грн")
print(f"{product3} {price3} грн")
print("-" * 30)
print(f"Загальна сума:{total} грн")


#14
distance = int(input("Введіть відстань поїздки (км): "))
fuel_rashod = int(input("Введіть витрату пального (л/100 км): "))
fuel_price = int(input("Введіть ціну пального (грн/л): "))

fuel_needed = (distance * fuel_rashod) / 100
cost = fuel_needed * fuel_price

print(f"Вартість поїздки: {cost} грн.")
