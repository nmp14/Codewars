# There is a queue for the self-checkout tills at the supermarket.
# Your task is write a function to calculate the total time required for all the customers to check out!

# input
# customers: an array of positive integers representing the queue.
# Each integer represents a customer, and its value is the amount of time they require to check out.

# n: a positive integer, the number of checkout tills.

# output
# The function should return an integer, the total time required.

from collections import defaultdict


def queue_time(customers, n):
    if n == 1:
        return sum(customers)
    elif n > 1:
        if len(customers) <= n:
            return max(customers)
        else:
            que_lst = defaultdict(int)
            for i in range(n):
                que_lst[i] = 0
            for customer in customers:
                que_lst[min(que_lst, key=que_lst.get)] += customer
            return max(que_lst.values())


print(queue_time([10, 20, 2, 5, 10, 23, 50, 4, 5, 6, 7, 8, 9], 3))
