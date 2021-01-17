thisdict = {"brand": "Ford", "model": "Mustand", "year": 1964}

# EX 1
for key in thisdict:
    print(key)

# Output :
# brand
# model
# year

# EX 2
for key in thisdict:
    print(thisdict[key])

# Output :
# Ford
# Mustand
# 1964

# EX 3
for key in thisdict.keys():
    print(key)

# Output :
# brand
# model
# year

# EX 4
for value in thisdict.values():
    print(value)

# Output :
# Ford
# Mustand
# 1964

# EX 3
for key, value in thisdict.items():
    print(key, value)

# Output :
# brand Ford
# model Mustand
# year 1964