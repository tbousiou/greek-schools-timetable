import React from 'react'

/**
 * Renders a table displaying subjects and their weekly hours
 * @param {Object} props - Component props
 * @param {Array<{name: string, hours: number}>} props.data - Array of subject data objects
 * @param {string} [props.footerLabel="Σύνολο ωρών"] - Label for the footer total row
 * @returns {JSX.Element} Subject hours table
 */
export default function ClassTable({ data, footerLabel = "Σύνολο ωρών" }) {
  // Calculate total hours
  const totalHours = data.reduce((total, subject) => total + subject.hours, 0);
  
  return (
    <table className="min-w-full bg-white border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="py-2 px-4 border-b text-left">Μάθημα</th>
          <th className="py-2 px-4 border-b text-center">Ώρες</th>
        </tr>
      </thead>
      <tbody>
        {data.map((subject, index) => (
          <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
            <td className="py-2 px-4 border-b">{subject.name}</td>
            <td className="py-2 px-4 border-b text-center">{subject.hours}</td>
          </tr>
        ))}
        <tr className="bg-gray-100 font-semibold">
          <td className="py-2 px-4 border-b">{footerLabel}</td>
          <td className="py-2 px-4 border-b text-center">{totalHours}</td>
        </tr>
      </tbody>
    </table>
  )
}