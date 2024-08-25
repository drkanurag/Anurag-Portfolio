import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/viberr.png";
import freshBurger from "../../assets/fresh-burger.png";
import hipsster from "../../assets/hipsster.png";
import fitLift from "../../assets/fitlift.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/drkanurag/PC_PART_RECOMMENDER"
          h3="PC Part "
          p="PC Part Recommender"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/drkanurag/juixer"
          h3="JUIXER"
          p="JUIXER- A BARTENDER"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/drkanurag/shoe-website"
          h3="Shoe"
          p="Shoe-Website"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/drkanurag/Spotify-Clone"
          h3="Spotify"
          p="Spotify-Clone"
        />
      </div>
    </section>
  );
}

export default Projects;
