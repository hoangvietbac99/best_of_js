import LayoutMain from '../layout/LayOutMain/LayOutMain';
import HomePage from './Home/HomePage';
import ProjectPage from './Project/ProjectPage';
import linkPages from './linksPages';
import TagsPage from './Tags/TagsPage';
import AboutPage from './About/AboutPage';
import RankingPage from './Ranking/RankingPage';
import HallOfFame from './HallOfFame/HallOfFame';
import Timeline from './Timeline/Timeline';
import InfoPage from './InfoPage/InfoPage';

const routers = [
  { path: linkPages.homePage, component: HomePage, layout: LayoutMain },
  { path: linkPages.projectPage, component: ProjectPage, layout: LayoutMain },
  { path: linkPages.tagsPage, component: TagsPage, layout: LayoutMain },
  {
    path: linkPages.monthlyRanking,
    component: RankingPage,
    layout: LayoutMain
  },
  { path: linkPages.hallOfFame, component: HallOfFame, layout: LayoutMain },
  { path: linkPages.info, component: InfoPage, layout: LayoutMain },
  { path: linkPages.timeline, component: Timeline, layout: LayoutMain },
  { path: linkPages.about, component: AboutPage, layout: LayoutMain }
];
export default routers;
