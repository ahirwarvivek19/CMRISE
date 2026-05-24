export const en = {
  // Navigation
  nav: {
    home: 'Home',
    about: 'About',
    academics: 'Academics',
    facilities: 'Facilities',
    staff: 'Staff',
    admissions: 'Admissions',
    results: 'Results',
    gallery: 'Gallery',
    contact: 'Contact'
  },

  // Header
  header: {
    contactInfo: 'Contact Information',
    schoolName: 'SANDIPANI GOVT. H.S.S. MAHARAJWADA NO.3 UJJAIN',
    address: 'Daudkhedi, Ujjain, M.P. 456006',
    diseCode: 'DISE Code: 23210703123',
    mpBoardCode: 'MP Board Affiliation Code: 44105',
    phone: '+91 123 456 7890',
    email: 'maharajwada.no.3@gmail.com',
    slogan: 'Excellence in Education, Innovation in Learning',
    menuToggle: 'Open menu',
    closeMenu: 'Close menu'
  },

  // Hero Section
  hero: {
    title: 'Welcome to Sandipani Vidyalaya',
    subtitle: 'A flagship initiative of the Government of Madhya Pradesh. We are transforming government school education by creating high-engagement classrooms, empowering teachers, and fostering holistic student development.',
    primaryButton: 'Explore Programs',
    secondaryButton: 'Learn More',
    stats: {
      students: '{{count}} Students',
      students_plural: '{{count}} Students',
      teachers: '{{count}} Teachers',
      teachers_plural: '{{count}} Teachers',
      awards: '{{count}} Awards',
      awards_plural: '{{count}} Awards',
      years: '{{count}} Years',
      years_plural: '{{count}} Years'
    }
  },

  // Home Page
  home: {
    carousel: {
      slide1: {
        title: 'The Vision of Sandipani Vidyalaya',
        subtitle:
          'Renamed by Hon\'ble Chief Minister Dr. Mohan Yadav, we are building a new era of education focusing on academic excellence, robust school leadership, and community engagement.',
        cta: 'Explore Admissions',
      },
      slide2: {
        title: 'High-Engagement Classrooms',
        subtitle:
          'Empowering our teachers to implement structured curricula, and transform every classroom into a hub of joyous learning.',
        cta: 'View Academics',
      },
      slide3: {
        title: 'Holistic Student Development',
        subtitle:
          'We believe in nurturing intellect, character, and practical skills, preparing our students not just for exams, but for life\'s broader challenges.',
        cta: 'Our Story',
      },
    },
    stats: {
      eyebrow: 'At a glance',
      title: 'Our Numbers Speak',
      subtitle:
        'Generations of families have trusted Sandipani Vidyalaya for holistic education in Maharajwada.',
    },
    results: {
      eyebrow: 'Student portal',
      title: 'Check Your Result',
      subtitle:
        'Enter your Scholar Number to view subject-wise marks and overall status — synced from our official records.',
      quickCheck: 'Quick lookup',
      quickHint: 'Results are loaded securely from the school Google Sheet.',
      fullPortal: 'Open full result portal',
    },
    features: {
      eyebrow: 'Why us',
      title: 'Why Choose Sandipani Vidyalaya?',
      subtitle: 'Discover what makes us a premier "Center of Excellence" in Madhya Pradesh',
      items: {
        infrastructure: {
          title: 'Modern Infrastructure',
          text: 'Smart classrooms, advanced laboratories, libraries, and comprehensive sports facilities ensuring an optimal learning environment.',
        },
        curriculum: {
          title: 'Joyful & Structured Learning',
          text: 'We utilize interactive teaching methods and activity-based learning to make education engaging, meaningful, and deeply connected to real life.',
        },
        attention: {
          title: 'Teacher Empowerment & Leadership',
          text: 'Through continuous professional development and strong school leadership, our educators are equipped to bring out the best in every child.',
        },
        activities: {
          title: 'Community Engagement',
          text: 'We actively involve parents and the community to create a supportive, inclusive, and culturally rich educational ecosystem.',
        },
        science: {
          title: 'Science & Innovation',
          text: 'Hands-on learning through well-equipped labs, encouraging scientific temper, curiosity, and critical problem-solving skills.',
        },
        arts: {
          title: 'Arts & Character Building',
          text: 'A strong emphasis on the arts, sports, and ethical values ensures that our students grow into responsible, well-rounded global citizens.',
        },
      },
    },
    cta: {
      title: 'Ready to Start Your Journey?',
      subtitle: 'Join Sandipani Vidyalaya and become part of our success story',
      button: 'Apply Now',
    },
  },

  results: {
    hero: {
      eyebrow: 'Official records',
      title: 'Student Result Portal',
      subtitle: 'Enter your Scholar Number to view marks and pass/fail status.',
    },
    form: {
      cardTitle: 'Check Result',
      cardSubtitle:
        'Use the Scholar Number printed on your ID card or fee receipt. Data is fetched from the school spreadsheet.',
      label: 'Scholar Number',
      placeholder: 'Enter your Scholar Number',
      hint: 'For discrepancies, contact the school office during working hours.',
      submit: 'Check Result',
      loading: 'Checking…',
      errorEmpty: 'Please enter a valid Scholar Number.',
      errorGeneric: 'Something went wrong while fetching the result.',
      errorNotConfigured: 'Results service is not configured. Please contact the school.',
      notConfigured:
        'Admin: set VITE_GOOGLE_SHEET_ID in .env and publish the sheet (File → Share → Publish to web).',
      notFound:
        'No result found for this Scholar Number. Please verify the number or contact the office.',
    },
    panel: {
      title: 'Result details',
      student: 'Student',
      scholar: 'Scholar No',
      class: 'Class',
      subject: 'Subject',
      marks: 'Marks',
      noSubjects: 'Subject-wise marks are not available for this record.',
      empty: 'Search above to display marks and overall status here.',
    },
    help: {
      title: 'Need help?',
      item1: 'Scholar Number is case-sensitive — enter exactly as on your documents.',
      item2: 'Sheet columns: A = Scholar No, B = Name, C = Class, subjects in between, last column = Pass/Fail.',
      item3: 'Ensure the Google Sheet is published and shared for public read (gviz query).',
      note: 'Displayed results are for student reference. Official documents are issued by the school only.',
    },
  },

  // About Page
  about: {
    hero: {
      title: 'About Sandipani Vidyalaya',
      subtitle: 'A legacy of excellence in education spanning over two decades, shaping minds and building futures'
    },
    story: {
      title: 'Our Story',
      subtitle: 'From a local institution to a beacon of educational excellence in Madhya Pradesh',
      legacyTitle: 'The Transition to Sandipani Vidyalaya',
      legacyDescription1: 'Formerly known as CM Rise School, our institution has been proudly renamed Sandipani Vidyalaya by Hon\'ble Chief Minister Dr. Mohan Yadav—paying homage to Maharshi Sandipani, the revered guru of Lord Krishna. As a flagship initiative of the Government of Madhya Pradesh, we are steadfastly developing into a premier "Center of Excellence".',
      legacyDescription2: 'Our transformation is driven by a powerful vision to redefine government school education. With strategic partnerships empowering our capabilities, our focus is on four foundational pillars: Academic Rigour, Teacher Capacity Building, robust School Leadership, and active Community Engagement. We aim to build high-engagement classrooms where every child receives a joyful, holistic education that imparts knowledge, shapes strong character, and cultivates lifelong confidence.',
      legacyPoints: {
        point1: 'Renamed by Hon\'ble CM Dr. Mohan Yadav',
        point2: 'Focus on high-engagement classrooms',
        point3: 'State-of-the-art infrastructure & labs',
        point4: 'Empowered, continuous-learning faculty'
      }
    },
    missionVision: {
      title: 'Our Mission & Vision',
      subtitle: 'Guiding principles that drive our educational philosophy and daily practices',
      missionTitle: 'Mission',
      missionDescription: 'To provide comprehensive, high-quality education that nurtures intellectual growth, character development, and social responsibility. We aim to create an environment where every student can discover their potential and develop the skills needed for lifelong success.',
      visionTitle: 'Vision',
      visionDescription: 'To be recognized as a premier educational institution that produces well-rounded, confident individuals who are prepared to meet global challenges and contribute positively to society. We envision a future where our graduates are leaders, innovators, and responsible global citizens.'
    },
    coreValues: {
      title: 'Our Core Values',
      subtitle: 'The fundamental principles that guide everything we do at Sandipani Vidyalaya'
    },
    values: {
      excellence: {
        title: 'Excellence',
        description: 'Striving for the highest standards in all aspects of education and student development.'
      },
      integrity: {
        title: 'Integrity',
        description: 'Upholding strong moral principles and ethical values in all our actions.'
      },
      community: {
        title: 'Community',
        description: 'Building a supportive and inclusive environment for students, staff, and families.'
      },
      innovation: {
        title: 'Innovation',
        description: 'Embracing new ideas and technologies to enhance learning experiences.'
      },
      compassion: {
        title: 'Compassion',
        description: 'Showing care and understanding towards every individual in our community.'
      },
      achievement: {
        title: 'Achievement',
        description: 'Celebrating success and encouraging continuous improvement in all endeavors.'
      }
    },
    journey: {
      title: 'Our Journey Through Time',
      subtitle: 'Key milestones that have shaped Sandipani Vidyalaya into what it is today'
    },
    timeline: {
      foundation: {
        title: 'Foundation',
        description: 'Sandipani Vidyalaya was established with a vision to provide quality education.'
      },
      expansion: {
        title: 'Expansion',
        description: 'Added secondary education programs and expanded facilities.'
      },
      recognition: {
        title: 'Recognition',
        description: 'Received state-level recognition for academic excellence and innovation.'
      },
      technologyIntegration: {
        title: 'Technology Integration',
        description: 'Implemented smart classrooms and digital learning platforms.'
      },
      digitalTransformation: {
        title: 'Digital Transformation',
        description: 'Enhanced online learning capabilities and virtual classroom infrastructure.'
      },
      futureReady: {
        title: 'Future Ready',
        description: 'Continuing to evolve and prepare students for the challenges of tomorrow.'
      }
    }
  },

  // Academics Page
  academics: {
    hero: {
      title: 'Academic Excellence',
      subtitle: 'High-engagement learning programs designed for holistic student development, from primary through higher secondary.',
    },
    curriculum: {
      title: 'Our Pedagogical Framework',
      subtitle: 'A structured curriculum focusing on experiential learning, critical thinking, and real-world application.',
    },
    programs: {
      title: 'Our Educational Programs',
      subtitle: 'Joyful and structured learning pathways aligned with the Sandipani Vidyalaya vision',
      primary: {
        title: 'Primary Education',
        subtitle: 'Foundation years (Classes 1-5)',
        description: 'Building strong academic foundations with focus on creativity and critical thinking',
        features: {
          interactive: 'Interactive learning methods',
          activityBased: 'Activity-based curriculum',
          characterBuilding: 'Character building activities',
          basicComputerSkills: 'Basic computer skills',
          physicalEducation: 'Physical education & sports'
        }
      },
      secondary: {
        title: 'Secondary Education',
        subtitle: 'Middle years (Classes 6-8)',
        description: 'Expanding knowledge horizons with specialized subjects and skill development',
        features: {
          coreSubjects: 'Core subjects introduction',
          practicalLearning: 'Practical learning approaches',
          creativeArts: 'Creative arts integration',
          sportsPhysicalDevelopment: 'Sports & physical development',
          technologyIntegration: 'Technology integration'
        }
      },
      higherSecondary: {
        title: 'Higher Secondary',
        subtitle: 'Senior years (Classes 9-12)',
        description: 'Preparing students for higher education and career-focused learning',
        features: {
          scienceCommerceArts: 'Science, Commerce & Arts streams',
          advancedLaboratoryFacilities: 'Advanced laboratory facilities',
          careerCounselingGuidance: 'Career counseling & guidance',
          competitiveExamPreparation: 'Competitive exam preparation',
          leadershipDevelopment: 'Leadership development programs'
        }
      }
    },
    subjects: {
      languages: {
        title: 'Languages',
        description: 'English, Hindi, Sanskrit with literature and communication skills'
      },
      mathematics: {
        title: 'Mathematics',
        description: 'Core mathematical concepts, problem-solving, and logical thinking'
      },
      sciences: {
        title: 'Sciences',
        description: 'Physics, Chemistry, Biology with practical laboratory work'
      },
      socialStudies: {
        title: 'Social Studies',
        description: 'History, Geography, Civics, and Environmental Studies'
      },
      computerScience: {
        title: 'Computer Science',
        description: 'Programming, digital literacy, and technology applications'
      },
      artsCrafts: {
        title: 'Arts & Crafts',
        description: 'Creative expression through various art forms and media'
      }
    },
    activities: {
      title: 'Co-Curricular Activities',
      subtitle: 'Beyond the classroom — sports, arts, clubs, and leadership development.',
      sports: {
        title: 'Sports & Athletics',
        description: 'Comprehensive sports program including cricket, football, basketball, athletics, and indoor games.'
      },
      music: {
        title: 'Music & Performing Arts',
        description: 'Vocal and instrumental music, dance, drama, and cultural performances.'
      },
      visualArts: {
        title: 'Visual Arts',
        description: 'Drawing, painting, sculpture, and digital art with regular exhibitions.'
      },
      academicClubs: {
        title: 'Academic Clubs',
        description: 'Science club, math club, literary club, and debate competitions.'
      },
      leadershipPrograms: {
        title: 'Leadership Programs',
        description: 'Student council, peer mentoring, and community service initiatives.'
      },
      technologyInnovation: {
        title: 'Technology & Innovation',
        description: 'Robotics, coding clubs, and STEM project competitions.'
      }
    }
  },

  // Facilities Page
  facilities: {
    hero: {
      title: 'World-Class Infrastructure',
      subtitle: 'State-of-the-art facilities developed under the Sandipani Vidyalaya initiative to provide an optimal learning environment.',
    },
    overview: {
      title: 'Learning Spaces & Amenities',
      subtitle: 'Modern, purpose-built facilities empowering interactive and experiential learning.',
    },
    infrastructureSection: {
      title: 'Campus Infrastructure',
      subtitle: 'Advanced systems ensuring a safe, connected, and supportive educational ecosystem.',
    },
    smart_classrooms: {
      title: 'Smart Classrooms',
      description: 'Modern classrooms equipped with interactive whiteboards, projectors, and digital learning tools.',
      features: {
        interactive_whiteboards: 'Interactive whiteboards',
        audio_visual_equipment: 'Audio-visual equipment',
        climate_control_systems: 'Climate control systems',
        ergonomic_furniture: 'Ergonomic furniture',
        high_speed_internet: 'High-speed internet'
      }
    },
    science_laboratories: {
      title: 'Science Laboratories',
      description: 'Well-equipped laboratories for Physics, Chemistry, and Biology with modern equipment and safety measures.',
      features: {
        advanced_equipment: 'Advanced equipment',
        safety_protocols: 'Safety protocols',
        experienced_lab_assistants: 'Experienced lab assistants',
        regular_maintenance: 'Regular maintenance',
        student_safety_gear: 'Student safety gear'
      }
    },
    computer_lab: {
      title: 'Computer Lab',
      description: 'State-of-the-art computer laboratory with latest hardware and software for technology education.',
      features: {
        latest_computers: 'Latest computers',
        programming_software: 'Programming software',
        internet_access: 'Internet access',
        technical_support: 'Technical support',
        regular_updates: 'Regular updates'
      }
    },
    library_resource_center: {
      title: 'Library & Resource Center',
      description: 'Extensive collection of books, digital resources, and study spaces for students.',
      features: {
        vast_book_collection: 'Vast book collection',
        digital_resources: 'Digital resources',
        study_spaces: 'Study spaces',
        research_assistance: 'Research assistance',
        quiet_zones: 'Quiet zones'
      }
    },
    sports_facilities: {
      title: 'Sports Facilities',
      description: 'Comprehensive sports infrastructure including indoor and outdoor facilities for various sports.',
      features: {
        cricket_ground: 'Cricket ground',
        football_field: 'Football field',
        basketball_court: 'Basketball court',
        indoor_games: 'Indoor games',
        sports_equipment: 'Sports equipment'
      }
    },
    arts_music_rooms: {
      title: 'Arts & Music Rooms',
      description: 'Dedicated spaces for creative arts, music, and performing arts activities.',
      features: {
        art_studio: 'Art studio',
        music_room: 'Music room',
        dance_studio: 'Dance studio',
        exhibition_space: 'Exhibition space',
        professional_equipment: 'Professional equipment'
      }
    },
    infrastructure: {
      wifi_campus: {
        title: 'Wi-Fi Campus',
        description: 'High-speed internet connectivity throughout the campus'
      },
      security_systems: {
        title: 'Security Systems',
        description: '24/7 security with CCTV surveillance and access control'
      },
      transportation: {
        title: 'Transportation',
        description: 'Safe and reliable school transport services'
      },
      green_campus: {
        title: 'Green Campus',
        description: 'Eco-friendly environment with gardens and green spaces'
      },
      study_areas: {
        title: 'Study Areas',
        description: 'Quiet study zones and group discussion rooms'
      },
      digital_resources: {
        title: 'Digital Resources',
        description: 'Online learning platforms and digital libraries'
      }
    }
  },

  // Staff Page
  staff: {
    hero: {
      title: 'Our Educators',
      subtitle: 'Meet our highly trained and empowered faculty, dedicated to driving high-engagement learning and academic excellence.'
    },
    departments: {
      Administration: 'Administration',
      TeachingStaff: 'Teaching Staff',
      SupportStaff: 'Support Staff'
    },
    names: {
      BP8742: 'Rajesh Rathore',
      CB6146: 'Neha Jamidar',
      CA6919: 'Adityaraj Singh Chouhan',
      CA6918: 'Lokit Chawda',
      BP7051: 'Ekta Gour',
      BO4308: 'Arun Kumar Pandit',
      BY7077: 'Dr Maheshchandra Sharma',
      CA9694: 'Dinesh Bhati',
      BX7035: 'Bhagvan Singh Limdiya',
      BQ5216: 'Seema Parmar',
      AQ8625: 'Somesh Vyas',
      CB2655: 'Rajesh Bairagi',
      CB6644: 'Roshini Suman',
      CB2605: 'Anuradha Katare',
      CC2313: 'Priti Bhoj',
      CB3012: 'Indira Mathur',
      CC2925: 'Rubal Verma',
      CB2999: 'Ritcha Chaudhary',
      BW1312: 'Rakesh Kumar Jaiswal',
      AA4737: 'Virshree Darpe',
      BD9052: 'Sohan Lal Pandya',
      BI8121: 'Ravi Sahu',
      BE5085: 'Shiv Singh Ahirwar',
      BU2747: 'Bharti Soni',
      BE4477: 'Manjula Marmat',
      BE4476: 'Mohammad Ali Khan',
      BD7695: 'Dinesh Kumar Pandya',
      CF8989: 'Sayyed Vahid Hussain',
      CE5174: 'Rupali Dubey',
      CD2585: 'Priyanka Singh',
      BD9243: 'Shailesh Joshi',
      CC2411: 'Ruchika Vyas',
      BE2465: 'Urmila Shrimali',
      CB5307: 'Geeta Chandniya'
    }
  },

  // Admissions Page
  admissions: {
    hero: {
      title: 'Join Sandipani Vidyalaya',
      subtitle: 'Become part of Madhya Pradesh\'s premier educational transformation. We welcome students eager to thrive in a joyful learning environment.'
    },
    tabs: {
      process: 'Admission Process',
      requirements: 'Requirements',
      forms: 'Forms & Documents'
    },
    process: {
      title: 'Admission Process',
      subtitle: 'Simple and transparent admission procedures for new students',
      steps: {
        applicationSubmission: {
          title: 'Application Submission',
          description: 'Complete and submit the admission application form with required documents'
        },
        documentVerification: {
          title: 'Document Verification',
          description: 'Our team will review and verify all submitted documents'
        },
        assessmentInterview: {
          title: 'Assessment & Interview',
          description: 'Students may be required to take an assessment test and attend an interview'
        },
        admissionConfirmation: {
          title: 'Admission Confirmation',
          description: 'Upon successful completion, admission will be confirmed and enrollment completed'
        }
      }
    },
    requirements: {
      title: 'Admission Requirements',
      subtitle: 'Essential documents and criteria for admission consideration',
      documents: {
        birthCertificate: {
          title: 'Birth Certificate',
          description: 'Original birth certificate or equivalent document'
        },
        previousSchoolRecords: {
          title: 'Previous School Records',
          description: 'Transfer certificate and academic records from previous school'
        },
        addressProof: {
          title: 'Address Proof',
          description: 'Valid address proof and identity documents'
        }
      }
    },
    forms: {
      title: 'Download Forms & Information',
      subtitle: 'Access admission forms and detailed information about our programs',
      applicationForm: {
        title: 'Admission Application Form',
        description: 'Complete application form for new student admissions',
        download: 'Download Form'
      },
      prospectus: {
        title: 'School Prospectus',
        description: 'Comprehensive information about our school and programs',
        download: 'Download Prospectus'
      }
    },
    help: {
      title: 'Need Help with Admissions?',
      subtitle: 'Our admission team is here to assist you with any questions or concerns.',
      contact: {
        phone: '+91 123 456 7890',
        email: 'maharajwada.no.3@gmail.com',
        hours: 'Monday - Friday, 8:00 AM - 4:00 PM'
      }
    }
  },

  // Contact Page
  contact: {
    hero: {
      title: 'Get in Touch',
      subtitle: 'Connect with Sandipani Vidyalaya. We welcome inquiries from parents, community members, and partners in education.'
    },
    section: {
      title: 'Contact Us',
      subtitle: 'Reach out to us through any of the following channels'
    },
    form: {
      name: {
        label: 'Full Name *',
        placeholder: 'Enter your full name'
      },
      email: {
        label: 'Email Address *',
        placeholder: 'Enter your email address'
      },
      phone: {
        label: 'Phone Number',
        placeholder: 'Enter your phone number'
      },
      subject: {
        label: 'Subject',
        placeholder: 'Enter subject'
      },
      message: {
        label: 'Message *',
        placeholder: 'Enter your message'
      },
      submit: {
        button: 'Send Message',
        sending: 'Sending...'
      }
    },
    info: {
      address: {
        title: 'Address',
        description: 'Sandipani Govt. H.S.S. Maharajwada No. 3,\nDaudkhedi, Ujjain, M.P. 456006'
      },
      phone: {
        title: 'Phone'
      },
      email: {
        title: 'Email'
      },
      hours: {
        title: 'Office Hours',
        description: 'Monday - Friday: 8:00 AM - 4:00 PM<br />Saturday: 8:00 AM - 12:00 PM'
      }
    },
    social: {
      title: 'Follow Us'
    },
    map: {
      title: 'Find Us',
      subtitle: 'Visit our campus and experience the Sandipani Vidyalaya difference',
      coming_soon: 'Interactive Map Coming Soon',
      description: 'We\'re located in the heart of Ujjain, easily accessible by public transport and private vehicles.'
    }
  },

  // Footer
  footer: {
    quickLinks: 'Quick Links',
    academicLinks: 'Academic Links',
    contactInfo: 'Contact Information',
    newsletter: {
      title: 'Stay Updated',
      description: 'Subscribe to our newsletter for the latest updates and news',
      placeholder: 'Enter your email address',
      subscribe: 'Subscribe'
    },
    importantLinks: 'Important Links',
    links: {
      studentPortal: 'Student Portal',
      parentPortal: 'Parent Portal',
      staffPortal: 'Staff Portal',
      results: 'Results',
      eventsCalendar: 'Events Calendar'
    },
    copyright: 'All rights reserved.',
    poweredBy: 'Designed with ❤️ for excellence in education'
  },

  // Common
  common: {
    learnMore: 'Learn More',
    readMore: 'Read More',
    viewAll: 'View All',
    download: 'Download',
    apply: 'Apply',
    contact: 'Contact Us',
    backToTop: 'Back to Top'
  }
};
