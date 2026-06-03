// export default function About() {
//     return (
//         <div className="max-w-2xl mx-auto card p-6 bg-white rounded-lg shadow-md">
//             <h1 className="text-3xl font-bold text-gray-800 mb-4">About ResumeAI</h1>
//             <p className="text-gray-500 text-lg leading-relaxed">
//                 ResumeAI is a free tool that helps job seekers write stronger resumes
//                 using artificial intelligence. Simply enter your experience and the job
//                 description — and let AI do the hard work.
//             </p>
//         </div>
//     );
// }


export default function AboutPage() {
    const steps = [
        {
            number: "1",
            title: "Paste your experience",
            text: "In plain words — no formatting needed.",
        },
        {
            number: "2",
            title: "Add the job description",
            text: "We tailor your resume to match exactly.",
        },
        {
            number: "3",
            title: "Download your resume",
            text: "Polished, professional, and ATS-ready.",
        },
    ];

    return (
        <section className="bg-slate-50 min-h-screen flex items-center">
            <div className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Side */}
                    <div>
                        <p className="text-xs font-semibold tracking-[3px] text-indigo-600 uppercase mb-6">
                            About ResumeAI
                        </p>

                        <h1 className="text-5xl font-bold leading-tight text-slate-900 mb-6">
                            Your career story,
                            <br />
                            told by AI.
                        </h1>

                        <p className="text-slate-600 text-lg max-w-md mb-10">
                            ResumeAI is a free tool that helps job seekers write stronger
                            resumes using artificial intelligence. Simply enter your
                            experience and the job description — and let AI do the hard work.
                        </p>

                        <div className="space-y-6">
                            {steps.map((step) => (
                                <div key={step.number} className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-semibold">
                                        {step.number}
                                    </div>

                                    <div>
                                        <h3 className="font-semibold text-slate-900">
                                            {step.title}
                                        </h3>
                                        <p className="text-sm text-slate-500">{step.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="grid grid-cols-2 gap-4">

                        {/* Top Card */}
                        <div className="col-span-2 bg-white rounded-2xl border p-6 shadow-sm">
                            <p className="text-xs text-slate-400 mb-2">Your Experience</p>
                            <p className="text-sm text-slate-700 mb-6">
                                Led product design, boosting retention 40%
                            </p>

                            <p className="text-xs text-slate-400 mb-2">Job Description</p>
                            <p className="text-sm text-slate-700">
                                Senior UX Designer, 5+ years experience...
                            </p>

                            <div className="text-center text-xl mt-4 text-slate-300">
                                →
                            </div>
                        </div>

                        {/* Resume Card */}
                        <div className="bg-white rounded-2xl border p-5 shadow-sm">
                            <div className="h-2 w-16 bg-slate-800 rounded mb-4"></div>
                            <h4>Checking</h4>

                            {[1, 2, 3, 4, 5, 6].map((item) => (
                                <div
                                    key={item}
                                    className="h-2 bg-indigo-100 rounded mb-3"
                                />
                            ))}

                            <div className="flex justify-end mt-4">
                                <div className="w-5 h-5 rounded-full border-2 border-green-500"></div>
                            </div>
                        </div>

                        {/* AI Card */}
                        <div className="bg-slate-900 rounded-2xl p-5 flex items-center justify-center">
                            <div className="relative w-32 h-32">
                                <h1 className="text-2xl font-bold text-white">AI</h1>
                                <div className="absolute top-0 left-1/2 w-3 h-3 rounded-full bg-indigo-500"></div>
                                <div className="absolute bottom-0 left-1/2 w-3 h-3 rounded-full bg-indigo-500"></div>
                                <div className="absolute top-1/2 left-0 w-3 h-3 rounded-full bg-indigo-500"></div>
                                <div className="absolute top-1/2 right-0 w-3 h-3 rounded-full bg-indigo-500"></div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-indigo-400"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}