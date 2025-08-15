import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Library, 
  GraduationCap, 
  Video, 
  MessageCircle, 
  Newspaper,
  Languages,
  Download,
  Award
} from "lucide-react";

const features = [
  {
    title: "Constitutional Articles",
    description: "395 articles explained in simple language with real-world examples and case studies.",
    icon: BookOpen,
    badge: "395+ Articles",
    color: "primary",
  },
  {
    title: "Legal Resource Library",
    description: "Comprehensive collection of judgments, acts, and legal documents with powerful search.",
    icon: Library,
    badge: "10K+ Resources",
    color: "accent",
  },
  {
    title: "Interactive Quizzes",
    description: "Test your constitutional knowledge with scenario-based questions and instant feedback.",
    icon: GraduationCap,
    badge: "500+ Questions",
    color: "success",
  },
  {
    title: "Video Learning",
    description: "Expert explanations, case study videos, and constitutional history documentaries.",
    icon: Video,
    badge: "100+ Videos",
    color: "primary",
  },
  {
    title: "AI Chatbot",
    description: "Get instant answers to your constitutional questions with cited sources.",
    icon: MessageCircle,
    badge: "24/7 Available",
    color: "accent",
  },
  {
    title: "Legal News & Updates",
    description: "Stay updated with latest constitutional amendments, landmark judgments, and legal news.",
    icon: Newspaper,
    badge: "Daily Updates",
    color: "success",
  },
];

const additionalFeatures = [
  { icon: Languages, label: "Multilingual Support", description: "Hindi, English, Marathi" },
  { icon: Download, label: "Offline Access", description: "Download content for offline reading" },
  { icon: Award, label: "Gamification", description: "Earn badges and track progress" },
];

export function FeaturesSection() {
  return (
    <section className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Platform Features
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Everything You Need to Learn
            <br />
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Constitutional Law
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive platform combines modern technology with legal expertise 
            to make constitutional education accessible, engaging, and effective.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="group hover:shadow-medium transition-smooth border-border/50">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      feature.color === 'primary' ? 'bg-primary text-primary-foreground' :
                      feature.color === 'accent' ? 'bg-accent text-accent-foreground' :
                      'bg-success text-success-foreground'
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-smooth">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {additionalFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="flex items-center space-x-4 p-6 bg-background rounded-lg border border-border/50">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">{feature.label}</div>
                  <div className="text-sm text-muted-foreground">{feature.description}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="constitutional" size="lg" className="mr-4">
            Explore All Features
          </Button>
          <Button variant="outline" size="lg">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}