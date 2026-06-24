export default function ManageProject({ projectData, deleteData }) {



  return (
    // 기존 CreateProject와 너비 및 상단 여백을 통일하여 화면 전환 시 어색함이 없도록 합니다.
    <div className="w-[35rem] mt-16">
      
      {/* 1. 상단 프로젝트 정보 영역 */}
      <header className="pb-4 mb-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {projectData.title}
          </h1>
          <button className="text-stone-600 hover:text-stone-950" onClick={deleteData}>
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

      {/* 2. 구분선 */}
      <hr className="my-4 border-t-2 border-stone-200" />

      {/* 3. Tasks 영역 */}
      <section className="pt-4">
        <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
        
        {/* 입력창과 Add Task 버튼을 가로로 배치 */}
        <div className="flex items-center gap-4">
          <input 
            type="text"
            className="w-64 px-2 py-1 rounded-sm bg-stone-200 text-stone-700 focus:outline-none focus:border-stone-600 border border-transparent focus:border-blue-500" 
          />
          <button className="text-stone-700 hover:text-stone-950 font-medium">
            Add Task
          </button>
        </div>

        {/* 4. Task 목록 영역 (디자인 예시) 
            이후 map 함수를 사용하여 이 div 내부를 반복 렌더링하시면 됩니다. */}
        <div className="p-4 mt-8 rounded-md bg-stone-100">
          <div className="flex items-center justify-between my-2">
            <span className="text-stone-800">Learn the basics</span>
            <button className="text-stone-700 hover:text-red-500">
              Clear
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}