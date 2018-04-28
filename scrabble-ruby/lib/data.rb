class Data
  # You don't need any words in the dictionary above seven letters.
  def self.dictionary_words
    words = []
    File.readlines("./data/dictionary.txt").map do |word|
      words << word[0..-2] unless word.length > 8
    end
    words
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
    points["_"] = 0
    points
  end

  def self.dictionary_letter_count
    word_count = {}
    self.dictionary_words.each do |word|
      word_letter_count = Hash.new(0)
      word.chars.each { |letter| word_letter_count[letter] += 1 }
      word_count[word] = word_letter_count
    end
    word_count
  end

end
