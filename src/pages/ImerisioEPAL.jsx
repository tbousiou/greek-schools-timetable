import React, { useState } from 'react'
import ClassTable from '../components/ClassTable.jsx'

// Μαθήματα Γενικής Παιδείας Α' τάξης Ημερησίου ΕΠΑΛ
const coreSubjectsA = [
  { name: "Νέα Ελληνικά", hours: 4 },
  { name: "Μαθηματικά - Άλγεβρα", hours: 3 },
  { name: "Μαθηματικά - Γεωμετρία", hours: 1 },
  { name: "Φυσικές Επιστήμες - Φυσική", hours: 2 },
  { name: "Φυσικές Επιστήμες - Χημεία", hours: 1 },
  { name: "Φυσικές Επιστήμες - Βιολογία", hours: 1 },
  { name: "Πολιτική Παιδεία", hours: 2 },
  { name: "Ιστορία", hours: 1 },
  { name: "Θρησκευτικά", hours: 1 },
  { name: "Ξένη Γλώσσα (Αγγλικά)", hours: 2 },
  { name: "Φυσική Αγωγή", hours: 2 },
  { name: "Πληροφορική", hours: 2 }
];

// Μαθήματα Προσανατολισμού Α' τάξης Ημερησίου ΕΠΑΛ
const orientationSubjectsA = [
  { name: "Ερευνητική Εργασία στην Τεχνολογία", hours: 2 },
  { name: "Σχολικός Επαγγελματικός Προσανατολισμός - Ασφάλεια και Υγεία στο χώρο εργασίας", hours: 2 },
  { name: "Ζώνη Δημιουργικών Δραστηριοτήτων", hours: 3 }
];

// Μαθήματα Επιλογής Α' τάξης Ημερησίου ΕΠΑΛ
const optionalSubjectsA = [
  { name: "Αγωγή Υγείας", hours: 2 },
  { name: "Αρχές Γραμμικού και Αρχιτεκτονικού Σχεδίου", hours: 2, type: "Σχεδιαστικό" },
  { name: "Αρχές Ηλεκτρολογίας και Ηλεκτρονικής", hours: 2 },
  { name: "Αρχές Μηχανολογίας", hours: 2 },
  { name: "Αρχές Οικονομίας", hours: 2 },
  { name: "Βασικές Αρχές Σύνθεσης", hours: 2, type: "Σχεδιαστικό" },
  { name: "Γεωπονία και Αειφόρος Ανάπτυξη", hours: 2 },
  { name: "Ναυτιλιακές Γνώσεις", hours: 2 }
];


// Μαθήματα Γενικής Παιδείας Β' τάξης Ημερησίου ΕΠΑΛ
const coreSubjectsB = [
  { name: "Νέα Ελληνικά", hours: 3 },
  { name: "Μαθηματικά - Άλγεβρα", hours: 2 },
  { name: "Μαθηματικά - Γεωμετρία", hours: 1 },
  { name: "Φυσικές Επιστήμες - Φυσική", hours: 1 },
  { name: "Φυσικές Επιστήμες - Χημεία", hours: 1 },
  { name: "Θρησκευτικά", hours: 1 },
  { name: "Ξένη Γλώσσα (Αγγλικά)", hours: 1 },
  { name: "Εισαγωγή στις Αρχές της Επιστήμης των Η/Υ", hours: 1 },
  { name: "Φυσική Αγωγή", hours: 1 }
];

// Τεχνολογικά-Επαγγελματικά μαθήματα ανά τομέα της Β' τάξης Ημερησίου ΕΠΑΛ

