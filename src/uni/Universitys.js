import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import universitys from "./../universitys.json";
import { useState } from "react";

function Universitys() {
  const [countryid, setCountryid] = useState("");
  const [uni, setUni] = useState([]);
  const [uniid, setUniid] = useState("");

  const handlecounty = (e) => {
    const getcountryId = e.target.value;
    const getUnidata = universitys.find(
      (country) => country.id === getcountryId
    ).states;
    setUni(getUnidata);
    setCountryid(getcountryId);
    //console.log(getcountryId);
  };

  const handlestate = (e) => {
    const uniid = e.target.value;
    //console.log(stateid);
    setUniid(uniid);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Get Country id" + countryid + " And " + uniid);
  };

  return (
    <div>
      <div>
        <FormControl
          required
          sx={{ m: 1, minWidth: 200 }}
          onSubmit={handleSubmit}
        >
          <InputLabel id="demo-simple-select-required-label">Şehir</InputLabel>
          <Select
            name="sehir"
            className="form-control"
            labelId="demo-simple-select-required-label"
            id="demo-simple-select-required"
            label="Şehir *"
            onChange={(e) => handlecounty(e)}
          >
            {universitys.map((getcountry, index) => (
              <MenuItem value={getcountry.id} key={index}>
                {getcountry.province}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div>
        <FormControl required sx={{ m: 1, minWidth: 200 }}>
          <InputLabel id="demo-simple-select-required-label">
            Üniversite
          </InputLabel>
          <Select
            name="universite"
            className="form-control"
            labelId="demo-simple-select-required-label"
            id="demo-simple-select-required"
            label="Üniversite *"
            onChange={(e) => handlestate(e)}
          >
            {uni.map((getuni, index) => (
              <MenuItem value={getuni} key={index}>
                {getuni.universities}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
  );
}
export default Universitys;
