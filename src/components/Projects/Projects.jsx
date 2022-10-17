import React from "react";
import "./Projects.css";
import Project from "./Project";
// import { app } from "../../Firebase"
// import { getFirestore } from "firebase/firestore";
// import { collection,getDocs } from "firebase/firestore";

export default function Projects() {
  //   const [projects,setProjects] = useState([])
  //   const db = getFirestore(app);

  // const fetch = async () => {
  //       const querySnapshot = await getDocs(collection(db, "projects"));
  //       setProjects(querySnapshot)
  //       // querySnapshot.forEach((doc) => {
  //       // console.log(`${doc.id} => ${doc.data()}`);
  //     // })
  //     fetch()
  // }

  return (
    <section id="projects">
      <div className="projects-container">
        <div className="heading">
          <h3 className="title">Our Works</h3>
          <p className="separator" />
          <p className="subtitle">
            This is ShivShaktiWebSolutions web development portfolio. We provide
            the expertise needed to launch, grow, and transform businesses of
            all shapes and sizes. Our solutions will help start-ups grow into
            medium-sized businesses, and medium-sized businesses - to become
            international.
          </p>
        </div>
        <div className="projects-wrapper">
          <Project
            title="Video sharing platform Electron."
            img={
              "https://firebasestorage.googleapis.com/v0/b/portfolio-ba1cb.appspot.com/o/Electron%20-%20Brave%2017-10-2022%2015_51_39.png?alt=media&token=3f1c3a96-8c7b-4a5e-9614-7f07672f16a9"
            }
            tech="js css react node"
            link="https://leafy-manatee-99b6e0.netlify.app/"
            repo="https://github.com/yagoestevez/anonymous-message-board"
          />
          <small>
            Built using Node, Express, MongoDB, CSS + Bulma, React.js and React
            Router.
          </small>
          <p>
            This is a full-stack website that we made through which people can share,watch and upload videos
          </p>
        </div>
      </div>
    </section>
  );
}
