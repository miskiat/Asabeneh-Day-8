//Exercises: Level 1
//1.Create an empty object called dog
//const dog = {};
//2.Print the the dog object on the console
//console.log(dog);
//3.Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
//4.Get name, legs, color, age and bark value from the dog object
const dog = {
  name: "Jac",
  legs: 4,
  color: "Brown",
  age: 2,
  bark: function () {
    return "woof woof";
  },
  getProperties: function () {
    return `${this.name} ${this.legs} 
    ${this.color} ${this.age} ${this.bark}`;
  },
};
console.log(dog.bark());
console.log(dog.getProperties());
//5.Set new properties the dog object: breed, getDogInfo
dog.breed = "German Shephard";
dog.getDogInfo = function () {
  return `${this.name} ${this.legs} 
    ${this.color} ${this.age} ${this.bark}`;
};
//Exercises: Level 2
//1.Find the person who has many skills in the users object.
const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};
const propertyName = Object.entries(users);
console.log(propertyName);
const usersSkillslength = propertyName.map((item) => [
  item[0],
  item[1].skills.length,
]);
console.log(usersSkillslength);
const highestSkilledUser = usersSkillslength.sort((a, b) => b[1] - a[1])[0];

console.log(highestSkilledUser);

//2.Count logged in users, count users having greater than equal to 50 points from the following object.
Object.keys(users);
console.log(Object.keys(users));

const onlineUsers = Object.keys(users).filter((user) => users[user].isLoggedIn);
console.log(onlineUsers);
console.log(onlineUsers.length);

//3.Find people who are MERN stack developer from the users object
//4.Set your name in the users object without modifying the original users object
users.Miskiat = {
  email: "miskiat@gmail.com",
};
console.log(users);

//5.Get all keys or properties of users object
const user = Object.keys(users);
console.log(user);

//6.Get all the values of users object
const use = Object.values(users);
console.log(use);

//7.Use the countries object to print a country name, capital, populations and languages.
const countries = {};
countries.France = {
  capital: "Paris",
  population: 2165423,
  language: "French",
};
countries.Nigeria = {
  capital: "Abuja",
  population: 1890658,
  language: "English",
};
console.log(countries);

//Exercises: Level 3
//1.Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
const personAccount = {
  firstName: "Misky",
  lastName: "Arif",
  incomes: [
    { amount: 50, desc: "Food" },
    { amount: 50, desc: "Food" },
    { amount: 50, desc: "Food" },
    { amount: 50, desc: "Food" },
    { amount: 50, desc: "Food" },
  ],
  expenses: [
    { amount: 50, desc: "Food" },
    { amount: 60, desc: "Food" },
    { amount: 70, desc: "Food" },
    { amount: 80, desc: "Food" },
    { amount: 50, desc: "Food" },
  ],
  totalIncome: function () {
    return this.incomes.reduce((ac, cv) => ac + cv.amount, 0);
  },
  totalExpense: function () {
    return this.expenses.reduce((ac, cv) => ac + cv.amount, 0);
  },
  accountInfo: () => console.log("heyyy"),
  addIncome: () => console.log("waguan"),
  addExpense: () => console.log("wassup"),
  accountBalance: () => console.log("sup"),
};
console.log(personAccount.totalIncome());
console.log(personAccount.totalExpense());
//2.Questions:2, 3 and 4 are based on the following two arrays:users and products ()
const newUsers = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];

const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];
// Imagine you are getting the above users collection from a MongoDB database. a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.

function signUp(info) {
  let newperson;
  newUsers.map((u) => {
    if (info.email == u.email) {
      console.log("user exist");
      return;
    } else {
      newperson = info;
    }
  });
  newUsers.push(newperson);
}
signUp({
  _id: "fg12cy",
  username: "Asab",
  email: "asuuub@asab.com",
  password: "123456",
  createdAt: "08/01/2020 9:30 AM",
  isLoggedIn: true,
});

console.log(newUsers);
// b. Create a function called signIn which allows user to sign in to the application

function signIn(info) {
  const user = newUsers.filter((u) => u.email == info.email);
  if (user.length > 0) {
    console.log("Welcome");
  } else {
    console.log("Go back");
  }
}
signIn({
  _id: "fg12cy",
  username: "Asab",
  email: "yyyy@asab.com",
  password: "123456",
  createdAt: "08/01/2020 9:30 AM",
  isLoggedIn: true,
});

// 3.The products array has three elements and each of them has six properties. a. Create a function called rateProduct which rates the product b. Create a function called averageRating which calculate the average rating of a product

// 4.Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.
