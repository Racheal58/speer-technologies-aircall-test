import React, { useState } from "react";
import CallCard from "./CallCard/CallCard.jsx";

const Activity = ({ activities }) => {
  const checkObj = {
    button: {
      show: true,
    },
    text: {
      show: false,
    },
  };
  // let archiveCall = () => {
  //   const requestData = {
  //     is_archived: !isArchived,
  //   };

  //   fetch(`https://cerulean-marlin-wig.cyclic.app/activities/${id}`, {
  //     headers: { "Content-type": "application/json; charset=UTF-8" },
  //     method: "PATCH",
  //     body: JSON.stringify(requestData),
  //   });
  // };
  console.log("---", activities);
  return (
    <div>
      {checkObj.button === true && <CallCard check={checkObj} />}
      {/* <button onClick={() => archiveCall()}>Archive calls</button> */}
      {activities &&
        activities.map((call) => (
          <CallCard
            key={call.id}
            from={call.from}
            via={call.via}
          />
        ))}
    </div>
  );
};

export default Activity;
