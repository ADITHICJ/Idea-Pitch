import React from "react";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./mainSection.css";

function MainSection() {
  return (
    <div className="main-section">
      {/* Primary Themes Section */}
      <div className="primary-themes">
        <h2>Primary Themes</h2>
        <ul>
          <li>
            <TaskAltIcon sx={{ color: "red" }} /> Tourism
          </li>
          <li>
            <TaskAltIcon sx={{ color: "red" }} /> Healthcare
          </li>
          <li>
            <TaskAltIcon sx={{ color: "red" }} /> Food and Agri Tech
          </li>
          <li>
            <TaskAltIcon sx={{ color: "red" }} /> Education
          </li>
          <li>
            <TaskAltIcon sx={{ color: "red" }} /> Sustainable Cities
          </li>
        </ul>
      </div>

      {/* Registration Date Section */}
      <h2>LAST DATE FOR IDEA SUBMISSION</h2>
      <h3>30th November 2024</h3>
      <div className="venue">
        <p>
          <LocationOnIcon sx={{ color: "#1e035e", marginRight: "5px" }} />
          Venue: CMS Amphitheatre
        </p>
        <p>
          <CalendarTodayIcon sx={{ color: "#1e035e", marginRight: "5px" }} />
          Date: 3rd December
        </p>
        <p>
          <AccessTimeIcon sx={{ color: "#1e035e", marginRight: "5px" }} />
          Time: 3:30 PM
        </p>
      </div>
    </div>
  );
}

export default MainSection;
