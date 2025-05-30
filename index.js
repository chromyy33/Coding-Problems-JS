// "use strict";
// // Majority Vote
// // Create a function that returns the majority vote in an array. A majority vote is an element that occurs > N/2 times in an array (where N is the length of the array).

// // Examples
// // majorityVote(["A", "A", "B"]) ➞ "A"

// // majorityVote(["A", "A", "A", "B", "C", "A"]) ➞ "A"

// // majorityVote(["A", "B", "B", "A", "C", "C"]) ➞ null
// // Notes
// // The frequency of the majority element must be strictly greater than 1/2.
// // If there is no majority element, return null.
// // If the array is empty, return null.

// //Solution

// function majorityVote(arr) {
//   if (arr.length === 0) return null;
//   //votesD=votes Dirstribution
//   let votesD = {};

//   for (let i = 0; i < arr.length; i++) {
//     if (votesD[arr[i]])
//       votesD[arr[i]] += 1; //if already in obj add 1 to current count
//     else {
//       votesD[arr[i]] = 1; //if not then initialize it with 1
//     }
//   }
//   const arrD = Object.values(votesD); //arrD = votes distribution
//   const canD = Object.keys(votesD); //canD = candidate distribution

//   const isDraw = new Set(arrD).size > 1 ? false : true; //checking if all candidates got the same amount of votes
//   if (isDraw) return null; //early return
//   const [maxVote] = [...arrD].sort((a, b) => {
//     return b - a;
//   }); //finding the index of most voted candidate
//   return canD[arrD.indexOf(maxVote)]; //returning the candidate based of index found in the votes arr
// }
// console.log(majorityVote(["A", "A", "A", "B", "C", "A"]));
// console.log(majorityVote(["A", "B", "B", "A", "C", "C"]));

// // Mutations Only: Zeroes to the End
// // Write a function that moves all the zeroes to the end of an array. Do this without returning a copy of the input array.

// // Examples
// // zeroesToEnd([1, 2, 0, 0, 4, 0, 5]) ➞ [1, 2, 4, 5, 0, 0, 0]

// // zeroesToEnd([0, 0, 2, 0, 5]) ➞ [2, 5, 0, 0, 0]

// // zeroesToEnd([4, 4, 5]) ➞ [4, 4, 5]

// // zeroesToEnd([0, 0]) ➞ [0, 0]
// // Notes
// // You must mutate the original array.
// // Keep the relative order of the non-zero elements the same.

// function zeroesToEnd(arr) {
//   //early return if no 0's and if there are only zeroes in the arr
//   if (!arr.includes(0) || (new Set(arr).size === 1 && arr[0] === 0)) return arr;

