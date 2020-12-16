# Given a list lst and a number N, create a new list that contains each number of lst at most N times without reordering.
# For example if N = 2, and the input is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].

def delete_nth(order, max_e):
    count_dict = {}
    new_lst = []
    for num in order:
        if num not in count_dict.keys():
            count_dict[num] = 1
            if count_dict[num] <= max_e:
                new_lst.append(num)
            else:
                continue
        elif num in count_dict.keys():
            count_dict[num] += 1
            if count_dict[num] <= max_e:
                new_lst.append(num)
            else:
                continue
    return new_lst
