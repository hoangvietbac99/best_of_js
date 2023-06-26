import classNames from 'classnames/bind';
import styles from './InfoPage.module.scss';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
// import Button from '../../components/Button/Button';
import kyServerless from '../../api/kyServerless';
const cx = classNames.bind(styles);
function InfoPage() {
  const { full_name } = useParams();

  // const [item, setItem] = useState([]);
  // const [data, setData] = useState([]);
  console.log(full_name);
  useEffect(() => {
    async function getData() {
      try {
        const response = await kyServerless.get(`project-details?fullName=${full_name}`).json();
        console.log(response);
        // setData(response);
        // setItem(response.github);
      } catch (error) {
        console.log('Fail:', error);
      }
    }
    getData();
  }, [full_name]);
  return (
    <main className={cx('wrapper-info-page')}>
      {`info${full_name}`}
      {/* <div className={cx('container')}>
        <div className={cx('info')}>
          <div className={cx('avt')}>
            <img src={`https://avatars.githubusercontent.com/u/${item.owner_id}?v=3&s=75`} alt="" />
          </div>
          <div className={cx('desc')}>
            <h2>{data.full_name}</h2>
            <p>{data.description}</p>
            <div className={cx('tags')}>
              {item.topics.map((tag, index) => (
                <div key={index}>
                  <Button>
                    <span>{tag}</span>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> */}
    </main>
  );
}

export default InfoPage;
