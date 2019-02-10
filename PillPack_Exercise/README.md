<h1 align="center"> PillPack Exercise </h1><br>

<p align="center">
  This is my (Patrick Conde) refactored exercise submission for the PillPack coding exercise.
</p>

## Table of Contents

- [Instructions](#instruction)  
- [Goals](#goals)


## Instructions

In order for this exercise to display on your browser properly, ensure the following steps are taken. In your terminal/CLI, navigate to the project folder and run the following commands in order in your CLI:

* yarn install
* webpack
* open src/index.html


## Goals

The goal of this assignment is to identify all prescriptions returned by the http://api-sandbox.pillpack.com/ API that need a medication substitution. Once the html page loads, the pull requests will be made to the API. Simple iteration will reveal which brand medications have a generic counterpart. Then by sorting all medications into brand and generic allows us to iterate through the prescriptions to check if a patient is already receiving the generic counterpart. If they are, then nothing needs to be done, if they aren't then re-assign them their generic equivalent.
