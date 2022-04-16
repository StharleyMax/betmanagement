import axios from "axios";



export class FootBallLeaguesCoutryName {


  async execute(coutry: string) {
    const leagues: any = [];
    const result = await axios({
      method: 'GET',
      url: `${process.env.API_FOOTBALL}/leagues`,
      params: {
        country: `${coutry}`
      },
      headers: {
        'X-RapidAPI-Host': `${process.env.X_RAPIDAPI_HOST}`,
        'X-RapidAPI-Key': `${process.env.X_RAPIDAPI_KEY}`
      },
    }).then((response) => {
      return leagues.push(response.data);
    });
    return leagues;
  }
}
