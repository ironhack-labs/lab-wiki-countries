// import { Link, useParams } from "react-router-dom"
import { useState } from "react";

const PhoneDetails = ({ phonesData }) => {



    const [phone, setPhones] = useState(phonesData);

    return (
        <div className="container">
            <div className="row">
                <h2>Phones</h2>

                <hr />
                {phone.map((phone) => {
                    return (
                        <>
                            <h3>{phone.description}</h3>
                        </>
                    );
                })}

            </div>
        </div >
    );
}



export default PhoneDetails