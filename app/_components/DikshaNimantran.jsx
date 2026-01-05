import React from 'react';

const scheduleData = [
    {
        day: "प्रथम दिवस",
        tithi: "वि.सं. २०८२ माघ वद ३ बुधवार",
        date: "04-02-2026",
        events: [
            { time: "सुबह 6.30 बजे", title: "परमात्मा तथा पूज्यों का भव्य प्रवेश तथा शौर्यगाथा, विभिन्न प्रदर्शनियों आदि का उद्घाटन" },
            { time: "सुबह 10.30 बजे", title: "'मेरु शिखर न्हवरावे हो सुरपति' भव्य स्नात्र महोत्सव" },
            { time: "दोपहर 2.00 बजे", title: "'मोहे रंग दे संयम रंग में' वस्त्र रंग वधामणा (स्वागत) तथा मेहंदी" },
            { time: "शाम 6.00 बजे", title: "'जडे जोड ना क्यांय एवी तुं मा छे' संध्याभक्ति" },
            { time: "शाम 7.30 बजे", title: "'वैराग्यथी झळहळती सवारी' मुमुक्षरत्नों की वांदोली" }
        ]
    },
    {
        day: "द्वितीय दिवस",
        tithi: "वि. सं. २०८२ माघ वद ४ गुरुवार",
        date: "05-02-2026",
        events: [
            { time: "सुबह 9:00 बजे", title: "'दीक्षा ही सुख' अद्वितीय प्रवचन" },
            { time: "दोपहर 2.00 बजे", title: "'संयम सफरनो सथवारो - उपकारकारी उपकरणो' छाब भरने का अवसर तथा रत्नकुक्षी माता-पिता का बहुमान" },
            { time: "शाम 6.00 बजे", title: "'फानी दुनिया छोडी तारा चरणोमा रही जाउ' संध्याभक्ति" },
            { time: "शाम 7.00 से 10.00 बजे", title: "'आज उडे मुंबईमां संयमना उजळा रंगो' भव्य विदाई समारोह - १" }
        ]
    },
    {
        day: "तृतीय दिवस",
        tithi: "वि.सं.२०८२ माघ वद ५ शुक्रवार",
        date: "06-02-2026",
        events: [
            { time: "सुबह 7:00 बजे", title: "तमाम उपकरण तथा नामकरण की उछामणी" },
            { time: "दोपहर 2.00 बजे", title: "'हो राज ! मने लाग्यो छे समकितनो रंग' भक्ति की चरमसीमा पर ले जानेवाली अष्टप्रकारी पूजा" },
            { time: "शाम 6.00 बजे", title: "'छलकावी दो ने नाथ ! करुणानी प्याली' संध्याभक्ति" },
            { time: "शाम 7.00 से 10.00 बजे", title: "'आज उडे मुंबईमां संयमना उजळा रंगो' भव्य विदाई समारोह - २" }
        ]
    },
    {
        day: "चतुर्थ दिवस",
        tithi: "वि.सं. २०८२ माघ वद ६ शनिवार",
        date: "07-02-2026",
        events: [
            { time: "सुबह 8.30 बजे", title: "'पकडनार दुःखी...छोडनार सुखी' वैराग्य का महादान करनेवाली शाही वर्षीदानयात्रा" },
            { time: "दोपहर 3.30 बजे", title: "'अणाहारी बनवानी यात्रानो प्रारंभ' अंतिम वायपुं" },
            { time: "शाम 6.00 बजे", title: "'वीतरागनो वैभव' अद्वितीय महापूजा-अलौकिक आरती" },
            { time: "शाम 7.30 बजे से 10.00 बजे", title: "संगीतना सथवारे 'संयमगाथा'" }
        ]
    },
    {
        day: "दीक्षा दिवस",
        tithi: "वि.सं.२०८२ माघ वद ७ रविवार",
        date: "08-02-2026",
        events: [
            { time: "सुबह 4.41 बजे", title: "सभी पूज्यों तथा मुमुक्षुओं का मंडप आगमन" },
            { time: "सुबह 6.30 बजे", title: "'रजोहरणने वंदो रे... भाव धरी आनंदो रे' रजोहरण अर्पण पल" },
            { time: "सुबह 9.27 बजे", title: "'आ कर्मोनुं लुंचन छे' केशलुंचन पल" }
        ]
    }
];

