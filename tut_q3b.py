option1 = int(input("Enter an integer : "))
operator = input("Enter an operator ( +, -, *, /) : ")
option2 = int(input("Enter another integer : "))
if operator == "+" :
    print(option1 + option2)
elif operator == "-" :
    print(option1 - option2)
elif operator == "*":
    print(option1 * option2)
elif operator == "/":
    print(option1 / option2)
else :
    print("INVALID OPERATOR !")