//   console.log("after 2"); //checking if the above statement is valid
//   let countN = 0; //count for numbers
//   let countZ = 0; // count for zeroes
//   let mutArr = []; //intitalizing and empty array
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== 0) {
//       mutArr[countN] = arr[i];
//       countN++; //increase  num count if not zero and replace at the index , that is num count,ex arr[i]=1,start at index 0 as count is zero and add to count
//     } else {
//       countZ++;
//       mutArr[arr.length - countZ] = 0;
//       //else increase zero count and start from the end
//     }
//   }
//   return mutArr;
// }
// console.log(zeroesToEnd([1, 2, 0, 0, 4, 0, 5]));
// console.log([0, 0]);

// //typing test for my new keyboard :)

// //This is a typing test for my new keyboard I am not at all good at typing as I do not folow the old coneventions of typing typing on the mac is much easier than an actual keyboard
// //I dont know If I will be able to cope with this type of key board given that I have used similar ones in the past an I feel like the problem happens once I try and start typing fast and do not really register a feel an place ment for the keys now I were to learn to type again I would do it again but my current speed is really slow I need to pick up the pace. Now as the mac is in a screen width mode it is much better and all I am doing now is trying to type without looking at the keyboard with as much accuracy as possible but I do keep missing most of the keys and yes I am not PERFECT! I think what I need to do is try and cover the areas where I am weak and put some time and practise after it.

// //
// // Write a function that counts how many different ways you can make change for an amount of money, given an array of coin denominations. For example, there are 3 ways to give change for 4 if you have coins with denomination 1 and 2:

// // 1+1+1+1, 1+1+2, 2+2.
// // The order of coins does not matter:

// // 1+1+2 == 2+1+1
// // Also, assume that you have an infinite amount of coins.

// // Your function should take an amount to change and an array of unique denominations for the coins:

// //   countChange(4, [1,2]) // => 3
// //   countChange(10, [5,2,3]) // => 4
// //   countChange(11, [5,7]) //  => 0

// // function convertChange(amount, coins) {
// //     const dp = Array(amount + 1).fill(0);
// //     dp[0] = 1; // There's one way to make 0 amount: no coins

// //     for (const coin of coins) {
// //       for (let i = coin; i <= amount; i++) {
// //         dp[i] += dp[i - coin];
// //       }
// //     }

// //     return dp[amount];

// // }
// // console.log(convertChange(10, [5, 2, 3]));
// function countChange(amount, coins) {
//   let count = 0;

//   function helper(remaining, index) {
//     console.log(`Checking amount: ${remaining}, using coin index: ${index}`);

//     if (remaining === 0) {
//       count++;
//       console.log(`Found a way! Total ways so far: ${count}`);
//       return;
//     }

//     if (remaining < 0 || index >= coins.length) {
//       return;
//     }

//     // Use the current coin
//     helper(remaining - coins[index], index);

//     // Skip the current coin
//     helper(remaining, index + 1);
//   }

//   helper(amount, 0);
//   return count;
// }

// // console.log(countChange(10, [5, 2, 3]));

// //Write a function that retrieves the top 3 longest words of a newspaper headline and transforms them into hashtags. If multiple words tie for the same length, retrieve the word that occurs first.

// // Examples
// // getHashTags("How the Avocado Became the Fruit of the Global Trade")
// // ➞ ["#avocado", "#became", "#global"]

// // getHashTags("Why You Will Probably Pay More for Your Christmas Tree This Year")
// // ➞ ["#christmas", "#probably", "#will"]

// // getHashTags("Hey Parents, Surprise, Fruit Juice Is Not Fruit")
// // ➞ ["#surprise", "#parents", "#fruit"]

// // getHashTags("Visualizing Science")
// // ➞ ["#visualizing", "#science"]
// // Notes
// // If the title is less than 3 words, just order the words in the title by length in descending order (see example #4).
// // Punctuation does not count towards a word's length.

// function getHashTags(str) {
//   // List of punctuation to remove,can be customized
//   const punctuation = [
//     ",",
//     ".",
//     "!",
//     "?",
//     "'",
//     '"',
//     ":",
//     ";",
//     "-",
//     "(",
//     ")",
//     "[",
//     "]",
//     "{",
//     "}",
//     "/",
//   ];

//   // Split the string into words
//   str = str.split(" ").map((word) => {
//     // Remove punctuation by filtering out unwanted characters
//     return word
//       .split("")
//       .filter((char) => !punctuation.includes(char))
//       .join("");
//   });

//   //sort by lenght so that we have first theree big words
//   const sortedArr = str.sort((a, b) => b.length - a.length);

//   //slice by detemining if we have more or less than 3 words in the str
//   const sliceLen = str.length < 3 ? str.length : 3;

//   //return by maping and adding the # for each word and converting them to lowercase
//   return sortedArr.slice(0, sliceLen).map((tag) => "#" + tag.toLowerCase());
// }
// console.log(getHashTags("Hey Parents, Surprise, Fruit Juice Is Not Fruit"));
// console.log(getHashTags("Visualizing Science"));

// // function getNotesDistribution(students) {
// //   let res = {};
// //   students = students
// //     .map((obj) => obj.notes.filter((note) => note > 0))
// //     .flat(1);
// //   console.log(students);
// //   for (const note of students) {
// //     if (!res[note]) {
// //       res[note] = 1;
// //     } else {
// //       res[note] += 1;
// //     }
// //   }
// //   return res;
// // }

// // console.log(
// //   getNotesDistribution([
// //     {
// //       name: "Steve",
// //       notes: [5, 5, 3, -1, 6],
// //     },
// //     {
// //       name: "John",
// //       notes: [3, 2, 5, 0, -3],
// //     },
// //   ])
// // );

// // Dungeon Gold Farming
// // In the role-playing game EdaQuest (no official affiliation with Edabit), a particular dungeon has a bunch of rooms designated by the grid. Each room in the dungeon is represented by an object with two properties:

// // m: The amount of damage done by the monster lurking in that room.
// // g: The amount of gold available for you to collect in that room.
// // You enter the dungeon, from any room at the edge of the dungeon, with a certain amount of health hp. During each turn, you:

// // Can go to any room (north, east, south, or west) as long as that room exists and has not yet been visited.
// // Collect the gold in that room.
// // Fight the monster in that room, losing health equivalent to the monster's value.
// // If your health is then less than or equal to 0, you die. Otherwise, continue.

// // Instructions
// // Given a dungeon grid and a starting health hp, write the function dungeonCrawl(grid, hp) to determine the maximum amount of gold you could obtain by entering the grid at any of the edge rooms (see note below) and continuing until you can no longer make a move.

// // Return this maximum gold. If you cannot obtain any gold from the dungeon (or if you cannot survive the dungeon), return 0.

// // Examples
// // dungeonCrawl([[{ g: 0, m: 3 }]], 6) ➞ 0

// // // You enter the one-room dungeon, but there is no gold.
// // // Fortunately, you survive. What a waste of time!
// // dungeonCrawl([[{ g: 6, m: 2 }]], 5) ➞ 6

// // // You enter the one-room dungeon, grab your 6 gold, and
// // // leave with 6 gold and 5-2 = 3 health.
// // dungeonCrawl([
// //   [{ g: 5 }, { g: 0 }, { g: 8 }],
// //   [{ g: 4, m: 5 }, { g: 7 }, { g: 7, m: 4 }],
// //   [{ g: 1 }, { g: 5, m: 4 }, { g: 0 }],
// //   [{ g: 1, m: 4 }, { g: 0 }, { g: 0 }]
// // ], 10) ➞ 32

// // // The best path produces 32 gold.
// // dungeonCrawl([
// //   [{ g: 5, m: 6 }, { g: 2, m: 1 }],
// //   [{ g: 4, m: 10 }, { g: 1, m: 1 }]
// // ], 1) ➞ 0

// // // You can't survive any room in this dungeon with only 1 hp!
// // dungeonCrawl([
// //   [{ g: 2 }, { g: 4, m: 3 }, { g: 7, m: 3 }],
// //   [{ g: 2 }, { g: 1, m: 1 }, { g: 1, m: 4 }],
// //   [{ g: 8 }, { g: 9, m: 4 }, { g: 5 }],
// //   [{ g: 1 }, { g: 3, m: 1 }, { g: 1 }]
// // ], 5) ➞ 18

// // // Note that the maximum available gold in the dungeon is 44,
// // // but you cannot survive long enough to get all of that gold!
// // Notes
// // Monsters vs Gold: If a monster kills you, it doesn't matter how much gold you've collected; You're dead! As such, even if adding that room's gold would increase your "best path" gold, don't add it! In other words, if your current "best path" is 20 gold, you're at 19 gold and 4 health, and this room is:

// // {
// //   m: 6,
// //   g:5
// // }
// // then your "best path" should not be updated to 24 gold (you died before collecting that gold!).

// // Edge Rooms: To reiterate, you must enter the dungeon from one of the rooms at the edge of that dungeon. So if your dungeon is a 3x3 dungeon, for example, you could enter via any room other than the room at position (1, 1) (the "middle" room):

// // [
// //   [yes, yes, yes],
// //   [yes, no, yes],
// //   [yes, yes, yes]
// // ]
// // Health Potions: The dungeon crafters are cheap and there is no health restore potions. So once you lose health points, that's it!

// // Updates:
// // I realized (thanks to some awesome commenters!) that my old code makes some mistakes. I've (hopefully) updated, which unfortunately means some of the old solutions no longer work. Here's some hints for those who were making the same mistake I was:

// // You do not have to hit every cell, and can "stop" at any time.
// // Namely, if the next move would kill you and you have a really high amount of coin, stop there!

// function dungeonCrawl(grid, hp) {
//   // see if we have any romms free of monsters and with some gold
//   let currentHp = hp;
//   const monsterFreeWithGold = grid.map((rooms) =>
//     rooms.filter((room) => room.g > 0 && room.m === undefined)
//   );
//   const totalGoldFreeofMonster = monsterFreeWithGold
//     .flat(1)
//     .reduce((acc, cur) => cur.g + acc, 0);

//   let monsterWithBeatbleHpAndMostGold = grid
//     .map((rooms) => rooms.filter((room) => room.g > 1 && room.m !== undefined))
//     .flat(1);
//   monsterWithBeatbleHpAndMostGold.sort((a, b) => b.g - a.g && a.m - b.m);
//   const goldFromMonsters = monsterWithBeatbleHpAndMostGold.reduce(
//     (acc, curr) => {
//       currentHp = currentHp - curr.m;
//       if (currentHp >= 0) {
//         return acc + curr.g;
//       }
//       return acc;
//     },
//     0
//   );
//   return totalGoldFreeofMonster + goldFromMonsters;
// }
// console.log(
//   dungeonCrawl(
//     [
//       [{ g: 5 }, { g: 0 }, { g: 8 }],
//       [{ g: 4, m: 5 }, { g: 7 }, { g: 7, m: 4 }],
//       [{ g: 1 }, { g: 5, m: 4 }, { g: 0 }],
//       [{ g: 1, m: 4 }, { g: 0 }, { g: 0 }],
//     ],
//     10
//   )
// );
// // Rearrange the Sentence
// // Given a sentence with numbers representing a word's location embedded within each word, return the sorted sentence.

// // Examples
// // rearrange("is2 Thi1s T4est 3a") ➞ "This is a Test"

// // rearrange("4of Fo1r pe6ople g3ood th5e the2") ➞ "For the good of the people"

// // rearrange(" ") ➞ ""
// //I AM BACK BABYYY
// function rearrangeSentence(str) {
//   if (str.trim() === "") {
//     console.log("nothing");
//     return;
//   }

//   const splitStrArr = str.split(" ");
//   const finalArr = new Array();
//   for (const word of splitStrArr) {
//     const index = parseInt(word.match(/\d+/)[0]);
//     const cleanedWord = word.replace(/\d/g, "");
//     finalArr[index - 1] = cleanedWord;
//   }
//   console.log(finalArr);
// }

// rearrangeSentence("is2 Thi1s T4est 3a");
// rearrangeSentence("");

// // Given an array of integers numbers, return a new array result where each element result[i] represents the product of all the elements in numbers except for numbers[i].

// // Input
// // numbers: number[]: An array of integers
// // Notes
// // The product of any prefix or suffix of the numbers array is ensured to fit within a 32-bit integer
// // Use of the division operator is prohibited
// // Examples
// // Input: numbers = [1,2,3]
// // Output: [6,3,2]
// // Explanation: Output is multiplication of all other elements except self, i.e 2*3, 1*3, 1*2
// // Input: numbers = [2,0,3]
// // Output: [0,6,0]
// // Explanation: Output is multiplication of all other elements except self, i.e 0*3, 2*3, 2*0
// // Input: numbers = [0,0,-1,1]
// // Output: [0,0,0,0]
// // Explanation: Output is multiplication of all other elements except self, i.e 0*-1*1, 0*-1*1, 0*0*1, 0*0*-1
// // Constraints
// // 2 <= numbers.length <= 1000
// // -10 <= numbers[i] <= 10

// // function productArr(arr) {
// //   const finalArr = [];
// //   let prod;
// //   for (let i = 0; i < arr.length; i++) {
// //     let index = i;
// //     let pairArr = [...arr]
// //     pairArr.splice(index,1);
// //     prod = pairArr.reduce((acc, cur) => {
// //       return acc * cur;
// //     }, 1);
// //     finalArr.push(prod)
// //   }
// //   return finalArr
// // }

// // console.log(productArr([1,2, 3, 4, 5,0]));
// // Implement a function that performs binary search on an array of numbers. The function should take in a sorted array of integers and a target integer to find. It returns the index of the target element or -1, if the target element doesn't exist in the array.

// // Examples
// // binarySearch([1, 2, 3, 6, 9, 11], 6); // 3
// // binarySearch([1, 2, 3, 12, 14, 16], 5); // -1

// // function binarySearch(arr, elem) {
// //   if (arr.length === 0) return -1; // Base case: not found

// //   let index = Math.floor(arr.length / 2);
// //   let centerElem = arr[index];

// //   if (centerElem === elem) {
// //     return index;
// //   }

// //   if (centerElem > elem) {
// //     return binarySearch(arr.slice(0, index), elem);
// //   } else {
// //     const result = binarySearch(arr.slice(index + 1), elem);
// //     if (result === -1) return -1;
// //     else return result + index + 1; // adjust index because we sliced
// //   }
// // }

// // console.log(binarySearch([1, 2, 3, 6, 9, 11],1));

// // Premier League Champions
// // Create a function that takes an array of football clubs with properties: name, wins, loss, draws, scored, conceded, and returns the team name with the highest number of points. If two teams have the same number of points, return the team with the largest goal difference.

// // How to Calculate Points and Goal Difference
// // team = { name: "Manchester United", wins: 30, loss: 3, draws: 5, scored: 88, conceded: 20 }

// // Total Points = 3 * wins + 0 * loss + 1 * draws = 3 * 30 + 0 * 3 + 5 * 1 = 95 points
// // Goal Difference = scored - conceded = 88 - 20 = 68
// // Examples
// // champions([
// //   {
// //     name: "Manchester United",
// //     wins: 30,
// //     loss: 3,
// //     draws: 5,
// //     scored: 88,
// //     conceded: 20,
// //   },
// //   {
// //     name: "Arsenal",
// //     wins: 24,
// //     loss: 6,
// //     draws: 8,
// //     scored: 98,
// //     conceded: 29,
// //   },
// //   {
// //     name: "Chelsea",
// //     wins: 22,
// //     loss: 8,
// //     draws: 8,
// //     scored: 98,
// //     conceded: 29,
// //   },
// //   ])
// // ➞ "Manchester United"

// // function champions(teams) {
// //   const teamsWithScore = teams
// //     .map((team) => {
// //       const points = team.wins * 3 + 1 * team.draws;
// //       const goalDiff = team.scored - team.conceded;
// //       return { teamName: team.name, points, goalDiff };
// //     })
// //     .sort((a, b) => {
// //       return a.points === b.points
// //         ? b.goalDiff - a.goalDiff
// //         : b.points - a.points;
// //     });
// //   console.log(teamsWithScore[0].teamName);
// // }
// // champions([
// //   {
// //     name: "Manchester United",
// //     wins: 30,
// //     loss: 3,
// //     draws: 5,
// //     scored: 88,
// //     conceded: 20,
// //   },
// //   {
// //     name: "Arsenal",
// //     wins: 29,
// //     loss: 6,
// //     draws: 8,
// //     scored: 98,
// //     conceded: 29,
// //   },
// //   {
// //     name: "Chelsea",
// //     wins: 22,
// //     loss: 8,
// //     draws: 8,
// //     scored: 98,
// //     conceded: 29,
// //   },
// // ]);

// // Combine Two Objects Into One, Summing Like Values
// // Take two objects with similar key values and combine them into a new object summing any values that belong to the same category.

// // There's a married couple, Hank and his spouse Sheila. Hank works at a power plant making $70,000 a year, and Sheila is a teacher making $40,000 a year. They both earn rental income from separate rental properties, Hank will get $12,000 and Sheila $10,000. The new object will show their separate income but combine the rental income because it fits the same category.

// // const user1 = {
// //   powerPlant: 70000,
// //   rental: 12000
// // }

// // const user2 = {
// //   teaching: 40000,
// //   rental: 10000
// // }

// // becomes ➞ {
// //   powerPlant: 70000,
// //   teaching: 40000,
// //   rental: 22000   // The rental income is added together.
// // }
// // Arguments
// // user1Income (Object) ⁠— an income object for user1
// // user2Income (Object) ⁠— an income object for user2
// // returns: A new object with like values combined
// // Challenges
// // They won't have the same number of key-value pairs.
// // The return object must return the values ordered from lowest to highest so your answers can match the test answers
// const user1 = {
//   powerPlant: 70000,
//   rental: 12000,
// };

// const user2 = {
//   teaching: 40000,
//   rental: 10000,
// };
// function combinedIncome(firstUser, secondUser) {
//   const finalObj = { ...firstUser }; // Start with a copy of firstUser

//   for (let key in secondUser) {
//     if (finalObj.hasOwnProperty(key)) {
//       finalObj[key] += secondUser[key]; // Sum if key exists
//     } else {
//       finalObj[key] = secondUser[key]; // Add new key
//     }
//   }

//   return finalObj;
// }
// //Tried but could not implement, had to look for an easier sol from chat gpt
// combinedIncome(user1, user2);
// // sampleVar = "Sometext";

// // Making a Box 2.0!
// // This is based on Helen Yu's Making a Box challenge. This challenge is the same execpt that instead of an array of strings, your function should output a matrix of characters.

// // Examples
// // charBox(1) ➞ [
// //   ["#"]
// // ]

// // charBox(4) ➞ [
// //   ["#", "#", "#", "#"],
// //   ["#", " ", " ", "#"],
// //   ["#", " ", " ", "#"],
// //   ["#", "#", "#", "#"]
// // ]

// // charBox(2) ➞ [
// //   ["#", "#"],
// //   ["#", "#"]
// // ]
// // Notes
// // As an added bonus, try making charBox(0) output [[]] and make any strings, non-integers, and negative numbers output -1.

// function makeBox(number) {
//   if (number === 0) {
//     console.log([[]]);
//     return;
//   }
//   if (typeof number !== "number" || number < 0) {
//     console.log(-1);
//     return;
//   }
//   let finalArr = [];
//   for (let i = 0; i < number; i++) {
//     let arr = new Array(number);
//     if (i === 0 || i === number - 1) {
//       arr.fill("#", 0, number);
//     } else {
//       arr.fill(" ", 0, number);
//       arr[0] = arr[number - 1] = "#";
//     }
//     finalArr[i] = arr;
//   }
//   console.log(finalArr);
// }

// makeBox(3);
// makeBox(1);
// makeBox(8);
// makeBox(0);

// makeBox("yes");
// let keyName = "JS";
// const emptyOb = {};
// emptyOb[keyName] = keyName;
// keyName = "C";
// emptyOb[keyName] = keyName;

// //tests passed
// console.log(emptyOb);
// console.log(String());

// const originalObj = {
//   firstName: "Adam",
//   age: 21,
// };

// function test() {
//   let num = originalObj;
//   num = [];
//   console.log(num);
// }
// test();
// console.log(8 + +"9");

// // for (let i = 0; i < 10; i++) {
// //   setTimeout(() => {
// //     console.log(i);
// //   }, 1000*i);
// // }
// // for (var i = 0; i < 10; i++) {
// //   function call(i) {
// //     setTimeout(() => {
// //       console.log(i + 1);
// //     }, 1000 * i);
// //   }
// //   call(i);
// // }

// // Tall People
// // Create a function that takes a 2D array as an argument and returns the number of people whose view is blocked by a tall person. The concert stage is pointed towards the top of the 2D array and the tall person (represented by a 2) blocks the view of all the people (represented by a 1) behind them.

// // Examples
// // block([
// //   [1, 1, 1, 1, 1],
// //   [1, 1, 1, 1, 1],
// //   [1, 1, 1, 1, 2],
// //   [1, 1, 1, 1, 1],
// //   [1, 1, 1, 1, 1]
// // ]) ➞ 2

// // // The tall person blocks 2 people behind him thus
// // // the function returns 2.

// // block([
// //   [1, 2, 1, 1],
// //   [1, 1, 1, 2],
// //   [1, 1, 1, 1],
// //   [1, 1, 1, 1],
// // ]) ➞ 5

// // // There are 2 tall people that block everyone behind
// // // them. The first tall person in the first row blocks 3
// // // people behind him while the second tall person in
// // // the second row blocks 2 people behind him thus the
// // // function returns 5.

// // block([
// //   [1, 1, 1, 1],
// //   [2, 1, 1, 2],
// //   [1, 1, 1, 1],
// //   [1, 1, 1, 1],
// // ]) ➞ 4
// // Notes
// // There is only a maximum of 1 tall person in every column.
// // No view is blocked if the tall person is in the last row.

// // function countBlockedView(arr) {
// //   let count = 0;
// //   for (let i = 0; i < arr.length - 1; i++) {
// //     if (arr[i].includes(2)) {
// //       let countTallPeople = arr[i].filter((a) => {
// //         return a === 2;
// //       }).length;
// //       count += (arr.length - (i + 1)) * countTallPeople;
// //     }
// //   }
// //   console.log(count);
// // }
// // countBlockedView([
// //   [1, 1, 1, 1],
// //   [2, 1, 1, 2],
// //   [1, 1, 1, 1],
// //   [1, 1, 1, 1],
// // ]);
// // countBlockedView([
// //   [1, 2, 1, 1],
// //   [1, 1, 1, 2],
// //   [1, 1, 1, 1],
// //   [1, 1, 1, 1],
// // ]);
// // countBlockedView([
// //   [1, 2, 1, 1],
// //   [1, 1, 1, 2],
// //   [1, 1, 1, 1],
// //   [1, 1, 1, 1],
// // ]);

// // countBlockedView([
// //   [1, 1, 1, 1, 1],
// //   [1, 1, 1, 1, 1],
// //   [1, 1, 1, 1, 2],
// //   [1, 1, 1, 1, 1],
// //   [1, 1, 1, 1, 1],
// // ]);
// // countBlockedView([
// //   [2, 2, 2],
// //   [1, 1, 1],
// //   [1, 1, 1],
// // ]);

// // All Pairs that Sum to Target
// // Create a function that returns all pairs of numbers in an array that sum to a target. Sort the pairs in ascending order with respect to the smaller number, then order each pair in this order: [smaller, larger].

// // Examples
// // allPairs([2, 4, 5, 3], 7) ➞ [[2, 5], [3, 4]]
// // // 2 + 5 = 7, 3 + 4 = 7

// // allPairs([5, 3, 9, 2, 1], 3) ➞ [[1, 2]]

// // allPairs([4, 5, 1, 3, 6, 8], 9) ➞ [[1, 8], [3, 6], [4, 5]]
// // // Sorted: 1 < 3 < 4; each pair is ordered [smaller, larger]
// // Notes
// // If no pairs are found, return an empty array [].
// // You are only allowed to use each number once in a pair.
// // See Comments for a hint.

// function allPairs(arr, num) {
//   if (arr.length === 0) return;
//   let finalArr = [];
//   const sortedArr = arr.sort((a, b) => a - b);

//   for (let i = 0; i < arr.length; i++) {
//     const otherNum = Math.abs(arr[i] - num);
//     if (arr.includes(otherNum)) {
//       const pair = [arr[i], otherNum];
//       finalArr.push(pair);
//       const index = arr.indexOf(otherNum);
//       arr.splice(index, 1);
//     }
//   }
//   console.log(finalArr);
// }
// allPairs([2, 4, 5, 3], 7);

// // Aur haan — yeh “kabhi tarif nahi hui” wali feeling na, woh sabhi self-taught log feel karte hain. But let this be a reminder:
// // You’re not just learning to code. You’re building a brain that solves problems.
// // And bro, duniya mein uski demand sabse zyada hai.

// // 1. Create unique symbols for 'userId' and 'password'
// const userIdSymbol = Symbol("userId");
// const passwordSymbol = Symbol("password");

// // 2. Create an object for the user
// const user = {};

// // 3. Assign the symbols as property keys with values
// user[userIdSymbol] = 12345; // userIdSymbol will be the key
// user[passwordSymbol] = "secret123"; // passwordSymbol will be the key

// // 4. Now, if you log the object, you'll see the symbol keys (but they won't show in normal object enumeration)
// console.log(user); // Output: { [Symbol(userId)]: 12345, [Symbol(password)]: 'secret123' }

// // 5. Try to log the user object with regular object enumeration methods
// console.log(Object.keys(user)); // Output: [] - Symbols don't show up in Object.keys()

// // 6. Access the values using the symbols (to prevent collisions)
// console.log(user[userIdSymbol]); // Output: 12345
// console.log(user[passwordSymbol]); // Output: 'secret123'

// const symbolKey = Symbol("id");

// const obj = {
//   [symbolKey]: 12345,
// };

// console.log(obj); // Output: { [Symbol(id)]: 12345 }

// // Trying to change the symbol key (this will not work)
// obj[symbolKey] = 67890; // This changes the value associated with the symbol key, not the key itself

// // You cannot do this to change the key itself
// // obj['newSymbol'] = 123; // This would add a new key-value pair with a string as a key, NOT change the symbol key

// console.log(obj); // Output: { [Symbol(id)]: 67890 }
// console.log(obj[symbolKey]); // Output: 67890

// // const btn = document.getElementById("cart");
// // const btnFast = document.getElementById("cart-fast");
// // function addToCart() {
// //   let message = "";
// //   setTimeout(() => {
// //     message = "Added to Cart";
// //     console.log(message);
// //   }, 3000);
// // }

// // function addToCartFast() {
// //   addToCart();
// //   return function () {
// //     console.log(message);
// //   };
// // }

// // const curriedFN = addToCartFast();
// // btn.addEventListener("click", addToCart);
// // btnFast.addEventListener("click", curriedFN);

// // Mean

// // Implement a function mean(array) that returns the mean (also known as average) of the values inside array, which is an array of numbers.

// // Arguments
// // array (Array): Array of numbers.
// // Returns
// // (Number): Returns the mean of the values in array.

// // Examples
// // mean([4, 2, 8, 6]); // => 5
// // mean([1, 2, 3, 4]); // => 2.5
// // mean([1, 2, 2]); // => 1.6666666666666667

// // function mean(arr) {
// //   const len = arr.length;
// //   if (len === 0) return NaN;
// //   const sum = arr.reduce((acc, curr) => {
// //     return acc + curr;
// //   }, 0);
// //   return sum / len;
// // }
// // console.log(mean([]));
// // console.log(mean([1, 2, 3, 4, 5, 9, 4, 3, 1, 2, 3, 22]));

// // // Remove the Last Vowel
// // // Write a function that removes the last vowel in each word in a sentence.

// // // Examples
// // // removeLastVowel("Those who dare to fail miserably can achieve greatly.")
// // // ➞ "Thos wh dar t fal miserbly cn achiev gretly."

// // // removeLastVowel("Love is a serious mental disease.")
// // // ➞ "Lov s  serios mentl diseas"

// // // removeLastVowel("Get busy living or get busy dying.")
// // // ➞ "Gt bsy livng r gt bsy dyng"

// // function removeLastVowel(str) {
// //   let finalStr = "";
// //   const vowels = ["a", "e", "i", "o", "u"];
// //   const splitStr = str.split(" ");

// //   function remove(word) {
// //     for (let i = word.length - 1; i >= 0; i--) {
// //       if (vowels.includes(word[i].toLowerCase())) {
// //         return word.slice(0, i) + word.slice(i + 1);
// //       }
// //     }
// //     return word; // in case there's no vowel
// //   }

// //   for (let i = 0; i < splitStr.length; i++) {
// //     const processed = remove(splitStr[i]);
// //     finalStr += processed + " ";
// //   }

// //   console.log(finalStr);
// // }

// // removeLastVowel("Those who dare to fail miserably can achieve greatly.");
// // const string = "Disatisfied";

// // function User(name, email) {
// //   console.log(this);
// // }

// // const userMayank = new User();
// // // console.log(userMayank);

// // // Balanced Words
// // // We can assign a value to each character in a word, based on their position in the alphabet (a = 1, b = 2, ... , z = 26). A balanced word is one where the sum of values on the left-hand side of the word equals the sum of values on the right-hand side. For odd length words, the middle character (balance point) is ignored.

// // // Write a function that returns true if the word is balanced, and false if it's not.

// // // Examples
// // // balanced("zips") ➞ true
// // // // "zips" = "zi|ps" = 26+9|16+19 = 35|35 = true

// // // balanced("brake") ➞ false
// // // // "brake" = "br|ke" = 2+18|11+5 = 20|16 = false
// // // Notes
// // // All words will be lowercase, and have a minimum of 2 characters.
// // // Palindromic words will always be balanced.

// // function balanceWords(str) {
// //   if (str === str.split("").reverse().join("")) {
// //     console.log("Balanced");
// //     return;
// //   } else {
// //     const len = str.length;
// //     const middleIndex = Math.floor(len / 2);

// //     const [firstHalf, secondHalf] = [
// //       str.slice(0, middleIndex),
// //       str.slice(len % 2 === 0 ? middleIndex : middleIndex + 1),
// //     ];
// //     const mapAndAdd = (s) =>
// //       [...s].reduce((acc, char) => acc + char.charCodeAt(0) - 96, 0);

// //     console.log(mapAndAdd(firstHalf), mapAndAdd(secondHalf));
// //     const isBalanced = mapAndAdd(firstHalf) === mapAndAdd(secondHalf);
// //     console.log(isBalanced);
// //   }
// // }

// // balanceWords("zips");

// // // write a pollyfill for arr.length

// // function lengthArr(arr) {
// //   let length = 0;
// //   let i = 0;
// //   while (arr[i] !== undefined) {
// //     length++;
// //     i++;
// //   }
// //   console.log(length);
// // }
// // lengthArr([2, 3, 4, 5, 6,8]);

// // //did not want to break the streak so this format

// // Shuffled Properly?
// // Given an array of 10 numbers, return whether or not the array is shuffled sufficiently enough. In this case, if 3 or more numbers appear consecutively (ascending or descending), return false.

// // Examples
// // isShuffledWell([1, 2, 3, 5, 8, 6, 9, 10, 7, 4]) ➞ false
// // // 1, 2, 3 appear consecutively

// // isShuffledWell([3, 5, 1, 9, 8, 7, 6, 4, 2, 10]) ➞ false
// // // 9, 8, 7, 6 appear consecutively

// // isShuffledWell([1, 5, 3, 8, 10, 2, 7, 6, 4, 9]) ➞ true
// // // No consecutive numbers appear

// // isShuffledWell([1, 3, 5, 7, 9, 2, 4, 6, 8, 10]) ➞ true
// // // No consecutive numbers appear

// //Approach here is to check the differnce between the current num and the the next two consecutive num, ex 2,3,4 will result in 3-2 4-2 in 1 and 2 respectively

// // function isShuffledWell(arr) {
// //   let flag = true; // Start assuming it's well shuffled
// //   for (let i = 0; i < arr.length - 2; i++) {
// //     let curr = arr[i];
// //     const diffOne = arr[i + 1] - curr;
// //     if (diffOne !== 1) {
// //       continue;
// //     } else {
// //       const diffTwo = arr[i + 2] - curr;
// //       if (diffTwo === 2) {
// //         flag = false;
// //         break;
// //       }
// //     }
// //   }
// //   return flag;
// // }

// // function isShuffledWell(arr) {
// //   for (let i = 0; i < arr.length - 2; i++) {
// //     if (arr[i + 1] === arr[i] + 1 && arr[i + 2] === arr[i] + 2) {// 2===1+1 && 3===1+2
// //       return false; // Not well shuffled
// //     }
// //   }
// //   return true; // Well shuffled
// // }

// // console.log(isShuffledWell([1, 2, 7, 4, 5, 6, 0])); // true
// // console.log(isShuffledWell([1, 2, 3, 5, 6, 0]));    // false

// // console.log(isShuffledWell([1, 2, 7, 4, 5, 6, 0]));

// //Interview Prerp Series

// // Question 1: Remove Duplicate Characters from a String
// // Write a JavaScript function that removes all duplicate characters from a given string.
// // Example Input: "priya riya supriya"
// // Expected Output: A string with only the first occurrence of each character.

// // Question 2: Remove Duplicates from an Array and Count Unique Elements
// // Using the Set object in JavaScript, write a script to:

// // Remove duplicate elements from the given array.

// // Count the number of unique elements.
// // Example Input:
// // [55, 44, 55, 67, 67, 67, 67, 8, 8, 8, 8, 8, 65, 1, 2, 3, 3, 34, 5]
// // Expected Output: An array with unique elements and the total count.

// // function removeDuplicate(str) {
// //   const splitArr = str.split("");
// //   const setArr = [...new Set(splitArr)].join("");
// //   console.log(setArr);
// // }

// // removeDuplicate("priya riya supriya");

// // function removeDuplicate(str) {
// //   let finalArr = [];
// //   const splitArr = str.split("");
// //   splitArr.filter((char) => {
// //     !finalArr.includes(char) ? finalArr.push(char) : "";
// //   });
// //   console.log(finalArr.join(''));
// // }
// // removeDuplicate("priya riya supriya");

// // function removeDuplicatedArr(arr) {
// //   // const finalArr = [...new Set(arr)].length;
// //   const finalArr = new Set(arr).size;

// //   console.log(finalArr);
// // }
// // removeDuplicatedArr([
// //   55, 44, 55, 67, 67, 67, 67, 8, 8, 8, 8, 8, 65, 1, 2, 3, 3, 34, 5,
// // ]);

// //mental modelling callbacks

// // function greetUser(name, cb) {
// //   console.log(`Hey ${name}`, cb());
// // }
// // function Bye() {
// //   return "Goodbye";
// // }
// // console.log(greetUser("Mayank", Bye));

// // const a = 90;
// // function getData1(cb) {
// //   let i = 0;
// //   while (i < 1000000000) {
// //     i++;
// //   }
// //   let b = 1;
// //   cb(b);
// // }
// // getData1(add);

// // function add(num) {
// //   const res = num + a;
// //   console.log(res);
// // }
// // const a2 = 90;
// // function getData2() {
// //   let i = 0;

// //   while (i < 1_00_00_00_000) {
// //     i++;
// //   }
// //   let b = 1;
// //   return b;
// // }
// // getData2();
// // let res = a2 + getData2();
// // console.log(res);

// //
// function toUppercaseFirstChar(str) {
//   const splitArr = str.split(" ");
//   const finalArr = splitArr
//     .map(
//       (char) => char[0].toUpperCase() + char.slice(1, char.length + 1) + "\n"
//     )
//     .join("");
//   console.log(finalArr);
// }
// toUppercaseFirstChar("my name is mayank");

// //Write a function to shuffle an array.

// // function shuffleArr(arr) {
// //   let randomIndex;
// //   let i = 0;
// //   let shuffledIndex = [];
// //   let finalShuffledArr = [];
// //   const currentSeq = [...new Array(arr.length).fill(0).map((_, i) => i)];
// //   while (shuffledIndex.length < arr.length) {
// //     randomIndex = Math.floor(Math.random() * arr.length);
// //     if (randomIndex !== currentSeq[i]) {
// //       if (!shuffledIndex.includes(randomIndex)) {
// //         shuffledIndex.push(randomIndex);
// //         finalShuffledArr.push(arr[randomIndex]);
// //       }
// //       i++;
// //     }
// //   }
// //   console.log(shuffledIndex);
// //   console.log(finalShuffledArr);
// // }

// // function shuffleArr(arr) {
// //   let randomIndex;
// //   let i = 0;
// //   let shuffledIndex = [];
// //   let finalShuffledArr = [];
// //   const currentSeq = [...new Array(arr.length).fill(0).map((_, i) => i)];
// //   while (shuffledIndex.length < arr.length) {
// //     randomIndex = Math.floor(Math.random() * arr.length);
// //     if (randomIndex !== currentSeq[i] && !shuffledIndex.includes(randomIndex)) {
// //       shuffledIndex.push(randomIndex);
// //       finalShuffledArr.push(arr[randomIndex]);
// //       i++;
// //     }
// //   }
// //   console.log(finalShuffledArr);
// // }

// // shuffleArr(["car", "bike", "train", "plane", "scooter", "boat", "ship"]);

// //Shift zeros to the right of an array and return its count

// // function shiftZeros(arr) {
// //   let count = 0;
// //   //Early return
// //   if (!arr.includes(0)) {
// //     console.log(count);
// //     return;
// //   }
// //   if ([...new Set(arr)].length === 1) {
// //     count = arr.length;
// //     console.log(count);
// //     return;
// //   }
// //   const sortedArr = [...arr].sort((a, b) => b - a);
// //   for (let i = sortedArr.length - 1; i >= 0; i--) {
// //     if (sortedArr[i] !== 0) break;
// //     count++;
// //   }
// //   console.log(count);
// // }
// // // keep original seq and remove duplicates
// // function shiftZeros(arr) {
// //   let count = 0;
// //   //Early return
// //   if (!arr.includes(0)) {
// //     console.log(count);
// //     return;
// //   }
// //   if ([...new Set(arr)].length === 1) {
// //     count = arr.length;
// //     console.log(count);
// //     return;
// //   }
// //   const filterdArr = [...arr].filter((a) => a !== 0);
// //   count = arr.length - filterdArr.length;
// //   const finalArr = [...new Set(filterdArr), ...new Array(count).fill(0)];
// //   console.log(finalArr);
// // }

// // shiftZeros([4, 3, 6, 4, 2, 0, 0, 3, 5, 0, 3, 0]);
// // shiftZeros([4, 3, 6, 4, 2, 0]);
// // shiftZeros([0, 0]);

// // // Async Programming

// // const p1 = new Promise(function (resolve, reject) {
// //   setTimeout(function () {
// //     console.log("Promise Consumed");
// //     // resolve("Passed");
// //     reject("Failed");
// //   }, 3000);
// // });
// // console.log(p1);

// // p1.then(function (data) {
// //   console.log(data);
// // }).catch(function (data) {
// //   console.error(data);
// // });

// (function () {
//   function loadImage(src) {
//     return new Promise((resolve, reject) => {
//       const img = new Image();
//       console.log(img);
//       img.onload = () => resolve(img);
//       img.onerror = reject;
//       img.src = src;
//     });
//   }

//   const src = "https://picsum.photos/200/300";

//   for (let i = 0; i < 3; i++) {
//     loadImage(src).then((img) => {
//       document.getElementById("without-cache").appendChild(img);
//     });
//   }
// })();

// (function(){const imageCache = {};

// function loadImage(src) {
//   if (!imageCache[src]) {
//     imageCache[src] = new Promise((resolve, reject) => {
//       const img = new Image();
//       img.onload = () => resolve(img);
//       img.onerror = reject;
//       img.src = src;
//     });
//   }
//   return imageCache[src];
// }

// const src = "https://picsum.photos/200/300";

// for (let i = 0; i < 3; i++) {
//   loadImage(src).then((img) => {
//     // Clone so we can append 3 copies
//     const clone = img.cloneNode();
//     document.getElementById("with-cache").appendChild(clone);
//   });
// }
// })()

// flatten nested array

// function flattenArray(arr) {
//   const arrStr = [...String(arr).split(",")].map((a) => +a);
//   console.log(arrStr);
// }
// function flattenArray(arr) {
//   console.log(arr.flat(Infinity));
// }
// flattenArray([2, 3, 5,[true,false], [[2, [3], 3, 47, 6, [[3, [3]]]]]]);

// Implement a basic string compression algorithm. For
// example, the string "aaabbbcc" should be compressed to
// "a3b3c2".
//aabbccaa
function compressStr(str) {
  const strArr = str.split("");
  let finalStr = "";
  let currItem = strArr[0];
  let count = 1;

  for (let i = 1; i < strArr.length; i++) {
    if (strArr[i] === currItem) {
      count++;
    } else {
      finalStr += currItem + count;
      currItem = strArr[i];
      count = 1;
    }
  }

  // Append the last group
  finalStr += currItem + count;

  console.log(finalStr);
}

compressStr("aabbccd"); // Output: a2b2c2d1

let x = 1;
let y = x++;
function someFunction(a) {
  return a;
}
someFunction(y);
console.log(y);
//

// function validRondo(str) {
//   let isRondo = false;
//   const len = str.length;
//   if (len >= 3 && len % 2 === 1 && str[len - 1] === "A" && str[0] === "A") {
//     const splitArr = str.split("");
//     const startElem = 65;
//     for (let i = 1; i <= len; i++) {
//       const isOdd = i % 2 === 1;
//       if (
//         splitArr[i - 1].charCodeAt(0) !==
//         (!isOdd ? startElem + i - 1 : startElem)
//       ) {
//         return (isRondo = true);
//       }
//     }
//   }
//   return isRondo;
// }
function validRondo(str) {
  let isRondo = true;
  const len = str.length;
  let isOdd;
  let j = 0;

  if (len >= 3 && len % 2 === 1 && str[0] === "A" && str[len - 1] === "A") {
    const splitArr = str.split("");
    const startElem = 65;

    for (let i = 1; i < len; i++) {
      isOdd = i % 2 === 1;
      !isOdd ? j++ : j;

      const expectedCharCode = !isOdd ? startElem + j : startElem;
      const actualCharCode = splitArr[i - 1].charCodeAt(0); // ✅ fixed here
      if (actualCharCode !== expectedCharCode) {
        isRondo = false;
        break;
      }
    }
  } else {
    isRondo = false;
  }

  return isRondo;
}

const isValid = validRondo("ABACADA");
console.log(isValid); // ✅ true

//Reverse an array without using inbuilt fn and without creating a new arr

// const arrE = [1, 2, 3, 4, 5, 6]; // even num arr
// const arrO = [1, 2, 3, 4, 5]; //odd num arr

// function reverseArr(arr) {
//   const loopLen = Math.floor(arr.length / 2);
//   const len = arr.length;
//   console.log(loopLen);
//   for (let i = 0; i <= loopLen; i++) {
//     let temp;
//     temp = arr[i];
//     arr[i] = arr[len - i - 1];
//     arr[len - i - 1] = temp;
//   }
//   return arr;
// }
// console.log(reverseArr(arrO));
// console.log(reverseArr(arrE));

// // function clbk(value){
// //   console.log(value);
// // }
// const a=[1,2].map(function clbk(value){
//   console.log(value);
//   return value
// })
// console.log(a);

// remove repeated elems from an arr

const arrE = [1, 2, 2, 3, 2, 2, 2, 3, 3, 4, 5, 6, 6, 4, 5, 6, 7, 9]; // even num arr
// function showRepeated(arr) {
//   const arrObj = {};
//   const repeatedElems = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (!arrObj[arr[i]]) {
//       arrObj[arr[i]] = 1;
//     } else if (arrObj[arr[i]]) {
//       arrObj[arr[i]] = arrObj[arr[i]] + 1;
//       arrObj[arr[i]] === 2 ? repeatedElems.push(arr[i]) : "";
//     }
//   }
//   console.log(repeatedElems);
// }
function showRepeated(arr) {
  let repeatedElems = [];
  const sortedArr = [...arr].sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    sortedArr[i] === sortedArr[i + 1] && !repeatedElems.includes(sortedArr[i])
      ? repeatedElems.push(sortedArr[i])
      : "";
  }
  console.log(repeatedElems);
}
showRepeated(arrE);

