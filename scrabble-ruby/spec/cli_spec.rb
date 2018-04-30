require "spec_helper"
require "cli"

describe CLI do
  subject(:scrabble) {CLI.new}

  describe '#check_length' do
    it "make sure the input is exactly seven characters" do
      input = gets.chomp
      expect(scrabble.check_length(input)).to eq(true)
    end
  end

  describe '#check_validity_of_string' do
    it "make sure the input the consists of characters a - z" do
      input = gets.chomp.downcase
      alphabet = ("a".."z").to_a
      expect(scrabble.check_validity_of_string(input)).to eq(true)
    end
  end
end
