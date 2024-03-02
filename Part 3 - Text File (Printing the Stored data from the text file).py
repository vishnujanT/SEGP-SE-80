# I declare that my work contains no examples of misconduct, such as plagiarism, or collusion. 
# Any code taken from other sources is referenced within my code solution.

# Student ID: w1998871

# Date: 10.04.2023

#Creating List
marks = [0,20,40,60,80,100,120]

#Creating Variables (Inputs)-------------------------------------------------------------------------------------------------------------------------------------------------------------
progress_count = 0
trailer_count = 0
retriever_count = 0
exclude_count = 0
marksList = []
answer = 0

while True:
    def inputs(message,error_message = 'Integer required'):
        while True:
            try:
                input_value = int(input(message))
                if input_value not in marks:
                    print('Out of range')
                    continue
            except ValueError:
                print(error_message)
                continue
            break
        return input_value

    input_pass = inputs('\nEnter your total PASS credits: ')
    input_defer = inputs('Enter your total DEFER credits: ')
    input_fail = inputs('Enter your total FAIL credits: ')

#Process---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    
#Check the Total
    if input_pass + input_defer + input_fail != 120:
        print('Total incorrect.')
        continue
    
#Function for progress (1)      
    def progress(input_pass,input_defer,input_fail):
        global answer
        answer = ('Progress')
        global progress_count
        progress_count += 1
        return progress_count
        print(answer)
#Function for trailer (2 to 3)
    def trailer(input_pass,input_defer,input_fail):
        global answer 
        answer =('Progress (module trailer)')
        global trailer_count
        trailer_count += 1
        return trailer_count
        print(answer)

#Function for retriever (4 to 14), (16 to 19), (22 to 25)
    def retriever(input_pass,input_defer,input_fail):
        global answer
        answer =('Do not progress – module retriever')
        global retriever_count
        retriever_count += 1
        return retriever_count
        print(answer)
        
#Function for exclude (15), (20 to 21), (26 to 28)
    def exclude(input_pass,input_defer,input_fail):
        global answer
        answer = ('Exclude')
        global exclude_count
        exclude_count += 1
        return exclude_count
        print(answer)
        
#Function for call progress (1)
    if input_pass == 120:
        progress(input_pass,input_defer,input_fail)
        
#Function for call trailer (2 to 3)        
    if (input_pass == 100) and (input_defer in marks[0:2]) and (input_fail in marks[0:2]):
        trailer(input_pass,input_defer,input_fail)
        
#Function for call retriever (4 to 14), (16 to 19), (22 to 25)
    if (input_pass in marks[0:5]) and (input_defer in marks[0:]) and (input_fail in marks[0:4]):
        retriever(input_pass,input_defer,input_fail)
        
#Function for call exclude (15), (20 to 21), (26 to 28)
    if (input_pass in marks[0:3]) and (input_defer in marks[0:3]) and (input_fail in marks[4:]):
        exclude(input_pass,input_defer,input_fail)
    

    marksList.append([answer,input_pass,input_defer,input_fail])
        
    print(answer)
    print('\nWould you like to enter another set of data?')
    
    choice = input("Enter 'y' for yes or 'q' to quit and view results: ")

    if choice.lower() == 'q':
        break
    
    else:
        continue


#Histogram-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

print('\n--------------------------------------------------')
print('Histogram \n')

print('Progress', progress_count,' :', '*' * progress_count)
print('Trailer', trailer_count,'  :', '*' * trailer_count)
print('Retriever', retriever_count,':', '*' * retriever_count)
print('Excluded', exclude_count,' :', '*' * exclude_count,'\n')

#Total Outcomes
total_outcomes = progress_count + trailer_count + retriever_count + exclude_count
print(total_outcomes,'outcomes in total.')
print('--------------------------------------------------')

# Part 2(List File)#########################################################################################################################################################################

print('Part 2 - List File :')

for i in marksList:
    print(i)
print()

print('--------------------------------------------------')

# Part 3(Text File)#########################################################################################################################################################################

print('Part 3 - Text File :')

#This function is used to read data from a text file
file = open('Progression_Datas.txt', 'w+')
for i in marksList:
    file.write(str(i))
    file.write('\n')
file.close()
    
file = open('Progression_Datas.txt', 'r+')

for x in file:
    print(x)

print('--------------------------------------------------')
