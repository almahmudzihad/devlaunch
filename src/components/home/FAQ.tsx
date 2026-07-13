const faqs = [
  {
    id: 1,
    question: "How do I enroll in a course?",
    answer:
      "Simply create an account, explore our courses, and click the 'Enroll' button to get started.",
  },
  {
    id: 2,
    question: "Do I receive a certificate after completion?",
    answer:
      "Yes, you will receive a digital certificate after successfully completing a course.",
  },
  {
    id: 3,
    question: "Can I access my courses anytime?",
    answer:
      "Yes, all enrolled courses come with lifetime access so you can learn at your own pace.",
  },
  {
    id: 4,
    question: "Are the courses beginner friendly?",
    answer:
      "Absolutely! We offer courses for beginners, intermediate learners, and advanced developers.",
  },
  {
    id: 5,
    question: "Do you provide career support?",
    answer:
      "Yes. We provide CV reviews, interview preparation, and career guidance to help you get hired.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-base-200 py-20">
      <div className="mx-auto max-w-5xl px-4">

        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold">
            Frequently Asked Questions
          </h2>

          <p className="mt-3 text-base-content/70">
            Find answers to the most common questions about DevLaunch.
          </p>
        </div>

        <div className="space-y-4">

          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="collapse collapse-plus bg-base-100 border border-base-300"
            >
              <input type="radio" name="faq-accordion" />

              <div className="collapse-title text-lg font-semibold">
                {faq.question}
              </div>

              <div className="collapse-content">
                <p className="text-base-content/70">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}