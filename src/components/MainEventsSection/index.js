import styles from "./mainEvent.module.css";
import {Link} from "react-router-dom";

export default function MainEventsSection({indexLastEvent, indexFirstEvent, eventsToRender, eventData}) {


    return (
        <section id="mainEventsSection" className={styles.mainEventsSection}>
       
            {eventsToRender.map((event, index) => {
                return (
                    <section key={index} id={index}>
                    <Link to="/event" className={styles.linkstyle}>
                    <section className={styles.tileContainer}>
                        <div className={styles.tile}>
                        <img className={styles.imgContainer} src={event.image} alt={event.title} />
                       
                        <p className={styles.title}>{event.title}</p>
                        <p className={styles.countryTitle}>
                                    {event.location}
                                </p>

                                <div className={styles.ratingNDateContainer}>
                                    <p className={styles.tileDate}>{event.date}</p>
                                </div>

                                <div className={styles.paragraphContainer}>
                                    <p className={styles.paragraphDesc}>
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