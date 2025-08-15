import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Play, 
  Trophy, 
  Clock, 
  Target,
  Star,
  CheckCircle,
  RotateCcw,
  ArrowRight
} from "lucide-react";

const quizCategories = [
  {
    id: 1,
    title: "Fundamental Rights",
    description: "Test your knowledge of Articles 12-35",
    questions: 15,
    difficulty: "Beginner",
    duration: "10 min",
    attempts: 2500,
    averageScore: 78,
    icon: "⚖️",
  },
  {
    id: 2,
    title: "Directive Principles",
    description: "Understanding state policy guidelines",
    questions: 12,
    difficulty: "Intermediate",
    duration: "8 min",
    attempts: 1800,
    averageScore: 65,
    icon: "📋",
  },
  {
    id: 3,
    title: "Constitutional Amendments",
    description: "Key amendments and their impact",
    questions: 20,
    difficulty: "Advanced",
    duration: "15 min",
    attempts: 900,
    averageScore: 58,
    icon: "📝",
  },
];

const userStats = {
  quizzesCompleted: 12,
  averageScore: 82,
  currentStreak: 5,
  totalPoints: 1240,
  rank: "Constitutional Scholar",
};

const recentAttempts = [
  {
    id: 1,
    quiz: "Fundamental Rights",
    score: 85,
    maxScore: 100,
    date: "2 hours ago",
    status: "completed",
  },
  {
    id: 2,
    quiz: "Directive Principles",
    score: 92,
    maxScore: 100,
    date: "1 day ago",
    status: "completed",
  },
  {
    id: 3,
    quiz: "Parliamentary System",
    score: 0,
    maxScore: 100,
    date: "2 days ago",
    status: "abandoned",
  },
];

export default function Quiz() {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Constitutional Quizzes
          </h1>
          <p className="text-xl text-muted-foreground">
            Test and enhance your constitutional knowledge through interactive quizzes
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quiz Categories */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-foreground">Quiz Categories</h2>
              
              <div className="space-y-4">
                {quizCategories.map((category) => (
                  <Card 
                    key={category.id} 
                    className={`group hover:shadow-medium transition-smooth cursor-pointer ${
                      selectedCategory === category.id ? 'ring-2 ring-primary' : ''
                    }`}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-4">
                          <div className="text-3xl">{category.icon}</div>
                          <div className="flex-1 space-y-3">
                            <div className="flex items-center space-x-3">
                              <h3 className="font-semibold text-lg group-hover:text-primary transition-smooth">
                                {category.title}
                              </h3>
                              <Badge variant="outline">{category.difficulty}</Badge>
                            </div>
                            
                            <p className="text-muted-foreground">
                              {category.description}
                            </p>
                            
                            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                              <div className="flex items-center">
                                <Target className="w-4 h-4 mr-1" />
                                {category.questions} questions
                              </div>
                              <div className="flex items-center">
                                <Clock className="w-4 h-4 mr-1" />
                                {category.duration}
                              </div>
                              <div className="flex items-center">
                                <Star className="w-4 h-4 mr-1" />
                                {category.averageScore}% avg
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex flex-col items-center space-y-2">
                          <Button 
                            variant={selectedCategory === category.id ? "default" : "outline"}
                            size="sm"
                          >
                            <Play className="w-4 h-4 mr-2" />
                            Start Quiz
                          </Button>
                          <span className="text-xs text-muted-foreground">
                            {category.attempts} attempts
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Recent Attempts */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-foreground">Recent Attempts</h2>
              
              <div className="space-y-3">
                {recentAttempts.map((attempt) => (
                  <Card key={attempt.id} className="hover:shadow-soft transition-smooth">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className={`w-3 h-3 rounded-full ${
                            attempt.status === 'completed' ? 'bg-success' : 'bg-warning'
                          }`} />
                          <div>
                            <div className="font-medium">{attempt.quiz}</div>
                            <div className="text-sm text-muted-foreground">{attempt.date}</div>
                          </div>
                        </div>
                        
                        <div className="text-right space-y-1">
                          <div className="font-semibold">
                            {attempt.score}/{attempt.maxScore}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {Math.round((attempt.score / attempt.maxScore) * 100)}%
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <Button variant="outline" className="w-full">
                View All Attempts
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* User Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Trophy className="w-5 h-5 mr-2 text-accent" />
                  Your Progress
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center space-y-2">
                  <div className="text-2xl font-bold text-primary">{userStats.rank}</div>
                  <div className="text-sm text-muted-foreground">Current Rank</div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Quizzes Completed</span>
                    <span className="font-semibold">{userStats.quizzesCompleted}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-sm">Average Score</span>
                    <span className="font-semibold">{userStats.averageScore}%</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-sm">Current Streak</span>
                    <span className="font-semibold flex items-center">
                      🔥 {userStats.currentStreak} days
                    </span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-sm">Total Points</span>
                    <span className="font-semibold">{userStats.totalPoints.toLocaleString()}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="constitutional" className="w-full">
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Retake Last Quiz
                </Button>
                
                <Button variant="outline" className="w-full">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Review Mistakes
                </Button>
                
                <Button variant="ghost" className="w-full">
                  <Trophy className="w-4 h-4 mr-2" />
                  Leaderboard
                </Button>
              </CardContent>
            </Card>

            {/* Study Tip */}
            <Card className="border-accent/20 bg-accent/5">
              <CardContent className="p-4">
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">💡</div>
                  <div>
                    <div className="font-semibold text-sm mb-1">Study Tip</div>
                    <div className="text-xs text-muted-foreground">
                      Review fundamental rights articles 14-18 before taking the quiz. 
                      Focus on understanding the practical applications!
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}