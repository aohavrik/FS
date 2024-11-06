#1
x1 = int(input())
y1 = int(input())
x2 = int(input())
y2 = int(input())


if x1 == x2 or y1 == y2:
    print("YES")
else:
    print('NO')

#2
x1 = int(input())
y1 = int(input())
x2 = int(input())
y2 = int(input())

if (x1 + y1) % 2 == (x2 + y2) % 2:
    print("YES" )
else:
     print("NO")

#3

x1 = int(input())
y1 = int(input())
x2 = int(input())
y2 = int(input())

if abs(x1 - x2) <= 1 and abs(y1 - y2) <= 1:
    print("YES")
else:
    print("NO")


#5
n = int(input())
m = int(input())
k = int(input())

if (k % n == 0 or k % m == 0) and k < n * m:
    print("YES")
else:
    print("NO")

#6
year = int(input())

if (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):
    print("YES")
else:
    print("NO")

#7
N = int(input())
M = int(input())
x = int(input())
y = int(input())


long_side1 = x
long_side2 = N - x
short_side1 = y
short_side2 = M - y

if long_side1 < long_side2:
    min_long = long_side1
else:
    min_long = long_side2

if short_side1 < short_side2:
    min_short = short_side1
else:
    min_short = short_side2


if min_long < min_short:
    min_distance = min_long
else:
    min_distance = min_short

print(min_distance)

