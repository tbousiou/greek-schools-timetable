import React from 'react'

function SchoolHeader({ schoolName, references = [] }) {
    return (
        <div className="flex flex-col sm:flex-row justify-between items-start mb-6">
            <h1 className="text-2xl font-bold">Ωρολόγιο Πρόγραμμα {schoolName}</h1>

            <div className="mt-2 sm:mt-0 bg-gray-100 p-3 rounded-md">
                <h2 className="text-sm font-semibold mb-2">Πηγές (ΦΕΚ):</h2>
                {references.length > 0 ? (
                    <ul className="text-sm space-y-1">
                        {references.map((source, index) => (
                            <li key={index}>
                                <a
                                    href={source.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:underline"
                                >
                                    {source.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-sm text-gray-500 italic">Δεν υπάρχουν πηγές</p>
                )}
            </div>
        </div>
    )
}

export default SchoolHeader