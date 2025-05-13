import React from 'react'

/**
 * Renders a table displaying subjects and their weekly hours across multiple classes
 * @param {Object} props - Component props
 * @param {Array<string>} props.classList - Array of class names to display as columns
 * @param {Array<{name: string, hours: Array<number|null>}>} props.subjects - Array of subjects with hours for each class
 * @param {string} [props.footerLabel="Σύνολο ωρών"] - Label for the footer total row
 * @returns {JSX.Element} Multi-class curriculum table
 */
function MultiClassTable({ classList, subjects, footerLabel = "Σύνολο ωρών" }) {
  // Calculate total hours for each class
  const totalHours = subjects.reduce(
    (totals, subject) => {
      subject.hours.forEach((hours, index) => {
        if (hours !== null) {
          totals[index] += hours;
        }
      });
      return totals;
    },
    Array(classList.length).fill(0) // Initialize with zeros for each class
  );

  return (
    <table className="min-w-full bg-white border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="py-2 px-4 border-b text-left">Μάθημα</th>
          {classList.map((className, index) => (
            <th key={index} className="py-2 px-4 border-b text-center">
              {className} Τάξη
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {subjects.map((subject, index) => (
          <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
            <td className="py-2 px-4 border-b">{subject.name}</td>
            {subject.hours.map((hours, hourIdx) => (
              <td key={hourIdx} className="py-2 px-4 border-b text-center">
                {hours !== null ? hours : "-"}
              </td>
            ))}
          </tr>
        ))}
        <tr className="bg-gray-100 font-semibold">
          <td className="py-2 px-4 border-b">{footerLabel}</td>
          {totalHours.map((total, index) => (
            <td key={index} className="py-2 px-4 border-b text-center">
              {total}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  )
}

export default MultiClassTable