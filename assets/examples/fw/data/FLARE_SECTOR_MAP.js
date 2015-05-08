var flareSectorMap = function(){
  return {
    "name": "Allocation",
    "children": [
      {
        "name": "Energy",
        "sector_id": 10,
        "children": [
          {
            "name": "Energy",
            "sector_id": 10,
            "children": [
              {
                "name": "Energy Equipment & Services",
                "sector_id": 10,
                "children": [
                  {"name": "Oil & Gas Drilling", "sector_id": 10},
                  {"name": "Oil & Gas Equipment & Services", "sector_id": 10}
                ]
              },
              {
                "name": "Oil",
                "sector_id": 10,
                "children": [
                  {
                    "name": "Gas & Consumable Fuels",
                    "children": [
                      {"name": "Integrated Oil & Gas", value: 90101},
                      {"name": "Oil & Gas Exploration & Production"},
                      {"name": "Oil & Gas Refining & Marketing"},
                      {"name": "Oil & Gas Storage & Transportation"},
                      {"name": "Coal & Consumable Fuels"}
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "name": "Materials",
        "sector_id": 15,
        "children": [
          {
            "name": "Materials",
            "sector_id": 15,
            "children": [
              {
                "name": "Chemicals",
                "sector_id": 15,
                "children": [
                  {"name": "Commodity Chemicals" ,"sector_id": 15},
                  {"name": "Diversified Chemicals" ,"sector_id": 15},
                  {"name": "Fertilizers & Agricultural Chemicals" ,"sector_id": 15},
                  {"name": "Industrial Gases" ,"sector_id": 15},
                  {"name": "Specialty Chemicals" ,"sector_id": 15}
                ]
              },
              {
                "name": "Construction Materials",
                 "sector_id": 15,
                "children": [{"name": "Construction Materials" ,"sector_id": 15}]
              },
              {
                "name": "Containers & Packaging",
                 "sector_id": 15,
                "children": [
                  {"name": "Metal & Glass Containers" ,"sector_id": 15},
                  {"name": "Paper Packaging" ,"sector_id": 15}
                ]
              },
              {
                "name": "Metals & Mining",
                 "sector_id": 15,
                "children": [
                  {"name": "Aluminum", "sector_id": 15},
                  {"name": "Diversified Metals & Mining", "sector_id": 15},
                  {"name": "Gold", "sector_id": 15},
                  {"name": "Precious Metals & Minerals", "sector_id": 15},
                  {"name": "Silver", "sector_id": 15},
                  {"name": "Steel", "sector_id": 15}
                ]
              },
              {
                "name": "Paper & Forest Products",
                "sector_id": 15,
                "children": [
                  {"name": "Forest Products", "sector_id": 15},
                  {"name": "Paper Products", "sector_id": 15}
                ]
              }
            ]
          }
        ]
      },
      {
        "name": "Industrials",
        "sector_id": 20,
        "children": [
          {
            "name": "Capital Goods",
            "sector_id": 20,
            "children": [
              {
                "name": "Aerospace & Defense",
                "sector_id": 20,
                "children": [{"name": "Aerospace & Defense", "sector_id": 20}]
              },
              {
                "name": "Building Products",
                "sector_id": 20,
                "children": [{"name": "Building Products", "sector_id": 20}]
              },
              {
                "name": "Construction & Engineering",
                "sector_id": 20,
                "children": [{"name": "Construction & Engineering", "sector_id": 20}]
              },
              {
                "name": "Electrical Equipment",
                "sector_id": 20,
                "children": [
                  {"name": "Electrical Components & Equipment", "sector_id": 20},
                  {"name": "Heavy Electrical Equipment", "sector_id": 20}
                ]
              },
              {
                "name": "Industrial Conglomerates",
                "sector_id": 20,
                "children": [{"name": "Industrial Conglomerates", "sector_id": 20}]
              },
              {
                "name": "Machinery",
                "sector_id": 20,
                "children": [
                  {"name": "Construction Machinery & Heavy Trucks", "sector_id": 20},
                  {"name": "Agricultural & Farm Machinery", "sector_id": 20},
                  {"name": "Industrial Machinery", "sector_id": 20}
                ]
              },
              {
                "name": "Trading Companies & Distributors",
                "sector_id": 20,
                "children": [{"name": "Trading Companies & Distributors", "sector_id": 20}]
              }
            ]
          },
          {
            "name": "Commercial  & Professional Services",
            "sector_id": 20,
            "children": [
              {
                "name": "Commercial Services & Supplies",
                "sector_id": 20,
                "children": [
                  {"name": "Commercial Printing", "sector_id": 20},
                  {"name": "Environmental & Facilities Services", "sector_id": 20},
                  {"name": "Office Services & Supplies", "sector_id": 20},
                  {"name": "Diversified Support Services", "sector_id": 20},
                  {"name": "Security & Alarm Services", "sector_id": 20},
                  {"name": "Research & Consulting Services", "sector_id": 20}
                ]
              },
              {
                "name": "Professional Services",
                "sector_id": 20,
                "children": [{"name": "Human Resource & Employment Services", "sector_id": 20}]
              }
            ]
          },
          {
            "name": "Transportation",
            "sector_id": 20,
            "children": [
              {
                "name": "Air Freight & Logistics",
                "sector_id": 20,
                "children": [{"name": "Air Freight & Logistics", "sector_id": 20}]
              },
              {
                "name": "Airlines",
                "sector_id": 20,
                "children": [{"name": "Airlines", "sector_id": 20}]
              },
              {
                "name": "Marine",
                "sector_id": 20,
                "children": [{"name": "Marine", "sector_id": 20}]
              },
              {
                "name": "Road & Rail",
                "sector_id": 20,
                "children": [
                  {"name": "Railroads", "sector_id": 20},
                  {"name": "Trucking", "sector_id": 20}
                ]
              },
              {
                "name": "Transportation Infrastructure",
                "sector_id": 20,
                "children": [
                  {"name": "Airport Services", "sector_id": 20},
                  {"name": "Highways & Railtracks", "sector_id": 20},
                  {"name": "Marine Ports & Services", "sector_id": 20}
                ]
              }
            ]
          }
        ]
      },
      {
        "name": "Consumer Discretionary",
        "sector_id": 25,
        "children": [
          {
            "name": "Automobiles & Components",
            "sector_id": 25,
            "children": [
              {
                "name": "Auto Components",
                "sector_id": 25,
                "children": [
                  {"name": "Auto Parts & Equipment", "sector_id": 25},
                  {"name": "Tires & Rubber", "sector_id": 25}
                ]
              },
              {
                "name": "Automobiles",
                "sector_id": 25,
                "children": [
                  {"name": "Automobile Manufacturers", "sector_id": 25},
                  {"name": "Motorcycle Manufacturers", "sector_id": 25}
                ]
              }
            ]
          },
          {
            "name": "Consumer Durables & Apparel",
            "sector_id": 25,
            "children": [
              {
                "name": "Household Durables",
                "sector_id": 25,
                "children": [
                  {"name": "Consumer Electronics", "sector_id": 25},
                  {"name": "Home Furnishings", "sector_id": 25},
                  {"name": "Homebuilding", "sector_id": 25},
                  {"name": "Household Appliances", "sector_id": 25},
                  {"name": "Housewares & Specialties", "sector_id": 25}
                ]
              },
              {
                "name": "Leisure Products",
                "sector_id": 25,
                "children": [{"name": "Leisure Products", "sector_id": 25}]
              },
              {
                "name": "Textiles",
                "sector_id": 25,
                "children": [
                  {
                    "name": "Apparel & Luxury Goods",
                  "sector_id": 25,
                    "children": [
                      {
                        "name": "Apparel",
                        "sector_id": 25,
                        "children": [{"name": "Accessories & Luxury Goods", value: 167000, "sector_id": 25}]
                      },
                      {"name": "Footwear", "sector_id": 25},
                      {"name": "Textiles", "sector_id": 25}
                    ]
                  }
                ]
              }
            ]
          },
          {
            "name": "Consumer Services",
            "sector_id": 25,
            "children": [
              {
                "name": "Hotels",
                "sector_id": 25,
                "children": [
                  {
                    "name": "Restaurants & Leisure",
                    "sector_id": 25,
                    "children": [
                      {"name": "Casinos & Gaming", "sector_id": 25},
                      {
                        "name": "Hotels",
                        "sector_id": 25,
                        "children": [{"name": "Resorts & Cruise Lines", "sector_id": 25}]
                      },
                      {"name": "Leisure Facilities", "sector_id": 25},
                      {"name": "Restaurants", "sector_id": 25}
                    ]
                  }
                ]
              },
              {
                "name": "Diversified Consumer Services",
                "sector_id": 25,
                "children": [
                  {"name": "Education Services", "sector_id": 25},
                  {"name": "Specialized Consumer Services", "sector_id": 25}
                ]
              }
            ]
          },
          {
            "name": "Media",
            "sector_id": 25,
            "children": [
              {
                "name": "Media",
                "sector_id": 25,
                "children": [
                  {"name": "Advertising", "sector_id": 25},
                  {"name": "Broadcasting"},
                  {"name": "Cable & Satellite", "sector_id": 25},
                  {"name": "Movies & Entertainment", "sector_id": 25},
                  {"name": "Publishing", "sector_id": 25}
                ]
              }
            ]
          },
          {
            "name": "Retailing",
              "sector_id": 25,
            "children": [
              {
                "name": "Distributors",
                "sector_id": 25,
                "children": [{"name": "Distributors", "sector_id": 25}]
              },
              {
                "name": "Internet & Catalog Retail",
                "sector_id": 25,
                "children": [
                  {"name": "Catalog Retail", "sector_id": 25},
                  {"name": "Internet Retail", "sector_id": 25}
                ]
              },
              {
                "name": "Multiline Retail",
                "sector_id": 25,
                "children": [
                  {"name": "Department Stores", "sector_id": 25},
                  {"name": "General Merchandise Stores", "sector_id": 25}
                ]
              },
              {
                "name": "Specialty Retail",
                "sector_id": 25,
                "children": [
                  {"name": "Apparel Retail", "sector_id": 25},
                  {"name": "Computer & Electronics Retail", "sector_id": 25},
                  {"name": "Home Improvement Retail", "sector_id": 25},
                  {"name": "Specialty Stores", "sector_id": 25},
                  {"name": "Automotive Retail", "sector_id": 25},
                  {"name": "Homefurnishing Retail", "sector_id": 25}
                ]
              }
            ]
          }
        ]
      },
      {
        "name": "Consumer Staples",
        "sector_id": 30,
        "children": [
          {
            "name": "Food & Staples Retailing",
            "sector_id": 30,
            "children": [
              {
                "name": "Food & Staples Retailing",
                "sector_id": 30,
                "children": [
                  {"name": "Drug Retail", "sector_id": 30},
                  {"name": "Food Distributors", "sector_id": 30},
                  {"name": "Food Retail", "sector_id": 30},
                  {"name": "Hypermarkets & Super Centers", "sector_id": 30}
                ]
              }
            ]
          },
          {
            "name": "Food",
            "sector_id": 30,
            "children": [
              {
                "name": "Beverage & Tobacco",
                "sector_id": 30,
                "children": [
                  {
                    "name": "Beverages",
                    "sector_id": 30,
                    "children": [
                      {"name": "Brewers", "sector_id": 30},
                      {"name": "Distillers & Vintners", "sector_id": 30},
                      {"name": "Soft Drinks", "sector_id": 30}
                    ]
                  },
                  {
                    "name": "Food Products",
                    "sector_id": 30,
                    "children": [
                      {"name": "Agricultural Products", "sector_id": 30},
                      {"name": "Packaged Foods & Meats", "sector_id": 30}
                    ]
                  },
                  {
                    "name": "Tobacco",
                    "sector_id": 30,
                    "children": [{"name": "Tobacco", "sector_id": 30}]
                  }
                ]
              }
            ]
          },
          {
            "name": "Household & Personal Products",
            "sector_id": 30,
            "children": [
              {
                "name": "Household Products",
                "sector_id": 30,
                "children": [{"name": "Household Products", "sector_id": 30}]
              },
              {
                "name": "Personal Products",
                "sector_id": 30,
                "children": [{"name": "Personal Products", "sector_id": 30}]
              }
            ]
          }
        ]
      },
      {
        "name": "Health Care",
        "sector_id": 35,
        "children": [
          {
            "name": "Health Care Equipment & Services",
            "sector_id": 35,
            "children": [
              {
                "name": "Health Care Equipment & Supplies",
                "sector_id": 35,
                "children": [
                  {"name": "Health Care Equipment", "sector_id": 35},
                  {"name": "Health Care Supplies", "sector_id": 35}
                ]
              },
              {
                "name": "Health Care Providers & Services",
                "sector_id": 35,
                "children": [
                  {"name": "Health Care Distributors", "sector_id": 35},
                  {"name": "Health Care  Services", "sector_id": 35},
                  {"name": "Health Care Facilities", "sector_id": 35},
                  {"name": "Managed Health Care", "sector_id": 35}
                ]
              },
              {
                "name": "Health Care Technology",
                "sector_id": 35,
                "children": [{"name": "Health Care Technology", "sector_id": 35}]
              }
            ]
          },
          {
            "name": "Pharmaceuticals",
            "sector_id": 35,
            "children": [
              {
                "name": "Biotechnology & Life Sciences",
                "sector_id": 35,
                "children": [
                  {
                    "name": "Biotechnology", "sector_id": 35,
                    "children": [{"name": "Biotechnology", "sector_id": 35}]
                  },
                  {
                    "name": "Pharmaceuticals",
                    "children": [{"name": "Pharmaceuticals", "sector_id": 35}]
                  },
                  {
                    "name": "Life Sciences Tools & Services",
                    "children": [{"name": "Life Sciences Tools & Services", "sector_id": 35}]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "name": "Financials",
        "sector_id": 40,
        "children": [
          {
            "name": "Banks",
            "sector_id": 40,
            "children": [
              {
                "name": "Banks",
                "sector_id": 40,
                "children": [
                  {"name": "Diversified Banks", "sector_id": 40},
                  {"name": "Regional Banks"}
                ]
              },
              {
                "name": "Thrifts & Mortgage Finance",
                "sector_id": 40,
                "children": [
                  {"name": "Thrifts & Mortgage Finance", "sector_id": 40},
                  {"name": "Other Diversified Financial Services", "sector_id": 40},
                  {"name": "Multi-Sector Holdings", "sector_id": 40},
                  {"name": "Specialized Finance", "sector_id": 40}
                ]
              },
              {
                "name": "Consumer Finance",
                "sector_id": 40,
                "children": [{"name": "Consumer Finance", "sector_id": 40}]
              },
              {
                "name": "Capital Markets",
                "sector_id": 40,
                "children": [
                  {"name": "Asset Management & Custody Banks", "sector_id": 40},
                  {"name": "Investment Banking & Brokerage", "sector_id": 40},
                  {"name": "Diversified Capital Markets", "sector_id": 40}
                ]
              }
            ]
          },
          {
            "name": "Insurance",
            "sector_id": 40,
            "children": [
              {
                "name": "Insurance",
                "sector_id": 40,
                "children": [
                  {"name": "Insurance Brokers", "sector_id": 40},
                  {"name": "Life & Health Insurance", "sector_id": 40},
                  {"name": "Multi-line Insurance", "sector_id": 40},
                  {"name": "Property & Casualty Insurance", "sector_id": 40},
                  {"name": "Reinsurance", "sector_id": 40}
                ]
              }
            ]
          },
          {
            "name": "Real Estate",
            "sector_id": 40,
            "children": [
              {
                "name": "Real Estate Investment Trusts (REITs)",
                "sector_id": 40,
                "children": [
                  {"name": "Diversified REITs", "sector_id": 40},
                  {"name": "Industrial REITs", "sector_id": 40},
                  {"name": "Mortgage REITs", "sector_id": 40},
                  {"name": "Hotel & Resort REITs", "sector_id": 40},
                  {"name": "Office REITs", "sector_id": 40},
                  {"name": "Health Care REITs", "sector_id": 40},
                  {"name": "Residential REITs", "sector_id": 40},
                  {"name": "Retail REITs", "sector_id": 40},
                  {"name": "Specialized REITs", "sector_id": 40}
                ]
              },
              {
                "name": "Real Estate Management & Development",
                "sector_id": 40,
                "children": [
                  {"name": "Diversified Real Estate Activities", "sector_id": 40},
                  {"name": "Real Estate Operating Companies", "sector_id": 40},
                  {"name": "Real Estate Development", "sector_id": 40},
                  {"name": "Real Estate Services", "sector_id": 40}
                ]
              }
            ]
          }
        ]
      },
      {
        "name": "Information Technology",
        "sector_id": 45,
        "children": [
          {
            "name": "Software & Services",
            "sector_id": 45,
            "children": [
              {
                "name": "Internet Software & Services",
                "children": [{"name": "Internet Software & Services", "sector_id": 45}]
              },
              {
                "name": "IT Services",
                "sector_id": 45,
                "children": [
                  {"name": "IT Consulting & Other Services", "sector_id": 45},
                  {"name": "Data Processing & Outsourced Services", "sector_id": 45}
                ]
              },
              {
                "name": "Software",
                "sector_id": 45,
                "children": [
                  {"name": "Application Software", "sector_id": 45},
                  {"name": "Systems Software", "sector_id": 45},
                  {"name": "Home Entertainment Software", "sector_id": 45}
                ]
              }
            ]
          },
          {
            "name": "Technology Hardware & Equipment",
            "sector_id": 45,
            "children": [
              {
                "name": "Communications Equipment",
                "sector_id": 45,
                "children": [{"name": "Communications Equipment", "sector_id": 45}]
              },
              {
                "name": "Computers & Peripherals",
                "sector_id": 45,
                "children": [
                  {
                    "name": "Technology Hardware",
                    "children": [{"name": "Storage & Peripherals", "sector_id": 45}]
                  }
                ]
              },
              {
                "name": "Electronic Equipment",
                "sector_id": 45,
                "children": [
                  {
                    "name": "Instruments & Components",
                    "children": [
                      {"name": "Electronic Equipment & Instruments", "sector_id": 45},
                      {"name": "Electronic Components", "sector_id": 45},
                      {"name": "Electronic Manufacturing Services", "sector_id": 45},
                      {"name": "Technology Distributors", "sector_id": 45}
                    ]
                  }
                ]
              }
            ]
          },
          {
            "name": "Semiconductors & Semiconductor Equipment",
            "sector_id": 45,
            "children": [
              {
                "name": "Semiconductors & Semiconductor Equipment",
                "sector_id": 45,
                "children": [
                  {"name": "Semiconductor Equipment", "sector_id": 45},
                  {"name": "Semiconductors", "sector_id": 45}
                ]
              }
            ]
          }
        ]
      },
      {
        "name": "Telecommunication Services",
        "sector_id": 50,
        "children": [
          {
            "name": "Telecommunication Services",
            "sector_id": 50,
            "children": [
              {
                "name": "Diversified Telecommunication Services",
                "sector_id": 50,
                "children": [
                  {"name": "Alternative Carriers", "sector_id": 50},
                  {"name": "Integrated Telecommunication Services", "sector_id": 50}
                ]
              },
              {
                "name": "Wireless Telecommunication Services",
                "sector_id": 50,
                "children": [{"name": "Wireless Telecommunication Services", "sector_id": 50}]
              }
            ]
          }
        ]
      },
      {
        "name": "Utilities",
        "sector_id": 55,
        "children": [
          {
            "name": "Utilities",
            "sector_id": 55,
            "children": [
              {
                "name": "Electric Utilities",
                "sector_id": 55,
                "children": [{"name": "Electric Utilities", "sector_id":55}]
              },
              {
                "name": "Gas Utilities",
                "sector_id": 55,
                "children": [{"name": "Gas Utilities", "sector_id":55}]
              },
              {
                "name": "Multi-Utilities",
                "sector_id": 55,
                "children": [{"name": "Multi-Utilities", "sector_id":55}]
              },
              {
                "name": "Water Utilities",
                "sector_id": 55,
                "children": [{"name": "Water Utilities", "sector_id":55}]
              },
              {
                "name": "Independent Power and Renewable Electricity Producers",
                "sector_id": 55,
                "children": [
                  {"name": "Independent Power Producers & Energy Traders", "sector_id":55},
                  {"name": "Renewable Electricity", "sector_id":55}
                ]
              }
            ]
          }
        ]
      }
    ]
  };
};

