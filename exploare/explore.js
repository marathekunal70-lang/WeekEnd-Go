// Complete Indian Tourist Data Matrix mapping State -> District -> Taluka -> City/Village -> Landmarks
const PLACES_DATA = [
    // MAHARASHTRA
    {
        id: "mha-trimbak",
        name: "Trimbakeshwar Holy Region",
        category: "religious",
        categoryLabel: "Religious",
        categoryIcon: "🛕",
        state: "Maharashtra",
        district: "Nashik",
        taluka: "Trimbakeshwar",
        city: "Trimbakeshwar",
        village: "Trimbak",
        landmarks: ["Trimbakeshwar Temple", "Kushavarta Kund"],
        description: "One of the 12 sacred Jyotirlinga shrines located at the source of Godavari river.",
        image: "https://images.unsplash.com/photo-1548013146-72479768bada",
        rating: 4.9,
        distance: 28
    },
    {
        id: "mha-igatpuri",
        name: "Igatpuri Hill Station",
        category: "natural",
        categoryLabel: "Nature",
        categoryIcon: "🌳",
        state: "Maharashtra",
        district: "Nashik",
        taluka: "Igatpuri",
        city: "Igatpuri",
        village: "Tringalwadi",
        landmarks: ["Camel Valley", "Bhatsa River Valley", "Tringalwadi Fort"],
        description: "Mist-covered Western Ghats hill station famous for fog-draped valleys and ancient forts.",
        image: "https://images.unsplash.com/photo-1500534623283-312aade485b7",
        rating: 4.7,
        distance: 45
    },
    {
        id: "mha-bhandardara",
        name: "Bhandardara Lake & Falls",
        category: "natural",
        categoryLabel: "Nature",
        categoryIcon: "🌳",
        state: "Maharashtra",
        district: "Ahilya Nagar (Ahmednagar)",
        taluka: "Akole",
        city: "Bhandardara",
        village: "Shendi",
        landmarks: ["Bhandardara Lake", "Randha Falls", "Wilson Dam", "Kalsubai Peak"],
        description: "Pristine lakeside nature getaway situated around Mt. Kalsubai, the highest peak in Maharashtra.",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
        rating: 4.8,
        distance: 70
    },
    {
        id: "mha-sula",
        name: "Sula Vineyards & Gangapur",
        category: "historical",
        categoryLabel: "Leisure & Scenic",
        categoryIcon: "🍷",
        state: "Maharashtra",
        district: "Nashik",
        taluka: "Nashik",
        city: "Nashik",
        village: "Govardhan",
        landmarks: ["Sula Vineyards", "Vineyard Tour", "Gangapur Dam"],
        description: "India's premier wine-growing hub offering vineyard tours alongside scenic lake backwaters.",
        image: "https://images.unsplash.com/photo-1473973266408-ed4e27abdd47",
        rating: 4.7,
        distance: 14
    },
    {
        id: "mha-anjaneri",
        name: "Anjaneri Hills & Caves",
        category: "adventure",
        categoryLabel: "Adventure",
        categoryIcon: "🏔️",
        state: "Maharashtra",
        district: "Nashik",
        taluka: "Trimbakeshwar",
        city: "Anjaneri",
        village: "Anjaneri",
        landmarks: ["Anjaneri Hills", "Anjaneri Caves", "Anjaneri Trek"],
        description: "Believed to be the birthplace of Lord Hanuman, popular for scenic mountain trekking.",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
        rating: 4.8,
        distance: 20
    },
    {
        id: "mha-saptashrungi",
        name: "Saptashrungi Gad",
        category: "religious",
        categoryLabel: "Religious",
        categoryIcon: "🛕",
        state: "Maharashtra",
        district: "Nashik",
        taluka: "Kalwan",
        city: "Vani",
        village: "Nanduri",
        landmarks: ["Saptashrungi Gad", "Saptashrungi Temple"],
        description: "A prominent Shakti Peeth pilgrimage site situated amidst seven hill peaks.",
        image: "https://images.unsplash.com/photo-1548013146-72479768bada",
        rating: 4.9,
        distance: 65
    },
    {
        id: "mha-pandavleni",
        name: "Pandavleni Caves & Ramkund",
        category: "historical",
        categoryLabel: "Historical",
        categoryIcon: "🏛️",
        state: "Maharashtra",
        district: "Nashik",
        taluka: "Nashik",
        city: "Nashik City",
        village: "Panchavati",
        landmarks: ["Pandavleni Caves", "Ramkund", "Godavari Ghat"],
        description: "24 ancient rock-cut Hinayana Buddhist caves and holy bath ghats on the Godavari river.",
        image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1",
        rating: 4.6,
        distance: 8
    },
    {
        id: "mha-mumbai-south",
        name: "South Mumbai Heritage Zone",
        category: "historical",
        categoryLabel: "Historical",
        categoryIcon: "🏛️",
        state: "Maharashtra",
        district: "Mumbai City",
        taluka: "Colaba",
        city: "Mumbai",
        village: "Colaba",
        landmarks: ["Gateway of India", "Chhatrapati Shivaji Maharaj Terminus", "Marine Drive", "Colaba Causeway"],
        description: "Iconic sea-front colonial architecture, bustling heritage markets, and world-famous promenades.",
        image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f",
        rating: 4.9,
        distance: 160
    },
    {
        id: "mha-juhu-elephanta",
        name: "Juhu & Elephanta Island",
        category: "beach",
        categoryLabel: "Beach & Heritage",
        categoryIcon: "🏖️",
        state: "Maharashtra",
        district: "Mumbai Suburban",
        taluka: "Andheri",
        city: "Mumbai",
        village: "Juhu",
        landmarks: ["Juhu Beach", "Prithvi Theatre", "Elephanta Caves"],
        description: "Golden sand beaches combined with UNESCO World Heritage rock-cut cave temples.",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        rating: 4.7,
        distance: 155
    },
    {
        id: "mha-borivali-bandra",
        name: "Sanjay Gandhi NP & Bandra Sea Link",
        category: "natural",
        categoryLabel: "Nature & Urban",
        categoryIcon: "🌳",
        state: "Maharashtra",
        district: "Mumbai Suburban",
        taluka: "Borivali",
        city: "Mumbai",
        village: "Bandra",
        landmarks: ["Sanjay Gandhi National Park", "Kanheri Caves", "Bandra-Worli Sea Link", "Mount Mary Church"],
        description: "Urban forest wildlife sanctuary paired with modern cable-stayed architectural marvels.",
        image: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66",
        rating: 4.8,
        distance: 150
    },
    {
        id: "mha-pune-heritage",
        name: "Pune City Heritage & Forts",
        category: "historical",
        categoryLabel: "Historical",
        categoryIcon: "🏛️",
        state: "Maharashtra",
        district: "Pune",
        taluka: "Haveli",
        city: "Pune",
        village: "Kondhanpur",
        landmarks: ["Shaniwar Wada", "Aga Khan Palace", "Pataleshwar Cave", "Sinhagad Fort", "Rajgad Fort"],
        description: "The cultural capital of Maharashtra featuring historic Maratha fortresses and palaces.",
        image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1",
        rating: 4.8,
        distance: 210
    },
    {
        id: "mha-lonavala-khandala",
        name: "Lonavala & Khandala Ghats",
        category: "adventure",
        categoryLabel: "Adventure & Lakes",
        categoryIcon: "🏔️",
        state: "Maharashtra",
        district: "Pune",
        taluka: "Maval",
        city: "Lonavala",
        village: "Karla",
        landmarks: ["Rajmachi", "Duke's Nose", "Lohagad Fort", "Bhaja Caves", "Karla Caves", "Pawna Lake", "Tiger Point"],
        description: "Premier Western Ghats hill station known for cliff viewpoints, ancient caves, and lake camping.",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
        rating: 4.8,
        distance: 180
    },
    {
        id: "mha-mahabaleshwar",
        name: "Mahabaleshwar & Panchgani",
        category: "natural",
        categoryLabel: "Nature & Hills",
        categoryIcon: "🌳",
        state: "Maharashtra",
        district: "Satara",
        taluka: "Mahabaleshwar",
        city: "Mahabaleshwar",
        village: "Panchgani",
        landmarks: ["Venna Lake", "Pratapgad Fort", "Mapro Garden", "Table Land", "Parsi Point", "Dhom Dam"],
        description: "Strawberry farms, vast flat volcanic tablelands, and majestic Maratha hill forts.",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
        rating: 4.9,
        distance: 290
    },
    {
        id: "mha-matheran",
        name: "Matheran Eco Hill Station",
        category: "natural",
        categoryLabel: "Nature",
        categoryIcon: "🌳",
        state: "Maharashtra",
        district: "Raigad",
        taluka: "Karjat",
        city: "Matheran",
        village: "Neral",
        landmarks: ["Panorama Point", "Echo Point", "Charlotte Lake", "Louisa Point"],
        description: "Asia's only automobile-free eco-sensitive hill station with red dust roads and deep valley views.",
        image: "https://images.unsplash.com/photo-1500534623283-312aade485b7",
        rating: 4.8,
        distance: 170
    },
    {
        id: "mha-alibaug",
        name: "Alibaug & Murud Coast",
        category: "beach",
        categoryLabel: "Beach & Forts",
        categoryIcon: "🏖️",
        state: "Maharashtra",
        district: "Raigad",
        taluka: "Alibaug",
        city: "Alibaug",
        village: "Nagaon",
        landmarks: ["Alibaug Beach", "Kolaba Fort", "Kihim Beach", "Nagaon Beach", "Murud-Janjira Fort"],
        description: "Coastal escape featuring beach water sports and impregnable sea forts surrounded by ocean.",
        image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2",
        rating: 4.7,
        distance: 230
    },
    {
        id: "mha-ratnagiri-malvan",
        name: "Konkan Coast & Tarkarli",
        category: "beach",
        categoryLabel: "Beach & Scuba",
        categoryIcon: "🏖️",
        state: "Maharashtra",
        district: "Sindhudurg",
        taluka: "Malvan",
        city: "Malvan",
        village: "Tarkarli",
        landmarks: ["Ganpatipule Temple", "Ratnadurg Fort", "Tarkarli Beach", "Scuba Diving", "Sindhudurg Fort", "Devbag Sangam"],
        description: "Clear blue sea beaches, pristine backwaters, scuba diving reefs, and historic ocean fortresses.",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        rating: 4.9,
        distance: 480
    },
    {
        id: "mha-kolhapur",
        name: "Kolhapur Cultural Zone",
        category: "religious",
        categoryLabel: "Religious & Heritage",
        categoryIcon: "🛕",
        state: "Maharashtra",
        district: "Kolhapur",
        taluka: "Karveer",
        city: "Kolhapur",
        village: "Panhala",
        landmarks: ["Mahalaxmi Temple", "New Palace", "Rankala Lake", "Panhala Fort", "Jyotiba Temple"],
        description: "Royal Maharashtrian heritage city famous for historic temples, spicy cuisine, and hill forts.",
        image: "https://images.unsplash.com/photo-1548013146-72479768bada",
        rating: 4.8,
        distance: 430
    },
    {
        id: "mha-shirdi",
        name: "Shirdi & Shani Shingnapur",
        category: "religious",
        categoryLabel: "Religious",
        categoryIcon: "🛕",
        state: "Maharashtra",
        district: "Ahilya Nagar (Ahmednagar)",
        taluka: "Rahata",
        city: "Shirdi",
        village: "Shingnapur",
        landmarks: ["Sai Baba Temple", "Dwarkamai", "Chavadi", "Shani Shingnapur Temple"],
        description: "World-famous spiritual pilgrimage centers drawing millions of devotees worldwide.",
        image: "https://images.unsplash.com/photo-1609946507788-2944d44d4847",
        rating: 4.9,
        distance: 85
    },
    {
        id: "mha-sambhaji-ajanta",
        name: "Ajanta & Ellora Caves",
        category: "historical",
        categoryLabel: "Historical",
        categoryIcon: "🏛️",
        state: "Maharashtra",
        district: "Chhatrapati Sambhajinagar",
        taluka: "Khuldabad",
        city: "Chhatrapati Sambhajinagar",
        village: "Ellora",
        landmarks: ["Ajanta Caves", "Ellora Caves", "Kailasa Temple", "Daulatabad Fort", "Bibi Ka Maqbara"],
        description: "UNESCO World Heritage rock-cut cave monuments featuring the monolithic Kailasa temple.",
        image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1",
        rating: 4.9,
        distance: 180
    },
    {
        id: "mha-kaas-lonar",
        name: "Kaas Plateau & Lonar Crater",
        category: "natural",
        categoryLabel: "Nature & Geological",
        categoryIcon: "🌳",
        state: "Maharashtra",
        district: "Buldhana",
        taluka: "Lonar",
        city: "Lonar",
        village: "Kaas",
        landmarks: ["Kaas Plateau", "Thoseghar Waterfalls", "Lonar Crater Lake", "Daitya Sudan Temple"],
        description: "Rare geological wonders featuring a hyper-velocity meteor impact crater lake and flower plateaus.",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
        rating: 4.9,
        distance: 320
    },
    {
        id: "mha-raigad-melghat",
        name: "Fort Raigad & Melghat Tiger Reserve",
        category: "historical",
        categoryLabel: "Historical & Wildlife",
        categoryIcon: "🏛️",
        state: "Maharashtra",
        district: "Raigad",
        taluka: "Mahad",
        city: "Mahad",
        village: "Pachad",
        landmarks: ["Raigad Fort", "Takmak Tok", "Melghat Tiger Reserve", "Gawilgarh Fort", "Malshej Ghat", "Harishchandragad"],
        description: "Capital fort of the Maratha Empire, mist-covered mountain passes, and tiger sanctuaries.",
        image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1",
        rating: 4.9,
        distance: 220
    },

    // GOA
    {
        id: "goa-north-beaches",
        name: "North Goa Beach Circuit",
        category: "beach",
        categoryLabel: "Beach & Forts",
        categoryIcon: "🏖️",
        state: "Goa",
        district: "North Goa",
        taluka: "Bardez",
        city: "Panaji",
        village: "Anjuna",
        landmarks: ["Calangute Beach", "Baga Beach", "Anjuna Flea Market", "Vagator", "Fort Aguada", "Chapora Fort"],
        description: "Vibrant coastal stretch renowned for golden beaches, Portuguese forts, and water sports.",
        image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2",
        rating: 4.8,
        distance: 450
    },
    {
        id: "goa-south-dudhsagar",
        name: "South Goa & Dudhsagar Waterfalls",
        category: "beach",
        categoryLabel: "Beach & Waterfalls",
        categoryIcon: "🏖️",
        state: "Goa",
        district: "South Goa",
        taluka: "Canacona",
        city: "Margao",
        village: "Palolem",
        landmarks: ["Palolem Beach", "Colva Beach", "Dudhsagar Waterfalls", "Basilica of Bom Jesus", "Se Cathedral"],
        description: "Serene palm-fringed beaches, four-tiered cascading waterfalls, and UNESCO heritage churches.",
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944",
        rating: 4.9,
        distance: 480
    },

    // GUJARAT
    {
        id: "guj-ahmedabad-statue",
        name: "Statue of Unity & Ahmedabad",
        category: "historical",
        categoryLabel: "Historical & Modern",
        categoryIcon: "🏛️",
        state: "Gujarat",
        district: "Narmada",
        taluka: "Garudeshwar",
        city: "Ekta Nagar",
        village: "Kevadia",
        landmarks: ["Statue of Unity", "Sabarmati Ashram", "Adalaj Stepwell", "Champaner-Pavagadh", "Laxmi Vilas Palace"],
        description: "World's tallest statue along with historic stepwells and grand royal palaces.",
        image: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a",
        rating: 4.9,
        distance: 380
    },
    {
        id: "guj-kutch-gir",
        name: "Rann of Kutch & Gir Forest",
        category: "wildlife",
        categoryLabel: "Wildlife & Desert",
        categoryIcon: "🐅",
        state: "Gujarat",
        district: "Kutch",
        taluka: "Bhuj",
        city: "Bhuj",
        village: "Dhordo",
        landmarks: ["White Rann of Kutch", "Gir National Park", "Asiatic Lion Safari", "Dwarkadhish Temple", "Somnath Temple"],
        description: "The endless white salt desert along with the sole sanctuary of wild Asiatic Lions in the world.",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
        rating: 4.9,
        distance: 650
    },

    // RAJASTHAN
    {
        id: "raj-jaipur-amber",
        name: "Jaipur Pink City Circuit",
        category: "historical",
        categoryLabel: "Historical",
        categoryIcon: "🏛️",
        state: "Rajasthan",
        district: "Jaipur",
        taluka: "Jaipur",
        city: "Jaipur",
        village: "Amber",
        landmarks: ["Amber Fort", "Jaigarh Fort", "City Palace", "Jantar Mantar", "Hawa Mahal", "Nahargarh Fort"],
        description: "Royal pink-hued palaces, hilltop forts, astronomical observatories, and vibrant bazaars.",
        image: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a",
        rating: 4.9,
        distance: 980
    },
    {
        id: "raj-udaipur-jodhpur",
        name: "Udaipur Lakes & Jodhpur Mehrangarh",
        category: "historical",
        categoryLabel: "Historical",
        categoryIcon: "🏛️",
        state: "Rajasthan",
        district: "Udaipur",
        taluka: "Girwa",
        city: "Udaipur",
        village: "Monsoon Palace",
        landmarks: ["Lake Pichola", "City Palace Udaipur", "Fateh Sagar", "Mehrangarh Fort", "Jaswant Thada"],
        description: "Romantic lake palaces combined with massive blue city fortress cliffs.",
        image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1",
        rating: 4.9,
        distance: 750
    },
    {
        id: "raj-jaisalmer-pushkar",
        name: "Jaisalmer Fort & Thar Desert",
        category: "adventure",
        categoryLabel: "Adventure & Desert",
        categoryIcon: "🐪",
        state: "Rajasthan",
        district: "Jaisalmer",
        taluka: "Jaisalmer",
        city: "Jaisalmer",
        village: "Sam Sand Dunes",
        landmarks: ["Jaisalmer Fort", "Sam Sand Dunes Desert Safari", "Kuldhara Village", "Pushkar Lake", "Brahma Temple"],
        description: "Golden sand fortresses, Thar desert camel safaris, and holy desert lake pilgrimage sites.",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
        rating: 4.8,
        distance: 1050
    },

    // DELHI & UTTAR PRADESH
    {
        id: "del-delhi-monuments",
        name: "Delhi Capital Heritage",
        category: "historical",
        categoryLabel: "Historical",
        categoryIcon: "🏛️",
        state: "Delhi",
        district: "New Delhi",
        taluka: "Mehrauli",
        city: "New Delhi",
        village: "Chandni Chowk",
        landmarks: ["India Gate", "Red Fort", "Qutub Minar", "Lotus Temple", "Akshardham Temple", "Humayun's Tomb"],
        description: "Monumental capital city spanning Mughal architecture, ancient minarets, and modern temples.",
        image: "https://images.unsplash.com/photo-1587474260584-136574528ed5",
        rating: 4.8,
        distance: 1200
    },
    {
        id: "up-agra-taj",
        name: "Taj Mahal & Fatehpur Sikri",
        category: "historical",
        categoryLabel: "Historical",
        categoryIcon: "🏛️",
        state: "Uttar Pradesh",
        district: "Agra",
        taluka: "Agra",
        city: "Agra",
        village: "Fatehpur Sikri",
        landmarks: ["Taj Mahal", "Agra Fort", "Buland Darwaza", "Mehtab Bagh"],
        description: "Home to the world-renowned white marble wonder of the world and grand red sandstone royal cities.",
        image: "https://images.unsplash.com/photo-1564507592333-c60657eea523",
        rating: 5.0,
        distance: 1100
    },
    {
        id: "up-varanasi-ayodhya",
        name: "Varanasi Ghats & Ayodhya",
        category: "religious",
        categoryLabel: "Religious",
        categoryIcon: "🛕",
        state: "Uttar Pradesh",
        district: "Varanasi",
        taluka: "Varanasi",
        city: "Varanasi",
        village: "Sarnath",
        landmarks: ["Dashashwamedh Ghat", "Kashi Vishwanath Temple", "Sarnath Dhamek Stupa", "Ram Mandir Ayodhya"],
        description: "The world's oldest living spiritual city with holy Ganges river evening Aartis.",
        image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc",
        rating: 4.9,
        distance: 1300
    },

    // UTTARAKHAND & HIMACHAL PRADESH
    {
        id: "uk-rishikesh-kedarnath",
        name: "Rishikesh, Mussoorie & Char Dham",
        category: "religious",
        categoryLabel: "Religious & Adventure",
        categoryIcon: "🏔️",
        state: "Uttarakhand",
        district: "Dehradun",
        taluka: "Rishikesh",
        city: "Rishikesh",
        village: "Mana",
        landmarks: ["Laxman Jhula", "Ganga Rafting", "Kedarnath Temple", "Badrinath", "Valley of Flowers", "Kempty Falls"],
        description: "Yoga capital of the world, white water river rafting, and Himalayan high-altitude shrines.",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
        rating: 4.9,
        distance: 1350
    },
    {
        id: "hp-shimla-manali",
        name: "Shimla, Manali & Spiti Valley",
        category: "adventure",
        categoryLabel: "Adventure & Snow",
        categoryIcon: "🏔️",
        state: "Himachal Pradesh",
        district: "Kullu",
        taluka: "Manali",
        city: "Manali",
        village: "Solang",
        landmarks: ["Mall Road Shimla", "Solang Valley Paragliding", "Rohtang Pass", "Dharamshala McLeod Ganj", "Chandratal Lake"],
        description: "Snow-capped Himalayan valleys, adventure paragliding, mountain passes, and ancient monasteries.",
        image: "https://images.unsplash.com/photo-1500534623283-312aade485b7",
        rating: 4.9,
        distance: 1500
    },

    // KASHMIR & LADAKH
    {
        id: "jk-srinagar-gulmarg",
        name: "Srinagar & Gulmarg Meadows",
        category: "natural",
        categoryLabel: "Nature & Snow",
        categoryIcon: "🏔️",
        state: "Jammu & Kashmir",
        district: "Srinagar",
        taluka: "Srinagar",
        city: "Srinagar",
        village: "Gulmarg",
        landmarks: ["Dal Lake Shikara Ride", "Mughal Gardens", "Gulmarg Gondola", "Betaab Valley Pahalgam"],
        description: "Paradise on Earth featuring houseboat cruises on serene lakes and snow gondola cable cars.",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
        rating: 5.0,
        distance: 1800
    },
    {
        id: "lad-leh-pangong",
        name: "Leh Ladakh & Pangong Lake",
        category: "adventure",
        categoryLabel: "Adventure",
        categoryIcon: "🏔️",
        state: "Ladakh",
        district: "Leh",
        taluka: "Leh",
        city: "Leh",
        village: "Hunder",
        landmarks: ["Pangong Lake", "Nubra Valley Bactrian Camel Safari", "Diskit Monastery", "Shanti Stupa", "Magnetic Hill"],
        description: "High-altitude cold desert, color-changing lakes, and dramatic Himalayan mountain landscapes.",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
        rating: 5.0,
        distance: 2000
    },

    // SOUTH INDIA (KARNATAKA, TAMIL NADU, KERALA)
    {
        id: "kar-hampi-coorg",
        name: "Hampi Ruins & Coorg Hills",
        category: "historical",
        categoryLabel: "Historical & Nature",
        categoryIcon: "🏛️",
        state: "Karnataka",
        district: "Vijayanagara",
        taluka: "Hampi",
        city: "Hampi",
        village: "Anegundi",
        landmarks: ["Virupaksha Temple", "Vittala Temple Stone Chariot", "Abbey Falls Coorg", "Mysore Palace", "Gokarna Om Beach"],
        description: "UNESCO boulder ruins of Vijayanagara empire alongside coffee-covered mountain hills.",
        image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1",
        rating: 4.9,
        distance: 620
    },
    {
        id: "tn-mahbalipuram-ooty",
        name: "Mahabalipuram & Ooty Hills",
        category: "historical",
        categoryLabel: "Historical & Hills",
        categoryIcon: "🏛️",
        state: "Tamil Nadu",
        district: "Nilgiris",
        taluka: "Udhagamandalam",
        city: "Ooty",
        village: "Doddabetta",
        landmarks: ["Shore Temple Mahabalipuram", "Ooty Toy Train", "Meenakshi Temple Madurai", "Dhanushkodi Beach", "Vivekananda Rock"],
        description: "Ancient monolith sea temples, Dravidian temple towers, and tea plantation hill stations.",
        image: "https://images.unsplash.com/photo-1548013146-72479768bada",
        rating: 4.9,
        distance: 950
    },
    {
        id: "ker-alleppey-munnar",
        name: "Alleppey Backwaters & Munnar",
        category: "natural",
        categoryLabel: "Nature & Backwaters",
        categoryIcon: "🌴",
        state: "Kerala",
        district: "Alappuzha",
        taluka: "Ambalappuzha",
        city: "Alappuzha",
        village: "Kumarakom",
        landmarks: ["Alleppey Houseboat Backwaters", "Munnar Tea Gardens", "Fort Kochi Chinese Nets", "Varkala Cliff Beach"],
        description: "God's Own Country offering luxurious houseboat cruises through palm-lined emerald backwaters.",
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944",
        rating: 5.0,
        distance: 1200
    },

    // EAST & NORTH EAST INDIA
    {
        id: "wb-kolkata-darjeeling",
        name: "Kolkata Culture & Darjeeling",
        category: "historical",
        categoryLabel: "Historical & Tea Hills",
        categoryIcon: "🏛️",
        state: "West Bengal",
        district: "Darjeeling",
        taluka: "Darjeeling",
        city: "Darjeeling",
        village: "Tiger Hill",
        landmarks: ["Victoria Memorial", "Howrah Bridge", "Tiger Hill Sunrise", "Darjeeling Himalayan Toy Train", "Sundarbans Mangrove"],
        description: "City of Joy colonial architecture combined with world-famous tea gardens and Himalayan views.",
        image: "https://images.unsplash.com/photo-1500534623283-312aade485b7",
        rating: 4.8,
        distance: 1600
    },
    {
        id: "meg-shillong-cherrapunji",
        name: "Cherrapunji & Dawki Clear Waters",
        category: "natural",
        categoryLabel: "Nature & Waterfalls",
        categoryIcon: "🌳",
        state: "Meghalaya",
        district: "East Khasi Hills",
        taluka: "Sohra",
        city: "Cherrapunji",
        village: "Nongriat",
        landmarks: ["Double Decker Living Root Bridge", "Nohkalikai Falls", "Umngot River Dawki", "Mawlynnong Cleanest Village"],
        description: "Abode of Clouds known for living root bridges, crystal clear glass rivers, and massive waterfalls.",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
        rating: 5.0,
        distance: 1950
    },
    {
        id: "ass-kaziranga-majuli",
        name: "Kaziranga Rhino Sanctuary & Majuli",
        category: "wildlife",
        categoryLabel: "Wildlife & Island",
        categoryIcon: "🦏",
        state: "Assam",
        district: "Golaghat",
        taluka: "Bokakhat",
        city: "Guwahati",
        village: "Majuli",
        landmarks: ["Kaziranga National Park Rhino Safari", "Kamakhya Temple", "Majuli River Island", "Umananda Island"],
        description: "World's largest population of Great One-Horned Rhinoceros and lush river islands.",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
        rating: 4.9,
        distance: 2100
    },
    {
        id: "and-havelock-radhanagar",
        name: "Havelock Island & Cellular Jail",
        category: "beach",
        categoryLabel: "Beach & Island",
        categoryIcon: "🏖️",
        state: "Andaman & Nicobar Islands",
        district: "South Andaman",
        taluka: "Port Blair",
        city: "Port Blair",
        village: "Havelock Island",
        landmarks: ["Radhanagar Beach", "Cellular Jail National Memorial", "Elephant Beach Snorkeling", "Ross Island"],
        description: "Pristine white sand island beaches with coral reefs, turquoise ocean waters, and freedom history.",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        rating: 5.0,
        distance: 2200
    }
];

