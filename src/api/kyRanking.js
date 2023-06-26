import ky from 'ky';

const kyRanking = ky.create({
  prefixUrl: 'https://bestofjs-rankings.vercel.app'
});

export default kyRanking;
