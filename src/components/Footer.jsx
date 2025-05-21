function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white p-4 text-center text-gray-500 text-sm border-t">
      <p>© {currentYear} Ωρολόγια Προγράμματα. All rights reserved.</p>
    </footer>
  )
}

export default Footer