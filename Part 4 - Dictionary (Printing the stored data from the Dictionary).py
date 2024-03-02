result_dic = {}

def valid(key, level=''):
    while True:
        if key == 'identity':
            temp_input = input(f"Enter Student ID : ")
            try:

                if temp_input not in list(result_dic.keys()) or len(result_dic.keys()) == 0:
                    if len(temp_input) and temp_input[0].lower() == 'w':
                        return temp_input
                    else:
                        print("Failed !.... Enter A Valid ID (ex:w1234567)")
                else:
                    print("ID already exist.")
            except ValueError:
                print("Failed to Enter!.... Enter A Valid ID (ex:w1234567)")
        elif key == 'level':
            temp_input = input(f"Please Enter your credits at {level} : ")
            try:
                temp_input = int(temp_input)
                if (temp_input % 20 == 0) and (0 <= temp_input <= 120):
                    return temp_input
                else:
                    print("Failed to Enter!.... Enter A Vaild Credit 0, 20, 40, 60, 80, 100 or 120")
            except ValueError:
                print("Failed to Enter!.... Enter A Valid Integer. ")
        elif key == 'c_option':
            c_option = input("Would you like to enter another set of data?\n"
                             "Enter 'y' for yes or 'q' to quit and view results : ")
            try:
                c_option = str(c_option)
                if c_option.lower() == 'y' or c_option.lower() == 'q':
                    return c_option
                else:
                    print("Enter A Valid Option y/q\n")
            except ValueError:
                print("Enter A Valid Option!\n")
        else:
            pass


def display():
    for key, value in result_dic.items():
        print(f"{key} : {value[0]} - {value[1]}, {value[2]}, {value[3]}")


def con_option():
    while True:
        print()
        option_inp = valid('c_option')
        print()
        if option_inp == 'y':
            credit_inp()
        elif option_inp == 'q':
            display()
            exit()
        else:
            print("Failed to Enter!.... Enter A Valid Option.")


def ranking(std_id, pass_inp, defer_inp, fail_inp):
    if pass_inp + defer_inp + fail_inp != 120:
        print("Total Incorrect.\n")
        credit_inp()
    elif pass_inp == 120:
        print("Progress")
        result_dic[std_id] = ['Progress', pass_inp, defer_inp, fail_inp]
    elif pass_inp == 100:
        print("Progress (module trailer)")
        result_dic[std_id] = ['Progress (module trailer)', pass_inp, defer_inp, fail_inp]
    elif pass_inp + defer_inp >= 60:
        print("Do not Progress – module retriever")
        result_dic[std_id] = ['Module retriever', pass_inp, defer_inp, fail_inp]
    else:
        print("Exclude")
        result_dic[std_id] = ['Exclude', pass_inp, defer_inp, fail_inp]


def credit_inp():
    std_id = valid('identity')
    pass_inp = valid('level', 'PASS')
    defer_inp = valid('level', 'DEFER')
    fail_inp = valid('level', 'FAIL')
    ranking(std_id, pass_inp, defer_inp, fail_inp)


def main():
    while True:
        credit_inp()
        con_option()

main()
