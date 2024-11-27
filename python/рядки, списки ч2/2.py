
# Два списки цілих заповнюються випадковими числами.
# Сформуйте третій список, який містить:
# ■ елементи обох списків;
def sumArr(arr1, arr2):
    arr = arr1 + arr2
    return (arr)
# ■ елементи обох списків без повторень;
def noreapet(arr1, arr2):
    arr = []
    for i in arr1:
        if i not in arr:
            arr.append(i)
    for j in arr2:
        if j not in arr:
            arr.append(j)
    return (arr)
# ■ елементи, спільні для двох списків;
def repetArr(arr1, arr2):
    arr = []
    for i in arr1:
        if i in arr2:
            arr.append(i)
    return (arr)
# ■ тільки унікальні елементи кожного зі списків;
def universal(stock):
    arr = []
    for i in stock:
        if i not in random_nums2 and i not in arr:
            arr.append(i)
    return (arr)
# ■ тільки мінімальне та максимальне значення кожного зі
# списків.
def minmaxArr(minmax):
    arr = []
    arr.append(min(minmax))
    arr.append(max(minmax))
    return (arr)

import random
random_nums1 = []
random_nums2 = []

for _ in range(15):
    num = random.randint(1, 10)
    random_nums1.append(num)
for _ in range(10):
    num2 = random.randint(1, 10)
    random_nums2.append(num2)
print(f'масив 1: {random_nums1} \nмасив 2: {random_nums2}')


print(f"""
елементи обох списків:
{sumArr(random_nums1, random_nums2)}
елементи обох списків без повторень:
{noreapet(random_nums1, random_nums2)}
елементи, спільні для двох списків:
{repetArr(random_nums1, random_nums2)}
тільки унікальні елементи кожного зі списків:
{universal(noreapet(random_nums1, random_nums2))}
тільки унікальні елементи кожного зі списків:
{minmaxArr(sumArr(random_nums1, random_nums2))}
""")







