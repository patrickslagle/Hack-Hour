// '''
// Given a list of keywords and a list of search words,
// return a list of indices that indicate the beginning
// of a sequence of adjacent keywords.

// Examples:
// '''

// search_list = ['hello', 'hi', 'hi', 'greetings', 'hi!', 'greetings!', 'hey', 'hi']
// keywords = ['hi', 'hey', 'greetings']
// # Output: [4, 5]

// search_list = ['peter!', 'piper', 'picked', 'a', 'peck', 'of', 'pickled', 'peppers', 'a',
//                'peck', 'of', 'pickled', 'peppers', 'peter', 'piper', 'picked', 'if',
//                'peter!', 'piper', 'picked', 'a', 'peck', 'of', 'pickled', 'peppers',
//                'wheres', 'the', 'peck', 'of', 'pickled', 'peppers', 'peter', 'piper', 'picked']
// keywords = ['a', 'peter', 'picked', 'piper']
// # Output: [0, 17]

// search_list = ['i', 'saw', 'susie', 'sitting', 'in', 'a', 'shoe', 'shine', 'shop', 'where', 'she',
//                'sits!', 'she', 'shines', 'and', 'where', 'she', 'shines!', 'she', 'sits']
// keywords = ['she', 'sits', 'shines']
// # Output: [11, 17]

function searchSequence(wordList, keyWords) {
  const keyWordsSet = new Set(keyWords)
  const potentialSequences = {};
  const sequences = [];
  // iterate through wordList
  for (let i = 0; i < wordList.length; i += 1) {
    // for each word, iterate through potentialSequences to see if a sequence is being maintained
    for (const index in potentialSequences) {
      // the word in wordList is one of the keywords needed for the potentialSequence
      if (potentialSequences[index].has(wordList[i])) {
        // the word was the last word needed for the sequence. 
        if (potentialSequences[index].size === 1) {
          sequences.push(index) // add to sequences
          delete potentialSequences[index] // remove from potentialSequences, since it was a confirmed sequence
        }
        // remove keyword from potentialSequences since it has now been matched
        else potentialSequences[index].delete(wordList[i])
      } 
      // word was not a remaining needed keyword for a sequence, delete from potentialSequence
      else {
        delete potentialSequences[index]
      }
    }
    // if the word matches a word in wordlist, add it to potentialSequences to check if it is a sequence
    if (keyWordsSet.has(wordList[i])) {
      console.log('has')
      potentialSequences[i] = new Set(keyWords)
      potentialSequences[i].delete(wordList[i])
    }
  }
  // return a list of the indices where there were a sequence of all the keywords
  return sequences;
}

search_list = ['peter', 'piper', 'picked', 'a', 'peck', 'of', 'pickled', 'peppers', 'a',
               'peck', 'of', 'pickled', 'peppers', 'peter', 'piper', 'picked', 'if',
               'peter', 'piper', 'picked', 'a', 'peck', 'of', 'pickled', 'peppers',
               'wheres', 'the', 'peck', 'of', 'pickled', 'peppers', 'peter', 'piper', 'picked']
keywords = ['a', 'peter', 'picked', 'piper']
// # Output: [0, 17]

console.log(searchSequence(search_list, keywords))