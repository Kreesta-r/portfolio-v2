import React, { useState, useEffect } from 'react';
import './projects.css';
import Card from './Card'; // Assuming Card component renders image and description
import { Swiper, SwiperSlide } from 'swiper/react';
import ReactLoading from 'react-loading';



import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { collection, getDocs, onSnapshot } from 'firebase/firestore'; // Import necessary functions
import { db } from "../../firebase"; // Assuming 'db' reference to Firestore is imported

function Projects() {
  const [projects, setProjects] = useState([]); // State to store fetched projects
  const [isLoading, setIsLoading] = useState(true);

  // Fetch projects on component mount (or use useEffect with an empty dependency array [])
  useEffect(() => {
    const getProjects = async () => {
      setIsLoading(true); // Set loading to true before fetching

      try {
        const projectsCollection = collection(db, "projects"); // Replace "projects" with your collection name
        const projectsSnapshot = await getDocs(projectsCollection); // Get a snapshot of the collection

        // Extract project data from the snapshot
        const projectList = projectsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        setProjects(projectList); // Update state with fetched projects
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setIsLoading(false); // Set loading to false regardless of success or error
      }
    };

    getProjects(); // Call the function to fetch projects
  }, []);


  return (
    <div className='projects'>
      <div className="top">
        <h2>What i've done</h2>
        <p>(more coming soon)</p>
      </div>
      <div className="bottom">
      {isLoading ? (
          // Display loading animation while fetching
          <div className="loading-container">
          <ReactLoading type={'spin'} color={'grey'} height={'100px'} width={'100px'} />
        </div>
        
        ) : (
      <Swiper 
        effect={'coverflow'}
        grabCursor={true}
        slidesPerView={'auto'}
        centeredSlides={true}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 50,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{el:'.swiper-pagination', clickable: true}}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        clickable={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className='swiper-container'
      >
        {/* Map over projects and render Card components */}
        {projects.map(project => (
          <SwiperSlide key={project.id}>
            <Card 
              // Pass project data as props
              imageUrl={project.imageUrl}
              title={project.title}
              description={project.description}
            />
          </SwiperSlide>
        ))}
      
      <div className="slider-controller">
        <div className="swiper-button-prev slider-arrow">
            {/* Prev */}
        </div>
        <div className="swiper-button-next slider-arrow">
            {/* Next */}
        </div>
        <div className="swiper-pagination">

        </div>
      </div>
    </Swiper>
  )}
      </div>
    </div>
  );
}

export default Projects;
