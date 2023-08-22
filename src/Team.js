import React, { useState } from "react"
import "./Team.css"

const Team = () => {

    const [team, setTeam] = useState([
        { n: '' },
        { n: '' },

    ]);

    const [isTeamShowing, setIsTeamShowing] = useState(false)

    const handleTeam = (index, field, value) => {
        setTeam(prevTeam => {
            const newTeam = [...prevTeam];
            newTeam[index][field] = value;
            console.log(team)
            return newTeam;

        });console.log(team)
    };

    const addMember = () => {
        if (team.length < 6) {
            setTeam(prev => [
                ...prev,
                { n: ''}
            ]);
        }
    };



    return (
        <div className="Placement" >
            <div className="move">
                <div onClick={() => setIsTeamShowing(false)} className="indvbtn" style={{ cursor: 'pointer', borderRadius: '999px', padding: '10px 20px 10px', background: !isTeamShowing && 'black', color: !isTeamShowing && "white" }}>Individual</div>
                <div onClick={() => setIsTeamShowing(true)} className="teambtn" style={{ cursor: 'pointer', borderRadius: '999px', padding: '10px 20px 10px', background: isTeamShowing && 'black', color: isTeamShowing && "white" }}>Team</div>
            </div>


            {/* <div>
                    {team.map((item, index) => (
                        <div key={index} style={{ padding: '2px' }} >
                            <span style={{ padding: '16px' }}>
                                {item.n}
                            </span>
                            <span>
                                {item.p}
                            </span>
                        </div>
                    ))}
                </div> */}


            <div className="">{isTeamShowing ?
                <div style={{ height: '2000px', width: '700px',  }}>
                    <div style={{ textAlign: 'right', display: 'flex', flexDirection: "row-reverse", margin:'0 6%' }}>
                        <div className="adder" onClick={addMember} style={{marginBottom:'5px'}}>
                            <span>+</span>
                        </div>
                    </div>
                    <div style={{border:'1px solid white', borderRadius:'20px', padding:'5% 2%', margin:'0 5%',textAlign:'center'}}>
                    {team.map((player, index) => (
                        <div key={index} style={{ display: "flex", justifyContent: 'center',  }}>
                            <input
                                type="text"
                                name={`n${index}`}
                                value={player.n}
                                onChange={e => handleTeam(index, 'n', e.target.value)}
                                placeholder="Name"
                                className="input"
                            />
                        </div>
                    ))}
                    </div>
                </div>
                :
                <div style={{display:'flex', justifyContent:'center', margin:'auto'}}>
                <div style={{ height: '2000px', width: '700px' , margin:'auto', paddingTop:'5%', }}>
                    <select style={{marginLeft:"20%",  marginBottom:'2%'}}>
                        <option>Event </option>
                        <option>Event </option>
                        <option>Event </option>
                        <option>Event </option>
                        <option>Event </option>
                    </select>
                    <div style={{width: '466px',height: '249px', border:'1px solid white', borderRadius:'20px', margin:'auto'}} />
                </div>
                </div>
            }


            </div>
        </div>
    )

}

export default Team