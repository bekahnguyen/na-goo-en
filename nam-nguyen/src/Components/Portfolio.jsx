import { Link } from "react-router-dom";
export default function Portfolio() {
  // have icon of phone so when click it is the contact. link to website and maybe reviews to trip advisor.
  return (
    <>
      <div id="flexbox">
        <img id="gretto" src="allegretto.JPG"></img>
        <div id="event-planner">
          <section id="paso-robles-planner">
            <h3 id="paso-manager"> Catering Sales Manager </h3>
            <span> at Allegretto Vineyard Resort</span>
          </section>
          <p id="paso-manager">
            <i>Responsibilites include:</i>
          </p>
          <ul>
            <li>
              Planning, organizing, and managing all details for Corporate,
              Social, and In-House groups or events.
            </li>
            <li>
              {" "}
              Ensuring maximization of revenue while delivering a quality
              product.{" "}
            </li>
            <li>
              Focusing on execution of all aspects of event planning, including
              coordination and construction of contracts, BEOs, Cost Estimates.
            </li>
            <li>
              {" "}
              Involvement in the local community, creating new or maintaining
              existing events that have a good ROI.{" "}
            </li>
            <li>
              Servicing and supporting the Sales and Catering operational
              aspects business booked.{" "}
            </li>

            <i>Key Achievements:</i>
            <li>
              Successfully coordinated a luxury super car rally with over (80)
              cars, a police escort, and private helicopter for a (120) person
              luncheon.{" "}
            </li>
            <li>
              Organized and coordinated the first helicopter landing at the
              resort{" "}
            </li>
            <li>Sold and serviced over (15) groups within one month</li>
          </ul>
        </div>
      </div>
    </>
  );
}