// 1. ΤΟΜΕΑΣ ΓΕΩΠΟΝΙΑΣ, ΤΡΟΦΙΜΩΝ ΚΑΙ ΠΕΡΙΒΑΛΛΟΝΤΟΣ
const agriculturalSubjectsB = [
  { name: "Αρχές Αγροτικής Ανάπτυξης", hours: 2, type: "Θεωρητικό", theory: 2 },
  { name: "Περιβάλλον και Γεωργία", hours: 3, type: "Μικτό", theory: 1, lab: 2 },
  { name: "Φυτική Παραγωγή", hours: 5, type: "Μικτό", theory: 2, lab: 3 },
  { name: "Ζωική Παραγωγή", hours: 3, type: "Μικτό", theory: 2, lab: 1 },
  { name: "Τεχνολογία Τροφίμων", hours: 4, type: "Μικτό", theory: 2, lab: 2 },
  { name: "Αρχές Αρχιτεκτονικής Τοπίου", hours: 2, type: "Μικτό", theory: 1, lab: 1 },
  { name: "Στοιχεία Γεωργικών Εγκαταστάσεων και Γεωργικά Μηχανήματα", hours: 3, type: "Μικτό", theory: 2, lab: 1 },
  { name: "Αγγλικά Τομέα", hours: 1, type: "Θεωρητικό" }
];

// 2. ΤΟΜΕΑΣ ΔΙΟΙΚΗΣΗΣ ΚΑΙ ΟΙΚΟΝΟΜΙΑΣ
const managementSubjectsB = [
  { name: "Αρχές Λογιστικής", hours: 6, type: "Μικτό", theory: 3, lab: 3 },
  { name: "Εισαγωγή στο Μάρκετινγκ", hours: 2, type: "Θεωρητικό" },
  { name: "Θεωρία Τουρισμού και Εφαρμογές", hours: 3, type: "Εργαστηριακό" },
  { name: "Εισαγωγή στην Εφοδιαστική (Logistics)", hours: 2, type: "Θεωρητικό" },
  { name: "Χρηματοπιστωτικές Συναλλαγές-Λογιστικά Φύλλα (EXCEL)", hours: 2, type: "Εργαστηριακό" },
  { name: "Στοιχεία Δικαίου (Αστικό-Εμπορικό-Εργατικό-Τουριστικό)", hours: 4, type: "Θεωρητικό" },
  { name: "Οικονομικά Μαθηματικά και Στατιστική", hours: 2, type: "Θεωρητικό" },
  { name: "Αγγλικά Τομέα", hours: 2, type: "Θεωρητικό" }
];

// 3. ΤΟΜΕΑΣ ΔΟΜΙΚΩΝ ΕΡΓΩΝ, ΔΟΜΗΜΕΝΟΥ ΠΕΡΙΒΑΛΛΟΝΤΟΣ ΚΑΙ ΑΡΧΙΤΕΚΤΟΝΙΚΟΥ ΣΧΕΔΙΑΣΜΟΥ
const constructionSubjectsB = [
  { name: "Οικοδομικό Σχέδιο", hours: 4, type: "Σχεδιαστικό" },
  { name: "Τοπογραφία", hours: 5, type: "Μικτό", theory: 2, lab: 3 },
  { name: "Τοπογραφικό Σχέδιο - Ψηφιακή Χαρτογραφία", hours: 3, type: "Εργαστηριακό" },
  { name: "Κτιριακά Έργα και Δομικά Υλικά", hours: 4, type: "Μικτό", theory: 2, lab: 2 },
  { name: "Σχέδιο Δομικών Έργων με χρήση Η/Υ Ι", hours: 4, type: "Εργαστηριακό" },
  { name: "Δομημένο Περιβάλλον και Πολεοδομικές Εφαρμογές", hours: 2, type: "Θεωρητικό" },
  { name: "Αγγλικά Τομέα", hours: 1, type: "Θεωρητικό" }
];

// 4. ΤΟΜΕΑΣ ΕΦΑΡΜΟΣΜΕΝΩΝ ΤΕΧΝΩΝ
const appliedArtsSubjectsB = [
  { name: "Ελεύθερο Σχέδιο", hours: 4, type: "Σχεδιαστικό" },
  { name: "Γραμμικό Σχέδιο", hours: 3, type: "Σχεδιαστικό" },
  { name: "Ιστορία της Τέχνης", hours: 3, type: "Θεωρητικό" },
  { name: "Αρχές Σύνθεσης", hours: 3, type: "Εργαστηριακό" },
  { name: "Εφαρμοσμένες Τέχνες με χρήση Η/Υ", hours: 5, type: "Εργαστηριακό" },
  { name: "Ειδικό Εργαστηριακό Μάθημα", hours: 5, type: "Εργαστηριακό" }
];

