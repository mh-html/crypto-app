function AppLayout({ children }) {
  return (
    <div className="min-h-screen">
      <header className="flex justify-between items-center py-3 px-8 bg-blue-900 rounded-md m-8 text-white">
        <h1 className="text-3xl font-bold">Crypto Msein</h1>
        <p className="text-xl font-semibold">Mohammad Hossein Fakouri</p>
      </header>
      {children}
      <footer className="border-t">
        <p className="text-xl font-semibold text-white text-center py-3">
          Developed by MSEIN with ♥
        </p>
      </footer>
    </div>
  );
}

export default AppLayout;
