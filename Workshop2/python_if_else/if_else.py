a = 33
b = 200

if b > a:
    print("b is greater than a")

# Output "b is greater than a"

print("---------------------------------------------")

a = 33
b = 33

if b > a:
    print("b is greater than a")
elif a == b:
    print("a and b are equal")

# Output: a and b are equal

print("---------------------------------------------")

a = 200
b = 33

if b > a:
    print("b is greater than a")
elif a == b:
    print("a and b are equal")
else:
    print("a is greater than b")

# Output: "a is greater than b"

print("---------------------------------------------")

a = 33
b = 200

if b > a:
    print("b is greater than a")
else:
    print("a is greater than b")

# Output: "b is greater than a"

print("---------------------------------------------")

a = 2
b = 330

max = a if a > b else b
print(max)

# Output : 330


print("---------------------------------------------")


a = 200
b = 33
c = 500

if a > b and c > a:
    print("Both conditions are True")

# Output : "Both conditions are True"

print("---------------------------------------------")
