import { React, useState, useMemo } from 'react'
import '../../../css/About Page/AboutContactForm.css'
import MuiPhoneNumber from 'material-ui-phone-number';
import { Link } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import countryList from 'react-select-country-list'

export default function AboutContactForm() {
    const [country, setCountry] = useState('');
    const handleChange = (event) => {
        setCountry(event.target.value);
    };

    const countryList = [
        "Afghanistan",
        "Albania",
        "Algeria",
        "American Samoa",
        "Andorra",
        "Angola",
        "Anguilla",
        "Antarctica",
        "Antigua and Barbuda",
        "Argentina",
        "Armenia",
        "Aruba",
        "Australia",
        "Austria",
        "Azerbaijan",
        "Bahamas (the)",
        "Bahrain",
        "Bangladesh",
        "Barbados",
        "Belarus",
        "Belgium",
        "Belize",
        "Benin",
        "Bermuda",
        "Bhutan",
        "Bolivia (Plurinational State of)",
        "Bonaire, Sint Eustatius and Saba",
        "Bosnia and Herzegovina",
        "Botswana",
        "Bouvet Island",
        "Brazil",
        "British Indian Ocean Territory (the)",
        "Brunei Darussalam",
        "Bulgaria",
        "Burkina Faso",
        "Burundi",
        "Cabo Verde",
        "Cambodia",
        "Cameroon",
        "Canada",
        "Cayman Islands (the)",
        "Central African Republic (the)",
        "Chad",
        "Chile",
        "China",
        "Christmas Island",
        "Cocos (Keeling) Islands (the)",
        "Colombia",
        "Comoros (the)",
        "Congo (the Democratic Republic of the)",
        "Congo (the)",
        "Cook Islands (the)",
        "Costa Rica",
        "Croatia",
        "Cuba",
        "Curaçao",
        "Cyprus",
        "Czechia",
        "Côte d'Ivoire",
        "Denmark",
        "Djibouti",
        "Dominica",
        "Dominican Republic (the)",
        "Ecuador",
        "Egypt",
        "El Salvador",
        "Equatorial Guinea",
        "Eritrea",
        "Estonia",
        "Eswatini",
        "Ethiopia",
        "Falkland Islands (the) [Malvinas]",
        "Faroe Islands (the)",
        "Fiji",
        "Finland",
        "France",
        "French Guiana",
        "French Polynesia",
        "French Southern Territories (the)",
        "Gabon",
        "Gambia (the)",
        "Georgia",
        "Germany",
        "Ghana",
        "Gibraltar",
        "Greece",
        "Greenland",
        "Grenada",
        "Guadeloupe",
        "Guam",
        "Guatemala",
        "Guernsey",
        "Guinea",
        "Guinea-Bissau",
        "Guyana",
        "Haiti",
        "Heard Island and McDonald Islands",
        "Holy See (the)",
        "Honduras",
        "Hong Kong",
        "Hungary",
        "Iceland",
        "India",
        "Indonesia",
        "Iran (Islamic Republic of)",
        "Iraq",
        "Ireland",
        "Isle of Man",
        "Israel",
        "Italy",
        "Jamaica",
        "Japan",
        "Jersey",
        "Jordan",
        "Kazakhstan",
        "Kenya",
        "Kiribati",
        "Korea (the Democratic People's Republic of)",
        "Korea (the Republic of)",
        "Kuwait",
        "Kyrgyzstan",
        "Lao People's Democratic Republic (the)",
        "Latvia",
        "Lebanon",
        "Lesotho",
        "Liberia",
        "Libya",
        "Liechtenstein",
        "Lithuania",
        "Luxembourg",
        "Macao",
        "Madagascar",
        "Malawi",
        "Malaysia",
        "Maldives",
        "Mali",
        "Malta",
        "Marshall Islands (the)",
        "Martinique",
        "Mauritania",
        "Mauritius",
        "Mayotte",
        "Mexico",
        "Micronesia (Federated States of)",
        "Moldova (the Republic of)",
        "Monaco",
        "Mongolia",
        "Montenegro",
        "Montserrat",
        "Morocco",
        "Mozambique",
        "Myanmar",
        "Namibia",
        "Nauru",
        "Nepal",
        "Netherlands (the)",
        "New Caledonia",
        "New Zealand",
        "Nicaragua",
        "Niger (the)",
        "Nigeria",
        "Niue",
        "Norfolk Island",
        "Northern Mariana Islands (the)",
        "Norway",
        "Oman",
        "Pakistan",
        "Palau",
        "Palestine, State of",
        "Panama",
        "Papua New Guinea",
        "Paraguay",
        "Peru",
        "Philippines (the)",
        "Pitcairn",
        "Poland",
        "Portugal",
        "Puerto Rico",
        "Qatar",
        "Republic of North Macedonia",
        "Romania",
        "Russian Federation (the)",
        "Rwanda",
        "Réunion",
        "Saint Barthélemy",
        "Saint Helena, Ascension and Tristan da Cunha",
        "Saint Kitts and Nevis",
        "Saint Lucia",
        "Saint Martin (French part)",
        "Saint Pierre and Miquelon",
        "Saint Vincent and the Grenadines",
        "Samoa",
        "San Marino",
        "Sao Tome and Principe",
        "Saudi Arabia",
        "Senegal",
        "Serbia",
        "Seychelles",
        "Sierra Leone",
        "Singapore",
        "Sint Maarten (Dutch part)",
        "Slovakia",
        "Slovenia",
        "Solomon Islands",
        "Somalia",
        "South Africa",
        "South Georgia and the South Sandwich Islands",
        "South Sudan",
        "Spain",
        "Sri Lanka",
        "Sudan (the)",
        "Suriname",
        "Svalbard and Jan Mayen",
        "Sweden",
        "Switzerland",
        "Syrian Arab Republic",
        "Taiwan",
        "Tajikistan",
        "Tanzania, United Republic of",
        "Thailand",
        "Timor-Leste",
        "Togo",
        "Tokelau",
        "Tonga",
        "Trinidad and Tobago",
        "Tunisia",
        "Turkey",
        "Turkmenistan",
        "Turks and Caicos Islands (the)",
        "Tuvalu",
        "Uganda",
        "Ukraine",
        "United Arab Emirates (the)",
        "United Kingdom of Great Britain and Northern Ireland (the)",
        "United States Minor Outlying Islands (the)",
        "United States of America (the)",
        "Uruguay",
        "Uzbekistan",
        "Vanuatu",
        "Venezuela (Bolivarian Republic of)",
        "Viet Nam",
        "Virgin Islands (British)",
        "Virgin Islands (U.S.)",
        "Wallis and Futuna",
        "Western Sahara",
        "Yemen",
        "Zambia",
        "Zimbabwe",
        "Åland Islands"
    ];

    return (
        <>
            <div className="aboutcontactformmaincontainer">
                <div className="aboutcontactformheader">
                    Let's Start a Conversation
                </div>
                <div className="aboutcontactformbody">
                    <div className="inputitem">
                        <label>FirstName*</label>
                        <input type="text" name="" id="firstname" max={20} required={true} />
                    </div>
                    <div className="inputitem">
                        <label>LastName*</label>
                        <input type="text" name="" id="lastname" max={15} required={true} />
                    </div>
                    <div className="inputitem">
                        <label>Email*</label>
                        <input type="text" name="" id="email" max={40} required={true} />
                    </div>
                    <div className="inputitem">
                        <label>Company*</label>
                        <input type="text" name="" id="company" max={50} required={true} />
                    </div>
                    <div className="inputitem phonenumberinput">
                        <label>Phone Number</label>
                        <MuiPhoneNumber defaultCountry={'in'} style={{ color: 'white', width: '103%', border: '1px solid #' }} />,
                    </div>
                    <div className="inputitem">
                        <label>Role</label>
                        <input type="text" name="" id="role" required={true} />
                    </div>
                    <div className="inputitem">
                        <label>How did you hear about us?*</label>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            sx={{ backgroundColor: '#292929', width: '103%', height: '4.7vh', color: 'white' }}
                        >
                            <MenuItem value={1}>Email</MenuItem>
                            <MenuItem value={2}>Linkedin</MenuItem>
                            <MenuItem value={3}>Other Social Media</MenuItem>
                            <MenuItem value={4}>Recruitment Sites</MenuItem>
                            <MenuItem value={5}>Peer Recommendation</MenuItem>
                            <MenuItem value={5}>Online Search</MenuItem>
                        </Select>
                    </div>
                    <div className="inputitem countryselectbox" >
                        <label>Country*</label>
                        <select className=''>
                            <option value={null}></option>
                            {countryList.map((item, index) => (
                                <>
                                    <option className='countryselectboxoption' value={item}>{item}</option>
                                </>
                            ))}
                        </select>
                    </div>
                    <div className="aboutcontactformsubmitbtnparent">
                        <div className="aboutcontactformsubmitbtn">
                            <p> Submit</p>
                            <i className="fa-solid fa-arrow-right-long"></i>
                        </div>
                        <div className="aboutcontactformprivacytpolicy">
                            By Clicking submit button,you agree to our <Link to='/privacypolicy' style={{ color: '#0eaae3', textDecoration: 'none' }}>privacy policy</Link>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}
