const transpose = function (matrix){
  let [row] = matrix;
  output = row.map((value, column) => matrix.map((row) => row[column]));
  return output;
};

const wordSearch = (letters, word) => {
  let vertical = false;
  let horizontal = false;

  if (letters.length == 0){
    return undefined;
  }

  const horizontalJoin = letters.map((ls) => ls.join(""));
  for (l of horizontalJoin){
    if (l.includes(word)){
      horizontal = true;
    }
  }

  const verticalJoin = transpose(letters).map((ls) => ls.join(""));
  for (l of verticalJoin){
    if (l.includes(word)){
      vertical = true;
    }
  }

  if (vertical || horizontal){
    return true;
  } else {
    return false;
  }
};

module.exports = wordSearch;
