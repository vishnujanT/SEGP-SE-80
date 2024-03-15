# Prompt the user to enter the number of credits at pass, defer and fail
pass_credits = int(input("Enter the number of credits at pass: "))
defer_credits = int(input("Enter the number of credits at defer: "))
fail_credits = int(input("Enter the number of credits at fail: "))

# Calculate the total number of credits attempted
total_credits = pass_credits + defer_credits + fail_credits

# Determine the progression outcome based on the number of credits passed and attempted
if pass_credits == total_credits:
    outcome = "Progress"
elif pass_credits >= 80 and defer_credits <= 40 and fail_credits <= 40:
    outcome = "Progress - module trailer"
elif pass_credits >= 80 and (defer_credits > 40 or fail_credits > 40):
    outcome = "Do not progress - module retriever"
elif pass_credits < 80 and defer_credits <= 60 and fail_credits <= 60:
    outcome = "Do not progress - module trailer"
else:
    outcome = "Exclude"

# Display the progression outcome to the user
print("Your progression outcome is: " + outcome)
