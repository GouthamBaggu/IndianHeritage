import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';  
import NavBar from './NavBar3';
import { FaSearch } from 'react-icons/fa';

// Sample artifacts data
const artifacts = [
  { title: "Nataraja", 
    imgSrc: "https://www.jaipurcraftonline.com/cdn/shop/products/81Hcqija6pL._SL1500__1.jpg?v=1677645516", 
    category: "Historical",
     link: "/natraj" 
    },
  { title: "Mughal Jewelry", 
    imgSrc: "https://static.toiimg.com/thumb/imgsize-141072,msid-108302916,width-600,height-335,resizemode-75/108302916.jpg", 
    category: "Jewellery", 
    link: "/mughal-jewelry" 
  },
  { title: "Pashmina Shawls", 
    imgSrc: "https://t4.ftcdn.net/jpg/00/52/14/59/360_F_52145997_ChqxcDuOP2B9xweKkTHwJVpqa43TbNId.jpg", 
    category: "Others", 
    link: "/pashmina-shawls" 
  },
  { title: "Terracotta", 
    imgSrc: "https://image.shutterstock.com/image-photo/terracotta-claybased-unglazed-ceramic-horses-250nw-386466406.jpg?app=peacock", 
    category: "Others", 
    link: "/terracotta" 
  },
  { title: "Blue Pottery", 
    imgSrc: "https://th-i.thgim.com/public/entertainment/art/lld5c5/article35620369.ece/alternates/FREE_1200/kimpbluepottery2", 
    category: "Temples", 
    link: "/blue-pottery" 
  },
  { title: "Madhubani Paintings", 
    imgSrc: "https://authindia.com/wp-content/uploads/2017/12/MADHUBANI-ART-HEAD.jpg", 
    category: "Paintings", 
    link: "/madhubani-paintings" 
  },
  { title: "Miniature Paintings", 
    imgSrc: "https://www.culturalindia.net/iliimages/Miniature-Painting-ili-523-img-1.jpg", 
    category: "Paintings",
     link: "/miniature-paintings" 
    },
  { title: "Tanjore Paintings", 
    imgSrc: "https://webneel.com/daily/sites/default/files/images/daily/08-2015/18-tanjore-paintings.jpg", 
    category: "Paintings", 
    link: "/tanjore-paintings" 
  },
  { title: "Katar (Push Dagger)", 
    imgSrc: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/641375/1372556/restricted", 
    category: "Others",
     link: "/katar" 
    },
  { title: "Palm-leaf Manuscripts", 
    imgSrc: "https://iasbaba.com/wp-content/uploads/2022/12/pll.jpg", 
    category: "Historical", 
    link: "/palm-leaf-manuscripts" 
  },
  { title: "Mauryan Punch-Marked Coins", 
    imgSrc: "https://i.ebayimg.com/images/g/dv8AAOSwiWNkwqny/s-l400.jpg", 
    category: "Jewellery", 
    link: "/mauryan-coins" 
  },
  { title: "Gupta Gold Coins", 
    imgSrc: "https://i.pinimg.com/564x/ed/d2/8f/edd28f7ba58846f654bd462f454dec08.jpg", 
    category: "Jewellery", 
    link: "/gupta-coins" 
  },
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


const ArtifactsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredArtifacts = artifacts.filter(artifact =>
    (selectedCategory === 'All' || artifact.category === selectedCategory )&&
    artifact.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <NavBar />
      <SearchBarContainer>
        <SearchInput
          type="text"
          placeholder="Search for a artifacts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <SearchButton>
          <SearchIcon />
          Search
        </SearchButton>
      </SearchBarContainer>
      <Container>
        <Title>Famous Indian Art And Crafts</Title>
        <FilterContainer>
          <FilterButton onClick={() => handleCategoryChange('All')}>All</FilterButton>
          <FilterButton onClick={() => handleCategoryChange('Historical')}>Historical</FilterButton>
          <FilterButton onClick={() => handleCategoryChange('Paintings')}>Paintings</FilterButton>
          <FilterButton onClick={() => handleCategoryChange('Jewellery')}>Jewellery</FilterButton>
          <FilterButton onClick={() => handleCategoryChange('Others')}>Others</FilterButton>
        </FilterContainer>
        <ArtifactsGrid>
          {filteredArtifacts.map((artifact, index) => (
            <ArtifactCard key={index}>
              <Link to={artifact.link}>
                <Image src={artifact.imgSrc} alt={artifact.title} />
              </Link>
              <ArtifactTitle>{artifact.title}</ArtifactTitle>
            </ArtifactCard>
          ))}
        </ArtifactsGrid>
      </Container>
    </div>
  );
};

export default ArtifactsPage;

// Styled Components
const Container = styled.div`
  background-color: #333;
  padding: 40px;
  text-align: center;
`;
const Title = styled.h1`
  color: #FF1493;
  font-size: 3rem;
  font-family: 'Dancing Script', cursive;
  text-shadow: 2px 2px #f1faee;
`;

const FilterContainer = styled.div`
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  gap: 15px;  /* Add space between the buttons */
`;

const FilterButton = styled.button`
  background-color: #264653;
  color: white;
  padding: 12px 25px;
  margin-right: 10px;
  border: 2px solid transparent;
  border-radius: 50px;  /* Makes the button pill-shaped */
  cursor: pointer;
  font-size: 1.2rem;
  transition: all 0.3s ease-in-out;
  letter-spacing: 1px;  /* Add a bit of spacing between letters */
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);  /* Add a subtle shadow */

  &:hover {
    background-color: #2a9d8f;
    color: #fff;
    transform: translateY(-3px);  /* Slight hover lift */
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.2);  /* Darker shadow on hover */
    border-color: #2a9d8f;
  }

  &:focus {
    outline: none;
    border-color: #e76f51;  /* Focus border color */
  }
`;

const ArtifactsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px; /* Increased gap between cards */
  justify-content: center;
  min-height: 400px;
`;

const ArtifactCard = styled.div`
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

const ArtifactTitle = styled.h2`
  font-size: 1.5rem;
  color: #264653;
  padding: 15px;
  font-family: 'Merriweather', serif;
`;

