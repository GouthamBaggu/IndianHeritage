import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import NavBar from './NavBar3';
import { FaSearch } from 'react-icons/fa';

// Monuments Data with Categories
const Music = [
  // Your monuments data
  {
    title: "Sitar",
    imgSrc: "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202212/untitled-design-2022-12-16t115459086161222115504.jpeg",
    category: "Music",
    link: "https://example.com/sitar" // Add your actual link here
  },
  {
    title: "Sarod",
    imgSrc: "https://thumbs.dreamstime.com/b/ustaad-amjad-ali-khan-s-concert-konark-18725188.jpg?w=768",
    category: "Music",
    link: "https://example.com/sarod" // Add your actual link here
  },
  {
    title: "Bharatanatyam",
    imgSrc: "https://4.imimg.com/data4/SY/VU/MY-2378268/bhratnatyam-dress.jpg",
    category: "Dance",
    link: "https://example.com/bharatanatyam" // Add your actual link here
  },
  {
    title: "Kathak",
    imgSrc: "https://www.navhindtimes.in/wp-content/uploads/2022/03/Tejaswini.jpg",
    category: "Dance",
    link: "https://example.com/kathak" // Add your actual link here
  },
  {
    title: "Odissi",
    imgSrc: "https://t3.ftcdn.net/jpg/03/61/55/62/240_F_361556297_RubutLiPpVrdjOYxBWaj3q4lf7Olckhu.jpg",
    category: "Dance",
    link: "https://example.com/odissi" // Add your actual link here
  },
  {
    title: "Tanpura",
    imgSrc: "https://t3.ftcdn.net/jpg/09/62/69/28/240_F_962692808_bzp83Xyvy8qLhFKwEX7IV9L65fev6uGh.jpg",
    category: "Music",
    link: "https://example.com/tanpura" // Add your actual link here
  },
  {
    title: "Veena",
    imgSrc: "https://media.ipassio.com/media/course/learn-to-play-the-veena-from-scratch/brand_logo/courseebx4fuwigk5fshuwehtha-veena.JPG",
    category: "Music",
    link: "https://example.com/veena" // Add your actual link here
  },
  {
    title: "Manipuri",
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEGnjbe9NzAfek0ciaJoTdHOI2WA5YZO6-PQ&s",
    category: "Dance",
    link: "https://example.com/manipuri" // Add your actual link here
  },
  {
    title: "Kuchipudi",
    imgSrc: "https://w0.peakpx.com/wallpaper/949/948/HD-wallpaper-dance-awesome-dance-bharatanatya-kathakali-kuchipudi-super-dance.jpg",
    category: "Dance",
    link: "https://example.com/kuchipudi" // Add your actual link here
  },
  {
    title: "Sankh",
    imgSrc: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/503672/1477212/main-image",
    category: "Music",
    link: "https://example.com/sankh" // Add your actual link here
  },
  {
    title: "Chhau",
    imgSrc: "https://t3.ftcdn.net/jpg/04/97/76/04/240_F_497760433_DGw5RsuF7Sj0CaDnQtLNRPX90qJHWhrn.jpg",
    category: "Dance",
    link: "https://example.com/chhau" // Add your actual link here
  },
  {
    title: "Kathakali",
    imgSrc: "https://t3.ftcdn.net/jpg/03/94/57/02/240_F_394570259_xUIhQdeq9obLnaab7IcXOsnJqCW486Qw.jpg",
    category: "Dance",
    link: "https://example.com/kathakali" // Add your actual link here
  },
  {
    title: "Kanjira",
    imgSrc: "https://sc1.musik-produktiv.com/pic-010046289l/sonor-global-percussion-cg-hd-8n.jpg",
    category: "Music",
    link: "https://example.com/kanjira" // Add your actual link here
  },
  {
    title: "Mohiniattam",
    imgSrc: "https://livingwithlili.weebly.com/uploads/1/0/9/7/109778451/291545707_orig.jpg",
    category: "Dance",
    link: "https://example.com/mohiniattam" // Add your actual link here
  },
  {
    title: "Sursanga",
    imgSrc: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/503937/2083880/main-image",
    category: "Music",
    link: "https://example.com/sursanga" // Add your actual link here
  },
  {
    title: "Ghoomar",
    imgSrc: "https://i0.wp.com/www.sayeridiary.com/wp-content/uploads/2018/04/Original-Rajasthani-Ghoomar-Dance-Song-660x330.jpg?fit=660%2C330&ssl=1",
    category: "Dance",
    link: "https://example.com/ghoomar" // Add your actual link here
  },
  {
    title: "Tabala",
    imgSrc: "https://t4.ftcdn.net/jpg/05/91/83/45/240_F_591834540_IPjlH13Etd4qCN1Be61rppYHzxkCgA0p.jpg",
    category: "Music",
    link: "https://example.com/tabala" // Add your actual link here
  },
  {
    title: "Harmonium",
    imgSrc: "https://media.istockphoto.com/id/157477104/photo/harmonium.jpg?s=612x612&w=0&k=20&c=H2WhjuNQvPacEgwFLkbTWZb8nRtP1uJj61CpazdPTac=",
    category: "Music",
    link: "https://example.com/harmonium" // Add your actual link here
  },
  {
    title: "Bhangra",
    imgSrc: "https://www.dancewithme.in/wp-content/uploads/2022/01/Bhangra-The-Most-Energetic-Dance-Form-Dance-With-Me-India.jpg",
    category: "Dance",
    link: "https://example.com/bhangra" // Add your actual link here
  },
  {
    title: "Sattriya",
    imgSrc: "https://blogs.loc.gov/folklife/files/2019/03/Sattriya-5_3000.jpg",
    category: "Dance",
    link: "https://example.com/sattriya" // Add your actual link here
  },
  {
    title: "Bihu",
    imgSrc: "https://media.istockphoto.com/id/1204129776/photo/bihu-dance-of-assam.jpg?s=612x612&w=0&k=20&c=AJbomV__4kVUvoiBdpMzgpm8t3PJjoy3Lu9nk0epAiw=",
    category: "Dance",
    link: "https://example.com/bihu" // Add your actual link here
  },
  {
    title: "Flute",
    imgSrc: "https://t4.ftcdn.net/jpg/08/60/33/45/240_F_860334589_6X61QlBQo4uNoSgrMG0P0HNAAoWoVuks.jpg",
    category: "Music",
    link: "https://example.com/flute" // Add your actual link here
  },
  {
    title: "Mridangam",
    imgSrc: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/503301/1575284/restricted",
    category: "Music",
    link: "https://example.com/mridangam" // Add your actual link here
  },
  {
    title: "Sarangi",
    imgSrc: "https://riyaazmusicshop.com/cdn/shop/products/Sarangi_1000x.jpg?v=1625764767",
    category: "Music",
    link: "https://example.com/sarangi" // Add your actual link here
  }
];

const SearchBarContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 20px 40px;
  position: relative;
  z-index: 1;
`;

const SearchInput = styled.input`
  padding: 10px;
  width: 300px;
  border-radius: 5px;
  border: 1px solid #ddd;
  font-size: 16px;
  outline: none;
`;

const SearchButton = styled.button`
  padding: 10px;
  border: none;
  background-color: #333;
  color: white;
  border-radius: 5px;
  margin-left: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchIcon = styled(FaSearch)`
  margin-right: 5px;
`;

const MusicPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleImageClick = (link) => {
    navigate(link);
  };

  const filteredFestivals = Music.filter((festivals) =>
    (selectedCategory === 'All' || festivals.category === selectedCategory) &&
    festivals.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <NavBar />
      <SearchBarContainer>
        <SearchInput
          type="text"
          placeholder="Search for a music instruments or dances..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <SearchButton>
          <SearchIcon />
          Search
        </SearchButton>
      </SearchBarContainer>

      <Container>
        <Title>Famous Indian Music Instruments And Dances</Title>
        <FilterContainer>
          <FilterButton onClick={() => handleCategoryChange('All')}>All</FilterButton>
          <FilterButton onClick={() => handleCategoryChange('Music')}>Music Instruments</FilterButton>
          <FilterButton onClick={() => handleCategoryChange('Dance')}>Dance</FilterButton>
        </FilterContainer>
        <MonumentsGrid>
          {filteredFestivals.map((festival, index) => (
            <MonumentCard key={index} onClick={() => handleImageClick(festival.link)}>
              <Image src={festival.imgSrc} alt={festival.title} />
              <MonumentTitle>{festival.title}</MonumentTitle>
            </MonumentCard>
          ))}
        </MonumentsGrid>
      </Container>
    </div>
  );
};

export default MusicPage;

// Styled Components
const Container = styled.div`
  background-color: #333;
  padding: 40px;
  text-align: center;
  min-height: 500px; /* Set minimum height to prevent shrinking */
  size:fixed;
`;

const Title = styled.h1`
  color: #808000;
  font-size: 3rem;
  font-family: 'Dancing Script', cursive;
  text-shadow: 2px 2px #f1faee;
`;

const FilterContainer = styled.div`
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  gap: 15px;
`;

const FilterButton = styled.button`
  background-color: #264653;
  color: white;
  padding: 12px 25px;
  margin-right: 10px;
  border: 2px solid transparent;
  border-radius: 60px;
  cursor: pointer;
  font-size: 1.2rem;
  transition: all 0.3s ease-in-out;
  letter-spacing: 1px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #2a9d8f;
    color: #fff;
    transform: translateY(-3px);
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.2);
    border-color: #2a9d8f;
  }

  &:focus {
    outline: none;
    border-color: #e76f51;
  }
`;

const MonumentsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px; /* Increased gap between cards */
  justify-content: center;
  min-height: 400px;
`;

const MonumentCard = styled.div`
  background-color: #e9c46a;
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;
  width: 350px; /* Fixed width */
  height: 300px; /* Fixed height */
  margin-bottom: 20px; /* Add margin at the bottom of the cards */
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);
  }
`;
const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover; /* Ensures the image fits within the card without stretching */

`;

const MonumentTitle = styled.h2`
  font-size: 1.5rem;
  color: #264653;
  padding: 10px;
  font-family: 'Merriweather', serif;
`;
