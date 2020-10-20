import React, { useState, useEffect } from "react";
import API from "../utils/vin";
import { Link } from "react-router-dom";


function Saved() {

  const [saved, setSaved] = useState([]);

  // get all the vins from the database and set them in the array 
  useEffect(() => {
    loadVins()
  }, [saved])

  function loadVins() {
    API.loadSavedVin()
      .then(res => {
        setSaved(res.data);
      })
      .catch(err => console.log(err))
  }

  function deleteVin(id) {
    API.deleteVin(id)
      .then(res => res)
      .catch(err => console.log(err));
  }

  return (
    <div>
      <h1>Saved VIN</h1>

      {saved.length ? (
        saved.map(vin => (
          <div size='sm-12' key={vin._id}>
            <div className="mb-4 border  p-3 rounded shadow ">
              <button onClick={() => deleteVin(vin._id)} />
              <link to={"/api/vin" + vin.id} />
              <strong className="m-4">
                VIN: {vin.vin}
              </strong>
              <p className="mt-3">
                MAKE: {vin.make}
              </p>
              <p className="mt-3" >
                MODEL: {vin.model}
              </p>
              <p className="mt-3" >
                MODEL YEAR: {vin.modelYear}
              </p>
              <p className="mt-3" >
                ENGINE MODEL: {vin.engineModel}
              </p>
              <p className="mt-3" >
                ENGINE HP: {vin.engineHp}
              </p>
              <p className="mt-3" >
                ENGINE CYCLINERS: {vin.engineCylinders}
              </p>
              <hr />
            </div>
          </div>
        ))) : (
          <h3>No Saved VIN to Display</h3>
        )};
    </div>
  );
}


export default Saved;