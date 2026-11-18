import { Users, ChevronRight } from "lucide-react";

const RoomCard = ({ nome, capacidade, recursos, status = "Aberta", onAgendar }) => {
  const isAberta = status === "Aberta";

  return (
    <div className="bg-slate-900 rounded-2xl border border-slate-100/80 shadow-sm p-5 flex flex-col justify-between transition hover:shadow-md">
      {/* Título e informações da sala */}
      <div>
        <h2 className="text-lg font-bold text-slate-100">{nome}</h2>
        <div className="flex items-center gap-1.5 text-sm text-slate-500 mt-1">
          <Users size={16} className="text-slate-400 shrink-0" />
          <span>
            {capacidade} pessoas · {recursos}
          </span>
        </div>
      </div>

      {/* Rodapé com selo de status e botão */}
      <div className="flex items-center justify-between mt-6">
        <span
          className={`text-xs font-semibold px-3 py-1.5 rounded-xl ${
            isAberta
              ? "bg-emerald-50 text-emerald-700"
              : "bg-amber-50 text-amber-700"
          }`}
        >
          {status}
        </span>

        <button
          type="button"
          onClick={onAgendar}
          disabled={!isAberta}
          className={`text-sm font-semibold px-4 py-2 rounded-xl flex items-center gap-1 transition ${
            isAberta
              ? "bg-blue-600 hover:bg-blue-700 text-white cursor-pointer"
              : "bg-slate-200 text-slate-400 cursor-not-allowed"
          }`}
        >
          Agendar
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default RoomCard;