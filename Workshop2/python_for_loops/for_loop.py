fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)

print("---------------------------------------------")

fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    if fruit == "banana":
        break
    print(fruit)

print("---------------------------------------------")

fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    if fruit == "banana":
        continue
    print(fruit)

print("---------------------------------------------")

fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruits)
else:
    print("Finally finished!")

print("---------------------------------------------")

adjectives = ["small", "big"]
fruits = ["apple", "banana", "cherry"]

for adjective in adjectives:
    for fruit in fruits:
        print(adjective, fruit)
