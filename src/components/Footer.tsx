
function Footer()
{
    return(
    <footer className="bg-white border-2  shadow-xl">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex justify-center sm:justify-start">
            {/* <img src={logo} className="mr-3 h-6 sm:h-9" alt="Virdicon Logo" /> */}
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Portfolio</span>

            </div>

            <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
              Copyright &copy; 2023. All rights reserved. Developed by Jagtar Singh
            </p>
          </div>
        </div>
      </footer>
    )
}
export default Footer