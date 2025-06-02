import React, { useState } from 'react'
import ClassTable from '../components/ClassTable.jsx'
import TabNavigation from '../components/TabNavigation.jsx';
import SchoolHeader from '../components/SchoolHeader.jsx';
import { mousikoLykeioData } from '../data/gelData.js';

export default function LykeioMousiko() {
  const [activeTab, setActiveTab] = useState('A');

  // Define tabs as data
  const tabs = [
    { id: 'A', label: 'Τάξη Α\'' },
    { id: 'B', label: 'Τάξη Β\'' },
    { id: 'C', label: 'Τάξη Γ\'' }
  ];

  return (
    <div className="p-4">

      <SchoolHeader
        schoolName="Μουσικό Γενικό Λύκειο"
        references={[
          { text: "ΦΕΚ ΤΕΥΧΟΣ Β 3523 25-08-2020", url: "https://search.et.gr/el/fek/?fekId=610629" },
          { text: "ΦΕΚ ΤΕΥΧΟΣ Β 3570 28-08-2020", url: "https://search.et.gr/el/fek/?fekId=577145" },
          { text: "ΦΕΚ ΤΕΥΧΟΣ Β 5643 03-12-2021", url: "https://search.et.gr/el/fek/?fekId=581585" }
        ]}
      />

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

          <h2 className="text-xl font-semibold mb-4">Μαθήματα Μουσικής Παιδείας Α' Τάξης (Επιλογής 1 από 6)</h2>
          <div className="overflow-x-auto mb-4">
            <ClassTable data={mousikoLykeioData.classA.subjects.music_optional} />
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
            <p className="mb-2">- 5 ώρες για το κυρίως μάθημα και 1 ώρα για επίλυση αποριών, ανακεφαλαίωση κ.λπ.
            </p>
            <p className="mb-2">- Ιστορία διδάσκονται οι μαθητές/μαθήτριες που επιλέγουν την Ομάδα Προσανατολισμού "Θετικών Σπουδών και Σπουδών Υγείας" ή την Ομάδα Προσανατολισμού "Σπουδών Οικονομίας και Πληροφορικής". Μαθηματικά διδάσκονται οι μαθητές/μαθήτριες που επιλέγουν την Ομάδα Προσανατολισμού "Ανθρωπιστικών Σπουδών".</p>
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

          <h2 className="text-xl font-semibold mb-4">Μαθήματα Μουσικής Παιδείας Γ' Τάξης (Επιλογής 1 από 10)</h2>
          <div className="overflow-x-auto mb-4">
            <ClassTable data={mousikoLykeioData.classC.subjects.music_optional} />
          </div>

          <div className="text-sm text-gray-600 mb-4">
            <p className="mb-2">- Τα μαθήματα επιλογής «Οργανολογία Μουσικών Οργάνων Συμφωνικής Ορχήστρας» και «Οργανολογία Ελληνικών Παραδοσιακών Οργάνων» επιλέγονται από μαθητές/μαθήτριες οι οποίοι/ες δεν τα επέλεξαν σε προηγούμενη τάξη του Μουσικού Λυκείου
            </p>
            <p className="mb-2">- Ανάλογα με τις δυνατότητες του σχολείου δύναται να προσφέρεται το ατομικό όργανο επιλογής για δύο επιπλέον ώρες ή η μία για ατομικό όργανο επιλογής και το ατομικό όργανο αναφοράς Πιάνο ή Ταμπουράς (ή άλλο τοπικό όργανο αναφοράς ελληνικής παραδοσιακής μουσικής)
            </p>
          </div>

        </section>
      )}

    </div>
  )
}