// Add spaces to a camelCased sentence

function addSpace(str) {
  const splitStr = str.split("");
  let sentenceWithSpaces = "";
  for (let i = 1; i < str.length; i++) {
    const uppercased = splitStr[i].toUpperCase();
    if (splitStr[i] === uppercased) {
      sentenceWithSpaces += " " + splitStr[i];
      continue;
    }
    sentenceWithSpaces += splitStr[i];
  }
  sentenceWithSpaces = splitStr[0] + sentenceWithSpaces;
  console.log(sentenceWithSpaces);
}
const initialSentence = "MyNameIsMayank";
addSpace(initialSentence);

// write a fn to give anagram

// const sampleArr = ["eat", "tea", "tan", "ate", "nat", "bat"];
// function anaGram(arr) {
//   function sumAl(word) {
//     return word.split("").reduce((acc, curr) => {
//       return curr.charCodeAt(0) + acc;
//     }, 0);
//   }
//   const finalArr=[]
//   const finalObj = {};
//   for (let i = 0; i < arr.length; i++) {
//     finalObj[arr[i]] = sumAl(arr[i]);
//   }
//   const finalObjSort = Object.entries(finalObj).sort((a, b) => a[1] - b[1]);

//     for (let i = 0; i < arr.length; i++) {
//       finalArr.flat(Infinity).includes(finalObjSort[i][0])
//       finalArr.push(finalObjSort[i][0])
//     }
// }
// anaGram(sampleArr);

