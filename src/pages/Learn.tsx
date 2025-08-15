import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search, 
  BookOpen, 
  Filter, 
  Clock,
  Users,
  Star,
  ArrowRight,
  Scale,
  Shield,
  Gavel
} from "lucide-react";

// Sample constitutional data
const constitutionalParts = [
  {
    id: 1,
    part: "Part I",
    title: "The Union and its Territory",
    articles: "Articles 1-4",
    description: "Defines India as a Union of States and territorial jurisdiction",
    difficulty: "Beginner",
    readTime: "5 min",
    icon: Shield,
  },
  {
    id: 3,
    part: "Part III",
    title: "Fundamental Rights",
    articles: "Articles 12-35",
    description: "Basic human rights guaranteed to all citizens of India",
    difficulty: "Intermediate",
    readTime: "15 min",
    icon: Scale,
  },
  {
    id: 4,
    part: "Part IV",
    title: "Directive Principles of State Policy",
    articles: "Articles 36-51",
    description: "Guidelines for state governance and policy making",
    difficulty: "Intermediate",
    readTime: "12 min",
    icon: Gavel,
  },
];

const popularArticles = [
  {
    id: 14,
    title: "Article 14 - Right to Equality",
    summary: "The State shall not deny to any person equality before the law or equal protection of laws.",
    simplifiedSummary: "Everyone is equal before the law. No discrimination allowed.",
    difficulty: "Beginner",
    readTime: "3 min",
    views: 12500,
    rating: 4.8,
  },
  {
    id: 19,
    title: "Article 19 - Freedom of Speech and Expression",
    summary: "Protection of certain rights regarding freedom of speech, assembly, association, etc.",
    simplifiedSummary: "You have the right to express your opinions freely (with reasonable restrictions).",
    difficulty: "Intermediate",
    readTime: "7 min",
    views: 9800,
    rating: 4.9,
  },
  {
    id: 21,
    title: "Article 21 - Right to Life and Personal Liberty",
    summary: "No person shall be deprived of his life or personal liberty except according to procedure established by law.",
    simplifiedSummary: "Your right to life and freedom is protected. Can only be restricted through fair legal process.",
    difficulty: "Beginner",
    readTime: "4 min",
    views: 15200,
    rating: 4.9,
  },
];

export default function Learn() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Learn Constitutional Law
          </h1>
          <p className="text-xl text-muted-foreground">
            Explore the Constitution of India through simplified explanations and interactive content
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search articles, parts, or concepts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="flex items-center">
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {["all", "beginner", "intermediate", "advanced"].map((level) => (
              <Button
                key={level}
                variant={selectedDifficulty === level ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedDifficulty(level)}
                className="capitalize"
              >
                {level}
              </Button>
            ))}
          </div>
        </div>

        <Tabs defaultValue="parts" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="parts">Constitutional Parts</TabsTrigger>
            <TabsTrigger value="articles">Popular Articles</TabsTrigger>
            <TabsTrigger value="glossary">Glossary</TabsTrigger>
          </TabsList>

          <TabsContent value="parts" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {constitutionalParts.map((part) => {
                const Icon = part.icon;
                return (
                  <Card key={part.id} className="group hover:shadow-medium transition-smooth cursor-pointer">
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary">{part.part}</Badge>
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <CardTitle className="text-lg group-hover:text-primary transition-smooth">
                        {part.title}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">{part.articles}</p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {part.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                          <div className="flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {part.readTime}
                          </div>
                          <Badge variant="outline" className="text-xs">
                            {part.difficulty}
                          </Badge>
                        </div>
                        <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="articles" className="space-y-6">
            <div className="space-y-4">
              {popularArticles.map((article) => (
                <Card key={article.id} className="group hover:shadow-medium transition-smooth cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1 space-y-3">
                        <div className="flex items-center space-x-3">
                          <Badge variant="outline">Article {article.id}</Badge>
                          <Badge variant="secondary">{article.difficulty}</Badge>
                        </div>
                        
                        <h3 className="font-semibold text-lg group-hover:text-primary transition-smooth">
                          {article.title}
                        </h3>
                        
                        <div className="space-y-2">
                          <p className="text-sm text-muted-foreground italic">
                            "{article.summary}"
                          </p>
                          <p className="text-sm font-medium text-foreground">
                            <strong>In Simple Terms:</strong> {article.simplifiedSummary}
                          </p>
                        </div>
                        
                        <div className="flex items-center space-x-6 text-xs text-muted-foreground">
                          <div className="flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {article.readTime}
                          </div>
                          <div className="flex items-center">
                            <Users className="w-3 h-3 mr-1" />
                            {article.views.toLocaleString()} views
                          </div>
                          <div className="flex items-center">
                            <Star className="w-3 h-3 mr-1 fill-current text-yellow-500" />
                            {article.rating}
                          </div>
                        </div>
                      </div>
                      
                      <div className="ml-4">
                        <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center pt-6">
              <Button variant="constitutional">
                View All Articles
                <BookOpen className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="glossary" className="space-y-6">
            <div className="text-center py-12">
              <BookOpen className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Legal Glossary</h3>
              <p className="text-muted-foreground mb-6">
                Comprehensive dictionary of legal terms and concepts
              </p>
              <Button variant="constitutional">
                Explore Glossary
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
}