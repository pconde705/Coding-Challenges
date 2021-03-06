# coding: utf-8
lib = File.expand_path("../lib", __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)

Gem::Specification.new do |spec|
  spec.name          = "scrabble"
  spec.version       = "0.0.1"
  spec.authors       = ["Your Name"]
  spec.email         = ["you@boundless.co"]

  spec.summary       = "Boundless Take Home Test - Scrabble"
  spec.description   = "Let's play Scrabble!"
  spec.homepage      = "https://www.boundless.co/"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").reject do |f|
    f.match(%r{^(test|spec|features)/})
  end
  spec.bindir        = "bin"
  spec.executables   = %w{scrabble}
  spec.require_paths = ["lib"]

  spec.add_development_dependency "bundler", "~> 1.15"
  spec.add_development_dependency "rake", "~> 10.0"
  spec.add_development_dependency "rspec", "~> 3.0"
  spec.add_development_dependency "pry"
end
