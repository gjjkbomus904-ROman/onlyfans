const sampleProducts = {
  Hotels: [
  {
    id: 1,
    title: "Mountain Backpack",
    subtitle: "Aspen, Colorado",
    price: 120,
    group: "Hotels",
    country: "usa",
    img: "../catalog/hotel.jpg",
    date: "13 December 2025"
  },
  {
    id: 2,
    title: "Ski Helmet Pro",
    subtitle: "Vail, Colorado",
    price: 90,
    group: "Hotels",
    country: "usa",
    img: "../catalog/polyana1389_10.jpg",
    date: "14 December 2025"
  },
  {
    id: 3,
    title: "Snow Jacket",
    subtitle: "Breckenridge, Colorado",
    price: 110,
    group: "Hotels",
    country: "usa",
    img: '../catalog/caption.jpg',
    date: "17 December 2025"
  },
  {
    id: 4,
    title: "The Venetian Resort",
    subtitle: "Park City, Utah",
    price: 75,
    group: "Hotels",
    country: "usa",
    img: "../catalog/4.jpg",
    date: "18 December 2025"
  },
  {
    id: 5,
    title: "The Ritz‑Carlton",
    subtitle: "Jackson Hole, Wyoming",
    price: 150,
    group: "Hotels",
    country: "usa",
    img: "../catalog/5.webp",
    date: "19 December 2025"
  },
  {
    id: 6,
    title: "The St. Regis",
    subtitle: "Lake Tahoe, California",
    price: 130,
    group: "Hotels",
    country: "usa",
    img: "../catalog/6.jpg",
    date: "24 December 2025"
  },
  {
    id: 7,
    title: "Mountain Backpack",
    subtitle: "Mammoth Lakes, California",
    price: 120,
    group: "Hotels",
    country: "usa",
    img: "../catalog/7.jpg",
    date: "25 December 2025"
  },
  {
    id: 8,
    title: "Ski Helmet Pro",
    subtitle: "Big Sky, Montana",
    price: 90,
    group: "Hotels",
    country: "usa",
    img: "../catalog/8.jpg",
    date: "16 December 2025"
  },
  {
    id: 9,
    title: "The Hay‑Adams",
    subtitle: "Steamboat Springs, Colorado",
    price: 210,
    group: "Hotels",
    country: "usa",
    img: "../catalog/9.png",
    date: "11 December 2025"
  },
  {
    id: 10,
    title: "Ski Goggles Ultra",
    subtitle: "Telluride, Colorado",
    price: 70,
    group: "Hotels",
    country: "usa",
    img: "../catalog/10.jpg",
    date: "22 December 2025"
  },
  {
    id: 11,
    title: "The Langham",
    subtitle: "Sun Valley, Idaho",
    price: 180,
    group: "Hotels",
    country: "usa",
    img: "../catalog/11.jpg",
    date: "22 December 2025"
  },
  {
    id: 12,
    title: "Wynn",
    subtitle: "Keystone, Colorado",
    price: 180,
    group: "Hotels",
    country: "usa",
    img: "../catalog/12.jpg",
    date: "14 December 2025"
  },
  {
    id: 13,
    title: "Mountain Backpack",
    subtitle: "Snowbird, Utah",
    price: 120,
    group: "Hotels",
    country: "usa",
    img: "../catalog/13.jpg",
    date: "16 December 2025"
  },
  {
    id: 14,
    title: "Waldorf Astoria",
    subtitle: "Deer Valley, Utah",
    price: 90,
    group: "Hotels",
    country: "usa",
    img: "../catalog/14.jpg",
    date: "17 December 2025"
  },
  {
    id: 15,
    title: "Montage Deer Valley",
    subtitle: "Winter Park, Colorado",
    price: 210,
    group: "Hotels",
    country: "usa",
    img: "../catalog/15.webp",
    date: "18 December 2025"
  },
  {
    id: 16,
    title: "The Saguaro",
    subtitle: "Copper Mountain, Colorado",
    price: 85,
    group: "Hotels",
    country: "usa",
    img: "../catalog/16.webp",
    date: "15 December 2025"
  },
  {
    id: 17,
    title: "Mountain Backpack",
    subtitle: "Aspen, Colorado",
    price: 120,
    group: "Hotels",
    country: "usa",
    img: "../catalog/hotel.jpg",
    date: "13 December 2025"
  },
  {
    id: 18,
    title: "Ski Helmet Pro",
    subtitle: "Vail, Colorado",
    price: 90,
    group: "Hotels",
    country: "usa",
    img: "../catalog/polyana1389_10.jpg",
    date: "14 December 2025"
  },
  {
    id: 19,
    title: "Snow Jacket",
    subtitle: "Breckenridge, Colorado",
    price: 110,
    group: "Hotels",
    country: "usa",
    img: '../catalog/caption.jpg',
    date: "17 December 2025"
  },
  {
    id: 20,
    title: "The Venetian Resort",
    subtitle: "Park City, Utah",
    price: 75,
    group: "Hotels",
    country: "usa",
    img: "../catalog/4.jpg",
    date: "18 December 2025"
  },
  {
    id: 21,
    title: "The Ritz‑Carlton",
    subtitle: "Jackson Hole, Wyoming",
    price: 150,
    group: "Hotels",
    country: "usa",
    img: "../catalog/5.webp",
    date: "19 December 2025"
  },
  {
    id: 22,
    title: "The St. Regis",
    subtitle: "Lake Tahoe, California",
    price: 130,
    group: "Hotels",
    country: "usa",
    img: "../catalog/6.jpg",
    date: "24 December 2025"
  },
  {
    id: 23,
    title: "Mountain Backpack",
    subtitle: "Mammoth Lakes, California",
    price: 120,
    group: "Hotels",
    country: "usa",
    img: "../catalog/7.jpg",
    date: "25 December 2025"
  },
  {
    id: 24,
    title: "Ski Helmet Pro",
    subtitle: "Big Sky, Montana",
    price: 90,
    group: "Hotels",
    country: "usa",
    img: "../catalog/8.jpg",
    date: "16 December 2025"
  },
  {
    id: 25,
    title: "The Hay‑Adams",
    subtitle: "Steamboat Springs, Colorado",
    price: 210,
    group: "Hotels",
    country: "usa",
    img: "../catalog/9.png",
    date: "11 December 2025"
  },
  {
    id: 26,
    title: "Ski Goggles Ultra",
    subtitle: "Telluride, Colorado",
    price: 70,
    group: "Hotels",
    country: "usa",
    img: "../catalog/10.jpg",
    date: "22 December 2025"
  },
  {
    id: 27,
    title: "The Langham",
    subtitle: "Sun Valley, Idaho",
    price: 180,
    group: "Hotels",
    country: "usa",
    img: "../catalog/11.jpg",
    date: "22 December 2025"
  },
  {
    id: 28,
    title: "Wynn",
    subtitle: "Keystone, Colorado",
    price: 180,
    group: "Hotels",
    country: "usa",
    img: "../catalog/12.jpg",
    date: "14 December 2025"
  },
  {
    id: 29,
    title: "Mountain Backpack",
    subtitle: "Snowbird, Utah",
    price: 120,
    group: "Hotels",
    country: "usa",
    img: "../catalog/13.jpg",
    date: "16 December 2025"
  },
  {
    id: 30,
    title: "Waldorf Astoria",
    subtitle: "Deer Valley, Utah",
    price: 90,
    group: "Hotels",
    country: "usa",
    img: "../catalog/14.jpg",
    date: "17 December 2025"
  },
  {
    id: 31,
    title: "Montage Deer Valley",
    subtitle: "Winter Park, Colorado",
    price: 210,
    group: "Hotels",
    country: "usa",
    img: "../catalog/15.webp",
    date: "18 December 2025"
  },
  {
    id: 32,
    title: "The Saguaro",
    subtitle: "Copper Mountain, Colorado",
    price: 85,
    group: "Hotels",
    country: "usa",
    img: "../catalog/16.webp",
    date: "15 December 2025"
  },
  {
    id: 33,
    title: "Fairmont Chateau Lake Louise",
    subtitle: "Lake Louise, Alberta",
    price: 220,
    group: "Hotels",
    country: "canada",
    img: "../catalog/1c.webp",
    date: "03 December 2025"
  },
  {
    id: 34,
    title: "Rimrock Resort Hotel",
    subtitle: "Banff, Alberta",
    price: 200,
    group: "Hotels",
    country: "canada",
    img: "../catalog/2c.avif",
    date: "27 December 2025"
  },
  {
    id: 35,
    title: "Sunshine Mountain Lodge",
    subtitle: "Sunshine Village, Alberta",
    price: 150,
    group: "Hotels",
    country: "canada",
    img: "../catalog/3c.webp",
    date: "14 December 2025"
  },
  {
    id: 36,
    title: "Powder King Lodge",
    subtitle: "Powder King, British Columbia",
    price: 120,
    group: "Hotels",
    country: "canada",
    img: "./catalog/4c.jpg",
    date: "22 December 2025"
  },
  {
    id: 37,
    title: "Whistler Blackcomb Inn",
    subtitle: "Whistler, British Columbia",
    price: 180,
    group: "Hotels",
    country: "canada",
    img: "../catalog/5c.jpg",
    date: "11 December 2025"
  },
  {
    id: 38,
    title: "Mount Norquay Lodge",
    subtitle: "Mount Norquay, Alberta",
    price: 90,
    group: "Hotels",
    country: "canada",
    img: "../catalog/6c.webp",
    date: "30 December 2025"
  },
  {
    id: 39,
    title: "Revelstoke Mountain Hotel",
    subtitle: "Revelstoke, British Columbia",
    price: 160,
    group: "Hotels",
    country: "canada",
    img: "../catalog/7c.jpg",
    date: "09 December 2025"
  },
  {
    id: 40,
    title: "Sun Peaks Grand Hotel",
    subtitle: "Sun Peaks, British Columbia",
    price: 140,
    group: "Hotels",
    country: "canada",
    img: "../catalog/8c.jpg",
    date: "16 December 2025"
  },
  {
    id: 41,
    title: "Kicking Horse Lodge",
    subtitle: "Kicking Horse, British Columbia",
    price: 175,
    group: "Hotels",
    country: "canada",
    img: "../catalog/9c.webp",
    date: "01 December 2025"
  },
  {
    id: 42,
    title: "Blue Mountain Inn",
    subtitle: "Blue Mountain, Ontario",
    price: 130,
    group: "Hotels",
    country: "canada",
    img: "../catalog/10c.jpg",
    date: "18 December 2025"
  },
  {
    id: 43,
    title: "Big White Resort Hotel",
    subtitle: "Big White, British Columbia",
    price: 190,
    group: "Hotels",
    country: "canada",
    img: "../catalog/11c.jpg",
    date: "05 December 2025"
  },
  {
    id: 44,
    title: "Tremblant Mountain Lodge",
    subtitle: "Mont-Tremblant, Quebec",
    price: 170,
    group: "Hotels",
    country: "canada",
    img: "../catalog/12c.jpeg",
    date: "25 December 2025"
  },
  {
    id: 45,
    title: "SilverStar Mountain Hotel",
    subtitle: "SilverStar, British Columbia",
    price: 145,
    group: "Hotels",
    country: "canada",
    img: "../catalog/13c.jpg",
    date: "12 December 2025"
  },
  {
    id: 46,
    title: "Fernie Alpine Lodge",
    subtitle: "Fernie, British Columbia",
    price: 155,
    group: "Hotels",
    country: "canada",
    img: "../catalog/14c.jpeg",
    date: "29 December 2025"
  },
  {
    id: 47,
    title: "Red Mountain Inn",
    subtitle: "Rossland, British Columbia",
    price: 110,
    group: "Hotels",
    country: "canada",
    img: "../catalog/15c.jpg",
    date: "07 December 2025"
  },
  {
    id: 48,
    title: "Apex Mountain Lodge",
    subtitle: "Apex Mountain, British Columbia",
    price: 95,
    group: "Hotels",
    country: "canada",
    img: "../catalog/16c.jpg",
    date: "20 December 2025"
  }
],
  Destinations: [
  {
    id: 1,
    title: "Vail Ski Resort",
    subtitle: "Colorado",
    group: "Destinations",
    country: "usa",
    img: "../catalog/1d.jpg",
    date: "13 December 2025"
  },
  {
    id: 2,
    title: "Breckenridge Ski Resort",
    subtitle: "Colorado",
    group: "Destinations",
    country: "usa",
    img: "../catalog/2d.jpg",
    date: "14 December 2025"
  },
  {
    id: 3,
    title: "Jackson Hole Mountain Resort",
    subtitle: "Wyoming",
    group: "Destinations",
    country: "usa",
    img: "../catalog/3d.jpeg",
    date: "17 December 2025"
  },
  {
    id: 4,
    title: "Snowbasin Resort",
    subtitle: "Utah",
    group: "Destinations",
    country: "usa",
    img: "../catalog/4d.jpg",
    date: "18 December 2025"
  },
  {
    id: 5,
    title: "Powder Mountain",
    subtitle: "Utah",
    group: "Destinations",
    country: "usa",
    img: "../catalog/5d.jpg",
    date: "19 December 2025"
  },
  {
    id: 6,
    title: "Whitefish Mountain Resort",
    subtitle: "Montana",
    group: "Destinations",
    country: "usa",
    img: "../catalog/6d.jpg",
    date: "24 December 2025"
  },
  {
    id: 7,
    title: "Mount Rose Ski Tahoe",
    subtitle: "Nevada",
    group: "Destinations",
    country: "usa",
    img: "../catalog/7d.jpg",
    date: "25 December 2025"
  },
  {
    id: 8,
    title: "Keystone Resort",
    subtitle: "Colorado",
    group: "Destinations",
    country: "usa",
    img: "../catalog/8d.webp",
    date: "16 December 2025"
  },
  {
    id: 9,
    title: "Aspen Snowmass",
    subtitle: "Colorado",
    group: "Destinations",
    country: "usa",
    img: "../catalog/9d.png",
    date: "11 December 2025"
  },
  {
    id: 10,
    title: "Park City Mountain Resort",
    subtitle: "Utah",
    group: "Destinations",
    country: "usa",
    img: "../catalog/10d.jpg",
    date: "22 December 2025"
  },
  {
    id: 11,
    title: "Heavenly Mountain Resort",
    subtitle: "California",
    group: "Destinations",
    country: "usa",
    img: "../catalog/11d.jpg",
    date: "22 December 2025"
  },
  {
    id: 12,
    title: "Northstar California",
    subtitle: "California",
    group: "Destinations",
    country: "usa",
    img: "../catalog/12d.jpg",
    date: "14 December 2025"
  },
  {
    id: 13,
    title: "Kirkwood Mountain Resort",
    subtitle: "California",
    group: "Destinations",
    country: "usa",
    img: "../catalog/13d.jpg",
    date: "16 December 2025"
  },
  {
    id: 14,
    title: "Killington Resort",
    subtitle: "Vermont",
    group: "Destinations",
    country: "usa",
    img: "../catalog/14d.webp",
    date: "17 December 2025"
  },
  {
    id: 15,
    title: "Okemo Mountain Resort",
    subtitle: "Vermont",
    group: "Destinations",
    country: "usa",
    img: "../catalog/15d.webp",
    date: "18 December 2025"
  },
  {
    id: 16,
    title: "Gore Mountain",
    subtitle: "New York",
    group: "Destinations",
    country: "usa",
    img: "../catalog/16d.jpg",
    date: "15 December 2025"
  },
  {
    id: 17,
    title: "Whistler Blackcomb",
    subtitle: "Whistler, British Columbia",
    group: "Destinations",
    country: "canada",
    img: "https://scene7.vailresorts.com/is/image/vailresorts/20230316_WB_Berger_008%3ASliding-Cards-AND-Container-Short-Amount?dpr=on%2C2.625&fit=constrain%2C1&h=473&resMode=sharp2&w=390&wid=300",
    date: "03 December 2025"
  },
  {
    id: 18,
    title: "Lake Louise Ski Resort",
    subtitle: "Lake Louise, Alberta",
    group: "Destinations",
    country: "canada",
    img: "https://www.skilouise.com/wp-content/uploads/2024/12/2024-Trail-Map-Frontside-12-12-24.jpg",
    date: "05 December 2025"
  },
  {
    id: 19,
    title: "Banff Sunshine Village",
    subtitle: "Banff, Alberta",
    group: "Destinations",
    country: "canada",
    img: "https://upload.wikimedia.org/wikipedia/commons/6/62/Sunshine_Village_06.jpg",
    date: "07 December 2025"
  },
  {
    id: 20,
    title: "Revelstoke Mountain Resort",
    subtitle: "Revelstoke, British Columbia",
    group: "Destinations",
    country: "canada",
    img: "https://www.revelstokemountainresort.com/site/assets/files/2805/tom-poole-winter-2019-2020-scenic-subpeak-large_1.1700x815.webp",
    date: "09 December 2025"
  },
  {
    id: 21,
    title: "Big White Ski Resort",
    subtitle: "near Kelowna, British Columbia",
    group: "Destinations",
    country: "canada",
    img: "https://www.bigwhite.com/sites/default/files/2022-10/Winter-Scenic-Village-panoshot-1000x1200px.jpg",
    date: "11 December 2025"
  },
  {
    id: 22,
    title: "Sun Peaks Resort",
    subtitle: "Sun Peaks, British Columbia",
    group: "Destinations",
    country: "canada",
    img: "https://www.sunpeaksresort.com/sites/default/files/styles/1536/public/page/220304mie_sunpeaks_0439_HDR%20%281%29-WEB.jpg?itok=08huav7-",
    date: "13 December 2025"
  },
  {
    id: 23,
    title: "Kicking Horse Mountain Resort",
    subtitle: "Golden, British Columbia",
    group: "Destinations",
    country: "canada",
    img: "https://kickinghorseresort.com/wp-content/uploads/2016/08/IMG_0423.jpg",
    date: "15 December 2025"
  },
  {
    id: 24,
    title: "Mont Tremblant Ski Resort",
    subtitle: "Mont‑Tremblant, Quebec",
    group: "Destinations",
    country: "canada",
    img: "https://www.tremblant.ca/-/media/tremblant/mountain-and-village/pedestrian-village/village-view-sunset-l.jpg?hash=0EAE0F3C89652F6D2AE662724489A79E&rev=fbce650a95174e7f86c2247376d4a08c%3Fh%3D1350&w=2400",
    date: "17 December 2025"
  },
  {
    id: 25,
    title: "Le Massif de Charlevoix",
    subtitle: "Baie‑Saint‑Paul, Quebec",
    group: "Destinations",
    country: "canada",
    img: "https://www.lemassif.com/sites/default/files/styles/scale_1440/public/2024-11/P-7856-Carte%20des%20pistes%20-%20Web%20-%202024%20-%20sans%20titre.jpg?itok=2-9zee1L",
    date: "19 December 2025"
  },
  {
    id: 26,
    title: "Mont Sainte‑Anne",
    subtitle: "Beaupré, Quebec",
    group: "Destinations",
    country: "canada",
    img: "https://mont-sainte-anne.com/wp-content/uploads/2019/05/MSA_sud_2018.jpg",
    date: "21 December 2025"
  },
  {
    id: 27,
    title: "Grouse Mountain",
    subtitle: "North Vancouver, British Columbia",
    group: "Destinations",
    country: "canada",
    img: "https://media.snow-online.de/images/ecu/entity/e_skiresort/ski-resort_grouse-mountain_n4821-164850-1_l.jpg",
    date: "23 December 2025"
  },
  {
    id: 28,
    title: "Kimberley Alpine Resort",
    subtitle: "Kimberley, British Columbia",
    group: "Destinations",
    country: "canada",
    img: "https://skikimberley.com/wp-content/uploads/2025/10/tcl-scaled.jpg",
    date: "25 December 2025"
  },
  {
    id: 29,
    title: "Silver Star Mountain Resort",
    subtitle: "Vernon, British Columbia",
    group: "Destinations",
    country: "canada",
    img: "https://snowscene.com.au/wp-content/uploads/2020/05/silverstar-mountain-resort-12-scaled.jpg",
    date: "27 December 2025"
  },
  {
    id: 30,
    title: "Sunshine Village",
    subtitle: "Banff, Alberta",
    group: "Destinations",
    country: "canada",
    img: "https://images.squarespace-cdn.com/content/v1/5e7a324590664f18b1bfea0c/e35149e5-2821-44b8-957b-5688ae89ed8c/sunshinevillagetrailmap202223.png",
    date: "29 December 2025"
  },
  {
    id: 31,
    title: "Mount Norquay",
    subtitle: "Banff, Alberta",
    group: "Destinations",
    country: "canada",
    img: "https://banffnorquay.com/wp-content/uploads/2018/01/sbs-trailmap.jpg",
    date: "31 December 2025"
  },
  {
    id: 32,
    title: "Powder King Mountain Resort",
    subtitle: "Mackenzie, British Columbia",
    group: "Destinations",
    country: "canada",
    img: "https://www.powderhounds.com/site/DefaultSite/filesystem/images/Canada/PowderKing/Overview/PowderKing-01.jpg",
    date: "02 January 2026"
  },
  {
    id: 33,
    title: "Zermatt",
    subtitle: "Valais, Switzerland",
    group: "Destinations",
    country: "europe",
    img: "../catalog/33d.jpg",  
    date: "08 December 2025"
  },
  {
    id: 34,
    title: "Chamonix-Mont-Blanc",
    subtitle: "Haute-Savoie, France",
    group: "Destinations",
    country: "europe",
    img: "../catalog/34d.webp",   
    date: "21 December 2025"
  },
  {
    id: 35,
    title: "St. Anton am Arlberg",
    subtitle: "Tyrol, Austria",
    group: "Destinations",
    country: "europe",
    img: "../catalog/35d.png", 
    date: "04 December 2025"
  },
  {
    id: 36,
    title: "Cortina d'Ampezzo",
    subtitle: "Dolomites, Italy",
    group: "Destinations",
    country: "europe",
    img: "../catalog/36d.jpg",  
    date: "15 December 2025"
  },
  {
    id: 37,
    title: "Val Thorens",
    subtitle: "Savoie, France",
    group: "Destinations",
    country: "europe",
    img: "../catalog/37d.jpg",  
    date: "11 December 2025"
  },
  {
    id: 38,
    title: "Ischgl",
    subtitle: "Tyrol, Austria",
    group: "Destinations",
    country: "europe",
    img: "../catalog/38d.jpg",  
    date: "19 December 2025"
  },
  {
    id: 39,
    title: "Kitzbühel",
    subtitle: "Tyrol, Austria",
    group: "Destinations",
    country: "europe",
    img: "../catalog/39d.jpg",  
    date: "02 December 2025"
  },
  {
    id: 40,
    title: "Verbier",
    subtitle: "Valais, Switzerland",
    group: "Destinations",
    country: "europe",
    img: "../catalog/40d.jpg", 
    date: "26 December 2025"
  },
  {
    id: 41,
    title: "Les Arcs",
    subtitle: "Savoie, France",
    group: "Destinations",
    country: "europe",
    img: "../catalog/41d.jpg",  
    date: "14 December 2025"
  },
  {
    id: 42,
    title: "Saalbach-Hinterglemm",
    subtitle: "Salzburg, Austria",
    group: "Destinations",
    country: "europe",
    img: "../catalog/1d.jpg",  
    date: "24 December 2025"
  },
  {
    id: 43,
    title: "Zell am See – Kaprun",
    subtitle: "Salzburg, Austria",
    group: "Destinations",
    country: "europe",
    img: "../catalog/2d.jpg",  
    date: "07 December 2025"
  },
  {
    id: 44,
    title: "Bansko",
    subtitle: "Pirin Mountains, Bulgaria",
    group: "Destinations",
    country: "europe",
    img: "../catalog/3d.jpeg",  
    date: "29 December 2025"
  },
  {
    id: 45,
    title: "Grandvalira",
    subtitle: "Andorra",
    group: "Destinations",
    country: "europe",
    img: "../catalog/4d.jpg",  
    date: "12 December 2025"
  },
  {
    id: 46,
    title: "Kronplatz",
    subtitle: "South Tyrol, Italy",
    group: "Destinations",
    country: "europe",
    img: "../catalog/5d.jpg",  
    date: "18 December 2025"
  },
  {
    id: 47,
    title: "Garmisch-Partenkirchen",
    subtitle: "Bavaria, Germany",
    group: "Destinations",
    country: "europe",
    img: "../catalog/6d.jpg",  
    date: "09 December 2025"
  },
  {
    id: 48,
    title: "Åre Ski Resort",
    subtitle: "Åre, Sweden",
    group: "Destinations",
    country: "europe",
    img: "../catalog/7d.jpg",  
    date: "20 December 2025"
  },
  {
  id: 49,
  title: "Niseko Grand Hirafu",
  subtitle: "Hokkaido, Japan",
  group: "Destinations",
  country: "japan",
  img: "../catalog/1j.jpg",
  date: "03 December 2025"
},
{
  id: 50,
  title: "Niseko Village",
  subtitle: "Hokkaido, Japan",
  group: "Destinations",
  country: "japan",
  img: "../catalog/2j.jpg",
  date: "07 December 2025"
},
{
  id: 51,
  title: "Annupuri (Niseko)",
  subtitle: "Hokkaido, Japan",
  group: "Destinations",
  country: "japan",
  img: "../catalog/3j.jpg",
  date: "11 December 2025"
},
{
  id: 52,
  title: "Hanazono (Niseko)",
  subtitle: "Hokkaido, Japan",
  group: "Destinations",
  country: "japan",
  img: "../catalog/4j.webp",
  date: "13 December 2025"
},
{
  id: 53,
  title: "Hakuba Happo‑One",
  subtitle: "Nagano, Japan",
  group: "Destinations",
  country: "japan",
  img: "../catalog/5j.png",
  date: "17 December 2025"
},
{
  id: 54,
  title: "Hakuba Iwatake",
  subtitle: "Nagano, Japan",
  group: "Destinations",
  country: "japan",
  img: "../catalog/6j.jpeg",
  date: "19 December 2025"
},
{
  id: 55,
  title: "Shiga Kogen",
  subtitle: "Nagano, Japan",
  group: "Destinations",
  country: "japan",
  img: "../catalog/7j.jpg",
  date: "21 December 2025"
},
{
  id: 56,
  title: "Nozawa Onsen",
  subtitle: "Nagano, Japan",
  group: "Destinations",
  country: "japan",
  img: "../catalog/8j.jpeg",
  date: "23 December 2025"
},
{
  id: 57,
  title: "Myoko Suginohara",
  subtitle: "Niigata, Japan",
 group: "Destinations",
 country: "japan",
 img: "../catalog/9j.jpg",
 date: "25 December 2025"
},
{
  id: 58,
  title: "Rusutsu",
  subtitle: "Hokkaido, Japan",
  group: "Destinations",
  country: "japan",
  img: "../catalog/10j.jpg",
  date: "27 December 2025"
},
{
  id: 59,
  title: "Appi Kogen",
  subtitle: "Iwate, Japan",
  group: "Destinations",
  country: "japan",
  img: "../catalog/11j.jpg",
  date: "29 December 2025"
},
{
  id: 60,
  title: "Zao Onsen",
  subtitle: "Yamagata, Japan",
  group: "Destinations",
  country: "japan",
  img: "../catalog/12j.jpg",
  date: "05 December 2025"
},
{
  id: 61,
  title: "Madarao Kogen",
  subtitle: "Nagano, Japan",
  group: "Destinations",
  country: "japan",
  img: "../catalog/13j.jpg",
  date: "09 December 2025"
},
{
  id: 62,
  title: "Takasu Snow Park",
  subtitle: "Gifu, Japan",
  group: "Destinations",
  country: "japan",
  img: "../catalog/14j.jpg",
  date: "15 December 2025"
},
{
  id: 63,
  title: "Kiroro Resort",
  subtitle: "Hokkaido, Japan",
  group: "Destinations",
  country: "japan",
  img: "../catalog/15j.webp",
  date: "31 December 2025"
},
{
  id: 64,
  title: "Hunter Mountain Shiobara",
  subtitle: "Tochigi, Japan",
  group: "Destinations",
  country: "japan",
  img: "../catalog/16j.jpg",
  date: "22 December 2025"
}
]};

