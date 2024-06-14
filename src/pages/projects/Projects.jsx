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
import { collection, getDocs } from 'firebase/firestore'; // Import necessary functions
import { db } from "../../firebase"; // Assuming 'db' reference to Firestore is imported

function Projects() {
  const [projects, setProjects] = useState([]); // State to store fetched projects
  const [isLoading, setIsLoading] = useState(true);
  const [isSwiperActive, setIsSwiperActive] = useState(true); // State to manage Swiper activation

  // Fetch projects on component mount
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

  // Handle window resize to toggle Swiper activation
  useEffect(() => {
    const handleResize = () => {
      setIsSwiperActive(window.innerWidth > 992);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='projects'>
      <div className="top">
        <h2>What I've Done</h2>
        <p>(more coming soon)</p>
      </div>
      <div className="bottom">
        {isLoading ? (
          <div className="loading-container">
            <ReactLoading type={'spin'} color={'grey'} height={'100px'} width={'100px'} />
          </div>
        ) : (
          isSwiperActive ? (
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
              pagination={{ el: '.swiper-pagination', clickable: true }}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              modules={[EffectCoverflow, Pagination, Navigation]}
              className='swiper-container'
            >
              {projects.map(project => (
                <SwiperSlide key={project.id} className='swipingProjects'>
                  <Card
                    imageUrl={project.imageUrl}
                    title={project.title}
                    description={project.description}
                    projectUrl={project.projectUrl}
                  />
                </SwiperSlide>
              ))}

              <div className="slider-controller">
                <div className="swiper-button-prev slider-arrow">{/* Prev */}</div>
                <div className="swiper-button-next slider-arrow">{/* Next */}</div>
                <div className="swiper-pagination"></div>
              </div>
            </Swiper>
          ) : (
            <div className="resCards">
              {projects.map(project => (
                <div key={project.id}>
                  <Card
                    imageUrl={project.imageUrl}
                    title={project.title}
                    description={project.description}
                    projectUrl={project.projectUrl}
                  />
                </div>
              ))}
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Projects;
