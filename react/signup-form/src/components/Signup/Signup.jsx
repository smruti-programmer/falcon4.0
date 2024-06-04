// rafce
import React, 
{ useState } from 'react';

const Signup = () => {

    const [name, setName] = useState("Smruti");
    console.log(name);
    const [age, setAge] = useState("29")
    console.log(age);
    const [gender, setGender] = useState("female")
    console.log(gender);
    const [nickname, setNickname] = useState("Manu")
    console.log(nickname);
    const [friend, setFriend] = useState("Priya")
    console.log(friend);
    const [city, setCity] = useState("Bbsr")
    console.log(city);
    const [state, setState] = useState("Odisha")
    console.log(state);
    const [country, setCountry] = useState("India")
    console.log(country);
    const [village, setVillage] = useState("Badalahanga")
    console.log(village);
    const [dist, setDist] = useState("Jagatsingpur")
    console.log(dist);
    const [college, setCollege] = useState("DDCE")
    console.log(college);
    const [university, setUniversity] = useState("Utkal")
    console.log(university);

  return (
    <div>
        <form>
        <label>Username:</label>
        <br/>
        <input type="text"placeholder='Add username' />
        <label>Useremail:</label>
        <br/>
        <input type="email"placeholder='Add useremail' />
        <label>Userpassword:</label>
        <br/>
        <input type="password"placeholder='Add userpassword' />
        <button>Sign Up</button>
        <br/>
        </form>
    </div>
  )
}

export default Signup