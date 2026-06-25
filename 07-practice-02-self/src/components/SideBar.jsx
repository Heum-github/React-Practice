export default function SideBar( { onSelect, onManage, projectData }) {

    function handleManagedData(){
        onManage()
    }

    return (
    <aside className="w-1/3 max-w-xs h-full bg-stone-900 text-stone-50 px-8 py-16 rounded-r-2xl flex flex-col gap-8">
      <h2 className="font-bold uppercase md:text-xl text-stone-200 tracking-wider">YOUR PROJECTS</h2>
      <div>
        <button 
          className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-800 text-stone-400 hover:bg-stone-700 hover:text-stone-100 transition-colors"
          onClick={onSelect}    
        >
          + Add Project
        </button>
      </div>
        <h3 className="font-bold uppercase md:text-xl text-stone-200 tracking-wider"></h3>
        <ul className="mt-8 flex flex-col gap-2 border-t border-stone-800 pt-8">
        {projectData.map((project, index) => (
          <li key={index}>
            <button 
                className="w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800 transition-colors"
                onClick={() => onManage(project)}
            >
              {project.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
    )
};