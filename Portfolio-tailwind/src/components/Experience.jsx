const Experience = () => {
    return (
      <div className="py-10 bg-[#1f1f35]" id='experience'>
          <h2 className='mb-8 text-3xl text-white text-center'>My <span>Experience</span></h2>
  
          <div className="mb-[20px] text-white bg-gray-700/20 p-4 rounded-3xl max-w-[300px] sm:max-w-[600px] mx-auto">
              <p className="font-semibold">Senchola Technology Solutions, Bangalore</p>
              <p>Frontend Developer Intern</p>
              <p className='text-gray-400'>(Jul 2023 - Oct 2023)</p>
              <ul className='text-gray-500 mt-2 space-y-1'>
                  <li>• Created a responsive website to promote Tamil Nadu tourism, showcasing destinations and cultural insights to attract travelers.</li>
                  <li>• Converted Figma design to a responsive landing page using React.js and Bootstrap, focusing on pixel-perfect accuracy and interaction.</li>
                  <li>• Built a YouTube clone to test skills, featuring video search, player integration, and core functionalities for user engagement.</li>
              </ul>
          </div>
  
          <div className="h-[50px] w-[2px] bg-slate-400 my-1 mx-auto"></div>
  
          <div className="mb-[20px] text-white bg-gray-700/20 p-4 rounded-3xl max-w-[300px] sm:max-w-[600px] mx-auto">
              <p className="font-semibold">Tespa Tools Pvt Ltd, Chennai</p>
              <p>IT Department Intern</p>
              <p className='text-gray-400'>(Feb 2025 - Present)</p>
              <ul className='text-gray-500 mt-2 space-y-1'>
                  <li>• Developed the Tespa Metrology website using the MERN stack, incorporating best SEO practices for improved visibility and performance.</li>
                  <li>• Created a customized QR app for their gauges, enhancing traceability and ease of access.</li>
                  <li>• Built an AI chatbot using Gemini API and RAG (Retrieval-Augmented Generation), integrating it with Tespa's existing data to provide intelligent, accurate responses.</li>
              </ul>
          </div>
      </div>
    )
  }
  
  export default Experience