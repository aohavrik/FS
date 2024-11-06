#1
num_day = int(input('Введіть номер дня тиждня: '))

if num_day <= 0 or num_day > 7:
    print("Помилка")
elif num_day == 1:
    print('Понеділок')
elif num_day == 2:
    print('Вівторок')
elif num_day == 3:
    print('Середа')
elif num_day == 4:
    print('Четверг')
elif num_day == 5:
    print("П'ятниця")
elif num_day == 6:
    print('Субота')
else:
    print('Неділя')

#2



rating = float(input('Введіть оцінку(цифра): '))


if rating == 5 :
    print(f'{rating} = "A"')
elif 4.0 < rating <=4.9:
    print(f'{rating} = "B"')
elif 3 < rating <=3.9:
    print(f'{rating} = "C"')
elif 2 < rating <=2.9:
    print(f'{rating} = "D"')
elif 1 < rating <=1.9:
    print(f'{rating} = "F"')
else:
    print('Error')




#3


weight = float(input("введіть вагу: "))

if weight > 120:
    print('ожиріння')
elif 100 < weight <= 120:
    print('Зайва')
elif  60 < weight <= 100:
    print('Нормальна')
else:
    print('Недостатня')