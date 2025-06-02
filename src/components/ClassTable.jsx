import React from 'react'

/**
 * Renders a table displaying subjects and their weekly hours
 * @param {Object} props - Component props
 * @param {Array<{name: string, hours: number|[number,number]}>} props.data - Subject data
 * @param {Object} [props.options] - Display options
 * @param {boolean} [props.options.showIndex=true] - Show index column
 * @param {boolean} [props.options.showTotal=true] - Show total hours row
 * @param {boolean} [props.options.showNotes=false] - Show notes column if available
 * @param {string} [props.footerLabel="Σύνολο ωρών"] - Label for the total row
 * @returns {JSX.Element} Subject hours table
 */
export default function ClassTable({
  data,
  options = {
    showIndex: true,
    showTotal: true,
    showNotes: false
  },
  footerLabel = "Σύνολο ωρών"
}) {
  // Format hours for display
  // const formatHours = (hours) => {
  //   if (Array.isArray(hours)) {
  //     const [theory, lab] = hours;
  //     let result = [];
  //     if (theory > 0) result.push(`${theory}Θ`);
  //     if (lab > 0) result.push(`${lab}Ε`);
  //     return result.join(' + ');
  //   }
  //   return hours;
  // };

  const formatHours = (hours, hoursBreakdown) => {
    if (hoursBreakdown) {
      return `${hours} (${hoursBreakdown})`;
    }

    return hours;
  };

  /**
  * Formats subject names by making the subject group (text before colon) bold
  * @param {string} subjectName - The subject name, possibly containing a group and specific subject
  * @returns {JSX.Element|string} Formatted subject name with group in bold if applicable
  */
  const formatSubject = (subjectName) => {
    if (!subjectName.includes(':')) {
      return subjectName;
    }

    const [group, subject] = subjectName.split(':').map(part => part.trim());

    return (
      <>
        <span className='font-medium'>{group}</span>: {subject}
      </>
    );
  };

  // Calculate total hours
  const calculateTotalHours = () => {
    return data.reduce((sum, subject) => {
      if (Array.isArray(subject.hours)) {
        return sum + subject.hours[0] + subject.hours[1];
      }
      return sum + subject.hours;
    }, 0);
  };

  const totalHours = calculateTotalHours();

  return (
    <table className="min-w-full bg-white border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          {options.showIndex && <th className="py-2 px-4 border-b text-left">α/α</th>}
          <th className="py-2 px-4 border-b text-left">Μάθημα</th>
          <th className="py-2 px-4 border-b text-center">Ώρες</th>
          {options.showNotes && <th className="py-2 px-4 border-b text-center">Σημειώσεις</th>}
        </tr>
      </thead>
      <tbody>
        {data.map((subject, index) => (
          <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
            {options.showIndex && <td className="py-2 px-4 border-b">{index + 1}</td>}
            <td className="py-2 px-4 border-b">{formatSubject(subject.name)}</td>
            <td className="py-2 px-4 border-b text-center">{formatHours(subject.hours, subject.hoursBreakdown)}</td>
            {options.showNotes && <td className="py-2 px-4 border-b text-center">{subject.notes || ''}</td>}
          </tr>
        ))}
        {options.showTotal && (
          <tr className="bg-gray-100 font-semibold">
            <td colSpan={options.showIndex ? 2 : 1} className="py-2 px-4 border-b text-right">{footerLabel}</td>
            <td className="py-2 px-4 border-b text-center">{totalHours}</td>
            {options.showNotes && <td className="py-2 px-4 border-b"></td>}
          </tr>
        )}
      </tbody>
    </table>
  );
}