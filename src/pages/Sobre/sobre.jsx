import Navbar from "../../components/Navbar/Navbar.jsx";

function Sobre() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1600&auto=format&fit=crop"
          alt="Ônibus rodando na estrada"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Viação Resendense
          </h1>

          <p className="text-lg md:text-2xl text-gray-200 leading-relaxed">
            Conectando cidades do Sul Fluminense com segurança, conforto e
            tradição no transporte intermunicipal.
          </p>
        </div>
      </section>

      {/* Sobre */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-blue-900 mb-6 border-b-4 border-blue-700 inline-block pb-2">
            Nossa História
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            A Viação Resendense atua no transporte intermunicipal no Sul
            Fluminense, oferecendo mobilidade para milhares de passageiros todos
            os dias. Nossa missão é garantir viagens seguras, confortáveis e
            acessíveis, conectando pessoas e cidades da região.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Com uma frota moderna e profissionais qualificados, buscamos sempre
            proporcionar uma experiência de qualidade para nossos clientes,
            investindo constantemente em tecnologia, manutenção e atendimento.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            Ao longo dos anos, nos tornamos referência em transporte rodoviário
            regional, contribuindo para o desenvolvimento e integração das
            cidades do estado do Rio de Janeiro.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://onibusbrasil.com/Davi%20Mendes/14059814?context=company"
            alt="Ônibus da empresa"
            className="rounded-2xl shadow-lg h-64 w-full object-cover hover:scale-105 transition duration-300"
          />

          <img
            src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=900&auto=format&fit=crop"
            alt="Ônibus em viagem"
            className="rounded-2xl shadow-lg h-64 w-full object-cover hover:scale-105 transition duration-300 mt-10"
          />

          <img
            src="https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?q=80&w=900&auto=format&fit=crop"
            alt="Interior de ônibus"
            className="rounded-2xl shadow-lg h-64 w-full object-cover hover:scale-105 transition duration-300"
          />

          <img
            src="https://images.unsplash.com/photo-1509749837427-ac94a2553d0e?q=80&w=900&auto=format&fit=crop"
            alt="Ônibus na estrada"
            className="rounded-2xl shadow-lg h-64 w-full object-cover hover:scale-105 transition duration-300 mt-10"
          />
        </div>
      </section>

      {/* Valores */}
      <section className="bg-blue-900 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Nossos Valores
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:-translate-y-2 transition duration-300">
              <h3 className="text-2xl font-semibold mb-4">Segurança</h3>
              <p className="text-gray-200 leading-relaxed">
                Priorizamos a segurança dos passageiros com manutenção rigorosa
                e motoristas experientes.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:-translate-y-2 transition duration-300">
              <h3 className="text-2xl font-semibold mb-4">Conforto</h3>
              <p className="text-gray-200 leading-relaxed">
                Nossa frota oferece conforto e praticidade para tornar cada
                viagem mais agradável.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:-translate-y-2 transition duration-300">
              <h3 className="text-2xl font-semibold mb-4">Compromisso</h3>
              <p className="text-gray-200 leading-relaxed">
                Trabalhamos diariamente para oferecer pontualidade, qualidade e
                excelência no atendimento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-8 text-center">
        <p>
          © 2026 Viação Resendense — Transporte Intermunicipal no Sul
          Fluminense.
        </p>
      </footer>
    </div>
  );
}

export default Sobre;