// const sampleArr = ["eat", "tea", "tan", "ate", "nat", "bat"];

// function groupAnagrams(arr) {
//   const map = {};

//   for (let word of arr) {
//     // Sort the word's letters to form a key
//     const sorted = word.split("").sort().join("");
//     // Group by the sorted key
//     if (!map[sorted]) {
//       map[sorted] = [];
//     }
//     map[sorted].push(word);
//   }

//   // Return the grouped anagrams
//   return Object.values(map);
// }

// console.log(groupAnagrams(sampleArr));
// const a = undefined;
// if (a ?? a * 2) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// // const user = {};

// // const userName=user?.name??"Guest";
// // console.log(userName);

// const user = {
//   name: "mayank",
//   city: "Haldwani",
// };
// const cityAndUser = user?.name + user?.city + user?.age;

// console.log(cityAndUser);

const inputStr = "JavaScript is everyting";
// function reverseOrder(str) {
//   let finalStr = "";
//   let word = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     if (str[i] !== " ") {
//       word = str[i] + word;
//     } else {
//       finalStr += word + " ";
//       word = "";
//     }
//   }
//   finalStr = finalStr + word;
//   console.log(finalStr);
// }
// reverseOrder(inputStr);

// function factory(c) {
//   return function inc() {
//     console.dir(inc);
//     console.log((c += 1));
//   };
// }
// const increment = factory(29);
// increment();
// increment();

// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 100);
// }

// let triangleType = function (nums) {
//   if (!nums.length >= 3) return;
//   if (!(nums[0] + nums[1] > nums[2] && nums[1] + nums[2] > nums[0]))
//     return "none";

//   const type =
//     nums[0] === nums[1] && nums[1] === n[2]
//       ? "equilateral"
//       : nums[0] === nums[1] || nums[1] === nums[2]
//       ? "isoceles"
//       : "equlateral";

//   return type;
// };//Here a better solution is to sort the arr and see if side 0 and side1 are > side 2
// for isocles side 0 = side 1 side 1 = side 2
//for equi side 0 = side 1 = side 2
//else scalene

let triangleType = function (nums) {
  if (!nums.length >= 3) return;
  nums = nums.sort((a, b) => a - b);
  if (nums[0] + nums[1] < nums[2]) return "none";
  if (nums[0] === nums[1] && nums[1] === nums[2] && nums[0] === nums[2])
    return "equilateral";
  const type =
    nums[0] === nums[1] || nums[1] === nums[2] ? "isoceles" : "scalene";
};
//over-riding and preferencing

function greet() {
  console.log("function greet");
}

var greet = 1;
console.log(typeof greet); // num ✅

// const valueMap = {
//   I: 1,
//   II: 2,
//   III: 3,
//   IV: 4,
//   V: 5,
//   X: 10,
//   L: 50,
//   C: 100,
//   D: 500,
//   M: 1000,
// };

