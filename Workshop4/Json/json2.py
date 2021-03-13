import json

json_string = {"name": "Jim & por", "age": 26, "city": "Bangkok"}

python_string = json.dumps(json_string)

print(python_string)
