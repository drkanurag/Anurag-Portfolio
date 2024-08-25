import styles from "./ProjectsStyles.module.css";
import pc_part_recommender from "../../assets/pc_parts.png";
import juixer from "../../assets/juixer.png";
import spotify_clone from "../../assets/spotify.png";
import shoe_website from "../../assets/shoe.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={pc_part_recommender}
          link="https://github.com/drkanurag/PC_PART_RECOMMENDER"
          h3="Pc-Parts"
          p="PC-Part Recommender"
        />
        <ProjectCard
          src={juixer}
          link="https://github.com/drkanurag/juixer"
          h3="Juixer"
          p="Juixer-The Bartender"
        />
        <ProjectCard
          src={spotify_clone}
          link="https://github.com/drkanurag/Spotify-Clone"
          h3="Spotify"
          p="Spotify Clone"
        />
        <ProjectCard
          src={shoe_website}
          link="https://github.com/drkanurag/shoe-website"
          h3="Shoes"
          p="Shoes Website"
        />
      </div>
    </section>
  );
}

export default Projects;
