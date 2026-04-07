import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, XCircle, Award } from "lucide-react";

interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface QuizProps {
  categoryName: string;
  questions: QuizQuestion[];
}

const Quiz = ({ categoryName, questions }: QuizProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerClick = (answerIndex: number) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(answerIndex);
    setShowExplanation(true);
    
    if (answerIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setQuizCompleted(false);
  };

  if (quizCompleted) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/30">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <Award className="h-16 w-16 text-primary" />
          </div>
          <CardTitle className="text-3xl">Quiz Completed!</CardTitle>
          <CardDescription className="text-lg mt-2">
            You scored {score} out of {questions.length}
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <div className="text-4xl font-bold text-primary">
            {percentage}%
          </div>
          <p className="text-muted-foreground">
            {percentage >= 80 ? "Excellent work! 🎉" : 
             percentage >= 60 ? "Good job! Keep learning! 📚" : 
             "Keep practicing to improve! 💪"}
          </p>
          <Button onClick={handleRestart} className="w-full">
            Retake Quiz
          </Button>
        </CardContent>
      </Card>
    );
  }

  const question = questions[currentQuestion];

  return (
    <Card className="bg-card/80 backdrop-blur-sm border-2 border-primary/20">
      <CardHeader>
        <div className="flex justify-between items-center mb-2">
          <Badge variant="secondary">
            Question {currentQuestion + 1} of {questions.length}
          </Badge>
          <Badge variant="outline">
            Score: {score}/{questions.length}
          </Badge>
        </div>
        <CardTitle className="text-2xl">{question.question}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          {question.options.map((option, index) => {
            const isSelected = selectedAnswer === index;
            const isCorrect = index === question.correctAnswer;
            const showResult = showExplanation;

            return (
              <button
                key={index}
                onClick={() => handleAnswerClick(index)}
                disabled={selectedAnswer !== null}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                  !showResult
                    ? "border-border hover:border-primary hover:bg-primary/5"
                    : isCorrect
                    ? "border-green-500 bg-green-50 dark:bg-green-950/30"
                    : isSelected
                    ? "border-destructive bg-destructive/5"
                    : "border-border opacity-50"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="flex-1">{option}</span>
                  {showResult && (
                    isCorrect ? (
                      <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                    ) : isSelected ? (
                      <XCircle className="h-5 w-5 text-destructive flex-shrink-0" />
                    ) : null
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {showExplanation && (
          <div className="mt-6 p-4 rounded-lg bg-muted/50 border border-border">
            <p className="text-sm font-semibold mb-2">Explanation:</p>
            <p className="text-sm text-muted-foreground">{question.explanation}</p>
          </div>
        )}

        {showExplanation && (
          <Button onClick={handleNextQuestion} className="w-full">
            {currentQuestion < questions.length - 1 ? "Next Question" : "Finish Quiz"}
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default Quiz;
