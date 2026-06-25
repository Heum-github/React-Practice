import { useRef, useState } from 'react';

export default function ManageProject({ projectData, deleteData }) {

  const task = useRef();
  const [projectTasks, setProjectTasks] = useState([]);

  function addTask() {
    setProjectTasks((prev) => ([...prev, task.current.value]));
    task.current.value = ""
  }

  function clearTask(index){
    setProjectTasks((prev) => prev.filter((_, i) => i != index));
  }

  return (
    <div className="w-[35rem] mt-16">
      
      <header className="pb-4 mb-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {projectData.title}
          </h1>
          <button className="text-stone-600 hover:text-stone-950" onClick={() => deleteData(projectData.title)}>
            Delete
          </button>
        </div>
        
        <p className="mb-4 text-stone-400">
          {projectData.date}
        </p>
        
        {/* 설명에 줄바꿈이 있을 경우를 대비해 whitespace-pre-wrap 적용 */}
        <p className="text-stone-600 whitespace-pre-wrap">
          {projectData.description}
        </p>
      </header>

      <hr className="my-4 border-t-2 border-stone-200" />

      <section className="pt-4">
        <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
        
        <div className="flex items-center gap-4">
          <input 
            type="text"
            ref={task}
            className="w-64 px-2 py-1 rounded-sm bg-stone-200 text-stone-700 focus:outline-none focus:border-stone-600 border border-transparent focus:border-blue-500" 
          />
          <button className="text-stone-700 hover:text-stone-950 font-medium" onClick={addTask}>
            Add Task
          </button>
        </div>

        {projectTasks.map((projectData, index) => (
          <div className="p-4 mt-8 rounded-md bg-stone-100">
            <div className="flex items-center justify-between my-2">
              <span className="text-stone-800">{projectData}</span>
              <button className="text-stone-700 hover:text-red-500" onClick={() =>{clearTask(index)}}>
                Clear
              </button>
            </div>
          </div>
        ))}
        </section>
    </div>
  );
}