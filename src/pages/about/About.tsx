import "./about.css";

export const About = () => {
  return (
    <div className="about">
      <img src="./team/team-pic.png" alt="" />
      <div className="about-teamContent">
        <h1 className="teamContent-header">Наша команда</h1>
        <p className="teamContent-text">
          Значимость этих проблем настолько очевидна, что базовый вектор
          развития позволяет оценить значение экспериментов, поражающих по своей
          масштабности и грандиозности. Мы вынуждены отталкиваться от того, что
          консультация с широким активом.
        </p>
        <div className="team-avatars">
          <img src="./team/team-1.png" alt="" />
          <img src="./team/team-2.png" alt="" />
          <img src="./team/team-3.png" alt="" />
        </div>
      </div>
    </div>
  );
};
