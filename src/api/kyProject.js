import ky from 'ky';

const kyProjects = ky.create({
  prefixUrl: 'https://bestofjs-static-api.vercel.app'
});

export default kyProjects;
