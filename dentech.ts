import { DateTime } from 'luxon'
import { ISeedTenant } from '@/lib/types/tenant-script'
import { EAccountRole, EMediaType, ESocialPlatform } from '@/lib/types/enums'
import { domainToUrl } from '@/lib/utils/utils'

const domain = 'dentech.com'

export const dentech: ISeedTenant = {
  tenant: {
    name: 'Dentech',
    legalName: 'Dentech',
    slogan: 'Transform Your Dental Practice Management Software With Dentech',
    founder: 'Jane Kaminski',
    type: 'Organization',
    languages: ['English'],
    areaServed: ['us'],
    description:
      'Experience Dentech, the revolutionary dental practice management software that has been trusted by professionals for over four decades.',
    foundingDate: DateTime.fromObject({
      year: 1978,
      month: 1,
      day: 1,
    }).toJSDate(),
    domain: domain,
    email: 'support@dentech.com',
    phone: '(800) 233-4998',
    keywords:
      'Dental Practice Management Software, Dentech, Patient Check-In Solutions, Voice-Activated Dental Charting, Document Management for Dental Practices, Patient Communication Tools, Digital Imaging in Dentistry, Dental Eservices, Managed Services for Dental Practices, Dental Hardware Solutions, Dental Software, Practice Management for Dentists'.split(
        ', '
      ),
    logo: `logo.webp`,
    servicesName: 'Features',
    servicesSlug: 'features',
    footerDescription: `Dentech’s cutting-edge, efficient solutions are designed to speed up your practice. Our platform streamlines all aspects of practice management, from appointment scheduling to billing, into one seamless process. With Dentech, you’ll spend less time on administrative tasks and more time providing exceptional care to your patients.`,
    disclaimer: '',
    fonts: [
      'https://fonts.googleapis.com/css2?family=Marcellus&family=Poppins:wght@400;600&display=swap',
    ],
    calendlyUrl: 'https://calendly.com/jane-kaminski/dentech-nextgen-demo',
    googleTagManagerId: 'GTM-N9TJ4QR',
    features: [
      {
        title: 'Our History',
        desc: 'Over four decades ago, our founder Raymond F. Kaminski saw the growing need for innovation in dental practice management software. He was committed to making his vision a reality—a world in which computer technology and dentistry functioned seamlessly, improving the lives of doctors and patients alike.',
        icon: 'mission.svg',
      },
      {
        title: 'Our Values',
        desc: 'More and more we see the importance of staying customer centric, value focused. At Dentech, each member of our team embodies certain traits that ensure your software is made with the same care you have for your patients.',
        icon: 'people.svg',
      },
      {
        title: 'Our Vision',
        desc: 'We will stay committed to servicing our customers and the dental industry with the care and concern that we are known for while staying on the cutting edge of technology.',
        icon: 'vision.svg',
      },
    ],
    theme: {
      fontSize: {
        xs: { fontSize: '0.75rem', lineHeight: '1rem' },
        sm: { fontSize: '0.875rem', lineHeight: '1.5rem' },
        base: { fontSize: '1rem', lineHeight: '1.75rem' },
        lg: { fontSize: '1.125rem', lineHeight: '2rem' },
        xl: { fontSize: '1.25rem', lineHeight: '2rem' },
        '2xl': { fontSize: '1.5rem', lineHeight: '2rem' },
        '3xl': { fontSize: '2rem', lineHeight: '2.5rem' },
        '4xl': { fontSize: '2.5rem', lineHeight: '3.5rem' },
        '5xl': { fontSize: '3rem', lineHeight: '3.5rem' },
        '6xl': { fontSize: '3.75rem', lineHeight: '1' },
        '7xl': { fontSize: '4.5rem', lineHeight: '1.1' },
        '8xl': { fontSize: '6rem', lineHeight: '1' },
        '9xl': { fontSize: '8rem', lineHeight: '1' },
      },
      extend: {
        borderRadius: {
          '4xl': '2rem',
        },
        fontFamily: {
          sans: ['Poppins'],
          display: ['Poppins'],
        },
        maxWidth: {
          '2xl': '40rem',
        },
        colors: {
          accent: {
            base: '133, 196, 64',
            '100': '240, 246, 238',
            '200': '216, 232, 212',
            '500': '119, 176, 57',
            '600': '53, 88, 52',
            '800': '17, 39, 11',
          },
          primary: {
            base: '37, 53, 108',
            '100': '242, 245, 255',
            '200': '180, 197, 229',
            '800': '29, 41, 79',
            '900': '22, 31, 59',
          },
        },
      },
    },
  },
  peopleAndAccounts: [
    {
      person: {
        firstName: 'Jane',
        middleName: 'E.',
        surname: 'Kaminski',
        title: 'Chief Operating Officer',
        bio: `Today, under the helm of his daughter, Jane Kaminski, Dentech continues to provide technology-leading solutions for dental practice management software. With Dentech 2.0, Jane brings the next leap forward introducing not only next-gen technology, but also challenging the status quo as a female software business leader.

"With over 40 years of service to our customers and the dental industry as a whole we are excited for what lies ahead for us as a company, for our customers and the entire dental industry. It is my goal to not only continue the legacy that my father has built, but to also leverage modern day technology so that we can continue to provide world class solutions for our customers. We will stay committed to servicing our customers and the dental industry with the care and concern that we are known for while staying on the cutting edge of technology. We look forward to the next 40 years and we thank each of our customers who have supported us and helped us build the company and products that we are today.

Thank you.”

– Jane E. Kaminski, CEO`,
        url: `/schedule`,
        type: 'creator',
      },
      account: {
        email: 'admin@dentech.com',
        role: EAccountRole.ADMIN,
        password: '',
      },
    },
    {
      person: {
        firstName: 'Richard',
        surname: 'Williams',
        title: 'Dentist at Williams Dental',
        type: 'client',
      },
    },
    {
      person: {
        firstName: 'Gabriel',
        surname: 'Kurti',
        title: 'Dentist at Happy Smiles Dentistry',
        type: 'client',
      },
    },
    {
      person: {
        firstName: 'Rennee',
        surname: 'Jackson',
        title: 'Dentist of Cole Dental Group',
        type: 'client',
      },
    },
  ],
  socials: [
    {
      platform: ESocialPlatform.LinkedIn,
      url: 'https://www.linkedin.com/company/dentech-pm',
    },
    {
      platform: ESocialPlatform.Facebook,
      url: 'https://www.facebook.com/dentechsoftware',
    },
    {
      platform: ESocialPlatform.Instagram,
      url: 'https://www.instagram.com/dentech_dental_software',
    },
    {
      platform: ESocialPlatform.YouTube,
      url: 'https://www.youtube.com/channel/UCXwTt7Ut9QW9Je1CzOKrlXw',
    },
  ],
  serviceArea: {
    name: 'United States',
    region: 'MI',
    locality: 'Farmington Hills',
    lat: '42.5019851',
    lng: '-83.3626884',
  },
  services: [
    {
      order: 1,
      name: 'Practice Management',
      thumbnailFileName: 'practice-management.webp',
      summary: 'Dental Practice Management Software Done Right',
      content: `
       Our system offers advanced financial and patient reports, all conveniently housed in one place. With our easy insurance processing features, managing your patients' insurance claims becomes a breeze.
       
       The appointment scheduler is designed to make planning your day completely effortless. Our integrated employee time clock also provides extensive reports, making payroll and accounting tasks smoother than ever.
       
       Prioritize your practice's security with features like user logs, write-off limits, and more. Experience the convenience with our one-click access to scheduling, insurance verification, and so much more!
       
       SYSTEM REQUIREMENTS: [download pdf](/docs/Dentech-System-Requirements-2024.pdf)`,
      itemType: 'SoftwareApplication',
      slug: 'practice-management',
      media: [
        { type: EMediaType.IMAGE, name: 'practice-management.webp' },
        { type: EMediaType.IMAGE, name: 'practice-management-1.webp' },
        { type: EMediaType.IMAGE, name: 'practice-management-2.webp' },
        { type: EMediaType.IMAGE, name: 'practice-management-3.webp' },
        { type: EMediaType.IMAGE, name: 'practice-management-4.webp' },
        { type: EMediaType.IMAGE, name: 'practice-management-5.webp' },
      ],
      seoMeta: {
        title: 'Dentech - Dental Practice Management',
        desc: 'Dental practice management software done right, from advanced financial &amp; patient reports to easy insurance processing features.',
      },
      description:
        'Elevate your dental practice with Dentech NextGen, offering intuitive features from one-click patient information access to advanced reporting. Streamline appointments, treatment planning, and insurance processing while ensuring data security and compliance.',
        features: [
          {
            title: 'Quick Phone Inquiry',
            description:
              'With one click, view patient information, history, and insurance, and more.',
            img: 'inquiry.webp',
            icon: 'PhoneIcon', 
          },
          {
            title: 'Appointment Scheduler',
            description: 'Streamline your day and increase your efficiency.',
            img: 'scheduler.webp',
            icon: 'CalendarIcon', 
          },
          {
            title: 'Treatment Planning',
            description:
              'An effective tool for presenting proposed treatments to patients.',
            img: 'planning.webp',
            icon: 'ClipboardDocumentCheckIcon', 
          },
          {
            title: 'Insurance Processing',
            description:
              'Streamline insurance exceptions and fee schedules and get rid of unnecessary manual tracking.',
            img: 'insuranceprocessing.webp',
            icon: 'CurrencyDollarIcon', 
          },
          {
            title: 'Advanced Reporting',
            description:
              'An extensive range of different reports for the benefit of your practice.',
            img: 'reporting.webp',
            icon: 'ChartBarSquareIcon', 
          },
          {
            title: 'And More',
            description:
              'Track activity on your system for each employee carrying out work with trackable HIPPA logs. Keep track of employees’ working hours and create reports of each employee’s hours with Time Clock. Easily add notes to every patient file with Clinical Notes.',
            img: 'andmore.webp',
            icon: 'CogIcon', 
          },
        ],  
    },
    {
      order: 2,
      name: 'Voice-Activated Charting',
      summary: 'Hassle-Free Perio and Restorative Charting',
      slug: 'voice-activated-charting',
      thumbnailFileName: 'voice-activated-charting.webp',
      content: `
        **Make Clinical Charting A Breeze**  
        DenChart is our patented voice-activated charting software, allowing you to chart patient exams swiftly—in as little as 5 minutes—all conveniently housed in one place.

        **One-click Tooth Review**  
        Click on a tooth and instantly access its history, including previous conditions and treatments, all in one place.

        **Auto-Compare Chart History**  
        Our patented feature provides immediate insights into teeth health changes by simply hovering over a tooth.

        **Voice Triplets Commands™**  
        Speak measurements with Triplet Commands to record pocket depths quickly and accurately without interruption.

        **Exam Focus Window™**  
        View a magnified tooth display from 6ft away, ideal for charting perio or restorative conditions, with versatile viewing options.

        **Auto Advance/Resume**  
        Automatically move to the next tooth for charting, with the ability to pause for detailed conditions and resume seamlessly.

        **Patented Feedback Control**  
        Enhance voice-activated precision with adjustable feedback speed, minimizing data entry errors.

        **Flip Command**  
        Easily switch views between lingual and facial sides of a tooth with a simple voice command.

        **Zooming and Panning**  
        Exclusive Dentech feature for detailed zooming and panning within the exam focus window.
        
        SYSTEM REQUIREMENTS: [download pdf](/docs/Dentech-System-Requirements-2024.pdf)`,
      itemType: 'SoftwareApplication',
      media: [
        { type: EMediaType.IMAGE, name: 'voice-activated-charting.webp' },
        { type: EMediaType.IMAGE, name: 'voice-graphics-1.webp' },
        { type: EMediaType.IMAGE, name: 'voice-graphics-2.webp' },
        { type: EMediaType.IMAGE, name: 'voice-graphics-3.webp' },
        { type: EMediaType.IMAGE, name: 'voice-graphics-4.webp' },
        { type: EMediaType.IMAGE, name: 'voice-graphics-5.webp' },
        {
          name: `Discover Dentech's Voice Activated Periodontal Charting`,
          type: EMediaType.VIDEO,
          url: 'https://www.youtube.com/embed/M37USYgy9Ac',
        },
        {
          name: `Precision at a Glance Dentech's Innovative Approach to Restorative Charting`,
          type: EMediaType.VIDEO,
          url: 'https://www.youtube.com/embed/02nyPb1jtxE',
        },
      ],
      seoMeta: {
        title:
          'Dentech - Voice Activated Charting : Make Clinical Charting A Breeze',
        desc: `Everything you need to chart patient exams in as little as 5 minutes, all in one place thanks to Dentech's voice activated charting. `,
      },
      description:
        'DenChart is Dentech’s patented voice-activated charting software. Everything you need to chart patient exams in as little as 5 minutes, all in one place.',
      features: [
        {
          title:
            'Chart Pre-Existing Conditionals and Treatment Plans (Patented)',
          description:
            'Keep track of treatment proposals and completed work. You can also select defaults for various treatments, either manually or by voice. For example, whenever a crown is charted you can have “gold” automatically selected and change if needed.',
          img: 'preexisting.webp',
          icon: 'ClipboardDocumentCheckIcon', // Suitable for tracking and charting
        },
        {
          title: 'Treatment and Insurance Plans (Patented)',
          description:
            'See which teeth have proposed treatments or scheduled procedures. Treatment Plan View helps your patients understand out-of-pocket vs. insurance costs for each potential treatment. Plus, you can switch to “teeth view” to show patients tooth image graphics, allowing you to further illustrate treatment options.',
          img: 'plans.webp',
          icon: 'CurrencyDollarIcon', // Suitable for insurance and cost-related features
        },
        {
          title: 'Integrated Digital Imaging',
          description:
            'Our clinical charting allows you to load images from Apteryx right into the software. You get one-click access to everything instead of jumping around multiple program windows.',
          img: 'digitalimaging.webp',
          icon: 'PhotoIcon', // Suitable for digital imaging and pictures
        },
        {
          title: 'Other Reasons To Love Our Charting',
          description:
            "Dentech's dental charting system offers a one-click tooth review, an Auto-Compare feature for instant health insights, and efficient Voice Triplets Commands™ for measurement. Its Exam Focus Window™, Auto Advance/Resume functionality, and patented Feedback Control ensure precise and user-friendly charting. Additionally, Flip Command and exclusive Zooming and Panning features enhance the examination process, streamlining dental charting significantly.",
          img: 'other.webp',
          icon: 'HeartIcon', // Suitable for general benefits and reasons to love the feature
        },
      ],
    },
    {
      order: 3,
      name: 'Document Management',
      summary: 'Organize your patient documents',
      slug: 'document-management',
      itemType: 'SoftwareApplication',
      media: [
        { type: EMediaType.IMAGE, name: 'document-management.webp' },
        { type: EMediaType.IMAGE, name: 'dendox-graphics-1.webp' },
        { type: EMediaType.IMAGE, name: 'dendox-graphics-2.webp' },
        { type: EMediaType.IMAGE, name: 'dendox-graphics-3.webp' },
        { type: EMediaType.IMAGE, name: 'dendox-graphics-4.webp' },
        { type: EMediaType.IMAGE, name: 'dendox-graphics-5.webp' },
      ],
      seoMeta: {
        title: 'Dentech - Document Management : Manage documents seamlessly',
        desc: `Dentech's document management helps rapidly upload, create, and search patient documents. From drag-and-drop uploads to automatic audits, Dentech is your first step towards a paperless office.`,
      },
      thumbnailFileName: 'document-management.webp',
      content: `Never lose a document again. Using DenDox as your document management tool propels your practice far beyond the realm of merely going paperless. Thousands of practices trust DenDox to efficiently produce and access patient records, all the while minimizing the risks and regulatory challenges associated with misplaced paper files.
        
        Simplify your workflow with our Drag-and-Drop Upload feature—there's no need for window-switching or extra prompts.
        
        Benefit from our Automatic Audits and keep a watchful eye on every document alteration. Furthermore, with our Secure Encryption, you can ensure utmost patient privacy and remain in full compliance with HIPAA regulations.
        
        SYSTEM REQUIREMENTS: [download pdf](/docs/Dentech-System-Requirements-2024.pdf)`,
      description:
        'Never lose a document again. Using DenDox as your document management tool propels your practice far beyond the realm of merely going paperless. Thousands of practices trust DenDox to efficiently produce and access patient records, all the while minimizing the risks and regulatory challenges associated with misplaced paper files.',
      features: [
        {
          title: 'Enjoy The Benefits Of A Paperless Office',
          description:
            'Practice owners, dental assistants, hygienists, receptionists — anyone who needs to quickly access or update patient records can do so in seconds. Streamlining work and centralizing updates. Freeing up more time for patient care.',
          img: 'paperless.webp',
          icon: 'DocumentTextIcon',
        },
        {
          title: 'An Easy Way For Patients To Sign Documents',
          description:
            'Treatment consent forms, insurance confirmations, new patient intake forms–all this and more can be digitally signed and stored inside DenDox.',
          img: 'sign.webp',
          icon: 'PencilSquareIcon',
        },
        {
          title: 'Everything You Need, At Your Fingertips',
          description:
            'Medical histories, Explanation of Benefits (EOBs), questionnaires, past communications, patient’s clinical charts, the list goes on. Files can be securely created and managed from anywhere (PC, Tablet, Mobile, and more).',
          img: 'fingertips.webp',
          icon: 'ClipboardDocumentListIcon',
        },
        {
          title: 'Quickly Access Patient Files',
          description:
            'Regardless what information a patient can provide over the phone or during an appointment, finding files is a breeze. You or your staff can search by patient name, patient ID, social security number, DOB, phone number, and more.',
          img: 'files.webp',
          icon: 'FolderOpenIcon',
        },
      ],
    },
    {
      order: 4,
      name: 'Patient Check-In',
      summary: 'Patient Check-In Kiosk and Monitor System',
      slug: 'patient-check-in',
      itemType: 'SoftwareApplication',
      thumbnailFileName: 'patient-check-in.webp',
      media: [
        { type: EMediaType.IMAGE, name: 'patient-check-in.webp' },
        { type: EMediaType.IMAGE, name: 'check-in-graphics-1.webp' },
        { type: EMediaType.IMAGE, name: 'check-in-graphics-2.webp' },
        { type: EMediaType.IMAGE, name: 'check-in-graphics-3.webp' },
        { type: EMediaType.IMAGE, name: 'check-in-graphics-4.webp' },
        { type: EMediaType.IMAGE, name: 'check-in-graphics-5.webp' },
        { type: EMediaType.IMAGE, name: 'check-in-graphics-6.webp' },
        {
          type: EMediaType.VIDEO,
          name: 'Superior Patient Check-In With Dentech NextGen',
          url: 'https://www.youtube.com/embed/0lxkAqjgMr8',
        },
      ],
      seoMeta: {
        title: 'Dentech - Patient Check-In : The fast and contact-free way',
        desc: `Streamline dental practice patient check-ins digitally through Dentech's digital patient check-in kiosk. Promote privacy for patients.`,
      },
      content: `The fast and contact-free way to streamline your dental practice's patient check-ins.
        
        See check-in status and start treatments even if reception’s busy. Replace a busy front desk with self check-ins.
        
        Automatically keep patient info and appointment statuses updated.
        
        SYSTEM REQUIREMENTS: [download pdf](/docs/Dentech-System-Requirements-2024.pdf)`,
      description:
        'The Fast And Contact-Free Way To Streamline Your Dental Practice’s Patient Check-Ins. Replace a busy front desk with self check-ins, automatically keep patient info and appointment statuses updated, and see check-in status to start treatments even if reception’s busy.',
      features: [
        {
          title: 'Our ‘Check Me In’ Kiosk',
          description:
            'Enable patients to check in using their appointment list, the last four digits of their SSN, or phone number. Our system simplifies updates with customized intake forms and automatically generates care forms upon self check-in, streamlining the process.',
          img: 'kiosk.webp',
          icon: 'DeviceTabletIcon',
        },
        {
          title: 'Our ‘Check Me In’ Appointment Monitor',
          description:
            'Effortlessly monitor patient check-ins and appointment progress, add important notes in seconds, and manage patient care with one-click form printing.',
          img: 'monitor.webp',
          icon: 'ClipboardDocumentCheckIcon',
        },
        {
          title: 'Alexa, Show Me My Appointments',
          description:
            'Use Alexa for quick patient info and appointment updates, on-demand form printing, and more - like an extra receptionist without the added cost.',
          img: 'alexa.webp',
          icon: 'MicrophoneIcon',
        },
      ],
    },
    {
      order: 5,
      name: 'Patient Communication',
      summary: 'Integrated Patient Communication Solution',
      slug: 'patient-communication',
      itemType: 'SoftwareApplication',
      thumbnailFileName: 'patient-communication.webp',
      media: [
        { type: EMediaType.IMAGE, name: 'patient-communication.webp' },
        { type: EMediaType.IMAGE, name: 'communicator-graphics-1.webp' },
        { type: EMediaType.IMAGE, name: 'communicator-graphics-2.webp' },
        { type: EMediaType.IMAGE, name: 'communicator-graphics-3.webp' },
        { type: EMediaType.IMAGE, name: 'communicator-graphics-4.webp' },
        { type: EMediaType.IMAGE, name: 'communicator-graphics-5.webp' },
      ],
      seoMeta: {
        title:
          'Dentech - Patient Communication : The #1 way to keep patients on-time',
        desc: `From appointment reminders to pre-op info in order to soothe cancellation-causing concerns, Dentech's patient communication tools save costs.`,
      },
      content: `Welcome to the number one way to keep dental patients engaged and on time
        
        nReduce no-shows up to 50% with automated reminders. Receive confirmed bookings via your scheduler in real-time.
        
        Increase revenue with built-in SMS and email marketing.
        
        SYSTEM REQUIREMENTS: [download pdf](/docs/Dentech-System-Requirements-2024.pdf)`,
      description:
        'Keep your chairs filled with automated SMS and email updates with Dentech Communicator which enables better patient communication. Appointment reminders, pre-op info to soothe cancellation-causing concerns, marketing tools, and more.',
      features: [
        {
          title: 'Automated SMS And Email Reminders',
          description:
            'Studies show at least 50% of no-shows are because patients forget their appointment day has arrived. With Dentech Communicator, automated SMS and email reminders ensure your chairs stay filled each day.',
          img: 'reminders.webp',
          icon: 'ChatBubbleOvalLeftEllipsisIcon',
        },
        {
          title: 'Enhanced Patient Scheduling Flexibility',
          description:
            'Instead of feeling limited to one appointment time, patients can see a list of available times based on their criteria. This flexibility makes it more likely their schedule will stay compatible with the time and date they choose.',
          img: 'flexibility.webp',
          icon: 'AdjustmentsHorizontalIcon',
        },
        {
          title: 'Automatic Pre-Op Instructions',
          description:
            'Combats no-shows by automatically sending pre-op and post-op instructions. Additionally, TRUE 2-way allows patients to discuss any care concerns right from their mobile phone. These features ensure patients are well-informed and can easily communicate, encouraging appointment follow-through.',
          img: 'instructions.webp',
          icon: 'ChatBubbleOvalLeftIcon',
        },
      ],
    },
    {
      order: 6,
      name: 'Digital Imaging',
      summary: 'Digital sensors, cameras, and software',
      slug: 'digital-imaging',
      itemType: 'SoftwareApplication',
      thumbnailFileName: 'digital-imaging.webp',
      media: [
        { type: EMediaType.IMAGE, name: 'digital-imaging.webp' },
        { type: EMediaType.IMAGE, name: 'digital-imaging-graphics-1.webp' },
        { type: EMediaType.IMAGE, name: 'digital-imaging-graphics-2.webp' },
        { type: EMediaType.IMAGE, name: 'digital-imaging-graphics-3.webp' },
        { type: EMediaType.IMAGE, name: 'digital-imaging-graphics-4.webp' },
        { type: EMediaType.IMAGE, name: 'digital-imaging-graphics-5.webp' },
      ],
      seoMeta: {
        title: 'Dentech - Digital Imaging : A winning imaging combo',
        desc: `Dentech has handpicked the best intraoral dental sensors for all your clinic's imaging needs.Check out our catalog now.From high- res diagnostic tools, to advanced imaging software, Dentech's dental digital imaging has everything you need to streamline diagnoses.`,
      },
      content: `Discover the ultimate dental imaging experience for both your practice and your patients with XDR Radiology. At the core lies XDR’s unparalleled imaging, marrying intuitive design with advanced features, culminating in a profound enhancement of your entire workflow. By integrating XDR imaging software and digital sensors, you ensure expedited imaging and precise diagnoses.
        
        SYSTEM REQUIREMENTS: [download pdf](/docs/Dentech-System-Requirements-2024.pdf)`,
      description:
        'From high-res imaging and dental diagnostic tools, to advanced digital imaging software. Dentech has everything you need to streamline diagnoses and educate patients.',
      features: [
        {
          title: 'Dental Sensors',
          description:
            'The XDR Anatomic Intraoral Sensor stands out as the top choice for dental imaging, offering high-definition images with superior comfort and durability. It excels in both performance and value, backed by a comprehensive 2-year warranty with no hidden costs.',
          img: 'sensors.webp',
          icon: 'FingerPrintIcon',
        },
        {
          title: 'Dental Cameras',
          description:
            'The Apteryx LED IC100 Intraoral Camera, our top pick, offers an ideal mix of value, performance, and ease of use. Its high-resolution, auto-focus capabilities and plug-and-play setup elevate imaging quality and simplify patient diagnosis and education.',
          img: 'camera.webp',
          icon: 'CameraIcon',
        },
        {
          title: 'Seamless Integration',
          description:
            "Dentech's software seamlessly integrates with a wide range of digital imaging software, streamlining your workflow and allowing you to concentrate on patient care. Compatible with leading brands like Apteryx, Carestream, CLINIVIEW™, DentalEye, DEXIS, DICOM, Dolphin, Gendex, PatientGallery®, Schick, Sidexis, Sens-a-ray, SOPRO, TigerView, and many others.",
          img: 'integration.webp',
          icon: 'PuzzlePieceIcon',
        },
      ],
    },
    {
      order: 7,
      name: 'Eservices',
      summary: 'Simplify And Scale Your Dental Practice',
      slug: 'eservices',
      thumbnailFileName: 'eservices.webp',
      itemType: 'SoftwareApplication',
      media: [
        { type: EMediaType.IMAGE, name: 'eservices.webp' },
        { type: EMediaType.IMAGE, name: 'eservices-graphics-1.webp' },
        { type: EMediaType.IMAGE, name: 'eservices-graphics-2.webp' },
        { type: EMediaType.IMAGE, name: 'eservices-graphics-3.webp' },
        { type: EMediaType.IMAGE, name: 'eservices-graphics-4.webp' },
        { type: EMediaType.IMAGE, name: 'eservices-graphics-5.webp' },
      ],
      seoMeta: {
        title: 'A more profitable dental practice workflow',
        desc: `From digital claims processing, to e-statements, and even to online patient prescription management, our eServices simplify dental practice.`,
      },
      content: `Doing more in your practice in less time doesn’t have to mean spending all day racing the clock or spending as little time as possible with each patient. It goes without saying that when you improve your efficiency, you improve production and your dental practice’s profits. Plus, it can help you manage one of the biggest problems that plague dentists: high overhead costs.
        
        Dentech helps you work faster and lighten your load by offering a suite of eServices (listed below) to streamline key parts of your work.
        
        SYSTEM REQUIREMENTS: [download pdf](/docs/Dentech-System-Requirements-2024.pdf)`,
      description:
        'Lighten your workload with our eServices: digital claims processing, e-statements, online patient prescription management, and more.',
      features: [
        {
          title: 'eClaims – Electronic Claims Processing for Dentists',
          description:
            'Streamline claim processing by minimizing errors and the risk of rejections to speed up approvals. Verify essential information upfront, reduce the time spent on each claim, and ensure submissions are accurate and rejection-free.',
          img: 'eClaims.webp',
          icon: 'DocumentCheckIcon',
        },
        {
          title:
            'eStatements - Go Paperless And Reduce Printing And Mailing Costs',
          description:
            'eStatements ensures faster delivery of statements to patients at reduced costs, removes the need for mailing materials and inventory, and frees you from last-minute statement preparation and mailing.',
          img: 'eStatements.webp',
          icon: 'DocumentTextIcon',
        },
        {
          title: 'DenScript™ - Manage Patients’ Prescriptions Online',
          description:
            'Simplify prescription management for dentists through a single online platform accessible from any device. Secure one-click e-prescriptions, quick checks for medication conflicts, and easy storage and retrieval of prescription histories, all backed by secure cloud-based technology.',
          img: 'DenScript.webp',
          icon: 'ClipboardDocumentCheckIcon',
        },
        {
          title: 'FastAttach® - Send Info And Get Paid Faster',
          description:
            'Revolutionize the way you handle records and images by enabling the sending and receiving of crucial documents in minutes. Accelerate your revenue cycle with easy transmission of x-rays, perio charts, EOBs, and pre-treatment estimates.',
          img: 'FastAttach.webp',
          icon: 'PaperAirplaneIcon',
        },
      ],
    },
    {
      order: 8,
      name: 'Managed Services',
      summary: 'Dental IT Security Services Managed For You',
      slug: 'managed-services',
      thumbnailFileName: 'managed-services.webp',
      itemType: 'SoftwareApplication',
      media: [
        { type: EMediaType.IMAGE, name: 'managed-services.webp' },
        { type: EMediaType.IMAGE, name: 'managed-services-graphics-1.webp' },
        { type: EMediaType.IMAGE, name: 'managed-services-graphics-2.webp' },
        { type: EMediaType.IMAGE, name: 'managed-services-graphics-3.webp' },
        { type: EMediaType.IMAGE, name: 'managed-services-graphics-4.webp' },
        { type: EMediaType.IMAGE, name: 'managed-services-graphics-5.webp' },
      ],
      seoMeta: {
        title:
          'Dentech - Managed Services : From cloud backups to antivirus updates.',
        desc: 'To stay secure no matter what, Dentech updates antiviruses, secures your servers and networks, and even stores data through cloud backups.',
      },
      content: `Your Practice’s Data And Security Are More Important Than Ever. Businesses that hold patient health information (including dental practices) are often a major target for cybersecurity threats. Even small practices are often targets because many hackers see them as low-hanging fruit, less likely to have the time and resources to stay protected. Beyond this, you never know when your data and hardware will be vulnerable to a physical threat such as fire, inclement weather, or even theft.
        
        That’s why our team at Dentech offers a wide variety of managed services mentioned below. While you focus on serving patients, we can do all the heavy lifting to keep your dental practice’s network secure, safeguard your data, and help you remain HIPAA compliant.
        
        SYSTEM REQUIREMENTS: [download pdf](/docs/Dentech-System-Requirements-2024.pdf)`,
      description:
        'Your Practice’s Data And Security Are More Important Than Ever. Businesses that hold patient health information (including dental practices) are often a major target for cybersecurity threats. Even small practices are often targets because many hackers see them as low-hanging fruit, less likely to have the time and resources to stay protected. Beyond this, you never know when your data and hardware will be vulnerable to a physical threat such as fire, inclement weather, or even theft.',
      features: [
        {
          title: 'DenCloud™ - Never Lose Important Data Again',
          description:
            "DenCloud offers a secure and cost-effective solution for your dental practice's data storage and backup, protecting against device failure, malware, and natural disasters with offsite storage and cloud access from any device. Daily email backup status reports and robust tech safeguards ensure compliance and prevent costly HIPAA violations.",
          img: 'dencloud.webp',
          icon: 'CloudIcon',
        },
        {
          title: 'Firewall Management and Antivirus Monitoring',
          description:
            "Dentech's Firewall Management system provides real-time protection for dental practices, stopping threats and offering weekly network health reports, traffic monitoring, website filtering, and automatic antivirus updates, all under warranty. Additionally, Dentech's Antivirus Monitoring updates protections automatically, notifies you of new threats, and shields against ransomware and other cyber threats, ensuring peace of mind without needing technical expertise.",
          img: 'firewall.webp',
          icon: 'ShieldCheckIcon',
        },
        {
          title: 'Service & Network IT Services For Dental Practices',
          description:
            "With Dentech's proactive monitoring, anticipate and resolve tech issues before they impact your practice, covering servers, switches, and the internet, while providing weekly reports and monitoring critical events, backups, and connection health. Avoid costly downtime that can lead to significant sales and productivity losses annually.",
          img: 'itservices.webp',
          icon: 'ServerStackIcon',
        },
        {
          title: 'Automatic Server and Computer Patch Management',
          description:
            "Dentech's Patch Management ensures your dental practice's servers and workstations are always updated with the latest security patches, protecting against vulnerabilities and giving you control over updates. Stay focused on your practice, not IT maintenance, and prevent common security issues that lead to breaches.",
          img: 'server.webp',
          icon: 'Cog6ToothIcon',
        },
      ],
    },
    {
      order: 9,
      name: 'Hardware Solutions',
      summary: 'The Latest In Dental Equipment',
      slug: 'hardware-solutions',
      thumbnailFileName: 'hardware-solutions.webp',
      itemType: 'SoftwareApplication',
      media: [
        { type: EMediaType.IMAGE, name: 'hardware-solutions.webp' },
        { type: EMediaType.IMAGE, name: 'managed-services-graphics-6.webp' },
      ],
      seoMeta: {
        title: 'Hardware Solutions - Dentech',
        desc: `On top of best-selling dental practice software like our Practice Management System, Dentech also gives you access to all the latest dental hardware for running your practice, from sensors to monitors.`,
      },
      content: `On top of best-selling dental practice software like our Practice Management System, Dentech also gives you access to all the latest dental hardware for running your practice.
        
        Whether you’re opening a new practice or looking to update your existing hardware to the best available, our expert staff can guide you toward the right solutions for you and your business.
        
        SYSTEM REQUIREMENTS: [download pdf](/docs/Dentech-System-Requirements-2024.pdf)`,
      description:
        'Whether you’re opening a new practice or looking to update your existing hardware to the best available, our expert staff can guide you toward the right solutions for you and your business.',
      features: [
        {
          title: 'Our Catalogue',
          description:
            "Explore our comprehensive catalog featuring a diverse range of dental practice essentials designed to enhance your clinic's efficiency. Our selection includes cutting-edge intraoral cameras and digital sensors for detailed imaging, alongside dental practice servers, workstations, and both standard and touch screen monitors tailored for healthcare environments. We also provide essential office hardware such as laptops, tablets, scanners, printers, label printers, and UPS battery backups, ensuring your practice is equipped for every need. For network security and management, choose from our robust firewalls, network switches, and network attached storage devices, complemented by an array of dental practice accessories to complete your setup.",
          img: 'catalogue.webp',
          icon: 'RectangleGroupIcon',
        },
      ],
    },
  ],
  faqs: [
    {
      question:
        'What hardware and internet connectivity is recommended for Dentech NextGen?',
      answer:
        'For optimal performance of Dentech NextGen, please refer to the hardware specifications and internet connectivity guidelines listed on our resource page. It is essential to meet these requirements to ensure the software runs smoothly and efficiently in your dental practice.',
    },
    {
      question: 'What is included when signing up for Dentech NextGen?',
      answer:
        'Our comprehensive service package includes dedicated phone and email support available Monday through Friday, regular updates and enhancements to keep your software up-to-date with the latest features, access to an extensive library of training videos, and the assurance of a robust and efficient software system designed for the modern dental practice.',
    },
    {
      question: 'How do I convert my existing practice to Dentech?',
      answer:
        'With decades of knowledge and vast experience Dentech’s conversion team can assist with any conversion from any software platform. A dedicated team will assist you step by step in the process to ensure that the data you need is both there and accurate to make your transition to Dentech as smooth as possible. Call 800.233.4998 ext. 239 or email info@dentech.com',
    },
    {
      question: 'How is patient data transferred to Dentech NextGen?',
      answer:
        'We make the transition seamless by providing specialized conversion programs designed to import data from competitor software. Our process involves running a trial conversion to ensure data integrity, followed by the final conversion to securely transfer all your patient data to Dentech NextGen.',
    },
    {
      question: 'How can users stay updated on Dentech NextGen features?',
      answer:
        'Stay informed about the latest Dentech NextGen features and updates through our informative newsletter, regularly updated blog, and convenient pop-up displays within the software that highlight recent enhancements and tips for using new functionalities.',
    },
    {
      question: 'What are the system requirements for Dentech?',
      answer:
        'Dentech solutions strongly adhere to compliance with MICROSOFT WINDOWS operating systems and specified hardware requirements herein. The entire Dentech solution suite has been tested and certified using the system requirements described herein. Any deviation may result in unpredictable behavior and/or poor performance.',
    },
    {
      question:
        'I’m currently using Dentech Legacy, how do I switch to NextGen?',
      answer:
        "Transitioning from Dentech Legacy to NextGen is straightforward. Call us today to speak with one of our customer service representatives who will guide you through the process and answer any questions you may have. We're committed to ensuring a smooth upgrade experience for all our clients.",
    },
    {
      question: 'What type of initial training does Dentech provide?',
      answer:
        'We offer personalized 1-on-1 training sessions that can be conducted remotely or on-site, depending on your preference and location. Our goal is to ensure that you and your staff are fully comfortable and proficient in using Dentech NextGen from day one.',
    },
    {
      question: 'Do you offer financing plans?',
      answer:
        'We offer a variety of options that best fit your financial needs. From leasing, financing to payment plans, Dentech has the financial plan that will work with you. For more information or to get in contact with a sales representative who can answer your questions, please email sales@dentech.com or call 800.233.4998 ext. 239.',
    },
  ],
  ctaComponent: {
    cta: 'Schedule A Demo',
    href: '/schedule',
    content: `## Get Started Today\nWe are committed to supporting you in providing the best possible patient care. With Dentech Next-Gen, we have focused on simplifying tasks and enhancing your workflow. It is about making your day easier so you can focus on what matters most. Consider upgrading your practice today, and see the Dentech difference first hand!`,
  },
  heroComponent: {
    content: `# Transform Your Dental Practice Management Software with Dentech\n\n Experience Dentech, the revolutionary dental practice management
            software that has been trusted by professionals for over four
            decades. Offering unparalleled efficiency, a robust feature set, and
            customer-centric service, Dentech is the comprehensive solution
            you’ve been waiting for. With the flexibility of both cloud-based
            and server-based solutions, we are equipped to meet the unique needs
            of your dental practice.
`,
    cta: 'Schedule a Demo',
    ctaLink: '/schedule',
  },
  heroSubComponents: [
    {
      title: 'Thank You!',
      description: [
        'Thank you for requesting a demo of Dentech Next Gen! We are excited to show you how our cutting-edge dental practice management software can revolutionize your practice. In a short while, you will be receiving an email to confirm your email address as well as further details. We cannot wait to help you explore the many ways Dentech can streamline your operations and enhance patient care.',

        'All the best,',

        'The Dentech Team',
      ],
      bgColor: 'primary-100',
      variant: 'thank-you',
    },
    {
      title: 'Our Blog',
      description: [
        'Welcome to the Dentech blog, your go-to source for all things related to our innovative dental software. At Dentech, we are committed to revolutionizing the way dental practices operate, providing you with cutting-edge tools and features that streamline your workflow and enhance patient care. Here on our blog, you will find a wealth of information, tips, and insights to help you make the most of our software. So, whether you are a current Dentech user or just curious about what we have to offer, we invite you to explore our blog and discover how Dentech can Transform Your Dental Practice.*',
      ],
      bgColor: 'primary-100',
      variant: 'blog',
    },
    {
      title: 'Contact Us',
      description: [
        'At Dentech, our customer support is there for you. From hardware to software, and everything in between, every contract comes with unlimited phone call support and quick response email inquiries.',
      ],
      bgColor: 'primary-100',
      variant: 'contact',
    },
    {
      title: 'Resources',
      description: [
        'From our end of year procedures to our financial options and our system requirements, find everything you need to keep your practice running smoothly with Dentech.',
      ],
      bgColor: 'primary-100',
      // @ts-ignore
      variant: 'resources',
    },
    {
      title: 'About Us',
      description: [
        'As the original pioneers in the advancement of dental practice management software and computer technology, customers nationwide have trusted Dentech for over 40 years. Our organization thrives due to our commitment to building lifelong relationships and making customer satisfaction our #1 priority. Through our world-class, innovative dental solutions, Dentech ensures your practice can provide the best patient care imaginable. Our expert team and commitment to quality dental solutions and customer relationships are the heart of Dentech.',
      ],
      bgColor: 'accent-100',
      variant: 'about',
    },
    {
      title: 'Privacy Policy',
      description: [
        'We are committed to protecting your privacy. This privacy statement explains what information we collect from you when you visit our website and how we use that information. We collect personal information that you voluntarily provide to us when you fill out forms on our website or contact us by email. We also collect non-personal information, such as the type of browser you are using and the pages you visit on our website. We use the information we collect to improve the content of our website, respond to inquiries, and provide legal services to clients. We do not share your personal information with third parties unless required by law or as necessary to provide legal services to clients. We may use non-personal information to analyze website traffic and usage patterns. Any discounts offered by our law firm are conditional upon income and may not be available to everyone. By using our website, you consent to the collection and use of information as outlined in this privacy statement.',
      ],
      bgColor: 'primary-100',
      variant: 'privacy',
    },
    {
      title: 'Go To Assist',
      description: [
        'Welcome to the dedicated assistance portal for your Dentech software. Here, you can effortlessly initiate a remote session, allowing our expert support team to join you virtually in addressing any software concerns you may have. To begin, simply input the six-digit session code provided by your Dentech support representative into the field below.',
      ],
      bgColor: 'primary-100',
      //@ts-ignore
      variant: 'go-to-assist',
    },
    {
      title:
        'Refer Dentech NextGen & Earn $100 Off Your Bill – Start Saving Now!',
      description: [
        `At Dentech, we believe in the power of community and the transformative impact of sharing innovative solutions. Our referral program is designed to empower our users to introduce Dentech NextGen to other dental offices, helping them to elevate their practice with our dental management software. By participating, you’re not just offering them a tool; you’re opening the door to better efficiency, patient care, and practice management.`,
      ],
      bgColor: 'primary-100',
      variant: 'affiliate',
    },
  ],
  pagesMetadata: [
    {
      type: 'index',
      title: 'Dentech | Trusted By Dentists For Over 40 Years',
      description:
        'Trusted By Dentists For Over 40 Years: The Original, All-In-One Dental Practice Management Software Family-Owned. User-Guided. Trusted By Thousands of Practices Nationwide.',
    },
    {
      type: 'about',
      title: 'About Dentech: Family-owned, 40 years experience',
      description:
        'As the pioneers in dental practice management software, the most striking thing about Dentech is their innovative dental solutions!',
    },
    {
      type: 'privacy',
      title: 'Privacy Policy',
      description:
        'Welcome to our website. By accessing and using this website, you agree to comply with and be bound by the following terms and conditions of use: The content of this website is for informational purposes only and is subject to change without notice.',
    },
    {
      type: 'services',
      title: 'Dentech - Advanced Dental Practice Management Features',
      description:
        'Unlock the full potential of Dentech with our advanced management features. Dentech’s platform is engineered for efficiency, integrating everything from scheduling and billing to patient engagement into a single, streamlined process. ',
    },
    {
      type: 'blog',
      title:
        'Dentech - Blog: Exploring Dental Practice Management & Innovation',
      description:
        'Welcome to the Dentech blog, your go-to source for all things related to our innovative dental software. Discover how Dentech can transform your dental practice today.',
    },
    {
      type: 'schedule',
      title: 'Request a Demo - Dentech',
      description: `Interested in Dentech's practice management software? Schedule a demo today to see how Dentech can best help you grow your dental practice. In our demo meetings, we will show you the features that increase your bottom line.`,
    },
    {
      type: 'thank-you',
      title: 'Thank you!',
      description:
        'Thank you for requesting a demo of Dentech Next Gen! We are excited to show you how our cutting-edge dental practice management software can revolutionize your practice. In a short while, you will be receiving an email to confirm your email address as well as further details. We cannot wait to help you explore the many ways Dentech can streamline your operations and enhance patient care. All the best, The Dentech Team.',
    },
    {
      //@ts-ignore
      type: 'conference',
      title: 'Conference',
      description:
        "Dentech provides best in class Dental Practice Management Softwware. By completing this form, you consent to recieve promotional materials regarding Dentech's features.",
      keywords:
        'Dentech Next Gen, Contact Dentech, Dentech Info, Contact Jane E. Kaminski, Dental Practice Management'.split(
          ', '
        ),
    },
    {
      //@ts-ignore
      type: 'go-to-assist',
      title: 'Dentech Expert Support | Go To Assist Remote Help',
      description:
        'Our technicians are ready to provide real-time remote support to solve your software issues promptly, ensuring your dental practice operates smoothly. ',
      keywords:
        'Contact Dentech, Dentech Go-To Assist, Contact Jane E. Kaminski, Get Dental Help'.split(
          ', '
        ),
    },
    {
      //@ts-ignore
      type: 'resources',
      title: 'Dentech - Resources : More information about Dentech',
      description:
        'From our end of year procedures to our financial options and our system requirements, find everything you need to keep your practice running smoothly with Dentech.',
      keywords: 'Contact Dentech, Contact Jane E. Kaminski, Resources'.split(
        ', '
      ),
    },
    {
      // @ts-ignore
      type: 'support',
      title: 'Support',
      description:
        'At Dentech, our customer support is there for you. From hardware to software, and everything in between, every contract comes with unlimited phone call support and quick response email inquiries.',
      keywords:
        'Dentech Support, Contact Dentech, Dentech Go-To Assist, Contact Jane E. Kaminski, Get Dental Help'.split(
          ', '
        ),
    },
  ],
  contactRowComponent: {
    title: 'Get in touch',
    description:
      'If you have any questions prior to your consultation, feel free to reach out!',
    cardsContent: [
      `
      ### Contact\n\n
      - Email: [support@dentech.com](mailto:support@dentech.com)
      - General: +1 (800)-233-4998
      - Support: +1 (866)-549-8702
      `,
      `
      ### Customer Support Hours\n\n
      - **Monday - Friday**: [8:30 - 5:00 EST](mailto:support@dentech.com)
      `,
    ],
  },
  privacy: {
    updatedAt: DateTime.fromObject({
      year: 2023,
      month: 12,
      day: 29,
    }).toJSDate(),
    content: `### 1. Definitions.

Softech Inc, collectively known as the host of the website “DENTECH.com” maintained on the World Wide Web by DENTECH. “The site” or “site” refers to DENTECH.com. “User,” or collectively “Users,” refers to any party who accesses the site. “Host” refers to Softech Inc. “Access” means viewing or otherwise obtaining information located on DENTECH.com. “Agreement” refers to these terms of use and any subsequent modification.

### 2. Acceptance of Terms.

By accessing the site via the World Wide Web or any other medium, User accepts and agrees to all conditions imposed in these terms of use. Host reserves the right to modify these terms of use at any time without notice to User, including imposing a fee to access certain materials contained on the site. Any change in these terms of use is effective immediately upon User’s receipt of notice from Host. Notice can be given through e-mail, posting on the site or any other means by which User may obtain notice. Users should periodically check those terms of use for changes. Any use of the site after changes have been made shall be deemed acceptance of those changed terms of use. Host reserves the right to monitor use of the site. Host has the exclusive right to control accessibility, hours of use, features on the site and any other information found on the site. Host can restrict access to any or all portions of the site or remove any information or content from the site at any time. User is solely responsible for providing the equipment related to accessing DENTECH.com including all computer, telephone or other equipment.

### 3. Copyright and Marks.

All contents on the site (with the exception of content provided by Host’s third party content providers) are the copyrighted property of Host. Site contents may not be copied, reproduced, modified, published, uploaded, posted, transmitted, “framed” on another site, or distributed in any way without the prior written consent of Host. Users must retain all copyright and other proprietary notices on any authorized reproductions of any portion of the site. Any third-party marks and content appearing on the site are the property of their respective owners. You are not permitted to use any of these third party marks or content without permission of the respective owner.

### 4. How We Disclose Personal Information

By providing a telephone number and submitting a form on this site, you are consenting to be contacted by SMS text message. Message & data rates may apply. You can reply STOP to opt-out of further messaging. No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. All other categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.

### 5. Prohibited Conduct.

User expressly agrees to refrain from doing, either personally or through an agent, any of the following:

1. Use any device or other means to harvest information about other Users.
2. Transmit, install, upload or otherwise transfer any virus or other item or process to the site that in any way affects the use, enjoyment or service of the site.
3. Transmit, install, upload or otherwise transfer any virus or other item to the site that in any way affects the use, enjoyment or service of any User’s or Host employee’s computer or other medium used to access the site.
4. Post any material on the site that is offensive to any other User. Host maintains the exclusive right to determine what is offensive.
5. Post or store on the site any content that violates or infringes the intellectual property rights of others (including but not limited to copyrights, trademarks, trade secrets, patents and publicity rights).
6. Modify the information, including headers, found on the website.
7. Transmit, install, upload or otherwise transfer to the site any unauthorized advertisement or communication.
8. Engage in any action which Host determines is detrimental to the use and enjoyment of the website.
9. Use the website for any unlawful or defamatory means.
10. Transmit, install, upload, post or otherwise transfer any information in violation of the laws of the United States or post any information that could result in civil unrest.

### 6. Disclaimer and Limitation of Liability.

Although Host has attempted to provide accurate information on the site, it makes no guarantee or warranty, express or implied, as to the reliability, accuracy, timeliness or completeness of that information and assumes no responsibility for any errors or omissions therein. USER ACCESSES THIS SITE AT HIS OR HER OWN RISK. THE SITE IS PROVIDED ON AN “AS IS, AS AVAILABLE” BASIS WITHOUT WARRANTY OF ANY KIND AND ANY AND ALL WARRANTIES OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE OR NON-INFRINGEMENT ARE SPECIFICALLY DISCLAIMED. NEITHER HOST NOR ITS AFFILIATES, EMPLOYEES, AGENTS OR THIRD PARTY CONTENT PROVIDERS SHALL BE LIABLE FOR ANY LOSS RESULTING FROM USE OR UNAVAILABILITY OF INFORMATION OR CONTENT ON THIS SITE, INCLUDING BUT NOT LIMITED TO ANY LOST PROFITS, LOSS OR DAMAGE TO DATA, OR ANY DIRECT, INDIRECT, SPECIAL, CONSEQUENTIAL, COMPENSATORY OR INCIDENTAL DAMAGES, EVEN IF THEY HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. THIS DISCLAIMER IS APPLICABLE TO ANY DAMAGE OR INJURY RESULTING FROM NEGLIGENCE OR OMISSION OF HOST, COMPUTER VIRUS OR OTHER SIMILAR ITEM, TELECOMMUNICATIONS ERRORS, OR UNAUTHORIZED ACCESS TO OR USE OF USER INFORMATION
`,
  },
  navigationItems: [
    {
      title: 'Practice Management',
      slug: 'practice-management',
      href: '/practice-management',
      category: 'services',
      displayOrder: 1,
    },
    {
      title: 'Voice-Activated Charting',
      slug: 'voice-activated-charting',
      href: '/voice-activated-charting',
      category: 'services',
      displayOrder: 2,
    },
    {
      title: 'Document Management',
      slug: 'document-management',
      href: '/document-management',
      category: 'services',
      displayOrder: 3,
    },
    {
      title: 'Patient Check-In',
      slug: 'patient-check-in',
      href: '/patient-check-in',
      category: 'services',
      displayOrder: 4,
    },
    {
      title: 'Patient Communication',
      slug: 'patient-communication',
      href: '/patient-communication',
      category: 'services',
      displayOrder: 5,
    },
    {
      title: 'Digital Imaging',
      slug: 'digital-imaging',
      href: '/digital-imaging',
      category: 'services',
      displayOrder: 6,
    },
    {
      title: 'Eservices',
      slug: 'eservices',
      href: '/eservices',
      category: 'services',
      displayOrder: 7,
    },
    {
      title: 'Managed Services',
      slug: 'managed-services',
      href: '/managed-services',
      category: 'services',
      displayOrder: 8,
    },
    {
      title: 'Hardware Solutions',
      slug: 'hardware-solutions',
      href: '/hardware-solutions',
      category: 'services',
      displayOrder: 9,
    },
    {
      title: 'Schedule Demo',
      slug: 'schedule',
      href: '/schedule',
      category: 'support',
      displayOrder: 1,
    },
    {
      title: 'Support',
      slug: 'support',
      href: '/support',
      category: 'support',
      displayOrder: 2,
    },
    {
      title: 'Go To Assist',
      slug: 'go-to-assist',
      href: '/go-to-assist',
      category: 'support',
      displayOrder: 3,
    },
    {
      category: 'company',
      displayOrder: 1,
      title: 'About',
      href: '/about',
    },
    {
      category: 'company',
      displayOrder: 2,
      title: 'Blog',
      href: '/blog',
    },
    {
      category: 'legal',
      displayOrder: 1,
      title: 'Privacy',
      href: '/policies/privacy',
    },
    {
      title: ESocialPlatform.LinkedIn,
      href: '/',
      category: 'social',
      displayOrder: 1,
    },
    {
      title: ESocialPlatform.Facebook,
      href: '/',
      category: 'social',
      displayOrder: 2,
    },
    {
      title: ESocialPlatform.Instagram,
      href: '/',
      category: 'social',
      displayOrder: 3,
    },
    {
      title: ESocialPlatform.YouTube,
      href: '/',
      category: 'social',
      displayOrder: 4,
    },
  ],
  headerComponent: {
    content: 'Schedule',
  },
  dividerComponent: [
    {
      path: 'M0 0H1920V23.4197C1920 40.325 1907.32 54.2924 1890.45 55.3984C1744.66 64.9576 1103.56 109.281 970.166 157.83C963.441 160.277 956.559 160.277 949.834 157.83C816.436 109.281 175.342 64.9576 29.5456 55.3984C12.6765 54.2924 0 40.325 0 23.4197V0Z',
      color: '#D8E8D4',
      variant: 'about',
    },
    {
      path: 'M0 0H1920V23.4197C1920 40.325 1907.32 54.2924 1890.45 55.3984C1744.66 64.9576 1103.56 109.281 970.166 157.83C963.441 160.277 956.559 160.277 949.834 157.83C816.436 109.281 175.342 64.9576 29.5456 55.3984C12.6765 54.2924 0 40.325 0 23.4197V0Z',
      color: '#F2F5FF',
      variant: 'blog',
    },
    {
      path: 'M0 0H1920V23.4197C1920 40.325 1907.32 54.2924 1890.45 55.3984C1744.66 64.9576 1103.56 109.281 970.166 157.83C963.441 160.277 956.559 160.277 949.834 157.83C816.436 109.281 175.342 64.9576 29.5456 55.3984C12.6765 54.2924 0 40.325 0 23.4197V0Z',
      color: '#F2F5FF',
      variant: 'contact',
    },
    {
      path: 'M0 0H1920V23.4197C1920 40.325 1907.32 54.2924 1890.45 55.3984C1744.66 64.9576 1103.56 109.281 970.166 157.83C963.441 160.277 956.559 160.277 949.834 157.83C816.436 109.281 175.342 64.9576 29.5456 55.3984C12.6765 54.2924 0 40.325 0 23.4197V0Z',
      color: '#F2F5FF',
      variant: 'pricing',
    },
    {
      path: 'M0 0H1920V23.4197C1920 40.325 1907.32 54.2924 1890.45 55.3984C1744.66 64.9576 1103.56 109.281 970.166 157.83C963.441 160.277 956.559 160.277 949.834 157.83C816.436 109.281 175.342 64.9576 29.5456 55.3984C12.6765 54.2924 0 40.325 0 23.4197V0Z',
      color: '#1D294F',
      variant: 'schedule',
    },
    {
      path: 'M0 0H1920V23.4197C1920 40.325 1907.32 54.2924 1890.45 55.3984C1744.66 64.9576 1103.56 109.281 970.166 157.83C963.441 160.277 956.559 160.277 949.834 157.83C816.436 109.281 175.342 64.9576 29.5456 55.3984C12.6765 54.2924 0 40.325 0 23.4197V0Z',
      color: '#F2F5FF',
      variant: 'thank-you',
    },
    {
      path: 'M0 0H1920V23.4197C1920 40.325 1907.32 54.2924 1890.45 55.3984C1744.66 64.9576 1103.56 109.281 970.166 157.83C963.441 160.277 956.559 160.277 949.834 157.83C816.436 109.281 175.342 64.9576 29.5456 55.3984C12.6765 54.2924 0 40.325 0 23.4197V0Z',
      color: '#F2F5FF',
      // @ts-ignore
      variant: 'go-to-assist',
    },
    {
      path: 'M0 0H1920V23.4197C1920 40.325 1907.32 54.2924 1890.45 55.3984C1744.66 64.9576 1103.56 109.281 970.166 157.83C963.441 160.277 956.559 160.277 949.834 157.83C816.436 109.281 175.342 64.9576 29.5456 55.3984C12.6765 54.2924 0 40.325 0 23.4197V0Z',
      color: '#F2F5FF',
      // @ts-ignore
      variant: 'resources',
    },
  ],
  scheduleStructuredData: {
    personName: 'Jane Kaminski',
    description:
      'Your dental practice is unique, and we aim to address your specific challenges and needs. This 30-minute call is an introductory discussion, not a software demo. The purpose of this call is to gain a clear understanding of your requirements. This will enable us to customize a future demo that is perfectly aligned with your needs!',
    name: 'Consultation',
    startDate: DateTime.fromObject({
      year: 2023,
      month: 8,
      day: 10,
    }).toJSDate(),
    startTime: '09:00:00',
    endTime: '16:30:00',
    scheduleTimezone: 'America/New_York',
    repeatFrequency: 'P1D',
    repeatCount: 5,
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
    locationUrl: domainToUrl(domain),
    locationType: 'VirtualLocation',
    imageName: 'logo.webp',

    offers: [
      {
        '@type': 'Offer',
        url: domainToUrl(domain, '/schedule'),
        price: '0',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        validFrom: '2024-10-23T12:00',
      },
    ],
  },
  contactStructuredData: {
    description:
      'At Dentech, our customer support is there for you. From hardware to software, and everything in between, every contract comes with unlimited phone call support and quick response email inquiries.',
    founders: [
      {
        name: 'Jane Kaminski',
        desc: 'Chief Operating Officer',
      },
    ],
    keywords:
      'Contact Dentech, Dentech Support, Dentech Help, Contact Jane Kaminski'.split(
        ', '
      ),
  },
  secondaryServicesComp: {
    content: `## Our Dental Practice Management **Features**\n\nDentech’s cutting-edge, efficient solutions are designed to speed up your practice. Our platform streamlines all aspects of practice management, from appointment scheduling to billing, into one seamless process. With Dentech, you’ll spend less time on administrative tasks and more time providing exceptional care to your patients. We offer features that directly cater to your dental practices every need. Our goal is to help your practice run smoothly so you can provide the best patient care imaginable.`,
  },
  testimonialsComp: {
    content: `## Loved by our **Community**\n
    At Dentech we believe that you shouldn’t have to change the way you practice to match your software. We offer premium dental practice management software that is loved across the United States!.`,
  },
  testimonials: [
    {
      firstname: 'Richard',
      surname: 'Williams',
      content:
        'Dentech has made my life so much easier. My previous practice management software was buggy and was too complex to train employees on. If you’re just starting your dental practice, go with Dentech.',
    },
    {
      firstname: 'Gabriel',
      surname: 'Kurti',
      content:
        'Voice activated charting is so good!! My office staff is so happy to finally have voice charting that works!',
    },
    {
      firstname: 'Rennee',
      surname: 'Jackson',
      content:
        'The Overall software platform ran our office very smoothly. We noticed a huge change almost instantly.',
    },
  ],
  serviceFeaturesComponent: {
    content: `## Everything you need to run your Dental Practice.\n\nWe specialize in creating innovative and user-friendly solutions for dental practices. Explore how our features can streamline dental office operations and enhance your patient care.`,
  },
  videoMedia: [
    {
      type: EMediaType.VIDEO,
      url: 'https://www.youtube.com/embed/AMVUxDvZB7w?si=DUL_Ig1ZU5z7aI_B',
      alt: 'Dentech Practice Management Software - The Next Generation of Dental Software',
      width: 0,
      height: 0,
      videoDesc: `With a modern interface designed to fit your day-to-day processes, Dentech is THE digital assistant that follows your patient’s experience from start to finish without getting in your way. Dentech's Practice Management Software has everything you need to successfully and smoothly run your dental business. From appointment scheduling to treatment planning, you have all the tools you need, just one click away! `,
      videoUploadDate: DateTime.fromObject({
        year: 2022,
        month: 10,
        day: 26,
      }).toJSDate(),
      fileName:
        'Dentech Practice Management Software - The Next Generation of Dental Software',
    },
  ],
  videoFeatures: [
    {
      variant: 'index',
      content: '## What Can Dentech Do For \n\n **You**',
      videoUrl: 'https://www.youtube.com/embed/AMVUxDvZB7w?si=DUL_Ig1ZU5z7aI_B',
      imageNames: ['planning.webp', 'inquiry.webp'],
      features: [
        {
          name: 'Revolutionizing Dental Practice Management For Over 40 Years',
          desc: "Dentech originated from the era of pegboard-based patient appointment tracking in dental practices. Our foundation lies in understanding practice owners' needs and innovatively using technology to address their daily challenges.",
        },
        {
          name: 'White-Glove Service',
          desc: 'We continue that tradition of listening to your needs as a practice owner and provide a level of service that’s in a class of its own, anytime you need us.',
        },
        {
          name: 'Intuitive and User-Friendly Design',
          desc: 'The one-button control has a digital readout for setting temperature and turning the kettle on and off.',
        },
        {
          name: 'Robust Security',
          desc: "Enjoy peace of mind with Dentech's advanced security features, ensuring your practice's data is managed accurately and securely.",
        },
      ],
    },
  ],
  hubspotFormComp: {
    title: 'Dentech Contact Form',
    url: 'https://share.hsforms.com/1bjA3cEpqTHyq3v4EAzFBWg3ei6b',
  },
}
