import React , {useState, useEffect} from 'react';
import style from './OurTeam.module.css';

// import person1 from '../../Assets/Person/person_1.jpg';
// import person2 from '../../Assets/Person/person_2.jpg';
// import person3 from '../../Assets/Person/person_3.jpg';
// import person4 from '../../Assets/Person/person_4.jpg';

// const teamMembers = [
//   {
//     id: 1,
//     name: 'Lawson Arnold',
//     position: 'CEO, Founder, Atty.',
//     description: 'Separated they live in Bookmarks grove right at the coast of the Semantics, a large language ocean.',
//     image: person1,
//   },
//   {
//     id: 2,
//     name: 'Jeremy Walker',
//     position: 'CEO, Founder, Atty.',
//     description: 'Separated they live in Bookmarks grove right at the coast of the Semantics, a large language ocean.',
//     image: person2 ,
//   },
//   {
//     id: 3,
//     name: 'Patrik White',
//     position: 'CEO, Founder, Atty.',
//     description: 'Separated they live in Bookmarks grove right at the coast of the Semantics, a large language ocean.',
//     image: person3 ,
//   },
//   {
//     id: 4,
//     name: 'Kathryn Ryan',
//     position: 'CEO, Founder, Atty.',
//     description: 'Separated they live in Bookmarks grove right at the coast of the Semantics, a large language ocean.',
//     image: person4 ,
//   },
// ];

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