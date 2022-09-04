import { useState } from 'react';

import Panel from '../components/panel';
import Spinner from '../components/ui/spinner';
import { arrayToMatrix } from '../utils/helpers'
import { getPagesList } from '../client/api-client';

export default function Home(props) {
  const [projects] = useState(props.homeData);

  if (!projects) return <Spinner />

  const panelRow = (val) => {
    console.log(val)
    return (
      <Panel
        key={val.id}
        name={val.path}
        niceName={val.title}
        content={val.description}
      />
    );
  };

  const sortedProjects = arrayToMatrix(projects, 3);

  return (
    <div>
      <div className='title'>Welcome to my experience!</div>
      {sortedProjects.map((item, index) => {
        return (
          <div key={index} className='flex-container'>
            {item.map((projObj) => {
              return panelRow(projObj);
            })}
          </div>
        );
      })}
    </div>
  );
}

export async function getServerSideProps(context) {
  const homeData = await getPagesList()

  return {
    props: {
     homeData: homeData.content,
    },
  };
}