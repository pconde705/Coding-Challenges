class DATA
  def read_dictionary
    words = File.readlines("./data/dictionary.txt").map(&:chomp)
  end

  def point_system
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
end
