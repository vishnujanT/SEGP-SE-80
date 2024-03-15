pass_credits = input("Please enter your credits at pass: ")
defer_credits = input("Please enter your credits at defer: ")
fail_credits = input("Please enter your credits at fail: ")

try:
    pass_credits = int(pass_credits)
    defer_credits = int(defer_credits)
    fail_credits = int(fail_credits)
except ValueError:
    print("Integer required")
else:
    total_credits = pass_credits + defer_credits + fail_credits

    if pass_credits not in [0, 20, 40, 60, 80, 100, 120] or defer_credits not in [0, 20, 40, 60, 80, 100, 120] or fail_credits not in [0, 20, 40, 60, 80, 100, 120]:
        print("Out of range")
    elif total_credits != 120:
        print("Total incorrect")
    else:
        if pass_credits == 120:
            print("Progress (module trailer)")
        elif pass_credits == 100:
            print("Progress")
        elif pass_credits == 80:
            print("Do not Progress – module retriever")
        elif pass_credits == 60:
            print("Do not Progress – module retriever")
        elif pass_credits == 40:
            print("Do not Progress – module retriever")
        else:
            print("Exclude")

def validate_credits(credit):
    try:
        credit = int(credit)
        if credit not in [0, 20, 40, 60, 80, 100, 120]:
            print("Out of range")
            return False
        return credit
    except ValueError:
        print("Integer required")
        return False

def predict_outcome(pass_credits, defer_credits, fail_credits):
    total_credits = pass_credits + defer_credits + fail_credits
    if pass_credits == 120:
        return "Progress"
    elif pass_credits == 100:
        return "Progress – module trailer"
    elif total_credits < 120 and fail_credits >= 80:
        return "Exclude"
    else:
        return "Do not progress – module retriever"

def predict_multiple_outcomes():
    while True:
        pass_credits = validate_credits(input("Please enter your credits at pass: "))
        if pass_credits is False:
            continue

        defer_credits = validate_credits(input("Please enter your credits at defer: "))
        if defer_credits is False:
            continue

        fail_credits = validate_credits(input("Please enter your credits at fail: "))
        if fail_credits is False:
            continue

        total_credits = pass_credits + defer_credits + fail_credits
        if total_credits != 120:
            print("Total incorrect")
            continue

        outcome = predict_outcome(pass_credits, defer_credits, fail_credits)
        print(outcome)

        choice = input("Do you want to continue? (y/n): ")
        if choice.lower() == "n" or choice.lower() == "q":
            break
