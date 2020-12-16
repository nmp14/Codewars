# return word with highest score

def high(x):
    words = x.split()
    max = 0
    max_word = ''
    for word in words:
        word_score = 0
        for letter in word:
            word_score += (ord(letter) - 96)
        if word_score > max:
            max = word_score
            max_word = word
    return max_word
