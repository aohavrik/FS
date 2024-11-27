import random

random_nums = []
for _ in range(5):
    num = random.randint(1, 10)
    random_nums.append(num)
print(random_nums)

max_num = max(random_nums)
print(max_num)

for i in range(len(random_nums)):
    random_nums[i] *= 2
print(random_nums)

nums = []
for x in range(1, 5+1):
    nums.append(x**2)
print(nums)

lines = []

for num in nums:
    lines.append(str(num))
lines.pop(-1)
print(lines)