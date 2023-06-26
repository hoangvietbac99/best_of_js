import ky from 'ky';

const kyServerless = ky.create({
  prefixUrl: 'https://bestofjs-serverless.vercel.app'
});

export default kyServerless;
