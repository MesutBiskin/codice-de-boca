import { useState } from "react";

function SingleMenuComponent (props){
    console.log('props->', props)
    return (
        <>
        <h3>{props.title}</h3>
        <p>{props.description} </p>
      </>
    )
}

export default function Home() {
  const [menuItems, setMenuItems] = useState(["hot dog", "burger"]); // = [stateVar, setter]

  // 1.Fetch data
  // 2.get arrat of object
  // 3.remember each object
  // 3.1. create a state variable
  // 3.2. put inside state variable the array of objects
  // 3.3. display each item in dom
  // 3.3.1. map over the array of objects
  // 3.3.2. return each otem so that it displays on the browser
  console.log("menuItems ->", menuItems);

  const handleBtnClick = () => {
    console.log("hey class from a function");

    fetch("https://codice-boca.web.app/menu")
      .then((res) => res.json()) // First promise contacting the API
      .then((data) => setMenuItems(data)) // second Promise clean up data and give something
      .catch((err) => console.error(err));
  };

  return (
    <div>
        <SingleMenuComponent />
      <h2>I'm Home Component</h2>
      <button onClick={() => handleBtnClick()}> get data</button>
      {menuItems && menuItems.map((singleItem) => {
          console.log("singleItem ->", singleItem);
          return (
            <div>
                <SingleMenuComponent title={singleItem.title} description={singleItem.description} />

            { /* <h2> {singleItem.title}</h2>
              <p>{singleItem.description}</p> */ }

            </div>
          );
        })}
    </div>
  );
}
