print("Hello!! Welcome to student evaluation process.")
def guess_total(prompt):
        while True:
            try:
                return int(input(prompt))
        
            except:
                print("Error integar required..")
def show_process(prompt, process):
    while True:
        option = guess_total(prompt)
        

        if option in process:
            return option
        print("out of range. Enter values from following " "options only: " + str(process))
def display_marks():
        credit_outcome = [0, 20, 40, 60, 80, 100, 120]
        while True:
            pass_marks = show_process("Please enter your credits at pass : ",credit_outcome)
                                                  
            defer_marks = show_process("Please enter your credits at defer: ",credit_outcome)
                                                   
            fail_marks = show_process("Please enter your credits at fail : ",credit_outcome)
                                                  
            total_marks = pass_marks + defer_marks + fail_marks
            if total_marks == 120:
                return pass_marks, defer_marks, fail_marks
            print("Error Total incorrect marks should be 120.")
def final_progress(pass_marks, defer_marks, fail_marks):
    if pass_marks == 120:
        return "Progress"
    if pass_marks == 100:
        return "Progress - module trailer"
    if pass_marks == 80 or pass_marks == 60:
        return "Do not progress - module retriever"
    if pass_marks == 40:
        if defer_marks == 0:
            return "Exclude"
        return "Do not progress - module retriever"
    if pass_marks == 20:
        if defer_marks >= 40:
            return "Do not progress - module retriever"
        return "Exclude"
    if defer_marks >= 60:
        return "Do not progress - module retriever"
    return "Exclude"
def horizontal_histogram(input_result):
    count_result = 0
    results = ["Progress", "Trailer", "Retriever", "Excluded"]
    for result in results:
        print((result + " " + str(input_result[result]) + ":").ljust(13), end="")
        print(input_result[result] * "*", end="")
        print()
        count_result += input_result[result]
    print(str(count_result) + " outcomes in total.")
def main():
    input_result = {"Progress": 0, "Trailer": 0, "Retriever": 0, "Excluded": 0}
    while True:
        print("y - Press y to Evaluate a progression.")
        print("q - Press q to Quit program & show horizontal histogram of the credits.")
        print()
        option = input("Select the option:- ")
        if option == "y":
            pass_marks, defer_marks, fail_marks = display_marks()
            grade = final_progress(pass_marks, defer_marks, fail_marks)
            print("grade: " + grade)
            if grade == "Progress":
                input_result["Progress"] += 1
            elif grade == "Progress - module trailer":
                input_result["Trailer"] += 1
            elif grade == "Do not progress - module retriever":
                input_result["Retriever"] += 1
            elif grade == "Exclude":
                input_result["Excluded"] += 1
        elif option == "q":
            horizontal_histogram(input_result)
            break
if __name__ == '__main__':main()

