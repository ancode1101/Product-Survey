<?php

namespace App\Http\Controllers;

use App\Http\Resources\SurveyResourceDashborad;
use App\Models\Survey;
use App\Models\SurveyQuestion;
use App\Models\SurveyQuestionAnswer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AnswerController extends Controller
{
    public function index(Request $request)
    {
        $user = $request->user();

        // Fetch the latest survey
        $latest = Survey::query()->where('user_id', $user->id)->latest('created_at')->first();

        // If there is a latest survey, fetch its questions and answers
        $latestSurveyQuestionAnswers = SurveyQuestionAnswer::query()
            ->join('survey_questions', 'survey_questions.id', '=', 'survey_question_answers.survey_question_id')
            ->join('surveys', 'survey_questions.survey_id', '=', 'surveys.id')
            ->where('surveys.user_id', $user->id)
            ->where('surveys.id', optional($latest)->id) // Use optional to handle null latest
            ->select('survey_questions.question', 'survey_questions.data as question_data', 'survey_question_answers.answer')
            ->getModels('survey_question_answers.*');

        return [
            'Answers' => $latestSurveyQuestionAnswers,
            'SurveyData' => $latest ? new SurveyResourceDashborad($latest) : null,
        ];
    }
}
