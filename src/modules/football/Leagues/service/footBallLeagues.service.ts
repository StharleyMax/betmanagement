import 'dotenv/config';
import axios from 'axios';


export class FootBallLeaguesService {

  async execute(): Promise<any> {
    const leagues: any = [];
    const result = await axios({
      method: 'GET',
      url: `${process.env.API_FOOTBALL}/leagues`,
      headers: {
        'X-RapidAPI-Host': `${process.env.X_RAPIDAPI_HOST}`,
        'X-RapidAPI-Key': `${process.env.X_RAPIDAPI_KEY}`
      }
    }).then((response) => {
      return leagues.push(response.data);
    });
    console.log(leagues);
  }
}
