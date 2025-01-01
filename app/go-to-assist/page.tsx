import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dentech Expert Support | Go To Assist Remote Help',
  description: 'Our technicians are ready to provide real-time remote support to solve your software issues promptly, ensuring your dental practice operates smoothly.',
}

export default function GoToAssistPage() {
  return (
    <main>
      <section id="get-started-today" className="bg-gray-50 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="px-6 pt-16 pb-4 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="font-display text-3xl font-bold sm:text-4xl">
                <span className="text-blue-600">Go </span>
                <span className="text-indigo-600">To </span>
                <span className="text-indigo-600">Assist</span>
              </h2>
              <div className="mt-6 text-left text-lg leading-8 text-gray-900">
                <div className="flex items-start gap-3">
                  <p className="mb-4">
                    Welcome to the dedicated assistance portal for your Dentech software. Here, you can effortlessly initiate a remote session, allowing our expert support team to join you virtually in addressing any software concerns you may have. To begin, simply input the six-digit session code provided by your Dentech support representative into the field below.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="relative h-[110px] p-0">
        <svg className="w-full" viewBox="0 0 1920 160" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ fill: '#F8FAFC' }}>
          <path d="M0 0H1920V23.4197C1920 40.325 1907.32 54.2924 1890.45 55.3984C1744.66 64.9576 1103.56 109.281 970.166 157.83C963.441 160.277 956.559 160.277 949.834 157.83C816.436 109.281 175.342 64.9576 29.5456 55.3984C12.6765 54.2924 0 40.325 0 23.4197V0Z" />
        </svg>
      </div>

      <div className="bg-gray-100">
        <div className="container mx-auto sm:px-6 lg:px-8">
          <div className="py-12 sm:py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl space-y-16 lg:mx-0 lg:max-w-none">
                <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
                  <div>
                    <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900">Start Your Remote Session</h2>
                    <p className="mt-4 leading-7 text-gray-600">
                      Enter the 6-digit session number given to you by your support representative.
                    </p>
                  </div>
                  <div className="lg:col-span-2 lg:gap-8">
                    <div className="rounded-2xl bg-white p-10 shadow-lg">
                      <form
                        name="logmeinsupport"
                        id="logmeinsupport"
                        action="https://secure.logmeinrescue.com/Customer/Code.aspx"
                        method="post"
                      >
                        <div>
                          <div>
                            <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                              Remote Access Session #
                            </label>
                            <div className="mt-2">
                              <input
                                type="text"
                                id="code"
                                autoComplete="given-code"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                required
                                name="Code"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="relative my-4 flex gap-x-3">
                          <div className="flex h-6 items-center">
                            <input
                              id="consent"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                              required
                              name="consent"
                            />
                          </div>
                          <div className="text-sm leading-6">
                            <label htmlFor="consent" className="font-sm text-gray-900">
                              I hereby grant remote access of my system to a Dentech representative for remote diagnostic, troubleshooting and/or repair. Dentech is not responsible for any loss of data.
                            </label>
                          </div>
                        </div>

                        <button
                          className="mt-4 w-full sm:w-auto px-8 py-4 text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                          type="submit"
                          value="Connect to technician"
                        >
                          Connect to technician
                        </button>

                        <input type="hidden" maxLength={64} name="tracking0" />
                        <input type="hidden" maxLength={5} name="language" />
                        <input type="hidden" name="hostederrorhandling" value="1" />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 