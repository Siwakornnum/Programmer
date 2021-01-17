print("----------------------------------")
# จงแสดง "rat"
animal = ["cat", "bat", "rat", "dog"]
print(" 1.: ", animal[2])
print("----------------------------------")
# จงแก้ไขข้อมูลจาก "cat" เป็น "hen"
animal = ["cat", "bat", "rat", "dog"]
animal[0] = "hen"
# animal.pop(0)
# animal.insert(0, "hen")
print(" 2.: ", animal)
print("----------------------------------")
# จงเพิ่ม "hen" ไปยัง animal list
animal = ["cat", "bat", "rat", "dog"]
animal.append("hen")
print(" 3.: ", animal)
print("----------------------------------")
# จงเพิ่ม "hen" ไประหว่าง "rat" กับ "ิิdog"
animal = ["cat", "bat", "rat", "dog"]
animal.insert(3, "hen")
print(" 4.: ", animal)
print("----------------------------------")
# จงลบ "rat" จาก list
animal = ["cat", "bat", "rat", "dog"]
animal.remove("rat")
# animal.pop(2)
print(" 5.: ", animal)
print("----------------------------------")
# จงแสดงตัวสุดท้ายของ animal
animal = ["cat", "bat", "rat", "dog"]
print(" 6.: ", animal[-1])
# print(animal[3])
print("----------------------------------")
# จงแสดงจำนวนของ animal
animal = ["cat", "bat", "rat", "dog"]
print(" 7.: ", len(animal))
print("----------------------------------")