// var romanToInt = function (s) {
//   let sum = 0;
//   const splitArr = s.split("");
//   console.log(splitArr);
//   for (let i = 0; i < splitArr.length; i++) {
//     let current = valueMap[splitArr[i]];
//     let next = valueMap[splitArr[i + 1]];
//     let isGreater = next && current < next;
//     if (next && isGreater) {
//       sum -= current;
//     } else {
//       sum += current;
//     }
//   }
//   return sum;
// };
// var romanToInt = function (s) {
//   const valueMap = {
//     I: 1,
//     II: 2,
//     III: 3,
//     IV: 4,
//     V: 5,
//     VI: 6,
//     VII: 7,
//     VIII: 8,
//     IX: 9,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//   };
//   let sum = 0;
//   const splitArr = s.split("");
//   console.log(splitArr);
//   for (let i = 0; i < splitArr.length; i++) {
//     let isGreater =
//       valueMap[splitArr[i + 1]] &&
//       valueMap[splitArr[i]] > valueMap[splitArr[i + 1]];
//     console.log(isGreater);
//     if ((splitArr[i + 1] && isGreater) || !splitArr[i + 1]) {
//       sum += valueMap[splitArr[i]];
//     } else {
//       sum -= valueMap[splitArr[i]];
//     }
//   }
//   return sum;
// };
// console.log(romanToInt("XIX"));

