import classNames from 'classnames/bind';
import styles from './Timeline.module.scss';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import dataTimeLine from './dataTimeLine.json';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
const extraProjects = [
  { id: 'threejs', name: 'Three.js', year: 2010 },
  { id: 'backbone', name: 'Backbone', year: 2010 },
  { id: 'meteor', name: 'Meteor', year: 2012 },
  { id: 'jest', name: 'Jest', year: 2013 },
  { id: 'redux', name: 'Redux', year: 2015 },
  { id: 'rollup', name: 'Rollup', year: 2015 },
  { id: 'gatsby', name: 'Gastby', year: 2015 },
  { id: 'storybook', name: 'Storybook', year: 2016 },
  { id: 'parcel', name: 'Parcel', year: 2017 }
];
function Timeline() {
  console.log(dataTimeLine);
  return (
    <main className={cx('wrapper-timeline')}>
      <div className={cx('container')}>
        <div className={cx('title')}>
          <h1>Timeline: 2006-2020 in 20 projects</h1>
          <div>
            <p>Our favorite newsletter JavaScript Weekly has just released its 500th issue.</p>
            <p>
              Let's celebrate this milestone by picking 20 significant projects, from 2006 to 2020.
            </p>
            <p>A short story of the web platform from jQuery to Rome.</p>
            <p>Click on the links to see the project details and the trends on Best of JS.</p>
          </div>
        </div>
        <div className={cx('content')}>
          <VerticalTimeline>
            {dataTimeLine.map((item) => (
              <VerticalTimelineElement
                key={item.slug}
                className={cx('a')}
                date={item.date}
                iconStyle={{
                  background: 'var(--color-title)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 4
                }}
                icon={<img className={cx('logo')} src={item.avatar} alt="" />}>
                <div className={cx('wrapper-item-timeline')}>
                  <h4>{item.slug}</h4>
                  {item.comments.map((cmt, index) => (
                    <p key={index}>{cmt}</p>
                  ))}
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
        <div className={cx('about')}>
          <h2>About this timeline / Disclaimer</h2>
          <p>We could have mentioned a lot of other projects:</p>
          <div className={cx('mentioned')}>
            {extraProjects.map((item, index) => (
              <div key={index}>
                <Link to={`projects/${item.id}`} className={cx('link')}>{`• ${item.name}`}</Link>
                <span>{`(${item.year})`}</span>
              </div>
            ))}
          </div>
          <p>...but we had to make choices to keep this timeline compact.</p>
          <p>The 2 main constraints were:</p>
          <p>
            • We wanted <b>20</b> projects because we are in 2020
          </p>
          <p>• We wanted at least one project for every year between 2010 and 2020.</p>
          <p>
            The date displayed for each project is the date of the creation of the repository on
            GitHub, except for the following projects: jQuery, Node.js, and TypeScript.
          </p>
          <p>Thank you for your understanding!</p>
        </div>
      </div>
    </main>
  );
}

export default Timeline;