// 5. ΤΟΜΕΑΣ ΗΛΕΚΤΡΟΛΟΓΙΑΣ, ΗΛΕΚΤΡΟΝΙΚΗΣ ΚΑΙ ΑΥΤΟΜΑΤΙΣΜΟΥ
const electricalSubjectsB = [
  { name: "Ηλεκτροτεχνία (Κυκλώματα Συνεχούς και Εναλλασσόμενου Ρεύματος)", hours: 4, type: "Μικτό", theory: 2, lab: 2 },
  { name: "Εσωτερικές Ηλεκτρικές Εγκαταστάσεις και Ηλεκτρολογικό Σχέδιο", hours: 7, type: "Μικτό", theory: 2, lab: 5 },
  { name: "Εισαγωγή στα Υπολογιστικά Συστήματα και στα Δίκτυα Επικοινωνιών", hours: 3, type: "Εργαστηριακό" },
  { name: "Αυτοματισμοί, Αισθητήρες", hours: 2, type: "Εργαστηριακό" },
  { name: "Αναλογικά και Ψηφιακά Ηλεκτρονικά", hours: 6, type: "Μικτό", theory: 2, lab: 4 },
  { name: "Αγγλικά Τομέα", hours: 1, type: "Θεωρητικό" }
];

// 6. ΤΟΜΕΑΣ ΜΗΧΑΝΟΛΟΓΙΑΣ
const mechanicalSubjectsB = [
  { name: "Στοιχεία Τεχνικής Θερμοδυναμικής - Εφαρμογές", hours: 6, type: "Μικτό", theory: 3, lab: 3 },
  { name: "Μηχανική-Αντοχή Υλικών", hours: 2, type: "Θεωρητικό" },
  { name: "Σχεδιασμός και Περιγραφή Στοιχείων Μηχανών", hours: 3, type: "Εργαστηριακό" },
  { name: "Τεχνολογία Μηχανολογικών Κατασκευών-Εφαρμογές", hours: 7, type: "Μικτό", theory: 2, lab: 5 },
  { name: "Βασική Ηλεκτρολογία και Εφαρμογές", hours: 4, type: "Μικτό", theory: 2, lab: 2 },
  { name: "Αγγλικά Τομέα", hours: 1, type: "Θεωρητικό" }
];

// 7. ΤΟΜΕΑΣ ΠΛΗΡΟΦΟΡΙΚΗΣ
const computerScienceSubjectsB = [
  { name: "Αρχές Προγραμματισμού Υπολογιστών", hours: 4, type: "Μικτό", theory: 1, lab: 3 },
  { name: "Υλικό και Δίκτυα Υπολογιστών", hours: 4, type: "Μικτό", theory: 2, lab: 2 },
  { name: "Βασικά Θέματα Πληροφορικής", hours: 4, type: "Μικτό", theory: 2, lab: 2 },
  { name: "Λειτουργικά Συστήματα και Ασφάλεια Πληροφοριακών Συστημάτων", hours: 3, type: "Μικτό", theory: 1, lab: 2 },
  { name: "Σχεδιασμός και Ανάπτυξη Ιστοτόπων", hours: 4, type: "Εργαστηριακό" },
  { name: "Τεχνικά Θέματα Πωλήσεων και Προδιαγραφών Υλικού και Λογισμικού", hours: 3, type: "Μικτό", theory: 1, lab: 2 },
  { name: "Αγγλικά Τομέα", hours: 1, type: "Θεωρητικό" }
];

// 8. ΤΟΜΕΑΣ ΥΓΕΙΑΣ-ΠΡΟΝΟΙΑΣ-ΕΥΕΞΙΑΣ
const healthSubjectsB = [
  { name: "Ανατομία-Φυσιολογία Ι", hours: 3, type: "Θεωρητικό" },
  { name: "Πρώτες Βοήθειες", hours: 2, type: "Εργαστηριακό" },
  { name: "Υγεία και Διατροφή", hours: 2, type: "Θεωρητικό" },
  { name: "Διαπροσωπικές Σχέσεις", hours: 2, type: "Θεωρητικό" },
  { name: "Εργασιακό Περιβάλλον Τομέα", hours: 2, type: "Εργαστηριακό" },
  { name: "Αγγλικά Τομέα", hours: 2, type: "Θεωρητικό" },
  { name: "Ειδικό Μάθημα Α", hours: 5, type: "Μικτό" },
  { name: "Ειδικό Μάθημα Β", hours: 5, type: "Μικτό" }
];






