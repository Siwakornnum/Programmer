# EXAMPLE 1
thislist = {"apple", "banana", "cherry"}
thislist.add("orange")
print(thislist)
# Output : ["apple", "banana", "cherry", "orange"]

# EXAMPLE 2
thisset = {"apple", "banana", "cherry"}
tropical = {"pineapple", "mango", "papaya"}
thisset.update(tropical)
print(thisset)
# Output : {'mango', 'cherry', 'papaya', 'banana', 'pineapple', 'apple'}
