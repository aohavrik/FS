# завдання №1
num1 = float(input('Введіть число 1: '))
num2  = float(input('Введіть число 2: '))

res1 = num1 + num2
res2 = num1 * num2

print(f'сума чисел {res1}, добуток чисел {res2}')

#завдання №2

sal = float(input('введіть зарплату: '))
credit = float(input('введіть платіж по кредиту: '))
comun = float(input('введіть платіж по комунальним послугам: '))

rem= sal - credit - comun

print(f'залишок після уплати платижів {rem}')

#завдання №3

d1 = int(input('Введіть довжину першої діагоналі: '))
d2 = int(input('Введіть довжину другої діагоналі: '))

S_romb = (d1 * d2)/2

print(f'площа ромба дорівнює {S_romb}')

#завдання №4

print('to\nbe or\n not be')

#Завдання №5
print(""" Life  is what
            happens when happens
            when you`re busy 
                    making other 
                        plans""")