import { users } from "./data.js";
function addUser(arr, name, lastname, age, job, email, password) {
  let newUser = {
    id: arr.length === 0 ? 1 : users.at(-1).id + 1,
    name,
    lastname,
    age,
    job,
    email,
    password,
  };
  arr.push(newUser);
  return newUser;
}

console.log(
  addUser(
    users,
    "john doe",
    "macgregor",
    34,
    "boxer",
    "johndoe@gmail.com",
    "1234",
  ),
);

console.log(users);
