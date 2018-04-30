class Data
  def self.dictionary_words_sorted
    # You don't need any words in the dictionary above seven letters.
    words = {}
    ("a".."z").each { |letter| words[letter] = [] }

    File.readlines("./data/dictionary.txt").map do |word|
      next if word.length > 8
      words[word[0]] << word[0..-2]
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

  def self.dictionary_letter_count(input_letter_count)
    sorted_words = self.dictionary_words_sorted
    possible_words = []
    input_letter_count.each_key { |letter| possible_words.concat(sorted_words[letter]) }

    word_count = self.selected_words(possible_words)
  end

  def self.selected_words(possible_words)
    word_count = {}
    possible_words.each do |word|
      word_letter_count = Hash.new(0)
      word.chars.each { |letter| word_letter_count[letter.downcase] += 1 }
      word_count[word] = word_letter_count
    end
    word_count
  end
end