const FAVORITES_KEY = "weekendgo_favorites";

function loadFavorites() {
    try {
        const raw = localStorage.getItem(FAVORITES_KEY);
        return new Set(raw ? JSON.parse(raw) : []);
    } catch {
        return new Set();
    }
}

const state = {
    category: "all",
    selectedState: "all",
    searchQuery: "",
    sortBy: "default",
    favorites: loadFavorites()
};

function escapeHTML(value) {
    const div = document.createElement("div");
    div.textContent = String(value);
    return div.innerHTML;
}

function debounce(fn, delay = 250) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), delay);
    };
}

function saveFavorites() {
    try {
        localStorage.setItem(FAVORITES_KEY, JSON.stringify(Array.from(state.favorites)));
    } catch {}
}

let elements = {};

function createCardHTML(place) {
    const isFavorited = state.favorites.has(place.id);
    const locationPath = `🇮🇳 ${place.village ? place.village + ', ' : ''}${place.city}, ${place.taluka} (Tq), ${place.district} (Dist), ${place.state}`;
    const landmarksText = place.landmarks ? place.landmarks.slice(0, 4).join(" • ") : "";

    return `
        <article class="place-card" data-id="${escapeHTML(place.id)}">
            <div class="image-container">
                <img
                    src="${escapeHTML(place.image)}"
                    alt="${escapeHTML(place.name)}"
                    loading="lazy"
                    decoding="async"
                >
                <span class="category-tag">
                    <span class="cat-icon" aria-hidden="true">${place.categoryIcon}</span> ${escapeHTML(place.categoryLabel)}
                </span>
                <button
                    class="favorite-btn${isFavorited ? " favorited" : ""}"
                    type="button"
                    aria-pressed="${isFavorited}"
                    aria-label="${isFavorited ? "Remove from favorites" : "Add to favorites"}"
                >${isFavorited ? "♥" : "♡"}</button>
            </div>

            <div class="place-content">
                <h3 class="place-title">${escapeHTML(place.name)}</h3>
                <div class="location-breadcrumb">📍 ${escapeHTML(locationPath)}</div>
                ${landmarksText ? `<div class="landmarks-list">✨ ${escapeHTML(landmarksText)}</div>` : ''}
                <p class="description">${escapeHTML(place.description)}</p>

                <div class="place-info">
                    <span>⭐ ${place.rating} / 5.0</span>
                    <span>📏 ${place.distance} km away</span>
                </div>

                <div class="card-buttons">
                    <button class="view-btn" type="button">View Details</button>
                    <button class="map-btn" type="button" data-query="${encodeURIComponent(place.name + ' ' + place.city + ' ' + place.state)}">📍 Google Maps</button>
                </div>
            </div>
        </article>
    `;
}

