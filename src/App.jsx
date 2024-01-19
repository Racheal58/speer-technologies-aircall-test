import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import Header from "./Header.jsx";
import Activity from "./components/Activity.jsx";
import CallCard from "./components/CallCard/CallCard.jsx";

//10:08pm to 1:14am 8th to 9th
//5:05pm - 5:20pm 10th

const App = () => {
  const [activities, setActivities] = useState([]);

  const fetchData = async () => {
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
    await fetch("https://cerulean-marlin-wig.cyclic.app/activities")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        setActivities(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const archiveAllCall = () =>
    activities.filter((item) => {
      console.log("ids", item);

      const requestData = {
        is_archived: item.is_archived === true ? false : true,
      };

      console.log("requestData", requestData);

      fetch(`https://cerulean-marlin-wig.cyclic.app/activities/${item.id}`, {
        headers: { "Content-type": "application/json; charset=UTF-8" },
        method: "PATCH",
        body: JSON.stringify(requestData),
      });
    });

  return (
    <div className="container">
      <Header />
      {/* <div className="container-view">Some activities should be here</div> */}
      {/* <button onClick={() => archiveAllCall()}>Archive calls</button> Callcard */}
      {/* <CallCard type={"button"} /> */}
      <Activity activities={activities} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
