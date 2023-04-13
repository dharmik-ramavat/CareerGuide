import React from 'react';
import ITIbranch from './ITIbranch.JPG';
import './index2.css'
function Index() {
  const data = [
    {
      "id": 1,
      "Title":"Tool and Die Maker Engineering",
      "tdesc":"This course helps the students in creating gauges, cutting tools, machine tools, molds, dies, fixtures, jigs, and other tools required in the processes of manufacturing. The duration of the course is three years and this course comes under the engineering stream." },
  {
      "id": 2,
      "Title":"Draughtsman (Mechanical) Engineering", 
      "tdesc":"This course helps the students in preparing technical drawings and plans used by production and construction workers to build everything from manufactured products to structures. The duration of the course is two years and this course comes under the engineering stream. This is one of the most popular ITI courses after 10th."
     },
  {
      "id":3,
      "Title":"Diesel Mechanic Engineering",
      "tdesc":"This course helps the students in diagnosing and repairing the mechanical and electrical flaws of diesel vehicles and equipment that operate using diesel. The duration of the course is one year and it comes under the engineering stream."
      },
   {
      "id":4,
      "Title":"Fitter Engineering",
      "tdesc":"The course helps the students in studying blueprints, plans, and drawings to be able to construct, assemble, manufacture and fit parts of the machines. The duration of the course is two years and this course comes under the engineering stream."},
     {
      "id":5,
      "Title":"Motor Driving-cum-Mechanic Engineering",
      "tdesc":"This course helps in the study of driving and repairing of the light motor vehicles in order to ensure constant availability of vehicles for official duties every time. The duration of the course is one year and this course comes under the engineering stream."
     },
   {
      "id":6,
      "Title":"Turner engineering",
      "tdesc":"This course helps the student in the study of manufacturing metal components and assembling them to construct tools, industrial machinery, and machine components. The duration of the course is two years and this course comes under the engineering stream."
     },
   {
      "id":7,
      "Title":"Dress making",
      "tdesc":"This course helps the students in areas related to drafting, cutting, sewing, printing and designing garments. The duration of the course is one year and this course comes under the non-engineering stream. This is again a standard course which is one of the most popular non-engineering ITI courses after 10th."
   },
   {
      "id":8,
      "Title":"Information Technology & E.S.M. Engineering",
      "tdesc":"This course helps the students with introducing, investigating, repairing and keeping up electronic systems and equipment utilized industrial manufacturing with the help of computers. The duration of the course is two years and this course comes under the engineering stream."
     },
   {
      "id":9,
      "Title":"Secretarial Practice",
      "tdesc":"This course is an executive and administrative vocational trade comprising shorthand, typewriting, Secretarial services, general English, business correspondence, general knowledge, current affairs, and other administrative processes. The duration of the course is one year and this course comes under the non-engineering stream."
    },
   {
      "id":10,
      "Title":"Machinist Engineering",
      "tdesc":"This course helps the students in using machine equipment to make or alter parts, essentially metal components, with the procedure known as machining. The duration of the course is one year and this course comes under the engineering stream."
    },
   {
      "id":10,
      "Title":"Mechanical Instrument Engineering",
      "tdesc":"This course helps the students in dyeing and bleaching cotton fabric with a small all-over floral print. The duration of the course is one year and it comes under the non-engineering stream."
     },
   {
      "id":11,
      "Title":"Bleaching and Dyeing Calico Print",
      "tdesc":"This course helps the students with the introduction, troubleshooting and repairing instrumentation professional trade. The duration of the course is two years and it comes under the engineering stream"
    },
   {
      "id":12,
      "Title":"Electrician Engineering",
      "tdesc":"This course helps the students in getting basic but important knowledge about the electrical field. The duration of the course is two years and it comes under the engineering stream." }
  ];

  const item = data.map((item) => (
    <div key={item.id}>
      <div className="subtitle">{item.Title}</div>
      <div className="content">{item.tdesc}</div>
    </div>
  ));


  return (
    <div className='main-container'  style={{paddingTop:"120px"}}>
    <div className='title'>
    What next after 10th
    </div>
    <div className='content'>
    It’s important to assess your interest and aptitude, and match up with the understanding of the requirements of the career. If you choose a stream merely based on your interests and do not possess the right skills and abilities, it may cause a problem in the future. So, to get a better idea for yourself about what is next after 10th, sit and introspect about what are the areas you are naturally good at, and what are those areas that are often hurdles for you. You may also take inputs from parents or teachers.
    </div>
    <div className='title'>
    What next after 10th- Choosing subject/ stream options
    </div>
    <div className='content'>
    A proper understanding and knowledge of the subjects/stream you opt for and the future career options they offer are very important for you to know what is next after 10th class for you. After SSLC what next is choosing from the different streams that are available:
    </div>
    <div className='subtitle'>
    Science (PCM/ PCB)
    </div>
    <div className='content'>
    Science has been the most opted for stream ever since we know, perhaps because of a popular perception that it keeps avenues open for students. What is next after 10th class for students who opt for Science is explained below.<br/><br/>
    If you study PCM, you can go for careers like Engineering, Computer Sciences, Defence Services, Merchant Navy, etc. Whereas, if you study PCB then you can opt for Medicine, Physiotherapy, Agriculture, Nutrition & Dietetics, Dentistry, and the like.<br/><br/>
    Apart from these core subjects like Physics, Chemistry, Biology, and Maths, you will also have a compulsory language subject like English in both the streams. In total, you have to choose 5 main subjects. In addition to these, you will also have practical training in laboratories.<br/>
    </div>
    <div className='subtitle'>
    Commerce
    </div>
    <div className='content '> 
    If you like Economics and particularly enjoy working with numbers, or plan to start your own business one day, this can be the right choice of stream for you.<br/><br/>
    The core subjects in Commerce are – Accountancy, Economics and Business Studies. You will also have to study a compulsory language subject, and a choice of Maths against some other subject like Informatics Practices, etc. What is next after 10th for Commerce students are career options like Chartered Accountancy, Banking & Insurance, Finance, Stockbroking, Financial Planning, and much more.<br/>

    </div>
    <div className='subtitle'>
    Arts/ Humanities
    </div>
    <div className='content'>
    If you are creative, have strong communication skills and wish to pursue academic research, this can be the right choice for you. Many students are opting for the Humanities stream these days for its diversified, exciting and interesting career scope, that are no less in comparison to Science or Commerce.<br/><br/>
    The core subjects offered in Arts are Sociology, History, Literature, Political Science, Psychology, Economics, Philosophy, Fine Arts, etc along with one compulsory language subject. What is next after 10th class for Humanities students are career options like Media/Journalism, Literature, Social Work, Product Designing, Writing, Teaching and many others.<br/>
    </div>
    <div className='subtitle'>
    Vocational stream
    </div>
    <div className='content'>
    After SSLC what next you can opt for is many boards offering vocational subjects. These subjects prepare you for a job immediately after the completion of class 12. Depending upon the subjects offered by your school, your vocational subject choices could be Accountancy and Taxation, Auto Shop Repair and Practice, Business Operations and Administration, Capital Market Operations, Civil Engineering Technician, Food Nutrition and Dietetics, Food Production, Hospitality Management, Music Production, Textile Design, Web Applications, etc. These subjects undoubtedly enhance your scope of what is next after 10th.<br/><br/>
    Let us now look at a different side of the picture. There are many students who do not wish to follow the conventional route of choosing a stream in class 11 or pursuing higher education, for various reasons like financial responsibilities towards family, and the like. We shall now discuss some possible options of what next after 10th class for such students.<br/><br/>
    The ITI’s, Polytechnic Diplomas, Paramedical and Vocational courses discussed below, make you job-ready and make you part of the manpower in the industries you would work in. They offer technical job oriented options that can help you seek employment soon after completing class 10.<br/>

    </div>
    <div className='title'>
    What next after 10th- ITI (Industrial Training Institute)
    </div>
    <div className='content'>
    ITI certificates are offered in more than 100 specializations in technical as well as some non-technical courses. It is a government training institute which trains you and makes you skilled for various industries. The duration for ITI courses ranges from six months to two years.<br/><br/>
    Top ITI Courses are Computer Hardware & Network Maintenance, Draughtsman (Civil), Mechanic (Auto Electricals & Electronics), Interior Decoration and Designing, Computer Operator and Programming Assistant, Baker and Confectioner, Sheet Metal, Plumbing, etc.<br/>
    You can be employed in public as well as private sectors like PWD’s or can start your small set-up.<br/><br/>
    There are two main types of ITI courses after 10th, engineering courses and non-engineering courses. Engineering courses are technical in nature focusing on concepts of engineering, mathematics, science, and technology. Whereas, non-engineering courses which are not technical in nature and focus on soft skills, languages and other sector's specific skills and knowledge.<br/><br/>
    The duration of these courses could be between six months to three years depending on the type and nature of the course. Top institutes (government and private institutes) screen students on the basis of written tests and also some private institutions enroll students through direct admissions.<br/><br/>
    </div>
    <div className='title'>
    List of popular ITI courses after 10th
    </div>
    <div className='main-container'>
    <img src={ITIbranch}  style={{
        // keep this as it is
        overflow: 'auto', 
        width: '80%',
        height: '600px',
      }}
             alt='this is ITIbranches pic' />
    </div>
    <div className='title'>
    Details of some of the popular ITI courses after 10th
    </div>
    <div>
      {item}
    </div>
    <div className='title'>
    What next after 10th- Paramedical Courses
    </div>
    <div className='content'>
    The Paramedical branch is allied to the healthcare sector and offers good opportunities. What is next after 10th for students who take up Paramedical courses are options of becoming an X-Ray Technician, Dialysis Technician, Nursing Assistance, Ophthalmic Technician, etc.
    </div>
    <div className='title'>
    What next after 10th- Vocational courses
    </div>
    <div className='content'>
    After sslc what next best course can be decided by looking at vocational training courses. They are short term courses ranging from 1 to 2 years, which are job centric courses offered by the government under the National Skill Development Corporation (NSDC) and National Skill Qualification Framework (NSFQ). Different courses available are: such as Software Development,Fashion Designing, Desktop Publishing(DTP), Jewellery Designing, Travel & Tourism, Medical Imaging, etc.

    </div>
    <div className='title'>
    What next after 10th- Some important tips to keep in mind
    </div>
    <div className='content'>
   <p>
   Apart from focusing on choosing the right stream and subjects, it is also essential to keep working on yourself and building on skills that will prepare you for the immense competition in the job market. The more aware we are of what is happening around the world, the more we become ready to enter the industry. It is always beneficial to start early:<br/><br/>
    ● Start working on your soft skills like communication skills, interpersonal skills, and so on.<br/>
    ● Learn a new language<br/>
    ● Develop a habit of reading<br/>
    ● Dedicatedly pursue your hobbies<br/><br/>
    Deciding ‘What next after 10th’ often turns out to be one of the most crucial decisions of your life and should not be taken for granted. Keep yourself updated and upgraded with the growing career opportunities in the world and make an informed decision before choosing subject streams and your desired career path.<br/>
    Opportunities can knock at your door at times, so be well prepared and formulate a career plan of action for a better and brighter future ahead!

   </p>
    </div>
    </div>
  )
}

export default Index
