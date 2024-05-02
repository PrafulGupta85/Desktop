# x = 10
# y= "Hello Python"
# print(x)
# print(y) 
# print(type(x))

# if 'x' in locals():
#     print("Variable exist")

# --------------------------------------------

# x =120
# z =20000
# y =12

# if x<y:
#     print("x is less than y")
# elif x<z:
#     print("x is less than z too")
# else:
#     print("y is less than x")

# --------------------------------------------
# IF ELSE CONDITIONS

# x,y = 10, 10
# if x>y: print("X")

# print("X") if x>y else print("Y")

# print("X") if x>y else print("X==Y") if x==y else print("Y")

# --------------------------------------------
# WHILE LOOP, BREAK and CONTINUE STATEMENT

# num =1
# while num<=10:
#     print("5 X",num, "=", 5*num)
#     num+=1

# num =1
# while num<=10:
#     print("5 X",num, "=", 5*num)
#     if num==5:
#         break
#     num+=1

# num =0
# while num<=10:
#     num+=1
#     if num<5:
#         continue
#     print("5 X",num, "=", 5*num)

# ---------------------------------------------
# FOR LOOP

for num in [1,2,3,4,5,6]: 
    print("Python")

# for num in range(5):      #Prints 5 times python
#     print("PYthon")

# for num in range(5,10):   #O/p : 5 6 7 8 9 
#     print(num)

# for num in range(10,32,3):  # O/p : 10 13 16 19 22 25 28 31
#     print(num)

# ---------------------------------------------
# LIST, DICTIONARY, TUPLE

# testList = ["one", "two", "three", "four", "five", "six"]
# testDict = {'one': 1, 'two': 2, 'three': 3, 'four':4}
# testTuple = ('one', 'two','three','four')
# for item in testTuple:
#     print(item)

# ---------------------------------------------
import random
random_generator = random.Random
print(random_generator)