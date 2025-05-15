
function Nipiagogio() {
  // Data from the kindergarten weekly schedule (ΕΩΠ Νηπιαγωγείου)
  const timetableData = [
    {
      time: "7:45 – 8:30",
      duration: "45'",
      activity: "Πρόωρη υποδοχή μαθητριών και μαθητών (προαιρετικό πρόγραμμα)"
    },
    {
      time: "08:15-8:30",
      duration: "",
      activity: "Υποδοχή μαθητριών και μαθητών"
    },
    {
      time: "08:30-09:15",
      duration: "1η διδακτική ώρα - 45'",
      activity: "Ελεύθερο παιχνίδι - ενασχόληση στα κέντρα μάθησης (γωνιές)"
    },
    {
      time: "09:15-10:00",
      duration: "2η διδακτική ώρα - 45'",
      activity: "Οργανωμένες δραστηριότητες και διερευνήσεις με βάση το ΔΕΠΠΣ-ΑΠΣ ή Εργαστήρια Δεξιοτήτων, πρόγευμα"
    },
    {
      time: "10:00 – 10:45",
      duration: "Διάλειμμα",
      activity: ""
    },
    {
      time: "10:45-11:30",
      duration: "3η διδακτική ώρα - 45'",
      activity: "Οργανωμένες δραστηριότητες και διερευνήσεις με βάση το ΔΕΠΠΣ-ΑΠΣ ή Εργαστήρια Δεξιοτήτων"
    },
    {
      time: "11:30-12:10",
      duration: "4η διδακτική ώρα – 40'",
      activity: "Ελεύθερο παιχνίδι-ενασχόληση στα κέντρα μάθησης, αναστροφοδότηση (γωνιές)"
    },
    {
      time: "12:10-12:45",
      duration: "5η διδακτική ώρα - 35'",
      activity: "Οργανωμένες δραστηριότητες και διερευνήσεις με βάση το ΔΕΠΠΣ-ΑΠΣ ή Εργαστήρια Δεξιοτήτων – Αναστοχασμός - Αναστροφοδότηση-Προγραμματισμός της επόμενης ημέρας και προγραμματισμός επόμενου εργαστηρίου"
    },
    {
      time: "12:45-13:00",
      duration: "",
      activity: "Προετοιμασία για αποχώρηση"
    },
    {
      time: "13:00",
      duration: "",
      activity: "Αποχώρηση"
    }
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Νηπιαγωγείο</h1>
      <h2 className="text-2xl font-semibold mb-4">Εβδομαδιαίο Ωρολόγιο Πρόγραμμα (ΕΩΠ) Νηπιαγωγείου</h2>
      
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-left">ΩΡΕΣ</th>
              <th className="border border-gray-300 px-4 py-2 text-left">ΔΙΑΡΚΕΙΑ</th>
              <th className="border border-gray-300 px-4 py-2 text-left">ΔΡΑΣΤΗΡΙΟΤΗΤΑ</th>
            </tr>
          </thead>
          <tbody>
            {timetableData.map((row, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="border border-gray-300 px-4 py-2">{row.time}</td>
                <td className="border border-gray-300 px-4 py-2">{row.duration}</td>
                <td className="border border-gray-300 px-4 py-2">{row.activity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-6 text-xs text-gray-500">
        <p>Τεύχος Β' 3791/13.08.2021</p>
        <p>ΕΦΗΜΕΡΙΔΑ ΤΗΣ ΚΥΒΕΡΝΗΣΕΩΣ</p>
        <p>Η αλλαγή της διδακτικής ώρας δεν σημαίνει αλλαγή δραστηριότητας. Ο/Η Νηπιαγωγός έχει την ευελιξία να προσαρμόζει το χρόνο των οργανωμένων και ελεύθερων δραστηριοτήτων σύμφωνα με το συγκεκριμένο πλαίσιο της τάξης.</p>
      </div>
    </div>
  );
}

export default Nipiagogio;