// const valueMap = {
//   I: 1,
//   II: 2,
//   III: 3,
//   IV: 4,
//   V: 5,
//   X: 10,
//   L: 50,
//   C: 100,
//   D: 500,
//   M: 1000,
// };

// var romanToInt = function (s) {
//   let sum = 0;
//   for (let i = 0; i < s.length; i++) {
//     let current = valueMap[s[i]];
//     let next = valueMap[s[i + 1]];
//     let isGreater = next && current < next;
//     if (next && isGreater) {
//       sum -= current;
//     } else {
//       sum += current;
//     }
//   }
//   return sum;
// }; //final optimized

// var longestCommonPrefix = function (strs) {
//   let len = strs.length;
//   strs = strs.map((str) => str.split("")).sort((a, b) => a.length - b.length);
//   let ans = strs[0];

//   for (let i = 0; i < len; i++) {
//     if (!strs[i + 1]) break; // if the next item doesn't exist, break
//     ans = ans.filter((char) => strs[i + 1].includes(char));
//   }
//   return ans.join("");
//   // console.log(ans.join("")); // join to show the actual prefix
// };

// longestCommonPrefix(["flow", "flower", "flight"]);

// function isBalancedArray(arr) {
//   if (arr.length === 0) return true;
//   let isBalanced = true;

//   const loopLen = arr.length / 2;
//   arr = arr.sort((a, b) => a - b);
//   for (let i = 0, j = arr.length - 1; i < loopLen; i++) {
//     if ((i === j && arr[i] !== 0) || -arr[i] !== arr[j - i]) {
//       return (isBalanced = false);
//     }
//   }
//   return isBalanced;
// }
// console.log(isBalancedArray([1, -1, 2, -2])); // true
// console.log(isBalancedArray([1, -1, 2, -2, 1, -1])); // true
// console.log(isBalancedArray([1, -1, 2, -2, 1, 1])); // false
// console.log(isBalancedArray([0, 0, 1, -1])); // true
// console.log(isBalancedArray([0, 1, -1, 1])); // false
// console.log(isBalancedArray([])); // true
// console.log(isBalancedArray([3, -3, 3, -3, 3, -3])); // true
// console.log(isBalancedArray([4, -4, 4, -4, 4])); // false
// console.log(isBalancedArray([5, -5, -5, 5, 0, 0, 0])); // true
// console.log(isBalancedArray([10, -10, 10, -10, 10])); // false
// console.log(isBalancedArray([1, 1, -1, 2, -2, -1])); // ❌ Expected: false
// console.log(isBalancedArray([2, 2, 2, -2, -2])); // ❌ Expected: false

