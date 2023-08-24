/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

Examples:

***********************************************************************/


function reverse(str) {

  //base case str.length <= 1
  if(str.length <= 1) {
    return str
  }

  //recursive case return string backwards
 return str[str.length - 1] + reverse(str.slice(0, str.length - 1))

  //recursive step itierate

}


reverse("house"); // "esuoh"
// reverse("dog"); // "god"
// reverse("atom"); // "mota"
// reverse("q"); // "q"
// reverse("id"); // "di"
// reverse(""); // ""
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverse;
} catch (e) {
  module.exports = null;
}
