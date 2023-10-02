
import { PlusCircleIcon } from '@heroicons/react/24/outline';
import PageComponent from '../components/PageComponent'
import SurveyListItem from '../components/SurveyListItem';
import TButton from '../components/core/TButton';
import { useStateContext } from '../contexts/ContextProvider';
import { useEffect, useState } from 'react';
import axiosClient from '../axios';
import PaginationLinks from '../components/PaginationLinks';

export default function Surveys(){

  // const { surveys } = useStateContext();
  const [surveys, setSurveys] = useState([]);
  const [meta, setMeta] = useState({});
  const [loading, setLoading] = useState(false);
  
  const onDeleteClick = () => {
    console.log("On Delete click");
  };

  const onPageClick = (link) => {
    getSurveys(link.url)
  }

  const getSurveys = (url) => {
    url = url || '/survey'
    setLoading(true);
    axiosClient.get(url)
      .then(({ data }) => {
        setSurveys(data.data)
        setMeta(data.meta)
        setLoading(false);
    });
  }

  useEffect(() => {
    getSurveys()
  }, []);
  
  return(
    <PageComponent 
      title="Surveys" 
      buttons = {
        <TButton color="green" to="/surveys/create">
          <PlusCircleIcon className="h-6 w-6 mr-2"/>
          create new
        </TButton>
      }
      
      
    >
      {loading && <div className="text-center text-lg">
        Loading...
      </div>
      }
      {!loading && (
      <div>
        <div className = "grid grid-cols-1 gap-5 md:grid-cols-2 md:grid-cols-3">
          {surveys.map(survey => (
            <SurveyListItem 
              survey = {survey}   
              key={survey.id} 
              onDeleteClick = {onDeleteClick} 
            />
          ))}
        </div>
        <PaginationLinks meta={meta} onPageClick={onPageClick} />
      </div>
      )}
    </PageComponent>
  );
}