const groups = ['Hotels','Destinations','Ski Holidays', 'Luxury Ski Holidays'];
const productsEl = document.getElementById('products');
const headerOptions = document.querySelectorAll('.header-option');
let activeGroup = 'Destinations';
let currentCountryFilter = 'all';


function getTemplate(p, group) {
  switch (group) {

    case 'Hotels':
      return `
        <div class="media">
          <img src="${p.img}" alt="${p.title}">
        </div>
        <div class="bodyc">
          <div class="location">${p.country.toUpperCase()}, ${p.subtitle}</div>
          <div class="card-title">${p.title}</div>
          <div class="rating">⭐ Hotel Rating: 5 STAR</div>
          <div class="price-box">
            <div class="price">Rooms from €${p.price}</div>
            <div class="date">Available from ${p.date}</div>
          </div>
        </div>
      `;

    case 'Destinations':
      return `
        <div class="media wide">
          <img src="${p.img}" alt="${p.title}">
        </div>
        <div class="bodyc">
          <div class="location">${p.subtitle}</div>
          <div class="card-title">${p.title}</div>
          <div class="info">Popular ski destination</div>
          <div class="date">📅 Best season: ${p.date}</div>
        </div>
      `;

    case 'Ski Holidays':
      return `
        <div class="media">
          <img src="${p.img}" alt="${p.title}">
        </div>
        <div class="bodyc">
          <div class="badge blue">Ski Package</div>
          <div class="card-title">${p.title}</div>
          <div class="location">${p.subtitle}</div>
          <div class="price-box">
            <div class="price">Holiday from €${p.price}</div>
          </div>
        </div>
      `;

    case 'Luxury Ski Holidays':
      return `
        <div class="media luxury">
          <img src="${p.img}" alt="${p.title}">
        </div>
        <div class="bodyc">
          <div class="badge gold">Luxury</div>
          <div class="card-title">${p.title}</div>
          <div class="location">${p.subtitle}</div>
          <div class="rating">★★★★★ Premium</div>
          <div class="price-box">
            <div class="price">From €${p.price}</div>
          </div>
        </div>
      `;

    default:
      return `
        <div class="media">
          <img src="${p.img}">
        </div>
        <div class="bodyc">
          <div class="card-title">${p.title}</div>
        </div>
      `;
  }
}


