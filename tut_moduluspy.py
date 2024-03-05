import random

dice_throw = random.randit(1,6)
print(dice_throw)
secret_number = random.randint(1,2) % 2
if secret_number == 0:
    print("HEADS")
else:
    print("TAILS")


