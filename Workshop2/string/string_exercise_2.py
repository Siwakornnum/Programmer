# จงเขียนคำสั่งเพื่อแสดงความยาวของตัวอักษร "I am the best programmer"
string = "I am the best programmer"

print(len(string))
# จงเขียนคำสั่งเพื่อแสดงอักษรแรกของข้อความ "I am the best programmer"
string = "I am the best programmer"
print(string[0])
# จงเขียนคำสั่งเพื่อแสดง "best" ของข้อความ "I am the best programmer"
string = "I am the best programmer"
print(string[9:13])
# จงเขียนคำสั่งเพื่อแสดข้อความ "I am the best programmer" ที่ไม่มี space
string = "I am the best programmer"
print(string.replace(" ", ""))
# จงเขียนคำสั่งเพื่อแสดข้อความ "I am the best programmer" ให้เป็นตัวพิมใหญ่ทั้งหมด
string = "I am the best programmer"
print(string.upper())
# จงเขียนคำสั่งเพื่อแสดข้อความ "I am the best programmer" ให้เป็นตัวพิมเล็กทั้งหมด
string = "I am the best programmer"
print(string.lower())
# จงเขียนคำสั่งเพื่อแสดข้อความ "I am the best programmer" ที่ถูกแทนที่อักษร e ด้วย z ทั้งหมด
string = "I am the best programmer"
print(string.replace("e", "z"))  # Output : "jello, World"
# จงเติมคำในช่องว่าเพื่อแสดงชื่อ
myname = "siwa"
txt = "{} is the best programmer"
print(txt.format(myname))