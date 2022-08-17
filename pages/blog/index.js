import React from 'react'
import useFetch from '../../services/use-fetch';
import Panel from '../../components/panel';
import Spinner from '../../components/ui/spinner';
import { arrayToMatrix } from '../../utils/helpers';


export default function Blog() {
  const { data: projects, loading, error } = useFetch('blogs');

  if (loading) return <Spinner />;

  if (error) return <div></div>;

  if (!projects) return <Spinner />

  const panelRow = (val) => {
    return (
      <Panel
        onClick={() => console.log('clickedddd') }
        key={val.id}
        name={val.name}
        niceName={val.niceName}
        content={val.content}
      />
    );
  };

  const sortedProjects = arrayToMatrix(projects, 3);

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



