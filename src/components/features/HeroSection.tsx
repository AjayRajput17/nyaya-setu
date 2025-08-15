import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { 
  BookOpen, 
  Users, 
  Award, 
  Play,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import heroImage from "@/assets/hero-constitution.jpg";

const stats = [
  { label: "Articles Simplified", value: "395+", icon: BookOpen },
  { label: "Active Learners", value: "10K+", icon: Users },
  { label: "Quizzes Completed", value: "50K+", icon: Award },
];

const features = [
  "Plain language explanations of constitutional articles",
  "Interactive quizzes and scenario-based learning",
  "Comprehensive legal resource library",
  "Multilingual support (Hindi, English, Marathi)",
];

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="inline-flex items-center">
                <span className="w-2 h-2 bg-accent rounded-full mr-2" />
                Constitutional Literacy for All
              </Badge>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-foreground">Understand Your</span>
                <br />
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Constitution
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl">
                Learn about your fundamental rights, duties, and the democratic framework 
                of India through simplified explanations, interactive quizzes, and expert guidance.
              </p>
            </div>

            {/* Feature List */}
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="constitutional" size="lg" className="group">
                Start Learning
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="group">
                <Play className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-2">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="font-bold text-2xl text-foreground">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Interactive Demo Card */}
          <div className="lg:flex justify-center hidden">
            <Card className="p-8 max-w-md shadow-large hover:shadow-xl transition-smooth">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Article 21</h3>
                  <p className="text-sm text-muted-foreground">Right to Life and Personal Liberty</p>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-secondary rounded-lg">
                    <p className="text-sm">
                      <strong>Simplified:</strong> Every person has the right to live with dignity 
                      and freedom, and no one can take away this right except through 
                      fair legal procedures.
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-medium">Article 1 of 395</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-gradient-primary h-2 rounded-full w-[2%]" />
                  </div>
                </div>
                
                <Button variant="hero" className="w-full">
                  Continue Learning
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}