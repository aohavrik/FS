#1
num1 = int(input("Введіть перше додатнє число: "))
num2 = int(input("Введіть друге додатнє число: "))

while num2 != 0:
    num1, num2 = num2, num1 % num2

print(f"Найбільший спільний дільник: {num1}")

#2
print("""Конвертер валют
1. USD в EUR")
2. EUR в USD
3. USD в UAH
4. UAH в USD
5. EUR в UAH
6. UAH в EUR""")

choice = int(input("Виберіть операцію (1-6): "))
amount = float(input("Введіть суму для конвертації: "))

if choice == 1:
    print(f"{amount} USD = {amount * 0.85} EUR")
elif choice == 2:
    print(f"{amount} EUR = {amount * 1.18} USD")
elif choice == 3:
    print(f"{amount} USD = {amount * 41.5} UAH")
elif choice == 4:
    print(f"{amount} UAH = {amount * 0.027} USD")
elif choice == 5:
    print(f"{amount} EUR = {amount * 43.5} UAH")
elif choice == 6:
    print(f"{amount} UAH = {amount * 0.023} EUR")
else:
    print("Невірний вибір.")
#3
start = int(input("Введіть початок діапазону: "))
end = int(input("Введіть кінець діапазону: "))

while True:
    number = int(input("Введіть число в діапазоні: "))
    if start <= number <= end:
        break
    else:
        print("Число не в діапазоні, спробуйте знову.")

for i in range(start, end + 1):
    if i == number:
        print(f"!{i}!", end=" ")
    else:
        print(i, end=" ")
print()
#4
import random

rounds = int(input("Введіть кількість раундів: "))
player_score = 0
computer_score = 0

for _ in range(rounds):
    player_choice = input("Ваш вибір (камінь, ножиці, папір): ").strip().lower()
    if player_choice not in ["камінь", "ножиці", "папір"]:
        print("Невірний вибір, спробуйте ще раз.")
        continue

    computer_choice = random.choice(["камінь", "ножиці", "папір"])
    print(f"Комп'ютер обрав: {computer_choice}")

    if player_choice == computer_choice:
        print("Цей раунд - нічия.")
    elif (player_choice == "камінь" and computer_choice == "ножиці") or \
            (player_choice == "ножиці" and computer_choice == "папір") or \
            (player_choice == "папір" and computer_choice == "камінь"):
        player_score += 1
        print("Ви виграли цей раунд!")
    else:
        computer_score += 1
        print("Комп'ютер виграв цей раунд.")


print(f"\nПідсумок гри: Гравець {player_score} - {computer_score} Комп'ютер")
if player_score > computer_score:
    print("Ви перемогли!")
elif player_score < computer_score:
    print("Переміг комп'ютер!")
else:
    print("Гра завершилась нічиєю.")
