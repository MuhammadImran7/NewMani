// data/services.js
// Import images for the frontend service
import frontendBg from '~/assets/images/frontendbgimg.webp';
import frontendLaptop from '~/assets/images/FrontendImages/code.webp';
import frontendVuelogo from '~/assets/images/FrontendImages/vuelogo.webp';
import frontendReact from '~/assets/images/FrontendImages/reactnativelogo.webp';
import frontendAngular from '~/assets/images/FrontendImages/Angular-img.webp';
import frontendWordpress from '~/assets/images/FrontendImages/wordpress-150x36-1.webp';
import frontendTailwind from '~/assets/images/FrontendImages/tailwind.webp';
import frontendBootstrap from '~/assets/images/FrontendImages/bootstrap.webp';

// Import images for the backend service
import backendBg from '~/assets/images/frontendbgimg.webp';
import backendLaptop from '~/assets/images/backendImages/backendlaptop.webp';
import backendVuelogo from '~/assets/images/backendImages/vstuuio.webp';
import backendReact from '~/assets/images/backendImages/phpstorm.webp';
import backendAngular from '~/assets/images/backendImages/laravel.webp';
import backendWordpress from '~/assets/images/backendImages/node.webp';
import backendTailwind from '~/assets/images/backendImages/magento.webp';
import backendBootstrap from '~/assets/images/backendImages/php.webp';
// Import images for the design service
import designBg from '~/assets/images/frontendbgimg.webp';
import designLaptop from '~/assets/images/designImages/laptop.webp'; 
import designVuelogo from '~/assets/images/designImages/adobe.webp';
import designReact from '~/assets/images/designImages/cc.webp';
import designAngular from '~/assets/images/designImages/figma.webp';
import designWordpress from '~/assets/images/designImages/adobeprem.webp';
import designTailwind from '~/assets/images/designImages/xd.webp';
import designBootstrap from '~/assets/images/designImages/ps.webp';
// Import images for the Quality Assurance service
import qaBg from '~/assets/images/frontendbgimg.webp';
import qaLaptop from '~/assets/images/qaImages/qalaptop.webp'; 
import qaVuelogo from '~/assets/images/qaImages/soap (1).webp';
import qaReact from '~/assets/images/qaImages/postman.webp';
import qaAngular from '~/assets/images/qaImages/sele.webp';
import qaWordpress from '~/assets/images/qaImages/browser.webp';
import qaTailwind from '~/assets/images/qaImages/jm.webp';
import qaBootstrap from '~/assets/images/qaImages/owsap.webp';

// Import images for the network solutions service
import networkBg from '~/assets/images/frontendbgimg.webp';
import networkLaptop from '~/assets/images/networkImages/networklaptop.webp'; 
import networkVuelogo from '~/assets/images/networkImages/aws.webp';
import networkReact from '~/assets/images/networkImages/AZURE.webp';
import networkAngular from '~/assets/images/networkImages/sona.webp';
import networkWordpress from '~/assets/images/networkImages/gittttt.webp';
import networkTailwind from '~/assets/images/networkImages/google.webp';
import networkBootstrap from '~/assets/images/networkImages/ma.webp';
import networkdo from '~/assets/images/networkImages/do.webp';

// Import images for the microsoft dynamics service
import dynamicsBg from '~/assets/images/frontendbgimg.webp';
import dynamicsLaptop from '~/assets/images/dynamicsImages/laptopdynamics.webp'; 
import dynamicsVuelogo from '~/assets/images/dynamicsImages/businesscentral.webp';
import dynamicsReact from '~/assets/images/dynamicsImages/ms.webp';
import dynamicsAngular from '~/assets/images/dynamicsImages/ms1.webp';
import dynamicsWordpress from '~/assets/images/dynamicsImages/ms2.webp';
import dynamicsTailwind from '~/assets/images/dynamicsImages/ms3.webp';
import dynamicsBootstrap from '~/assets/images/dynamicsImages/ms4.webp';



