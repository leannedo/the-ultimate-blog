
# Two Largest Numbers

Helsinki _ 25.02.2020 _ Sunset

This is an advance problem of the previous "largest number" problem, in which I need to find two largest numbers in a series of 10 numbers inputted by users.

3 variables are declared
- counter = 1 to count to 10 - when counter == 10, the loop stops executing.
- largest1 = 0: the largest number in the range. 
- largest2 = 0: the second largest number in the range. 

First of all, I use the while loop with the condition for counter <= 10
In the while loop, there's a prompt for number ('Input the number: ') and an int number is declared to store that recently inputted value. 

Now this is a bit trickier than the previous problem as I don't only need to find the largest number but also find the one smaller than it but larger than any other numbers. With this I admit that I've got a bit of help from stackoverflow, yet I do understand the solution by myself. 

It's like this: 
- At the beginning, number is compared to largest1, and if number is larger than largest1, (this part is the most important chain for the whole problem), the value of largest2 is now largest1 and the value of largest1 is now number. 

So for example, when number = 2 => the value of largest2 changes from 0 to 0 (which is still the same, but the magic will happen when the next number is inputted) and the value of largest1 changes from 0 to 2. 
When number = 4 => the value of largest2 changes from 0 to largest1 (which is now 2) and the value of largest1 changes from 2 to 4. So now largest2 = 2 and largest1 = 4.

And keep going like that until the end of the while loop, then the two numbers get displayed. 