function ImerisioEPAL() {
  // State for active sector in B class
  const [activeSectorB, setActiveSectorB] = useState('agriculture');

  // Map of sector IDs to their data and names
  const sectorDataB = {
    agriculture: {
      name: "ΤΟΜΕΑΣ ΓΕΩΠΟΝΙΑΣ, ΤΡΟΦΙΜΩΝ ΚΑΙ ΠΕΡΙΒΑΛΛΟΝΤΟΣ",
      data: agriculturalSubjectsB
    },
    management: {
      name: "ΤΟΜΕΑΣ ΔΙΟΙΚΗΣΗΣ ΚΑΙ ΟΙΚΟΝΟΜΙΑΣ",
      data: managementSubjectsB
    },
    construction: {
      name: "ΤΟΜΕΑΣ ΔΟΜΙΚΩΝ ΕΡΓΩΝ, ΔΟΜΗΜΕΝΟΥ ΠΕΡΙΒΑΛΛΟΝΤΟΣ ΚΑΙ ΑΡΧΙΤΕΚΤΟΝΙΚΟΥ ΣΧΕΔΙΑΣΜΟΥ",
      data: constructionSubjectsB
    },
    appliedArts: {
      name: "ΤΟΜΕΑΣ ΕΦΑΡΜΟΣΜΕΝΩΝ ΤΕΧΝΩΝ",
      data: appliedArtsSubjectsB
    },
    electrical: {
      name: "ΤΟΜΕΑΣ ΗΛΕΚΤΡΟΛΟΓΙΑΣ, ΗΛΕΚΤΡΟΝΙΚΗΣ ΚΑΙ ΑΥΤΟΜΑΤΙΣΜΟΥ",
      data: electricalSubjectsB
    },
    mechanical: {
      name: "ΤΟΜΕΑΣ ΜΗΧΑΝΟΛΟΓΙΑΣ",
      data: mechanicalSubjectsB
    },
    computerScience: {
      name: "ΤΟΜΕΑΣ ΠΛΗΡΟΦΟΡΙΚΗΣ",
      data: computerScienceSubjectsB
    },
    health: {
      name: "ΤΟΜΕΑΣ ΥΓΕΙΑΣ-ΠΡΟΝΟΙΑΣ-ΕΥΕΞΙΑΣ",
      data: healthSubjectsB
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Ημερήσιο Επαγγελματικό Λύκειο (ΕΠΑΛ)</h1>
      
      {/* Class A Section */}
      <h2 className="text-xl font-semibold mb-4">Ωρολόγιο Πρόγραμμα Α' Τάξης</h2>
      
      {/* Core Subjects A */}
      <h3 className='text-lg font-semibold mb-2'>Μαθήματα Γενικής Παιδείας</h3>
      <div className="overflow-x-auto mb-8">
        <ClassTable data={coreSubjectsA} />
      </div>
      
      {/* Orientation Subjects A */}
      <h3 className='text-lg font-semibold mb-2'>Μαθήματα Προσανατολισμού</h3>
      <div className="overflow-x-auto mb-8">
        <ClassTable data={orientationSubjectsA} />
      </div>
      
      {/* Optional Subjects A */}
      <h3 className='text-lg font-semibold mb-2'>Μαθήματα Επιλογής (Επιλέγεται 1)</h3>
      <div className="overflow-x-auto mb-8">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b text-left">α/α</th>
              <th className="py-2 px-4 border-b text-left">Μάθημα</th>
              <th className="py-2 px-4 border-b text-center">Ώρες</th>
              <th className="py-2 px-4 border-b text-center">Τύπος</th>
            </tr>
          </thead>
          <tbody>
            {optionalSubjectsA.map((subject, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                <td className="py-2 px-4 border-b">{index + 1}</td>
                <td className="py-2 px-4 border-b">{subject.name}</td>
                <td className="py-2 px-4 border-b text-center">{subject.hours}</td>
                <td className="py-2 px-4 border-b text-center">{subject.type || "Θεωρητικό"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Class B Section */}
      <h2 className="text-xl font-semibold mb-4 mt-8">Ωρολόγιο Πρόγραμμα Β' Τάξης</h2>
      
      {/* Core Subjects B */}
      <h3 className='text-lg font-semibold mb-2'>Μαθήματα Γενικής Παιδείας</h3>
      <div className="overflow-x-auto mb-8">
        <ClassTable data={coreSubjectsB} />
      </div>
      
      {/* Sector Selection Tabs */}
      <h3 className='text-lg font-semibold mb-2'>Τεχνολογικά-Επαγγελματικά Μαθήματα Τομέων</h3>
      <div className="mb-4">
        <p className="text-sm text-gray-600 mb-2">Επιλέξτε έναν τομέα για να δείτε τα μαθήματά του:</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {Object.entries(sectorDataB).map(([key, sector]) => (
            <button
              key={key}
              onClick={() => setActiveSectorB(key)}
              className={`py-2 px-4 rounded text-sm ${
                activeSectorB === key 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              {sector.name.split(' ')[1]}
            </button>
          ))}
        </div>
      </div>
      
      {/* Active Sector Subjects */}
      <div className="overflow-x-auto mb-8">
        <h4 className="font-semibold mb-2">{sectorDataB[activeSectorB].name}</h4>
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b text-left">α/α</th>
              <th className="py-2 px-4 border-b text-left">Μάθημα</th>
              <th className="py-2 px-4 border-b text-center">Ώρες</th>
              <th className="py-2 px-4 border-b text-center">Τύπος</th>
              {activeSectorB && sectorDataB[activeSectorB].data.some(subject => subject.theory) && (
                <>
                  <th className="py-2 px-4 border-b text-center">Θεωρία</th>
                  <th className="py-2 px-4 border-b text-center">Εργαστήριο</th>
                </>
              )}
            </tr>
          </thead>
          <tbody>
            {sectorDataB[activeSectorB].data.map((subject, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                <td className="py-2 px-4 border-b">{index + 1}</td>
                <td className="py-2 px-4 border-b">{subject.name}</td>
                <td className="py-2 px-4 border-b text-center">{subject.hours}</td>
                <td className="py-2 px-4 border-b text-center">{subject.type}</td>
                {activeSectorB && sectorDataB[activeSectorB].data.some(subject => subject.theory) && (
                  <>
                    <td className="py-2 px-4 border-b text-center">{subject.theory || "-"}</td>
                    <td className="py-2 px-4 border-b text-center">{subject.lab || "-"}</td>
                  </>
                )}
              </tr>
            ))}
            <tr className="bg-gray-100 font-semibold">
              <td colSpan={activeSectorB && sectorDataB[activeSectorB].data.some(subject => subject.theory) ? 3 : 2} className="py-2 px-4 border-b text-right">
                Σύνολο ωρών
              </td>
              <td className="py-2 px-4 border-b text-center">
                {sectorDataB[activeSectorB].data.reduce((total, subject) => total + subject.hours, 0)}
              </td>
              {activeSectorB && sectorDataB[activeSectorB].data.some(subject => subject.theory) && (
                <>
                  <td className="py-2 px-4 border-b text-center">
                    {sectorDataB[activeSectorB].data.reduce((total, subject) => total + (subject.theory || 0), 0)}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    {sectorDataB[activeSectorB].data.reduce((total, subject) => total + (subject.lab || 0), 0)}
                  </td>
                </>
              )}
            </tr>
          </tbody>
        </table>
      </div>
      
      {/* Footer Notes */}
      <div className="mt-8 text-sm text-gray-600">
        <p className="mb-2">* Τα μαθήματα τύπου "Μικτό" περιλαμβάνουν τόσο θεωρητικό όσο και εργαστηριακό μέρος.</p>
        <p className="mb-2">* Η Β' τάξη ΕΠΑΛ χωρίζεται σε 8 τομείς επαγγελματικής εξειδίκευσης.</p>
        <p>* Στην Α' τάξη οι μαθητές επιλέγουν 1 από τα 8 μαθήματα επιλογής.</p>
      </div>
    </div>
  )
}

export default ImerisioEPAL