const DikshaNimantran = () => {
    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-8 md:py-20 font-heading">
            {/* Header Section */}
            <div className="text-center mb-8 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-200/20 via-orange-200/20 to-amber-200/20 blur-3xl -z-10"></div>
                <p className="text-lg md:text-2xl text-maroon font-extrabold mb-2">
                    600 से अधिक श्रमण-श्रमणी भगवंतों की पवित्र ऊर्जामय उपस्थिति में
                </p>
                <h2 className="text-4xl pt-2 md:text-5xl lg:text-6xl font-black bg-gradient-to-b from-maroon to-red-600 bg-clip-text text-transparent pb-4">
                    संयमरंग उत्सव
                </h2>
                <div className="flex items-center justify-center gap-4 mb-4">
                    <div className="h-px w-12 bg-maroon/30"></div>
                    <span className="text-2xl md:text-3xl font-bold text-gray-700 italic">के</span>
                    <div className="h-px w-12 bg-maroon/30"></div>
                </div>
                <p className="text-xl md:text-3xl text-maroon font-bold">
                    शामियाने में पधारने के लिए <br className="md:hidden" /> सस्नेह सन्निमंत्रणम् !
                </p>
            </div>

            {/* Schedule Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
                {scheduleData.map((day, idx) => (
                    <div
                        key={idx}
                        className="group relative bg-white rounded-sm p-6 md:p-12 shadow-md border border-amber-100/50 hover:shadow-2xl transition-all duration-500 overflow-hidden"
                    >
                        {/* Background Decorative Element */}
                        <div className="absolute top-0 right-0 w-48 h-48 bg-amber-50 rounded-bl-full -z-0 opacity-40 group-hover:scale-110 transition-transform duration-500"></div>

                        <div className="relative z-10">
                            <div className="flex flex-col items-center text-center gap-2 mb-4">
                                <h3 className="text-2xl md:text-3xl font-black text-maroon">{day.day}</h3>
                                <p className="text-gray-700 font-bold text-lg md:text-xl">{day.tithi}</p>
                                <div className="bg-gradient-to-r font-sans from-maroon via-red-700 to-maroon text-white px-8 py-2 rounded-full text-sm md:text-lg font-bold shadow-xl border-2 border-white/20 transform hover:scale-105 transition-transform mt-2">
                                    {day.date}
                                </div>
                                <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-200 to-transparent mt-2 mb-2"></div>
                            </div>

                            <div className="space-y-6">
                                {day.events.map((event, eIdx) => (
                                    <React.Fragment key={eIdx}>
                                        <div className="flex flex-col items-center text-center gap-2 group/item">
                                            <div className="flex-shrink-0">
                                                <span className="text-maroon font-bold text-sm md:text-base px-6">
                                                    {event.time}
                                                </span>
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-gray-800 text-lg md:text-2xl font-bold leading-relaxed group-hover/item:text-maroon transition-colors duration-300">
                                                    {event.title}
                                                </p>
                                            </div>
                                        </div>
                                        {eIdx < day.events.length - 1 && (
                                            <div className="flex justify-center">
                                                <div className="w-full max-w-[80%] h-px bg-gradient-to-r from-transparent via-amber-200 to-transparent"></div>
                                            </div>
                                        )}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer Decoration */}
            <div className="mt-8 flex justify-center">
                <div className="flex gap-2">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className={`h-2 rounded-full bg-maroon ${i === 2 ? 'w-12' : 'w-2'} opacity-30`}></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DikshaNimantran;
