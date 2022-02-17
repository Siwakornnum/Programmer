# 1.จงเขียนตารางสูตรคูณให้ผลลัพท์ที่ออกมาเป็นแบบตัวอย่างด้านล่างโดยใช้คำสั่ง while
multitable = 2
while multitable <= 12:
    print("   [{}]".format(multitable))
    col = 1
    value = 1
    while value < 12:
        print("{} * {} : {}".format(multitable, value, value * multitable))
        value += 1
    multitable += 1
    print("-----------------")


# 2.จงเขียนตารางสูตรคูณให้ผลลัพท์ที่ออกมาเป็นแบบตัวอย่างด้านล่างโดยใช้คำสั่ง for
 for multitable in range(2, 13):
    print("   [{}]".format(multitable))
    for value in range(1, 13):
        print("{} * {} : {}".format(multitable, value, value * multitable))
    print("-----------------")