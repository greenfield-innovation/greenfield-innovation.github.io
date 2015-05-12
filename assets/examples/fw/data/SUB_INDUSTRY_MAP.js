var SECTOR_IDS = [0, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];
var PALETTE = [
    '#aaaaaa', //0 / neutral
    '#ccebc5', //10 energy
    '#fdb462', //15 materials
    '#80b1d3', //20 industrials
    '#bc80bd', //25 consumer discretionary
    '#fccde5', //30 consuner-staples
    '#fb8072', //35 healthcare
    '#b3de69', //40 financials
    '#ffed6f', //45 information-technology
    '#8dd3c7', //50 telecommunication-services
    '#bebada'  //55 utilities
];
var SUB_INDUSTRY_MAP = {
  "10101010" : {
      "name" : "Oil & Gas Drilling",
      "industry" : {
            "id" : "101010",
            "name" : "Energy Equipment & Services"
      },
      "group" : {
            "id" : "1010",
            "name" : "Energy"
      },
      "sector" : {
            "id" : "10",
            "name" : "Energy"
      }
  },
  "10101020" : {
      "name" : "Oil & Gas Equipment & Services",
      "industry" : {
            "id" : "101010",
            "name" : "Energy Equipment & Services"
      },
      "group" : {
            "id" : "1010",
            "name" : "Energy"
      },
      "sector" : {
            "id" : "10",
            "name" : "Energy"
      }
  },
  "10102010" : {
      "name" : "Integrated Oil & Gas",
      "industry" : {
            "id" : "101020",
            "name" : "Oil, Gas & Consumable Fuels"
      },
      "group" : {
            "id" : "1010",
            "name" : "Energy"
      },
      "sector" : {
            "id" : "10",
            "name" : "Energy"
      }
  },
  "10102020" : {
      "name" : "Oil & Gas Exploration & Production",
      "industry" : {
            "id" : "101020",
            "name" : "Oil, Gas & Consumable Fuels"
      },
      "group" : {
            "id" : "1010",
            "name" : "Energy"
      },
      "sector" : {
            "id" : "10",
            "name" : "Energy"
      }
  },
  "10102030" : {
      "name" : "Oil & Gas Refining & Marketing",
      "industry" : {
            "id" : "101020",
            "name" : "Oil, Gas & Consumable Fuels"
      },
      "group" : {
            "id" : "1010",
            "name" : "Energy"
      },
      "sector" : {
            "id" : "10",
            "name" : "Energy"
      }
  },
  "10102040" : {
      "name" : "Oil & Gas Storage & Transportation",
      "industry" : {
            "id" : "101020",
            "name" : "Oil, Gas & Consumable Fuels"
      },
      "group" : {
            "id" : "1010",
            "name" : "Energy"
      },
      "sector" : {
            "id" : "10",
            "name" : "Energy"
      }
  },
  "10102050" : {
      "name" : "Coal & Consumable Fuels",
      "industry" : {
            "id" : "101020",
            "name" : "Oil, Gas & Consumable Fuels"
      },
      "group" : {
            "id" : "1010",
            "name" : "Energy"
      },
      "sector" : {
            "id" : "10",
            "name" : "Energy"
      }
  },
  "15101010" : {
      "name" : "Commodity Chemicals",
      "industry" : {
            "id" : "151010",
            "name" : "Chemicals"
      },
      "group" : {
            "id" : "1510",
            "name" : "Materials"
      },
      "sector" : {
            "id" : "15",
            "name" : "Materials"
      }
  },
  "15101020" : {
      "name" : "Diversified Chemicals",
      "industry" : {
            "id" : "151010",
            "name" : "Chemicals"
      },
      "group" : {
            "id" : "1510",
            "name" : "Materials"
      },
      "sector" : {
            "id" : "15",
            "name" : "Materials"
      }
  },
  "15101030" : {
      "name" : "Fertilizers & Agricultural Chemicals",
      "industry" : {
            "id" : "151010",
            "name" : "Chemicals"
      },
      "group" : {
            "id" : "1510",
            "name" : "Materials"
      },
      "sector" : {
            "id" : "15",
            "name" : "Materials"
      }
  },
  "15101040" : {
      "name" : "Industrial Gases",
      "industry" : {
            "id" : "151010",
            "name" : "Chemicals"
      },
      "group" : {
            "id" : "1510",
            "name" : "Materials"
      },
      "sector" : {
            "id" : "15",
            "name" : "Materials"
      }
  },
  "15101050" : {
      "name" : "Specialty Chemicals",
      "industry" : {
            "id" : "151010",
            "name" : "Chemicals"
      },
      "group" : {
            "id" : "1510",
            "name" : "Materials"
      },
      "sector" : {
            "id" : "15",
            "name" : "Materials"
      }
  },
  "15102010" : {
      "name" : "Construction Materials",
      "industry" : {
            "id" : "151020",
            "name" : "Construction Materials"
      },
      "group" : {
            "id" : "1510",
            "name" : "Materials"
      },
      "sector" : {
            "id" : "15",
            "name" : "Materials"
      }
  },
  "15103010" : {
      "name" : "Metal & Glass Containers",
      "industry" : {
            "id" : "151030",
            "name" : "Containers & Packaging"
      },
      "group" : {
            "id" : "1510",
            "name" : "Materials"
      },
      "sector" : {
            "id" : "15",
            "name" : "Materials"
      }
  },
  "15103020" : {
      "name" : "Paper Packaging",
      "industry" : {
            "id" : "151030",
            "name" : "Containers & Packaging"
      },
      "group" : {
            "id" : "1510",
            "name" : "Materials"
      },
      "sector" : {
            "id" : "15",
            "name" : "Materials"
      }
  },
  "15104010" : {
      "name" : "Aluminum",
      "industry" : {
            "id" : "151040",
            "name" : "Metals & Mining"
      },
      "group" : {
            "id" : "1510",
            "name" : "Materials"
      },
      "sector" : {
            "id" : "15",
            "name" : "Materials"
      }
  },
  "15104020" : {
      "name" : "Diversified Metals & Mining",
      "industry" : {
            "id" : "151040",
            "name" : "Metals & Mining"
      },
      "group" : {
            "id" : "1510",
            "name" : "Materials"
      },
      "sector" : {
            "id" : "15",
            "name" : "Materials"
      }
  },
  "15104030" : {
      "name" : "Gold",
      "industry" : {
            "id" : "151040",
            "name" : "Metals & Mining"
      },
      "group" : {
            "id" : "1510",
            "name" : "Materials"
      },
      "sector" : {
            "id" : "15",
            "name" : "Materials"
      }
  },
  "15104040" : {
      "name" : "Precious Metals & Minerals",
      "industry" : {
            "id" : "151040",
            "name" : "Metals & Mining"
      },
      "group" : {
            "id" : "1510",
            "name" : "Materials"
      },
      "sector" : {
            "id" : "15",
            "name" : "Materials"
      }
  },
  "15104045" : {
      "name" : "Silver",
      "industry" : {
            "id" : "151040",
            "name" : "Metals & Mining"
      },
      "group" : {
            "id" : "1510",
            "name" : "Materials"
      },
      "sector" : {
            "id" : "15",
            "name" : "Materials"
      }
  },
  "15104050" : {
      "name" : "Steel",
      "industry" : {
            "id" : "151040",
            "name" : "Metals & Mining"
      },
      "group" : {
            "id" : "1510",
            "name" : "Materials"
      },
      "sector" : {
            "id" : "15",
            "name" : "Materials"
      }
  },
  "15105010" : {
      "name" : "Forest Products",
      "industry" : {
            "id" : "151050",
            "name" : "Paper & Forest Products"
      },
      "group" : {
            "id" : "1510",
            "name" : "Materials"
      },
      "sector" : {
            "id" : "15",
            "name" : "Materials"
      }
  },
  "15105020" : {
      "name" : "Paper Products",
      "industry" : {
            "id" : "151050",
            "name" : "Paper & Forest Products"
      },
      "group" : {
            "id" : "1510",
            "name" : "Materials"
      },
      "sector" : {
            "id" : "15",
            "name" : "Materials"
      }
  },
  "20101010" : {
      "name" : "Aerospace & Defense",
      "industry" : {
            "id" : "201010",
            "name" : "Aerospace & Defense"
      },
      "group" : {
            "id" : "2010",
            "name" : "Capital Goods"
      },
      "sector" : {
            "id" : "20",
            "name" : "Industrials"
      }
  },
  "20102010" : {
      "name" : "Building Products",
      "industry" : {
            "id" : "201020",
            "name" : "Building Products"
      },
      "group" : {
            "id" : "2010",
            "name" : "Capital Goods"
      },
      "sector" : {
            "id" : "20",
            "name" : "Industrials"
      }
  },
  "20103010" : {
      "name" : "Construction & Engineering",
      "industry" : {
            "id" : "201030",
            "name" : "Construction & Engineering"
      },
      "group" : {
            "id" : "2010",
            "name" : "Capital Goods"
      },
      "sector" : {
            "id" : "20",
            "name" : "Industrials"
      }
  },
  "20104010" : {
      "name" : "Electrical Components & Equipment",
      "industry" : {
            "id" : "201040",
            "name" : "Electrical Equipment"
      },
      "group" : {
            "id" : "2010",
            "name" : "Capital Goods"
      },
      "sector" : {
            "id" : "20",
            "name" : "Industrials"
      }
  },
  "20104020" : {
      "name" : "Heavy Electrical Equipment",
      "industry" : {
            "id" : "201040",
            "name" : "Electrical Equipment"
      },
      "group" : {
            "id" : "2010",
            "name" : "Capital Goods"
      },
      "sector" : {
            "id" : "20",
            "name" : "Industrials"
      }
  },
  "20105010" : {
      "name" : "Industrial Conglomerates",
      "industry" : {
            "id" : "201050",
            "name" : "Industrial Conglomerates"
      },
      "group" : {
            "id" : "2010",
            "name" : "Capital Goods"
      },
      "sector" : {
            "id" : "20",
            "name" : "Industrials"
      }
  },
  "20106010" : {
      "name" : "Construction Machinery & Heavy Trucks",
      "industry" : {
            "id" : "201060",
            "name" : "Machinery"
      },
      "group" : {
            "id" : "2010",
            "name" : "Capital Goods"
      },
      "sector" : {
            "id" : "20",
            "name" : "Industrials"
      }
  },
  "20106015" : {
      "name" : "Agricultural & Farm Machinery",
      "industry" : {
            "id" : "201060",
            "name" : "Machinery"
      },
      "group" : {
            "id" : "2010",
            "name" : "Capital Goods"
      },
      "sector" : {
            "id" : "20",
            "name" : "Industrials"
      }
  },
  "20106020" : {
      "name" : "Industrial Machinery",
      "industry" : {
            "id" : "201060",
            "name" : "Machinery"
      },
      "group" : {
            "id" : "2010",
            "name" : "Capital Goods"
      },
      "sector" : {
            "id" : "20",
            "name" : "Industrials"
      }
  },
  "20107010" : {
      "name" : "Trading Companies & Distributors",
      "industry" : {
            "id" : "201070",
            "name" : "Trading Companies & Distributors"
      },
      "group" : {
            "id" : "2010",
            "name" : "Capital Goods"
      },
      "sector" : {
            "id" : "20",
            "name" : "Industrials"
      }
  },
  "20201010" : {
      "name" : "Commercial Printing",
      "industry" : {
            "id" : "202010",
            "name" : "Commercial Services & Supplies"
      },
      "group" : {
            "id" : "2020",
            "name" : "Commercial  & Professional Services"
      },
      "sector" : {
            "id" : "20",
            "name" : "Industrials"
      }
  },
  "20201050" : {
      "name" : "Environmental & Facilities Services (waste)",
      "industry" : {
            "id" : "202010",
            "name" : "Commercial Services & Supplies"
      },
      "group" : {
            "id" : "2020",
            "name" : "Commercial  & Professional Services"
      },
      "sector" : {
            "id" : "20",
            "name" : "Industrials"
      }
  },
  "20201060" : {
      "name" : "Office Services & Supplies",
      "industry" : {
            "id" : "202010",
            "name" : "Commercial Services & Supplies"
      },
      "group" : {
            "id" : "2020",
            "name" : "Commercial  & Professional Services"
      },
      "sector" : {
            "id" : "20",
            "name" : "Industrials"
      }
  },
  "20201070" : {
      "name" : "Diversified Support Services",
      "industry" : {
            "id" : "202010",
            "name" : "Commercial Services & Supplies"
      },
      "group" : {
            "id" : "2020",
            "name" : "Commercial  & Professional Services"
      },
      "sector" : {
            "id" : "20",
            "name" : "Industrials"
      }
  },
  "20201080" : {
      "name" : "Security & Alarm Services",
      "industry" : {
            "id" : "202010",
            "name" : "Commercial Services & Supplies"
      },
      "group" : {
            "id" : "2020",
            "name" : "Commercial  & Professional Services"
      },
      "sector" : {
            "id" : "20",
            "name" : "Industrials"
      }
  },
  "20202010" : {
      "name" : "Human Resource & Employment Services",
      "industry" : {
            "id" : "202020",
            "name" : "Professional Services"
      },
      "group" : {
            "id" : "2020",
            "name" : "Commercial  & Professional Services"
      },
      "sector" : {
            "id" : "20",
            "name" : "Industrials"
      }
  },
  "20202020" : {
      "name" : "Research & Consulting Services",
      "industry" : {
            "id" : "202020",
            "name" : "Professional Services"
      },
      "group" : {
            "id" : "2020",
            "name" : "Commercial  & Professional Services"
      },
      "sector" : {
            "id" : "20",
            "name" : "Industrials"
      }
  },
  "20301010" : {
      "name" : "Air Freight & Logistics",
      "industry" : {
            "id" : "203010",
            "name" : "Air Freight & Logistics"
      },
      "group" : {
            "id" : "2030",
            "name" : "Transportation"
      },
      "sector" : {
            "id" : "20",
            "name" : "Industrials"
      }
  },
  "20302010" : {
      "name" : "Airlines",
      "industry" : {
            "id" : "203020",
            "name" : "Airlines"
      },
      "group" : {
            "id" : "2030",
            "name" : "Transportation"
      },
      "sector" : {
            "id" : "20",
            "name" : "Industrials"
      }
  },
  "20303010" : {
      "name" : "Marine",
      "industry" : {
            "id" : "203030",
            "name" : "Marine"
      },
      "group" : {
            "id" : "2030",
            "name" : "Transportation"
      },
      "sector" : {
            "id" : "20",
            "name" : "Industrials"
      }
  },
  "20304010" : {
      "name" : "Railroads",
      "industry" : {
            "id" : "203040",
            "name" : "Road & Rail"
      },
      "group" : {
            "id" : "2030",
            "name" : "Transportation"
      },
      "sector" : {
            "id" : "20",
            "name" : "Industrials"
      }
  },
  "20304020" : {
      "name" : "Trucking",
      "industry" : {
            "id" : "203040",
            "name" : "Road & Rail"
      },
      "group" : {
            "id" : "2030",
            "name" : "Transportation"
      },
      "sector" : {
            "id" : "20",
            "name" : "Industrials"
      }
  },
  "20305010" : {
      "name" : "Airport Services",
      "industry" : {
            "id" : "203050",
            "name" : "Transportation Infrastructure"
      },
      "group" : {
            "id" : "2030",
            "name" : "Transportation"
      },
      "sector" : {
            "id" : "20",
            "name" : "Industrials"
      }
  },
  "20305020" : {
      "name" : "Highways & Railtracks",
      "industry" : {
            "id" : "203050",
            "name" : "Transportation Infrastructure"
      },
      "group" : {
            "id" : "2030",
            "name" : "Transportation"
      },
      "sector" : {
            "id" : "20",
            "name" : "Industrials"
      }
  },
  "20305030" : {
      "name" : "Marine Ports & Services",
      "industry" : {
            "id" : "203050",
            "name" : "Transportation Infrastructure"
      },
      "group" : {
            "id" : "2030",
            "name" : "Transportation"
      },
      "sector" : {
            "id" : "20",
            "name" : "Industrials"
      }
  },
  "25101010" : {
      "name" : "Auto Parts & Equipment",
      "industry" : {
            "id" : "251010",
            "name" : "Auto Components"
      },
      "group" : {
            "id" : "2510",
            "name" : "Automobiles & Components"
      },
      "sector" : {
            "id" : "25",
            "name" : "Consumer Discretionary"
      }
  },
  "25101020" : {
      "name" : "Tires & Rubber",
      "industry" : {
            "id" : "251010",
            "name" : "Auto Components"
      },
      "group" : {
            "id" : "2510",
            "name" : "Automobiles & Components"
      },
      "sector" : {
            "id" : "25",
            "name" : "Consumer Discretionary"
      }
  },
  "25102010" : {
      "name" : "Automobile Manufacturers",
      "industry" : {
            "id" : "251020",
            "name" : "Automobiles"
      },
      "group" : {
            "id" : "2510",
            "name" : "Automobiles & Components"
      },
      "sector" : {
            "id" : "25",
            "name" : "Consumer Discretionary"
      }
  },
  "25102020" : {
      "name" : "Motorcycle Manufacturers",
      "industry" : {
            "id" : "251020",
            "name" : "Automobiles"
      },
      "group" : {
            "id" : "2510",
            "name" : "Automobiles & Components"
      },
      "sector" : {
            "id" : "25",
            "name" : "Consumer Discretionary"
      }
  },
  "25201010" : {
      "name" : "Consumer Electronics",
      "industry" : {
            "id" : "252010",
            "name" : "Household Durables"
      },
      "group" : {
            "id" : "2520",
            "name" : "Consumer Durables & Apparel"
      },
      "sector" : {
            "id" : "25",
            "name" : "Consumer Discretionary"
      }
  },
  "25201020" : {
      "name" : "Home Furnishings",
      "industry" : {
            "id" : "252010",
            "name" : "Household Durables"
      },
      "group" : {
            "id" : "2520",
            "name" : "Consumer Durables & Apparel"
      },
      "sector" : {
            "id" : "25",
            "name" : "Consumer Discretionary"
      }
  },
  "25201030" : {
      "name" : "Homebuilding",
      "industry" : {
            "id" : "252010",
            "name" : "Household Durables"
      },
      "group" : {
            "id" : "2520",
            "name" : "Consumer Durables & Apparel"
      },
      "sector" : {
            "id" : "25",
            "name" : "Consumer Discretionary"
      }
  },
  "25201040" : {
      "name" : "Household Appliances",
      "industry" : {
            "id" : "252010",
            "name" : "Household Durables"
      },
      "group" : {
            "id" : "2520",
            "name" : "Consumer Durables & Apparel"
      },
      "sector" : {
            "id" : "25",
            "name" : "Consumer Discretionary"
      }
  },
  "25201050" : {
      "name" : "Housewares & Specialties",
      "industry" : {
            "id" : "252010",
            "name" : "Household Durables"
      },
      "group" : {
            "id" : "2520",
            "name" : "Consumer Durables & Apparel"
      },
      "sector" : {
            "id" : "25",
            "name" : "Consumer Discretionary"
      }
  },
  "25202010" : {
      "name" : "Leisure Products",
      "industry" : {
            "id" : "252020",
            "name" : "Leisure Products"
      },
      "group" : {
            "id" : "2520",
            "name" : "Consumer Durables & Apparel"
      },
      "sector" : {
            "id" : "25",
            "name" : "Consumer Discretionary"
      }
  },
  "25203010" : {
      "name" : "Apparel, Accessories & Luxury Goods",
      "industry" : {
            "id" : "252030",
            "name" : "Textiles, Apparel & Luxury Goods"
      },
      "group" : {
            "id" : "2520",
            "name" : "Consumer Durables & Apparel"
      },
      "sector" : {
            "id" : "25",
            "name" : "Consumer Discretionary"
      }
  },
  "25203020" : {
      "name" : "Footwear",
      "industry" : {
            "id" : "252030",
            "name" : "Textiles, Apparel & Luxury Goods"
      },
      "group" : {
            "id" : "2520",
            "name" : "Consumer Durables & Apparel"
      },
      "sector" : {
            "id" : "25",
            "name" : "Consumer Discretionary"
      }
  },
  "25203030" : {
      "name" : "Textiles",
      "industry" : {
            "id" : "252030",
            "name" : "Textiles, Apparel & Luxury Goods"
      },
      "group" : {
            "id" : "2520",
            "name" : "Consumer Durables & Apparel"
      },
      "sector" : {
            "id" : "25",
            "name" : "Consumer Discretionary"
      }
  },
  "25301010" : {
      "name" : "Casinos & Gaming",
      "industry" : {
            "id" : "253010",
            "name" : "Hotels, Restaurants & Leisure"
      },
      "group" : {
            "id" : "2530",
            "name" : "Consumer Services"
      },
      "sector" : {
            "id" : "25",
            "name" : "Consumer Discretionary"
      }
  },
  "25301020" : {
      "name" : "Hotels, Resorts & Cruise Lines",
      "industry" : {
            "id" : "253010",
            "name" : "Hotels, Restaurants & Leisure"
      },
      "group" : {
            "id" : "2530",
            "name" : "Consumer Services"
      },
      "sector" : {
            "id" : "25",
            "name" : "Consumer Discretionary"
      }
  },
  "25301030" : {
      "name" : "Leisure Facilities",
      "industry" : {
            "id" : "253010",
            "name" : "Hotels, Restaurants & Leisure"
      },
      "group" : {
            "id" : "2530",
            "name" : "Consumer Services"
      },
      "sector" : {
            "id" : "25",
            "name" : "Consumer Discretionary"
      }
  },
  "25301040" : {
      "name" : "Restaurants",
      "industry" : {
            "id" : "253010",
            "name" : "Hotels, Restaurants & Leisure"
      },
      "group" : {
            "id" : "2530",
            "name" : "Consumer Services"
      },
      "sector" : {
            "id" : "25",
            "name" : "Consumer Discretionary"
      }
  },
  "25302010" : {
      "name" : "Education Services",
      "industry" : {
            "id" : "253020",
            "name" : "Diversified Consumer Services"
      },
      "group" : {
            "id" : "2530",
            "name" : "Consumer Services"
      },
      "sector" : {
            "id" : "25",
            "name" : "Consumer Discretionary"
      }
  },
  "25302020" : {
      "name" : "Specialized Consumer Services",
      "industry" : {
            "id" : "253020",
            "name" : "Diversified Consumer Services"
      },
      "group" : {
            "id" : "2530",
            "name" : "Consumer Services"
      },
      "sector" : {
            "id" : "25",
            "name" : "Consumer Discretionary"
      }
  },
  "25401010" : {
      "name" : "Advertising",
      "industry" : {
            "id" : "254010",
            "name" : "Media"
      },
      "group" : {
            "id" : "2540",
            "name" : "Media"
      },
      "sector" : {
            "id" : "25",
            "name" : "Consumer Discretionary"
      }
  },
  "25401020" : {
      "name" : "Broadcasting",
      "industry" : {
            "id" : "254010",
            "name" : "Media"
      },
      "group" : {
            "id" : "2540",
            "name" : "Media"
      },
      "sector" : {
            "id" : "25",
            "name" : "Consumer Discretionary"
      }
  },
  "25401025" : {
      "name" : "Cable & Satellite",
      "industry" : {
            "id" : "254010",
            "name" : "Media"
      },
      "group" : {
            "id" : "2540",
            "name" : "Media"
      },
      "sector" : {
            "id" : "25",
            "name" : "Consumer Discretionary"
      }
  },
  "25401030" : {
      "name" : "Movies & Entertainment",
      "industry" : {
            "id" : "254010",
            "name" : "Media"
      },
      "group" : {
            "id" : "2540",
            "name" : "Media"
      },
      "sector" : {
            "id" : "25",
            "name" : "Consumer Discretionary"
      }
  },
  "25401040" : {
      "name" : "Publishing",
      "industry" : {
            "id" : "254010",
            "name" : "Media"
      },
      "group" : {
            "id" : "2540",
            "name" : "Media"
      },
      "sector" : {
            "id" : "25",
            "name" : "Consumer Discretionary"
      }
  },
  "25501010" : {
      "name" : "Distributors",
      "industry" : {
            "id" : "255010",
            "name" : "Distributors"
      },
      "group" : {
            "id" : "2550",
            "name" : "Retailing"
      },
      "sector" : {
            "id" : "25",
            "name" : "Consumer Discretionary"
      }
  },
  "25502010" : {
      "name" : "Catalog Retail",
      "industry" : {
            "id" : "255020",
            "name" : "Internet & Catalog Retail"
      },
      "group" : {
            "id" : "2550",
            "name" : "Retailing"
      },
      "sector" : {
            "id" : "25",
            "name" : "Consumer Discretionary"
      }
  },
  "25502020" : {
      "name" : "Internet Retail",
      "industry" : {
            "id" : "255020",
            "name" : "Internet & Catalog Retail"
      },
      "group" : {
            "id" : "2550",
            "name" : "Retailing"
      },
      "sector" : {
            "id" : "25",
            "name" : "Consumer Discretionary"
      }
  },
  "25503010" : {
      "name" : "Department Stores",
      "industry" : {
            "id" : "255030",
            "name" : "Multiline Retail"
      },
      "group" : {
            "id" : "2550",
            "name" : "Retailing"
      },
      "sector" : {
            "id" : "25",
            "name" : "Consumer Discretionary"
      }
  },
  "25503020" : {
      "name" : "General Merchandise Stores",
      "industry" : {
            "id" : "255030",
            "name" : "Multiline Retail"
      },
      "group" : {
            "id" : "2550",
            "name" : "Retailing"
      },
      "sector" : {
            "id" : "25",
            "name" : "Consumer Discretionary"
      }
  },
  "25504010" : {
      "name" : "Apparel Retail",
      "industry" : {
            "id" : "255040",
            "name" : "Specialty Retail"
      },
      "group" : {
            "id" : "2550",
            "name" : "Retailing"
      },
      "sector" : {
            "id" : "25",
            "name" : "Consumer Discretionary"
      }
  },
  "25504020" : {
      "name" : "Computer & Electronics Retail",
      "industry" : {
            "id" : "255040",
            "name" : "Specialty Retail"
      },
      "group" : {
            "id" : "2550",
            "name" : "Retailing"
      },
      "sector" : {
            "id" : "25",
            "name" : "Consumer Discretionary"
      }
  },
  "25504030" : {
      "name" : "Home Improvement Retail",
      "industry" : {
            "id" : "255040",
            "name" : "Specialty Retail"
      },
      "group" : {
            "id" : "2550",
            "name" : "Retailing"
      },
      "sector" : {
            "id" : "25",
            "name" : "Consumer Discretionary"
      }
  },
  "25504040" : {
      "name" : "Specialty Stores",
      "industry" : {
            "id" : "255040",
            "name" : "Specialty Retail"
      },
      "group" : {
            "id" : "2550",
            "name" : "Retailing"
      },
      "sector" : {
            "id" : "25",
            "name" : "Consumer Discretionary"
      }
  },
  "25504050" : {
      "name" : "Automotive Retail",
      "industry" : {
            "id" : "255040",
            "name" : "Specialty Retail"
      },
      "group" : {
            "id" : "2550",
            "name" : "Retailing"
      },
      "sector" : {
            "id" : "25",
            "name" : "Consumer Discretionary"
      }
  },
  "25504060" : {
      "name" : "Homefurnishing Retail",
      "industry" : {
            "id" : "255040",
            "name" : "Specialty Retail"
      },
      "group" : {
            "id" : "2550",
            "name" : "Retailing"
      },
      "sector" : {
            "id" : "25",
            "name" : "Consumer Discretionary"
      }
  },
  "30101010" : {
      "name" : "Drug Retail",
      "industry" : {
            "id" : "301010",
            "name" : "Food & Staples Retailing"
      },
      "group" : {
            "id" : "3010",
            "name" : "Food & Staples Retailing"
      },
      "sector" : {
            "id" : "30",
            "name" : "Consumer Staples"
      }
  },
  "30101020" : {
      "name" : "Food Distributors",
      "industry" : {
            "id" : "301010",
            "name" : "Food & Staples Retailing"
      },
      "group" : {
            "id" : "3010",
            "name" : "Food & Staples Retailing"
      },
      "sector" : {
            "id" : "30",
            "name" : "Consumer Staples"
      }
  },
  "30101030" : {
      "name" : "Food Retail",
      "industry" : {
            "id" : "301010",
            "name" : "Food & Staples Retailing"
      },
      "group" : {
            "id" : "3010",
            "name" : "Food & Staples Retailing"
      },
      "sector" : {
            "id" : "30",
            "name" : "Consumer Staples"
      }
  },
  "30101040" : {
      "name" : "Hypermarkets & Super Centers",
      "industry" : {
            "id" : "301010",
            "name" : "Food & Staples Retailing"
      },
      "group" : {
            "id" : "3010",
            "name" : "Food & Staples Retailing"
      },
      "sector" : {
            "id" : "30",
            "name" : "Consumer Staples"
      }
  },
  "30201010" : {
      "name" : "Brewers",
      "industry" : {
            "id" : "302010",
            "name" : "Beverages"
      },
      "group" : {
            "id" : "3020",
            "name" : "Food, Beverage & Tobacco"
      },
      "sector" : {
            "id" : "30",
            "name" : "Consumer Staples"
      }
  },
  "30201020" : {
      "name" : "Distillers & Vintners",
      "industry" : {
            "id" : "302010",
            "name" : "Beverages"
      },
      "group" : {
            "id" : "3020",
            "name" : "Food, Beverage & Tobacco"
      },
      "sector" : {
            "id" : "30",
            "name" : "Consumer Staples"
      }
  },
  "30201030" : {
      "name" : "Soft Drinks",
      "industry" : {
            "id" : "302010",
            "name" : "Beverages"
      },
      "group" : {
            "id" : "3020",
            "name" : "Food, Beverage & Tobacco"
      },
      "sector" : {
            "id" : "30",
            "name" : "Consumer Staples"
      }
  },
  "30202010" : {
      "name" : "Agricultural Products",
      "industry" : {
            "id" : "302020",
            "name" : "Food Products"
      },
      "group" : {
            "id" : "3020",
            "name" : "Food, Beverage & Tobacco"
      },
      "sector" : {
            "id" : "30",
            "name" : "Consumer Staples"
      }
  },
  "30202030" : {
      "name" : "Packaged Foods & Meats",
      "industry" : {
            "id" : "302020",
            "name" : "Food Products"
      },
      "group" : {
            "id" : "3020",
            "name" : "Food, Beverage & Tobacco"
      },
      "sector" : {
            "id" : "30",
            "name" : "Consumer Staples"
      }
  },
  "30203010" : {
      "name" : "Tobacco",
      "industry" : {
            "id" : "302030",
            "name" : "Tobacco"
      },
      "group" : {
            "id" : "3020",
            "name" : "Food, Beverage & Tobacco"
      },
      "sector" : {
            "id" : "30",
            "name" : "Consumer Staples"
      }
  },
  "30301010" : {
      "name" : "Household Products",
      "industry" : {
            "id" : "303010",
            "name" : "Household Products"
      },
      "group" : {
            "id" : "3030",
            "name" : "Household & Personal Products"
      },
      "sector" : {
            "id" : "30",
            "name" : "Consumer Staples"
      }
  },
  "30302010" : {
      "name" : "Personal Products",
      "industry" : {
            "id" : "303020",
            "name" : "Personal Products"
      },
      "group" : {
            "id" : "3030",
            "name" : "Household & Personal Products"
      },
      "sector" : {
            "id" : "30",
            "name" : "Consumer Staples"
      }
  },
  "35101010" : {
      "name" : "Health Care Equipment",
      "industry" : {
            "id" : "351010",
            "name" : "Health Care Equipment & Supplies"
      },
      "group" : {
            "id" : "3510",
            "name" : "Health Care Equipment & Services"
      },
      "sector" : {
            "id" : "35",
            "name" : "Health Care"
      }
  },
  "35101020" : {
      "name" : "Health Care Supplies",
      "industry" : {
            "id" : "351010",
            "name" : "Health Care Equipment & Supplies"
      },
      "group" : {
            "id" : "3510",
            "name" : "Health Care Equipment & Services"
      },
      "sector" : {
            "id" : "35",
            "name" : "Health Care"
      }
  },
  "35102010" : {
      "name" : "Health Care Distributors",
      "industry" : {
            "id" : "351020",
            "name" : "Health Care Providers & Services"
      },
      "group" : {
            "id" : "3510",
            "name" : "Health Care Equipment & Services"
      },
      "sector" : {
            "id" : "35",
            "name" : "Health Care"
      }
  },
  "35102015" : {
      "name" : "Health Care  Services",
      "industry" : {
            "id" : "351020",
            "name" : "Health Care Providers & Services"
      },
      "group" : {
            "id" : "3510",
            "name" : "Health Care Equipment & Services"
      },
      "sector" : {
            "id" : "35",
            "name" : "Health Care"
      }
  },
  "35102020" : {
      "name" : "Health Care Facilities",
      "industry" : {
            "id" : "351020",
            "name" : "Health Care Providers & Services"
      },
      "group" : {
            "id" : "3510",
            "name" : "Health Care Equipment & Services"
      },
      "sector" : {
            "id" : "35",
            "name" : "Health Care"
      }
  },
  "35102030" : {
      "name" : "Managed Health Care",
      "industry" : {
            "id" : "351020",
            "name" : "Health Care Providers & Services"
      },
      "group" : {
            "id" : "3510",
            "name" : "Health Care Equipment & Services"
      },
      "sector" : {
            "id" : "35",
            "name" : "Health Care"
      }
  },
  "35103010" : {
      "name" : "Health Care Technology",
      "industry" : {
            "id" : "351030",
            "name" : "Health Care Technology"
      },
      "group" : {
            "id" : "3510",
            "name" : "Health Care Equipment & Services"
      },
      "sector" : {
            "id" : "35",
            "name" : "Health Care"
      }
  },
  "35201010" : {
      "name" : "Biotechnology",
      "industry" : {
            "id" : "352010",
            "name" : "Biotechnology"
      },
      "group" : {
            "id" : "3520",
            "name" : "Pharmaceuticals, Biotechnology & Life Sciences"
      },
      "sector" : {
            "id" : "35",
            "name" : "Health Care"
      }
  },
  "35202010" : {
      "name" : "Pharmaceuticals",
      "industry" : {
            "id" : "352020",
            "name" : "Pharmaceuticals"
      },
      "group" : {
            "id" : "3520",
            "name" : "Pharmaceuticals, Biotechnology & Life Sciences"
      },
      "sector" : {
            "id" : "35",
            "name" : "Health Care"
      }
  },
  "35203010" : {
      "name" : "Life Sciences Tools & Services",
      "industry" : {
            "id" : "352030",
            "name" : "Life Sciences Tools & Services"
      },
      "group" : {
            "id" : "3520",
            "name" : "Pharmaceuticals, Biotechnology & Life Sciences"
      },
      "sector" : {
            "id" : "35",
            "name" : "Health Care"
      }
  },
  "40101010" : {
      "name" : "Diversified Banks",
      "industry" : {
            "id" : "401010",
            "name" : "Banks"
      },
      "group" : {
            "id" : "4010",
            "name" : "Banks"
      },
      "sector" : {
            "id" : "40",
            "name" : "Financials"
      }
  },
  "40101015" : {
      "name" : "Regional Banks",
      "industry" : {
            "id" : "401010",
            "name" : "Banks"
      },
      "group" : {
            "id" : "4010",
            "name" : "Banks"
      },
      "sector" : {
            "id" : "40",
            "name" : "Financials"
      }
  },
  "40102010" : {
      "name" : "Thrifts & Mortgage Finance",
      "industry" : {
            "id" : "401020",
            "name" : "Thrifts & Mortgage Finance"
      },
      "group" : {
            "id" : "4010",
            "name" : "Banks"
      },
      "sector" : {
            "id" : "40",
            "name" : "Financials"
      }
  },
  "40201020" : {
      "name" : "Other Diversified Financial Services",
      "industry" : {
            "id" : "401020",
            "name" : "Thrifts & Mortgage Finance"
      },
      "group" : {
            "id" : "4010",
            "name" : "Banks"
      },
      "sector" : {
            "id" : "40",
            "name" : "Financials"
      }
  },
  "40201030" : {
      "name" : "Multi-Sector Holdings",
      "industry" : {
            "id" : "401020",
            "name" : "Thrifts & Mortgage Finance"
      },
      "group" : {
            "id" : "4010",
            "name" : "Banks"
      },
      "sector" : {
            "id" : "40",
            "name" : "Financials"
      }
  },
  "40201040" : {
      "name" : "Specialized Finance",
      "industry" : {
            "id" : "401020",
            "name" : "Thrifts & Mortgage Finance"
      },
      "group" : {
            "id" : "4010",
            "name" : "Banks"
      },
      "sector" : {
            "id" : "40",
            "name" : "Financials"
      }
  },
  "40202010" : {
      "name" : "Consumer Finance",
      "industry" : {
            "id" : "402020",
            "name" : "Consumer Finance"
      },
      "group" : {
            "id" : "4010",
            "name" : "Banks"
      },
      "sector" : {
            "id" : "40",
            "name" : "Financials"
      }
  },
  "40203010" : {
      "name" : "Asset Management & Custody Banks",
      "industry" : {
            "id" : "402030",
            "name" : "Capital Markets"
      },
      "group" : {
            "id" : "4010",
            "name" : "Banks"
      },
      "sector" : {
            "id" : "40",
            "name" : "Financials"
      }
  },
  "40203020" : {
      "name" : "Investment Banking & Brokerage",
      "industry" : {
            "id" : "402030",
            "name" : "Capital Markets"
      },
      "group" : {
            "id" : "4010",
            "name" : "Banks"
      },
      "sector" : {
            "id" : "40",
            "name" : "Financials"
      }
  },
  "40203030" : {
      "name" : "Diversified Capital Markets",
      "industry" : {
            "id" : "402030",
            "name" : "Capital Markets"
      },
      "group" : {
            "id" : "4010",
            "name" : "Banks"
      },
      "sector" : {
            "id" : "40",
            "name" : "Financials"
      }
  },
  "40301010" : {
      "name" : "Insurance Brokers",
      "industry" : {
            "id" : "403010",
            "name" : "Insurance"
      },
      "group" : {
            "id" : "4030",
            "name" : "Insurance"
      },
      "sector" : {
            "id" : "40",
            "name" : "Financials"
      }
  },
  "40301020" : {
      "name" : "Life & Health Insurance",
      "industry" : {
            "id" : "403010",
            "name" : "Insurance"
      },
      "group" : {
            "id" : "4030",
            "name" : "Insurance"
      },
      "sector" : {
            "id" : "40",
            "name" : "Financials"
      }
  },
  "40301030" : {
      "name" : "Multi-line Insurance",
      "industry" : {
            "id" : "403010",
            "name" : "Insurance"
      },
      "group" : {
            "id" : "4030",
            "name" : "Insurance"
      },
      "sector" : {
            "id" : "40",
            "name" : "Financials"
      }
  },
  "40301040" : {
      "name" : "Property & Casualty Insurance",
      "industry" : {
            "id" : "403010",
            "name" : "Insurance"
      },
      "group" : {
            "id" : "4030",
            "name" : "Insurance"
      },
      "sector" : {
            "id" : "40",
            "name" : "Financials"
      }
  },
  "40301050" : {
      "name" : "Reinsurance",
      "industry" : {
            "id" : "403010",
            "name" : "Insurance"
      },
      "group" : {
            "id" : "4030",
            "name" : "Insurance"
      },
      "sector" : {
            "id" : "40",
            "name" : "Financials"
      }
  },
  "40402010" : {
      "name" : "Diversified REITs",
      "industry" : {
            "id" : "404020",
            "name" : "Real Estate Investment Trusts (REITs)"
      },
      "group" : {
            "id" : "4030",
            "name" : "Insurance"
      },
      "sector" : {
            "id" : "40",
            "name" : "Financials"
      }
  },
  "40402020" : {
      "name" : "Industrial REITs",
      "industry" : {
            "id" : "404020",
            "name" : "Real Estate Investment Trusts (REITs)"
      },
      "group" : {
            "id" : "4030",
            "name" : "Insurance"
      },
      "sector" : {
            "id" : "40",
            "name" : "Financials"
      }
  },
  "40402030" : {
      "name" : "Mortgage REITs",
      "industry" : {
            "id" : "404020",
            "name" : "Real Estate Investment Trusts (REITs)"
      },
      "group" : {
            "id" : "4030",
            "name" : "Insurance"
      },
      "sector" : {
            "id" : "40",
            "name" : "Financials"
      }
  },
  "40402035" : {
      "name" : "Hotel & Resort REITs",
      "industry" : {
            "id" : "404020",
            "name" : "Real Estate Investment Trusts (REITs)"
      },
      "group" : {
            "id" : "4030",
            "name" : "Insurance"
      },
      "sector" : {
            "id" : "40",
            "name" : "Financials"
      }
  },
  "40402040" : {
      "name" : "Office REITs",
      "industry" : {
            "id" : "404020",
            "name" : "Real Estate Investment Trusts (REITs)"
      },
      "group" : {
            "id" : "4030",
            "name" : "Insurance"
      },
      "sector" : {
            "id" : "40",
            "name" : "Financials"
      }
  },
  "40402045" : {
      "name" : "Health Care REITs",
      "industry" : {
            "id" : "404020",
            "name" : "Real Estate Investment Trusts (REITs)"
      },
      "group" : {
            "id" : "4030",
            "name" : "Insurance"
      },
      "sector" : {
            "id" : "40",
            "name" : "Financials"
      }
  },
  "40402050" : {
      "name" : "Residential REITs",
      "industry" : {
            "id" : "404020",
            "name" : "Real Estate Investment Trusts (REITs)"
      },
      "group" : {
            "id" : "4030",
            "name" : "Insurance"
      },
      "sector" : {
            "id" : "40",
            "name" : "Financials"
      }
  },
  "40402060" : {
      "name" : "Retail REITs",
      "industry" : {
            "id" : "404020",
            "name" : "Real Estate Investment Trusts (REITs)"
      },
      "group" : {
            "id" : "4030",
            "name" : "Insurance"
      },
      "sector" : {
            "id" : "40",
            "name" : "Financials"
      }
  },
  "40402070" : {
      "name" : "Specialized REITs",
      "industry" : {
            "id" : "404020",
            "name" : "Real Estate Investment Trusts (REITs)"
      },
      "group" : {
            "id" : "4030",
            "name" : "Insurance"
      },
      "sector" : {
            "id" : "40",
            "name" : "Financials"
      }
  },
  "40403010" : {
      "name" : "Diversified Real Estate Activities",
      "industry" : {
            "id" : "404030",
            "name" : "Real Estate Management & Development"
      },
      "group" : {
            "id" : "4030",
            "name" : "Insurance"
      },
      "sector" : {
            "id" : "40",
            "name" : "Financials"
      }
  },
  "40403020" : {
      "name" : "Real Estate Operating Companies",
      "industry" : {
            "id" : "404030",
            "name" : "Real Estate Management & Development"
      },
      "group" : {
            "id" : "4030",
            "name" : "Insurance"
      },
      "sector" : {
            "id" : "40",
            "name" : "Financials"
      }
  },
  "40403030" : {
      "name" : "Real Estate Development",
      "industry" : {
            "id" : "404030",
            "name" : "Real Estate Management & Development"
      },
      "group" : {
            "id" : "4030",
            "name" : "Insurance"
      },
      "sector" : {
            "id" : "40",
            "name" : "Financials"
      }
  },
  "40403040" : {
      "name" : "Real Estate Services",
      "industry" : {
            "id" : "404030",
            "name" : "Real Estate Management & Development"
      },
      "group" : {
            "id" : "4030",
            "name" : "Insurance"
      },
      "sector" : {
            "id" : "40",
            "name" : "Financials"
      }
  },
  "45101010" : {
      "name" : "Internet Software & Services",
      "industry" : {
            "id" : "451010",
            "name" : "Internet Software & Services"
      },
      "group" : {
            "id" : "4510",
            "name" : "Software & Services"
      },
      "sector" : {
            "id" : "45",
            "name" : "Information Technology"
      }
  },
  "45102010" : {
      "name" : "IT Consulting & Other Services",
      "industry" : {
            "id" : "451020",
            "name" : "IT Services"
      },
      "group" : {
            "id" : "4510",
            "name" : "Software & Services"
      },
      "sector" : {
            "id" : "45",
            "name" : "Information Technology"
      }
  },
  "45102020" : {
      "name" : "Data Processing & Outsourced Services",
      "industry" : {
            "id" : "451020",
            "name" : "IT Services"
      },
      "group" : {
            "id" : "4510",
            "name" : "Software & Services"
      },
      "sector" : {
            "id" : "45",
            "name" : "Information Technology"
      }
  },
  "45103010" : {
      "name" : "Application Software",
      "industry" : {
            "id" : "451030",
            "name" : "Software"
      },
      "group" : {
            "id" : "4510",
            "name" : "Software & Services"
      },
      "sector" : {
            "id" : "45",
            "name" : "Information Technology"
      }
  },
  "45103020" : {
      "name" : "Systems Software",
      "industry" : {
            "id" : "451030",
            "name" : "Software"
      },
      "group" : {
            "id" : "4510",
            "name" : "Software & Services"
      },
      "sector" : {
            "id" : "45",
            "name" : "Information Technology"
      }
  },
  "45103030" : {
      "name" : "Home Entertainment Software",
      "industry" : {
            "id" : "451030",
            "name" : "Software"
      },
      "group" : {
            "id" : "4510",
            "name" : "Software & Services"
      },
      "sector" : {
            "id" : "45",
            "name" : "Information Technology"
      }
  },
  "45201020" : {
      "name" : "Communications Equipment",
      "industry" : {
            "id" : "452010",
            "name" : "Communications Equipment"
      },
      "group" : {
            "id" : "4520",
            "name" : "Technology Hardware & Equipment"
      },
      "sector" : {
            "id" : "45",
            "name" : "Information Technology"
      }
  },
  "45202030" : {
      "name" : "Technology Hardware, Storage & Peripherals",
      "industry" : {
            "id" : "452010",
            "name" : "Communications Equipment"
      },
      "group" : {
            "id" : "4520",
            "name" : "Technology Hardware & Equipment"
      },
      "sector" : {
            "id" : "45",
            "name" : "Information Technology"
      }
  },
  "45203010" : {
      "name" : "Electronic Equipment & Instruments ",
      "industry" : {
            "id" : "452030",
            "name" : "Electronic Equipment, Instruments & Components"
      },
      "group" : {
            "id" : "4520",
            "name" : "Technology Hardware & Equipment"
      },
      "sector" : {
            "id" : "45",
            "name" : "Information Technology"
      }
  },
  "45203015" : {
      "name" : "Electronic Components",
      "industry" : {
            "id" : "452030",
            "name" : "Electronic Equipment, Instruments & Components"
      },
      "group" : {
            "id" : "4520",
            "name" : "Technology Hardware & Equipment"
      },
      "sector" : {
            "id" : "45",
            "name" : "Information Technology"
      }
  },
  "45203020" : {
      "name" : "Electronic Manufacturing Services",
      "industry" : {
            "id" : "452030",
            "name" : "Electronic Equipment, Instruments & Components"
      },
      "group" : {
            "id" : "4520",
            "name" : "Technology Hardware & Equipment"
      },
      "sector" : {
            "id" : "45",
            "name" : "Information Technology"
      }
  },
  "45203030" : {
      "name" : "Technology Distributors",
      "industry" : {
            "id" : "452030",
            "name" : "Electronic Equipment, Instruments & Components"
      },
      "group" : {
            "id" : "4520",
            "name" : "Technology Hardware & Equipment"
      },
      "sector" : {
            "id" : "45",
            "name" : "Information Technology"
      }
  },
  "45301010" : {
      "name" : "Semiconductor Equipment ",
      "industry" : {
            "id" : "453010",
            "name" : "Semiconductors & Semiconductor Equipment"
      },
      "group" : {
            "id" : "4530",
            "name" : "Semiconductors & Semiconductor Equipment"
      },
      "sector" : {
            "id" : "45",
            "name" : "Information Technology"
      }
  },
  "45301020" : {
      "name" : "Semiconductors",
      "industry" : {
            "id" : "453010",
            "name" : "Semiconductors & Semiconductor Equipment"
      },
      "group" : {
            "id" : "4530",
            "name" : "Semiconductors & Semiconductor Equipment"
      },
      "sector" : {
            "id" : "45",
            "name" : "Information Technology"
      }
  },
  "50101010" : {
      "name" : "Alternative Carriers",
      "industry" : {
            "id" : "501010",
            "name" : "Diversified Telecommunication Services"
      },
      "group" : {
            "id" : "5010",
            "name" : "Telecommunication Services"
      },
      "sector" : {
            "id" : "50",
            "name" : "Telecommunication Services"
      }
  },
  "50101020" : {
      "name" : "Integrated Telecommunication Services",
      "industry" : {
            "id" : "501010",
            "name" : "Diversified Telecommunication Services"
      },
      "group" : {
            "id" : "5010",
            "name" : "Telecommunication Services"
      },
      "sector" : {
            "id" : "50",
            "name" : "Telecommunication Services"
      }
  },
  "50102010" : {
      "name" : "Wireless Telecommunication Services",
      "industry" : {
            "id" : "501020",
            "name" : "Wireless Telecommunication Services"
      },
      "group" : {
            "id" : "5010",
            "name" : "Telecommunication Services"
      },
      "sector" : {
            "id" : "50",
            "name" : "Telecommunication Services"
      }
  },
  "55101010" : {
      "name" : "Electric Utilities",
      "industry" : {
            "id" : "551010",
            "name" : "Electric Utilities"
      },
      "group" : {
            "id" : "5510",
            "name" : "Utilities"
      },
      "sector" : {
            "id" : "55",
            "name" : "Utilities"
      }
  },
  "55102010" : {
      "name" : "Gas Utilities",
      "industry" : {
            "id" : "551020",
            "name" : "Gas Utilities"
      },
      "group" : {
            "id" : "5510",
            "name" : "Utilities"
      },
      "sector" : {
            "id" : "55",
            "name" : "Utilities"
      }
  },
  "55103010" : {
      "name" : "Multi-Utilities",
      "industry" : {
            "id" : "551030",
            "name" : "Multi-Utilities"
      },
      "group" : {
            "id" : "5510",
            "name" : "Utilities"
      },
      "sector" : {
            "id" : "55",
            "name" : "Utilities"
      }
  },
  "55104010" : {
      "name" : "Water Utilities",
      "industry" : {
            "id" : "551040",
            "name" : "Water Utilities"
      },
      "group" : {
            "id" : "5510",
            "name" : "Utilities"
      },
      "sector" : {
            "id" : "55",
            "name" : "Utilities"
      }
  },
  "55105010" : {
      "name" : "Independent Power Producers & Energy Traders",
      "industry" : {
            "id" : "551050",
            "name" : "Independent Power and Renewable Electricity Producers"
      },
      "group" : {
            "id" : "5510",
            "name" : "Utilities"
      },
      "sector" : {
            "id" : "55",
            "name" : "Utilities"
      }
  },
  "55105020" : {
      "name" : "Renewable Electricity ",
      "industry" : {
            "id" : "551050",
            "name" : "Independent Power and Renewable Electricity Producers"
      },
      "group" : {
            "id" : "5510",
            "name" : "Utilities"
      },
      "sector" : {
            "id" : "55",
            "name" : "Utilities"
      }
  }
};
