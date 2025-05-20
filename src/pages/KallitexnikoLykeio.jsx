import React, { useState } from 'react'
import ClassTable from '../components/ClassTable.jsx'
import TabNavigation from '../components/TabNavigation.jsx';


const kallitexnikoLykeioData = {
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
        { name: "Εφαρμογές Πληροφορικής", hours: 2 }
      ],
      art: [
        { name: "Ζωγραφική", hours: 3 },
        { name: "Γλυπτική", hours: 3 },
        { name: "Χαρακτική", hours: 2 },
        { name: "Φωτογραφία", hours: 1 },
        { name: "Ιστορία Τέχνης", hours: 1 },
      ],
      theatre: [
        { name: "Κινησιολογία", hours: 1 },
        { name: "Υποκριτική", hours: 3 },
        { name: "Φωνητική - Ορθοφωνία", hours: 1 },
        { name: "Δραματοποίηση κειμένου", hours: 2 },
        { name: "Ιστορία Κινηματογράφου", hours: 1 },
        { name: "Αισθητική Κινηματογράφου - Βασικές Αρχές Σκηνοθεσίας Κινηματογράφου", hours: 2 },
      ],
      dance: [
        { name: "Κλασικός Χορός", hours: 4 },
        { name: "Τεχνικές Σύγχρονου χορού", hours: 4 },
        { name: "Ρυθμός - Μετρική - Κίνηση", hours: 2 },
      ],
    }
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
      art: [
        { name: "Ζωγραφική", hours: 4 },
        { name: "Γλυπτική", hours: 2 },
        { name: "Χαρακτική", hours: 1 },
        { name: "Πολυμέσα", hours: 1 },
        { name: "Ιστορία Τέχνης", hours: 1 },
      ],
      theatre: [
        { name: "Κινησιολογία - Σωματική Έκφραση", hours: 1 },
        { name: "Υποκριτική", hours: 2 },
        { name: "Στοιχεία Σκηνοθεσίας Θεάτρου", hours: 2 },
        { name: "Φωνητική - Τραγούδι", hours: 1 },
        { name: "Ιστορία Θεάτρου - Ιστορία Κινηματογράφου", hours: 1 },
        { name: "Αισθητική Κινηματογράφου - Βασικές Αρχές Σκηνοθεσίας Κινηματογράφου", hours: 2 },
      ],
      dance: [
        { name: "Κλασικός Χορός", hours: 3 },
        { name: "Τεχνικές Σύγχρονου χορού", hours: 4 },
        { name: "Ρυθμός - Μετρική - Κίνηση", hours: 1 },
        { name: "Ιστορία Τέχνης", hours: 1 },
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
        { name: "Φυσική Αγωγή", hours: 1 }
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
      art: [
        { name: "Ζωγραφική", hours: 3 },
        { name: "Γλυπτική", hours: 2 },
        { name: "Χαρακτική", hours: 2 },
        { name: "Βιομηχανικό Σχέδιο", hours: 1 },
        { name: "Εργαστήρια Πολυμέσα", hours: 1 },
      ],
      theatre: [
        { name: "Κινησιολογία - Σωματική Έκφραση", hours: 1 },
        { name: "Υποκριτική", hours: 2 },
        { name: "Στοιχεία Σκηνοθεσίας Θεάτρου", hours: 2 },
        { name: "Ιστορία Θεάτρου", hours: 1 },
        { name: "Φωνητική - Τραγούδι", hours: 1 },
        { name: "Αισθητική Κινηματογράφου - Βασικές Αρχές Σκηνοθεσίας Κινηματογράφου", hours: 2 },
      ],
      dance: [
        { name: "Κλασικός Χορός", hours: 3 },
        { name: "Τεχνικές Σύγχρονου χορού", hours: 3 },
        { name: "Κινησιολογία", hours: 3 },
      ],
      optional: [
        { name: "Ελεύθερο Σχέδιο", hours: 2 },
        { name: "Γραμμικό Σχέδιο", hours: 2 },
        { name: "Μέσα Μαζικής Επικοινωνίας (ΜΜΕ)", hours: 2 },
        { name: "Χορός για την Κάμερα (Video Dance)", hours: 2 },
        { name: "Κεραμική", hours: 2 },
        { name: "Εργαστήρι Μάσκας και Θεατρικών εξαρτημάτων", hours: 2 },
        { name: "Σκηνογραφία - Ενδυματολογία", hours: 2 },
        { name: "Ντοκιμαντέρ", hours: 2 },
        { name: "Θεωρία Τέχνης - Στοιχεία Αισθητικής", hours: 2 },
        { name: "Φωτισμός θεάτρου", hours: 2 },
        { name: "Δημιουργική γραφή", hours: 2 },
        { name: "Κινηματογραφική Τεχνολογία - Φωτογραφία Κινηματογράφου", hours: 2 }
      ]
    }
  }
};



