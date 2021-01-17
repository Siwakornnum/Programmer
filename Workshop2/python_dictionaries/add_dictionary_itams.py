# EX 1
thisdict = {"brand": "Ford", "model": "Mustand", "year": 1964}
thisdict["color"] = "red"
print(
    thisdict
)  # Output : {'brand': 'Ford', 'model': 'Mustand', 'year': 1964, 'color': 'red'}

# EX 2
thisdict = {"brand": "Ford", "model": "Mustand", "year": 1964}
thisdict.update({"color": "red"})
print(
    thisdict
)  # Output : {'brand': 'Ford', 'model': 'Mustand', 'year': 1964, 'color': 'red'}
