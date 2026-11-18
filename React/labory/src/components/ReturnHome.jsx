import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const ReturnHome = () => {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() => navigate("/")}
      aria-label="Voltar para a página inicial"
      className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 hover:border-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition cursor-pointer"
    >
      <ArrowLeft size={20} />
    </button>
  );
};

export default ReturnHome;