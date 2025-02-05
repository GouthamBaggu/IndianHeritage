import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import NavBar from './NavBar3';
import { FaSearch } from 'react-icons/fa';

// Monuments Data with Categories
const Cusine = [
  // Your monuments data
  {
    imgSrc: "https://as1.ftcdn.net/v2/jpg/07/80/20/96/1000_F_780209620_pYWVdtFrVAX17v9vwlOsBYYMSO1So612.jpg",
    title: "Pani Puri",
    link: "https://example.com/pani-puri"
  },
  {
    imgSrc: "https://t4.ftcdn.net/jpg/02/86/00/73/240_F_286007338_l9MyZI7TXp8BVisim3aH0tHpwZONFL1q.jpg",
    title: "Pakora",
    link: "https://example.com/pakora"
  },
  {
    imgSrc: "https://t4.ftcdn.net/jpg/07/71/23/83/240_F_771238345_bJN4TSLzcAdPEECL7yptnkyJSChtADNO.jpg",
    title: "Idli Sambar",
    link: "https://example.com/idli-sambar"
  },
  {
    imgSrc: "https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,q_60,w_750,f_auto/23-tandoor-canva-phpRi8NmQ",
    title: "Chicken Tandoor",
    link: "https://example.com/chicken-tandoor"
  },
  {
    imgSrc: "https://t4.ftcdn.net/jpg/07/50/57/67/240_F_750576716_rFAag7q09PcIbh2At4LlMQx55LkVXL53.jpg",
    title: "Chicken Butter Masala",
    link: "https://example.com/chicken-butter-masala"
  },
  {
    imgSrc: "https://t4.ftcdn.net/jpg/08/49/52/87/240_F_849528747_FOD4f63hSYpBwf3QdYHM2LlM2r9Ttbz7.jpg",
    title: "Malai Kofta",
    link: "https://example.com/malai-kofta"
  },
  {
    imgSrc: "https://t4.ftcdn.net/jpg/08/29/54/89/240_F_829548934_LxZZIa7ZL4Sna0jDY5TMYxJsbQpmR3fC.jpg",
    title: "Thali",
    link: "https://example.com/thali"
  },
  {
    imgSrc: "https://t3.ftcdn.net/jpg/08/38/00/66/240_F_838006621_cbqq8j2uDEMPrGl0MWL1uW4SwSoR5yn1.jpg",
    title: "Malabar Fish Curry",
    link: "https://example.com/malabar-fish-curry"
  },
  {
    imgSrc: "https://t3.ftcdn.net/jpg/05/50/22/78/240_F_550227845_KlCD7aIiAaI4sRIC7YVZ8DNIgy2WRIWK.jpg",
    title: "Rogan Josh",
    link: "https://example.com/rogan-josh"
  },
  {
    imgSrc: "https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_732,c_fill,g_auto/v1661347439/india-food-chana-masala/india-food-chana-masala-1120x732.jpg",
    title: "Chana Masala",
    link: "https://example.com/chana-masala"
  },
  {
    imgSrc: "https://t3.ftcdn.net/jpg/00/37/81/84/240_F_37818424_iEAeI3ngDZ3pNwQ8iZvm2AIDzVDRQmhz.jpg",
    title: "Masala Dosa",
    link: "https://example.com/masala-dosa"
  },
  {
    imgSrc: "https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_732,c_fill,g_auto/v1661347425/india-food-dal-tadka/india-food-dal-tadka-1120x732.jpg",
    title: "Dal Tadka",
    link: "https://example.com/dal-tadka"
  },
  {
    imgSrc: "https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_732,c_fill,g_auto/v1661347392/india-food-paratha/india-food-paratha-1120x732.jpg",
    title: "Paratha",
    link: "https://example.com/paratha"
  },
  {
    imgSrc: "https://t3.ftcdn.net/jpg/07/80/72/60/240_F_780726084_p48ms5hrFFDr6lJuvb8F5yyzz6xoi76b.jpg",
    title: "Samosa",
    link: "https://example.com/samosa"
  },
  {
    imgSrc: "https://t4.ftcdn.net/jpg/07/01/83/07/240_F_701830762_V4u4BctsIt4YiB2cqJ9E72PK0T69zP3c.jpg",
    title: "Gulab Jamun",
    link: "https://example.com/gulab-jamun"
  },
  {
    imgSrc: "https://t3.ftcdn.net/jpg/02/43/39/16/240_F_243391678_Iuz3kD91a5AhWWmufBkZJMQi5OLgxwg5.jpg",
    title: "Masala Chai",
    link: "https://example.com/masala-chai"
  },
  {
    imgSrc: "https://t3.ftcdn.net/jpg/08/74/50/10/240_F_874501026_muVcqTUYIp54bq3OTxCTEBCJnCUVcwp7.jpg",
    title: "Mango Lassi",
    link: "https://example.com/mango-lassi"
  },
  {
    imgSrc: "https://media.istockphoto.com/id/515853026/photo/traditional-rasmalai-or-ras-malai-indian-dessert-bengali-sweet.jpg?s=612x612&w=0&k=20&c=LYftdDAkIa8lVyfmwt8iK-OPSQr2KCcJcYpPhbFtFBk=",
    title: "Ras Malai",
    link: "https://example.com/ras-malai"
  },
  {
    imgSrc: "https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,q_60,w_750,f_auto/39-kulfi-canva-phposOcGE",
    title: "Kulfi",
    link: "https://example.com/kulfi"
  },
  {
    imgSrc: "https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_732,c_fill,g_auto/v1661347454/india-food-barfi/india-food-barfi-1120x732.jpg",
    title: "Barfi",
    link: "https://example.com/barfi"
  },
  // Additional data...
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

const CusinePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleImageClick = (link) => {
    navigate(link);
  };

  // Filter logic based on search term
  const filteredFestivals = Cusine.filter((festival) =>
    festival.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <NavBar />
      <SearchBarContainer>
        <SearchInput
          type="text"
          placeholder="Search for a food item..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <SearchButton>
          <SearchIcon />
          Search
        </SearchButton>
      </SearchBarContainer>

      <Container>
        <Title>Famous Indian Cusine</Title>
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

export default CusinePage;

// Styled Components
const Container = styled.div`
  background-color: #333;
  padding: 40px;
  text-align: center;
  min-height: 500px; /* Set minimum height to prevent shrinking */
`;

const Title = styled.h1`
  color: #008000;
  font-size: 3rem;
font-family: 'Dancing Script', cursive;

  text-shadow: 2px 2px #f1faee;
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
