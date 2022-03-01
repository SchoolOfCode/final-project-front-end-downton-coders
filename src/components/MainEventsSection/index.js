import "./index.css";
import {Link} from "react-router-dom";

export default function MainEventsSection({indexLastEvent, indexFirstEvent, currentEvent, eventData}) {

const eventsToRender = eventData.slice(indexFirstEvent, indexLastEvent);
    return (
        <section id="mainEventsSection" className="mainEventsSection">
            {eventsToRender.map((event, index) => {
                return (
                    <section key={index} id={index}>
                    <Link to="/event" className="linkstyle">
                    <section className="tileContainer">
                        <div className="tile">
                        <img className="imgContainer" src={event.image} alt={event.title} />
                       
                        <p className="title">{event.title}</p>
                        <p className="countryTitle">
                                    {event.location}
                                </p>

                                <div className="ratingNDateContainer">
                                    <p className="tileDate">{event.date}</p>
                                </div>

                                <div className="paragraphContainer">
                                    <p className="paragraphDesc">
                                       {event.description}
                                    </p>
                                </div>
                                </div>
                    </section>
                    </Link>
                    </section>
                )
            })}
        </section>
    )
}