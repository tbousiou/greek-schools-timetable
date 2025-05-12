import React from 'react'

// Restructured data format
const subjects = [
  { name: "Γλωσσική Διδασκαλία", hours: [3, 2, 2] },
  { name: "Νεοελληνική Λογοτεχνία", hours: [2, 2, 2] },
  { name: "Αρχαία Ελληνική Γλώσσα", hours: [2, 2, 2] },
  { name: "Αρχαία Ελληνικά Κείμενα από Μετάφραση", hours: [2, 2, 2] },
  { name: "Μαθηματικά", hours: [4, 4, 4] },
  { name: "Φυσική", hours: [1, 2, 2] },
  { name: "Χημεία", hours: [null, 1, 1] },
  { name: "Βιολογία", hours: [1, 1, 1] },
  { name: "Γεωλογία - Γεωγραφία", hours: [1, 2, null] },
  { name: "Ιστορία", hours: [2, 2, 2] },
  { name: "Θρησκευτικά", hours: [2, 2, 2] },
  { name: "Αγγλικά", hours: [2, 2, 2] },
  { name: "2η Ξένη Γλώσσα*", hours: [2, 2, 2] },
  { name: "Κοινωνική και Πολιτική Αγωγή", hours: [null, null, 3] },
  { name: "Οικιακή Οικονομία", hours: [1, null, null] },
  { name: "Φυσική Αγωγή", hours: [2, 2, 2] },
  { name: "Τεχνολογία", hours: [1, 1, 1] },
  { name: "Πληροφορική", hours: [2, 1, 1] },
  { name: "Μουσική", hours: [1, 1, 1] },
  { name: "Καλλιτεχνικά", hours: [1, 1, 1] },
  { name: "Εργαστήριο Δεξιοτήτων", hours: [1, 1, 1] }
];


// Class names for each column
const classList = ["Α'", "Β'", "Γ'"];

export default function ImerisioGenikoLikio() {
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
    [0, 0, 0] // Initialize with zeros for each class
  );
  
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Ημερήσιο Γενικό Λύκειο</h1>
      <h2 className="text-xl font-semibold mb-4">Ωρολόγιο Πρόγραμμα</h2>
      
      <div className="overflow-x-auto">
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
              <td className="py-2 px-4 border-b">Σύνολο ωρών</td>
              {totalHours.map((total, index) => (
                <td key={index} className="py-2 px-4 border-b text-center">
                  {total}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
      
      <p className="mt-4 text-sm text-gray-600">
        * Η 2η ξένη γλώσσα επιλέγεται μεταξύ Γαλλικών, Γερμανικών και Ιταλικών.
      </p>
    </div>
  )
}