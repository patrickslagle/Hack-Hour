function balancedBrackets(brackets) {
  const bracketStack = [];
  const oppositeBrackets = {
    '[': ']',
    '{': '}',
    '(': ')'
  }
  for (let i = 0; i < brackets.length; i += 1) {
    if (brackets[i] in oppositeBrackets) bracketStack.push(brackets[i]);
    else if (brackets[i] === ']' || brackets[i] === '}' || brackets[i] === ')') {
      if (brackets[i] !== oppositeBrackets[bracketStack.pop()]) return false; 
    }
  }
  return bracketStack.length === 0; 
}

console.log(balancedBrackets('[{[]}]a()'))