# Patrick Conde's Scrabble

Welcome to Patrick Conde's solution to the Boundless Take Home Test - Scrabble. All you have to do is run `ruby bin/scrabble` after which you will be prompted for an input. Type any seven letters of your choice including underscores if you want, then press enter and your results will appear. If you make a mistake along the way, helpful instructions will appear to inform you of what went wrong. 

# Boundless Take Home Test - Scrabble

![Scrabble](./scrabble.jpg)

[Scrabble](https://en.wikipedia.org/wiki/Scrabble) is a word game where players
create words with letters on tiles. Each tile contains a single letter and a point
value for that letter. The score of a word is found by summing
the points for all of its letters.

The goal of this exercise is to write a command line program for
finding an optimal first move in a game of Scrabble.

## Provided Materials

You will find two files in the `./data` directory:

1. `points.txt`: contains the point value for each letter.
2. `dictionary.txt`: contains the valid words that can be played.

You can use these files in any way you'd like to while building your
solution.

## Desired Results

Please make your solution runnable by using `bin/scrabble` and
passing in seven letters as an argument. The program should then print
either the highest scoring words for the letters provided or report
that no words are possible. Here are some examples:

```
> bin/scrabble ARPNNLA
PLANAR - 8

> bin/scrabble ypobinx
BOXY - 16
PIXY - 16
PNYX - 16
POXY - 16

> bin/scrabble A_IMUTH
ANTIHUM - 11
ATHUMIA - 11
AZIMUTH - 11
THIURAM - 11
```

### Blank Tile

Scrabble also has **two** blank tiles. Its point value is zero but it can be
used as a substitute for any letter while constructing words. Our application
needs to be able to use up to two blank tiles when needed while
finding the highest scoring word.

## Evaluation Criteria

- **Implementation considerations:** Please include a discussion of the
   thinking you went through in designing your solution. We're
   eager to hear about your thought process! It will help us be on
   the same page with you when reviewing your solution.
- **Automated testing:** We value testing, and like to see good test coverage
   added to the files under `./spec`. Tests can be run with `rspec`.
- **Well-factored code:** Readability, maintainability, and
   design concepts like single responsibility are important for
   us in addition to a functioning solution.
- **Clear documentation:** Make sure to include instructions
   on how to setup and run your program to the top of this file.
- **Handling invalid input and error conditions:** Make sure to handle
   important error conditions with helpful messages for the user about how to
   recover from these errors and use your program.

Feel free to use any tools, resources, and libraries that will make the solution
faster and more clear–there is no need to reinvent the wheel.

## Submitting your solution

Please take as much time as you would like to. Once you feel your
solution is complete,
email [serdar@boundless.co](mailto:serdar@boundless.co) to let him know.

## Questions

If you have any questions about this problem or about your interview process
reach out to [serdar@boundless.co](mailto:serdar@boundless.co).
