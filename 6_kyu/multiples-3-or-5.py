# Finds all the numbers below the given integer input that are divisible by 3 or 5.
# Returns the sum of these numbers.

def solution(number):
    sum = 0
    if number < 0:
        return 0
    for i in range(number):
        if i % 3 == 0 or i % 5 == 0:
            sum += i
    return sum


print(solution(6))

print(solution(100))
