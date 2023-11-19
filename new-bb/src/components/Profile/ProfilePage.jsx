import * as React from "react";
import PersonalData from "./PersonalData";
import Statistics from "./Statistics";
import SomeNavigations from "./SomeNavigations";

export default function ProfilePage() {
  return (
    <div style={{ width: "100%", display: "flex" }}>
      <div>
        <PersonalData />
      </div>
      <div style={{width:"20vw"}}>
        <Statistics />
      </div>
      <div sx={{ backgroundColor: "GrayText" }}>
        <SomeNavigations />
      </div>
    </div>
  );
}
