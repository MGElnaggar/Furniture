import React , {useState, useEffect} from 'react';
import style from './OurTeam.module.css';


const OurTeam = () => {

  const [team, setTeam] = useState([]);

  useEffect(() => {
    fetch('/JSONs/OurTeam.json')
        .then((response) => response.json())
        .then((data) => setTeam(data))
        .catch((error) => console.error('Error fetching the team:', error));
  },[]);

  return (
      <div className={style.ourTeamSection}>
          <h2>Our Team</h2>
          <div className={style.teamGrid}>
              {team.map((member) => (
                  <div key={member.id} className={style.teamMember}>
                      <img src={member.image} alt={member.name} className={style.teamImage} />
                      <h3>{member.name}</h3>
                      <span>{member.position}</span>
                      <p>{member.description}</p>
                      <a href="/" className={style.learnMore}>Learn More</a>
                  </div>
              ))}
          </div>
      </div>
  );
};

export default OurTeam;