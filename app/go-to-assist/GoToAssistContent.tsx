export default function GoToAssistContent() {
  return (
    <main>
      <section className="bg-gray-950 relative overflow-hidden py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Remote Support Access
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Welcome to the dedicated assistance portal for your Dentech software. Here, you can effortlessly initiate a remote session, allowing our expert support team to join you virtually in addressing any software concerns you may have.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-base font-semibold leading-7 text-lime-600">Start Your Remote Session</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Connect with Our Support Team
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Enter the 6-digit session number given to you by your support representative.
            </p>
          </div>

          <div className="mx-auto max-w-2xl lg:mx-0 mt-16">
            <div className="rounded-2xl bg-gray-50 p-8 shadow-sm ring-1 ring-gray-900/5">
              <form
                name="logmeinsupport"
                id="logmeinsupport"
                action="https://secure.logmeinrescue.com/Customer/Code.aspx"
                method="post"
                className="space-y-8"
              >
                <div>
                  <label htmlFor="code" className="block text-sm font-medium leading-6 text-gray-900">
                    Remote Access Session #
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      id="code"
                      autoComplete="given-code"
                      className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-600 sm:text-sm sm:leading-6"
                      required
                      name="Code"
                    />
                  </div>
                </div>

                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="consent"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-lime-600 focus:ring-lime-600"
                      required
                      name="consent"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="consent" className="font-medium text-gray-900">
                      I hereby grant remote access of my system to a Dentech representative for remote diagnostic, troubleshooting and/or repair. Dentech is not responsible for any loss of data.
                    </label>
                  </div>
                </div>

                <button
                  className="rounded-md bg-lime-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-lime-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600"
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
      </section>
    </main>
  )
} 