function renderProducts() {
  let filtered = sampleProducts[activeGroup] || [];

  if (currentCountryFilter !== 'all') {
    filtered = filtered.filter(p => p.country === currentCountryFilter);
  }
  const perPage = parseInt(document.getElementById('perpage').value, 10);
  filtered = filtered.slice(0, perPage);

  productsEl.innerHTML = '';

  if (filtered.length === 0) {
    productsEl.innerHTML = '<div style="grid-column:1/-1;padding:20px;text-align:center;color:var(--muted)">No products found</div>';
    return;
  }

  filtered.forEach(p => {
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = getTemplate(p, activeGroup); 
    productsEl.appendChild(card);
  });
}

headerOptions.forEach(el => {
  el.addEventListener('click', () => {
    headerOptions.forEach(x => x.classList.remove('active'));
    el.classList.add('active');
    activeGroup = el.dataset.group;
    renderProducts();
  });
});

document.querySelectorAll('.pill').forEach(p => {
  p.addEventListener('click', () => {
    document.querySelectorAll('.pill').forEach(x => x.classList.remove('active'));
    p.classList.add('active');
    currentCountryFilter = p.dataset.filter;
    renderProducts();
  });
});

document.getElementById('perpage').addEventListener('change', () => {
  renderProducts();
});

renderProducts();
