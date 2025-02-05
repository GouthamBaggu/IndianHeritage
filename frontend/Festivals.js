import React, { useState } from 'react';
import styled from 'styled-components';
import NavBar from './NavBar3';
import { FaSearch } from 'react-icons/fa';

// Monuments Data with Categories and Descriptions
const festivals = [
  {
    title: "Diwali",
    imgSrc: "https://static.toiimg.com/photo/99615506.cms",
    category: "Religious",
    link: "/festivals/Diwali",
    description: "Diwali, the Festival of Lights, is celebrated by millions of people worldwide. It symbolizes the victory of light over darkness.",
    description1: "People celebrate Diwali by lighting lamps, bursting fireworks, and sharing sweets with loved ones. Families gather to perform prayers, known as pujas, and decorate their homes with colorful rangolis."
  },
  {
    title: "Holi",
    imgSrc: "https://cdn.zeebiz.com/sites/default/files/2024/03/25/285353-happy-holi-2024-wishes-images.jpg",
    category: "Religious",
    link: "/festivals/Holi",
    description: "Holi, known as the Festival of Colors, is celebrated with vibrant powders and water fights. It marks the arrival of spring and the victory of good over evil.",
    description1: "During Holi, people play with colored powders, sing songs, and enjoy festive foods. The celebration promotes social harmony and the rekindling of relationships."
  },
  {
    title: "Navratri",
    imgSrc: "https://economictimes.indiatimes.com/thumb/msid-94435649,width-1200,height-900,resizemode-4,imgsize-83170/navratri.jpg?from=mdr",
    category: "Religious",
    link: "/festivals/Navratri",
    description: "Navratri is a nine-night festival dedicated to the goddess Durga, symbolizing the triumph of good over evil. It is celebrated with dance, music, and fasting.",
    description1: "Each night is associated with different forms of the goddess, and people engage in traditional dances like Garba and Dandiya. Temples and homes are decorated, and elaborate prayers are conducted."
  },
  {
    title: "Children's Day",
    imgSrc: "https://m.media-amazon.com/images/I/A1Z0RXk+6cL._AC_UF1000,1000_QL80_.jpg",
    category: "National",
    link: "/festivals/Childrens-Day",
    description: "Children's Day in India is celebrated on November 14th, commemorating the birth anniversary of Pandit Jawaharlal Nehru, the first Prime Minister of India.",
    description1: "This day is dedicated to children, with special programs, events, and activities held in schools across the country to celebrate their spirit and potential."
  },
  {
    title: "Ganesh Chaturthi",
    imgSrc: "https://arunachalobserver.org/wp-content/uploads/2022/08/Ganesh-Chaturthi-Celebration-in-India.jpg",
    category: "Religious",
    link: "/festivals/Ganesh-Chaturthi",
    description: "Ganesh Chaturthi celebrates the birth of Lord Ganesha, the elephant-headed god of wisdom and prosperity. The festival lasts for ten days and involves elaborate celebrations.",
    description1: "Devotees bring home Ganesha idols, offer prayers, and participate in cultural events. The festival concludes with the immersion of idols in water, symbolizing a farewell to the deity."
  },
  {
    title: "Eid-ul-Fitr",
    imgSrc: "https://t3.ftcdn.net/jpg/08/53/81/52/240_F_853815225_F48fPN59FPY4UMlJrPwmoBB122jcJFmG.jpg",
    category: "Religious",
    link: "/festivals/Eid-ul-Fitr",
    description: "Eid-ul-Fitr marks the end of Ramadan, the holy month of fasting in Islam. It is a day of celebration and thanksgiving to Allah for the strength to complete the fast.",
    description1: "The day begins with a special prayer, followed by feasts, giving of alms (Zakat), and spending time with family and friends. It is a time for joy, reflection, and charity."
  },
  {
    title: "Krishna Janmashtami",
    imgSrc: "https://t3.ftcdn.net/jpg/08/80/95/36/240_F_880953624_UDtBay0PGO0wG966lKK2rxWAoCVvPD0n.jpg",
    category: "Religious",
    link: "/festivals/Krishna-Janmashtami",
    description: "Krishna Janmashtami celebrates the birth of Lord Krishna, a major deity in Hinduism. Devotees observe fasting and night vigils to commemorate this event.",
    description1: "Festivities include singing devotional songs, dancing, and enacting scenes from Krishna's life. Temples are decorated, and community celebrations bring people together."
  },
  {
    title: "Teachers Day",
    imgSrc: "https://storage-api.technicalpts.com/storage/thumbnails/1000178077-1725378792.jpg",
    category: "National",
    link: "/festivals/Teachers-Day",
    description: "Teachers Day is celebrated to honor teachers and recognize their contributions to education and society. In India, it is celebrated on September 5th.",
    description1: "On this day, students express their gratitude towards their teachers through various programs and events, highlighting the importance of educators in shaping future generations."
  },
  {
    title: "Onam",
    imgSrc: "https://t4.ftcdn.net/jpg/08/70/68/47/240_F_870684786_Kk9DzR7FB47TgEdQhCBxXAxYEny3aEVl.jpg",
    category: "Religious",
    link: "/festivals/Onam",
    description: "Onam is a harvest festival celebrated in Kerala, India, symbolizing prosperity and happiness. It is a time for family reunions and feasting.",
    description1: "People create beautiful flower carpets (Pookalam), enjoy traditional music and dance, and participate in boat races and grand feasts known as Onam Sadya."
  },
  
  
  {
    title: "Christmas",
    imgSrc: "https://mrtsbakery.com.au/cdn/shop/articles/christmas-in-july-australia_1456x.png?v=1716263510",
    category: "Religious",
    link: "/festivals/Christmas",
    description: "Christmas is celebrated on December 25th as the birth anniversary of Jesus Christ. It is a major festival for Christians around the world.",
    description1: "Festivities include decorating Christmas trees, exchanging gifts, and attending church services. Families gather to celebrate with special meals and traditions."
  },
  {
    title: "Makar Sankranti",
    imgSrc: "https://media.istockphoto.com/id/467314945/photo/musicians-with-decorated-bull-during-pongal-festival.jpg?s=612x612&w=0&k=20&c=rqXSQy7KXKoRXmxWoKvYH5ZBACCiQ_aMwR-imhyF1G4=",
    category: "Religious",
    link: "/festivals/Makar-Sankranti",
    description: "Makar Sankranti marks the transition of the sun into the zodiac sign of Capricorn. It is celebrated with various cultural festivities across India.",
    description1: "The festival is associated with kite flying, bonfires, and the preparation of traditional foods made from sesame seeds and jaggery. It is a harvest festival celebrated with joy and enthusiasm."
  },
  // Additional Festivals
  {
    title: "Gudi Padwa",
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwlLdciFc2pTMcardSngZ6OFC1vFSyrqaZyg&s",
    category: "Religious",
    link: "/festivals/Gudi-Padwa",
    description: "Gudi Padwa marks the Marathi New Year and is celebrated with great enthusiasm in Maharashtra.",
    description1: "People decorate their homes, hoist the Gudi (a decorated pole), and enjoy traditional sweets. The festival symbolizes new beginnings and prosperity."
  },
  {
    title: "Pongal",
    imgSrc: "https://files.prokerala.com/news/photos/imgs/800/women-prepare-sweet-pongal-on-the-occasion-of-635047.jpg",
    category: "Religious",
    link: "/festivals/Pongal",
    description: "Pongal is a multi-day harvest festival celebrated in Tamil Nadu, showcasing gratitude to the sun god.",
    description1: "Families prepare sweet rice dishes, engage in cultural activities, and decorate their homes, marking the end of the harvest season."
  },
  {
    title: "Maha Shivaratri",
    imgSrc: "https://t3.ftcdn.net/jpg/07/12/66/50/240_F_712665098_ySNtS0n7iYtuRD468V3cCcQyAKwVMi5H.jpg",
    category: "Religious",
    link: "/festivals/Maha-Shivaratri",
    description: "Maha Shivaratri is a Hindu festival dedicated to Lord Shiva, observed by fasting and night vigils.",
    description1: "Devotees participate in prayers and rituals, celebrating the divine union of Shiva and Shakti."
  },
  {
    title: "Bihu",
    imgSrc: "https://upload.wikimedia.org/wikipedia/commons/4/48/Bihu-Dance-assam.jpg",
    category: "Religious",
    link: "/festivals/Bihu",
    description: "Bihu is a major festival celebrated in Assam, marking the Assamese New Year and the start of the harvest season.",
    description1: "It includes traditional dance, music, and feasting, fostering a sense of community and joy."
  },
  {
    title: "Rath Yatra",
    imgSrc: "https://theindiasaga.com/wp-content/uploads/2024/07/Untitled-design-84.png",
    category: "Religious",
    link: "/festivals/Rath-Yatra",
    description: "Rath Yatra is a grand festival celebrated in Puri, Odisha, honoring Lord Jagannath.",
    description1: "Devotees pull gigantic chariots through the streets, showcasing faith and devotion."
  },
  {
    title: "Baisakhi",
    imgSrc: "https://m.economictimes.com/thumb/msid-99319887,width-1200,height-900,resizemode-4,imgsize-179308/baisakhi-2023-date-significance-of-vaisakhi-sikh-new-year-harvest-festival.jpg",
    category: "Religious",
    link: "/festivals/Baisakhi",
    description: "Baisakhi marks the harvest season in Punjab and the Punjabi New Year.",
    description1: "People celebrate with traditional music, dance, and community gatherings."
  },
  {
    title: "Ram Navami",
    imgSrc: "https://t3.ftcdn.net/jpg/01/09/01/40/240_F_109014074_pXmNMmZVszrJLEtnoVnT9FCX1RSwEdot.jpg",
    category: "Religious",
    link: "/festivals/Ram-Navami",
    description: "Ram Navami celebrates the birth of Lord Rama, an avatar of Vishnu.",
    description1: "Devotees observe fasts, recite prayers, and participate in processions."
  },
  {
    title: "Karva Chauth",
    imgSrc: "https://www.gorajasthan.travel/blog/wp-content/uploads/2021/05/Karwa-Chauth-1170x692-1-1170x675.png",
    category: "Religious",
    link: "/festivals/Karva-Chauth",
    description: "Karva Chauth is a fasting ritual observed by married women for the well-being of their husbands.",
    description1: "Women dress in traditional attire, pray, and break their fast after sighting the moon."
  },
  {
    title: "Lohri",
    imgSrc: " https://images.indianexpress.com/2017/01/lohri-759.jpg",
    category: "Harvest",
    link: "/festivals/Lohri",
    description: "Lohri is celebrated primarily in Punjab to mark the end of winter and the harvesting of crops. People gather around bonfires, singing and dancing to traditional folk songs.",
    description1: "It is a time for feasting on sugarcane, jaggery, and sesame seeds."
  },
  {
    title: "Hornbill Festival",
    imgSrc: "https://vajiram-prod.s3.ap-south-1.amazonaws.com/hornbill_festival_bb017d0594.jpg",
    category: "Cultural",
    link: "/festivals/Hornbill",
    description: "Held in Nagaland, the Hornbill Festival showcases the heritage and traditions of the Naga tribes. The festival includes traditional dances, music, and games.",
    description1: "Visitors can enjoy local crafts, taste unique cuisines, and witness the unity of various Naga tribes. This vibrant festival promotes tourism and cultural exchange."
  },
  {
    title: "Wangala Festival",
    imgSrc: "https://currentaffairs.adda247.com/wp-content/uploads/multisite/sites/5/2021/11/15082542/1600x960_170992-whatsapp-image-2020-11-05-at-111822-pm.jpg",
    category: "Harvest",
    link: "/festivals/Wangala",
    description: "Wangala is celebrated by the Garo tribe in Meghalaya and Assam. It is a post-harvest festival dedicated to the sun god, Saljong.",
    description1: "Also known as the Hundred Drums Festival, it involves traditional dances, music, and rituals. Drumming is a central element, and it symbolizes a thanksgiving for a bountiful harvest."
  },
  {
    title: "Losar",
    imgSrc: "https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2021/02/Losar-Festival-Ladakh.jpg?fit=1024%2C683&ssl=1",
    category: "New Year",
    link: "/festivals/Losar",
    description: "Losar is the Tibetan New Year, celebrated primarily in Ladakh and other Tibetan communities in India. It marks the beginning of the new year in the Tibetan calendar.",
    description1: "The festival includes religious rituals, folk dances, music, and feasting. It is a time for spiritual cleansing, family gatherings, and cultural celebrations."
  },
  {
    title: "Chapchar Kut",
    imgSrc: "https://utsav.gov.in/public/uploads/event_cover_image/event_104/16494130491959272254.jpg",
    category: "Cultural",
    link: "/festivals/Chapchar-Kut",
    description: "Chapchar Kut is the most popular festival of Mizoram, celebrated by the Mizo people. It marks the end of the agricultural season and is celebrated with traditional dance and music.",
    description1: "The festival highlights the unique culture of the Mizos through folk dances like Cheraw, also known as the bamboo dance, and various other performances."
  },
  {
    title: "Kharchi Puja",
    imgSrc: "https://www.adotrip.com/public/images/festivals/5c3f110ef11ee-kharchi%20puja%20Sight%20Seeing%20Tour.jpg",
    category: "Religious",
    link: "/festivals/Kharchi",
    description: "Kharchi Puja is celebrated in Tripura and involves worshipping the fourteen deities of Hindu mythology. The festival is rooted in local tribal culture.",
    description1: "The festival includes animal sacrifices, prayers, and purification rituals. It is a blend of traditional and tribal beliefs unique to the region."
  },
  {
    title: "Kumbhalgarh Festival",
    imgSrc: "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2023/11/30093340/feature-46-1600x900.jpg",
    category: "Cultural",
    link: "/festivals/Kumbhalgarh",
    description: "Held in the Kumbhalgarh Fort in Rajasthan, this festival celebrates the cultural heritage of Rajasthan. It features folk dances, music performances, and art exhibitions.",
    description1: "Visitors can experience the royal history of the fort, enjoy traditional music, and witness performances by talented artists from Rajasthan and beyond."
  },
  {
    title: "Bhandara Festival",
    imgSrc: "https://arunsaha.com/wp-content/uploads/sites/53/2019/07/PATTANKODOLI.jpg",
    category: "Religious",
    link: "/festivals/Bhandara",
    description: "Also known as the Somvati Utsav, this festival is celebrated in Maharashtra. Thousands of devotees throw turmeric powder on each other as a ritual.",
    description1: "The festival takes place at the Khandoba Temple in Jejuri and involves vibrant celebrations with music, dance, and turmeric powder covering the surroundings."
  },
  {
    title: "Hemis Festival",
    imgSrc: "https://www.csp.indica.in/wp-content/uploads/2022/08/fi-700x394.png",
    category: "Religious",
    link: "/festivals/Hemis",
    description: "The Hemis Festival is a two-day celebration held in the Hemis Monastery in Ladakh. It commemorates the birth of Guru Padmasambhava, the founder of Tibetan Buddhism.",
    description1: "Masked dances, traditional music, and religious ceremonies are part of the celebration. The colorful costumes and ornate masks are highlights of the event."
  },
  {
    title: "Dree Festival",
    imgSrc: "https://rgyan-flutter200503-dev.s3.ap-south-1.amazonaws.com/web/pg/eblogs/2018/05/Biggest-Fest-Arunachal-Pradesh..jpg",
    category: "Agricultural",
    link: "/festivals/Dree",
    description: "Dree is an agricultural festival celebrated by the Apatani tribe in Arunachal Pradesh. It is a prayer for a bountiful harvest and protection from pests.",
    description1: "Rituals include the sacrifice of animals, and people celebrate with traditional music, dance, and feasting. It reflects the strong agrarian roots of the Apatani tribe."
  },
  {
    title: "Mim Kut",
    imgSrc: "https://www.india-tours.com/images/festivals/mim-kut-festival/mim-kut3.jpg",
    category: "Harvest",
    link: "/festivals/Mim-Kut",
    description: "Celebrated in Nagaland and Manipur, Mim Kut is a post-harvest festival observed by the Kuki-Chin tribes. It is dedicated to the deceased and is marked by offerings of food and drink.",
    description1: "The festival includes traditional dances, music, and the sharing of homemade rice beer. It represents respect for ancestors and thanksgiving for the harvest."
  },
  {
    title: "Republic Day",
    imgSrc: "https://cdnjs.angroos.com/wp-content/uploads/2024/01/Republic-day-Wishes.jpg",
    category: "National",
    link: "/festivals/Republic-Day",
    description: "Republic Day is celebrated on January 26th each year, commemorating the adoption of the Constitution of India in 1950.",
    description1: "The day is marked by a grand parade showcasing India's military might and cultural diversity in New Delhi, along with flag-hoisting ceremonies across the country."
  },
  {
    title: "Independence Day",
    imgSrc: "data:image/jpeg;base64,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",
    category: "National",
    link: "/festivals/Independence-Day",
    description: "Independence Day is celebrated on August 15th, marking India's independence from British rule in 1947.",
    description1: "The day is celebrated with flag-hoisting ceremonies, parades, and cultural programs across the country, with the Prime Minister addressing the nation from the Red Fort."
  },
  {
    title: "Gandhi Jayanti",
    imgSrc: "https://t4.ftcdn.net/jpg/05/08/06/43/240_F_508064315_cwSWgQxLQz69FfJ946vwe9NFViYc70WQ.jpg",
    category: "National",
    link: "/festivals/Gandhi-Jayanti",
    description: "Gandhi Jayanti is celebrated on October 2nd to honor the birth of Mahatma Gandhi, the Father of the Nation.",
    description1: "The day is observed with prayer meetings and tributes to Gandhi, along with the celebration of Non-Violence Day."
  },
  {
    title: "National Unity Day",
    imgSrc: "https://i.pinimg.com/originals/2e/49/04/2e49040fa9e3f6d83dab3341a822e6ac.jpg",
    category: "National",
    link: "/festivals/National-Unity-Day",
    description: "National Unity Day is celebrated on October 31st to mark the birth anniversary of Sardar Vallabhbhai Patel, the Iron Man of India.",
    description1: "The day is observed to promote national integration and unity among the people of India."
  },
  {
    title: "Kisan Diwas",
    imgSrc: "https://d3jbu7vaxvlagf.cloudfront.net/small/v2/category_media/16398297729855_Fest_Kishan2_rahil_square.jpg?Expires=1735669800&Signature=kGn31BKLFLnWW6DPZM3KLOdKcb7wHu6P9AxVtR5J8EKzl4Kp~ac7DQfk4i2QMs-2ltaEKsd0lbY3njBVoknY04fZXX3ED3GpziIkmSlU7dOrJq1cgBVB-dt~bObJ-1Ihxd4QbDlJ3iQsmCfyUBfHiEd-hTGhtv0RRAkZO3iudoTJkTzjlGXeICY99MDfw3vxfWlL0mG2XxBQrZ1AJYOXiFtoHJUWU7THg3M0waQ5B6JoBjN07PMrLAOL8nw0vT~Hq97LbONot3jKUMK75IYYz1iEoqkIPm5JnS5i7aPiRk6ePPVR4RiAn5FkAol9GL8ISSFTApUjHdZKnnxx1tOoPw__&Key-Pair-Id=KY0B9P4EZXRDC",
    category: "National",
    link: "/festivals/Kisan-Diwas",
    description: "Kisan Diwas, or National Farmers' Day, is celebrated on December 23rd to honor the contributions of farmers in India.",
    description1: "The day is dedicated to raising awareness about the importance of agriculture and farmers' roles in the nation's economy."
  },
  {
    title: "National Handloom Day",
    imgSrc: "https://www.shutterstock.com/shutterstock/photos/2496590281/display_1500/stock-vector-national-handloom-day-of-india-celebration-concept-and-typography-vector-illustration-india-2496590281.jpg",
    category: "National",
    link: "/festivals/National-Handloom-Day",
    description: "National Handloom Day is celebrated on August 7th to promote the handloom industry and its contributions to the Indian economy.",
    description1: "The day aims to raise awareness about the importance of handlooms in India's cultural heritage and encourage consumers to buy handloom products."
  },
  {
    title: "National Science Day",
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0304hkGjHSej9EUSqcIxVVq2UHy7_52PpmQ&s",
    category: "National",
    link: "/festivals/National-Science-Day",
    description: "National Science Day is celebrated on February 28th to commemorate the discovery of the Raman Effect by Indian physicist C.V. Raman.",
    description1: "The day promotes scientific temper and encourages students to engage in scientific learning and activities."
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

const FestivalPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFestival, setSelectedFestival] = useState(null);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleImageClick = (festival) => {
    setSelectedFestival(festival);
  };

  const filteredFestivals = festivals.filter((festival) =>
    (selectedCategory === 'All' || festival.category === selectedCategory) &&
    festival.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <NavBar />
      <SearchBarContainer>
        <SearchInput
          type="text"
          placeholder="Search for a Festival..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <SearchButton>
          <SearchIcon />
          Search
        </SearchButton>
      </SearchBarContainer>
      {selectedFestival ? (
        <Container>
          <Title>{selectedFestival.title}</Title>
          <ModalImage src={selectedFestival.imgSrc} alt={selectedFestival.title} />
          <Description>{selectedFestival.description}</Description>
          <Description>{selectedFestival.description1}</Description>
          <BackButton onClick={() => setSelectedFestival(null)}>Back to Festivals</BackButton>
        </Container>
      ) : (
        <Container>
          <Title>Famous Indian Festivals</Title>
          <FilterContainer>
            <FilterButton onClick={() => handleCategoryChange('All')}>All</FilterButton>
            <FilterButton onClick={() => handleCategoryChange('National')}>National</FilterButton>
            <FilterButton onClick={() => handleCategoryChange('Religious')}>Religious</FilterButton>
          </FilterContainer>
          <MonumentsGrid>
            {filteredFestivals.map((festival, index) => (
              <MonumentCard key={index} onClick={() => handleImageClick(festival)}>
                <Image src={festival.imgSrc} alt={festival.title} />
                <MonumentTitle>{festival.title}</MonumentTitle>
              </MonumentCard>
            ))}
          </MonumentsGrid>
        </Container>
      )}
    </div>
  );
};

export default FestivalPage;

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
const ModalImage = styled.img`
  width: 35%;
  height: 350px;
  border-radius: 8px;
`;

const FilterContainer = styled.div`
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  gap: 20px;
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
  gap: 20px;
  justify-content: center;
  min-height: 400px;
`;

const MonumentCard = styled.div`
  background-color: #e9c46a;
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;
  width: 350px;
  height: 300px;
  margin-bottom: 20px;
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
  object-fit: cover;
`;

const MonumentTitle = styled.h2`
  font-size: 1.5rem;
  color: #264653;
  padding: 10px;
  font-family: 'Merriweather', serif;
`;

const Description = styled.p`
  color: #f1faee;
  font-size: 1.2rem;
  margin-top: 20px;
  font-family: 'Roboto', sans-serif;
`;

const BackButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #264653;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #2a9d8f;
  }
`;




