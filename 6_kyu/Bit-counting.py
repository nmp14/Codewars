# Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number.
# You can guarantee that input is non-negative.

def count_bits(n):
    return len([i for i in f'{n:b}' if i == '1'])


print(count_bits(9))
