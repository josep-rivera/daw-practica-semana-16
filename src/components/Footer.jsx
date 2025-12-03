const Footer = () => {
  return (
    <footer className="border-t bg-white mt-4">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm text-slate-500">
        <p>
          © {new Date().getFullYear()} PokeDex Explorer. Todos los derechos
          reservados.
        </p>
        <p className="mt-1 sm:mt-0">Hecho para la Evaluación 4 – DAW.</p>
      </div>
    </footer>
  );
};

export default Footer;
