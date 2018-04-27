require_relative "data"

class CLI
  def run
    print "Your input is: "
    input = gets.chomp

    if check_length(input) && check_validity_of_string(input)
      input_letter_count = Hash.new(0)
      input.chars.each do |letter|
        input_letter_count[letter] += 1
      end
      results = []

      Data.dictionary_letter_count.each do |word, letter_count|
        next if word.length > 7 # uncessary if you get rid of >7 character words
        skip = false
        word.chars.each do |letter|
          if input_letter_count[letter] == 0
            skip = true
            break
          end
        end
        next if skip
        push = true
        input_letter_count.each do |letter, count|
          if letter_count[letter] > count
            push = false
            break
          end
        end
        next if push == false
        if results[0].nil?
          results << word
        elsif results[0].length > word.length
          next
        elsif results[0].length < word.length
          results = []
          results << word
        else
          results << word
        end
      end
      final = []
      max_score = 0
      score = 0
      results.each do |word|
        word.chars.each do |letter|
          score += Data.point_system[letter.upcase]
        end
        if score > max_score
          max_score = score
          final = []
          final << word
        elsif score == max_score
          final << word
        end

        score = 0
      end
      print results
      puts ""
      puts Data.point_system
      print final
      puts ""
      puts max_score
    end
  end

  def check_length(input)
    # O(1) time insertion instead of include? which is linear
    alphabet = {"a" => true, "b" => true, "c" => true, "d" => true, "e" => true,
                "f" => true, "g" => true, "h" => true, "i" => true, "j" => true,
                "k" => true, "l" => true, "m" => true, "n" => true, "o" => true,
                "p" => true, "q" => true, "r" => true, "s" => true, "t" => true,
                "u" => true, "v" => true, "w" => true, "x" => true, "y" => true,
                "z" => true
              }
    valid = true

    input.chars.each do |letter|
      if alphabet[letter.downcase].nil?
        valid = false
        break
      end
    end

    if !valid
      puts ""
      puts "Your input may only contain letters! A-Z or a-z"
      puts ""
      return run
    end

    true
  end

  def check_validity_of_string(input)
    if input.length != 7
      puts ""
      puts "Your input must be exactly 7 characters. #{input} is #{input.length} characters"
      puts ""
      return run
    end

    true
  end



end
