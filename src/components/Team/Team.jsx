import './Team.css';
import team1 from '../../assets/team1.png';
import team2 from '../../assets/team2.png';

const Team = () => {
  return (
    <div className="team">
      <h1>MEET THE TEAM</h1>
      <p>Hover on image to see details</p>
      <div className="team__photos">
        <img src={team1} alt="team member" />
        <img src={team2} alt="team member" />
      </div>
    </div>
  );
};

export default Team;
