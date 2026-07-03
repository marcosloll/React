import { useNavigate, useSearchParams } from "react-router-dom";
import { ChevronLeftIcon } from "lucide-react";
import  Title from "../components/Title.jsx";
function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative">
          <button
            className="absolute left-0 top-0 botton-0 text-slate-100 "
            onClick={() => navigate(-1)}
          >
            <ChevronLeftIcon />
          </button>{" "}
          <Title>Details of the task</Title>
        </div>

        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
          <h2 className="text-xl font-bold text-slate-600">{title}:</h2>
          <p className="text-slate-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
