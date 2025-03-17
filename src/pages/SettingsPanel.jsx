import React, { useState } from 'react';

function SettingsPanel() {
    const [selectedQuestion, setSelectedQuestion] = useState(null);

    const questions = [
        {
            id: 'passwordChange',
            question: 'How do I change my account password?',
            answer: 'Go to your profile settings and click "Change Password". Follow the instructions provided.'
        },
        {
            id: 'passwordReset',
            question: "How do I change my Account password in case I don't remember it?",
            answer: 'Click the "Forgot Password" link on the login page. Follow the instructions sent to your email address to reset your password.'
        },
        {
            id: 'emailChange',
            question: 'How do I change my email id?',
            answer: 'Go to your profile settings and click "Change Email". You will need to verify the new email address.'
        },
        {
            id: 'ipRestriction',
            question: 'How do I restrict my account access only to a particular IP range?',
            answer: 'This feature is not currently available.  Contact support for assistance.'
        },
        {
            id: 'accountClosure',
            question: 'How do I close my account?',
            answer: 'Go to your profile settings and click "Close Account". You will be asked to confirm your decision.'
        }
    ];

    const handleQuestionClick = (id) => {
        setSelectedQuestion(id);
    };

    const selectedAnswer = questions.find((q) => q.id === selectedQuestion)?.answer || null;

    return (
        <div className="bg-white shadow-md rounded-md p-6"> {/* Panel container: background, shadow, rounded, padding */}
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">My Account Settings</h2> {/* Heading: Size, weight, margin, color */}
            <ul className="space-y-2"> {/* Question list: spacing between list items */}
                {questions.map((q) => (
                    <li
                        key={q.id}
                        onClick={() => handleQuestionClick(q.id)}
                        className={`cursor-pointer p-3 rounded-md hover:bg-gray-100 transition-colors duration-200 ${selectedQuestion === q.id ? 'bg-blue-100 text-blue-700' : 'text-gray-700'}`}
                    >
                        {q.question}
                    </li>
                ))}
            </ul>
            <div className="mt-4 p-4 border rounded-md bg-gray-50"> {/* Answer area: margin top, padding, border, rounded, background */}
                {selectedAnswer ? (
                    <p className="text-gray-700">{selectedAnswer}</p>
                ) : (
                    <p className="text-gray-500">Click a question to see the answer.</p> 
                )}
            </div>
        </div>
    );
}

export default SettingsPanel;