import { useState } from 'react';
import ViewDetectAnimation from '../animationComponents/ViewDetectAnimation';

function ContactForm() {
  const [loading, setloading] = useState(false)
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [projectDetails, setProjectDetails] = useState('');


  const handleSubmit = (e: any) => {
    e.preventDefault();
    setloading(true)
    const url = "https://sendmessage-xnxe62iksa-uc.a.run.app"
    const data = { Name: name, Email: email, Phone: phone, ProjectDetails: projectDetails };

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response
        alert(`Your message has been successfully reached to us. We will contact you.`)
        setloading(false)
      })
      .catch(error => {
        // Handle any errors
        alert(error);

      });
  }

  return (
    < section className="bg-cover bg-center ">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">

          <div className="lg:col-span-2 lg:py-12">
            <ViewDetectAnimation direction={"Y"} level={100} speed={700} styles={''} to={0} repeat={false}>
              <p className="max-w-xl text-lg font-bold mb-5  bg-white bg-opacity-60">

                Let's collaborate to bring your vision to life and create remarkable online experiences.

              </p>
              <span className=" inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">

                <a href="https://www.instagram.com/jagtar.singh95/" className="ml-3 text-gray-500">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/jagtar-singh-matharu/" className="ml-3 text-gray-500">
                  <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                  </svg>
                </a>
              </span>
            </ViewDetectAnimation>



            <ViewDetectAnimation direction={"X"} level={-10} speed={1000} styles={''} to={0} repeat={true}>
              <div className="mt-8 font-extrabold bg-white rounded-lg bg-opacity-50">
                <p className="text-2xl ">
                  <span className="relative inline-block">
                    <span className="absolute inline-block w-full  h-2"></span>
                    <span className="relative"> Have a question? </span>
                  </span>
                  <span
                    className=" transition-all duration-200 text-sky-500 hover:text-sky-600 "> Send me a message </span>
                </p>

              </div>
            </ViewDetectAnimation>
          </div>


          {loading ? (<div className='h-full '><div className=' h-full w-full  transition animate-spin duration-500 flex justify-center items-center md:text-7xl text-4xl'> ⌛</div></div>) : (
            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form onSubmit={handleSubmit} className="space-y-4">

                <div>
                  <label className="sr-only" htmlFor="name">Name</label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm border-2"
                    placeholder="Name"
                    type="text"
                    id="name"
                    value={name} onChange={(e) => setName(e.target.value)} required
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 ">
                  <div>
                    <label className="sr-only" htmlFor="email">Email</label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm border-2"
                      placeholder="Email address"
                      type="email"
                      id="email"
                      value={email} onChange={(e) => setEmail(e.target.value)} required
                    />
                  </div>
                  <div>
                    <label className="sr-only" htmlFor="phone">Phone</label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm border-2"
                      placeholder="Phone Number"
                      type="tel"
                      id="phone"
                      value={phone} onChange={(e) => setPhone(e.target.value)} required
                    />
                  </div>
                </div>

                <div>
                  <label className="sr-only" htmlFor="message">Message</label>
                  <textarea
                    className="w-full rounded-lg border-gray-200 p-3 text-sm border-2"
                    placeholder="Message"
                    rows={8}
                    id="message"
                    value={projectDetails} onChange={(e) => setProjectDetails(e.target.value)} required
                  ></textarea>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className=" bg-gradient-to-r from-green-300 via-blue-500 to-purple-600  inline-block w-full rounded-lg hover:bg-slate-800 transition duration-500 hover:scale-105  px-5 py-3 font-medium text-white sm:w-auto"
                  >
                    Send Message
                  </button>
                </div>

              </form>
            </div>)
          }

        </div>
      </div>
    </section >



  );
}

export default ContactForm;
