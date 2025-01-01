import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - Dentech',
  description: 'Learn about how Dentech protects your data and maintains HIPAA compliance in our dental practice management software.',
}

export default function PrivacyPage() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden bg-primary-100 px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="font-display text-4xl font-bold tracking-tight text-primary sm:text-6xl">
              Privacy Policy
            </h1>
          </div>
        </div>
      </div>

      {/* Content sections */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="prose prose-lg prose-primary">
            <p>
              We are committed to protecting your privacy. This privacy statement explains what information we collect from you when you visit our website and how we use that information. We collect personal information that you voluntarily provide to us when you fill out forms on our website or contact us by email. We also collect non-personal information, such as the type of browser you are using and the pages you visit on our website. We use the information we collect to improve the content of our website, respond to inquiries, and provide legal services to clients. We do not share your personal information with third parties unless required by law or as necessary to provide legal services to clients. We may use non-personal information to analyze website traffic and usage patterns. Any discounts offered by our law firm are conditional upon income and may not be available to everyone. By using our website, you consent to the collection and use of information as outlined in this privacy statement.
            </p>

            <p className="text-sm text-gray-500">
              Last updated: December 28, 2023
            </p>

            <section>
              <h2>1. Definitions</h2>
              <p>
                Softech Inc, collectively known as the host of the website "DENTECH.com" maintained on the World Wide Web by DENTECH. "The site" or "site" refers to DENTECH.com. "User," or collectively "Users," refers to any party who accesses the site. "Host" refers to Softech Inc. "Access" means viewing or otherwise obtaining information located on DENTECH.com. "Agreement" refers to these terms of use and any subsequent modification.
              </p>
            </section>

            <section>
              <h2>2. Acceptance of Terms</h2>
              <p>
                By accessing the site via the World Wide Web or any other medium, User accepts and agrees to all conditions imposed in these terms of use. Host reserves the right to modify these terms of use at any time without notice to User, including imposing a fee to access certain materials contained on the site. Any change in these terms of use is effective immediately upon User's receipt of notice from Host. Notice can be given through e-mail, posting on the site or any other means by which User may obtain notice. Users should periodically check those terms of use for changes. Any use of the site after changes have been made shall be deemed acceptance of those changed terms of use. Host reserves the right to monitor use of the site. Host has the exclusive right to control accessibility, hours of use, features on the site and any other information found on the site. Host can restrict access to any or all portions of the site or remove any information or content from the site at any time. User is solely responsible for providing the equipment related to accessing DENTECH.com including all computer, telephone or other equipment.
              </p>
            </section>

            <section>
              <h2>3. Copyright and Marks</h2>
              <p>
                All contents on the site (with the exception of content provided by Host's third party content providers) are the copyrighted property of Host. Site contents may not be copied, reproduced, modified, published, uploaded, posted, transmitted, "framed" on another site, or distributed in any way without the prior written consent of Host. Users must retain all copyright and other proprietary notices on any authorized reproductions of any portion of the site. Any third-party marks and content appearing on the site are the property of their respective owners. You are not permitted to use any of these third party marks or content without permission of the respective owner.
              </p>
            </section>

            <section>
              <h2>4. How We Disclose Personal Information</h2>
              <p>
                By providing a telephone number and submitting a form on this site, you are consenting to be contacted by SMS text message. Message & data rates may apply. You can reply STOP to opt-out of further messaging. No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. All other categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.
              </p>
            </section>

            <section>
              <h2>5. Prohibited Conduct</h2>
              <p>
                User expressly agrees to refrain from doing, either personally or through an agent, any of the following:
              </p>
              <ul>
                <li>Use any device or other means to harvest information about other Users.</li>
                <li>Transmit, install, upload or otherwise transfer any virus or other item or process to the site that in any way affects the use, enjoyment or service of the site.</li>
                <li>Transmit, install, upload or otherwise transfer any virus or other item to the site that in any way affects the use, enjoyment or service of any User's or Host employee's computer or other medium used to access the site.</li>
                <li>Post any material on the site that is offensive to any other User. Host maintains the exclusive right to determine what is offensive.</li>
                <li>Post or store on the site any content that violates or infringes the intellectual property rights of others (including but not limited to copyrights, trademarks, trade secrets, patents and publicity rights).</li>
                <li>Modify the information, including headers, found on the website.</li>
                <li>Transmit, install, upload or otherwise transfer to the site any unauthorized advertisement or communication.</li>
                <li>Engage in any action which Host determines is detrimental to the use and enjoyment of the website.</li>
                <li>Use the website for any unlawful or defamatory means.</li>
                <li>Transmit, install, upload, post or otherwise transfer any information in violation of the laws of the United States or post any information that could result in civil unrest.</li>
              </ul>
            </section>

            <section>
              <h2>6. Disclaimer and Limitation of Liability</h2>
              <p>
                Although Host has attempted to provide accurate information on the site, it makes no guarantee or warranty, express or implied, as to the reliability, accuracy, timeliness or completeness of that information and assumes no responsibility for any errors or omissions therein. USER ACCESSES THIS SITE AT HIS OR HER OWN RISK. THE SITE IS PROVIDED ON AN "AS IS, AS AVAILABLE" BASIS WITHOUT WARRANTY OF ANY KIND AND ANY AND ALL WARRANTIES OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE OR NON-INFRINGEMENT ARE SPECIFICALLY DISCLAIMED. NEITHER HOST NOR ITS AFFILIATES, EMPLOYEES, AGENTS OR THIRD PARTY CONTENT PROVIDERS SHALL BE LIABLE FOR ANY LOSS RESULTING FROM USE OR UNAVAILABILITY OF INFORMATION OR CONTENT ON THIS SITE, INCLUDING BUT NOT LIMITED TO ANY LOST PROFITS, LOSS OR DAMAGE TO DATA, OR ANY DIRECT, INDIRECT, SPECIAL, CONSEQUENTIAL, COMPENSATORY OR INCIDENTAL DAMAGES, EVEN IF THEY HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. THIS DISCLAIMER IS APPLICABLE TO ANY DAMAGE OR INJURY RESULTING FROM NEGLIGENCE OR OMISSION OF HOST, COMPUTER VIRUS OR OTHER SIMILAR ITEM, TELECOMMUNICATIONS ERRORS, OR UNAUTHORIZED ACCESS TO OR USE OF USER INFORMATION
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
} 