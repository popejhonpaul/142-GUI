"use strict"; //message to compiler

function calculateInterest(letters, format) {
  // FILE *my = fopen("words.txt","r");
  // if(my == NULL) {
  // 	printf("Error words.txt not found!\n");
  // 	return 0;
  // }
  // while(!feof(my)) {
  // 	fscanf(my, "%s", word);
  // 	toLowerString(word);
  // 	if(!stringComparison(word, argv[2]))
  // 	{
  // 		dictionary[dictSize] = (char *)(malloc(sizeof(char) * (lengthOfWord+1)));
  // 		strcpy(dictionary[dictSize++], word);
  // 	}

  // }
  // fclose(my);
  let dictSize = 0, move = 0, start = 0
  var dictionary = [], nopts = []
  nopts[start] = 1
  let lengthOfWord = format.length, noOfChars = letters.length
  var word = []
  var option = []
  while (nopts[start] > 0) { 												// while dummy stack is not empty
    if (nopts[move] > 0) {
      move++;
      nopts[move] = 0; 													// initialize position - no initial candidates

      if (move == lengthOfWord + 1) {									// solution found
        for (i = 0; i < lengthOfWord; i++) {
          // word[i] = letters.slice(option[i + 1][nopts[i + 1]] - 1);
          // word[i] = word[i].toLowerCase()
          // console.log(word[i])
          console.log(letters.slice(option[i + 1][nopts[i + 1]] - 1))
        }
        // console.log(word)
        // word = []
        // for (i = 0; i < dictSize; i++)
        //   if (!stringComparison(word, dictionary[i]))
        //     printf("%s\n", word);
      }
      else if (move == 1) {											// only case where we'll populate the first position
        for (let candidate = noOfChars; candidate >= 1; candidate--) {
          let plusone = ++nopts[move]
          option[move] = []
          option[move][plusone] = candidate;
        }
      }
      else {															// find candidates
        for (let candidate = noOfChars; candidate >= 1; candidate--) {
          for (var i = move - 1; i >= 1; i--)
            if (candidate == option[i][nopts[i]]) break;			// check top of stack of previous positions
          if (!(i >= 1)) {
            option[move] = []
            option[move][++nopts[move]] = candidate;
          }												// meaning it did not break - candidate is not used by previous positions
        }
      }
    }
    else {																// backtracking step
      move--;															// current position has exhausted candidates so move to previous
      nopts[move]--;													// remove current top on this stack

    }
  }

  // 	for(i = 0; i < dictSize; i++) free(dictionary[i]);
  // }

  // void toLowerString(char* s) {
  // 	for (int i = 0; i < strlen(s); i++)
  // 		s[i] = tolower(s[i]);
  // }

  // int stringComparison(char* s1, char* s2) {
  // 	if(strlen(s1) != strlen(s2)) return 1;
  // 	for(int i = 0; i < strlen(s1); i++) {
  // 		if(s1[i] != '_' && s2[i] != '_') {
  // 			if(s1[i] > s2[i]) return 1;
  // 			else if(s1[i] < s2[i]) return -1;
  // 		}
  // 	}
  // 	return 0;
  // }

}
calculateInterest("devil", "__");

