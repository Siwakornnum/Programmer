# EXAMPLE 1
thisset = {"apple", "banana", "cherry"}
thisset.remove("banana")
print(thisset)  # Output : ['apple', 'cherry']

# EXAMPLE 2
thisset = {"apple", "banana", "cherry"}
thisset.discard("banana")
print(thisset)  # Output : ['apple', 'cherry']

# EXAMPLE 3
thisset = {"apple", "banana", "cherry"}
x = thisset.pop()
print(thisset)  # Output : ["apple", "banana"]

# EXAMPLE 3
thisset = {"apple", "banana", "cherry"}
thisset.clear()
print(thisset)  # Output : set{}