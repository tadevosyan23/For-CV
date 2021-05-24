import React from "react";
import ContactItem from "../Components/ContactItem";
import phone from "../img/phone.svg";
import email from "../img/emailme.svg";
import location from "../img/location.svg";
import Tittle from "../Components/Tittle";

function ContactPage() {
    return (
        <div>
            <div className="title">
                <Tittle title={"Contacts"} span={"<Contacts />"} />
            </div>
            <div className="ContactPage">
                <div className="map-sect">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48705.43943902809!2d44.59064063760487!3d40.27375170858388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406aa1c3ec9f2329%3A0x5cee9f0e0c28a3b5!2z0JDQsdC-0LLRj9C9LCDQkNGA0LzQtdC90LjRjw!5e0!3m2!1sru!2s!4v1621880675705!5m2!1sru!2s"
                        width="600"
                        height="450"
                        frameBorder="0"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        aria-hidden="false"
                        tabIndex="0"
                    ></iframe>
                </div>
                <div className="contact-sect">
                    <ContactItem
                        icon={phone}
                        text1={"+374 77581147"}
                        title={"Phone"}
                    />
                    <ContactItem
                        icon={email}
                        text1={"raz.tadevosyan1999@gmail.com"}
                        text2={"tadevosyan99@ghotmail.com"}
                        title={"Email"}
                    />
                    <ContactItem
                        icon={location}
                        text1={"Kotayq, Abovyan"}
                        text2={"Armenia"}
                        title={"Address"}
                    />
                </div>
            </div>
        </div>
    );
}

export default ContactPage;
