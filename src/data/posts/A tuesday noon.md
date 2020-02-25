
# A Tuesday Noon

Helsinki _ 25.02.2020 _ Noon

A sunny day at 0.

Still following my everyday habit of sitting at my desk and code, still a process of trying and implementing, correcting and hoping it to run as programed. 

Listening to a new song by Nguyen Ha _ Cho Ngay Loi Hua No Hoa (Till Our Promise in Full Blossom)_ while waiting for my head to recover from a stucked problem. 

I'm programing a salary calculator to calculate salary for a number of workers. Instead of simply prompting the user for input of name, hours worked and hourly rates and calculate the remuneration at the end of a while loop (when the sentinel value is ""), I decided to create a class called Employee with the data and whenever a set of these three details are given, a new object is created, taking three parameter (name, hoursWorked, hourlyRates). In the class Employee, there are two methods: one to calculate the pay and one toString method to print the object out. Then new promts for name, hours worked and hourly rates are printed to begin a new circle. 

Yet somehow the program only runs one time. Together with displaying the result of how much the first worker is paid, it prompts the user for the name of the next worker, and then it stops. According to the output field, it got "Build successful". However, why it did not start a new loop is still a question to me. 

Is it because everytime a loop is executed, only one object is created and this object cannot be replaced when the new loop runs?
Is it because I have to create an arraylist and push every single object created inside and bring them all at once? No I want to print the result everytime the user inputs the three information. 

