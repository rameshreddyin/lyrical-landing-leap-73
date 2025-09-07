import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Star, Clock, Users, Play, BookOpen, Award, ArrowLeft, CheckCircle, Music, Target, Calendar, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import Autoplay from "embla-carousel-autoplay";

const Course = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
            <ArrowLeft className="w-4 h-4" />
            Back to Courses
          </Link>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">Preview</Button>
            <Button variant="gradient" size="sm">Enroll Now</Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-8">
        {/* Course Title & Info */}
        <div className="space-y-6 text-center">
          <div className="space-y-4">
            <Badge variant="secondary" className="bg-brand-pink/10 text-brand-pink border-brand-pink/20">
              <Award className="w-3 h-3 mr-1" />
              Certificate Course
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Master Piano Fundamentals
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Simplify your musical journey with our all-in-one Piano Course. Learn scales, chords, and techniques with ease.
            </p>
          </div>

          {/* Stats Row */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-gray-600">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
              </div>
              <span className="font-semibold text-gray-900">4.0</span>
              <span>from 500+ reviews</span>
            </div>
          </div>

          {/* CTA Button */}
          <Button variant="gradient" size="lg" className="rounded-full px-8">
            <Play className="w-5 h-5 mr-2" />
            Get Started Free
          </Button>
        </div>

        {/* Course Overview */}
        <section id="overview" className="space-y-6 text-center mt-16">
          <h2 className="text-2xl font-bold text-foreground">Course Overview</h2>
          <div className="prose prose-lg max-w-4xl mx-auto text-muted-foreground space-y-4">
            <p>
              This comprehensive Piano Fundamentals course is perfect for absolute beginners who are just starting their musical journey. It focuses on helping you understand and use essential piano techniques, introduce yourself to music theory, and interact with the instrument in a structured way using fundamental skills and proper form.
            </p>
            <p>
              Through interactive lessons, real-life examples, and practice activities, you'll gain confidence in playing, reading music, and understanding piano fundamentals. Whether you're learning for personal enjoyment, professional development, or daily practice, this course gives you the strong foundation you need to move forward.
            </p>
            <p>
              By the end of this course, you'll have mastered basic scales, chord progressions, sight-reading skills, and proper technique that will serve as your foundation for advanced piano study.
            </p>
          </div>
        </section>

        {/* Prerequisites Section */}
        <section id="prerequisites" className="space-y-8 mt-16">
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Prerequisites</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Everything you need to get started with our Piano Fundamentals course. No prior experience required!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Basic Requirements Card */}
            <Card className="bg-white border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-brand-orange/10 flex items-center justify-center">
                    <Music className="w-6 h-6 text-brand-orange" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Basic Requirements</h3>
                    <Badge variant="secondary" className="bg-brand-orange/10 text-brand-orange border-brand-orange/20 mt-1">
                      Essential
                    </Badge>
                  </div>
                </div>
                <div className="space-y-3">
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-500" />
                      Access to a piano or keyboard
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-500" />
                      Stable internet connection
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-500" />
                      Computer or tablet for lessons
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-500" />
                      Motivation to learn and practice
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Technical Setup Card */}
            <Card className="bg-white border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-brand-pink/10 flex items-center justify-center">
                    <Target className="w-6 h-6 text-brand-pink" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Technical Setup</h3>
                    <Badge variant="secondary" className="bg-brand-pink/10 text-brand-pink border-brand-pink/20 mt-1">
                      Recommended
                    </Badge>
                  </div>
                </div>
                <div className="space-y-3">
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-500" />
                      88-key weighted keyboard preferred
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-500" />
                      Good quality headphones
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-500" />
                      Webcam for live sessions
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-500" />
                      Metronome app or device
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Time Commitment Card */}
            <Card className="bg-white border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-brand-purple/10 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-brand-purple" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Time Commitment</h3>
                    <Badge variant="secondary" className="bg-brand-purple/10 text-brand-purple border-brand-purple/20 mt-1">
                      Important
                    </Badge>
                  </div>
                </div>
                <div className="space-y-3">
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-500" />
                      30-45 minutes daily practice
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-500" />
                      Attend 4 weekly live classes
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-500" />
                      Complete weekly assignments
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-500" />
                      12 months course duration
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Course Curriculum */}
        <section id="curriculum" className="space-y-8 mt-16">
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Course Modules</h2>
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground flex-wrap">
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                12 Months
              </span>
              <span className="flex items-center gap-1">
                <BookOpen className="w-4 h-4" />
                48 Classes
              </span>
              <span className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                Live Class
              </span>
              <span className="flex items-center gap-1">
                <Music className="w-4 h-4" />
                Weekly 4 Classes
              </span>
            </div>
          </div>

          <div className="grid gap-4 max-w-5xl mx-auto">
            {/* Beginner Level Card */}
            <Card className="bg-white border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300">
              <Accordion type="single" collapsible>
                <AccordionItem value="beginner" className="border-none">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-4">
                        <Badge variant="secondary" className="bg-brand-orange/10 text-brand-orange border-brand-orange/20">
                          Level 1
                        </Badge>
                        <div className="text-left">
                          <h3 className="text-lg font-bold text-gray-900">Beginner (Debut–Grade 2)</h3>
                          <p className="text-sm text-gray-600">Foundation skills for new piano players</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-6 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>12 Weeks</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <BookOpen className="w-4 h-4" />
                          <span>24 Classes</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-semibold">4.8</span>
                        </div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <div className="grid md:grid-cols-2 gap-6 pt-4 border-t border-gray-100">
                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                          <Target className="w-4 h-4" />
                          Skills & Techniques
                        </h4>
                        <ul className="space-y-2 text-gray-600">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-500" />
                            Proper hand position and posture
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-500" />
                            Basic finger exercises and independence
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-500" />
                            Simple scales (C major, G major)
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-500" />
                            Basic chord progressions (I-V-vi-IV)
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                          <Music className="w-4 h-4" />
                          Repertoire & Examples
                        </h4>
                        <ul className="space-y-2 text-gray-600">
                          <li>• "Ode to Joy" by Beethoven</li>
                          <li>• "Mary Had a Little Lamb"</li>
                          <li>• Simple folk songs and melodies</li>
                          <li>• Basic sight-reading exercises</li>
                        </ul>
                        <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                          <p className="text-sm font-medium text-gray-900">Assessment Approach</p>
                          <p className="text-sm text-gray-600 mt-1">
                            Progress evaluated through weekly practice recordings and monthly live assessments.
                          </p>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </Card>

            {/* Intermediate Level Card */}
            <Card className="bg-white border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300">
              <Accordion type="single" collapsible>
                <AccordionItem value="intermediate" className="border-none">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-4">
                        <Badge variant="secondary" className="bg-brand-pink/10 text-brand-pink border-brand-pink/20">
                          Level 2
                        </Badge>
                        <div className="text-left">
                          <h3 className="text-lg font-bold text-gray-900">Intermediate (Grades 3–5)</h3>
                          <p className="text-sm text-gray-600">Advanced techniques and music theory</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-6 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>16 Weeks</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <BookOpen className="w-4 h-4" />
                          <span>32 Classes</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-semibold">4.6</span>
                        </div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <div className="grid md:grid-cols-2 gap-6 pt-4 border-t border-gray-100">
                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                          <Target className="w-4 h-4" />
                          Skills & Techniques
                        </h4>
                        <ul className="space-y-2 text-gray-600">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-500" />
                            Advanced finger independence and agility
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-500" />
                            Major and minor scales (all keys)
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-500" />
                            Seventh chords and inversions
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-500" />
                            Basic improvisation techniques
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                          <Music className="w-4 h-4" />
                          Repertoire & Examples
                        </h4>
                        <ul className="space-y-2 text-gray-600">
                          <li>• Bach: "Minuet in G Major"</li>
                          <li>• Clementi: Sonatinas</li>
                          <li>• Popular songs with chord charts</li>
                          <li>• Jazz standards (simplified versions)</li>
                        </ul>
                        <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                          <p className="text-sm font-medium text-gray-900">Assessment Approach</p>
                          <p className="text-sm text-gray-600 mt-1">
                            Performance evaluations include technical exercises, repertoire pieces, and improvisation challenges.
                          </p>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </Card>

            {/* Advanced Level Card */}
            <Card className="bg-white border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300">
              <Accordion type="single" collapsible>
                <AccordionItem value="advanced" className="border-none">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-4">
                        <Badge variant="secondary" className="bg-brand-purple/10 text-brand-purple border-brand-purple/20">
                          Level 3
                        </Badge>
                        <div className="text-left">
                          <h3 className="text-lg font-bold text-gray-900">Advanced (Grades 6–8)</h3>
                          <p className="text-sm text-gray-600">Professional performance and composition</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-6 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>20 Weeks</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <BookOpen className="w-4 h-4" />
                          <span>40 Classes</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-semibold">4.9</span>
                        </div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <div className="grid md:grid-cols-2 gap-6 pt-4 border-t border-gray-100">
                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                          <Target className="w-4 h-4" />
                          Skills & Techniques
                        </h4>
                        <ul className="space-y-2 text-gray-600">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-500" />
                            Advanced performance techniques
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-500" />
                            Complex scales and arpeggios
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-500" />
                            Advanced harmony and composition
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-500" />
                            Stage performance preparation
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                          <Music className="w-4 h-4" />
                          Repertoire & Examples
                        </h4>
                        <ul className="space-y-2 text-gray-600">
                          <li>• Chopin: Nocturnes and Waltzes</li>
                          <li>• Bach: Well-Tempered Clavier</li>
                          <li>• Contemporary compositions</li>
                          <li>• Advanced jazz arrangements</li>
                        </ul>
                        <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                          <p className="text-sm font-medium text-gray-900">Assessment Approach</p>
                          <p className="text-sm text-gray-600 mt-1">
                            Comprehensive performance evaluations, composition projects, and public recital preparation.
                          </p>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </Card>
          </div>
        </section>

        {/* Session Options */}
        <section id="sessions" className="space-y-8 mt-16">
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Session Options</h2>
            <p className="text-muted-foreground">Choose the perfect learning format for your schedule and goals</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Group Session Card */}
            <Card className="bg-white border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 p-6">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-gray-900">Group Session</h3>
                    <p className="text-gray-600">Learn together with fellow musicians</p>
                  </div>
                  <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full">
                    <Users className="w-4 h-4 text-gray-600" />
                    <span className="text-sm font-medium text-gray-700">3-4 students</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">60 minutes per session</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">3–4 students per group</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Target className="w-4 h-4" />
                    <span className="text-sm">Once/twice weekly schedule</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Award className="w-4 h-4" />
                    <span className="text-sm">Certifications included</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      From ₹2,500/month
                    </div>
                    <Button variant="default" size="sm" className="bg-gray-900 hover:bg-gray-800 text-white">
                      Book Session
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            {/* Solo Session Card */}
            <Card className="bg-white border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 p-6">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-gray-900">Solo Session</h3>
                    <p className="text-gray-600">One-on-one personalized learning</p>
                  </div>
                  <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full">
                    <Users className="w-4 h-4 text-gray-600" />
                    <span className="text-sm font-medium text-gray-700">1 student</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">60 minutes per session</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">1 student (personal attention)</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Target className="w-4 h-4" />
                    <span className="text-sm">Flexible timing options</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Award className="w-4 h-4" />
                    <span className="text-sm">Certifications included</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      From ₹4,500/month
                    </div>
                    <Button variant="default" size="sm" className="bg-gray-900 hover:bg-gray-800 text-white">
                      Book Session
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Instructor Section */}
        <section id="instructor" className="space-y-8 mt-16">
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Meet Your Instructor</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Learn from an experienced professional with years of teaching and performance expertise
            </p>
          </div>

          <Card className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 max-w-4xl mx-auto">
            <div className="p-8">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Profile Image */}
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 rounded-full bg-gradient-primary flex items-center justify-center text-white text-4xl font-bold shadow-glow">
                    SC
                  </div>
                </div>

                {/* Instructor Details */}
                <div className="flex-1 space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-gray-900">Sarah Chen</h3>
                    <p className="text-lg text-brand-pink font-semibold">Master Piano Instructor</p>
                  </div>

                  <p className="text-gray-600 leading-relaxed">
                    Sarah has dedicated over 15 years to piano education, combining classical training with modern teaching methods. 
                    She believes in making piano accessible to everyone and has helped hundreds of students discover their musical potential.
                  </p>

                  {/* Credentials Grid */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                        <Award className="w-4 h-4 text-brand-orange" />
                        Certifications
                      </h4>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-500" />
                          Master of Music in Piano Performance
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-500" />
                          Certified Piano Pedagogy Specialist
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-500" />
                          Royal Conservatory Teaching Certificate
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                        <Target className="w-4 h-4 text-brand-pink" />
                        Specialties
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="bg-brand-orange/10 text-brand-orange border-brand-orange/20">
                          Classical Piano
                        </Badge>
                        <Badge variant="secondary" className="bg-brand-pink/10 text-brand-pink border-brand-pink/20">
                          Jazz Theory
                        </Badge>
                        <Badge variant="secondary" className="bg-brand-purple/10 text-brand-purple border-brand-purple/20">
                          Sight Reading
                        </Badge>
                        <Badge variant="secondary" className="bg-brand-orange/10 text-brand-orange border-brand-orange/20">
                          Music Theory
                        </Badge>
                        <Badge variant="secondary" className="bg-brand-pink/10 text-brand-pink border-brand-pink/20">
                          Performance Skills
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {/* Experience Stats */}
                  <div className="flex flex-wrap gap-6 pt-4 border-t border-gray-100">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-brand-pink">15+</div>
                      <div className="text-sm text-gray-600">Years Teaching</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-brand-orange">500+</div>
                      <div className="text-sm text-gray-600">Students Taught</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-brand-purple">4.9</div>
                      <div className="text-sm text-gray-600">Average Rating</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* View All Instructors Link */}
              <div className="mt-8 text-center">
                <Button variant="outline" className="border-brand-pink text-brand-pink hover:bg-brand-pink hover:text-white">
                  <Users className="w-4 h-4 mr-2" />
                  View All Instructors
                </Button>
              </div>
            </div>
          </Card>
        </section>

        {/* Related Courses */}
        <section id="related-courses" className="space-y-8 mt-16">
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Related Courses</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover more courses that complement your piano learning journey
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 4000,
                  stopOnInteraction: true,
                  stopOnMouseEnter: true,
                }),
              ]}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {/* Course 1 - Guitar Fundamentals */}
                <CarouselItem className="pl-2 md:pl-4 md:basis-1/3">
                  <Card className="bg-white border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in">
                    <div className="p-6 space-y-4">
                      {/* Header */}
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary" className="bg-brand-orange/10 text-brand-orange border-brand-orange/20 flex items-center gap-1">
                          <BookOpen className="w-3 h-3" />
                          New Course Enrollment
                        </Badge>
                        <Badge variant="secondary" className="bg-red-50 text-red-600 border-red-200 flex items-center gap-1">
                          <TrendingUp className="w-3 h-3" />
                          Trending
                        </Badge>
                      </div>

                      {/* Instructor Info */}
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-secondary flex items-center justify-center text-white text-sm font-bold">
                          JM
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">James Miller</p>
                          <p className="text-sm text-gray-600">Berklee • Online • Global Access</p>
                        </div>
                      </div>

                      {/* Course Title */}
                      <h3 className="text-xl font-bold text-gray-900 leading-tight">
                        Guitar Fundamentals for Beginners
                      </h3>

                      {/* Course Meta */}
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          15 Jan, 2025
                        </div>
                        <div className="flex items-center gap-1">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          95% Match
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="text-xs">Guitar</Badge>
                        <Badge variant="outline" className="text-xs">Music Theory</Badge>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Master guitar basics with comprehensive lessons covering chords, scales, and popular songs.
                      </p>

                      {/* Actions */}
                      <div className="space-y-3 pt-2">
                        <Button 
                          variant="gradient" 
                          className="w-full rounded-full hover-scale"
                        >
                          Enroll Now
                        </Button>
                        <Button 
                          variant="outline" 
                          className="w-full text-gray-600 hover:text-gray-900"
                        >
                          View Details
                        </Button>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>

                {/* Course 2 - Music Theory */}
                <CarouselItem className="pl-2 md:pl-4 md:basis-1/3">
                  <Card className="bg-white border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in">
                    <div className="p-6 space-y-4">
                      {/* Header */}
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary" className="bg-brand-pink/10 text-brand-pink border-brand-pink/20 flex items-center gap-1">
                          <Music className="w-3 h-3" />
                          Popular Choice
                        </Badge>
                        <div className="flex items-center gap-1 text-yellow-500">
                          <Star className="w-4 h-4 fill-current" />
                          <span className="text-sm font-semibold">4.8</span>
                        </div>
                      </div>

                      {/* Instructor Info */}
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-accent flex items-center justify-center text-white text-sm font-bold">
                          DR
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">Dr. Rachel Davis</p>
                          <p className="text-sm text-gray-600">Juilliard • Online • Global Access</p>
                        </div>
                      </div>

                      {/* Course Title */}
                      <h3 className="text-xl font-bold text-gray-900 leading-tight">
                        Complete Music Theory Mastery
                      </h3>

                      {/* Course Meta */}
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          22 Jan, 2025
                        </div>
                        <div className="flex items-center gap-1">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          92% Match
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="text-xs">Theory</Badge>
                        <Badge variant="outline" className="text-xs">Composition</Badge>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Comprehensive course covering harmony, scales, chord progressions, and composition techniques.
                      </p>

                      {/* Actions */}
                      <div className="space-y-3 pt-2">
                        <Button 
                          variant="gradient" 
                          className="w-full rounded-full hover-scale"
                        >
                          Enroll Now
                        </Button>
                        <Button 
                          variant="outline" 
                          className="w-full text-gray-600 hover:text-gray-900"
                        >
                          View Details
                        </Button>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>

                {/* Course 3 - Vocal Training */}
                <CarouselItem className="pl-2 md:pl-4 md:basis-1/3">
                  <Card className="bg-white border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in">
                    <div className="p-6 space-y-4">
                      {/* Header */}
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary" className="bg-brand-purple/10 text-brand-purple border-brand-purple/20 flex items-center gap-1">
                          <Award className="w-3 h-3" />
                          Certificate Course
                        </Badge>
                        <div className="flex items-center gap-1 text-sm text-gray-600">
                          <Users className="w-4 h-4" />
                          1.2k enrolled
                        </div>
                      </div>

                      {/* Instructor Info */}
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-white text-sm font-bold">
                          AS
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">Anna Smith</p>
                          <p className="text-sm text-gray-600">Voice Academy • Online • Global Access</p>
                        </div>
                      </div>

                      {/* Course Title */}
                      <h3 className="text-xl font-bold text-gray-900 leading-tight">
                        Professional Vocal Training
                      </h3>

                      {/* Course Meta */}
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          05 Feb, 2025
                        </div>
                        <div className="flex items-center gap-1">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          89% Match
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="text-xs">Vocals</Badge>
                        <Badge variant="outline" className="text-xs">Performance</Badge>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Develop your voice with professional techniques for breathing, pitch control, and stage presence.
                      </p>

                      {/* Actions */}
                      <div className="space-y-3 pt-2">
                        <Button 
                          variant="gradient" 
                          className="w-full rounded-full hover-scale"
                        >
                          Enroll Now
                        </Button>
                        <Button 
                          variant="outline" 
                          className="w-full text-gray-600 hover:text-gray-900"
                        >
                          View Details
                        </Button>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Course;