// Search and Filter Algorithm over State, District, Taluka, City, Village, and Landmark Names
function updateDisplay() {
    if (!elements.placesGrid || !elements.noResults || !elements.resultCount) return;

    let results = PLACES_DATA.filter((place) => {
        const matchesCategory = state.category === "all" || place.category === state.category;
        const matchesState = state.selectedState === "all" || place.state === state.selectedState;

        const q = state.searchQuery.toLowerCase().trim();
        const matchesSearch = !q ||
            place.name.toLowerCase().includes(q) ||
            (place.village && place.village.toLowerCase().includes(q)) ||
            place.city.toLowerCase().includes(q) ||
            place.taluka.toLowerCase().includes(q) ||
            place.district.toLowerCase().includes(q) ||
            place.state.toLowerCase().includes(q) ||
            (place.landmarks && place.landmarks.some(l => l.toLowerCase().includes(q)));

        return matchesCategory && matchesState && matchesSearch;
    });

    if (state.sortBy === "rating") {
        results = [...results].sort((a, b) => b.rating - a.rating);
    } else if (state.sortBy === "distance") {
        results = [...results].sort((a, b) => a.distance - b.distance);
    }

    if (results.length === 0) {
        elements.placesGrid.innerHTML = "";
        elements.noResults.style.display = "block";
        elements.resultCount.textContent = "No tourist destinations found";
    } else {
        elements.noResults.style.display = "none";
        elements.placesGrid.innerHTML = results.map(createCardHTML).join("");
        elements.resultCount.textContent = `Showing ${results.length} destination${results.length > 1 ? "s" : ""}`;
    }
}

