#1
start = int(input("Введіть початок діапазону: "))
end = int(input("Введіть кінець діапазону: "))

for num in range(start, end + 1):
    if num > 1:
        is_prime = True
        for i in range(2, int(num ** 0.5) + 1):
            if num % i == 0:
                is_prime = False
                break
        if is_prime:
            print(num, end=" ")
print()
#2
for i in range(1, 11):
    for j in range(1, 11):
        print(f"{i}*{j} = {i * j}", end=" ")
    print("\n" + "." * 30)
print()
#3
start = int(input("Введіть початок діапазону: "))
end = int(input("Введіть кінець діапазону: "))

for i in range(start, end + 1):
    for j in range(1, 11):
        print(f"{i}*{j} = {i * j}", end=" ")
    print("\n" + "." * 30)
print()
