
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import anurajImage from '@/assets/anuraj.jpeg';
import anurajImg from '@/assets/anuraj2.png';// Ensure you have this image in your assets folder
import flyImage from '@/assets/fly.png';
import oyster from '@/assets/oii.png';
import blood from '@/assets/blood.png';
import gispace from '@/assets/gispace.png';
import { Upload, Phone, Mail, Linkedin, Github, MapPin, Calendar, Code, Database, Server, Users, ExternalLink } from "lucide-react";
import { url } from "inspector";

const Index = () => {
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const newImages: string[] = [];
      Array.from(files).forEach(file => {
        const reader = new FileReader();
        reader.onload = (e) => {
          if (e.target?.result) {
            newImages.push(e.target.result as string);
            setUploadedImages(prev => [...prev, e.target?.result as string]);
          }
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const skills = [
    { name: "PHP", icon: Code },
    { name: "Laravel", icon: Server },
    { name: "HTML5", icon: Code },
    { name: "CSS3", icon: Code },
    { name: "JavaScript", icon: Code },
    { name: "Bootstrap 5", icon: Code },
    { name: "MySQL", icon: Database },
    { name: "AWS", icon: Server },
    { name: "REST APIs", icon: Server },
    { name: "Git", icon: Code },
  ];

  const projects = [
        {
      title: "Fly Alrajhi",
      description: "Building a live flight and hotel booking platform with real-time API integration and database design in an Agile environment.",
      tech: ["Laravel", "API integration", "MySQL"],
       image: flyImage,
       url: "https://flyalrajhi.com",
    },

 
    {
      title: "Oysters Events",
      description: "Responsive single-page website for event management.",
      tech: ["HTML5", "CSS3", "Bootstrap", "JavaScript"],
      image: oyster,
      url: "https://oystersevents.in/",
    },
       {
      title: "Blood Bank",
      description: "Laravel app for donor and request management, with API-based dropdowns and email alerts.",
      tech: ["Laravel", "PHP", "MySQL", "Email APIs"],
       image: blood,
       url: "https://sfiaasraya.site/",
    },
    {
         title: "GiSpace",
      description: "Responsive single-page website for a dress shop.                               ",
      tech: ["HTML5", "CSS3", "React", "JavaScript"],
      image: gispace,
      url: "https://gispace.weblysi.in/",
    },

    {
      title: "CRMS",
      description: "Campus recruitment system with role-based access for students, employers, and admins.",
      tech: ["Laravel", "PHP", "MySQL", "Bootstrap"],
      url: "#",
    },
       {
      title: "Trip Partner",
      description: "Social travel app with Google Maps, trip planning & expense sharing.",
      tech: ["Laravel", "Google Maps API", "MySQL"],
      url: "#",
    },
 
    {
      title: "Labsoft",
      description: "Medical lab system to manage patient/test records with unique ID tracking.",
      tech: ["Laravel", "PHP", "MySQL", "Bootstrap"],
      url: "#",
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-blue-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-indigo-900">Anuraj M M</h1>
            <div className="hidden md:flex space-x-8">
              {['about', 'skills', 'projects', 'experience', 'education', 'gallery', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-slate-600 hover:text-indigo-600 transition-colors duration-300 capitalize font-medium"
                >
                  {section}
                </button>
              ))}
              {/* <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button> */}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center animate-fade-in">
            <div className="mb-8 relative">
              <div className="w-35 mx-auto profile-border bg-gradient-to-br from-indigo-400  shadow-2xl flex items-center justify-center overflow-hidden">
           <img
  src={anurajImg}
  alt="Anuraj M M"
  className="w-full h-full object-fill"
/>
              </div>
              {/* <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-emerald-500 text-white px-4 py-2 text-sm font-medium shadow-lg">
                  Available for Projects
                </Badge>
              </div> */}
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
              Anuraj M M
            </h1>
            <p className="text-2xl md:text-3xl text-indigo-600 font-semibold mb-8">
              PHP Laravel Developer | API Integrator | Problem Solver
            </p>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              MCA graduate specializing in web application development with expertise in Laravel framework, 
              API integrations, and building scalable solutions for modern web applications.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                onClick={() => scrollToSection('contact')} 
                className="bg-indigo-600 hover:bg-indigo-700 px-8 py-3 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get In Touch
              </Button>
              <Button 
                variant="outline" 
                onClick={() => scrollToSection('projects')}
                className="border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-8 py-3 text-lg font-medium"
              >
                View Projects
              </Button>
               <a href="/ANURAJ M M php.pdf" download>
              <Button 
                className="bg-indigo-600 hover:bg-indigo-700 px-8 py-3 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Download Resume
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-8"></div>
          </div>
          <Card className="p-8 shadow-xl border-0 bg-white/80 backdrop-blur-sm">
            <CardContent className="text-center">
              <p className="text-lg text-slate-700 leading-relaxed max-w-4xl mx-auto">
                MCA graduate with hands-on experience in PHP Laravel development, specializing in web application design, 
                database management, and API integration. Currently working at Kiwisoft Solutions on a live web-based 
                flight and hotel booking platform using real-time APIs (Amadeus, Flydubai, Flynas). Passionate about 
                creating efficient, scalable solutions and continuously learning new technologies to deliver exceptional user experiences.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">Skills & Expertise</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm group">
              <Code className="w-12 h-12 mx-auto mb-4 text-indigo-600 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-semibold text-slate-800 mb-2">Languages & Frameworks</h3>
              <p className="text-slate-600 text-sm">PHP, Laravel, HTML5, CSS3, JavaScript, Bootstrap 5</p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm group">
              <Server className="w-12 h-12 mx-auto mb-4 text-emerald-600 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-semibold text-slate-800 mb-2">Concepts & Tools</h3>
              <p className="text-slate-600 text-sm">OOP, MVC, REST APIs, Git, Composer</p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm group">
              <Database className="w-12 h-12 mx-auto mb-4 text-purple-600 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-semibold text-slate-800 mb-2">Database & Hosting</h3>
              <p className="text-slate-600 text-sm">MySQL, AWS</p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm group">
              <Users className="w-12 h-12 mx-auto mb-4 text-rose-600 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-semibold text-slate-800 mb-2">Soft Skills</h3>
              <p className="text-slate-600 text-sm">Problem Solving, Version Control, Responsive Design</p>
            </Card>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <Badge
                key={skill.name}
                variant="secondary"
                className="px-4 py-2 text-sm font-medium bg-indigo-100 text-indigo-700 hover:bg-indigo-200 transition-colors duration-300"
              >
                <skill.icon className="w-4 h-4 mr-2" />
                {skill.name}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
             <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm overflow-hidden">
  {project.image ? (
    <img
        src={project.image}

      alt={project.title}
      className="h-48 w-full object-cover"
    />
  ) : (
    <div className="h-48 bg-gradient-to-br from-indigo-400 via-purple-500 to-pink-500 flex items-center justify-center">
      <Code className="w-16 h-16 text-white group-hover:scale-110 transition-transform duration-300" />
    </div>
  )}
  <CardContent className="p-6">

    <a href={project.url}>
    <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
      {project.title}
    </h3>
    </a>
    <p className="text-slate-600 mb-4 leading-relaxed">{project.description}</p>
    <div className="flex flex-wrap gap-2">
      {project.tech.map((tech) => (
        <Badge key={tech} variant="outline" className="text-xs">
          {tech}
        </Badge>
      ))}
    </div>
  </CardContent>
</Card>

            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">Experience</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-8"></div>
          </div>
          
          <Card className="p-8 shadow-xl border-0 bg-white/80 backdrop-blur-sm">
            <CardContent>
              <div className="flex items-start gap-6 flex-column-media">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
                    <Code className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">PHP Laravel Developer</h3>
                  <p className="text-indigo-600 font-semibold mb-2"><a href="https://kiwisoft.in">Kiwisoft Solutions LLP</a></p>
                  <div className="flex items-center text-slate-500 mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>November 2023 – June 2025</span>
                  </div>
                  <p className="text-slate-700 leading-relaxed">
                    <br /><b>Contributing to full-stack development of a live web-based flight and hotel booking platform. </b>
                    <br /><b>Specializing in API integration with real-time services (Amadeus, Flydubai, Flynas), </b>
                    <br /><b>database schema design, and collaborative development using Agile methodologies.</b>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">Education</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
              <CardContent>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Master of Computer Applications (MCA)</h3>
                <p className="text-indigo-600 font-semibold mb-2"><a href="https://www.chintech.ac.in/">Chinmaya Institute of Technology, Kannur</a></p>
                <div className="flex items-center text-slate-500">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>Kannur, Kerala</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="p-6 hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
              <CardContent>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Bachelor of Computer Applications (BCA)</h3>
                <p className="text-indigo-600 font-semibold mb-2"><a href="https://www.kannuruniversity.ac.in/en/">Morazha Co-Operative Arts and Science College, Kannur</a></p>
                <div className="flex items-center text-slate-500">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>Kannur, Kerala</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

     

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-white mb-6">Get In Touch</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-8"></div>
            <p className="text-xl text-indigo-200 max-w-2xl mx-auto">
              Ready to collaborate on your next project? Let's connect and build something amazing together.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center hover:shadow-2xl transition-all duration-300 border-0 bg-white/10 backdrop-blur-md group">
              <Phone className="w-8 h-8 mx-auto mb-4 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-semibold text-white mb-2">Phone</h3>
              <p className="text-indigo-200">+971 50-7140456</p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-2xl transition-all duration-300 border-0 bg-white/10 backdrop-blur-md group">
              <Mail className="w-8 h-8 mx-auto mb-4 text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-semibold text-white mb-2">Email</h3>
              <p className="text-indigo-200 break-all">anurajvellave7@gmail.com</p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-2xl transition-all duration-300 border-0 bg-white/10 backdrop-blur-md group">
              <Linkedin className="w-8 h-8 mx-auto mb-4 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-semibold text-white mb-2">LinkedIn</h3>
              <a 
                href="https://www.linkedin.com/in/anurajvlv07" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-indigo-200 hover:text-white transition-colors duration-300 flex items-center justify-center"
              >
                Connect <ExternalLink className="w-3 h-3 ml-1" />
              </a>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-2xl transition-all duration-300 border-0 bg-white/10 backdrop-blur-md group">
              <Github className="w-8 h-8 mx-auto mb-4 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-semibold text-white mb-2">GitHub</h3>
              <a 
                href="https://github.com/anurajvlv70" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-indigo-200 hover:text-white transition-colors duration-300 flex items-center justify-center"
              >
                Follow <ExternalLink className="w-3 h-3 ml-1" />
              </a>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-slate-900 text-center">
        <p className="text-slate-400">
          © 2025 Anuraj M M.
        </p>
      </footer>
    </div>
  );
};

export default Index;