export const services = {
    frontend: {
      title: 'Frontend Development',
      description: 'Transform ideas into seamless web experiences',
      items: [
        'HTML & CSS Responsive Web Design',
        'Javascript Development',
        'Vue JS Development',
        'React JS Development',
        'Angular JS Development',
        'CMS Theming Services',
        'PSD to Bootstrap Services',
      ],
      lastheading: 'Elevate your business with our transformative frontend services!'
      ,
      images: {
        bg: frontendBg,
      laptop: frontendLaptop,
      Vuelogo: frontendVuelogo,
      react: frontendReact,
      angular: frontendAngular,
      wordpress: frontendWordpress,
      tailwind: frontendTailwind,
      bootstrap: frontendBootstrap,
      }
    },
    backend: {
      title: 'Backend Solutions',
      description: 'Seamless operations start with strategic backend development',
      items: [
        'Server-Side Scripting',
        'Database Design and Management',
        'API Development',
        'Backend Framework Development',
        'Server Configuration and Management',
        'Caching and Performance Optimization',
        'Integration with Third-Party Services'
        // Add other items here
      ],
      lastheading: 'Empower your business with our transformative backend solutions!',
      images: {
        bg: backendBg,
        laptop: backendLaptop,
        Vuelogo: backendVuelogo,
        react: backendReact,
        angular: backendAngular,
        wordpress: backendWordpress,
        tailwind: backendTailwind,
        bootstrap: backendBootstrap,
      }
    },
    design: {
        title: 'Design Services',
        description: 'Designing Ideas into Seamless Visual Experiences',
        items: [
          'Video Editing',
          'UI Design',
          'Prototyping',
          'Graphics',
          'Wireframes',
          'Component based designs',
          'Motion Graphic',
          'Social Media Branding',
          'CGI Photography'
          // Add other items here
        ],
        lastheading: 'Enhance your brand with our revolutionary design services!',
        images: {
          bg: designBg,
          laptop: designLaptop,
          Vuelogo: designVuelogo,
          react: designReact,
          angular: designAngular,
          wordpress: designWordpress,
          tailwind: designTailwind,
          bootstrap: designBootstrap,
        }
      },
      
    
    qualityassurance  : {
        title: 'Quality Assurance',
        description: 'Strategizing Flawless Quality Assurance Mastery',
        items: [
          'Manual Testing',
          'Regression Testing',
          'User Acceptance Testing (UAT)',
          'Performance Testing',
          'Usability Testing',
          'Component based designs',
          'Code Reviews',
          // Add other items here
        ],
        lastheading: 'Uplift your excellence with distinctive quality assurance prowess!',
        images: {
          bg: qaBg,
          laptop: qaLaptop,
          Vuelogo: qaVuelogo,
          react: qaReact,
          angular: qaAngular,
          wordpress: qaWordpress,
          tailwind: qaTailwind,
          bootstrap: qaBootstrap,
        }
      },
      cloudservices  : {
        title: 'Network Solutions',
        description: 'Cloud Solutions for Today Digital Era',
        items: [
          'AWS Services',
          'Microsoft Azure Services',
          'SAAS Services',
          'PAAS Services',
          'IAAS Services',
          'Load Balancing',
          'Proxy Servers',
          'SSL/TLS Encryption',
          'IPv4 and IPv6 Addressing',
          'Routing and Switching',
          'Subnetting'
          // Add other items here
        ],
        lastheading: 'Revitalize your business with cutting-edge networking strategies!',
        images: {
          bg: networkBg,
          laptop: networkLaptop,
          Vuelogo: networkVuelogo,
          react: networkReact,
          angular: networkAngular,
          wordpress: networkWordpress,
          tailwind: networkTailwind,
          bootstrap: networkBootstrap,
          ma: networkdo,
        }
      },
      microdynamics  : {
        title: 'Microsoft Dynamics',
        description: 'Integrated dynamic solution with comprehensive services.',
        items: [
          'Data Migration',
          'Project Management',
          'Application Integration',
          'Customization and Development',
          'Reporting and Analytics',
          'Performance Optimization',
          'Support',
          'General Ledger Management',
          'Account Receivable Management',
          'Financial Reporting',
          'Bank Reconciliation'
          // Add other items here
        ],
        lastheading: 'Boost your business with our progressive services!',
        images: {
          bg: dynamicsBg,
          laptop: dynamicsLaptop,
          Vuelogo: dynamicsVuelogo,
          react: dynamicsReact,
          angular: dynamicsAngular,
          wordpress: dynamicsWordpress,
          tailwind: dynamicsTailwind,
          bootstrap: dynamicsBootstrap,
        }
      },
      
    // Add more services as needed
  };
  let Vuelogo = '';
try {
  Vuelogo = require('@/assets/images/backendImages/vstuuio.webp');
} catch (e) {
  console.error('Image not found:', e);
  Vuelogo = '~/assets/images/backendImages/phpstorm.webp'; // Set a default image here
}

  