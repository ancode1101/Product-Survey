import React, { useEffect, useState } from "react";
import PageComponent from "../components/PageComponent";
import axiosClient from "../axios";

export default function SurveyAnswerView() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    setLoading(true);
    axiosClient
      .get(`/surveys/answerview/:id`)
      .then((res) => {
        setLoading(false);
        setData(res.data);
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
      });
  }, []);

  const getOptionsText = (questionData) => {
    try {
      const parsedData = JSON.parse(questionData);
      if (parsedData.options && Array.isArray(parsedData.options)) {
        return parsedData.options.map((option) => option.text).join(", ");
      }
    } catch (error) {
      console.error("Error parsing question data:", error);
    }
    return "";
  };

  return (
    <>
      <PageComponent title="View Answers">
        <div>
          {loading && <div className="flex justify-center">Loading...</div>}
          {!loading && (
            <div className="col-span-4">
              <h3 className="text-3xl mb-2">Survey Title : {data.SurveyData.title}</h3>
              {data.Answers.map((answer, index) => (
                <div key={index} className="mb-4 p-4 border rounded bg-gray-100">
                  <p className="text-lg font-bold mb-2 text-blue-700">
                    Question: {answer.question}
                  </p>
                  <p className="mb-2 text-gray-800">
                    Question Data: {getOptionsText(answer.question_data)}
                  </p>
                  <p className="text-gray-800">Answer: {answer.answer}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </PageComponent>
    </>
  );
}
