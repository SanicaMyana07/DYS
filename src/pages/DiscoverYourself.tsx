import React, { useState, useEffect } from 'react';
import { Flame, BookOpen, Award, Calendar, Clock, User, MapPin, ArrowRight, ChevronDown, ChevronUp, Youtube, Presentation as FilePresentation } from 'lucide-react';

export const DiscoverYourself: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number | null>(null);
  const [flameSize, setFlameSize] = useState(48);
  const [flameOpacity, setFlameOpacity] = useState(1);

  // Flame animation effect
  useEffect(() => {
    const flameInterval = setInterval(() => {
      setFlameSize(prev => Math.max(44, Math.min(52, prev + (Math.random() > 0.5 ? 1 : -1))));
      setFlameOpacity(prev => Math.max(0.8, Math.min(1, prev + (Math.random() > 0.5 ? 0.05 : -0.05))));
    }, 150);

    return () => clearInterval(flameInterval);
  }, []);

  const toggleStage = (index: number) => {
    setActiveStage(activeStage === index ? null : index);
  };

  const stages = [
    {
      level: 'DYS 0',
      title: 'Introduction to Self-Discovery',
      description: 'Begin your journey of self-discovery with foundational spiritual concepts and practices.',
      duration: '1 week',
      topics: [
        'Understanding the spiritual journey',
        'Introduction to meditation techniques',
        'The science behind spirituality',
        'Setting intentions for your practice'
      ],
      youtubeLink: 'https://www.youtube.com/watch?v=example0',
      pptLink: 'https://example.com/presentations/dys0'
    },
    {
      level: 'DYS 1',
      title: 'Mind and Consciousness',
      description: 'Explore the nature of mind and consciousness through ancient wisdom and modern science.',
      duration: '2 weeks',
      topics: [
        'The nature of consciousness',
        'Understanding thought patterns',
        'Mind-body connection',
        'Basic meditation practices'
      ],
      youtubeLink: 'https://www.youtube.com/watch?v=example1',
      pptLink: 'https://example.com/presentations/dys1'
    },
    {
      level: 'DYS 2',
      title: 'Emotional Intelligence',
      description: 'Learn to recognize and manage emotions through spiritual practices and self-awareness.',
      duration: '2 weeks',
      topics: [
        'Emotional awareness techniques',
        'Managing negative emotions',
        'Cultivating positive states of mind',
        'Emotional healing practices'
      ],
      youtubeLink: 'https://www.youtube.com/watch?v=example2',
      pptLink: 'https://example.com/presentations/dys2'
    },
    {
      level: 'DYS 3',
      title: 'The Science of Happiness',
      description: 'Discover the scientific and spiritual principles behind lasting happiness and contentment.',
      duration: '2 weeks',
      topics: [
        'Neuroplasticity and happiness',
        'Ancient wisdom on joy and contentment',
        'Gratitude practices',
        'Creating positive habits'
      ],
      youtubeLink: 'https://www.youtube.com/watch?v=example3',
      pptLink: 'https://example.com/presentations/dys3'
    },
    {
      level: 'DYS 4',
      title: 'Purpose and Dharma',
      description: 'Uncover your unique purpose and path in life through spiritual inquiry and self-reflection.',
      duration: '3 weeks',
      topics: [
        'Understanding dharma (life purpose)',
        'Aligning actions with values',
        'Service and contribution',
        'Finding meaning in daily life'
      ],
      youtubeLink: 'https://www.youtube.com/watch?v=example4',
      pptLink: 'https://example.com/presentations/dys4'
    },
    {
      level: 'DYS 5',
      title: 'Relationships and Connection',
      description: 'Transform your relationships through spiritual principles of compassion and understanding.',
      duration: '2 weeks',
      topics: [
        'Spiritual basis of relationships',
        'Compassion and empathy practices',
        'Resolving conflicts mindfully',
        'Building meaningful connections'
      ],
      youtubeLink: 'https://www.youtube.com/watch?v=example5',
      pptLink: 'https://example.com/presentations/dys5'
    },
    {
      level: 'DYS 6',
      title: 'Advanced Meditation',
      description: 'Deepen your meditation practice with advanced techniques from ancient traditions.',
      duration: '3 weeks',
      topics: [
        'Advanced concentration techniques',
        'Insight meditation practices',
        'Working with subtle energies',
        'Extended meditation sessions'
      ],
      youtubeLink: 'https://www.youtube.com/watch?v=example6',
      pptLink: 'https://example.com/presentations/dys6'
    },
    {
      level: 'DYS 7',
      title: 'Wisdom and Insight',
      description: 'Develop profound wisdom and insight through contemplative practices and spiritual study.',
      duration: '3 weeks',
      topics: [
        'Study of sacred texts',
        'Contemplative inquiry',
        'Developing discernment',
        'Integrating wisdom into daily life'
      ],
      youtubeLink: 'https://www.youtube.com/watch?v=example7',
      pptLink: 'https://example.com/presentations/dys7'
    },
    {
      level: 'DYS 8',
      title: 'Integration and Transformation',
      description: 'Integrate all aspects of your spiritual journey for complete personal transformation.',
      duration: '4 weeks',
      topics: [
        'Creating a sustainable spiritual practice',
        'Living with awareness in everyday life',
        'Sharing wisdom with others',
        'Continuing the journey of self-discovery'
      ],
      youtubeLink: 'https://www.youtube.com/watch?v=example8',
      pptLink: 'https://example.com/presentations/dys8'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      {/* Hero Section */}
      <div className="relative h-screen bg-gradient-to-b from-black to-gray-900">
        {/* Removed background image and overlay */}
        
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <div className="flex items-center justify-center mb-6 relative">
            {/* Animated flame effect */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Flame 
                size={flameSize + 10} 
                className="text-saffron-400/30 animate-pulse absolute" 
                style={{ filter: 'blur(8px)' }}
              />
              <Flame 
                size={flameSize + 5} 
                className="text-saffron-500/50 absolute" 
                style={{ filter: 'blur(4px)' }}
              />
            </div>
            <Flame 
              size={flameSize} 
              className="text-saffron-500 relative z-10" 
              style={{ opacity: flameOpacity }}
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Discover Yourself</h1>
          <p className="text-xl md:text-2xl max-w-3xl mb-8 text-gray-200">
            A transformative 9-stage spiritual journey guided by a monk from IIT
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-saffron-500 hover:bg-saffron-600 text-black font-bold py-3 px-8 rounded-full transition duration-300">
              Enroll Now
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-0 right-0 flex justify-center z-20 animate-bounce">
          <ChevronDown size={32} className="text-saffron-500" />
        </div>
      </div>

      {/* About the Course */}
      <div className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-saffron-500">About the Course</h2>
              <p className="text-lg mb-6 text-gray-300">
                "Discover Yourself" is a comprehensive spiritual development program designed by a monk with an IIT background, 
                combining ancient wisdom with modern scientific understanding.
              </p>
              <p className="text-lg mb-6 text-gray-300">
                This 9-stage journey takes you from the fundamentals of self-awareness to advanced spiritual practices, 
                helping you discover your true potential and purpose in life.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="flex items-start gap-3">
                  <Calendar className="text-saffron-500 mt-1" />
                  <div>
                    <h3 className="font-semibold">Duration</h3>
                    <p className="text-gray-400">22 weeks total</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="text-saffron-500 mt-1" />
                  <div>
                    <h3 className="font-semibold">Commitment</h3>
                    <p className="text-gray-400">5-7 hours weekly</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <User className="text-saffron-500 mt-1" />
                  <div>
                    <h3 className="font-semibold">Instructor</h3>
                    <p className="text-gray-400">IIT Monk</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="text-saffron-500 mt-1" />
                  <div>
                    <h3 className="font-semibold">Format</h3>
                    <p className="text-gray-400">Online & In-person</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80" 
                  alt="Meditation session" 
                  className="w-full h-auto rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-bold text-white">Learn from a Monk with an IIT Background</h3>
                    <p className="text-gray-300">Bridging ancient wisdom with modern science</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Structure */}
      <div className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-saffron-500">The 9-Stage Journey</h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-300">
              Each stage of the Discover Yourself program builds upon the previous one, 
              creating a comprehensive path to spiritual growth and self-realization.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {stages.map((stage, index) => (
              <div 
                key={index}
                className="mb-6 border border-gray-800 rounded-lg overflow-hidden"
              >
                <div 
                  className={`flex justify-between items-center p-6 cursor-pointer ${
                    activeStage === index ? 'bg-saffron-500/10 border-l-4 border-l-saffron-500' : 'hover:bg-gray-900'
                  }`}
                  onClick={() => toggleStage(index)}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-saffron-500/20 flex items-center justify-center text-saffron-500 font-bold">
                      {stage.level}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{stage.title}</h3>
                      <p className="text-gray-400">{stage.duration}</p>
                    </div>
                  </div>
                  <div>
                    {activeStage === index ? (
                      <ChevronUp className="text-saffron-500" />
                    ) : (
                      <ChevronDown className="text-saffron-500" />
                    )}
                  </div>
                </div>
                
                {activeStage === index && (
                  <div className="p-6 bg-gray-900/50 border-t border-gray-800">
                    <p className="text-gray-300 mb-4">{stage.description}</p>
                    
                    <div className="flex gap-4 mb-4">
                      <a 
                        href={stage.youtubeLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition duration-300"
                      >
                        <Youtube size={20} />
                        <span>Watch Video</span>
                      </a>
                      <a 
                        href={stage.pptLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition duration-300"
                      >
                        <FilePresentation size={20} />
                        <span>View Slides</span>
                      </a>
                    </div>
                    
                    <h4 className="font-semibold text-saffron-400 mb-2">Topics covered:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {stage.topics.map((topic, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <ArrowRight size={16} className="text-saffron-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-300">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-saffron-500">Transformative Experiences</h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-300">
              Hear from those who have completed the Discover Yourself program and experienced profound changes in their lives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Sharma",
                role: "Software Engineer",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
                quote: "This course completely transformed my relationship with stress and anxiety. The techniques I learned have become an essential part of my daily routine."
              },
              {
                name: "Rahul Patel",
                role: "Business Owner",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
                quote: "As a business owner, I was constantly overwhelmed. The Discover Yourself program helped me find clarity and purpose, which has positively impacted both my business and personal life."
              },
              {
                name: "Ananya Gupta",
                role: "Medical Student",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
                quote: "The scientific approach to spirituality in this course resonated deeply with me. I've gained tools that help me stay centered during the most challenging times in medical school."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <p className="text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')] bg-cover bg-center opacity-30 z-0"></div>
        
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Begin Your Journey of <span className="text-saffron-500">Self-Discovery</span></h2>
            <p className="text-xl mb-8 text-gray-300">
              Take the first step towards understanding your true self and unlocking your full potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-saffron-500 hover:bg-saffron-600 text-black font-bold py-4 px-10 rounded-full transition duration-300 text-lg">
                Enroll Now
              </button>
              <button className="border-2 border-saffron-500 text-saffron-500 hover:bg-saffron-500/10 font-bold py-4 px-10 rounded-full transition duration-300 text-lg">
                Download Syllabus
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-gray-900 to-black py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-6 md:mb-0">
              <div className="relative">
                <Flame size={24} className="text-saffron-500 mr-2 relative z-10" />
                <Flame size={28} className="text-saffron-400/30 absolute -top-1 -left-1" style={{ filter: 'blur(2px)' }} />
              </div>
              <span className="text-xl font-bold">Discover Yourself</span>
            </div>
            <div className="flex gap-8">
              <a href="#" className="text-gray-400 hover:text-saffron-500 transition duration-300">About</a>
              <a href="#" className="text-gray-400 hover:text-saffron-500 transition duration-300">Courses</a>
              <a href="#" className="text-gray-400 hover:text-saffron-500 transition duration-300">Testimonials</a>
              <a href="#" className="text-gray-400 hover:text-saffron-500 transition duration-300">Contact</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500">
            <p>© {new Date().getFullYear()} Discover Yourself. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};