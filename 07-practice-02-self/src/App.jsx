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

  function deleateProject(projectData) {
      setProjectData((prev) => prev.filter((item) => item.title !== projectData));
      setIsProjectSelected(false);
  }

  return (
    <div className="flex h-screen w-screen bg-stone-50 pt-8">
      <SideBar onSelect={handleAddProject} onManage={manageProject} projectData={projectData}/>
      <main className="flex-1 px-12 py-4">
        {isCreateProjectSelected ? <CreateProject onCreate={handleProjectData}/> : (isProjectSelected ? <ManageProject projectData={managedProject} deleteData={deleateProject}/> : <InitPage onSelect={handleAddProject}/> )}          
      </main>
    </div>
  );
}

export default App;
