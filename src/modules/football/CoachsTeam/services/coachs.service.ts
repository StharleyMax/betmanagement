import axios from "axios";



export class CoachsService {

  async execute(id: any) {
    const coachs: any = [];
    const result = await axios({
      method: 'GET',
      url: `${process.env.API_FOOTBALL}/coachs`,
      params: {
        id: `${id}`
      },
      headers: {
        'X-RapidAPI-Host': `${process.env.X_RAPIDAPI_HOST}`,
        'X-RapidAPI-Key': `${process.env.X_RAPIDAPI_KEY}`
      },
    }).then((response) => {
      return coachs.push(response.data);
    });
    console.log(coachs);
    return coachs;
  }
}
