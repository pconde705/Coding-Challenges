require_relative "data"

class Underscore

  def self.underscore_to_letter(input_letter_count)
    alphabet = ("a".."z").to_a
    input_letter_count["_"] == 2 ? alphabet_two = ("a".."z").to_a : alphabet_two = []
    matches = [""]
    input_letter_count.delete("_")

    sorted_words = Data.dictionary_words_sorted
    possible_words = []
    input_letter_count.each_key { |letter| possible_words.concat(sorted_words[letter]) }
    words = Data.selected_words(possible_words)

    i = 0
    while i < alphabet.length
      input_letter_count[alphabet[i]] += 1
      unless input_letter_count[alphabet[i]] > 1
        new_words = Data.selected_words(sorted_words[alphabet[i]])
        temp_words = words.merge(new_words)
      else
        temp_words = words
      end
      matches = self.check_dictionary(input_letter_count, matches, temp_words) if alphabet_two.empty?
      j = 0
      while j < alphabet_two.length
        input_letter_count[alphabet_two[j]] += 1
        unless input_letter_count[alphabet[j]] > 1
          new_words = Data.selected_words(sorted_words[alphabet[j]])
          temp_words = words.merge(new_words)
        else
          temp_words = words
        end
        matches = self.check_dictionary(input_letter_count, matches, temp_words)
        input_letter_count[alphabet_two[j]] -= 1
        temp_words = {}
        j += 1
      end
      input_letter_count[alphabet[i]] -= 1
      temp_words = {}
      i += 1
    end
    matches.uniq!
    matches_letter_removed = self.remove_letters(matches, input_letter_count)

    self.calculate_score(matches, matches_letter_removed)
  end

  def self.check_dictionary(input_letter_count, matches, words)
    words.each do |word, word_letter_count|
      next if word.length < matches[0].length
      next if self.check_letter_count(input_letter_count, word_letter_count)
      if matches[0].length < word.length
        matches = []
        matches << word
        words.delete(word)
      else
        matches << word
        words.delete(word)
      end
    end
    matches
  end

  def self.check_letter_count(input_letter_count, word_letter_count)
    skip = false

    word_letter_count.each do |letter, count|
      if input_letter_count[letter] == 0 || count > input_letter_count[letter]
        skip = true
        break
      end
    end

    if skip
      return skip
    else
      input_letter_count.each do |letter, count|
        if word_letter_count[letter] > count
          skip = true
          break
        end
      end
    end

    skip
  end

  def self.remove_letters(matches, input_letter_count)
    matches_letter_removed = []
    matches.each do |word|
      word_letter_count = Hash.new(0)
      word.chars.each { |letter| word_letter_count[letter.downcase] += 1 }
      word_letter_count.each do |letter, count|
        if word_letter_count[letter] > input_letter_count[letter]
          word_letter_count[letter] -= 1 until input_letter_count[letter] == word_letter_count[letter]
        end
      end
      word_letter_removed = []
      string = ""

      word_letter_count.each { |letter, count| string += (letter * count) }
      matches_letter_removed << string
    end
    matches_letter_removed
  end

  def self.calculate_score(matches, matches_letter_removed)
    point_system = Data.point_system
    final_result = []
    max_score = 0

    matches_letter_removed.each_with_index do |word, index|
      score = 0
      word.chars.each { |letter| score += point_system[letter.upcase] }
      if score > max_score
        max_score = score
        final_result = []
        final_result << matches[index].upcase
      elsif score == max_score
        final_result << matches[index].upcase
      end
    end

    final_result << max_score
    final_result
  end
end
