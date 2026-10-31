import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

// Local Asset Imports
import judaKaTalabImg from "../assets/juda-ka-talab.jpeg";
import summitShrineImg from "../assets/summit-shrine.jpeg"; 
import basecampImg from "../assets/basecamp.jpeg";
import campsiteMealImg from "../assets/campsite-meal.jpeg";
import judaGroupImg from "../assets/juda-group.jpeg";
import groupBatchImg from "../assets/group-batch2.jpeg";

const nandaDeviImg =
  "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80";
const harKiDunBannerImg =
  "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80";
const baliPassImg =
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80";
const roopkundImg =
  "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1200&q=80";
const gaumukhImg =
  "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80";

const treksDatabase = {
  "kedarkantha": {
    title: "Kedarkantha Winter Trek",
    region: "Uttarakhand • Garhwal Himalayas",
    description:
      "Kedarkantha is India's top winter snow trek starting from Sankri wooden village, leading to Juda Ka Talab frozen lake and 360-degree summit views.",
    bannerImage: summitShrineImg,
    sideImage: groupBatchImg,
    specifications: [
      { label: "Duration", value: "5 Days / 4 Nights", icon: "⏱️" },
      { label: "Max Altitude", value: "12,500 ft / 3,810 m", icon: "🏔️" },
      { label: "Trek Grade", value: "Easy to Moderate", icon: "📈" },
      { label: "Best Season", value: "Dec - April (Snow)", icon: "❄️" },
      { label: "Basecamp Hub", value: "Sankri Village", icon: "📍" },
    ],
    inclusions: [
      "All vegetarian meals during the trek freshly cooked at high camps",
      "Accommodation in all-weather dome tents / Sankri basecamp homestay",
      "Certified Mountaineering Expedition Leader & Local Support Crew",
      "Microspikes, gaiters, safety oxygen gear & pulse oximeter",
      "Forest permits, entry charges & camping permits",
    ],
    exclusions: [
      "Backpack offloading charges",
      "Personal clothing & personal trekking gear",
      "Travel insurance & emergency evacuation charges",
      "Any transport / meal costs incurred outside the itinerary",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Drive from Dehradun to Sankri Basecamp",
        distance: "200 km drive (approx 8 hrs)",
        altitude: "6,400 ft / 1,950 m",
        highlights: "Scenic Yamuna river drive & Garhwali homestays.",
        details: "Pick up early morning from Dehradun railway station. Drive through Mussoorie and Purola along the Tons river into Sankri village.",
        image: groupBatchImg,
        caption: "NandaPath expedition batch gathered at Sankri basecamp hub.",
      },
      {
        day: "Day 2",
        title: "Trek from Sankri to Juda Ka Talab",
        distance: "4 km trek (approx 4 hrs)",
        altitude: "9,100 ft / 2,773 m",
        highlights: "Pine forest trail & frozen alpine lake.",
        details: "Trek through dense pine and maple oak glades opening onto the legendary high-altitude lake at Juda Ka Talab.",
        image: judaGroupImg,
        caption: "NandaPath batch pausing beside Juda Ka Talab lake.",
      },
      {
        day: "Day 3",
        title: "Trek from Juda Ka Talab to Kedarkantha Basecamp",
        distance: "4 km trek (approx 3 hrs)",
        altitude: "11,250 ft / 3,429 m",
        highlights: "Open snow ridge walk & clear peak views.",
        details: "Ascend past oak thickets to the open meadows of Kedarkantha Basecamp, set directly under the towering summit peak.",
      },
      {
        day: "Day 4",
        title: "Basecamp to Kedarkantha Summit & descend to Hargaon",
        distance: "6 km trek (approx 7 hrs)",
        altitude: "12,500 ft / 3,810 m (Summit)",
        highlights: "3:00 AM summit push & 360-degree sunrise panorama.",
        details: "Early morning push to the summit shrine at 12,500 ft. Witness sunrise over Swargarohini, Black Peak, and Bandarpoonch, then descend to Hargaon.",
        image: summitShrineImg,
        caption: "Kedarkantha summit shrine national flag moment.",
      },
      {
        day: "Day 5",
        title: "Trek from Hargaon to Sankri & Drive back to Dehradun",
        distance: "6 km trek + 200 km drive",
        altitude: "Dehradun drop",
        highlights: "Valley descent and return transfer.",
        details: "Trek down to Sankri basecamp and board vehicle back to Dehradun for evening drop.",
      },
    ],
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110185.03487858632!2d78.1182419!3d31.0664878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908f97e682d3cd5%3A0x6b9d62886f76c5!2sSankri%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  },
  "bali-pass": {
    title: "Bali Pass High Altitude Expedition",
    region: "Uttarakhand • Garhwal Himalayas",
    description:
      "Connecting Yamunotri Valley with Har Ki Dun Valley, Bali Pass is a thrilling crossover trek offering grand views of Swargarohini, Bandarpoonch, and Ruinsara Tal.",
    bannerImage: baliPassImg,
    sideImage: basecampImg,
    specifications: [
      { label: "Duration", value: "8 Days / 7 Nights", icon: "⏱️" },
      { label: "Max Altitude", value: "16,200 ft / 4,940 m", icon: "🏔️" },
      { label: "Trek Grade", value: "Difficult / Technical Pass", icon: "📈" },
      { label: "Best Season", value: "May - June & Sep - Oct", icon: "☀️" },
      { label: "Basecamp Hub", value: "Sankri Basecamp", icon: "📍" },
    ],
    inclusions: [
      "All meals on trek freshly cooked at high camps",
      "Alpine dome tents, crampons, ice axes & safety ropes",
      "Technical Mountaineering Guide & support team",
      "Forest permits, entry charges & camping permits",
    ],
    exclusions: [
      "Backpack offloading charges",
      "Personal gear & insurance",
      "Transport outside itinerary",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Drive from Dehradun to Sankri Basecamp",
        distance: "200 km drive",
        altitude: "6,400 ft / 1,950 m",
        highlights: "Scenic Yamuna river drive.",
        details: "Pick up from Dehradun railway station early morning. Drive through Purola and Mori along Tons river into Sankri village.",
      },
      {
        day: "Day 2",
        title: "Drive to Taluka & Trek to Seema / Pauni Garaat",
        distance: "12 km drive + 10 km trek",
        altitude: "8,200 ft / 2,500 m",
        highlights: "Supin river valley trail.",
        details: "Drive to Taluka and trek alongside Supin river past wooden houses and walnut groves.",
      },
      {
        day: "Day 3",
        title: "Trek from Seema to Rainbasera",
        distance: "9 km trek",
        altitude: "10,200 ft / 3,110 m",
        highlights: "Ruinsara river confluence & waterfall trails.",
        details: "Ascend past the confluence of Supin and Ruinsara rivers into remote alpine forest.",
      },
      {
        day: "Day 4",
        title: "Trek from Rainbasera to Ruinsara Tal Lake",
        distance: "7 km trek",
        altitude: "11,800 ft / 3,600 m",
        highlights: "Sacred high alpine lake & Swargarohini views.",
        details: "Reach the pristine glacier-fed Ruinsara Lake surrounded by birch trees and snow peaks.",
      },
      {
        day: "Day 5",
        title: "Trek from Ruinsara Tal to Bali Pass Basecamp (Thanga)",
        distance: "6 km trek",
        altitude: "14,100 ft / 4,300 m",
        highlights: "Moraine ridge climbing & glacier camp.",
        details: "Climb steep moraine ridges onto the high altitude snowfields below Bali Pass.",
      },
      {
        day: "Day 6",
        title: "Bali Pass Basecamp across Pass (16,200 ft) to Damini Camp",
        distance: "9 km trek",
        altitude: "16,200 ft / 4,940 m",
        highlights: "Pass crossing with ropes & panoramic views of Kalanag.",
        details: "3:00 AM alpine start. Use crampons and fixed ropes to cross Bali Pass ridge and descend to Damini camp.",
      },
      {
        day: "Day 7",
        title: "Trek from Damini Camp to Jankichatti & Drive to Barkot",
        distance: "8 km trek + 15 km drive",
        altitude: "7,800 ft / 2,375 m",
        highlights: "Yamunotri holy trail descent.",
        details: "Descend to Jankichatti pilgrims' trail and drive to Barkot hotel stay.",
      },
      {
        day: "Day 8",
        title: "Drive from Barkot back to Dehradun",
        distance: "140 km drive",
        altitude: "Dehradun drop",
        highlights: "Return transfer.",
        details: "Morning transfer back to Dehradun railway station/airport for evening departure.",
      },
    ],
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110185.03487858632!2d78.1182419!3d31.0664878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908f97e682d3cd5%3A0x6b9d62886f76c5!2sSankri%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  },
  "roopkund": {
    title: "Roopkund Mystery Lake Trek",
    region: "Uttarakhand • Garhwal Himalayas",
    description:
      "World famous high-altitude glacial lake trek in the Trishul massif, renowned for its skeletal remains and vast Bugyal meadows at Ali & Bedni.",
    bannerImage: roopkundImg,
    sideImage: groupBatchImg,
    specifications: [
      { label: "Duration", value: "8 Days / 7 Nights", icon: "⏱️" },
      { label: "Max Altitude", value: "15,750 ft / 4,800 m", icon: "🏔️" },
      { label: "Trek Grade", value: "Moderate to Difficult", icon: "📈" },
      { label: "Best Season", value: "May - June & Sep - Oct", icon: "☀️" },
      { label: "Basecamp Hub", value: "Lohajung Village", icon: "📍" },
    ],
    inclusions: [
      "Nutritious vegetarian meals at all camps",
      "Dome tent accommodation & Lohajung homestay",
      "Certified Expedition Leader & Support Staff",
      "Forest entry & meadow permits",
    ],
    exclusions: ["Backpack offloading charges", "Personal gear & insurance"],
    itinerary: [
      {
        day: "Day 1",
        title: "Drive from Kathgodam / Dehradun to Lohajung",
        distance: "210 km drive",
        altitude: "7,600 ft / 2,316 m",
        highlights: "Kumaon hills & river confluence drive.",
        details: "Pick up from Kathgodam/Dehradun and drive through Almora and Kausani to Lohajung basecamp.",
      },
      {
        day: "Day 2",
        title: "Trek from Lohajung to Didna Village",
        distance: "8 km trek",
        altitude: "8,050 ft / 2,450 m",
        highlights: "Neel Ganga river cross & oak woodland.",
        details: "Descend to Neel Ganga river and climb through dense forest to Didna homestay village.",
      },
      {
        day: "Day 3",
        title: "Trek from Didna to Ali Bugyal Meadows",
        distance: "10.5 km trek",
        altitude: "11,500 ft / 3,500 m",
        highlights: "Asia's largest alpine velvet grass meadows.",
        details: "Climb through oak forest to open up onto the rolling green expanses of Ali Bugyal.",
      },
      {
        day: "Day 4",
        title: "Trek from Ali Bugyal to Ghora Lotani via Bedni Bugyal",
        distance: "7 km trek",
        altitude: "12,800 ft / 3,900 m",
        highlights: "Views of Mt. Trishul & Nanda Ghunti.",
        details: "Trek across Bedni Bugyal and ascend to Ghora Lotani high camp.",
      },
      {
        day: "Day 5",
        title: "Trek from Ghora Lotani to Bhagwabasa",
        distance: "5 km trek",
        altitude: "14,100 ft / 4,300 m",
        highlights: "Cave stone shelters & snow landscape.",
        details: "Ascend past Kalu Vinayak temple to reach the rocky snowbound Bhagwabasa camp.",
      },
      {
        day: "Day 6",
        title: "Bhagwabasa to Roopkund Lake & Junargali Pass, descend to Bedni",
        distance: "10 km trek",
        altitude: "15,750 ft / 4,800 m",
        highlights: "Skeletal lake edge & Junargali ridge overlook.",
        details: "3:00 AM push to Roopkund Glacial Lake. Option to reach Junargali pass ridge before descending back to Bedni Bugyal.",
      },
      {
        day: "Day 7",
        title: "Trek from Bedni Bugyal to Wan & Drive to Lohajung",
        distance: "12 km trek + 15 km drive",
        altitude: "7,600 ft / 2,316 m",
        highlights: "Layan forest descent.",
        details: "Trek down through cypress trees to Wan village and take vehicle transfer back to Lohajung.",
      },
      {
        day: "Day 8",
        title: "Drive from Lohajung back to Kathgodam",
        distance: "210 km drive",
        altitude: "Kathgodam drop",
        highlights: "Return transfer.",
        details: "Board morning transfer back to Kathgodam railway station.",
      },
    ],
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110185.03487858632!2d78.1182419!3d31.0664878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908f97e682d3cd5%3A0x6b9d62886f76c5!2sSankri%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  },
  "gaumukh-tapovan": {
    title: "Gaumukh Tapovan Glacier Expedition",
    region: "Uttarakhand • Garhwal Himalayas",
    description:
      "Sacred trail to the source of River Ganga at Gaumukh Glacier, leading to the high alpine meadows of Tapovan right at the foot of Mt. Shivling (21,466 ft).",
    bannerImage: gaumukhImg,
    sideImage: basecampImg,
    specifications: [
      { label: "Duration", value: "8 Days / 7 Nights", icon: "⏱️" },
      { label: "Max Altitude", value: "14,600 ft / 4,450 m", icon: "🏔️" },
      { label: "Trek Grade", value: "Moderate to Difficult", icon: "📈" },
      { label: "Best Season", value: "May - June & Sep - Oct", icon: "☀️" },
      { label: "Basecamp Hub", value: "Gangotri Temple Town", icon: "📍" },
    ],
    inclusions: [
      "All vegetarian meals prepared on trail",
      "Tent dome accommodation & Gangotri guesthouse",
      "Certified Mountaineering Leader & Guides",
      "Gangotri National Park entry permits & Bhagirathi permits",
    ],
    exclusions: ["Backpack offloading fee", "Personal gear & insurance"],
    itinerary: [
      {
        day: "Day 1",
        title: "Drive from Dehradun / Haridwar to Gangotri",
        distance: "240 km drive",
        altitude: "10,200 ft / 3,100 m",
        highlights: "Bhagirathi river drive & Uttarkashi stay.",
        details: "Drive through Mussoorie and Uttarkashi along Bhagirathi river to Gangotri temple base.",
      },
      {
        day: "Day 2",
        title: "Acclimatization Day at Gangotri",
        distance: "Local walks",
        altitude: "10,200 ft / 3,100 m",
        highlights: "Gangotri Temple Darshan & Surya Kund waterfall.",
        details: "Acclimatize with short hikes to Surya Kund and evening Ganga Aarti.",
      },
      {
        day: "Day 3",
        title: "Trek from Gangotri to Chirbasa",
        distance: "9 km trek",
        altitude: "11,800 ft / 3,600 m",
        highlights: "Pine trees trail & valley views.",
        details: "Enter Gangotri National Park and trek along Bhagirathi river to Chirbasa pine campsite.",
      },
      {
        day: "Day 4",
        title: "Trek from Chirbasa to Bhojwasa",
        distance: "5 km trek",
        altitude: "12,450 ft / 3,792 m",
        highlights: "Bhojpatra birch tree forests & Bhagirathi peaks.",
        details: "Short day climb to Bhojwasa campsite facing Bhagirathi I, II, III peaks.",
      },
      {
        day: "Day 5",
        title: "Trek from Bhojwasa to Gaumukh Glacier & Tapovan",
        distance: "9 km trek",
        altitude: "14,600 ft / 4,450 m",
        highlights: "Gaumukh Ganga source ice snout & Mt. Shivling base.",
        details: "Trek to Gaumukh ice snout, cross the moraine glacier, and climb steep ridge to Tapovan alpine meadow.",
      },
      {
        day: "Day 6",
        title: "Explore Tapovan Meadow & descend to Bhojwasa",
        distance: "8 km trek",
        altitude: "12,450 ft / 3,792 m",
        highlights: "Close-up view of Mt. Shivling & Meru peak.",
        details: "Morning reflection photos of Mt. Shivling before crossing glacier back to Bhojwasa camp.",
      },
      {
        day: "Day 7",
        title: "Trek from Bhojwasa back to Gangotri",
        distance: "14 km trek",
        altitude: "10,200 ft / 3,100 m",
        highlights: "Return descent walk.",
        details: "Trek down along Bhagirathi river to Gangotri base town.",
      },
      {
        day: "Day 8",
        title: "Drive from Gangotri back to Dehradun",
        distance: "240 km drive",
        altitude: "Dehradun drop",
        highlights: "Return transfer.",
        details: "Morning transfer from Gangotri back to Dehradun railway station/airport.",
      },
    ],
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110185.03487858632!2d78.1182419!3d31.0664878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908f97e682d3cd5%3A0x6b9d62886f76c5!2sSankri%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  },
  "pindari-glacier": {
    title: "Pindari Glacier Kumaon Expedition",
    region: "Uttarakhand • Kumaon Himalayas",
    description:
      "Classic Kumaon region glacier trek offering accessible ice routes, vibrant rhododendron forests, and dramatic mountain views of Changuch and Nanda Kot.",
    bannerImage: campsiteMealImg,
    sideImage: groupBatchImg,
    specifications: [
      { label: "Duration", value: "7 Days / 6 Nights", icon: "⏱️" },
      { label: "Max Altitude", value: "12,300 ft / 3,749 m", icon: "🏔️" },
      { label: "Trek Grade", value: "Moderate", icon: "📈" },
      { label: "Best Season", value: "April - June & Sep - Nov", icon: "☀️" },
      { label: "Basecamp Hub", value: "Khati Village / Bageshwar", icon: "📍" },
    ],
    inclusions: [
      "All vegetarian meals freshly prepared",
      "Khati village homestays and alpine dome tents",
      "Certified Expedition Leader",
      "Kumaon forest permits",
    ],
    exclusions: ["Backpack offloading fee", "Personal gear & insurance"],
    itinerary: [
      {
        day: "Day 1",
        title: "Drive from Kathgodam to Bageshwar / Loharkhet",
        distance: "180 km drive",
        altitude: "5,800 ft / 1,760 m",
        highlights: "Almora hill drive & Sarayu river views.",
        details: "Pick up from Kathgodam railway station and drive into Kumaon valley hub.",
      },
      {
        day: "Day 2",
        title: "Drive to Kharkiya & Trek to Khati Village",
        distance: "15 km drive + 5 km trek",
        altitude: "7,210 ft / 2,197 m",
        highlights: "Largest village in Pindar Valley.",
        details: "Drive to Kharkiya trailhead and trek to the iconic Khati village homestays.",
      },
      {
        day: "Day 3",
        title: "Trek from Khati to Dwali",
        distance: "11 km trek",
        altitude: "8,450 ft / 2,575 m",
        highlights: "Pindar river gorge trail & rhododendron forests.",
        details: "Trek through wooden bridges along Pindar river to Dwali campsite.",
      },
      {
        day: "Day 4",
        title: "Trek from Dwali to Phurkia",
        distance: "5 km trek",
        altitude: "10,695 ft / 3,260 m",
        highlights: "Alpine tree line transition.",
        details: "Short steep ascent towards the glacier base camp at Phurkia.",
      },
      {
        day: "Day 5",
        title: "Phurkia to Zero Point (Pindari Glacier) & return to Dwali",
        distance: "14 km trek",
        altitude: "12,300 ft / 3,749 m",
        highlights: "Zero point ice snout & Mt. Changuch views.",
        details: "Early morning push to Zero Point to witness Pindari glacier icefall before returning to Dwali.",
      },
      {
        day: "Day 6",
        title: "Trek from Dwali back to Khati Village",
        distance: "11 km trek",
        altitude: "7,210 ft / 2,197 m",
        highlights: "Homestay culture evening.",
        details: "Trek down along Pindar river and enjoy Kumaoni dinner at Khati.",
      },
      {
        day: "Day 7",
        title: "Trek to Kharkiya & Drive back to Kathgodam",
        distance: "5 km trek + 180 km drive",
        altitude: "Kathgodam drop",
        highlights: "Return transfer.",
        details: "Trek down to Kharkiya and board return vehicle to Kathgodam railway station.",
      },
    ],
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110185.03487858632!2d78.1182419!3d31.0664878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908f97e682d3cd5%3A0x6b9d62886f76c5!2sSankri%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  },
  "har-ki-dun": {
    title: "Har Ki Dun Valley Expedition",
    region: "Uttarakhand • Garhwal Himalayas",
    description:
      "Journey into the cradle of Garhwal culture through ancient wooden villages like Osla and Taluka to reach the amphitheater of Swargarohini peaks.",
    bannerImage: harKiDunBannerImg,
    sideImage: groupBatchImg,
    specifications: [
      { label: "Duration", value: "7 Days / 6 Nights", icon: "⏱️" },
      { label: "Max Altitude", value: "11,760 ft / 3,585 m", icon: "🏔️" },
      { label: "Trek Grade", value: "Easy to Moderate", icon: "📈" },
      { label: "Best Season", value: "April - June & Sep - Dec", icon: "☀️" },
      { label: "Basecamp Hub", value: "Sankri / Taluka Village", icon: "📍" },
    ],
    inclusions: [
      "All organic vegetarian meals prepared at base & high camps",
      "Homestay stays in wooden Garhwali houses and dome tents",
      "Certified Mountaineering Expedition Leader & Local Guides",
      "Forest permits, entry passes & sanctuary fees",
    ],
    exclusions: [
      "Backpack offloading fee",
      "Personal clothing, trekking poles & personal boots",
      "Travel & medical insurance",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Drive from Dehradun to Sankri",
        distance: "200 km drive",
        altitude: "6,400 ft / 1,950 m",
        highlights: "Tons river valley drive.",
        details: "Pick up from Dehradun and drive along Yamuna and Tons rivers to Sankri village.",
      },
      {
        day: "Day 2",
        title: "Drive to Taluka & Trek to Pauni Garaat",
        distance: "12 km drive + 10 km trek",
        altitude: "8,200 ft / 2,500 m",
        highlights: "Supin river trail & wooden bridges.",
        details: "Drive to Taluka trailhead and begin trek along the river bank to Pauni Garaat campsite.",
      },
      {
        day: "Day 3",
        title: "Trek from Pauni Garaat to Kalkattiyadhar",
        distance: "7 km trek",
        altitude: "9,800 ft / 2,987 m",
        highlights: "Osla heritage wooden village views.",
        details: "Climb past the centuries-old Osla village with views of terraced step fields.",
      },
      {
        day: "Day 4",
        title: "Kalkattiyadhar to Har Ki Dun Valley & back",
        distance: "10 km trek",
        altitude: "11,760 ft / 3,585 m",
        highlights: "Swargarohini massif & Jaundhar glacier backdrop.",
        details: "Explore the ancient Har Ki Dun valley sitting under Mt. Swargarohini.",
      },
      {
        day: "Day 5",
        title: "Kalkattiyadhar back to Pauni Garaat",
        distance: "7 km trek",
        altitude: "8,200 ft / 2,500 m",
        highlights: "River trail descent.",
        details: "Descend back through pine glades to Pauni Garaat river campsite.",
      },
      {
        day: "Day 6",
        title: "Trek to Taluka & Drive to Sankri",
        distance: "10 km trek + 12 km drive",
        altitude: "6,400 ft / 1,950 m",
        highlights: "Return to base camp homestay.",
        details: "Trek down to Taluka and drive back to Sankri basecamp.",
      },
      {
        day: "Day 7",
        title: "Drive from Sankri back to Dehradun",
        distance: "200 km drive",
        altitude: "Dehradun drop",
        highlights: "Return journey.",
        details: "Board morning transfer from Sankri back to Dehradun railway station.",
      },
    ],
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110185.03487858632!2d78.1182419!3d31.0664878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908f97e682d3cd5%3A0x6b9d62886f76c5!2sSankri%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  },
  "kwari-pass": {
    title: "Kwari Pass Winter Trek",
    region: "Uttarakhand • Garhwal Himalayas",
    description:
      "Curzon's Trail to Kwari Pass offers unmatched views of Mt. Nanda Devi (25,645 ft), Dronagiri, Kamet, and Trishul through vast oak forests and snow meadows above Auli.",
    bannerImage: nandaDeviImg,
    sideImage: basecampImg,
    specifications: [
      { label: "Duration", value: "6 Days / 5 Nights", icon: "⏱️" },
      { label: "Max Altitude", value: "12,516 ft / 3,815 m", icon: "🏔️" },
      { label: "Trek Grade", value: "Easy to Moderate", icon: "📈" },
      { label: "Best Season", value: "Nov - April (Winter Snow)", icon: "❄️" },
      { label: "Basecamp Hub", value: "Dhak Village / Joshimath", icon: "📍" },
    ],
    inclusions: [
      "Hot vegetarian meals prepared at high camps",
      "Tent dome accommodation & Joshimath stay",
      "Certified Expedition Leader",
    ],
    exclusions: ["Personal gear & insurance", "Backpack offloading"],
    itinerary: [
      {
        day: "Day 1",
        title: "Drive from Haridwar / Dehradun to Joshimath",
        distance: "250 km drive",
        altitude: "6,150 ft / 1,875 m",
        highlights: "Alaknanda river drive.",
        details: "Drive along river confluences into Joshimath hub.",
      },
      {
        day: "Day 2",
        title: "Drive to Dhak Village & Trek to Guling",
        distance: "12 km drive + 6 km trek",
        altitude: "9,600 ft / 2,926 m",
        highlights: "Oak forest trail.",
        details: "Trek from Dhak village to Guling campsite.",
      },
      {
        day: "Day 3",
        title: "Guling to Tali Campsite",
        distance: "5 km trek",
        altitude: "11,070 ft / 3,374 m",
        highlights: "Dronagiri peak view.",
        details: "Climb through snow glades to Tali camp.",
      },
      {
        day: "Day 4",
        title: "Tali to Kwari Pass Summit & back",
        distance: "8 km trek",
        altitude: "12,516 ft / 3,815 m",
        highlights: "Nanda Devi panorama.",
        details: "Summit push to Kwari Pass.",
      },
      {
        day: "Day 5",
        title: "Tali to Auli & Joshimath",
        distance: "8 km trek + drive",
        altitude: "8,200 ft / 2,500 m",
        highlights: "Gorson Bugyal.",
        details: "Descend to Auli ski slopes and drive to Joshimath.",
      },
      {
        day: "Day 6",
        title: "Joshimath to Dehradun",
        distance: "250 km drive",
        altitude: "Return drop",
        highlights: "Return drive.",
        details: "Return drop to Dehradun / Haridwar.",
      },
    ],
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109820.312948281!2d79.563847!3d30.554271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a79f323be45fbd%3A0xd680be4061a6c0bb!2sJoshimath%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  },
};

