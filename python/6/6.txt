#1
num1 = int(input("Введіть перше число: "))
num2 = int(input("Введіть друге число: "))

sum = sum(range(num1, num2 + 1))

count = abs(num2 - num1) + 1
average = sum / count

print(f"Сума чисел у діапазоні [{num1}, {num2}]: {sum}")
print(f"Середнє арифметичне чисел у діапазоні [{num1}, {num2}]: {average}")

#2
fuc_num = int(input("Введіть факторіал: "))

factorial = 1
for i in range(1, fuc_num + 1):
    factorial *= i

print(f"Факторіал числа {fuc_num} дорівнює: {factorial}")

#3

length = int(input("Введіть довжину: "))
print("*" * length)

#4

length2 = int(input("Введіть довжину: "))
symvol = input("Введіть символ: ")

print(symvol * length2)

