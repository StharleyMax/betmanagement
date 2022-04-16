import 'dotenv/config';
import axios from 'axios';

export class CoachsService {
  async execute(id: any) {
    const result = await axios
      .request({
        method: 'GET',
        url: `${process.env.API_FOOTBALL}/coachs`,
        params: {
          id: `${id}`,
        },
        headers: {
          'X-RapidAPI-Host': `${process.env.X_RAPIDAPI_HOST}`,
          'X-RapidAPI-Key': `${process.env.X_RAPIDAPI_KEY}`,
        },
      })
      .then(function (response) {
        return response.data;
      });
    return result;
  }
}
