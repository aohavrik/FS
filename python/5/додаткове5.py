#1
count = 0
sum = 0

while count < 3:
    num = float(input(f"Введіть число {count + 1}: "))

    if count == 0 and num == 0:
        print("перше введене число не може бути нулем.")
        break

    sum += num
    count += 1

if count == 3:
    average = sum / 3
    print("Середнє значення введених чисел:", average)

#2

count = 5
index = 1

while index <= count:

    price = float(input(f"Введіть початкову ціну товару {index}: "))

    discount = price * 0.6
    discounted_price = price - discount

    print(f"Початкова ціна: {price:.2f} | Економія: {discount:.2f} | Нова ціна: {discounted_price:.2f}")

    index += 1