// var isValidParenthesis = function (str) {
//   const finalArr = [];
//   const pairs = {
//     ")": "(",
//     "]": "[",
//     "}": "{",
//   };

//   for (let char of str) {
//     if (char === "(" || char === "[" || char === "{") {
//       finalArr.push(char);
//     } else if (char === ")" || char === "]" || char === "}") {
//       if (finalArr.pop() !== pairs[char]) {
//         return false;
//       }
//     }
//   }

//   return finalArr.length === 0;
// };

// console.log(isValidParenthesis("[]{}")); // true
// console.log(isValidParenthesis("[{()}]")); // true
// console.log(isValidParenthesis("[({})]")); // true
// console.log(isValidParenthesis("[(])")); // false
// console.log(isValidParenthesis("[")); // false

// var mergeTwoLists = function (list1, list2) {
//   const mergedArr = [...list1, ...list2].sort((a, b) => a - b);
//   return mergedArr;
// };

// console.log(mergeTwoLists([1, 2, 3], [3, 4, 5]));

// let removeDuplicates = function (nums) {
//   const loopLen = nums.length;
//   const tracker = [nums[0]];
//   const fTracker = [...new Set(nums)];
//   console.log(fTracker);
//   for (let i = 1; i < loopLen; i++) {
//     if (fTracker[i]!==undefined&& tracker.includes(nums[i])) {
//       nums[i] = fTracker[i];
//     }
//     tracker.push(fTracker[i]);
//   }
//   console.log(nums, fTracker.length);
//   return fTracker.length;
// };
var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;

  let writeIndex = 1; // Start from index 1 because the first element is always unique

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[writeIndex] = nums[i];
      writeIndex++;
    }
  }
  console.log(nums);
  return writeIndex;
};

// removeDuplicates([1, 2, 1, 3, 4, 3, 3, 2, 8, 9]);
removeDuplicates([0, 0, 0, 1, 1, 2, 2, 3, 3, 4]);
// removeDuplicates([1, 2]);
// removeDuplicates([1, 2, 2, 3]);
// removeDuplicates([-3, -1, -1, 0, 0, 0, 0, 0, 2]);

// 27. Remove Element-LC
// let removeElement = function (nums, val) {
//   let writeIndex = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== val) {
//       nums[writeIndex] = nums[i];
//       writeIndex++;
//     }
//   }
//   return nums;
// };
// console.log(removeElement([3, 2, 2, 3], 3));
// console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));

// // with 2 arguments
// function sum2(a){
//  return function(b){
//    return a + b;
//  }
// }

// // with 3 arguments
// function sum3(a){
//  return function(b){
//    return function(c){
//      return a + b + c;
//    }
//  }
// }

// // notice the pattern here ? At every level,
// // If there is another argument left, we return a new function
// // else we execute the logic. Recursive thinking is required for // these pattern of problems.

// //with n-arguments
// function sum(a) {
//   return function(b){
//     if(b){
//       return sum(a+b);
//     }
//     return a;
//   }
// }

//28. Find the Index of the First Occurrence in a String -LC

// let strStr = function (haystack, needle) {
//   if (haystack === needle) return 0;

//   let nIndex = 0;
//   for (let i = 0; i < haystack.length; i++) {
//     if (haystack[i] !== needle[nIndex]) {
//       i=i-nIndex
//       nIndex = 0;
//     } else if (haystack[i] === needle[nIndex]) {
//       nIndex++;
//     }
//     if (nIndex >= needle.length) {
//       return i - nIndex + 1;
//     }
//   }
//   return -1;
// };
// let strStr = function (haystack, needle) {
//   if (haystack === needle) return 0;
//   if (needle === "") return 0;

//   let nIndex = 0;
//   for (let i = 0; i < haystack.length; i++) {
//     if (haystack[i] === needle[nIndex]) {
//       nIndex++;
//       if (nIndex === needle.length) {
//         return i - nIndex + 1;
//       }
//     } else {
//       // Reset i to the position after the start of the last match attempt
//       i = i - nIndex;
//       nIndex = 0;
//     }
//   }
//   return -1;
// };

// console.log(strStr("sadbutsad", "sad"));
// console.log(strStr("leetcode", "leeto"));
// console.log(strStr("abc", "c"));
// console.log(strStr("mississippi", "issip"));

// var searchInsert = function (nums, target) {
//   if (nums.length === 1 && nums[0] === target) return 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (i === nums.length - 1 && nums[i] < target) {
//       return i + 1;
//     }
//     if (nums[i] >= target) return i;
//   }
// };

// console.log(searchInsert([1, 2, 3, 4, 6], 7));
// console.log(searchInsert([1, 3, 5, 6], 5));
// console.log([1, 3], 3);

// var lengthOfLastWord = function (s) {
//   if (s.length === 0) return 0;
//   if (s.length === 1 && s[0] !== " ") return 1;
//   let count = 0;

//   for (let i = s.length - 1; i >= 0; i--) {
//     if (s[i] !== " ") count++;
//     else if (count >= 1) {
//       break;
//     }
//   }
//   return count;
// };

// console.log(lengthOfLastWord("   fly me   to   the moon  "));
// console.log(lengthOfLastWord("Hello World"));
// console.log(lengthOfLastWord("a "));

//EC in JS
// function grandParent() {
//   function parent() {
//     let x = 9;
//     function child() {}
//     function sibling() {
//       x = x + 1;
//     }
//     child();
//     // sibling();
//     console.log(x);
//   }
//   parent();
// }
// grandParent();
// var a = 10;
// (function () {
//   console.log(a);
//    var a = 20;
// })();

// var plusOne = function (digits) {
// // const joinedArr = String(BigInt(+digits.join("") + 1))
// //     .split("")
// //     .map((a) => +a);
// const joinedArr= BigInt(Number(digits.join('')))+BigInt(1)
// // const joinedArr= +digits.join('')

//   return joinedArr;
// };

// console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));
// var plusOne = function (digits) {
//   let res = [];
//   let carry = 0;
//   let left = 0;
//   const lastElem = digits.length - 1;
//   for (let i = lastElem; i >= 0; i--) {
//     let added = i === lastElem ? digits[i] + 1 + carry : digits[i] + carry;
//     if (added >= 10) {
//       carry = 1;
//       left = added - 10;
//     } else {
//       left = added + carry;
//       carry = 0;

//     }
//     res[i] = left;
//   }
//   if (carry === 1) {
//     res.unshift(1);
//   }

//   return res;
// };

// // console.log(plusOne([9]));
// var plusOne = function (digits) {
//   let res = [...digits];
//   let carry = 1; // Always start with 1 since we're adding one

//   for (let i = res.length - 1; i >= 0; i--) {
//     let sum = res[i] + carry;
//     if (sum >= 10) {
//       res[i] = sum - 10;
//     } else {
//       res[i] = sum;
//       carry = 0;
//       break; // No more carry, break early
//     }
//   }

//   if (carry === 1) {
//     res.unshift(1);
//   }

//   return res;
// };
// console.log(plusOne([9]));

var addBinary = function (a, b) {
  if (a === "0" && b === "0") {
    return "0";
  }

  const maxLen = Math.max(a.length, b.length);
  a = a.padStart(maxLen, "0");
  b = b.padStart(maxLen, "0");

  let res = [];
  let carry = 0;

  for (let i = maxLen - 1; i >= 0; i--) {
    const total = Number(a[i]) + Number(b[i]) + carry;
    res[i] = total % 2;
    carry = total >= 2 ? 1 : 0;
  }

  if (carry === 1) res.unshift(carry);

  return res.join("");
};

console.log(addBinary("0111", "0011"));
