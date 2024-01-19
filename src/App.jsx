import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import Header from "./Header.jsx";

const App = () => {
  const [activities, setActivities] = useState([]);

  const fetchData = () => {
    // try {
    //   const res = await fetch(
    //     "https://cerulean-marlin-wig.cyclic.app/activities"
    //   );
    //   const data = res.json();
    //   setActivities(data);
    //   console.log("==>", data);
    // } catch (error) {
    //   console.error(error);
    // }
    fetch("https://cerulean-marlin-wig.cyclic.app/activities")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setActivities(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  let archiveCall = () => {
    fetch(
      "https://cerulean-marlin-wig.cyclic.app/activities/63974a811f096c984321fe0b",
      {
        headers: { "Content-type": "application/json; charset=UTF-8" },
        method: "PATCH",
        body: JSON.stringify({
          is_archived: true,
        }),
      }
    );
  };

  return (
    <div className="container">
      <Header />
      <div className="container-view">Some activities should be here</div>
      <button onClick={() => archiveCall()}>Archive calls</button> github
      pushing error
      {activities &&
        activities.map((call) => (
          <div key={call.id} className="call-box-container">
            <div className="call-from-container">
              <p>{call.from}</p>
              <p>tried to call on {call.via}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