treksDatabase["kuari-pass"] = treksDatabase["kwari-pass"];

const similarTreksList = [
  { name: "Kedarkantha Trek", region: "Garhwal Himalayas", altitude: "12,500 ft", link: "/kedarkantha", image: summitShrineImg },
  { name: "Har Ki Dun Trek", region: "Garhwal Himalayas", altitude: "11,760 ft", link: "/har-ki-dun", image: harKiDunBannerImg },
  { name: "Bali Pass Expedition", region: "Garhwal Himalayas", altitude: "16,200 ft", link: "/bali-pass", image: baliPassImg },
  { name: "Pindari Glacier", region: "Kumaon Himalayas", altitude: "12,300 ft", link: "/pindari-glacier", image: campsiteMealImg },
];

const commonPackingList = {
  clothing: [
    { name: "Full Trekking Pants (2)", desc: "Quick-dry synthetic material", icon: "👖" },
    { name: "Heavy Down Jacket (1)", desc: "Sub-zero rated for high camps", icon: "🧥" },
    { name: "Thermal Base Layers", desc: "Merino wool or warm thermal", icon: "👕" },
  ],
  gear: [
    { name: "Trekking Boots", desc: "High-ankle waterproof grip boots", icon: "🥾" },
    { name: "50L Rucksack", desc: "With waterproof rain cover", icon: "🎒" },
    { name: "Trekking Poles", desc: "For balance & snow stability", icon: "🦯" },
  ],
  accessories: [
    { name: "UV Sunglasses", desc: "Snow glare & UV eye protection", icon: "🕶️" },
    { name: "Waterproof Gloves", desc: "Outer shell + inner fleece gloves", icon: "🧤" },
    { name: "Thermos Bottle", desc: "1L insulated warm water bottle", icon: "🥤" },
  ],
  medical: [
    { name: "Govt ID & Fitness Form", desc: "Essential forest permits", icon: "📄" },
    { name: "Power Bank", desc: "20,000 mAh for sub-zero battery protection", icon: "🔋" },
  ],
};

