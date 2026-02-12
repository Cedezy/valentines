import React, { useState } from 'react';
import flower from './assets/flower.png';

const App = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });
    const [showSweet, setShowSweet] = useState(false);
    const [giftOpened, setGiftOpened] = useState(false);

    const moveNoButton = () => {
        const newX = Math.random() * 200 - 100;
        const newY = Math.random() * 200 - 100;
        setButtonPosition({ x: newX, y: newY });
    };

    const handleYes = () => {
        setShowSweet(true);
    };

    const nextPage = () => {
        if (currentPage < 2) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
            setShowSweet(false);
            setGiftOpened(false);
        }
    };

    const openGift = () => {
        setGiftOpened(true);
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-2 sm:p-4 bg-gradient-to-br from-pink-100 via-red-50 to-purple-100">
            <div className="relative w-full max-w-2xl">
                <div className="bg-white rounded-lg shadow-2xl w-full min-h-[500px] sm:min-h-[400px] p-6 sm:p-8 md:p-12 relative overflow-hidden border-2 sm:border-4 border-red-200">
                    <div className="absolute top-2 sm:top-4 left-2 sm:left-4 text-red-300 text-xl sm:text-2xl animate-pulse">💕</div>
                    <div className="absolute top-2 sm:top-4 right-2 sm:right-4 text-pink-300 text-xl sm:text-2xl animate-pulse">💖</div>
                    <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 text-pink-400 text-xl sm:text-2xl animate-pulse">💗</div>
                    <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 text-red-400 text-xl sm:text-2xl animate-pulse">💝</div>

                    <div className="h-full flex flex-col items-center justify-center text-center px-2 sm:px-0">
                        {currentPage === 0 && (
                            <div className="animate-fadeIn">
                                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-500 mb-4 sm:mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                                    Hi, Happy Valentine's Day! 💌
                                </h1>
                                <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 leading-relaxed px-4">
                                    This is a special message just for you...
                                </p>
                                <button onClick={nextPage}
                                    className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2.5 px-6 sm:py-3 sm:px-8 rounded-full shadow-lg transition-all transform hover:scale-105 text-sm sm:text-base cursor-pointer">
                                    Next →
                                </button>
                            </div>
                        )}

                        {currentPage === 1 && (
                            <div className="animate-fadeIn">
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-pink-600 mb-4 sm:mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                                    You Make My Heart Smile 💗
                                </h2>
                                <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4 leading-relaxed max-w-md px-4">
                                    Every moment with you is like a beautiful dream. Your smile brightens my day,
                                    and your laughter is my favorite melody. You are the sweetest part of my life.
                                </p>
                                <div className="flex gap-3 sm:gap-4 mt-6 sm:mt-8">
                                    <button onClick={prevPage}
                                        className="bg-gray-400 hover:bg-gray-500 text-white font-semibold py-2.5 px-4 sm:py-3 sm:px-6 rounded-full shadow-lg transition-all transform hover:scale-105 text-sm sm:text-base cursor-pointer">
                                        ← Back
                                    </button>
                                    <button onClick={nextPage}
                                        className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2.5 px-4 sm:py-3 sm:px-6 rounded-full shadow-lg transition-all transform hover:scale-105 text-sm sm:text-base cursor-pointer">
                                        Next →
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* The Question - First */}
                        {currentPage === 2 && !showSweet && (
                            <div className="animate-fadeIn">
                                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-red-600 mb-4 sm:mb-6 px-2" style={{ fontFamily: 'Georgia, serif' }}>
                                    Will You Be My Valentine? 💘
                                </h2>
                                
                                <div className="flex gap-4 sm:gap-6 mt-4 sm:mt-8 justify-center items-center relative">
                                    <button
                                        onClick={handleYes}
                                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 sm:py-4 sm:px-12 rounded-full shadow-lg transition-all transform hover:scale-110 text-base sm:text-xl cursor-pointer"
                                    >
                                        Yes! 💚
                                    </button>
                                    <button
                                        onClick={moveNoButton}
                                        style={{
                                        transform: `translate(${buttonPosition.x}px, ${buttonPosition.y}px)`,
                                        transition: 'transform 0.3s ease'
                                        }}
                                        className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-3 px-8 sm:py-4 sm:px-12 rounded-full shadow-lg text-base sm:text-xl cursor-pointer"
                                    >
                                        No
                                    </button>
                                </div>
                                <button
                                    onClick={prevPage}
                                    className="mt-6 sm:mt-8 bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 px-5 sm:px-6 rounded-full shadow transition-all text-sm sm:text-base cursor-pointer"
                                    >
                                    ← Back
                                </button>
                            </div>
                        )}

                        {/* Gift Box - After Clicking Yes */}
                        {currentPage === 2 && showSweet && !giftOpened && (
                            <div className="animate-fadeIn">
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-pink-600 px-2" style={{ fontFamily: 'Georgia, serif' }}>
                                    Yay! You Said Yes! 🥰
                                </h2>
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-pink-600 mb-6 sm:mb-8" style={{ fontFamily: 'Georgia, serif' }}>
                                    I Have a Surprise for You! 🎁
                                </h2>
                                <div 
                                    onClick={openGift}
                                    className="gift-box cursor-pointer transform hover:scale-110 transition-all duration-300 my-8"
                                >
                                    <div className="gift-container relative">
                                        {/* Gift Box */}
                                        <div className="box bg-gradient-to-br from-red-400 to-red-600 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-lg shadow-2xl mx-auto relative animate-bounce-slow">
                                            {/* Ribbon Vertical */}
                                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-6 sm:w-8 h-full bg-yellow-300 shadow-md"></div>
                                            {/* Ribbon Horizontal */}
                                            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full h-6 sm:h-8 bg-yellow-300 shadow-md"></div>
                                            {/* Bow */}
                                            <div className="absolute -top-6 sm:-top-8 left-1/2 transform -translate-x-1/2">
                                                <div className="text-5xl sm:text-6xl md:text-7xl">🎀</div>
                                            </div>
                                            {/* Sparkles */}
                                            <div className="absolute -top-2 -left-2 text-2xl animate-ping">✨</div>
                                            <div className="absolute -top-2 -right-2 text-2xl animate-ping" style={{ animationDelay: '0.5s' }}>✨</div>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-base sm:text-lg text-gray-600 mt-6 animate-pulse font-semibold">
                                    👆 Click to open your gift! 👆
                                </p>
                            </div>
                        )}

                        {/* Sweet Message After Opening Gift */}
                        {currentPage === 2 && showSweet && giftOpened && (
                            <div className="animate-fadeIn">
                                <div className="text-5xl sm:text-6xl md:text-7xl animate-bounce mb-4">🎉💖🎊</div>
                                
                                <img className="w-32 sm:w-40 md:w-48 mx-auto mb-4" src={flower} alt="flower" />
                                <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-3 sm:mb-4 leading-relaxed px-4 font-bold">
                                    BULAK OH DAWATA HIHI
                                </p>
                                <div className="mt-6 sm:mt-8 text-5xl sm:text-6xl animate-pulse">
                                    ❤️
                                </div>
                            </div>
                        )}
                    </div>

                    
                </div>
            </div>

            <style jsx>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.6s ease-out;
                }
                @keyframes bounce-slow {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-10px);
                    }
                }
                .animate-bounce-slow {
                    animation: bounce-slow 2s infinite;
                }
            `}</style>
        </div>
    );
}

export default App