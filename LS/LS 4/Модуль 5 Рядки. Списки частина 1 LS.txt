#1
text = input("Введіть рядок: ")
normalized_text = text.replace(" ", "").lower()  # Прибираємо пробіли та приводимо до нижнього регістру
is_palindrome = normalized_text == normalized_text[::-1]

if is_palindrome:
    print("Рядок є паліндромом.")
else:
    print("Рядок не є паліндромом.")

#2
text = input("Введіть текст: ")
reserved_words = input("Введіть зарезервовані слова через пробіл: ").split()

words_list = text.split()
for i in range(len(words_list)):
    if words_list[i].lower() in reserved_words:
        words_list[i] = words_list[i].upper()

result_text = " ".join(words_list)
print("Змінений текст:", result_text)

#3
text = input("Введіть текст: ")
sentence_endings = ".!?"

sentence_count = 0
for char in text:
    if char in sentence_endings:
        sentence_count += 1

print("Кількість речень у тексті:", sentence_count)

