import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import NavBar from './NavBar3';
import { FaSearch } from 'react-icons/fa';

// Traditional Clothing Data
const clothingItems = [
  {
    title: "Saree",
    imgSrc: "https://t4.ftcdn.net/jpg/01/67/25/37/360_F_167253732_FVaF7PyA5vat3JVPvP4F5AsCoZkYAnZF.jpg",
    link: "/clothing/saree"
  },
  {
    title: "Kurta",
    imgSrc: "https://images.news18.com/ibnkhabar/uploads/2023/03/Collage-Maker-26-Mar-2023-08-43-AM-8321-16798007083x2.jpg",
    link: "/clothing/kurta"
  },
  {
    title: "Lehenga",
    imgSrc: "https://png.pngtree.com/thumb_back/fh260/background/20230610/pngtree-beautiful-woman-sitting-in-trees-in-an-orange-lehenga-image_2943037.jpg",
    link: "/clothing/lehenga"
  },
  {
    title: "Sherwani",
    imgSrc: "https://static.toiimg.com/thumb/imgsize-1894927,msid-66497138,width-375,height-210,resizemode-75/66497138.jpg",
    link: "/clothing/sherwani"
  },
  {
    title: "Anarkali Suit",
    imgSrc: "https://images.meesho.com/images/products/403539327/dfbl1_512.webp",
    link: "/clothing/anarkali"
  },
  {
    title: "Dhoti",
    imgSrc: "https://3.imimg.com/data3/YY/SQ/MY-6467156/111-500x500.jpg",
    link: "/clothing/dhoti"
  },
  {
    title: "Pattu Saree",
    imgSrc: "https://t4.ftcdn.net/jpg/00/17/49/37/360_F_17493746_NxmDWBzvxFZjwi2lmDXVddPTI4nlb44p.jpg",
    link: "/clothing/pattu-saree"
  },
  {
    title: "Chaniya Choli",
    imgSrc: "https://i.pinimg.com/originals/74/7c/bd/747cbd92b6ca251af38a4879a90f0501.jpg",
    link: "/clothing/chaniya-choli"
  },
  {
    title: "Onam Saree",
    imgSrc: "https://images.news18.com/ibnlive/uploads/2024/05/sai-pallavi-birthday-2024-05-4fe7913df39560ba13b17c7d88b7b3f0.jpg?impolicy=website&width=640&height=480",
    link: "/clothing/chaniya-choli"
  },
  {
    title: "Lungi",
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJhmMDPXlkU7Scnw7pcFUZUmDXKgHgPxVS0Q&s",
    link: "/clothing/lungi"
  },
  {
    title: "Bandhani",
    imgSrc: "https://t3.ftcdn.net/jpg/09/91/86/66/360_F_991866619_ReDQRYpuPixn89lxbChgYaveFP0W95lg.webp",
    link: "/clothing/bandhani"
  },
  {
    title: "Phiran",
    imgSrc: "https://www.shutterstock.com/image-photo/pahalgam-kashmir-india-january-31-260nw-1994329586.jpg",
    link: "/clothing/phiran"
  },
  {
    title: "Patiala Suit",
    imgSrc: "data:image/jpeg;base64,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",
    link: "/clothing/patiala-suit"
  },
  {
    title: "Mekhela Chador",
    imgSrc: "https://www.fabindia.com/ccstore/v1/images/?source=/file/v2166942988504065981/products/10487807NA.f.354412.jpg",
    link: "/clothing/mekhela-chador"
  },
  {
    title: "Pheran",
    imgSrc: "https://www.kashmirstore.in/wp-content/uploads/2020/11/traditional-kashmiri-wear-pheran-3.jpg",
    link: "/clothing/pheran"
  },
  {
    title: "Angarkha",
    imgSrc: "https://static2.mirraw.com/images/10394182/image_medium.jpeg?1564815199",
    link: "/clothing/angarkha"
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

const TraditionalClothingPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleImageClick = (link) => {
    navigate(link);
  };

  const filteredClothingItems = clothingItems.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <NavBar />
      <SearchBarContainer>
        <SearchInput
          type="text"
          placeholder="Search for clothing..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <SearchButton>
          <SearchIcon />
          Search
        </SearchButton>
      </SearchBarContainer>

      <Container>
        <Title>Traditional Clothing of India</Title>
        <ClothingGrid>
          {filteredClothingItems.map((item, index) => (
            <ClothingCard key={index} onClick={() => handleImageClick(item.link)}>
              <Image src={item.imgSrc} alt={item.title} />
              <ClothingTitle>{item.title}</ClothingTitle>
            </ClothingCard>
          ))}
        </ClothingGrid>
      </Container>
    </div>
  );
};

export default TraditionalClothingPage;

// Styled Components
const Container = styled.div`
  background-color: #333;
  padding: 40px;
  text-align: center;
  min-height: 500px;
`;

const Title = styled.h1`
  color: #e63946;
  font-size: 3rem;
  font-family: 'Dancing Script', cursive;
  text-shadow: 2px 2px #f1faee;
`;

const ClothingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px; /* Increased gap between cards */
  justify-content: center;
  min-height: 400px;
`;

const ClothingCard = styled.div`
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

const ClothingTitle = styled.h2`
  font-size: 1.5rem;
  color: #264653;
  padding: 10px;
  font-family: 'Merriweather', serif;
`;
