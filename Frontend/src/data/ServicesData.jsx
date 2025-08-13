import { 
  Home, Briefcase, Building2, Film, DoorOpen, ShieldAlert, Network, 
  ChevronRight, Settings, ThumbsUp, Zap, Clock, Wifi, Shield,
  Factory, Heart, Cpu
} from 'lucide-react';
const servicesData = [
  {
    id: 1,
    slug: 'home-automation',
    title: 'Home Automation',
    icon: <Home />,
    description: 'Highly efficient, intelligent, safe and secure smart home technology for smart people.',
    color: 'from-cyan-500 to-teal-500',
    iconBg: 'bg-cyan-100',
    iconColor: 'text-cyan-600',
    solutions: [
      { 
        title: "Smart Home Solutions", 
        icon: <Home />, 
        description: "Transform your living space with intelligent systems that enhance comfort and convenience."
      },
      { 
        title: "Smart Office Solutions", 
        icon: <Briefcase />, 
        description: "Boost productivity and efficiency with automated workplace technologies."
      },
      { 
        title: "Smart Hospitality", 
        icon: <Building2 />, 
        description: "Elevate guest experiences with seamless, connected hospitality solutions."
      },
      { 
        title: "Smart Audio Video Solution", 
        icon: <Film />, 
        description: "Immersive entertainment systems with integrated audio and visual experiences."
      },
      { 
        title: "Smart Entrance Solution", 
        icon: <DoorOpen />, 
        description: "Secure and convenient access control for your property."
      },
      { 
        title: "Smart Intrusion & Security Solution", 
        icon: <ShieldAlert />, 
        description: "Comprehensive protection systems to keep your property safe."
      },
      { 
        title: "Smart Networking Solution", 
        icon: <Network />, 
        description: "Robust connectivity infrastructure for all your smart devices."
      }
    ]
  },
  {
    id: 2,
    slug: 'robotics-system',
    title: 'Robotics System',
    icon: <Cpu />,
    description: 'Research on specific robotics challenges to build more sophisticated, efficient and commercially viable products.',
    color: 'from-purple-500 to-pink-500',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    solutions: [
      { 
        title: "Industrial Robotics", 
        icon: <Factory />, 
        description: "Automated manufacturing solutions for enhanced productivity."
      },
      { 
        title: "Service Robots", 
        icon: <Heart />, 
        description: "Intelligent robots designed to assist in various service industries."
      },
      { 
        title: "AI-Powered Automation", 
        icon: <Cpu />, 
        description: "Machine learning integrated robotic systems for smart decision making."
      }
    ]
  },
  {
    id: 3,
    slug: 'amad-kne-sharing',
    title: 'A-Mad K&E Sharing',
    icon: <Network />,
    description: "We're involved in interesting Mechatronics research projects to develop useful commercially viable products.",
    color: 'from-green-500 to-emerald-500',
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
    solutions: [
      { 
        title: "Knowledge Sharing Platform", 
        icon: <Network />, 
        description: "Collaborative platform for sharing technical knowledge and expertise."
      },
      { 
        title: "Research Collaboration", 
        icon: <Briefcase />, 
        description: "Joint research initiatives for innovative product development."
      }
    ]
  },
  {
    id: 4,
    slug: 'industrial-automation',
    title: 'Industrial Automation',
    icon: <Factory />,
    description: 'An integrated, intelligent, flexible and low-cost industrial automation platform that promotes a safe and efficient industrial environment.',
    color: 'from-orange-500 to-red-500',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
    solutions: [
      { 
        title: "Process Automation", 
        icon: <Settings />, 
        description: "Streamline manufacturing processes with intelligent automation."
      },
      { 
        title: "Quality Control Systems", 
        icon: <Shield />, 
        description: "Automated quality assurance and testing solutions."
      },
      { 
        title: "Supply Chain Integration", 
        icon: <Network />, 
        description: "End-to-end automation for supply chain management."
      }
    ]
  },
  {
    id: 5,
    slug: 'internet-of-things',
    title: 'Internet of Things',
    icon: <Wifi />,
    description: 'We research interesting IoT projects to utilize its magical power to change human life and promote a safe and secure environment.',
    color: 'from-red-500 to-pink-500',
    iconBg: 'bg-red-100',
    iconColor: 'text-red-600',
    solutions: [
      { 
        title: "Smart Sensors", 
        icon: <Wifi />, 
        description: "Connected sensors for real-time monitoring and data collection."
      },
      { 
        title: "IoT Analytics", 
        icon: <Cpu />, 
        description: "Advanced analytics platform for IoT data insights."
      },
      { 
        title: "Device Management", 
        icon: <Settings />, 
        description: "Centralized management system for IoT devices."
      }
    ]
  },
  {
    id: 6,
    slug: 'social-service',
    title: 'Social Service',
    icon: <Heart />,
    description: 'We understand our responsibility towards the nation and support all initiatives for social betterment.',
    color: 'from-blue-500 to-indigo-500',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    solutions: [
      { 
        title: "Community Development", 
        icon: <Heart />, 
        description: "Technology solutions for community welfare and development."
      },
      { 
        title: "Educational Support", 
        icon: <Briefcase />, 
        description: "Digital learning platforms and educational technology."
      }
    ]
  }
];

export default servicesData