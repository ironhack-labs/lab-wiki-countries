import { useState } from "react";
import { Link, useParams } from "react-router-dom"



function PhoneList({ phonesData }) {

    const [phone, setPhones] = useState(phonesData);

    const { id } = useParams()

    return (
        <div className="container">
            <div className="row">
                <h2>Phones</h2>

                <hr />
                {phone.map((phone) => {
                    return (
                        <>


                            <h3>{phone.name}</h3>
                            <Link to={`/phone/${id}`}>Phone details</Link>



                        </>
                    );
                })}

            </div>
        </div >
    );
}


export default PhoneList; 