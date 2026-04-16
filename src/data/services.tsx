import { BookOpen, Laptop, GraduationCap, Code, Globe, Users, UserCircle2 } from "lucide-react";
import React from "react";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  image?: string;
  category: "enrollment" | "tutor" | "lessons" | "digital" | "international";
  features: string[];
}

export const services: Service[] = [
  {
    id: "waec",
    title: "WAEC Enrollment",
    description: "Professional WAEC registration and processing for school and private candidates.",
    icon: <BookOpen className="w-8 h-8 text-blue-600" />,
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/8addf9f6-936b-4b11-bdb7-ca641b162c1e/hero-students-b1f067a8-1776362444687.webp",
    category: "enrollment",
    features: ["May/June School Candidates", "GCE Private Candidates", "Bio-metric capturing", "Result processing"]
  },
  {
    id: "neco",
    title: "NECO Enrollment",
    description: "Hassle-free NECO registration services for all candidates nationwide.",
    icon: <GraduationCap className="w-8 h-8 text-blue-600" />,
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/8addf9f6-936b-4b11-bdb7-ca641b162c1e/hero-students-b1f067a8-1776362444687.webp",
    category: "enrollment",
    features: ["SSCE Internal", "SSCE External", "Seamless registration", "Card purchasing"]
  },
  {
    id: "tutors",
    title: "Tutors Outsourcing",
    description: "Find the best qualified subject experts for your specific learning needs.",
    icon: <Users className="w-8 h-8 text-blue-600" />,
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/8addf9f6-936b-4b11-bdb7-ca641b162c1e/home-tutor-5723cf2d-1776362444004.webp",
    category: "tutor",
    features: ["Vetted subject experts", "Personalized matching", "Performance tracking", "Flexible scheduling"]
  },
  {
    id: "home-lessons",
    title: "Home Lessons",
    description: "One-on-one personalized tutoring sessions at the comfort of your home.",
    icon: <UserCircle2 className="w-8 h-8 text-blue-600" />,
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/8addf9f6-936b-4b11-bdb7-ca641b162c1e/home-tutor-5723cf2d-1776362444004.webp",
    category: "lessons",
    features: ["Private environment", "Adaptive teaching", "Primary/Secondary levels", "Specialized exams prep"]
  },
  {
    id: "online-lessons",
    title: "Online Lessons",
    description: "Interactive live learning sessions using modern digital platforms.",
    icon: <Laptop className="w-8 h-8 text-blue-600" />,
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/8addf9f6-936b-4b11-bdb7-ca641b162c1e/coding-class-954d56c7-1776362444588.webp",
    category: "lessons",
    features: ["Interactive whiteboard", "Recorded sessions", "Digital study materials", "Global access"]
  },
  {
    id: "coding",
    title: "Coding & Tech",
    description: "Learn high-demand digital skills: Programming, Data, Design and more.",
    icon: <Code className="w-8 h-8 text-blue-600" />,
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/8addf9f6-936b-4b11-bdb7-ca641b162c1e/coding-class-954d56c7-1776362444588.webp",
    category: "digital",
    features: ["Web Development", "Python for Kids/Adults", "Data Analytics", "UI/UX Design"]
  },
  {
    id: "international-study",
    title: "International Study",
    description: "Expert guidance for your journey to study abroad in top universities.",
    icon: <Globe className="w-8 h-8 text-blue-600" />,
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/8addf9f6-936b-4b11-bdb7-ca641b162c1e/international-study-d765aad8-1776362447841.webp",
    category: "international",
    features: ["Visa counseling", "School admissions", "Test prep (IELTS/SAT)", "Scholarship assistance"]
  }
];