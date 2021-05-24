import React from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MenuItems({ menuItem }) {
    return (
        <div className="portfolis">
            {menuItem.map((item) => {
                return (
                    <div className="portfolio" key={item.id}>
                        <div className="image-data">
                            <img src={item.image} alt="" />
                            <ul className="hover-items">
                                <li>
                                    <div className="icons">
                                        <a
                                            href="https://github.com/tadevosyan23/For-CV"
                                            className="icon-holder"
                                            target="_blank"
                                        >
                                            <FontAwesomeIcon
                                                icon={faGithub}
                                                className="icon gh"
                                            />
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <h5>{item.title}</h5>
                        <p>Placeholder paragraph</p>
                    </div>
                );
            })}
        </div>
    );
}

export default MenuItems;
