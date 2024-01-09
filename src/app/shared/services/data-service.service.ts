import { Injectable } from '@angular/core';
import { Actor, Model, Talent } from '../resources/objects';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  models : Model[] = [
    {
      id: "SOLI000001",
      brand: "Emily Wisniewski",
      legalName: "Emily Wisniewski",
      gender: "Female",
      attributes: {
        height: "5 feet 6 inches",
        waist: "28 inches",
        chest: "35 inches",
        hips: "40 inches",
        dress: "4-6",
        shoe: "8",
        hair: "Brown",
        eyes: "Brown"
    },
      location: "Nova Scotia, Canada",
      profile: "assets/img/talent/soli000001/portfolio/8.JPG",
      age: 24,
      isElite: true,
      isNew: false,
      instagram: "",
      tiktok: "",
      facebook: "",
      portfolio: [
        "assets/img/talent/soli000001/portfolio/1.JPG",
        "assets/img/talent/soli000001/portfolio/2.JPG",
        "assets/img/talent/soli000001/portfolio/4.JPG",
        "assets/img/talent/soli000001/portfolio/5.JPG",
        "assets/img/talent/soli000001/portfolio/6.JPG",
        "assets/img/talent/soli000001/portfolio/7.JPG",
        "assets/img/talent/soli000001/portfolio/8.JPG",
        "assets/img/talent/soli000001/portfolio/9.PNG",
        "assets/img/talent/soli000001/portfolio/3.JPG",
        "assets/img/talent/soli000001/portfolio/10.JPG"
      ],
      digitals: [
        "assets/img/talent/soli000001/digitals/1.JPG",
        "assets/img/talent/soli000001/digitals/2.JPG",
        "assets/img/talent/soli000001/digitals/3.JPG",
        "assets/img/talent/soli000001/digitals/4.JPG",
        "assets/img/talent/soli000001/digitals/5.JPG",
        "assets/img/talent/soli000001/digitals/6.JPG",
      ]
    },
    {
      id: "SOLI000002",
      brand: "Brynn",
      legalName: "Brynn",
      gender: "Female",
      attributes: {
        height: "5 feet 7 inches",
        waist: "26 inches",
        chest: "34 inches",
        hips: "37 inches",
        dress: "Not Available",
        shoe: "8",
        hair: "Brown",
        eyes: "Hazel"
    },
      location: "Nova Scotia, Canada",
      profile: "assets/img/talent/soli000002/portfolio/1.jpg",
      age: 24,
      isElite: true,
      isNew: false,
      instagram: "brynnie749",
      tiktok: "",
      facebook: "",
      portfolio: [
        "assets/img/talent/soli000002/portfolio/1.jpg",
        "assets/img/talent/soli000002/portfolio/2.jpg",
        "assets/img/talent/soli000002/portfolio/3.jpg",
        "assets/img/talent/soli000002/portfolio/4.jpg",
        "assets/img/talent/soli000002/portfolio/5.jpg",
        "assets/img/talent/soli000002/portfolio/6.jpg",
        "assets/img/talent/soli000002/portfolio/7.jpg",
        "assets/img/talent/soli000002/portfolio/8.jpg",
        "assets/img/talent/soli000002/portfolio/9.jpg",
        "assets/img/talent/soli000002/portfolio/10.jpg"
      ],
      digitals: [
        "assets/img/talent/soli000002/digitals/1.jpg",
        "assets/img/talent/soli000002/digitals/2.jpeg",
        "assets/img/talent/soli000002/digitals/3.jpg",
        "assets/img/talent/soli000002/digitals/4.jpg",
        "assets/img/talent/soli000002/digitals/5.jpeg",
        "assets/img/talent/soli000002/digitals/6.jpeg",
      ]
    },
    {
      id: "SOLI000003",
      brand: "Valerie Schagen",
      legalName: "Valerie Schagen",
      gender: "Female",
      attributes: {
        height: "6 feet 4 inches",
        waist: "27 inches",
        chest: "33 inches",
        hips: "38 inches",
        dress: "4",
        shoe: "9.5",
        hair: "Brown",
        eyes: "Brown"
    },
      location: "Nova Scotia, Canada",
      profile: "assets/img/talent/soli000003/portfolio/1.jpg",
      age: 24,
      isElite: true,
      isNew: false,
      instagram: "valerie.modelx",
      tiktok: "valerie.model",
      facebook: "",
      portfolio: [
        "assets/img/talent/soli000003/portfolio/1.jpg",
        "assets/img/talent/soli000003/portfolio/2.jpg",
        "assets/img/talent/soli000003/portfolio/4.jpg",
        "assets/img/talent/soli000003/portfolio/5.jpg",
        "assets/img/talent/soli000003/portfolio/6.jpg",
        "assets/img/talent/soli000003/portfolio/7.jpg",
        "assets/img/talent/soli000003/portfolio/8.jpg",
        "assets/img/talent/soli000003/portfolio/9.jpg",
        "assets/img/talent/soli000003/portfolio/3.jpg",
        "assets/img/talent/soli000003/portfolio/10.jpg"
      ],
      digitals: [
        "assets/img/talent/soli000003/digitals/1.JPG",
        "assets/img/talent/soli000003/digitals/2.JPG",
        "assets/img/talent/soli000003/digitals/3.JPG",
        "assets/img/talent/soli000003/digitals/4.JPG",
      ]
    },
    {
      id: "SOLI000004",
      brand: "Tek Omod",
      legalName: "Tek Omod",
      gender: "Female",
      attributes: {
        height: "5 feet 8.5 inches",
        waist: "24 inches",
        chest: "31 inches",
        hips: "36.5 inches",
        dress: "XS",
        shoe: "7.5",
        hair: "Black",
        eyes: "Brown"
    },
      location: "Nova Scotia, Canada",
      profile: "assets/img/talent/soli000004/portfolio/9.jpeg",
      age: 24,
      isElite: true,
      isNew: false,
      instagram: "Tek_solimodel",
      tiktok: "Tek.Omod",
      facebook: "",
      portfolio: [
        "assets/img/talent/soli000004/portfolio/1.jpg",
        "assets/img/talent/soli000004/portfolio/2.JPG",
        "assets/img/talent/soli000004/portfolio/4.JPG",
        "assets/img/talent/soli000004/portfolio/5.JPG",
        "assets/img/talent/soli000004/portfolio/6.JPG",
        "assets/img/talent/soli000004/portfolio/7.JPG",
        "assets/img/talent/soli000004/portfolio/8.JPG",
        "assets/img/talent/soli000004/portfolio/3.JPG",
        "assets/img/talent/soli000004/portfolio/9.jpeg"
      ],
      digitals: [
      ]
    },
    {
      id: "SOLI000005",
      brand: "Bible Omod",
      legalName: "Bible Omod",
      gender: "Female",
      attributes: {
        height: "5 feet 11 inches",
        waist: "25 inches",
        chest: "32 inches",
        hips: "36 inches",
        dress: "S",
        shoe: "9",
        hair: "Black",
        eyes: "Brown"
    },
      location: "Nova Scotia, Canada",
      profile: "assets/img/talent/soli000005/portfolio/7.JPG",
      age: 24,
      isElite: true,
      isNew: false,
      instagram: "Bible_solimodel",
      tiktok: "its_Ajulu",
      facebook: "",
      portfolio: [
        "assets/img/talent/soli000005/portfolio/1.jpg",
        "assets/img/talent/soli000005/portfolio/2.JPG",
        "assets/img/talent/soli000005/portfolio/4.JPG",
        "assets/img/talent/soli000005/portfolio/5.JPG",
        "assets/img/talent/soli000005/portfolio/6.JPG",
        "assets/img/talent/soli000005/portfolio/7.JPG",
        "assets/img/talent/soli000005/portfolio/8.JPG",
        "assets/img/talent/soli000005/portfolio/3.JPG",
        "assets/img/talent/soli000005/portfolio/9.JPG"
      ],
      digitals: [
      ]
    },
    {
      id: "SOLI000006",
      brand: "Mansong",
      legalName: "Mansong",
      gender: "Female",
      attributes: {
        height: "5 feet 7 inches",
        waist: "26.5 inches",
        chest: "33 inches",
        hips: "35 inches",
        dress: "4",
        shoe: "7.5",
        hair: "Black",
        eyes: "Brown"
    },
      location: "Nova Scotia, Canada",
      profile: "assets/img/talent/soli000006/portfolio/7.jpg",
      age: 24,
      isElite: true,
      isNew: false,
      instagram: "mansongli",
      tiktok: "",
      facebook: "amanda.li.3914",
      portfolio: [
        "assets/img/talent/soli000006/portfolio/1.jpg",
        "assets/img/talent/soli000006/portfolio/2.jpg",
        "assets/img/talent/soli000006/portfolio/4.jpg",
        "assets/img/talent/soli000006/portfolio/5.jpg",
        "assets/img/talent/soli000006/portfolio/6.jpg",
        "assets/img/talent/soli000006/portfolio/7.jpg",
        "assets/img/talent/soli000006/portfolio/8.jpg",
        "assets/img/talent/soli000006/portfolio/9.jpg",
        "assets/img/talent/soli000006/portfolio/3.jpg",
        "assets/img/talent/soli000006/portfolio/10.jpg"
      ],
      digitals: [
      ]
    },
    {
      id: "SOLI000007",
      brand: "Yenuki",
      legalName: "Yenuki",
      gender: "Female",
      attributes: {
        height: "5 feet 3 inches",
        waist: "23 inches",
        chest: "33 inches",
        hips: "33 inches",
        dress: "Not Available",
        shoe: "6",
        hair: "Black",
        eyes: "Brown"
    },
      location: "Nova Scotia, Canada",
      profile: "assets/img/talent/soli000007/portfolio/4.JPG",
      age: 24,
      isElite: true,
      isNew: false,
      instagram: "",
      tiktok: "",
      facebook: "",
      portfolio: [
        "assets/img/talent/soli000007/portfolio/1.JPG",
        "assets/img/talent/soli000007/portfolio/2.JPG",
        "assets/img/talent/soli000007/portfolio/4.JPG",
        "assets/img/talent/soli000007/portfolio/5.JPG",
        "assets/img/talent/soli000007/portfolio/6.JPG",
        "assets/img/talent/soli000007/portfolio/7.JPG",
        "assets/img/talent/soli000007/portfolio/8.JPG",
        "assets/img/talent/soli000007/portfolio/9.JPG",
        "assets/img/talent/soli000007/portfolio/3.JPG",
        "assets/img/talent/soli000007/portfolio/10.JPG"
      ],
      digitals: [
      ]
    }
  ]

  actors : Actor[] = [
      {
        id: "SOLI000002",
        brand: "Brynn",
        legalName: "Brynn",
        gender: "Female",
        attributes: {
          height: "5 feet 7 inches",
          waist: "26 inches",
          chest: "34 inches",
          hips: "37 inches",
          dress: "Not Available",
          shoe: "8",
          hair: "Brown",
          eyes: "Hazel"
      },
        location: "Nova Scotia, Canada",
        profile: "assets/img/talent/soli000002/headshots/1.jpg",
        age: 24,
        isElite: true,
        isNew: false,
        instagram: "brynnie749",
        tiktok: "",
        facebook: "",
        headshots: [
          "assets/img/talent/soli000002/headshots/1.jpg"
        ]
      }
  ]

  constructor() { }
  
  getModels() : Model[] {
    return this.shuffle<Model>(this.models);
  }

  getModel(id : string) : Model {
    return (this.models.filter((model) => model.id == id))[0];
  }

  getActors() : Actor[] {
    return this.actors;
  }

  getActor(id : string) : Actor {
    return (this.actors.filter((actor) => actor.id == id))[0];
  }

  getElites() : Talent[] {
    return this.models.filter((model) => model.isElite);
  }

  shuffle<T>(array: T[]): T[] {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
};
}
