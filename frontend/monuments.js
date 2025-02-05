import React, { useState } from 'react';
//import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import NavBar from './NavBar3';
import { FaSearch } from 'react-icons/fa';

const monuments = [
  {
    title: "Taj Mahal",
    imgSrc: "https://www.travelandleisure.com/thmb/wdUcyBQyQ0wUVs4wLahp0iWgZhc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/taj-mahal-agra-india-TAJ0217-9eab8f20d11d4391901867ed1ce222b8.jpg",
    category: "Historical",
    description: "The Taj Mahal is an ivory-white marble mausoleum located on the right bank of the river Yamuna in Agra, Uttar Pradesh, India. Commissioned in 1631 by the Mughal Emperor Shah Jahan in memory of his beloved wife, Mumtaz Mahal, it stands as a symbol of love and loss. The monument features stunning Mughal architecture, characterized by its symmetry, intricate carvings, and reflective pools that enhance its beauty. This UNESCO World Heritage Site attracts millions of visitors annually, who marvel at its grandeur and the romantic history it represents.",
    description1: "Construction of the mausoleum was completed in 1648, but the entire complex, including the gardens and outbuildings, took an additional five years to finish. The architectural brilliance of the Taj Mahal incorporates elements from Persian, Islamic, and Indian styles, with the main dome rising to a height of 35 meters (115 feet). The gardens, designed in the Persian style, symbolize paradise on earth. Despite facing challenges such as pollution and environmental factors, the Taj Mahal remains an enduring symbol of India's rich cultural heritage and artistic excellence.",
    link: "/monuments/taj-mahal",
  },
  {
    title: "Qutub Minar",
    imgSrc: "https://www.indiasinvitation.com/wp-content/uploads/2016/09/Qutub-Minar.jpg",
    category: "Historical",
    description: "The Qutub Minar, located in Mehrauli, Delhi, is a UNESCO World Heritage Site and one of India’s most iconic monuments. Commissioned by Qutub-ud-din Aibak in 1193, the minaret stands approximately 73 meters (240 feet) tall, making it the tallest brick minaret in the world. Its architecture features five distinct storeys, each adorned with intricate carvings, verses from the Quran, and geometric patterns. The Qutub Minar exemplifies the artistic and architectural advancements of the time, showcasing a blend of Persian and Indian styles that has captivated visitors for centuries.",
    description1: "The Qutub Minar complex also includes the Quwwat-ul-Islam Mosque, one of India’s earliest surviving mosques, which was built using materials from demolished Hindu temples. This combination of structures highlights the religious and cultural syncretism of medieval India. Another remarkable feature is the Iron Pillar, renowned for its rust-resistant properties, which has intrigued historians and metallurgists for its advanced metallurgy. The Qutub Minar not only stands as a testament to the architectural prowess of the past but also as a symbol of the historical narrative of India's diverse cultural heritage.",
    link: "/monuments/qutub-minar",
  },
  {
    title: "Hawa Mahal",
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAKy-9Us7APjgYCIC9Q9ndHr4d0Wc5IFrACw&s",
    category: "Historical",
    description: "The Hawa Mahal, also known as the Palace of Winds, is located in Jaipur, Rajasthan, and was built in 1799 by Maharaja Sawai Jai Singh II. This architectural marvel was designed to allow royal women to observe street festivals without being seen, ensuring their privacy. The palace features a unique façade resembling a honeycomb, consisting of 953 small windows known as 'jharokhas', adorned with intricate latticework that enables air circulation and keeps the interiors cool, thus living up to its name.",
    description1: "The Hawa Mahal is a striking example of Rajput architecture and blends Islamic and Hindu styles. Its pink sandstone exterior, combined with delicate carvings and ornate details, makes it one of Jaipur's most photographed landmarks. Inside, the palace is arranged around a courtyard, showcasing a series of chambers and corridors that reflect the opulent lifestyle of the royal family. The Hawa Mahal is not only a significant historical site but also a symbol of the artistic and cultural richness of Rajasthan, attracting tourists from around the globe.",
    link: "/monuments/hawa-mahal",
  },
  {
    title: "Red Fort",
    imgSrc: "https://www.alightindia.com/cdn/uploads/postimages/ORIGINAL/Lal%20Qila%20%20Wendy--e3656d.jpg",
    category: "Historical",
    description: "The Red Fort, also known as Lal Qila, is a historic fortification situated in the city of Delhi, India. Constructed in 1638 by the Mughal Emperor Shah Jahan, it served as the main residence of Mughal emperors for nearly 200 years until British colonial rule. The fort is renowned for its massive red sandstone walls, which stretch over 2 kilometers (1.2 miles), and its exquisite architectural features, including the Diwan-i-Aam (Hall of Public Audience) and the Diwan-i-Khas (Hall of Private Audience), which reflect the grandeur of Mughal architecture.",
    description1: "The Red Fort is not only a stunning example of Mughal architecture but also a symbol of India's rich history and struggle for independence. It was declared a UNESCO World Heritage Site in 2007 due to its historical significance and architectural beauty. The fort complex also hosts several museums that showcase artifacts from the Mughal era, adding to its cultural value. Every year on Independence Day, the Prime Minister hoists the national flag at the Red Fort, making it a focal point for national celebrations and a reminder of India's journey towards freedom.",
    link: "/monuments/red-fort",
  },
  {
    title: "Ajanta and Ellora Caves",
    imgSrc: "https://breathedreamgo.com/wp-content/uploads/2010/03/India-for-Beginners-custom-tours-5.jpg",
    category: "Temples",
    description: "The Ajanta and Ellora Caves are a remarkable group of rock-cut monuments located in Maharashtra, India. The Ajanta Caves, dating back to the 2nd century BCE to the 6th century CE, are renowned for their stunning paintings and intricate sculptures depicting the life of Buddha. The caves served as monastic quarters for Buddhist monks, and the artistry within showcases the heights of ancient Indian craftsmanship, representing a significant era in Buddhist art and architecture.",
    description1: "In contrast, the Ellora Caves, carved between the 5th and 10th centuries CE, feature a unique amalgamation of Hindu, Buddhist, and Jain monuments, reflecting the religious harmony that characterized the region. The most iconic structure among them is the Kailasa Temple, an engineering marvel that was hewn from a single rock and intricately carved to depict various deities and scenes from Hindu mythology. Both sites are UNESCO World Heritage Sites and continue to draw thousands of visitors and scholars eager to explore their historical and artistic significance.",
    link: "/monuments/ajanta-ellora-caves",
  },
  {
    title: "Hampi",
    imgSrc: "https://karnatakatourism.org/wp-content/uploads/2020/05/Hampi.jpg",
    category: "Temples",
    description: "Hampi is a UNESCO World Heritage Site situated in the southern Indian state of Karnataka. Once the capital of the Vijayanagara Empire, Hampi is famous for its stunning ruins that date back to the 14th century, showcasing a rich tapestry of history and culture. The landscape is adorned with ancient temples, palaces, and vibrant markets, reflecting the grandeur of South Indian architecture and urban planning of the time. The remnants of Hampi's royal complex and its striking boulders create a unique and picturesque setting.",
    description1: "The Virupaksha Temple is one of Hampi's most famous attractions, dedicated to Lord Shiva, featuring intricately carved pillars and a towering gopura (gateway) that draws visitors from all over the world. Hampi’s artistic and architectural achievements exemplify the brilliance of the Vijayanagara Empire, and its cultural heritage continues to thrive, making it a must-visit destination for history enthusiasts and travelers seeking to explore India's ancient roots.",
    link: "/monuments/hampi",
  },
  {
    title: "Mahabalipuram",
    imgSrc: "https://img.traveltriangle.com/blog/wp-content/uploads/2019/11/Mahabalipuram-Temples-25_nov.jpg",
    category: "Temples",
    description: "Mahabalipuram, also known as Mamallapuram, is a historic town located in Tamil Nadu, India, renowned for its rock-cut temples and intricate sculptures. The site served as a significant seaport during the Pallava dynasty in the 7th century and boasts unique monolithic structures, including the famous Shore Temple and the Pancha Rathas (Five Chariots). The exquisite craftsmanship and artistry displayed in the carvings highlight the engineering prowess of the Pallavas, making Mahabalipuram a focal point for art and architecture enthusiasts.",
    description1: "The Shore Temple, a UNESCO World Heritage Site, is particularly notable for its stunning seaside location and intricate carvings depicting various deities. The carvings at Mahabalipuram illustrate scenes from Hindu mythology and reflect the cultural significance of the region during its peak. The annual Mahabalipuram Dance Festival attracts artists and tourists alike, celebrating the rich artistic heritage of this historical site. Mahabalipuram remains a testament to the architectural excellence of ancient India and continues to be a popular destination for travelers seeking to immerse themselves in its history.",
    link: "/monuments/mahabalipuram",
  },
  {
    title: "Khajuraho Temples",
    imgSrc: "https://www.holidify.com/images/cmsuploads/compressed/shutterstock_1032564361_20200219140048.jpg",
    category: "Temples",
    description: "The Khajuraho Temples are a group of stunning Hindu and Jain temples located in Madhya Pradesh, India. Built between 950 and 1050 AD during the rule of the Chandela dynasty, these temples are renowned for their stunning erotic sculptures and intricate carvings, showcasing the art and culture of ancient India. Each temple is a masterpiece of architectural design, intricately adorned with intricate stonework that depicts various deities, celestial beings, and scenes of daily life, reflecting the vibrant socio-religious context of the period.",
    description1: "The temples are divided into three groups: Western, Eastern, and Southern. The Western group is the most famous, housing the iconic Kandariya Mahadeva Temple, dedicated to Lord Shiva. The Khajuraho Temples are a UNESCO World Heritage Site and attract visitors for their artistic brilliance and historical significance. Beyond their aesthetic appeal, the temples also offer insights into the spiritual beliefs and artistic traditions of ancient Indian society, making them a valuable heritage site that continues to fascinate scholars and tourists alike.",
    link: "/monuments/khajuraho-temples",
  },
  {
    title: "Brihadeeswarar Temple",
    imgSrc: "https://www.cholaimpressions.com/Blog%20Images/Culture%20And%20Tourism/4193143492_ca23db0df4_o.jpg",
    category: "Temples",
    description: "The Brihadeeswarar Temple, located in Thanjavur, Tamil Nadu, is a remarkable example of Tamil architecture and a UNESCO World Heritage Site. Constructed in the 11th century by Raja Raja Chola I, the temple is dedicated to Lord Shiva and is known for its grand scale and intricate craftsmanship. The temple's central dome, which rises to a height of 66 meters (217 feet), is one of the tallest of its kind in the world and showcases the engineering capabilities of the Chola dynasty, reflecting their commitment to artistic excellence and architectural innovation.",
    description1: "The Brihadeeswarar Temple is adorned with exquisite sculptures and frescoes that depict various deities and stories from Hindu mythology, contributing to its cultural significance. The temple complex also includes several smaller shrines and a massive courtyard, creating a serene atmosphere for worshippers and visitors alike. The architectural brilliance and historical importance of the Brihadeeswarar Temple make it a symbol of Tamil Nadu's rich cultural heritage, attracting scholars, pilgrims, and tourists who come to appreciate its grandeur and historical significance.",
    link: "/monuments/brihadeeswarar-temple",
  },
  
    {
      title: "Gateway of India",
      imgSrc: "https://thumbs.dreamstime.com/b/gateway-india-mumbai-gateway-india-arch-monument-built-th-century-mumbai-india-monument-was-138091856.jpg",
      category: "Historical",
      description: "The Gateway of India is an iconic arch-monument located in Mumbai, Maharashtra. Built in 1924 to commemorate the visit of King George V and Queen Mary to India, this impressive structure is constructed from yellow basalt and features Indo-Saracenic architectural elements. Standing at 26 meters (85 feet), it serves as a symbol of the city and has become a popular tourist destination.",
      description1: "Overlooking the Arabian Sea, the Gateway of India offers stunning views and is often the starting point for visitors exploring Mumbai. The monument is flanked by the Taj Mahal Palace Hotel, adding to the grandeur of the location. Events and celebrations often take place here, making it a vibrant hub for both locals and tourists alike, representing the rich history and cultural tapestry of Mumbai.",
      link: "/monuments/gateway-of-india",
    },
    {
      title: "Lotus Temple",
      imgSrc: "https://c4.wallpaperflare.com/wallpaper/242/693/230/lotus-temple-wallpaper-preview.jpg",
      category: "Religious",
      description: "The Lotus Temple, located in Delhi, is a Bahá'í House of Worship that is notable for its flower-like architecture. Completed in 1986, this magnificent temple features 27 free-standing marble petals arranged in three clusters, forming a lotus shape. The temple is open to people of all faiths and emphasizes the Bahá'í principles of unity and peace.",
      description1: "Surrounded by beautiful gardens, the Lotus Temple serves as a serene place for meditation and reflection. Its stunning design and tranquil environment attract thousands of visitors daily, making it one of the most visited religious structures in the world. The temple’s architectural brilliance, combined with its message of inclusivity and harmony, makes it a significant landmark in modern India.",
      link: "/monuments/lotus-temple",
    },
    {
      title: "Birla Mandir",
      imgSrc: "https://media.istockphoto.com/id/515751118/photo/birla-mandir-kolkata.jpg?s=612x612&w=0&k=20&c=LtBV1xAlYuoLUlBo4xoP6cA7YB69vbNkWQo0JvE2dwg=",
      category: "Temples",
      description: "Birla Mandir is a famous Hindu temple located in various cities across India, with the most notable ones in Delhi, Jaipur, and Gwalior. Built by the Birla family, these temples are known for their exquisite architecture, intricate carvings, and serene ambiance. The Delhi Birla Mandir, dedicated to Lord Laxminarayan, was completed in 1939 and features beautiful marble and red sandstone, showcasing the essence of modern Indian temple architecture.",
      description1: "Each Birla Mandir embodies a sense of spiritual peace and devotion. The temples often host various religious ceremonies, cultural programs, and festivals, attracting devotees and visitors alike. The Jaipur Birla Mandir is particularly famous for its grand structure and the breathtaking views it offers of the city. These temples serve as significant centers for worship and cultural heritage, symbolizing the philanthropic spirit of the Birla family.",
      link: "/monuments/birla-mandir",
    },
    {
      title: "Rani ki Vav",
      imgSrc: "https://static.langimg.com/photo/imgsize-203628,msid-90775372/navbharat-times.jpg",
      category: "Historical",
      description: "Rani ki Vav, located in Patan, Gujarat, is a unique stepwell that dates back to the 11th century and is a UNESCO World Heritage Site. Constructed by Queen Udayamati in memory of her husband, King Bhimdev I, this architectural marvel is known for its intricate carvings and elaborate design. The stepwell features seven levels of stairs, adorned with beautiful sculptures and motifs depicting various deities and celestial beings.",
      description1: "Rani ki Vav showcases the engineering ingenuity of ancient India, serving both functional and aesthetic purposes. The well's depth not only provided water but also served as a cool refuge during the harsh summers. The elaborate carvings and the grandeur of the structure make it a significant historical site, drawing visitors and scholars interested in India's rich architectural heritage.",
      link: "/monuments/rani-ki-vav",
    },
    {
      title: "Shore Temple",
      imgSrc: "https://media.istockphoto.com/id/579221042/photo/fantastic-art-design-of-monolithic-famous-shore-temple.jpg?s=612x612&w=0&k=20&c=8YqXhGxvIKIcb5OFeWvfcmBMTDPbuhFSHQA3ZHX-5f0=",
      category: "Temples",
      description: "The Shore Temple is a stunning architectural masterpiece located in Mahabalipuram, Tamil Nadu, and is part of a UNESCO World Heritage Site. Built during the Pallava dynasty in the 7th century, this temple complex consists of two main shrines dedicated to Lord Shiva and a smaller shrine to Lord Vishnu. It is renowned for its exquisite granite carvings and intricate sculptures that showcase the artistry of the time.",
      description1: "Perched on the shores of the Bay of Bengal, the Shore Temple is a remarkable example of early Dravidian architecture and serves as a testament to the Pallavas' engineering skills. Its strategic location offers breathtaking views of the sea, making it a popular destination for tourists and history enthusiasts. The temple's architectural beauty and historical significance highlight the rich cultural heritage of Tamil Nadu, making it a must-visit site for anyone exploring India's ancient past.",
      link: "/monuments/shore-temple",
    },
    {
      title: "Ajanta Caves",
      imgSrc: "https://www.shutterstock.com/image-photo/kailasa-temple-cave-16-ellora-600nw-1039920103.jpg",
      category: "Historical",
      description: "The Ajanta Caves, located in Maharashtra, are a group of 30 rock-cut Buddhist cave monuments dating back to the 2nd century BCE. These caves are renowned for their stunning frescoes and intricate sculptures, which depict the life of Buddha and Jataka tales. The intricate artistry and architecture of the caves have made them a UNESCO World Heritage Site and a major pilgrimage site for Buddhists.",
      description1: "The caves were excavated in two phases and showcase remarkable craftsmanship that reflects the artistry of ancient India. The stunning paintings and carvings illustrate the rich cultural heritage of Buddhism, attracting thousands of visitors each year. The Ajanta Caves not only serve as an important historical site but also provide insight into the spiritual and artistic traditions of early Indian civilization.",
      link: "/monuments/ajanta-caves",
    },
    {
      title: "Khajuraho Temples",
      imgSrc: "https://media.istockphoto.com/id/508628776/photo/sunset-over-kandariya-mahadeva-temple.jpg?s=612x612&w=0&k=20&c=YOpVZmLiY4ccl_aoWRJhfqLpNEDgjyOGuTAKbobCO-U=",
      category: "Temples",
      description: "The Khajuraho Temples, located in Madhya Pradesh, are famous for their stunning group of Hindu and Jain temples adorned with intricate erotic sculptures. Built between 950 and 1050 AD during the Chandela dynasty, these temples reflect the artistic excellence of Indian architecture and are a UNESCO World Heritage Site. Each temple is a masterpiece of intricate carvings that depict various aspects of life, love, and spirituality.",
      description1: "Khajuraho is renowned for its sensual sculptures that portray various forms of human emotion and interaction. The temples are divided into the Western, Eastern, and Southern groups, each showcasing distinct architectural styles and themes. The Khajuraho Temples attract tourists from around the world, offering a glimpse into India's rich cultural and artistic heritage.",
      link: "/monuments/khajuraho-temples",
    },
    {
      title: "Hampi",
      imgSrc: "https://t4.ftcdn.net/jpg/03/75/40/73/360_F_375407347_spt4AF5sxsIt9gBIKVzJl95tiQhEGNXy.jpg",
      category: "Historical",
      description: "Hampi, a UNESCO World Heritage Site located in Karnataka, was the capital of the Vijayanagara Empire in the 14th century. It is renowned for its stunning ruins, which include temples, palaces, and market streets, set against a backdrop of giant boulders and lush greenery. The Vijaya Vittala Temple, with its iconic stone chariot, is one of the most famous structures in Hampi and showcases the grandeur of Vijayanagara architecture.",
      description1: "Hampi's landscape is dotted with numerous temples and monuments, each telling a story of its rich history and cultural significance. The ruins are a testament to the architectural brilliance of the time, with intricate carvings and engineering marvels that continue to inspire visitors. Hampi is a paradise for history buffs and architecture enthusiasts, offering a captivating glimpse into India's glorious past.",
      link: "/monuments/hampi",
    },
    {
      title: "Sun Temple, Konark",
      imgSrc: "https://w0.peakpx.com/wallpaper/501/251/HD-wallpaper-the-sun-temple-konark-orissa-india-architecture-surya-sun-ancient-hinduism-lord-india-sun-god-skies-temple.jpg",
      category: "Temples",
      description: "The Sun Temple at Konark, located in Odisha, is a 13th-century temple dedicated to the Sun God, Surya. This architectural marvel is designed in the shape of a colossal chariot with intricately carved wheels and horses. The temple is a UNESCO World Heritage Site and is celebrated for its exquisite stone carvings that depict various deities, celestial beings, and scenes from daily life.",
      description1: "The temple's unique design and stunning sculptures highlight the artistic brilliance of ancient Indian craftsmen. Although partially in ruins today, the grandeur of the Sun Temple continues to captivate visitors. Konark's annual dance festival, held in front of the temple, showcases traditional dance forms and celebrates its rich cultural heritage, making it a prominent site for tourism and spirituality.",
      link: "/monuments/sun-temple-konark",
    },
    {
      title: "Meenakshi Amman Temple",
      imgSrc: "https://www.indiadivine.org/content/uploads/monthly_2020_02/large.meenakshi.jpg.d495b8777ff144ac6d65c07164c54965.jpg",
      category: "Temples",
      description: "The Meenakshi Amman Temple, located in Madurai, Tamil Nadu, is one of the most famous Hindu temples in India, dedicated to Goddess Meenakshi and her consort, Lord Shiva. This historic temple complex dates back to the 6th century and is renowned for its stunning architecture, intricate sculptures, and vibrant gopurams (gateway towers) that soar high above the city.",
      description1: "The temple's majestic halls and sanctums are adorned with intricate carvings that depict various deities and mythological tales. The annual Meenakshi Tirukalyanam festival, celebrating the divine marriage of Meenakshi and Shiva, attracts thousands of devotees and tourists. The Meenakshi Amman Temple is not just a place of worship but a symbol of Tamil culture and heritage, embodying the artistic and spiritual legacy of South India.",
      link: "/monuments/meenakshi-amman-temple",
    },
    {
      title: "Golconda Fort",
      imgSrc: "https://thumbs.dreamstime.com/b/golconda-fort-hyderabad-26222777.jpg",
      category: "Historical",
      description: "Golconda Fort, located near Hyderabad, is a magnificent fortress known for its impressive architecture and rich history. Originally a mud fort, it was later rebuilt in granite by the Qutb Shahi dynasty in the 16th century. The fort served as the capital of the kingdom and is renowned for its strategic location and formidable defenses.",
      description1: "The fort complex features several palaces, temples, and beautiful gardens, along with a unique acoustic system that allowed whispers to be heard at the entrance from the highest point of the fort. Visitors can explore the grand entrance gates, the impressive Balabag, and the remnants of the royal palace. The fort's historical significance is further highlighted by its role in the diamond trade, as it was once home to some of the world’s most famous diamonds, including the Koh-i-Noor. Golconda Fort is a testament to the engineering skills of its builders and offers breathtaking views of the surrounding landscape, making it a popular destination for history enthusiasts and tourists.",
      link: "/monuments/golconda-fort",
    },
    {
      title: "Sanchi Stupa",
      imgSrc: "https://media.istockphoto.com/id/675045082/photo/buddhist-stupa-in-sanchi-madhya-pradesh-india.jpg?s=612x612&w=0&k=20&c=Ct4TJqfsFVLhCHPCeHV2AehdCNiRkzkDcI_UzBSP8cw=",
      category: "Historical",
      description: "The Sanchi Stupa, located in Madhya Pradesh, is one of the oldest stone structures in India and a UNESCO World Heritage Site. Built during the reign of Emperor Ashoka in the 3rd century BCE, the stupa is a significant monument of Buddhist architecture and serves as a symbol of peace and enlightenment.",
      description1: "The Sanchi complex consists of several stupas, temples, and pillars, with the main stupa being the most prominent. The architecture showcases exquisite carvings depicting scenes from the life of Buddha and various Jataka tales. The circular dome of the stupa represents the universe, while the four gateways, intricately carved with relief sculptures, illustrate important events in Buddhist teachings. The site attracts visitors from around the world, serving as a pilgrimage destination and a place of historical interest. Sanchi’s serene environment and profound historical significance make it an essential part of India's cultural heritage.",
      link: "/monuments/sanchi-stupa",
    },
    {
      title: "Fatehpur Sikri",
      imgSrc: "https://vajiram-prod.s3.ap-south-1.amazonaws.com/Fatehpur_Sikri_c02f52298c.jpg",
      category: "Historical",
      description: "Fatehpur Sikri, located near Agra, is a UNESCO World Heritage Site that served as the capital of the Mughal Empire during the reign of Emperor Akbar in the late 16th century. This city is an architectural marvel, blending Persian, Islamic, and Indian styles into a unique urban design.",
      description1: "The complex includes stunning structures such as the Buland Darwaza, the largest gateway in the world, and the impressive Jama Masjid. Fatehpur Sikri showcases the grandeur of Mughal architecture with its red sandstone buildings and intricate carvings. The city was abandoned after just 15 years due to water scarcity, but it remains a well-preserved example of Mughal planning and aesthetics. Visitors can explore the beautiful courtyards, palaces, and religious sites that reflect the cultural fusion of the time. Fatehpur Sikri stands as a testament to the vision and creativity of Emperor Akbar, symbolizing a significant chapter in India's rich history.",
      link: "/monuments/fatehpur-sikri",
    },
    {
      title: "Chhatrapati Shivaji Terminus",
      imgSrc: "https://i.pinimg.com/736x/42/b2/de/42b2de23e565f18bcb204e479049b1b2.jpg",
      category: "Historical",
      description: "Chhatrapati Shivaji Terminus, formerly known as Victoria Terminus, is a historic railway station in Mumbai and a UNESCO World Heritage Site. Completed in 1888, the station is an excellent example of Victorian Gothic Revival architecture combined with Indian elements, making it one of the most iconic landmarks in the city.",
      description1: "The station features a grand façade with a central dome, ornate arches, and intricate carvings, showcasing the craftsmanship of the period. It serves as a vital hub for railway transport in Mumbai, handling thousands of passengers daily. The architectural brilliance and historical significance of Chhatrapati Shivaji Terminus reflect the colonial era's impact on India, and it continues to be a symbol of Mumbai's bustling life and cultural diversity.",
      link: "/monuments/chhatrapati-shivaji-terminus",
    },
    {
      title: "Tirupati",
      imgSrc: "https://wallpapers.com/images/hd/tirupati-balaji-evening-temple-u5jye4arrupbhb6v.jpg",
      category: "Temples",
      description: "The Tirupati Temple, also known as the Venkateswara Temple, is located in the town of Tirupati in Andhra Pradesh. This temple is one of the most visited pilgrimage sites in the world, attracting millions of devotees every year. Dedicated to Lord Venkateswara, an incarnation of Vishnu, the temple is renowned for its towering gopuram and its rich history, dating back to the 10th century. The rituals conducted at the temple, including the 'Seva' or service to the deity, are deeply rooted in tradition, and the temple's annual revenue is one of the highest among all religious institutions globally. Devotees often partake in the practice of tonsuring their heads as an offering, symbolizing humility and devotion.",
      description1: "The temple's architecture is a blend of Dravidian style, characterized by intricate carvings and ornate structures. Pilgrims visit Tirupati not only for spiritual fulfillment but also to experience the unique cultural heritage associated with the temple. The annual Brahmotsavam festival is a major event, featuring processions, rituals, and cultural performances, drawing devotees from all over the country.",
      link: "/temples/tirupati"
    },
    {
      title: "KanakaDurga Temple",
      imgSrc: "https://kanakadurgamma.org/static/media/IMG-20220413-WA0018@2x.7f356c08.png  ",
      category: "Temples",
      description: "Durgaamma Gudi, located on Indrakeeladri Hill in Vijayawada, Andhra Pradesh, is a renowned temple dedicated to Goddess Durga. This temple is notable for its picturesque location and rich history, attracting devotees and tourists alike. The temple features a stunning architecture with intricate sculptures and carvings, showcasing the artistic prowess of ancient artisans. The annual Navaratri festival sees a massive influx of devotees, who come to seek the blessings of the goddess.",
      description1: "The temple's history is steeped in mythology, with legends suggesting that the goddess once resided on the hill, bestowing her blessings on the surrounding areas. The temple offers a serene environment for meditation and prayer, and its beautiful setting amidst nature adds to its charm. The rituals performed here are deeply spiritual, allowing devotees to connect with the divine presence of Durga.",
      link: "/temples/durgaamma-gudi"
    },
    {
      title: "Anantha Padmanabha Swamy Temple",
      imgSrc: "https://img.jagranjosh.com/imported/images/E/GK/padmanabhaswamy-temple-kerala.jpg",
      category: "Temples",
      description: "The Anantha Padmanabha Swamy Temple, located in Thiruvananthapuram, Kerala, is a stunning example of Dravidian architecture. Dedicated to Lord Vishnu, this ancient temple is famous for its exquisite murals and intricate carvings. The deity is depicted reclining on the serpent Anantha, and the temple is a major pilgrimage site for Vaishnavites. The temple's rich history and religious significance date back to the 16th century, and it is a place of deep devotion for millions.",
      description1: "The temple is not only a spiritual center but also an architectural marvel, with its towering gopuram and meticulously crafted sculptures. Visitors are often awed by the serenity and beauty of the temple complex. The temple is also known for its strict dress code and entry regulations, making the visit a unique spiritual experience. The temple attracts devotees throughout the year, with special ceremonies and festivals that draw large crowds.",
      link: "/temples/anantha-padmanabha-swamy"
    },
    
    {
      title: "Kanyakumari Temple",
      imgSrc: "https://dharmakshethra.com/wp-content/uploads/2019/05/India-Kanyakumari-Temple-Heritage-Temples-and-places-Dharmakshethra.jpg",
      category: "Temples",
      description: "The Kanyakumari Temple, also known as the Kumari Amman Temple, is situated in Kanyakumari, Tamil Nadu, at the southernmost tip of India. This ancient temple is dedicated to the goddess Kanyakumari, who is believed to be an incarnation of Parvati. The temple's unique location, overlooking the confluence of the Arabian Sea, the Bay of Bengal, and the Indian Ocean, adds to its spiritual significance. The temple is famous for its vibrant festivals and rituals, attracting thousands of pilgrims and tourists.",
      description1: "The temple's architecture is characterized by its colorful murals and sculptures, which narrate the goddess's story and her role in the Hindu pantheon. Visitors often come to witness the mesmerizing sunrise and sunset views from the temple complex, making it a popular destination for spiritual seekers and travelers alike. The temple is an important pilgrimage site, especially during the annual festivals celebrating the goddess, where devotees perform rituals and offer prayers in devotion.",
      link: "/temples/kanyakumari"
    },
    {
      title: "Raghavendra Swamy Mutt",
      imgSrc: "https://media-cdn.tripadvisor.com/media/photo-s/12/46/5c/56/temple-building-view.jpg",
      category: "Temples",
      description: "The Raghavendra Swamy Mutt, located in Mantralayam, Andhra Pradesh, is a renowned religious institution dedicated to Saint Raghavendra, a prominent figure in the Dvaita philosophy. The mutt is a major pilgrimage site for followers of Raghavendra, who is believed to have lived in the 17th century. The temple complex is known for its peaceful ambiance and is visited by thousands of devotees seeking blessings and guidance from the saint.",
      description1: "The architecture of the mutt reflects traditional South Indian temple designs, with intricate carvings and serene surroundings conducive to meditation and prayer. The annual Mahotsava festival, commemorating the saint's life and teachings, draws large crowds and includes various cultural and spiritual activities. The mutt serves as a center for learning and spiritual growth, emphasizing the teachings of Raghavendra Swamy and promoting a path of devotion and service.",
      link: "/temples/raghavendra-swamy-math"
    }
  ];
  



const MonumentPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMonument, setSelectedMonument] = useState(null);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSelectedMonument(null); // Reset selection when changing categories
  };

  const handleImageClick = (monument) => {
    setSelectedMonument(monument);
  };

  const filteredMonuments = monuments.filter((monument) =>
    (selectedCategory === 'All' || monument.category === selectedCategory) &&
    monument.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  

  return (
    <div>
      <NavBar />
      <SearchBarContainer>
        <SearchInput
          type="text"
          placeholder="Search for a monument..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <SearchButton>
          <SearchIcon />
          Search
        </SearchButton>
      </SearchBarContainer>

      {selectedMonument ? (
        // Monument Details View
        <Container>
          <Title>{selectedMonument.title}</Title>
          <ModalImage src={selectedMonument.imgSrc} alt={selectedMonument.title} />
          <Description>{selectedMonument.description}</Description>
          <Description>{selectedMonument.description1}</Description>
          <BackButton onClick={() => setSelectedMonument(null)}>Back to Monuments</BackButton>
        </Container>
      ) : (
        // Monuments Grid View
        <Container>
          <Title>Famous Indian Monuments</Title>
          <FilterContainer>
            <FilterButton onClick={() => handleCategoryChange('All')}>All</FilterButton>
            <FilterButton onClick={() => handleCategoryChange('Historical')}>Historical</FilterButton>
            <FilterButton onClick={() => handleCategoryChange('Temples')}>Temples</FilterButton>
          </FilterContainer>
          <MonumentsGrid>
            {filteredMonuments.map((monument, index) => (
              <MonumentCard key={index} onClick={() => handleImageClick(monument)}>
                <Image src={monument.imgSrc} alt={monument.title} />
                <MonumentTitle>{monument.title}</MonumentTitle>
              </MonumentCard>
            ))}
          </MonumentsGrid>
        </Container>
      )}
    </div>
  );
};

export default MonumentPage;

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
const SearchBarContainer = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  margin: 20px 0;
`;

const SearchInput = styled.input`
  width: 300px;
  padding: 10px;
  font-size: 1rem;
  border: 2px solid #264653;
  border-radius: 5px;
  outline: none;
  transition: border-color 0.3s ease;
  &:focus {
    border-color: #2a9d8f;
  }
`;

const SearchButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #264653;
  color: white;
  border: none;
  border-radius: 5px;
  margin-left: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #2a9d8f;
  }
`;

const SearchIcon = styled(FaSearch)`
  margin-right: 5px;
`;
