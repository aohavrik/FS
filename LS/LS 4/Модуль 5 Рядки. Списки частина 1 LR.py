#1
text = input("Введіть рядок: ")
reversed_text = text[::-1]
print("Рядок у зворотному порядку:", reversed_text)

#2
text = input("Введіть рядок: ")
letters_count = 0
digits_count = 0

for char in text:
    if char.isalpha():
        letters_count += 1
    elif char.isdigit():
        digits_count += 1

print("Кількість букв:", letters_count)
print("Кількість цифр:", digits_count)

#3
text = input("Введіть рядок: ")
symbol = input("Введіть символ для пошуку: ")
symbol_count = 0

for char in text:
    if char == symbol:
        symbol_count += 1

print(f"Символ '{symbol}' зустрічається {symbol_count} раз(и) в рядку.")

#4
text = input("Введіть рядок: ")
word = input("Введіть слово для пошуку: ")
words_list = text.split()
word_count = 0

for w in words_list:
    if w == word:
        word_count += 1

print(f"Слово '{word}' зустрічається {word_count} раз(и) в рядку.")

#5
text = input("Введіть рядок: ")
search_word = input("Введіть слово для пошуку: ")
replace_word = input("Введіть слово для заміни: ")

words_list = text.split()
for i in range(len(words_list)):
    if words_list[i] == search_word:
        words_list[i] = replace_word
        break

result_text = " ".join(words_list)
print("Рядок після заміни:", result_text)
