class Data
  def self.read_dictionary
    words = []
    File.readlines("./data/dictionary.txt").map do |word|
      words << word[0..-2] unless word.length > 8
    end
    print words
  end

  def self.point_system
    points = {}
    File.readlines("./data/points.txt").map do |line|
      if line[-3] == "1"
        points[line[0]] = line[-3..-2].to_i
      else
        points[line[0]] = line[-2].to_i
      end
    end
    points
  end
# You don't need any words in the dictionary above seven letters.
  def self.dictionary_letter_count
    word_count = {}
    words = self.read_dictionary
    words.each do |word|
      letter_count_hash = Hash.new(0)
      word.chars.each do |letter|
        letter_count_hash[letter] += 1
      end
      word_count[word] = letter_count_hash
    end
    word_count
  end

end

puts Data.read_dictionary
