"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Github, Mail, Phone, MapPin, ExternalLink, Briefcase, GraduationCap, MessageSquare, CheckCircle2, QrCode } from "lucide-react"; // Added Linkedin, FileText, QrCode
import { motion } from "framer-motion"; // Import motion from framer-motion
import Image from "next/image"; // Importar el componente Image de Next.js
import { useEffect, useState } from "react";
import { sectionAnimation, professionalSummary, contactInfo, languages, technologies, skills, experiences, education } from "@/lib/constants";


export default function Home() {

  const [qrCodeData, setQrCodeData] = useState('https://portfolio-gilt-psi-47.vercel.app'); // Default/placeholder

  useEffect(() => {
    // This code runs only on the client, after hydration
    if (typeof window !== 'undefined') {
      setQrCodeData(window.location.href);
    }
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    
    <div className="min-h-screen bg-gradient-to-br from-slate-300 via-gray-400 to-sky-600 dark:from-slate-900 dark:via-slate-800 dark:to-sky-950 container mx-auto p-4 md:p-8 space-y-12 font-sans text-gray-800 dark:text-gray-200">
      {/* Header Section */}
      <motion.header 
        className="flex flex-col md:flex-row items-center text-center md:text-left gap-6 md:gap-8 pt-8 pb-12 border-b border-slate-300 dark:border-slate-700"
        initial={sectionAnimation.initial}
        animate={sectionAnimation.animate}
        transition={sectionAnimation.transition}
      >
        <Avatar className="w-32 h-32 md:w-40 md:h-40 border-4 border-primary shrink-0">
          <AvatarImage src="/imagenErick.webp" alt="Erick Dorta Cardenas" /> 
          <AvatarFallback>EDC</AvatarFallback>
        </Avatar>
        <div className="mt-4 md:mt-0">
          <h1 className="text-4xl md:text-5xl font-bold text-primary">Erick Dorta Cardenas</h1>
          <p className="text-xl md:text-2xl text-muted-foreground mt-2">Degree in Computer Engineering</p>
          <p className="text-lg text-muted-foreground mt-2">Software Engineer and Full Stack Developer</p>
        </div>
        </motion.header>
        {/* Contact, Languages, and QR Section */}
        <motion.section 
        id="contact" 
        aria-labelledby="contact-heading" 
        className="bg-muted/30 dark:bg-muted/10 rounded-lg p-6 md:p-8 shadow-lg"
        initial={sectionAnimation.initial}
        animate={sectionAnimation.animate}
        transition={{ ...sectionAnimation.transition, delay: 0.1 }} // Slight delay
      >
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 items-start">
          {/* Column 1: Contact Details & Languages */}
          <div>
            <h2 id="contact-heading" className="text-3xl font-semibold mb-6 text-primary">Contact & Connect</h2>
            <div className="space-y-4 text-lg">
              <p className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-primary shrink-0" /> 
                <span>{contactInfo.phone}</span>
              </p>
              <p className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-primary shrink-0" /> 
                <a href={`mailto:${contactInfo.email}`} className="hover:underline break-all" title={`Email ${contactInfo.email}`}>{contactInfo.email}</a>
              </p>
              <p className="flex items-center">
                <Github className="mr-3 h-5 w-5 text-primary shrink-0" /> 
                <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className="hover:underline break-all" title="GitHub Profile">{contactInfo.github.replace('https://github.com/','')}</a>
              </p>
              <p className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-primary mt-1 shrink-0" /> 
                <span>{contactInfo.address}</span>
              </p>
            </div>
            
            <div className="mt-10">
                <h3 className="text-2xl font-semibold mb-5 text-primary">Languages</h3>
                <ul className="space-y-3 text-lg">
                {languages.map((lang, index) => (
                    <li key={index} className="flex items-baseline">
                      <strong className="font-semibold">{lang.lang}:</strong> 
                      <span className="ml-2">{lang.level}</span>
                      {lang.certificateLink && (
                          <a href={lang.certificateLink} target="_blank" rel="noopener noreferrer" className="ml-2 text-sm text-primary hover:underline flex items-center">
                            <ExternalLink className="inline h-3 w-3 mr-1"/> View Certificate
                          </a>
                      )}
                    </li>
                ))}
                </ul>
            </div>
          </div>

          {/* Column 2: QR Code */}
          <div className="flex flex-col items-center md:items-start pt-2 md:pt-0">
            <h3 className="text-2xl font-semibold mb-4 text-primary flex items-center"><QrCode className="mr-2 h-6 w-6"/>Scan My Portfolio</h3>
            <div className="bg-white p-3 inline-block rounded-lg shadow-md">
              <Image
                src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&bgcolor=ffffff&color=000000&data=${encodeURIComponent(qrCodeData)}`}  
                alt="QR code for portfolio" 
                width={180} // Ancho intrínseco de la imagen del QR
                height={180} // Alto intrínseco de la imagen del QR
                className="w-44 h-44 md:w-48 md:h-48 rounded"
              />

            </div>
            <p className="text-sm mt-3 text-muted-foreground text-center md:text-left max-w-xs">
              Quickly access this portfolio on your mobile device by scanning the QR code.
            </p>
          </div>
        
        </div>
        </motion.section>

      <Separator />

      {/* About Me Section */}
      <motion.section 
        id="about" 
        aria-labelledby="about-heading"
        initial={sectionAnimation.initial}
        animate={sectionAnimation.animate}
        transition={{ ...sectionAnimation.transition, delay: 0.2 }}
      >
        <h2 id="about-heading" className="text-3xl font-semibold mb-6 text-primary flex items-center">
          <MessageSquare className="mr-3 h-7 w-7" /> Professional Summary
        </h2>
        <Card className="shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 bg-transparent">
          <CardContent className="pt-6">
          <p className="text-lg leading-relaxed">
              {professionalSummary}
            </p>
          </CardContent>
        </Card>
        </motion.section>

      <Separator />

      {/* Technologies Section */}
      <motion.section 
        id="technologies" 
        aria-labelledby="technologies-heading"
        initial={sectionAnimation.initial}
        animate={sectionAnimation.animate}
        transition={{ ...sectionAnimation.transition, delay: 0.3 }}>
        <h2 id="technologies-heading" className="text-3xl font-semibold mb-6 text-primary">Technologies</h2>
        <div className="flex flex-wrap gap-3">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-md px-4 py-2 shadow transform hover:scale-105 transition-transform duration-200 bg-blue-200">
              {tech}
            </Badge>
          ))}
        </div>
        </motion.section>

      <Separator />

      {/* Skills Section */}
      <motion.section 
        id="skills" 
        aria-labelledby="skills-heading"
        initial={sectionAnimation.initial}
        animate={sectionAnimation.animate}
        transition={{ ...sectionAnimation.transition, delay: 0.4 }}
        >
        <h2 id="skills-heading" className="text-3xl font-semibold mb-6 text-primary">Skills</h2>
        <ul className="space-y-3">
          {skills.map((skill, index) => (
            <li key={index} className="flex items-start text-lg">
              <CheckCircle2 className="h-6 w-6 mr-3 text-green-500 flex-shrink-0 mt-1" />
              <span>{skill}</span>
            </li>
          ))}
        </ul>
      </motion.section>

      <Separator />

      {/* Professional Experience Section */}
      <motion.section 
        id="experience" 
        aria-labelledby="experience-heading"
        initial={sectionAnimation.initial}
        animate={sectionAnimation.animate}
        transition={{ ...sectionAnimation.transition, delay: 0.5 }}
        >
        <h2 id="experience-heading" className="text-3xl font-semibold mb-8 text-primary flex items-center">
          <Briefcase className="mr-3 h-7 w-7" /> Professional Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="shadow-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 bg-transparent">
              <CardHeader>
                <CardTitle className="text-2xl">{exp.role}</CardTitle>
                <CardDescription className="text-md">{exp.period}</CardDescription>
              </CardHeader>
              <CardContent> 
                <p className="text-lg leading-relaxed mb-4">{exp.description}</p>
                {exp.imagePlaceholder && (
                  <div className="my-4"> {/* Contenedor para la imagen */}
                    <Image
                      src={exp.imagePlaceholder} 
                      alt={`${exp.role} project snapshot`} 
                      width={0} // Requerido para el dimensionamiento basado en estilos en Next.js 13+
                      height={0} // Requerido para el dimensionamiento basado en estilos en Next.js 13+
                      sizes="100vw" // Por defecto, ajusta si es necesario: ej. (max-width: 768px) 100vw, 50vw
                      style={{ width: '100%', height: 'auto' }} // Logra ancho responsivo y alto automático
                      className="rounded-md border border-border object-contain" // Aplica estilos y object-fit
                    />
                  </div>
                )}
              </CardContent>
              {exp.liveLink && (
                <CardFooter>
                  <Button variant="ghost" asChild className="bg-transparent hover:bg-blue-200 hover:ring-1">
                    <a href={exp.liveLink} target="_blank" rel="noopener noreferrer">
                      View Project <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              )}
            </Card>
          ))}
        </div>
      </motion.section>

      <Separator />

      {/* Educational Background Section */}
      <motion.section 
        id="education" 
        aria-labelledby="education-heading"
        initial={sectionAnimation.initial}
        animate={sectionAnimation.animate}
        transition={{ ...sectionAnimation.transition, delay: 0.6 }}>
        <h2 id="education-heading" className="text-3xl font-semibold mb-8 text-primary flex items-center">
          <GraduationCap className="mr-3 h-7 w-7" /> Educational Background
        </h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card key={index} className="shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 bg-transparent">
              <CardHeader>
                <CardTitle className="text-xl">{edu.degree}</CardTitle>
                <CardDescription className="text-md">{edu.institution} ({edu.period})</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </motion.section>

    </div>

      
    
  );
}
