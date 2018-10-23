//Problem: https://www.hackerrank.com/challenges/counting-valleys

function countingValleys(n, s) {
    let level = 0, vallies = 0;
    for (var i in s) {
        level = (s.charAt(i) == 'U') ? level + 1 : level - 1;  //Increase/decrease sea level
        if (level === 0 && s.charAt(i) === 'U') {              //Check for transition of sea level
            vallies++;
        }
    }
    return vallies;

}
