import SideBar from "./components/SideBar";
import CreateProject from "./components/CreateProject";
import ManageProject from "./components/ManageProject";
import InitPage from "./components/InitPage";
import { useState } from "react";


function App() {
  const [isProjectSelected, setIsProjectSelected] = useState(false);
  const [isCreateProjectSelected, setIsCreateProjectSelected] = useState(false);  
  const [projectData, setProjectData] = useState([]);
  const [managedProject, setManagedProject] = useState({});

  function handleAddProject() {
    setIsCreateProjectSelected(true);
    setIsProjectSelected(true);
  }

  function handleProjectData(newProject) {
    setProjectData((prev) => ([
      ...prev,
      newProject
    ]));
    setIsCreateProjectSelected(false);
    setIsProjectSelected(false);
  }

  function manageProject(project) {
    setIsProjectSelected(true);
    setManagedProject(project);
  }

  function deleateProject() {
    
  }

  return (
    // mt-8은 상단 여백을 위해 추가했습니다. 이미지처럼 상단에 딱 붙이려면 mt-8을 지우셔도 됩니다.
    <div className="flex h-screen w-screen bg-stone-50 pt-8">
      <SideBar onSelect={handleAddProject} onManage={manageProject} projectData={projectData}/>
      {/* 본문 영역이 남은 너비를 꽉 채우도록 flex-1을 줍니다 */}
      <main className="flex-1 px-12 py-4">
        {isCreateProjectSelected ? <CreateProject onCreate={handleProjectData}/> : (isProjectSelected ? <ManageProject projectData={managedProject} deleteData={deleateProject}/> : <InitPage onSelect={handleAddProject}/> )}          
      </main>
    </div>
  );
}

export default App;
