
def pairs(input):
    """input is a list of ints; output is a list of unique tuple pairs"""
    result = []
    temp = []
    count = 0
    while count != len(input):
        inside_count = count + 1
        while inside_count != len(input):
            temp.append(input[count])
            temp.append(input[inside_count])
            inside_count += 1
            result.append(tuple(temp))
            temp = []
        count += 1
    return result

def is_four_of_kind(hand):
    """hand is a list of 5 strings representing card ranks; function is a predicate"""
    card_counter = {}
    for card in hand:
        if card_counter.get(card) is None:
            card_counter[card] = 1
        else:
            card_counter[card] += 1
    result = False
    for card in card_counter:
        if card_counter[card] == 4:
            result = True
    return result

def merge(a, b):
    """a and b are sorted list of ints; function returns array of sorted ints"""
    result = []
    while len(a) != 0 and len(b) != 0:
        if a[0] > b[0]:
            result.append(b.pop(0))
        else:
            result.append(a.pop(0))
    return result + a + b

def dec_to_base_x(base, num):
    """function that converts base 10 number to a number of base from 2 to 9 and returns its STRING representation"""
    if num == 0:
        return "0"
    alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    result = ""
    while num != 0 :
        result = alphabet[int(num % base)] + result
        num = num / base
    for letter in result:
        if letter != "0":
            break
        else:
            result = result[1:]
    return result
