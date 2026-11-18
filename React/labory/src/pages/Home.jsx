import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BookMarked } from "lucide-react";
import RoomCard from "../components/RoomCard";

const SALAS = [
  { id: 1, nome: "Sala 01", capacidade: 4, recursos: "Lousa", status: "Aberta" },
  { id: 2, nome: "Sala 02", capacidade: 6, recursos: "Lousa e TV", status: "Em uso" },
  { id: 3, nome: "Sala 03", capacidade: 4, recursos: "TV", status: "Aberta" },
  { id: 4, nome: "Sala 04", capacidade: 6, recursos: "Lousa e TV", status: "Aberta" },
];

const Home = () => {
  const [busca, setBusca] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {e.preventDefault();};

  const normalizar = (texto) =>
  texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Remove acentos
    .replace(/([a-z])(\d)/g, "$1 $2") // Separa letras e números ("sala1" -> "sala 1")
    .replace(/\b0+(\d+)/g, "$1")     // Remove zeros à esquerda ("01" -> "1")
    .replace(/\s+/g, " ")            // Remove espaços extras
    .trim();

  const termoBusca = normalizar(busca);

  const salasFiltradas = SALAS.filter(
  (sala) =>
    normalizar(sala.nome).includes(termoBusca) ||
    normalizar(sala.recursos).includes(termoBusca)
);
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-start p-8 md:p-16">
      <div className="max-w-2xl w-full flex flex-col gap-6">
        {/* Branding (Ícone + Título) */}
        <div className="flex flex-col gap-2">
          <BookMarked className="text-slate-400 w-12 h-12 md:w-16 md:h-16" />
          <h1 className="text-3xl font-bold tracking-tight text-slate-200">
            Studies Room
          </h1>
        </div>

        {/* Formulário de Busca */}
        <form onSubmit={handleSubmit} className="flex gap-2 w-full mt-2">
          <input
            type="text"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            placeholder="Search Studies Room"
            className="flex-1 bg-slate-900 border border-slate-800 rounded-lg px-4 py-2.5 text-sm md:text-base text-slate-200 placeholder-slate-500 focus:outline-none focus:border-slate-600 transition"
          />
          <button
            type="submit"
            className="bg-slate-800 hover:bg-slate-600 text-slate-200 font-semibold px-6 py-2.5 rounded-lg text-sm md:text-base border border-slate-700 hover:border-slate-600 transition cursor-pointer"
          >
            Buscar
          </button>
        </form>

        {/* Mensagem de Feedback */}
        <p className="text-sm md:text-base text-slate-500 font-medium mt-1">
          Salas
        </p>

        {/* Lista de Cards das Salas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {salasFiltradas.map((sala) => (
            <RoomCard
              key={sala.id}
              nome={sala.nome}
              capacidade={sala.capacidade}
              recursos={sala.recursos}
              status={sala.status}
              onAgendar={() => navigate("/request", { state: { sala } })}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;