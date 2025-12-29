import Link from "next/link";

const PM_SIGNUP_LINK = "https://forms.gle/h4AjUQmiE6waA6dy5";
const PARTICIPANT_SIGNUP_LINK = "https://forms.gle/bY7mUqTZZ4tSu5HR8";
const SLACK_LINK = "https://wcs-uiuc.slack.com/join/shared_invite/zt-1tut8j6pi-51ilAwG8CNmYNolsQP25ew";
const WCS_WEBSITE = "https://wcs.illinois.edu/";

const timelineEvents = [
  { date: "NOV 12", title: "Info Session", description: "Introduction to Dev Ada: learn about Dev Ada and find your partners for the year!" },
  { date: "DEC 1", title: "PM Signups Due", description: "Interviews will be conducted on a rolling basis" },
  { date: "DEC 16", title: "General Signups Due", description: "Deadline for participant signups" },
  { date: "JAN 26", title: "Kickoff", description: "Official start of Dev Ada: meet your team and brainstorm!" },
  { date: "MAR 8", title: "Midpoint Presentation", description: "Enjoy a bite to eat while showing off what you've accomplished so far!" },
  { date: "APR 5", title: "Final Presentation", description: "Present your finished project to a panel of judges! Food will be provided!" },
  { date: "APR 10-11", title: "EOH", description: "Present your final work at Engineering Open House! (Optional)" },
];

const rules = [
  { title: "Team Size", description: "Teams can consist of 3 to 5 participants. Collaborating in teams is required." },
  { title: "Eligibility", description: "Participants must be officially registered for the project and comply with all event guidelines." },
  { title: "Original Work", description: "Your submission must be your own and must not infringe upon the intellectual property rights of others." },
  { title: "Inclusivity", description: "The event fosters a positive, inclusive, and respectful environment. Any form of offensive behavior will not be tolerated." },
  { title: "Collaboration and Help", description: "Plagiarism or copying entire projects from other teams is strictly prohibited. Please reach out to mentors or officers for guidance and support at any point during the project cycle." },
];

