# Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid.
# The function should return true if the string is valid, and false if it's invalid.

def valid_parentheses(string):
    count_left = 0
    count_right = 0
    for char in string:
        if count_right > count_left:
            return False
        elif char == '(':
            count_left += 1
        elif char == ')':
            count_right += 1
    if count_left == count_right:
        return True
    else:
        return False
