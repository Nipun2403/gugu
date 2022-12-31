import sys

try:
    x = int(input("X: "))
    y = int(input("Y: "))
except ValueError:
    print("Incorrect Value Passed")
    sys.exit(1)

try:
    result = x/y
    print(f"{x} / {y} = {result}")

except ZeroDivisionError:
    print("Cannot divide by 0")
