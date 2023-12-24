import {
    sre,
    backend,
    cloud,
    devops,
    ansible,
    aws,
    azure,
    apache,
    bash,
    CICD,
    jenkins,
    sonarqube,
    groovy,
    git,
    github,
    docker,
    percoid,
    compliancequest,
    ittraining,
    threeqspace,
    voeux,
    rails,
    houseappartment,
    pythondocker
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
    {
      id: "resume",
      title: "Resume"
    },
  ];
  
  const services = [
    {
      title: "DevOps",
      icon: devops,
    },
    {
      title: "Site Reliability Engineering",
      icon: sre,
    },
    {
      title: "IT Professional",
      icon: backend,
    },
    {
      title: "Cloud Administration",
      icon: cloud,
    },
  ];
  
  const technologies = [
    {
      name: "ansible",
      icon: ansible,
    },
    {
      name: "aws",
      icon: aws,
    },
    {
      name: "azure",
      icon: azure,
    },
    {
      name: "apache",
      icon: apache,
    },
    {
      name: "bash",
      icon: bash
    },
    {
      name: "CICD",
      icon: CICD
    },
    {
      name: "docker",
      icon: docker
    },
    {
      name: "jenkins",
      icon: jenkins,
    },
    {
      name: "sonarqube",
      icon: sonarqube,
    },
    {
      name: "groovy",
      icon: groovy,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "github",
      icon: github,
    }
  ];
  
  const experiences = [
    {
      title: "DevOps Engineer - Contract",
      company_name: "Voeux Information Technology LLC | Dubai, United Arab Emirates",
      icon: voeux,
      iconBg: "#ead8d0",
      date: "14 Dec 2023 - Present",
      points: [
        "Ensure that the infrastructure is scalable, reliable, and secure.",
        "Establish and maintain continuous integration and deployment pipelines,ensuring that code changes are tested, built, and deployed in a consistent and automated way  .",
        "Play a crucial role in incident management, responding to and resolving production issues promptly and troubleshoot issues by identifying root causes,and implement preventive measures to minimize future incidents.",
        "Collaborate with development, operations, and other cross-functional teams to ensure smooth and efficient delivery.",
        "Document infrastructure, processes, and procedures to ensure knowledge transfer and enable efficient troubleshooting so as to contribute to internal knowledge bases and share best practices with the team.",
        "Seek opportunities to improve processes, tools, and infrastructure by evaluating new technologies and methodologies to enhance efficiency, scalability, and reliability."
      ],
    },
    {
      title: "IT Support Engineer - Internship (Contract)",
      company_name: "3QSPACE LLC | Dubai, United Arab Emirates",
      icon: threeqspace,
      iconBg: "#fff",
      date: "1st Nov 2023- 30 Dec 2023",
      points: [
        "Maintaining system upgrades, patches for the system to ensure high availability.",
        "Communicate effectively and solve problems to achieve successful outcomes.",
        "Good exposure to use ERP system configuration based on frappe framework."
      ],
    },
    {
      title: "Software Engineer - DevOps",
      company_name: "Compliance Quest Nepal Pvt. Ltd | Lalitpur, Nepal",
      icon: compliancequest,
      iconBg: "#fff",
      date: "Apr 2022 - Mar 2023",
      points: [
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Maintain CI/CD using Jenkins and Gitlab/Github/Bitbucket ties automated builds, tests and releases together in a single workflow to build functional systems that improve client’s needs and experience",
        "Design of Production, Staging/QA, and Development infrastructures running for 24/7 environments.",
        "Deploying product updates, identifying production issues, and implementing integration that improve the development team’s production and improve customer needs",
        "Infrastructure migration approaches on AWS and techniques including some applications migrations into the cloud including implementation of hybrid cloud solutions within regulated enterprise environments",
        "Mentor and guide devops teams to ensure successful project delivery.",
        "Stay up to date with emerging devops technologies and industry trends.",
        "Communicate effectively and solve problems to achieve successful project outcomes.",
        "Good exposure to Agile software development methodologies and DevOps practices such as Infrastructure as Code (IaC), Continuous Integration (CI) and automated deployment."
      ],
    },
    {
      title: "DevOps and System Engineer",
      company_name: "Percoid IT Solutions | Lalitpur, Nepal",
      icon: percoid,
      iconBg: "#fff",
      date: "Jun 2017 - Mar 2022",
      points: [
        "Configure and managed different Linux and Windows server with 99% up time.",
        "Experienced and knowledge of scripting with Bash,Groovy and IT Automation with Ansible and Terraform.",
        "Monitoring and alerting system setup for large scale servers through Grafana and Prometheus, and also checked code quality through SonarQube.",
        "Developed and executed comprehensive tests to validate deployment correctness, accompanied by clear and concise documentation.",
        "Scalable Microservices architecture deployment and configuration Continuous Integration and Deployment for FrontEnd and Backend Stacks with tools like Jenkins and Gitlab-CI",
        "Worked on different Databases like Ms-SQL, Postgresql and My-sql to configure user level permission, autoscaling, backup and restore and other administration."
      ],
    },
    {
      title: "Hardware and Network Support Engineer",
      company_name: "IT Training Nepal | Kathmandu, Nepal",
      icon: ittraining,
      iconBg: "#ead8d0",
      date: "Sep 2015 - May 2017",
      points: [
        "Assemble and Dissemble the Computers, Laptops and different devices.",
        "Troubleshooting the hardware issues and resolved the issues of all kinds of PC and laptops and other devices",
        "Participating in different webinars, reviews and providing effective feedback to other employees.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to automate a deployments, but Sailesh proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a devops engineer who truly cares about their clients' success like Sailesh does.",
      name: "Micheal Wang",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Sailesh optimized our CI/CD pipelines, our process has been optimized and runs smoothly. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Deploy Ruby and Rails devops App using Vagrant",
      description:
        "Simple devops application built with the Ruby on Rails devops framework in a Vagrant box",
      tags: [
        {
          name: "node js",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "ruby & rails",
          color: "pink-text-gradient",
        },
      ],
      image: rails,
      source_code_link: "https://github.com/saileshkhadka/Rails-app-in-a-Vagrant-box",
    },
    {
      name: "House Appartment System",
      description:
        "House Appartment System devops Application built in Asp .Net MVC where user and create, update, delete and retrieve the records and details.",
      tags: [
        {
          name: "asp",
          color: "green-text-gradient",
        },
        {
          name: "angular",
          color: "blue-text-gradient",
        },
        {
          name: "sql",
          color: "pink-text-gradient",
        },
      ],
      image: houseappartment,
      source_code_link: "https://github.com/saileshkhadka/FinalProjApartment",
    },
    {
      name: "Deploy Python app with Jenkins CI and Docker",
      description:
        "Simple python application deployments using jenkins server and docker.",
      tags: [
        {
          name: "docker",
          color: "blue-text-gradient",
        },
        {
          name: "python",
          color: "pink-text-gradient",
        },
        {
          name: "jenkins",
          color: "green-text-gradient",
        },
      ],
      image: pythondocker,
      source_code_link: "https://github.com/saileshkhadka/wordpress-docker/tree/main",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };