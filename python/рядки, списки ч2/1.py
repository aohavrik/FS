# 1
nums = [1, 33, 16, 12, 24]

print(max(nums))

for i in range(len(nums)):
    nums[i] *= 2
print(nums)

ListNum = [1, 2, 3, 4, 5]

for i in range(len(ListNum)):
    ListNum[i] = ListNum[i] ** 2

for i in range(len(ListNum)):
    ListNum[i]= str(ListNum[i])

ListNum.pop(-1)
print(ListNum)

#2

inp_user = input('введіть  числа списку через пробіл: ')
inp_user_num = int(input('введіть число для підрахунку скільки разів це число зустрічається: '))

arr= list(map(int, inp_user.split()))

culc = 0
for i in range(len(arr)):
    if arr[i] == inp_user_num:
        culc+=1
print(f'ваше число {inp_user_num} зустрічається в масиві {culc} разів')

#3


inp_user = input('введіть  числа списку через пробіл: ')
arr = list(map(int, inp_user.split()))

sum = 0
avg = 0
for i in range(len(arr)):
    sum += arr[i]
avg = sum / len(arr)
print(f'сумма всіх елементів: {sum}, середнє число: {avg} ')