export default function KallitexnikoLykeio() {
  const [activeTab, setActiveTab] = useState('A');

  // Define tabs as data
  const tabs = [
    { id: 'A', label: 'Τάξη Α\'' },
    { id: 'B', label: 'Τάξη Β\'' },
    { id: 'C', label: 'Τάξη Γ\'' }
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Ωρολόγιο Πρόγραμμα Καλλιτεχνικό Γενικό Λύκειο</h1>


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
            <ClassTable data={kallitexnikoLykeioData.classA.subjects.core} />
          </div>


          <h2 className="text-xl font-semibold mb-4">Μαθήματα Καλλιτεχνικής Παιδείας Α' Τάξης</h2>

          {/* Grid layout for artistic direction tables */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className='text-lg text-amber-700 font-semibold mb-4'>Κατεύθυνση Εικαστικών Τεχνών</h3>
              <div className="overflow-x-auto">
                <ClassTable data={kallitexnikoLykeioData.classA.subjects.art} />
              </div>
            </div>

            <div>
              <h3 className='text-lg text-amber-700 font-semibold mb-4'>Κατεύθυνση Θεάτρου - Κινηματογράφου</h3>
              <div className="overflow-x-auto">
                <ClassTable data={kallitexnikoLykeioData.classA.subjects.theatre} />
              </div>
            </div>

            <div>
              <h3 className='text-lg text-amber-700 font-semibold mb-4'>Κατεύθυνση Χορού</h3>
              <div className="overflow-x-auto">
                <ClassTable data={kallitexnikoLykeioData.classA.subjects.dance} />
              </div>
            </div>
          </div>

        </section>
      )}

      {activeTab === 'B' && (
        <section>

          <h2 className="text-xl font-semibold mb-4">Μαθήματα Γενικής Παιδείας Β' Τάξης</h2>
          <div className="overflow-x-auto mb-4">
            <ClassTable data={kallitexnikoLykeioData.classB.subjects.core} />
          </div>


          <h2 className="text-xl font-semibold mb-4">Μαθήματα Ομάδων Προσανατολισμού Β' Τάξης</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div>
              <h3 className='text-lg text-amber-700 font-semibold mb-4'>Ανθρωπιστικών Σπουδών</h3>
              <div className="overflow-x-auto">
                <ClassTable data={kallitexnikoLykeioData.classB.subjects.humanities} />
              </div>
            </div>

            <div>
              <h3 className='text-lg text-amber-700 font-semibold mb-4'>Θετικών Σπουδών</h3>
              <div className="overflow-x-auto">
                <ClassTable data={kallitexnikoLykeioData.classB.subjects.science} />
              </div>
            </div>
          </div>

          <h2 className="text-xl font-semibold mb-4">Μαθήματα Καλλιτεχνικής Παιδείας Β' Τάξης</h2>
          {/* Grid layout for artistic direction tables */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className='text-lg text-amber-700 font-semibold mb-4'>Κατεύθυνση Εικαστικών Τεχνών</h3>
              <div className="overflow-x-auto">
                <ClassTable data={kallitexnikoLykeioData.classB.subjects.art} />
              </div>
            </div>

            <div>
              <h3 className='text-lg text-amber-700 font-semibold mb-4'>Κατεύθυνση Θεάτρου - Κινηματογράφου</h3>
              <div className="overflow-x-auto">
                <ClassTable data={kallitexnikoLykeioData.classB.subjects.theatre} />
              </div>
            </div>

            <div>
              <h3 className='text-lg text-amber-700 font-semibold mb-4'>Κατεύθυνση Χορού</h3>
              <div className="overflow-x-auto">
                <ClassTable data={kallitexnikoLykeioData.classB.subjects.dance} />
              </div>
            </div>
          </div>



        </section>
      )}

      {activeTab === 'C' && (
        <section>
          <h2 className="text-xl font-semibold mb-4">Μαθήματα Γενικής Παιδείας Γ' Τάξης</h2>
          <div className="overflow-x-auto mb-4">
            <ClassTable data={kallitexnikoLykeioData.classC.subjects.core} />
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
                <ClassTable data={kallitexnikoLykeioData.classC.subjects.humanities} />
              </div>
            </div>

            <div>
              <h3 className='text-lg text-amber-700 font-semibold mb-4'>Θετικών Σπουδών και Σπουδών Υγείας</h3>
              <div className="overflow-x-auto mb-4">
                <ClassTable data={kallitexnikoLykeioData.classC.subjects.science} />
              </div>
              <div className="text-sm text-gray-600 mb-4">
                <p className="mb-2">* Μαθηματικά για τους/τις μαθητές/μαθήτριες που επιλέγουν το 2o Επιστημονικό Πεδίο</p>
                <p className="mb-2">* Βιολογία για τους/τις μαθητές/μαθήτριες που επιλέγουν το 3o Επιστημονικό Πεδίο</p>
              </div>
            </div>

            <div>
              <h3 className='text-lg text-amber-700 font-semibold mb-4'>Σπουδών Οικονομίας και Πληροφορικής</h3>
              <div className="overflow-x-auto mb-4">
                <ClassTable data={kallitexnikoLykeioData.classC.subjects.economics} />
              </div>
            </div>
          </div>

          <h2 className="text-xl font-semibold mb-4">Μαθήματα Καλλιτεχνικής Παιδείας Γ' Τάξης</h2>
          {/* Grid layout for artistic direction tables */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className='text-lg text-amber-700 font-semibold mb-4'>Κατεύθυνση Εικαστικών Τεχνών</h3>
              <div className="overflow-x-auto">
                <ClassTable data={kallitexnikoLykeioData.classC.subjects.art} />
              </div>
            </div>

            <div>
              <h3 className='text-lg text-amber-700 font-semibold mb-4'>Κατεύθυνση Θεάτρου - Κινηματογράφου</h3>
              <div className="overflow-x-auto">
                <ClassTable data={kallitexnikoLykeioData.classC.subjects.theatre} />
              </div>
            </div>

            <div>
              <h3 className='text-lg text-amber-700 font-semibold mb-4'>Κατεύθυνση Χορού</h3>
              <div className="overflow-x-auto">
                <ClassTable data={kallitexnikoLykeioData.classC.subjects.dance} />
              </div>
            </div>
          </div>

          <h2 className="text-xl font-semibold mb-4">Μαθήματα Επιλογής Γ' Τάξης</h2>
          <div className="overflow-x-auto mb-4">
            <ClassTable data={kallitexnikoLykeioData.classC.subjects.optional} />
          </div>

        </section>
      )}

    </div>
  )
}