const faqs = [
  { question: "What if I'm new to coding?", answer: "That's okay! This is a beginner-friendly project. Mentors will be available to help." },
  { question: "What is the time commitment for this?", answer: "You will need to be available for the weekly meetings with your mentor, the midpoint and the final presentation. Besides this, it depends on you and your team." },
  {question: "I don't have a team yet. How can I find one?", answer: "We will match people without teams at the Kickoff Meeting."},
  {question: "How will official communication occur during the project cycle?", answer:"We will use Discord to communicate with participants."},
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-[#ffd6d9]/90 backdrop-blur-sm z-50 border-b border-[#efa9ae]">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <span className="text-xl font-bold gradient-text">Dev Ada</span>
          <div className="hidden md:flex gap-6 text-sm">
            <a href="#overview" className="text-[#21636c] hover:text-[#e2626a] transition">Overview</a>
            <a href="#timeline" className="text-[#21636c] hover:text-[#e2626a] transition">Timeline</a>
            <a href="#teams" className="text-[#21636c] hover:text-[#e2626a] transition">Teams</a>
            <a href="#rules" className="text-[#21636c] hover:text-[#e2626a] transition">Rules</a>
            <a href="#faq" className="text-[#21636c] hover:text-[#e2626a] transition">FAQ</a>
            <a href="#contact" className="text-[#21636c] hover:text-[#e2626a] transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="overview" className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6  text-black">
            Welcome to <span className="gradient-text">Dev Ada</span>!
          </h1>
          <p className="text-xl text-[#21636c] mb-8">
            This is the semester-long project cycle run by Illinois Women in Computer Science.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={PM_SIGNUP_LINK}
              target="_blank"
              className="bg-[#e2626a] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#d45560] transition"
            >
              PM Sign Up
            </Link>
            <Link
              href={PARTICIPANT_SIGNUP_LINK}
              target="_blank"
              className="bg-[#69c7cb] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#5ab5b9] transition"
            >
              Participant Sign Up
            </Link>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-20 px-4 bg-[#fff8f9]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12  text-black">Timeline</h2>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 gradient-bg"></div>
            <div className="space-y-8">
              {timelineEvents.map((event, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"} pl-12 md:pl-0`}>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-[#a4dddf]">
                      <span className="text-sm font-semibold text-[#e2626a]">{event.date}</span>
                      <h3 className="text-lg font-bold mt-1  text-black">{event.title}</h3>
                      <p className="text-[#21636c] text-sm mt-2">{event.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-[#69c7cb] rounded-full transform -translate-x-1/2 border-2 border-white"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Information */}
      <section id="teams" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12  text-black">Join a Team</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#fff8f9] border border-[#efa9ae] p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-4  text-black">Project Managers</h3>
              <p className="text-[#21636c] mb-6">
                Lead a team through the Dev Ada project cycle. Guide your team from ideation to final presentation.
              </p>
              <Link
                href={PM_SIGNUP_LINK}
                target="_blank"
                className="inline-block bg-[#e2626a] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#d45560] transition"
              >
                Apply to be a PM
              </Link>
            </div>
            <div className="bg-[#f8fffe] border border-[#a4dddf] p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-4  text-black">Team Members</h3>
              <ul className="text-[#21636c] mb-6 space-y-2">
                <li>• Groups of 3-5 people</li>
                <li>• All groups will have a Project Manager</li>
                <li>• Collaborate on exciting projects!</li>
              </ul>
              <Link
                href={PARTICIPANT_SIGNUP_LINK}
                target="_blank"
                className="inline-block bg-[#69c7cb] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#5ab5b9] transition"
              >
                Sign Up as Participant
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Rules Section */}
      <section id="rules" className="py-20 px-4 bg-[#f8fffe]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12  text-black">Rules</h2>
          <div className="space-y-4">
            {rules.map((rule, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-[#a4dddf]">
                <h3 className="font-bold text-lg mb-2  text-black">
                  <span className="text-[#e2626a]">{index + 1}.</span> {rule.title}
                </h3>
                <p className="text-[#21636c]">{rule.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prizes & Mentors */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center p-8 rounded-2xl bg-[#fff8f9] border border-[#efa9ae]">
              <h2 className="text-2xl font-bold mb-4  text-black">Prizes</h2>
              <p className="text-[#21636c]">There will be prizes!</p>
              <p className="text-[#21636c] text-sm mt-2">More information coming soon!</p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-[#f8fffe] border border-[#a4dddf]">
              <h2 className="text-2xl font-bold mb-4  text-black">Mentors & Support</h2>
              <p className="text-[#21636c] mb-4">
                Our mentors will be available throughout the project cycle to help with technical challenges and provide guidance.
              </p>
              <p className="text-[#21636c] text-sm">
                Reach out on Discord for technical support! A Dev Ada Discord server will be created close to the start of the event.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 bg-[#fff8f9]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12  text-black">FAQs</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-[#efa9ae]">
                <h3 className="font-bold text-lg mb-2  text-black">{faq.question}</h3>
                <p className="text-[#21636c]">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Projects */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8  text-black">Past Projects</h2>
          <div className="bg-white border border-[#a4dddf] p-8 rounded-2xl inline-block">
            <h3 className="font-bold text-lg mb-2  text-black">PrairieLearn Chrome Extension</h3>
            <Link
              href="https://github.com/emb0ro/devada-2025"
              target="_blank"
              className="text-[#69c7cb] hover:text-[#e2626a] hover:underline transition"
            >
              View on GitHub →
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-[#69c7cb] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 ">Contact Us</h2>
          <div className="space-y-4 mb-8">
            <p>
              <strong>Anshi:</strong>{" "}
              <a href="mailto:amath24@illinois.edu" className="underline hover:opacity-80">
                amath24@illinois.edu
              </a>
            </p>
            <p>
              <strong>Jia:</strong>{" "}
              <a href="mailto:jiasg2@illinois.edu" className="underline hover:opacity-80">
                jiasg2@illinois.edu
              </a>
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={SLACK_LINK}
              target="_blank"
              className="bg-white text-[#69c7cb] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
            >
              Join our Slack
            </Link>
            <Link
              href={WCS_WEBSITE}
              target="_blank"
              className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition"
            >
              WCS Website
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-[#e2626a] text-white text-center text-sm">

      </footer>
    </main>
  );
}
