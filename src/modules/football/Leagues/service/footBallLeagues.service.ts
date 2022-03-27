import 'dotenv/config';
import axios from 'axios';


export class FootBallLeaguesService {

  async execute(): Promise<any> {
    const leagues = await axios({
      method: 'GET',
      url: `${process.env.API_FOOTBALL}/leagues`,
      headers: {
        'X-RapidAPI-Host': `${process.env.X_RAPIDAPI_HOST}`,
        'X-RapidAPI-Key': `${process.env.X_RAPIDAPI_KEY}`
      }
    }).then(console.log);
    return leagues;
  }
}
