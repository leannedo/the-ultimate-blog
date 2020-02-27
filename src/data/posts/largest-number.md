
## Helsinki | 25.02.2020 | Noon

### A sunny day at 0.

Moving to the next problem of finding the largest number in a series of 10 numbers input by users. 

3 variables are declared
- counter = 1 to count to 10 - when counter == 10, the loop stops executing.
- number: an integer to that is most recently input by the user (yet it's not necessary to store the number input because I will not need it anywhere else, and keeping it would cost memory of my computer, so I won't declare it outside of the while loop, let's it be a local variable)
- largest: the largest number in the range. 

First of all, I use the while loop with the condition for counter <= 10. 

In the while loop, there's a prompt for number ('Input the number: ')

At the beginning, the largest number is assigned to 0, and if "number" is larger than largest, largest is equals to number.
Just like that till the end of the loop, then the largest number gets displayed.  
Remember to display the result after the while loop (out of the while loop) or else the program will print the largest number is the number just input.

Remember to increment the counter, if not the loop will run forever. 
If it's too tired to test with counter <= 10, simple change the limit to 5, or any lower number.