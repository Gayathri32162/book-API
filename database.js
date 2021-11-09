// Temporary Database


//these are array of objects

//properties of mangoDB
//Documents have no structure rectrictions
//documents acts similar to objects in JSON format
//documents have key value pair
//No specific schema required before hand line SQL database
//structuring the data is easier
//mangoDB environment is very scalable(we can use it free till some limits)



let Book = [
    {
      ISBN: "12345ONE",
      title: "Getting started with MERN",
      authors: [1, 2],
      language: "en",
      pubDate: "2021-07-07",
      numOfPage: 225,
      category: ["fiction", "programming", "tech", "web dev"],
      publication: 1,
    },
    {
      ISBN: "12345Two",
      title: "Getting started with Python",
      authors: [1],
      language: "en",
      pubDate: "2021-07-07",
      numOfPage: 225,
      category: ["fiction", "tech", "web dev"],
      publication: 1,
    },
  ];
  
  
  let Author = [
    {
      id: 1,
      name: "pavan",
      books: ["12345ONE", "12345Two"],
    },
    {
      id: 2,
      name: "Deepak",
      books: ["12345ONE"],
    },
  ];
  
  let Publication = [
    {
      id: 1,
      name: "Chakra",
      books: ["12345ONE"],
    },
    {
      id: 2,
      name: "Vickie Publications",
      books: [],
    },
  ];
  
  module.exports = { Book, Author, Publication };








  /*
  {
    "ISBN":"secret book",
    "title":"suspense",
    "pubDate":"2021-09-11",
    "numPage":"en",
    "author":[
        
        ],
    "publications":[
            ],
    "category":[
        "suspense",
        "space",
        "education"
                ]
}

  */