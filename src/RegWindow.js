import React, { useState } from "react"
import "./RegWindow.css"

function doesMatch(str, key) {
    if (key.length == 0) return true
    for (let i = 0; i < str.length - key.length + 1; i++) {
        if (str.slice(i, i + key.length).toLowerCase === key) {
            return true
        }
        return false
    }
}

const indianStates = ["--State or UT--",
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttarakhand",
    "Uttar Pradesh",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Lakshadweep",
    "Puducherry"]

const listIndianStates = indianStates.map(item => <option value={item}>{item}</option>)

const collegeNames = ["--College--", "Bulbasaur", "Ivysaur", "Venusaur",
    "Charmander", "Charmeleon", "Charizard", "Squirtle", "Wartortle",
    "Blastoise", "Caterpie", "Metapod", "Butterfree", "Weedle", "Kakuna",
    "Beedrill", "Pidgey", "Pidgeotto", "Pidgeot", "Rattata", "Raticate", "Spearow",
    "Fearow", "Ekans", "Arbok", "Pikachu", "Raichu", "Sandshrew", "Sandslash", "Nidoran", "Nidorina",
    "Nidoqueen", "Nidoran", "Nidorino", "Nidoking", "Clefairy", "Clefable", "Vulpix", "Ninetales", "Jigglypuff", "Wigglytuff",
    "Zubat", "Golbat", "Oddish", "Gloom", "Vileplume", "Paras", "Parasect", "Venonat", "Venomoth",
    "Diglett", "Dugtrio", "Meowth", "Persian", "Psyduck", "Golduck", "Mankey", "Primeape", "Growlithe", "Arcanine", "Poliwag", "Poliwhirl", "Poliwrath",
    "Abra", "Kadabra", "Alakazam", "Machop", "Machoke", "Machamp", "Bellsprout", "Weepinbell", "Victreebel", "Tentacool",
    "Tentacruel", "Geodude", "Graveler", "Golem", "Ponyta", "Rapidash", "Slowpoke", "Slowbro", "Magnemite", "Magneton",
    "Farfetch'd", "Doduo", "Dodrio", "Seel", "Dewgong", "Grimer", "Muk", "Shellder", "Cloyster", "Gastly", "Haunter", "Gengar", "Onix",
    "Drowzee", "Hypno", "Krabby", "Kingler", "Voltorb", "Electrode", "Exeggcute", "Exeggutor", "Cubone", "Marowak", "Hitmonlee", "Hitmonchan", "Lickitung",
    "Koffing", "Weezing", "Rhyhorn", "Rhydon", "Chansey", "Tangela", "Kangaskhan", "Horsea", "Seadra", "Goldeen", "Seaking", "Staryu", "Starmie", "Mr. Mime", "Scyther", "Jynx",
    "Electabuzz", "Magmar", "Pinsir", "Tauros", "Magikarp", "Gyarados", "Lapras", "Ditto", "Eevee", "Vaporeon", "Jolteon", "Flareon", "Porygon", "Omanyte", "Omastar", "Kabuto", "Kabutops",
    "Aerodactyl", "Snorlax", "Articuno", "Zapdos", "Moltres", "Dratini", "Dragonair", "Dragonite", "Mewtwo", "Mew"]

const listCollegeNames = collegeNames.map(item => <option value={item}>{item}</option>)
/*const listCollegeNames2=listCollegeNames.filter(item=>{
    let temp=item.value
      
})*/

export default function RegWindow() {
    const [formData, updateFormData] = React.useState({
        fullName: "",
        email: "",
        phone: "",
        gender: "",
        college: "",
        city: "",
        state: ""
    })

    const [name , setName ] = useState("")

    

    function handleChange(event) {
        const { name, value } = event.target
        const namee = event.target.name;
        const valuee = event.target.value
        updateFormData(old => ({
            ...old,
            [name]: value
        }))
       
    }

    return (
        <div className="RegWindow">
            {/* <div style={{height:'300px'}}></div> */}
            <div>
                <form>
                
                    <input
                        type="text"
                        placeholder="Full Name"
                        onChange={handleChange}
                        name="fullName"
                        value={formData.fullName}
                    />
                    <input
                        type="email"
                        placeholder="Enter Email Address"
                        // onChange={handleChange}
                        onChange={(e)=>{
                            setName(e.target.value)
                        }}
                        name="email"
                        value={formData.email}
                    />
                    <input
                        type="text"
                        placeholder="Phone Number"
                        onChange={handleChange}
                        name="phone"
                        value={formData.phone}
                    />
                    <select
                        id="selectGender"
                        value={formData.gender}
                        onChange={handleChange}
                        name="gender"
                    >
                        <option value="">--Gender--</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Transgender">Transgender</option>
                        <option value="Non-binary">Non-binary</option>
                        <option value="Non-binary">Prefer not to say</option>
                    </select>
                    <select
                        id="selectState"
                        value={formData.state}
                        onChange={handleChange}
                        name="state"
                    >
                        {listIndianStates}
                    </select>
                    <input
                        type="text"
                        placeholder="College Name"
                        onChange={handleChange}
                        name="college"
                        value={formData.college}
                    />
                    
                </form>
            </div>
            <div>

            </div>
        </div>
    )
}