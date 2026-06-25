import { useRef, useState } from 'react'

export default function CreateProject( {onCreate} ) {

    const title = useRef();
    const description = useRef();
    const date = useRef();

    // save를 누르면 위 내용을 app으로 보냄.
    function handleCreateProject() {
        const newProject = {
          title: title.current.value,
          description: description.current.value,
          date: date.current.value
        };
        onCreate(newProject);
    }


    function handleCancel() {
        title.current.value = "";
        description.current.value = "";
        date.current.value = "";        
    }

    return (
        // 전체 폼의 최대 너비를 지정해 중앙/좌측 정렬을 깔끔하게 유지합니다 (max-w-xl)
        <div className="w-[35rem] mt-16">
        {/* 상단 버튼 영역: 우측 정렬 및 간격 조절 */}
        <div className="flex items-center justify-end gap-4 my-4">
            <button onClick = {handleCancel} className="text-stone-800 hover:text-stone-950 px-4 py-2 rounded-md font-medium">
            Cancel
            </button>
            <button onClick = {handleCreateProject} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950 font-medium shadow-sm">
            Save
            </button>
        </div>

        {/* 입력 필드 영역: 세로로 나열되도록 flex flex-col 사용 */}
        <div className="flex flex-col gap-4">
            <p className="flex flex-col gap-1">
            <label className="text-sm font-bold uppercase text-stone-500">TITLE</label>
            <input ref={title} className="w-full p-2 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" />
            </p>

            <p className="flex flex-col gap-1">
            <label className="text-sm font-bold uppercase text-stone-500">DESCRIPTION</label>
            {/* 설명 창은 여러 줄 입력이 가능하도록 textarea로 바꾸는 것을 추천합니다 (이미지상으로도 약간 두껍게 설정되어 있음) */}
            <textarea ref={description} className="w-full p-2 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600 min-h-[5rem]" />
            </p>

            <p className="flex flex-col gap-1">
            <label className="text-sm font-bold uppercase text-stone-500">DUE DATE</label>
            <input ref={date} className="w-full p-2 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" type="date"/>
            </p>
        </div>
        </div>
    );
}