import React, { useState } from 'react'
import ClassTable from '../components/ClassTable.jsx'
import TabNavigation from '../components/TabNavigation.jsx';


const mousikoLykeioData = {
  classA: {
    subjects: {
      core: [
        { name: "Ελληνική Γλώσσα: Αρχαία Ελληνική Γλώσσα και Γραμματεία", hours: 5 },
        { name: "Ελληνική Γλώσσα: Νεοελληνική Γλώσσα και Λογοτεχνία", hours: 4 },
        { name: "Θρησκευτικά", hours: 1 },
        { name: "Ιστορία", hours: 2 },
        { name: "Μαθηματικά: Άλγεβρα", hours: 3 },
        { name: "Μαθηματικά: Γεωμετρία", hours: 2 },
        { name: "Αγγλικά", hours: 2 },
        { name: "Φυσικές Επιστήμες: Φυσική", hours: 2 },
        { name: "Φυσικές Επιστήμες: Χημεία", hours: 2 },
        { name: "Φυσικές Επιστήμες: Βιολογία", hours: 2 },
        { name: "Φυσική Αγωγή", hours: 1 },
        { name: "Πολιτική Παιδεία", hours: 2 },
        { name: "Εφαρμογές Πληροφορικής", hours: 1 }
      ],
      music_core: [
        { name: "Αρμονία", hours: 2 },
        { name: "Ανάπτυξη Ακουστικών Ικανοτήτων*", hours: 1 },
        { name: "Ελληνική Παραδοσιακή Μουσική", hours: 2 },
        { name: "Ιστορία της Μουσικής", hours: 1 },
        { name: "Υποχρεωτικό Ατομικό Μουσικό Όργανο: Πιάνο", hours: 1 },
        { name: "Ατομικό Όργανο Επιλογής", hours: 1 },
        { name: "Μουσικό Σύνολο (Οργανοχρησίας ή άλλου είδους)", hours: 2 },
        { name: "Μουσικό Σύνολο (Μουσικής Έκφρασης και Δημιουργίας)", hours: 2 },
      ],
      music_optional: [
        { name: "Οργανολογία Ελληνικών Παραδοσιακών Οργάνων*", hours: 1 },
        { name: "Οργανολογία Μουσικών Οργάνων Συμφωνικής Ορχήστρας*", hours: 1 },
        { name: "Στοιχεία Αντίστιξης", hours: 1 },
        { name: "Εφαρμογές Πληροφορικής στη Μουσική", hours: 1 },
        { name: "Επεξεργασία Μουσικού Κειμένου με Η/Υ", hours: 1 },
        { name: "Στοιχειώδεις αρχές ηχοληψίας Ι", hours: 1 },
      ],
    },
  },
  classB: {
    subjects: {
      core: [
        { name: "Ελληνική Γλώσσα: Αρχαία Ελληνική Γλώσσα και Γραμματεία", hours: 2 },
        { name: "Ελληνική Γλώσσα: Νεοελληνική Γλώσσα και Λογοτεχνία", hours: 4 },
        { name: "Μαθηματικά: Άλγεβρα", hours: 3 },
        { name: "Μαθηματικά: Γεωμετρία", hours: 2 },
        { name: "Φυσικές Επιστήμες: Φυσική", hours: 2 },
        { name: "Φυσικές Επιστήμες: Χημεία", hours: 2 },
        { name: "Φυσικές Επιστήμες: Βιολογία", hours: 2 },
        { name: "Εισαγωγή στις Αρχές της Επιστήμης των Η/Υ", hours: 2 },
        { name: "Ιστορία", hours: 2 },
        { name: "Φιλοσοφία", hours: 1 },
        { name: "Θρησκευτικά", hours: 1 },
        { name: "Αγγλικά", hours: 2 },
        { name: "Φυσική Αγωγή", hours: 1 }
      ],
      humanities: [
        { name: "Αρχαία Ελληνική Γλώσσα και Γραμματεία", hours: 3 },
        { name: "Λατινικά", hours: 2 }
      ],
      science: [
        { name: "Φυσική", hours: 2 },
        { name: "Μαθηματικά", hours: 3 }
      ],
      music_core: [
        { name: "Αρμονία", hours: 2 },
        { name: "Ανάπτυξη Ακουστικών Ικανοτήτων*", hours: 1 },
        { name: "Ελληνική Παραδοσιακή Μουσική", hours: 2 },
        { name: "Μορφολογία", hours: 1 },
        { name: "Ατομικό Όργανο Επιλογής", hours: 1 },
        { name: "Μουσικό Σύνολο (Οργανοχρησίας ή άλλου είδους)", hours: 2 },
        { name: "Μουσικό Σύνολο (Μουσικής Έκφρασης και Δημιουργίας)", hours: 2 },
      ],
    }
  },
  classC: {
    subjects: {
      core: [
        { name: "Θρησκευτικά", hours: 1 },
        { name: "Νεοελληνική Γλώσσα και Λογοτεχνία", hours: 6 },
        { name: "Ιστορία Γενικής Παιδείας* / Μαθηματικά Γενικής Παιδείας*", hours: 2 },
        { name: "Αγγλικά", hours: 1 },
        { name: "Φυσική Αγωγή", hours: 2 }
      ],
      humanities: [
        { name: "Αρχαία Ελληνικά", hours: 6 },
        { name: "Ιστορία", hours: 6 },
        { name: "Λατινικά", hours: 6 }
      ],
      science: [
        { name: "Μαθηματικά* / Βιολογία*", hours: 6 },
        { name: "Φυσική", hours: 6 },
        { name: "Χημεία", hours: 6 }
      ],
      economics: [
        { name: "Μαθηματικά", hours: 6 },
        { name: "Πληροφορική", hours: 6 },
        { name: "Οικονομία", hours: 6 }
      ],
      music_core: [
        { name: "Αρμονία", hours: 2 },
        { name: "Ανάπτυξη Ακουστικών Ικανοτήτων*", hours: 1 },
        { name: "Ελληνική Παραδοσιακή Μουσική", hours: 2 },
        { name: "Ατομικό Όργανο Επιλογής", hours: 1 },
        { name: "Μουσικό Σύνολο (Οργανοχρησίας ή άλλου είδους)", hours: 2 },
        { name: "Μουσικό Σύνολο (Μουσικής Έκφρασης και Δημιουργίας)", hours: 2 },
      ],
      music_optional: [
        { name: "Αρμονία (Ειδικό)", hours: 2 },
        { name: "Ανάπτυξη (Έλεγχος) Μουσικών Ακουστικών Ικανοτήτων", hours: 2 },
        { name: "Ελληνική Παραδοσιακή Μουσική", hours: 2 },
        { name: "Οργανολογία Μουσικών Οργάνων Συμφωνικής Ορχήστρας", hours: 2 },
        { name: "Οργανολογία Ελληνικών Παραδοσιακών Οργάνων", hours: 2 },
        { name: "Επεξεργασία Μουσικού Κειμένου με Η/Υ", hours: 2 },
        { name: "Ατομικό Όργανο Επιλογής ή και Αναφοράς (Πιάνο - Ταμπουράς ή άλλο", hours: 2 },
        { name: "Ανάλυση Παρτιτούρας Ορχήστρας", hours: 2 },
        { name: "Επεξεργασία Χορικού (Choral)", hours: 2 },
        { name: "Στοιχειώδεις αρχές ηχοληψίας ΙΙ", hours: 2 },
      ],
    }
  }
};


