"use client"
import React, { useEffect, useRef, useState } from 'react';

const InfiniteMovingCards = ({ items, direction = "left", speed = "fast", pauseOnHover = true }) => {
    const containerRef = useRef(null);
    const scrollerRef = useRef(null);
    const [start, setStart] = useState(false);
    const touchStartX = useRef(0);
    const scrollStartX = useRef(0);
    const [manualScrollX, setManualScrollX] = useState(0);
    const [isDragging, setIsDragging] = useState(false);

    useEffect(() => {
        addAnimation();
    }, []);

    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
        scrollStartX.current = manualScrollX;
        setIsDragging(true);
    };

    const handleTouchMove = (e) => {
        if (!isDragging) return;

        const currentX = e.touches[0].clientX;
        const diff = currentX - touchStartX.current;
        setManualScrollX(scrollStartX.current + diff);
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
    };

    const handleMouseDown = (e) => {
        touchStartX.current = e.clientX;
        scrollStartX.current = manualScrollX;
        setIsDragging(true);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;

        const currentX = e.clientX;
        const diff = currentX - touchStartX.current;
        setManualScrollX(scrollStartX.current + diff);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem);
                }
            });

            getDirection();
            getSpeed();
            setStart(true);
        }
    }

    const getDirection = () => {
        if (containerRef.current) {
            if (direction === "left") {
                containerRef.current.style.setProperty("--animation-direction", "forwards");
            } else {
                containerRef.current.style.setProperty("--animation-direction", "reverse");
            }
        }
    };

    const calculateDuration = () => {
        if (!containerRef.current) return;

        const durationPerItem = 80 / 18;

        return items.length * durationPerItem;
    };


    const getSpeed = () => {
        if (containerRef.current) {
            if (speed === "fast") {
                containerRef.current.style.setProperty("--animation-duration", "20s");
            } else if (speed === "normal") {
                containerRef.current.style.setProperty("--animation-duration", "40s");
            } else {
                containerRef.current.style.setProperty("--animation-duration", calculateDuration() + "s");
            }
        }
    };

    return (
        <div
            ref={containerRef}
            className="relative z-20 max-w-7xl overflow-hidden cursor-grab active:cursor-grabbing"
            style={{
                maskImage: "linear-gradient(to right, transparent, white 20%, white 80%, transparent)",
                WebkitMaskImage: "linear-gradient(to right, transparent, white 20%, white 80%, transparent)",
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
        >
            <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite;
        }
        .animate-scroll.paused {
          animation-play-state: paused;
        }
        .hover-pause:hover {
          animation-play-state: paused;
        }
      `}</style>
            <ul
                ref={scrollerRef}
                className={`flex w-max min-w-full shrink-0 flex-nowrap gap-4 ${start && !isDragging ? 'animate-scroll' : ''} ${start && isDragging ? 'animate-scroll paused' : ''} ${pauseOnHover ? 'hover-pause' : ''}`}
                style={{
                    transform: isDragging ? `translateX(${manualScrollX}px)` : undefined,
                    transition: isDragging ? 'none' : undefined
                }}
            >
                {items.map((item, idx) => (
                    <li
                        className="relative w-[250px]  shrink-0 rounded-2xl sm:w-[350px] md:w-[450px] px-1 md:px-3 md:py-2"
                        key={`${item.name}-${idx}`}
                    >
                        <div className="absolute inset-0 blur-xl rounded-2xl"></div>

                        <div className="relative h-[120px] bg-gradient-to-r from-amber-100/40 via-pink-300/40 to-amber-100/40 overflow-hidden rounded-lg border border-amber-200/50 px-6 py-5 md:px-8 md:py-6">
                            <div className="space-y-4">
                                <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                        <h3 className="text-base md:text-lg font-semibold text-gray-900">
                                            {item.name}
                                        </h3>
                                        <p className="text-xs md:text-sm text-gray-600 mt-1">
                                            {item.gender === 'M' ? 'पुरुष' : 'महिला'} • आयु: {item.age}
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <svg className="w-3 h-3 md:w-4 md:h-4 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <span className="text-xs md:text-sm text-gray-700">
                                            {item.residence}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default function DiksharthiDetailsPage() {
    const maleData = [
        { name: "हरखचंदजी बछराजजी भंसाली", gender: "M", age: 71, residence: "हाडेचा-मुंबई" },
        { name: "पारसमलजी सिरेमलजी अंगारा", gender: "M", age: 68, residence: "सुपुर-मुंबई" },
        { name: "वीरेणभाई शिवलालजी हिरानी", gender: "M", age: 60, residence: "मालवाड़ा-मुंबई" },
        { name: "चंपकभाई मोहनलालजी मोरखया", gender: "M", age: 61, residence: "वातम-सूरत" },
        { name: "समीरभाई कालालजी शाह", gender: "M", age: 52, residence: "पिंडवाड़ा-अहमदाबाद" },
        { name: "शैलेभाई गौतमचंदजी संकलेचा", gender: "M", age: 49, residence: "रायपुर" },
        { name: "आशीषभाई राजजी सुराना", gender: "M", age: 44, residence: "रायपुर" },
        { name: "मयूरभाई मनहरभाई शाह", gender: "M", age: 42, residence: "सूरत" },
        { name: "हर्षिलभाई भेशभाई शाह", gender: "M", age: 34, residence: "जमनपुर-मुंबई" },
        { name: "जैनमकुमार निमिशभाई शाह", gender: "M", age: 27, residence: "बोटाड-मुंबई" },
        { name: "हर्षिलभाई चंपकभाई मोरखया", gender: "M", age: 26, residence: "वातम-सूरत" },
        { name: "ध्रुवकुमार कुमारभाई मनीयार", gender: "M", age: 22, residence: "भाभर-मुंबई" },
        { name: "प्रियलकुमार संजयभाई संघवी", gender: "M", age: 18, residence: "भाभर-मुंबई" },
        { name: "आयनकुमार आशीषभाई सुराना", gender: "M", age: 16, residence: "रायपुर" },
        { name: "जिनांग योगेशभाई शाह", gender: "M", age: 15, residence: "कुवाला-मुंबई" },
        { name: "आर्षकुमार आशीषभाई सुराना", gender: "M", age: 14, residence: "रायपुर" },
        { name: "वृकुमार रोहनभाई मुजपुरा", gender: "M", age: 14, residence: "भाभर-सूरत" },
        { name: "तनीषकुमार मोदभाई सोनिगारा", gender: "M", age: 13, residence: "रायपुर" }
    ];

    const femaleData = [
        { name: "सुजाताबेन राजेशभाई वोरा", gender: "F", age: 66, residence: "USA" },
        { name: "संगीताबेन संजयभाई शाह", gender: "F", age: 63, residence: "खेड़ा-USA" },
        { name: "लताबेन वीरेणभाई हिरानी", gender: "F", age: 55, residence: "मालवाड़ा-मुंबई" },
        { name: "प्रवीणबेन राकेशकुमार शाह", gender: "F", age: 53, residence: "आसेड़ा(डीसा)-मुंबई" },
        { name: "निशाबेन चंपकभाई मोरखया", gender: "F", age: 52, residence: "वातम-सूरत" },
        { name: "जिनप्राभाबेन बिपीनभाई गडा", gender: "F", age: 52, residence: "लाकडिया कुंवागड-मुंबई" },
        { name: "एकताबेन शैलेभाई संकलेचा", gender: "F", age: 47, residence: "रायपुर" },
        { name: "चिकाबेन समीरभाई शाह", gender: "F", age: 46, residence: "पिंडवाड़ा-अहमदाबाद" },
        { name: "रतुबेन आशीषभाई सुराना", gender: "F", age: 42, residence: "रायपुर" },
        { name: "रुपलबेन मयूरभाई शाह", gender: "F", age: 36, residence: "सूरत" },
        { name: "प्रियलबेन हर्षिलभाई शाह", gender: "F", age: 33, residence: "जमनपुर-मुंबई" },
        { name: "मिलकुमारी पारसमलजी दोषी", gender: "F", age: 30, residence: "हाडेचा-वडोदरा" },
        { name: "मोक्षीबेन धवलकुमार आकराणी", gender: "F", age: 29, residence: "खमत-भाभर" },
        { name: "इक्षितकुमारी अशोकभाई जैन", gender: "F", age: 28, residence: "उदयपुर" },
        { name: "प्रेरीकुमारी भरतभाई अजबानी", gender: "F", age: 27, residence: "धानेरा-सूरत" },
        { name: "साक्षीकुमारी नरभाई बैद", gender: "F", age: 27, residence: "नोखा(राजस्थान)-हिंगणघाट(Maharashtra)" },
        { name: "सुरभिकुमारी कपूरचंदजी भंसाली", gender: "F", age: 27, residence: "रायपुर" },
        { name: "अंजली कांतीलालजी भंसाली", gender: "F", age: 27, residence: "गढ़ सिवाना(राजस्थान)-पुणे" },
        { name: "हेत्वीकुमारी काशभाई ओवाल", gender: "F", age: 27, residence: "गढ़ सिवाना(राजस्थान)-चलथान(गुजरात)" },
        { name: "दीनीशाकुमारी भूपेंद्रजी कानूनगो(बोथरा)", gender: "F", age: 26, residence: "सुपुर-मुंबई" },
        { name: "संयमीकुमारी मयूरभाई दोषी", gender: "F", age: 23, residence: "दियोदर-मुंबई" },
        { name: "कान्ताकुमारी दिलीपभाई मेहता", gender: "F", age: 23, residence: "हाडेचा-मुंबई" },
    ];

    const femaleData2 = [
        { name: "प्राज्ञाकुमारी पुरुषोत्तमभाई शेठ", gender: "F", age: 23, residence: "थराद-सूरत" },
        { name: "खुशीकुमारी जितेशभाई मेहता", gender: "F", age: 22, residence: "माडका(वाव)-सूरत" },
        { name: "हनीकुमारी मनोजभाई राठौड़", gender: "F", age: 21, residence: "पिंडवाड़ा-सूरत" },
        { name: "मितव्याकुमारी हितेशभाई संघवी", gender: "F", age: 19, residence: "शेणवाल-सूरत" },
        { name: "प्रीयाकुमारी केशभाई संघवी", gender: "F", age: 19, residence: "भाभर-मुंबई" },
        { name: "आंशीकुमारी जितेशभाई मेहता", gender: "F", age: 19, residence: "माडका(वाव)-सूरत" },
        { name: "विरक्तिकुमारी जिगरभाई शाह", gender: "F", age: 18, residence: "आगलोड(गुजरात)-मुंबई" },
        { name: "दीयाकुमारी विजयभाई सेठ", gender: "F", age: 18, residence: "तीर्थगाम(बनासकांठा)-सूरत" },
        { name: "परीकुमारी मुकेशभाई धोखा", gender: "F", age: 17, residence: "झेरडा-पुणे" },
        { name: "ऋद्धाकुमारी पुरुषोत्तमभाई शेठ", gender: "F", age: 17, residence: "थराद-सूरत" },
        { name: "श्रेणिकुमारी केतनभाई रोलिया", gender: "F", age: 17, residence: "भाभर-मुंबई" },
        { name: "माईशाकुमारी रितेशभाई मेहता", gender: "F", age: 17, residence: "उज्जैन-मुंबई" },
        { name: "प्रियाकुमारी जितेशभाई फोफानी", gender: "F", age: 17, residence: "तेरवाड़ा-थरा" },
        { name: "श्रेयसीकुमारी किंजलभाई रोलिया(शाह)", gender: "F", age: 16, residence: "भाभर-मुंबई" },
        { name: "जैनीकुमारी मेलभाई संघवी", gender: "F", age: 15, residence: "शेणवाल-अहमदाबाद" },
        { name: "प्रांजलकुमारी कुनालभाई शाह", gender: "F", age: 14, residence: "काली(राजस्थान)-कोयंबतूर" },
        { name: "झीलकुमारी निर्तितनभाई संघवी", gender: "F", age: 14, residence: "भाभर" },
        { name: "मोक्षाकुमारी मयंकभाई रोलिया", gender: "F", age: 13, residence: "भाभर-मुंबई" },
        { name: "आर्याकुमारी अमितभाई रोलिया", gender: "F", age: 11, residence: "भाभर-सूरत" },
        { name: "जैनाकुमारी तुषारभाई भाभेरा", gender: "F", age: 11, residence: "दुनावाडा(पाटन)-सूरत" },
        { name: "धृतिकुमारी हर्षिलभाई शाह", gender: "F", age: 8, residence: "जमनपुर-मुंबई" },
        { name: "तत्वर्तीकुमारी समीरभाई शाह", gender: "F", age: 7, residence: "भांडोरा(बनासकांठा)-सूरत" }
    ];

    return (
        <div className="font-heading bg-white flex flex-col items-center justify-center relative overflow-hidden py-10">
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            <style jsx>{`
        .bg-grid-pattern {
          background-image: linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent);
          background-size: 50px 50px;
        }
      `}</style>

            <div className="relative inline-block w-full text-center my-6 px-4">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-300/40 via-red-200/40 to-pink-300/40 blur-xl"></div>

                <h2 className="relative text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-red-900 via-amber-700 to-red-900 bg-clip-text text-transparent py-2 leading-snug">
                    62 दीक्षार्थियों का विवरण
                </h2>
            </div>

            <div className="w-full space-y-6">
                <InfiniteMovingCards
                    items={maleData}
                    direction="left"
                    speed="slow"
                />

                <InfiniteMovingCards
                    items={femaleData}
                    direction="right"
                    speed="slow"
                />

                <InfiniteMovingCards
                    items={femaleData2}
                    direction="left"
                    speed="slow"
                />
            </div>
        </div>
    );
}