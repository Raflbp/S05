import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Users } from "lucide-react";
import ReturnHome from "../components/ReturnHome";

const Request = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const sala = location.state?.sala;

  const [responsavel, setResponsavel] = useState("");
  const [data, setData] = useState("");
  const [horario, setHorario] = useState("14:00 - 16:00");
  const [quantidade, setQuantidade] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Reserva confirmada para ${sala ? sala.nome : "a sala"} no horário ${horario}!`);
    navigate("/");
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 p-8 md:p-16">
      <div className="max-w-2xl w-full flex flex-col gap-6">
        {/* Caixinha com seta no canto superior */}
        <ReturnHome />

        {/* Cabeçalho com os dados da sala selecionada */}
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-bold tracking-tight text-slate-200">
            {sala ? `Agendar ${sala.nome}` : "Agendar Sala"}
          </h1>
          {sala && (
            <div className="flex items-center gap-1.5 text-sm text-slate-400 mt-1">
              <Users size={16} className="text-slate-400 shrink-0" />
              <span>
                {sala.capacidade} pessoas · {sala.recursos}
              </span>
            </div>
          )}
        </div>

        {/* Formulário de solicitação */}
        <form
          onSubmit={handleSubmit}
          className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col gap-4"
        >
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-slate-300">
              Nome ou Matrícula
            </label>
            <input
              type="text"
              required
              value={responsavel}
              onChange={(e) => setResponsavel(e.target.value)}
              placeholder="Ex: Rafael Bruno"
              className="bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-slate-600 transition"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-slate-300">Data</label>
              <input
                type="date"
                required
                value={data}
                onChange={(e) => setData(e.target.value)}
                className="bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-slate-600 transition"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-slate-300">
                Horário
              </label>
              <select
                value={horario}
                onChange={(e) => setHorario(e.target.value)}
                className="bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-slate-600 transition"
              >
                <option value="08:00 - 10:00">08:00 - 10:00</option>
                <option value="10:00 - 12:00">10:00 - 12:00</option>
                <option value="14:00 - 16:00">14:00 - 16:00</option>
                <option value="16:00 - 18:00">16:00 - 18:00</option>
                <option value="19:00 - 21:00">19:00 - 21:00</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-slate-300">
              Quantidade de pessoas
            </label>
            <input
              type="number"
              min={1}
              max={sala?.capacidade || 6}
              required
              value={quantidade}
              onChange={(e) => setQuantidade(Number(e.target.value))}
              className="bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-slate-600 transition"
            />
          </div>

          <button
            type="submit"
            className="mt-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-3 rounded-xl transition cursor-pointer"
          >
            Confirmar Agendamento
          </button>
        </form>
      </div>
    </main>
  );
};

export default Request;