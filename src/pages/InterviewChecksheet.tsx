import { PageLayout } from '../components/PageLayout'
import { interviewChecklist } from '../data/secret'

export default function InterviewChecksheet() {
  return (
    <PageLayout>
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10">
            <p className="text-sm uppercase tracking-wide text-gray-500 dark:text-gray-400">Private</p>
            <h1 className="text-4xl font-bold mt-2">{interviewChecklist.title}</h1>
            <p className="text-gray-600 dark:text-gray-300 mt-4">
              A quick checklist for interview readiness, follow-ups, and technical refreshers.
            </p>
          </div>

          <div className="space-y-8">
            {interviewChecklist.sections.map((section) => (
              <div key={section.title} className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-green-500" />
                      <span className="text-gray-600 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
