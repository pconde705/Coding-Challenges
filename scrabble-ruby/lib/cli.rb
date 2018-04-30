require_relative "data"
require_relative "underscore"

class CLI
  def run
    print "Your input is: "
    input = gets.chomp

    if check_validity_of_string(input) && check_length(input)
      input_letter_count = Hash.new(0)
      input.chars.each { |letter| input_letter_count[letter.downcase] += 1 }

      if input_letter_count["_"] >= 1
        score = Underscore.underscore_to_letter(input_letter_count)
      else
        matches = check_dictionary(input_letter_count)
        score = calculate_score(matches)
      end

      score[0...-1].sort.each { |result| puts "#{result} - #{score[-1]}" }
    end

    return
  end

  def check_validity_of_string(input)
    # O(1) time complexity instead of O(n) (.include?) when looking up letters
    alphabet = Hash.new(0)
    ("a".."z").each { |letter| alphabet[letter] = 1 }
    alphabet["_"] = 1

    valid = true
    input.chars.each do |letter|
      alphabet["_"] += 1 if letter == "_"
      if alphabet[letter.downcase] == 0 || alphabet["_"] > 3
        valid = false
        break
      end
    end
    if alphabet["_"] > 3
      puts ""
      puts "You may have a maximum of 2 blank tiles"
      puts ""
      return run
    end
    if !valid
      puts ""
      puts "Your input may only contain letters! A-Z or a-z"
      puts ""
      return run
    end
    true
  end

  def check_length(input)
    if input.length != 7
      puts ""
      puts "Your input must be exactly 7 characters. #{input} is #{input.length} characters"
      puts ""
      return run
    end
    true
  end

  def check_dictionary(input_letter_count)
    words = Data.dictionary_letter_count(input_letter_count)
    result = [""]

    words.each do |word, word_letter_count|
      next if check_letter_count(input_letter_count, word_letter_count)
      result << word
    end
    result
  end

  def check_letter_count(input_letter_count, word_letter_count)
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

  def calculate_score(matches)
    point_system = Data.point_system
    final_result = []
    max_score = 0

    matches.each do |word|
      score = 0
      word.chars.each { |letter| score += point_system[letter.upcase] }
      if score > max_score
        max_score = score
        final_result = []
        final_result << word.upcase
      elsif score == max_score
        final_result << word.upcase
      end
    end
    final_result << max_score
    final_result
  end
end
