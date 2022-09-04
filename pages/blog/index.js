import { useState } from 'react'

import Panel from '../../components/panel';
import Spinner from '../../components/ui/spinner';
import { arrayToMatrix } from '../../utils/helpers';
import { getArticles } from '../../client/api-client';

export default function Blog(props) {
  const [blogData] = useState(props.data.message)

  if (!blogData) return <Spinner />

  const panelRow = (val) => {
    return (
      <Panel
        onClick={() => console.log('clickedddd') }
        key={val.id}
        name={`blog/${val.id}`}
        niceName={val.title}
        content={val.description}
      />
    );
  };

  const sortedProjects = arrayToMatrix(blogData, 3);

  return (
    <div>
      <div className='title'>Bloggary!</div>
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
  const data = await getArticles();

  return {
    props: {
      data,
    },
  };
}