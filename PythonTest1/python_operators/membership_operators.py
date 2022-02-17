string = "Hello world"

print("H" in string)
# Output : True

print("hELLo" not in string)
# Output : True

print("---------------------------------------------")

dictObject = {"name": "Jim & Por", "age": "26"}

print("name" in dictObject)
# Output : True

print("Jim & Por" in dictObject)
# Output : False

print("---------------------------------------------")

number_list = [1, 2, 3]

print(1 in number_list)
# Output : True

print(5 in number_list)
# Output : False

print("---------------------------------------------")

name_list = ["jim", "por"]

print("jim" in name_list)
# Output : True

print("korn" in name_list)
# Output : False