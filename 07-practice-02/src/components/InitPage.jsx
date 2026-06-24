import imag from "../assets/no-projects.png";

export default function InitPage( {onSelect} ) {

    return (
        <div className="mt-24 text-center w-full flex flex-col items-center justify-center gap-4">
            <img className="w-16 h-16 object-contain mx-auto" src={imag}/>
            <p className="text-xl font-bold text-stone-600">No Project Selected</p>
            <p className="text-stone-400 text-base mb-4">Select a project or get started with a new one</p>
            <button onClick={onSelect} className="px-4 py-2.5 bg-stone-800 text-stone-400 rounded-md text-base font-medium hover:bg-stone-700 hover:text-stone-100 transition-colors">Create new project</button>
        </div>
    );
}