export default function MousikoLykeio() {
  const [activeTab, setActiveTab] = useState('A');

  // Define tabs as data
  const tabs = [
    { id: 'A', label: 'Τάξη Α\'' },
    { id: 'B', label: 'Τάξη Β\'' },
    { id: 'C', label: 'Τάξη Γ\'' }
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Ωρολόγιο Πρόγραμμα Μουσικό Γενικό Λύκειο</h1>

      {/* Using the abstracted TabNavigation component */}
      <TabNavigation
        activeTab={activeTab}
        onTabChange={setActiveTab}
        tabs={tabs}
      />

      {/* Content based on active tab */}
      {activeTab === 'A' && (
        <section>
          <h2 className="text-xl font-semibold mb-4">Μαθήματα Γενικής Παιδείας Α' Τάξης</h2>
          <div className="overflow-x-auto mb-4">
            <ClassTable data={mousikoLykeioData.classA.subjects.core} />
          </div>

          <h2 className="text-xl font-semibold mb-4">Μαθήματα Μουσικής Παιδείας Α' Τάξης</h2>
          <div className="overflow-x-auto mb-4">
            <ClassTable data={mousikoLykeioData.classA.subjects.music_core} />
          </div>

          <div className="text-sm text-gray-600 mb-4">
            <p className="mb-2">- Η «Ανάπτυξη Ακουστικών Ικανοτήτων» περιλαμβάνει τη Γραφή καθ’ υπαγόρευση - Μουσική Ανάγνωση</p>
          </div>

          <h2 className="text-xl font-semibold mb-4">Μαθήματα Μουσικής Παιδείας Α' Τάξης (Επιλογής)</h2>
          <div className="overflow-x-auto mb-4">
            <ClassTable data={mousikoLykeioData.classA.subjects.music_optional} />
          </div>

          <div className="text-sm text-gray-600 mb-4">
            <p className="mb-2">- Τα μαθήματα επιλογής «Οργανολογία Μουσικών Οργάνων Συμφωνικής Ορχήστρας» και «Οργανολογία Ελληνικών Παραδοσιακών Οργάνων» επιλέγονται από μαθητές/μαθήτριες οι οποίοι/ες δεν τα επέλεξαν σε προηγούμενη τάξη του Μουσικού Λυκείου
            </p>
          </div>

        </section>
      )}

      {activeTab === 'B' && (
        <section>

          <h2 className="text-xl font-semibold mb-4">Μαθήματα Γενικής Παιδείας Β' Τάξης</h2>
          <div className="overflow-x-auto mb-4">
            <ClassTable data={mousikoLykeioData.classB.subjects.core} />
          </div>


          <h2 className="text-xl font-semibold mb-4">Μαθήματα Ομάδων Προσανατολισμού Β' Τάξης</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div>
              <h3 className='text-lg text-amber-700 font-semibold mb-4'>Ανθρωπιστικών Σπουδών</h3>
              <div className="overflow-x-auto">
                <ClassTable data={mousikoLykeioData.classB.subjects.humanities} />
              </div>
            </div>

            <div>
              <h3 className='text-lg text-amber-700 font-semibold mb-4'>Θετικών Σπουδών</h3>
              <div className="overflow-x-auto">
                <ClassTable data={mousikoLykeioData.classB.subjects.science} />
              </div>
            </div>
          </div>

          <h2 className="text-xl font-semibold mb-4">Μαθήματα Μουσικής Παιδείας Β' Τάξης</h2>
          <div className="overflow-x-auto mb-4">
            <ClassTable data={mousikoLykeioData.classB.subjects.music_core} />
          </div>

          <div className="text-sm text-gray-600 mb-4">
            <p className="mb-2">- Η «Ανάπτυξη Ακουστικών Ικανοτήτων» περιλαμβάνει τη Γραφή καθ’ υπαγόρευση - Μουσική Ανάγνωση</p>
          </div>

        </section>
      )}

      {activeTab === 'C' && (
        <section>
          <h2 className="text-xl font-semibold mb-4">Μαθήματα Γενικής Παιδείας Γ' Τάξης</h2>
          <div className="overflow-x-auto mb-4">
            <ClassTable data={mousikoLykeioData.classC.subjects.core} />
          </div>

          <div className="text-sm text-gray-600 mb-4">
            <p className="mb-2">* Ιστορία διδάσκονται οι μαθητές/μαθήτριες που επιλέγουν την Ομάδα Προσανατολισμού "Θετικών Σπουδών και Σπουδών Υγείας" ή την Ομάδα Προσανατολισμού "Σπουδών Οικονομίας και Πληροφορικής". Μαθηματικά διδάσκονται οι μαθητές/μαθήτριες που επιλέγουν την Ομάδα Προσανατολισμού "Ανθρωπιστικών Σπουδών".</p>
            <p className="mb-2">* Μαθηματικά για τους/τις μαθητές/μαθήτριες που επιλέγουν το 2ο Επιστημονικό Πεδίο ή Βιολογία για τους/τις μαθητές/μαθήτριες που επιλέγουν το 3ο Επιστημονικό Πεδίο.</p>
          </div>

          <h2 className="text-xl font-semibold mb-4">Μαθήματα Ομάδων Προσανατολισμού Γ' Τάξης</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className='text-lg text-amber-700 font-semibold mb-4'>Ανθρωπιστικών Σπουδών</h3>
              <div className="overflow-x-auto mb-4">
                <ClassTable data={mousikoLykeioData.classC.subjects.humanities} />
              </div>
            </div>

            <div>
              <h3 className='text-lg text-amber-700 font-semibold mb-4'>Θετικών Σπουδών και Σπουδών Υγείας</h3>
              <div className="overflow-x-auto mb-4">
                <ClassTable data={mousikoLykeioData.classC.subjects.science} />
              </div>
              <div className="text-sm text-gray-600 mb-4">
                <p className="mb-2">* Μαθηματικά για τους/τις μαθητές/μαθήτριες που επιλέγουν το 2o Επιστημονικό Πεδίο</p>
                <p className="mb-2">* Βιολογία για τους/τις μαθητές/μαθήτριες που επιλέγουν το 3o Επιστημονικό Πεδίο</p>
              </div>
            </div>

            <div>
              <h3 className='text-lg text-amber-700 font-semibold mb-4'>Σπουδών Οικονομίας και Πληροφορικής</h3>
              <div className="overflow-x-auto mb-4">
                <ClassTable data={mousikoLykeioData.classC.subjects.economics} />
              </div>
            </div>
          </div>

          <h2 className="text-xl font-semibold mb-4">Μαθήματα Μουσικής Παιδείας Γ' Τάξης</h2>
          <div className="overflow-x-auto mb-4">
            <ClassTable data={mousikoLykeioData.classC.subjects.music_core} />
          </div>

          <div className="text-sm text-gray-600 mb-4">
            <p className="mb-2">- Η «Ανάπτυξη Μουσικών Ακουστικών Ικανοτήτων» περιλαμβάνει τη Γραφή καθ’ υπαγόρευση - Μουσική Ανάγνωση και Αρμονία στο πιάνο</p>
          </div>

          <h2 className="text-xl font-semibold mb-4">Μαθήματα Μουσικής Παιδείας Γ' Τάξης (Επιλογής)</h2>
          <div className="overflow-x-auto mb-4">
            <ClassTable data={mousikoLykeioData.classC.subjects.music_optional} />
          </div>

          <div className="text-sm text-gray-600 mb-4">
            <p className="mb-2">- Τα μαθήματα επιλογής «Οργανολογία Μουσικών Οργάνων Συμφωνικής Ορχήστρας» και «Οργανολογία Ελληνικών Παραδοσιακών Οργάνων» επιλέγονται από μαθητές/μαθήτριες οι οποίοι/ες δεν τα επέλεξαν σε προηγούμενη τάξη του Μουσικού Λυκείου
            </p>
          </div>

        </section>
      )}

    </div>
  )
}