function populateStateDropdown() {
    if (!elements.stateSelect) return;
    const states = Array.from(new Set(PLACES_DATA.map(p => p.state))).sort();
    states.forEach(st => {
        const opt = document.createElement("option");
        opt.value = st;
        opt.textContent = st;
        elements.stateSelect.appendChild(opt);
    });
}

function init() {
    elements = {
        menuBtn: document.getElementById("menuBtn"),
        navLinks: document.getElementById("navLinks"),
        categoryButtons: document.querySelectorAll(".category-btn"),
        placesGrid: document.getElementById("placesGrid"),
        resultCount: document.getElementById("resultCount"),
        noResults: document.getElementById("noResults"),
        searchInput: document.getElementById("searchInput"),
        searchForm: document.getElementById("searchForm"),
        sortSelect: document.getElementById("sortSelect"),
        stateSelect: document.getElementById("stateSelect"),
        locationBtn: document.getElementById("locationBtn"),
        locationText: document.getElementById("locationText")
    };

    populateStateDropdown();

    const queryParam = new URLSearchParams(window.location.search).get("q")?.trim() || "";
    if (queryParam) {
        state.searchQuery = queryParam;
        if (elements.searchInput) elements.searchInput.value = queryParam;
    }

    // Toggle Mobile Navigation
    elements.menuBtn?.addEventListener("click", () => {
        const isOpen = elements.navLinks.classList.toggle("show");
        elements.menuBtn.setAttribute("aria-expanded", String(isOpen));
    });

    // Handle Category Filter Buttons
    elements.categoryButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            elements.categoryButtons.forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");
            state.category = btn.dataset.category;
            updateDisplay();
        });
    });

    // Workable Live Search Input
    elements.searchInput?.addEventListener("input", debounce((e) => {
        state.searchQuery = e.target.value;
        updateDisplay();
    }, 250));

    elements.searchForm?.addEventListener("submit", (e) => {
        e.preventDefault();
        state.searchQuery = elements.searchInput.value;
        updateDisplay();
    });

    // State Dropdown Filter
    elements.stateSelect?.addEventListener("change", (e) => {
        state.selectedState = e.target.value;
        updateDisplay();
    });

    // Sorting Engine
    elements.sortSelect?.addEventListener("change", (e) => {
        state.sortBy = e.target.value;
        updateDisplay();
    });

    // Card Action Delegation
    elements.placesGrid?.addEventListener("click", (e) => {
        const card = e.target.closest(".place-card");
        if (!card) return;

        const id = card.dataset.id;
        const place = PLACES_DATA.find((p) => p.id === id);
        if (!place) return;

        // Favorite Toggle
        const favBtn = e.target.closest(".favorite-btn");
        if (favBtn) {
            if (state.favorites.has(id)) {
                state.favorites.delete(id);
                favBtn.classList.remove("favorited");
                favBtn.textContent = "♡";
            } else {
                state.favorites.add(id);
                favBtn.classList.add("favorited");
                favBtn.textContent = "♥";
            }
            saveFavorites();
            return;
        }

        // Detailed Place Modal View
        if (e.target.closest(".view-btn")) {
            alert(`📍 Full Destination Info:\n\n` +
                  `Title: ${place.name}\n` +
                  `Village: ${place.village || 'N/A'}\n` +
                  `City: ${place.city}\n` +
                  `Taluka: ${place.taluka}\n` +
                  `District: ${place.district}\n` +
                  `State: ${place.state}\n` +
                  `Key Landmarks: ${place.landmarks ? place.landmarks.join(', ') : 'N/A'}\n` +
                  `Rating: ⭐ ${place.rating}`);
            return;
        }

        // Google Maps Routing
        const mapBtn = e.target.closest(".map-btn");
        if (mapBtn) {
            const query = mapBtn.dataset.query;
            window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
        }
    });

    // Geolocation Support
    elements.locationBtn?.addEventListener("click", () => {
        if (!navigator.geolocation) {
            alert("Geolocation features are not supported by your browser.");
            return;
        }

        elements.locationBtn.textContent = "⌛ Locating...";
        elements.locationBtn.disabled = true;

        navigator.geolocation.getCurrentPosition(
            (pos) => {
                const { latitude, longitude } = pos.coords;
                elements.locationText.textContent = `Coordinates: ${latitude.toFixed(3)}°N, ${longitude.toFixed(3)}°E`;
                elements.locationBtn.textContent = "✓ Located";
                elements.locationBtn.disabled = false;
            },
            () => {
                alert("Unable to fetch location permissions.");
                elements.locationBtn.textContent = "🎯 Detect My Location";
                elements.locationBtn.disabled = false;
            }
        );
    });

    updateDisplay();
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
} else {
    init();
}