const horizontalPackingItems = [
  {
    category: "CLOTHING & LAYERS",
    tag: "ESSENTIAL",
    icon: "🧥",
    pills: ["Trekking Pants", "Down Jacket", "Thermals", "Fleece Jacket"],
  },
  {
    category: "FOOTWEAR & HANDS",
    tag: "MUST HAVE",
    icon: "🥾",
    pills: ["Waterproof Boots", "Woolen Socks", "Insulated Gloves"],
  },
  {
    category: "RUCKSACK & GEAR",
    tag: "GEAR",
    icon: "🎒",
    pills: ["50L Rucksack", "Sleeping Bag", "Trekking Poles", "Headlamp"],
  },
  {
    category: "HYGIENE & TOILETRIES",
    tag: "CARE",
    icon: "🧴",
    pills: ["SPF Sunscreen", "Quick-dry Towel", "SPF Lip Balm", "Wet Wipes"],
  },
  {
    category: "MEDICAL & POWER",
    tag: "SAFETY",
    icon: "🩹",
    pills: ["First Aid Kit", "Power Bank", "Thermos Bottle", "Govt ID"],
  },
];

export default function TrekDetail({ slug: propSlug }) {
  const { slug: urlSlug } = useParams();
  const rawSlug = (propSlug || urlSlug || "").toLowerCase().trim();

  const trekData = treksDatabase[rawSlug] || {
    title: `${rawSlug.replace(/-/g, " ").toUpperCase()} Expedition`,
    region: "Uttarakhand • Himalayan Wilderness",
    description: `Detailed itinerary and expedition guide for ${rawSlug.replace(/-/g, " ")}. Join NandaPath for this mountain trek in Garhwal & Kumaon.`,
    bannerImage: summitShrineImg,
    sideImage: groupBatchImg,
    specifications: [
      { label: "Duration", value: "6 Days / 5 Nights", icon: "⏱️" },
      { label: "Max Altitude", value: "12,000 ft / 3,650 m", icon: "🏔️" },
      { label: "Trek Grade", value: "Moderate", icon: "📈" },
      { label: "Best Season", value: "All Season", icon: "☀️" },
      { label: "Basecamp Hub", value: "Uttarakhand Base", icon: "📍" },
    ],
    inclusions: [
      "All vegetarian meals freshly cooked at high camps",
      "Accommodation in dome tents & basecamp homestay",
      "Certified Expedition Leader & Local Support Crew",
      "Forest permits & entry passes",
    ],
    exclusions: [
      "Backpack offloading charges",
      "Personal clothing & trekking gear",
      "Travel insurance & emergency evacuation",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Transfer to Basecamp",
        distance: "Scenic Mountain Drive",
        altitude: "Basecamp Hub",
        highlights: "Mountain valley drive.",
        details: "Morning pick up and transfer through mountain valleys to the expedition basecamp hub.",
      },
      {
        day: "Day 2",
        title: "Trek to High Meadow Camp",
        distance: "7 km trek",
        altitude: "High Camp Meadow",
        highlights: "Pine and oak forest trails.",
        details: "Begin trek ascending through oak forests and alpine streams to camp.",
      },
      {
        day: "Day 3",
        title: "Summit / Pass Crossing Push",
        distance: "8 km trek",
        altitude: "High Summit Altitude",
        highlights: "Panoramic Himalayan peak views.",
        details: "Early morning push to reach summit / high pass point and descend back to camp.",
      },
      {
        day: "Day 4",
        title: "Descent & Return Transfer",
        distance: "Descent + Drive",
        altitude: "Dehradun / Base Drop",
        highlights: "Return journey.",
        details: "Trek down to basecamp and board vehicle transfer back.",
      },
    ],
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110185.03487858632!2d78.1182419!3d31.0664878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908f97e682d3cd5%3A0x6b9d62886f76c5!2sSankri%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  };

  const [activeTab, setActiveTab] = useState("itinerary");
  const [activePackingTab, setActivePackingTab] = useState("clothing");
  const [expandedDay, setExpandedDay] = useState(0);
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false);
  const [copied, setCopied] = useState(false);

  const whatsappNumber = "+91 98765 43210";

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(whatsappNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen bg-sky-50/50 font-sans text-slate-800 pt-0 pb-24 relative">
      <Navbar />

      {/* HERO BANNER - FLUSH TO TOP OF SCREEN UNDER NAVBAR */}
      <section className="bg-[#142957] text-white pt-28 sm:pt-36 pb-12 sm:pb-20 px-4 sm:px-8 lg:px-12 shadow-inner">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs sm:text-sm font-black text-emerald-300 uppercase tracking-widest bg-emerald-500/20 px-3 py-1.5 rounded-lg border border-emerald-400/40">
                TRIPOTUDE EXPEDITION
              </span>
              <span className="text-xs sm:text-sm font-extrabold text-amber-300 uppercase tracking-widest bg-white/10 px-3 py-1.5 rounded-lg border border-white/20">
                {trekData.region}
              </span>
            </div>
            <h1 className="text-3xl sm:text-6xl font-black text-white leading-tight">
              {trekData.title}
            </h1>
            <p className="text-sm sm:text-xl text-sky-100 leading-relaxed font-medium max-w-3xl">
              {trekData.description}
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden border-2 border-white/30 shadow-2xl aspect-[16/10]">
              <img
                src={trekData.bannerImage}
                alt={trekData.title}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* KEY SPECIFICATIONS - LIGHT BLUE THEME */}
      <section className="bg-sky-50 border-b border-sky-100 py-8 sm:py-12 px-4 sm:px-8 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="bg-sky-100/70 rounded-3xl p-6 sm:p-8 border border-sky-200 shadow-sm">
            <h3 className="text-sm sm:text-base font-black uppercase tracking-widest text-sky-900 mb-6 pb-3 border-b border-sky-200">
              KEY TRIP SPECIFICATIONS
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
              {trekData.specifications.map((item, idx) => (
                <div 
                  key={idx} 
                  className="bg-sky-50 p-4 sm:p-5 rounded-2xl border border-sky-200 shadow-xs flex items-center gap-3 sm:gap-4"
                >
                  <span className="text-2xl sm:text-3xl p-2.5 sm:p-3 bg-sky-200/60 rounded-xl shrink-0">
                    {item.icon}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs sm:text-sm font-black text-sky-700 uppercase tracking-wider truncate">
                      {item.label}
                    </p>
                    <p className="text-sm sm:text-lg font-black text-[#142957] leading-tight mt-1">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* UPGRADED VISUAL PACKING SHOWCASE */}
      <section className="bg-sky-50/80 border-b border-sky-200/80 py-10 sm:py-14 px-4 sm:px-8 lg:px-12">
        <div className="max-w-[1400px] mx-auto space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-sky-200">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-sky-900 bg-sky-200 px-3 py-1 rounded-md">
                ESSENTIAL PACKING GUIDE
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-[#142957] mt-2">
                What Important Gear To Bring With You
              </h2>
            </div>
            <p className="text-xs sm:text-sm font-black text-sky-800 bg-sky-100/90 px-3 py-1.5 rounded-lg border border-sky-200">
              📷 Equipment Checklist for Himalayan Treks
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {horizontalPackingItems.map((guide, i) => (
              <div 
                key={i} 
                className="bg-sky-100/90 border border-sky-200 p-5 rounded-3xl shadow-xs flex flex-col justify-between hover:bg-sky-200/50 transition duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl p-2.5 bg-sky-50 rounded-2xl border border-sky-200 shadow-2xs">{guide.icon}</span>
                    <span className="text-[10px] font-black uppercase tracking-wider text-sky-900 bg-sky-200/80 px-2.5 py-1 rounded-md border border-sky-300">
                      {guide.tag}
                    </span>
                  </div>
                  
                  <h3 className="text-sm font-black text-[#142957] tracking-wide">
                    {guide.category}
                  </h3>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {guide.pills.map((pill, idx) => (
                      <span 
                        key={idx}
                        className="text-[11px] font-bold text-slate-800 bg-sky-50/90 px-2.5 py-1 rounded-lg border border-sky-200/80"
                      >
                        ✓ {pill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TAB NAVIGATION */}
      <section className="bg-sky-100/50 border-b border-sky-200 py-3 px-4 sm:px-8 lg:px-12">
        <div className="max-w-[1400px] mx-auto flex gap-6 sm:gap-10 text-sm sm:text-lg font-black text-[#142957] overflow-x-auto">
          {[
            { id: "itinerary", label: "Day by Day Itinerary" },
            { id: "inclusions", label: "Inclusions & Exclusions" },
            { id: "packing", label: "Packing List" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-3 uppercase tracking-wider border-b-4 transition whitespace-nowrap cursor-pointer ${
                activeTab === tab.id ? "border-[#142957] font-black text-[#142957]" : "border-transparent text-slate-500"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* TAB CONTENT */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-10 sm:py-16 space-y-12">
        
        {/* 1. ITINERARY TAB */}
        {activeTab === "itinerary" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 border-l-4 border-sky-300 ml-3 sm:ml-5 space-y-6 sm:space-y-10 pl-6 sm:pl-10">
              {trekData.itinerary.map((day, idx) => {
                const isExpanded = expandedDay === idx;
                return (
                  <div key={idx} className="relative">
                    <div className="absolute -left-[35px] sm:-left-[51px] top-4 h-7 w-7 sm:h-9 sm:w-9 rounded-full bg-[#142957] text-white text-xs sm:text-base font-black flex items-center justify-center ring-4 ring-sky-100 shadow-md">
                      {idx + 1}
                    </div>

                    <div
                      onClick={() => setExpandedDay(isExpanded ? null : idx)}
                      className="bg-sky-100/70 rounded-3xl p-5 sm:p-8 border border-sky-200 shadow-xs space-y-4 cursor-pointer hover:border-sky-400 transition"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <span className="text-xs sm:text-sm font-black text-sky-900 bg-sky-200/80 px-3 py-1 rounded-lg">
                            {day.day}
                          </span>
                          <h3 className="text-sm sm:text-xl font-black text-[#142957] leading-snug">
                            {day.title}
                          </h3>
                        </div>
                        <span className="text-sky-700 font-black text-xl sm:text-2xl">
                          {isExpanded ? "−" : "+"}
                        </span>
                      </div>

                      <p className="text-sm sm:text-base font-medium text-slate-800 leading-relaxed">
                        {day.details}
                      </p>

                      {day.image && isExpanded && (
                        <div className="pt-3 space-y-2">
                          <div className="rounded-2xl overflow-hidden h-52 sm:h-72 border border-sky-200">
                            <img src={day.image} alt={day.title} className="w-full h-full object-cover" />
                          </div>
                          {day.caption && <p className="text-xs sm:text-sm font-bold text-slate-600 italic">📷 {day.caption}</p>}
                        </div>
                      )}

                      <div className="text-xs sm:text-sm font-bold text-slate-700 flex flex-wrap gap-4 bg-sky-50 p-3 rounded-xl border border-sky-200">
                        <span>🏔️ Altitude: {day.altitude}</span>
                        <span>🚶 Distance: {day.distance}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* SIDEBAR SHOWCASE */}
            <div className="lg:col-span-5 lg:sticky top-36">
              <div className="bg-sky-100/80 rounded-3xl p-6 border border-sky-200 shadow-md space-y-4">
                <span className="text-xs sm:text-sm font-black text-[#142957] uppercase tracking-widest">Featured Expedition Batch Photo</span>
                <div className="rounded-2xl overflow-hidden h-72 sm:h-96 border border-sky-200">
                  <img
                    src={trekData.sideImage || trekData.bannerImage}
                    alt="Expedition Team"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xs sm:text-sm font-semibold text-slate-700 leading-relaxed">Genuine batch photo captured live with our NandaPath team on trail.</p>
              </div>
            </div>
          </div>
        )}

        {/* 2. INCLUSIONS & EXCLUSIONS TAB */}
        {activeTab === "inclusions" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="bg-emerald-100/60 rounded-3xl p-6 sm:p-8 border border-emerald-200 space-y-4">
              <h3 className="text-base sm:text-xl font-black text-emerald-950 flex items-center gap-3">
                <span className="text-2xl">✓</span> What's Included
              </h3>
              <ul className="space-y-3 text-sm sm:text-base font-semibold text-slate-800">
                {trekData.inclusions?.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-emerald-700 font-bold text-lg">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-rose-100/60 rounded-3xl p-6 sm:p-8 border border-rose-200 space-y-4">
              <h3 className="text-base sm:text-xl font-black text-rose-950 flex items-center gap-3">
                <span className="text-2xl">✕</span> What's Excluded
              </h3>
              <ul className="space-y-3 text-sm sm:text-base font-semibold text-slate-800">
                {trekData.exclusions?.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-rose-600 font-bold text-lg">✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* 3. PACKING TAB */}
        {activeTab === "packing" && (
          <div className="space-y-8">
            <div className="flex gap-3 border-b border-sky-200 pb-4 overflow-x-auto">
              {Object.keys(commonPackingList).map((key) => (
                <button
                  key={key}
                  onClick={() => setActivePackingTab(key)}
                  className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-black uppercase transition whitespace-nowrap cursor-pointer ${
                    activePackingTab === key ? "bg-[#142957] text-white shadow-md" : "bg-sky-100 text-slate-700 border border-sky-200"
                  }`}
                >
                  {key}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {commonPackingList[activePackingTab].map((item, idx) => (
                <div key={idx} className="bg-sky-100/70 p-5 sm:p-6 rounded-3xl border border-sky-200 shadow-xs flex items-start gap-4">
                  <span className="text-3xl p-3 bg-sky-50 rounded-2xl border border-sky-200 shrink-0">{item.icon}</span>
                  <div>
                    <h3 className="text-sm sm:text-base font-black text-[#142957]">{item.name}</h3>
                    <p className="text-xs sm:text-sm font-medium text-slate-700 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* EXPLORE SIMILAR TREKS */}
        <section className="pt-10 border-t border-sky-200">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-widest text-sky-900 bg-sky-200 px-3 py-1.5 rounded-lg border border-sky-300">
              DISCOVER MORE ROUTES
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#142957] mt-2">Explore Similar Treks</h2>
            <p className="text-sm sm:text-base font-semibold text-slate-700 mt-1">Other top-rated Himalayan trekking expeditions in Uttarakhand.</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {similarTreksList.map((trek) => (
              <Link
                key={trek.name}
                to={trek.link}
                className="group bg-sky-100/80 rounded-2xl overflow-hidden border border-sky-200 shadow-xs hover:shadow-xl transition flex flex-col justify-between"
              >
                <div>
                  <div className="h-44 sm:h-52 overflow-hidden relative">
                    <img src={trek.image} alt={trek.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                    <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-[#142957] text-xs font-black px-2.5 py-1 rounded-full">
                      {trek.altitude}
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm sm:text-base font-black text-[#142957]">{trek.name}</h3>
                    <p className="text-xs sm:text-sm font-semibold text-slate-700 mt-1">{trek.region}</p>
                  </div>
                </div>
                <div className="p-4 pt-0 text-xs sm:text-sm font-black text-sky-800 group-hover:translate-x-1 transition">
                  View Trek &rarr;
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ROUTE MAP */}
        <section className="pt-10 border-t border-sky-200">
          <h2 className="text-2xl sm:text-3xl font-black text-[#142957] mb-6">Trek Route Map & Geographic Region</h2>
          <div className="bg-sky-100/70 p-4 sm:p-6 rounded-3xl border border-sky-200 shadow-xs">
            <iframe
              title={`${trekData.title} Map`}
              src={trekData.mapUrl}
              className="w-full h-80 sm:h-[450px] rounded-2xl border border-sky-300"
              loading="lazy"
            />
          </div>
        </section>

      </div>

      {/* MOBILE FLOATING ACTION BAR */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 bg-sky-50/95 backdrop-blur-xs border-t border-sky-200 p-3 flex gap-3 z-50 shadow-2xl">
        <button
          onClick={() => setShowWhatsAppModal(true)}
          className="flex-1 bg-emerald-600 text-white font-black text-xs py-3 rounded-2xl text-center shadow-xs flex items-center justify-center gap-2"
        >
          <span>💬</span>
          <span>WhatsApp Inquiry</span>
        </button>
        <Link
          to="/contact"
          className="flex-1 bg-[#142957] text-white font-black text-xs py-3 rounded-2xl text-center shadow-xs flex items-center justify-center gap-2"
        >
          <span>📍</span>
          <span>Book Expedition</span>
        </Link>
      </div>

      {/* WHATSAPP MODAL */}
      {showWhatsAppModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-sky-50 rounded-3xl max-w-sm w-full p-8 shadow-2xl border border-sky-200 relative">
            <button
              onClick={() => setShowWhatsAppModal(false)}
              className="absolute top-5 right-5 text-slate-500 hover:text-slate-800 font-black text-lg"
            >
              ✕
            </button>
            <div className="text-center space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-3xl mx-auto">💬</div>
              <h3 className="text-xl font-black text-[#142957]">Direct WhatsApp Support</h3>
              <p className="text-xs sm:text-sm font-semibold text-slate-700">Connect with our Lead Expedition Manager for instant booking details.</p>
              <div className="bg-sky-100 p-4 rounded-2xl border border-sky-200 flex items-center justify-between">
                <span className="font-mono text-sm sm:text-base font-black text-slate-900">{whatsappNumber}</span>
                <button
                  onClick={handleCopyPhone}
                  className="text-xs bg-[#142957] text-white px-3.5 py-2 rounded-xl font-black"
                >
                  {copied ? "Copied! ✓" : "Copy"}
                </button>
              </div>
              <a
                href={`https://wa.me/919876543210?text=Hi%20NandaPath,%20I%20want%20to%20inquire%20about%20${encodeURIComponent(
                  trekData.title
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-emerald-600 text-white font-black text-xs sm:text-sm py-3.5 rounded-2xl transition"
              >
                Open WhatsApp Chat &rarr;
              </a>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}