require_relative "data"

class CLI
  def run
    print "Your input is: "
    letters = gets.chomp

    if check_length(letters) && check_validity_of_string(letters)

      puts Data.point_system
      puts "Congrats"
    end
  end

  def check_length(letters)
    # O(1) time insertion instead of include? which is linear
    alphabet = {"a" => true, "b" => true, "c" => true, "d" => true, "e" => true,
                "f" => true, "g" => true, "h" => true, "i" => true, "j" => true,
                "k" => true, "l" => true, "m" => true, "n" => true, "o" => true,
                "p" => true, "q" => true, "r" => true, "s" => true, "t" => true,
                "u" => true, "v" => true, "w" => true, "x" => true, "y" => true,
                "z" => true
              }
    valid = true

    letters.chars.each do |letter|
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

  def check_validity_of_string(letters)
    if letters.length != 7
      puts ""
      puts "Your input must be exactly 7 characters. #{letters} is #{letters.length} characters"
      puts ""
      return run
    end

    true
  end



end
