import classNames from 'classnames/bind';
import styles from './Timeline.module.scss';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
const cx = classNames.bind(styles);

function Timeline() {
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
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              dateClassName={'date'}
              date="2010 - 2011"
              iconStyle={{
                borderRadius: '0px'
              }}
              icon={
                <img
                  className={cx('logo')}
                  src="https://avatars.githubusercontent.com/u/97241560?v=3&s=50"
                  alt=""
                />
              }>
              <h3 className="vertical-timeline-element-title">Art Director</h3>
              <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
              <p>Creative Direction, User Experience, Visual Design, SEO, Online Marketing</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2010 - 2011"
              iconStyle={{
                borderRadius: '0px'
              }}
              icon={
                <img
                  className={cx('logo')}
                  src="https://avatars.githubusercontent.com/u/97241560?v=3&s=50"
                  alt=""
                />
              }>
              <h3 className="vertical-timeline-element-title">Art Director</h3>
              <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
              <p>Creative Direction, User Experience, Visual Design, SEO, Online Marketing</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2010 - 2011"
              iconStyle={{
                borderRadius: '0px'
              }}
              icon={
                <img
                  className={cx('logo')}
                  src="https://avatars.githubusercontent.com/u/97241560?v=3&s=50"
                  alt=""
                />
              }>
              <h3 className="vertical-timeline-element-title">Art Director</h3>
              <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
              <p>Creative Direction, User Experience, Visual Design, SEO, Online Marketing</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2010 - 2011"
              iconStyle={{
                borderRadius: '0px'
              }}
              icon={
                <img
                  className={cx('logo')}
                  src="https://avatars.githubusercontent.com/u/97241560?v=3&s=50"
                  alt=""
                />
              }>
              <h3 className="vertical-timeline-element-title">Art Director</h3>
              <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
              <p>Creative Direction, User Experience, Visual Design, SEO, Online Marketing</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2010 - 2011"
              iconStyle={{
                borderRadius: '0px'
              }}
              icon={
                <img
                  className={cx('logo')}
                  src="https://avatars.githubusercontent.com/u/97241560?v=3&s=50"
                  alt=""
                />
              }>
              <h3 className="vertical-timeline-element-title">Art Director</h3>
              <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
              <p>Creative Direction, User Experience, Visual Design, SEO, Online Marketing</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2010 - 2011"
              iconStyle={{
                borderRadius: '0px'
              }}
              icon={
                <img
                  className={cx('logo')}
                  src="https://avatars.githubusercontent.com/u/97241560?v=3&s=50"
                  alt=""
                />
              }>
              <h3 className="vertical-timeline-element-title">Art Director</h3>
              <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
              <p>Creative Direction, User Experience, Visual Design, SEO, Online Marketing</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2010 - 2011"
              iconStyle={{
                borderRadius: '0px'
              }}
              icon={
                <img
                  className={cx('logo')}
                  src="https://avatars.githubusercontent.com/u/97241560?v=3&s=50"
                  alt=""
                />
              }>
              <h3 className="vertical-timeline-element-title">Art Director</h3>
              <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
              <p>Creative Direction, User Experience, Visual Design, SEO, Online Marketing</p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </main>
  );
}

export default Timeline;
